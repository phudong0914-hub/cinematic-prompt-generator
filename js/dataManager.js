/**
 * dataManager.js
 * ──────────────
 * Responsible ONLY for fetching, parsing, and filtering the prompt data.
 * No DOM access. No rendering. Pure data layer.
 */

/** @type {import('../types').Prompt[]} */
let allPrompts = [];

/**
 * Fetches and parses the prompts JSON file.
 * Must be called once before any other function in this module.
 *
 * @returns {Promise<import('../types').Prompt[]>} The full list of prompts.
 */
export async function loadPrompts() {
  const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  const url = base.replace(/\/$/, '') + '/data/prompts.json';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load prompts: ${response.status} ${response.statusText}`);
  }

  allPrompts = await response.json();
  return allPrompts;
}

/**
 * Returns all loaded prompts without filtering.
 *
 * @returns {import('../types').Prompt[]}
 */
export function getAllPrompts() {
  return allPrompts;
}

/**
 * Returns a sorted, deduplicated list of category strings.
 *
 * @returns {string[]}
 */
export function getCategories() {
  const cats = allPrompts.map((p) => p.category);
  return [...new Set(cats)].sort();
}

/**
 * Helper to remove Vietnamese diacritics for smart search
 */
function removeVietnameseTones(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

/**
 * Filters prompts by query, category, and difficulty.
 * Pass 'favorites' to category to get favorite prompts.
 *
 * @param {string} [query='']
 * @param {string} [category='all']
 * @param {string} [difficulty='all']
 * @returns {import('../types').Prompt[]}
 */
export function filterPrompts(query = '', category = 'all', difficulty = 'all') {
  const q = removeVietnameseTones(query.toLowerCase().trim());
  return allPrompts.filter((p) => {
    let matchQuery = true;
    if (q) {
      const textToSearch = [
        p.name,
        p.definition,
        p.whenToUse,
        p.bestPractices,
        ...(p.commonMistakes || [])
      ].join(' ').toLowerCase();
      
      const normalizedText = removeVietnameseTones(textToSearch);
      matchQuery = normalizedText.includes(q);
    }
    
    const matchCat = category === 'all' ? true : (category === 'favorites' ? isFavorite(p.id) : p.category === category);
    const matchDiff = difficulty === 'all' ? true : p.difficulty === difficulty;
    
    return matchQuery && matchCat && matchDiff;
  });
}

/**
 * LocalStorage handling for Favorites
 */
export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('cinematique_favorites')) || [];
  } catch {
    return [];
  }
}

export function saveFavorites(favs) {
  localStorage.setItem('cinematique_favorites', JSON.stringify(favs));
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}

export function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1);
  else favs.push(id);
  saveFavorites(favs);
  return favs.includes(id);
}

/**
 * LocalStorage handling for AI Config
 */
export function getAIConfig() {
  const defaultConfig = {
    provider: 'gemini',
    apiKeys: {},
    modelNames: {},
    rotateEnabled: false,
    lastRotationIndex: 0,
    targetTool: 'midjourney'
  };
  try {
    const raw = localStorage.getItem('cinematique_ai_config');
    if (!raw) return defaultConfig;
    
    let parsed = JSON.parse(raw);
    
    // Migration from old format
    if (parsed.apiKey !== undefined && !parsed.apiKeys) {
       parsed.apiKeys = {};
       if (parsed.apiKey) {
          parsed.apiKeys[parsed.provider || 'gemini'] = parsed.apiKey;
       }
       parsed.modelNames = {};
       if (parsed.modelName) {
          parsed.modelNames[parsed.provider || 'gemini'] = parsed.modelName;
       }
       delete parsed.apiKey;
       delete parsed.modelName;
    }
    
    return { ...defaultConfig, ...parsed };
  } catch {
    return defaultConfig;
  }
}

export function saveAIConfig(config) {
  localStorage.setItem('cinematique_ai_config', JSON.stringify(config));
}

/**
 * LocalStorage handling for Prompt History (Max 30 items)
 */
export function getPromptHistory() {
  try {
    const raw = localStorage.getItem('cinematique_prompt_history');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePromptHistory(historyArray) {
  try {
    localStorage.setItem('cinematique_prompt_history', JSON.stringify(historyArray.slice(0, 30)));
  } catch (err) {
    console.warn("Failed to save prompt history:", err);
  }
}

export function addPromptToHistory(item) {
  if (!item || (!item.imagePrompt && !item.videoPrompt)) return;
  const history = getPromptHistory();
  
  // Deduplicate identical top item
  if (history.length > 0) {
    const top = history[0];
    if (top.imagePrompt === item.imagePrompt && top.videoPrompt === item.videoPrompt) {
      return;
    }
  }

  const newItem = {
    id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    timestamp: new Date().toISOString(),
    title: item.title || 'Master Prompt',
    imagePrompt: item.imagePrompt || '',
    videoPrompt: item.videoPrompt || '',
    subject: item.subject || '',
    negative: item.negative || ''
  };

  const updated = [newItem, ...history].slice(0, 30);
  savePromptHistory(updated);
}

export function clearPromptHistory() {
  localStorage.removeItem('cinematique_prompt_history');
}

/**
 * Finds a single prompt by its id.
 *
 * @param {string} id
 * @returns {import('../types').Prompt | undefined}
 */
export function findById(id) {
  return allPrompts.find((p) => p.id === id);
}

/**
 * Returns a random item from an array, or undefined if empty.
 *
 * @template T
 * @param {T[]} arr
 * @returns {T | undefined}
 */
function pickRandom(arr) {
  if (!arr.length) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Helper to filter prompts by category.
 * @param {string} cat
 * @returns {import('../types').Prompt[]}
 */
function filterByCategory(cat) {
  return allPrompts.filter((p) => p.category === cat);
}

/**
 * Director's Cut: picks one random prompt from each of four pools —
 * camera, lighting, composition, and vfx — and returns them as a
 * combined object.
 *
 * Combined promptTemplate format:
 *   "[Camera]. [Lighting]. [Composition]. [VFX]."
 *
 * @returns {{
 *   camera:      import('../types').Prompt,
 *   lighting:    import('../types').Prompt,
 *   composition: import('../types').Prompt,
 *   vfx:         import('../types').Prompt,
 *   combined:    import('../types').Prompt
 * } | null}
 */
export function getRandomCombo() {
  const camera      = pickRandom(filterByCategory('camera'));
  const lighting    = pickRandom(filterByCategory('lighting'));
  const composition = pickRandom(filterByCategory('composition'));
  let vfx           = pickRandom(filterByCategory('vfx')) || pickRandom(filterByCategory('videostyles'));

  if (!camera || !lighting || !composition) return null;

  const vfxTemplate = vfx ? `. ${vfx.promptTemplate}` : '';
  const vfxName = vfx ? ` + ${vfx.name}` : '';

  /** @type {import('../types').Prompt} */
  const combined = {
    id:             `combo-${camera.id}--${lighting.id}--${composition.id}${vfx ? '--' + vfx.id : ''}`,
    name:           `${camera.name} + ${lighting.name} + ${composition.name}${vfxName}`,
    category:       'combo',
    difficulty:     camera.difficulty,
    mood:           camera.mood,
    promptTemplate: `${camera.promptTemplate}. ${lighting.promptTemplate}. ${composition.promptTemplate}${vfxTemplate}`,
  };

  return { camera, lighting, composition, vfx, combined };
}
