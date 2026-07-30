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
 * Filters prompts by query, category, and difficulty.
 * Pass 'favorites' to category to get favorite prompts.
 *
 * @param {string} [query='']
 * @param {string} [category='all']
 * @param {string} [difficulty='all']
 * @returns {import('../types').Prompt[]}
 */
export function filterPrompts(query = '', category = 'all', difficulty = 'all') {
  const q = query.toLowerCase().trim();
  return allPrompts.filter((p) => {
    const matchQuery = !q || p.name.toLowerCase().includes(q) || (p.definition || '').toLowerCase().includes(q);
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
  const vfx         = pickRandom(filterByCategory('vfx'));

  if (!camera || !lighting || !composition || !vfx) return null;

  /** @type {import('../types').Prompt} */
  const combined = {
    id:             `combo-${camera.id}--${lighting.id}--${composition.id}--${vfx.id}`,
    name:           `${camera.name} + ${lighting.name} + ${composition.name} + ${vfx.name}`,
    category:       'combo',
    difficulty:     camera.difficulty,
    mood:           camera.mood,
    promptTemplate: `${camera.promptTemplate}. ${lighting.promptTemplate}. ${composition.promptTemplate}. ${vfx.promptTemplate}.`,
  };

  return { camera, lighting, composition, vfx, combined };
}
