/**
 * app.js — Main Entry Point
 * ─────────────────────────
 * Initialises the application and wires all event listeners.
 * Delegates data work to dataManager and DOM work to uiController.
 */

import {
  loadPrompts,
  getCategories,
  filterPrompts,
  toggleFavorite,
  getFavorites,
  findById,
  getAIConfig,
  saveAIConfig,
  getRandomCombo,
} from './dataManager.js';

import { enhanceSubjectWithAI } from './aiService.js';


import {
  renderGrid,
  setActiveCard,
  populateCategoryFilter,
  displayDualResult,
  showCopyFeedback,
  triggerRandomizeAnimation,
  initMotionTags,
  getActiveMotionTags,
  openModal,
  closeModal,
} from './uiController.js';

/* ── State ────────────────────────────────────────────────── */

/**
 * The currently active prompt template (before subject substitution).
 * @type {string | null}
 */
let currentTemplate = null;

/**
 * Display title for the active result.
 * @type {string}
 */
let currentTitle = '';

/**
 * English definition of the currently open modal card.
 * Used by the translate handler.
 * @type {string}
 */
let currentDefinition = '';

/* ── Input readers (DOM → plain values) ───────────────────── */

function getSubjectValue() {
  return document.getElementById('subject-input')?.value ?? '';
}

function getNegativePromptValue() {
  return document.getElementById('negative-input')?.value ?? '';
}

function getAspectRatioValue() {
  return document.getElementById('aspect-ratio')?.value ?? '--ar 16:9';
}

/* ── Base prompt builder ──────────────────────────────────── */

/**
 * Replaces [Subject] in a template with the given subject.
 * Keeps [Subject] if the subject string is blank.
 *
 * @param {string} template
 * @param {string} subject
 * @returns {string}
 */
function buildBasePrompt(template, subject) {
  const s = subject.trim();
  return s ? template.replace(/\[Subject\]/g, s) : template;
}

/* ── Central refresh ──────────────────────────────────────── */

/**
 * Re-renders both output panels using the current template and all
 * current control values. Called by every control change handler.
 * No-op if no template is selected yet.
 */
function refreshResult() {
  if (!currentTemplate) return;

  const basePrompt = buildBasePrompt(currentTemplate, getSubjectValue());

  displayDualResult(basePrompt, currentTitle, {
    aspectRatioFlag: getAspectRatioValue(),
    negativePrompt:  getNegativePromptValue(),
    motionTags:      getActiveMotionTags(),
  });
}

/* ── Clipboard helper ─────────────────────────────────────── */

/**
 * Copies text from a result panel element to the clipboard and shows
 * the "Copied!" animation on the corresponding button.
 *
 * @param {'result-text-image' | 'result-text-video'} textId
 * @param {'copy-btn-image'    | 'copy-btn-video'}    btnId
 */
async function copyPanel(textId, btnId) {
  const el = document.getElementById(textId);
  const text = el?.textContent ?? '';
  if (!text || el?.classList.contains('result-placeholder')) return;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  showCopyFeedback(btnId);
}

/**
 * Translates the generated prompt to Vietnamese
 * @param {'image' | 'video'} type
 */
async function translatePanel(type) {
  const btn = document.getElementById(`translate-btn-${type}`);
  const textEl = document.getElementById(`result-text-${type}`);
  const transEl = document.getElementById(`result-translation-${type}`);
  
  if (!btn || !textEl || !transEl || textEl.classList.contains('result-placeholder')) return;

  const originalHtml = btn.innerHTML;
  btn.innerHTML = '<span class="copy-label">Dịch...</span>';
  btn.disabled = true;

  try {
    const textToTranslate = textEl.textContent;
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' 
              + encodeURIComponent(textToTranslate);
    const res = await fetch(url);
    const data = await res.json();
    
    if (!data || !data[0]) throw new Error('Empty response');
    const text = data[0].map(item => item[0]).join('');

    transEl.textContent = text;
    transEl.style.display = 'block';

  } catch (err) {
    console.error('Translation error:', err);
    transEl.textContent = 'Lỗi dịch thuật. Vui lòng thử lại.';
    transEl.style.display = 'block';
  } finally {
    btn.innerHTML = originalHtml;
    btn.disabled = false;
  }
}

/* ── Core event handlers ──────────────────────────────────── */

/**
 * Called when the user clicks (or keyboard-activates) a card.
 * Generates the dual prompts AND opens the details modal.
 * @param {import('../types').Prompt} prompt
 */
function handleCardClick(prompt) {
  currentTemplate   = prompt.promptTemplate;
  currentTitle      = prompt.name;
  currentDefinition = prompt.definition ?? '';

  setActiveCard(prompt.id);
  refreshResult();
  openModal(prompt.name, currentDefinition);
}

/**
 * Called whenever any filter (search, category, difficulty) changes.
 */
function handleFilterChange() {
  const query = document.getElementById('search-input')?.value || '';
  const category = document.getElementById('category-filter')?.value || 'all';
  const difficulty = document.getElementById('difficulty-filter')?.value || 'all';

  const filtered = filterPrompts(query, category, difficulty);
  renderGrid(filtered, handleCardClick, handleFavClick);

  if (currentTemplate) {
    const stillVisible = filtered.some((p) => p.promptTemplate === currentTemplate);
    if (!stillVisible) setActiveCard(null);
  }
}

/**
 * Handles clicking the heart icon on a card or modal.
 */
function handleFavClick(id, e, btnEl = null) {
  if (e) e.stopPropagation();
  const isFav = toggleFavorite(id);
  const targetBtn = btnEl || (e && e.currentTarget);
  if (targetBtn) {
    targetBtn.classList.toggle('is-favorite', isFav);
  }
  // Refresh grid if we are viewing the 'favorites' category
  const category = document.getElementById('category-filter')?.value;
  if (category === 'favorites') handleFilterChange();
}

/**
 * Handles exporting favorites to TXT.
 */
function handleExport() {
  const favIds = getFavorites();
  if (!favIds.length) {
    alert('Bạn chưa có Prompt yêu thích nào để xuất!');
    return;
  }
  let txt = 'MY FAVORITE PROMPTS\n===================\n\n';
  favIds.forEach(id => {
    const p = findById(id);
    if (p) txt += `[${p.name}]\n${p.promptTemplate}\n\n`;
  });
  
  const blob = new Blob([txt], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cinematique-favorites.txt';
  a.click();
}

/**
 * Prompt Builder Logic
 */
function openBuilder() {
  document.getElementById('builder-modal-overlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  
  const populate = (cat, selId) => {
    const sel = document.getElementById(selId);
    if (sel && sel.options.length <= 1) {
      filterPrompts('', cat, 'all').forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        sel.appendChild(opt);
      });
    }
  };
  populate('camera', 'builder-camera');
  populate('lighting', 'builder-lighting');
  populate('composition', 'builder-composition');
  populate('vfx', 'builder-vfx');
}

function closeBuilder() {
  document.getElementById('builder-modal-overlay')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

function generateBuilderCombo() {
  const cId = document.getElementById('builder-camera')?.value;
  const lId = document.getElementById('builder-lighting')?.value;
  const cpId = document.getElementById('builder-composition')?.value;
  const vId = document.getElementById('builder-vfx')?.value;

  if (!cId || !lId || !cpId || !vId) {
    alert('Please select one item from each category!');
    return;
  }
  const c = findById(cId);
  const l = findById(lId);
  const cp = findById(cpId);
  const v = findById(vId);

  currentTemplate = `${c.promptTemplate}. ${l.promptTemplate}. ${cp.promptTemplate}. ${v.promptTemplate}.`;
  currentTitle = `BUILDER: ${c.name} + ${l.name} + ${cp.name} + ${v.name}`;

  setActiveCard(null);
  refreshResult();
  closeBuilder();
}

/**
 * AI Enhancement Logic
 */
let tempAIConfig = null;

function updateProviderInputs() {
  if (!tempAIConfig) return;
  const p = document.getElementById('ai-provider').value;
  if (!tempAIConfig.apiKeys) tempAIConfig.apiKeys = {};
  if (!tempAIConfig.modelNames) tempAIConfig.modelNames = {};
  
  document.getElementById('ai-api-key').value = tempAIConfig.apiKeys[p] || '';
  
  const defaultModels = {
     gemini: 'gemini-1.5-flash',
     openai: 'gpt-4o-mini',
     agentrouter: 'gpt-4o-mini',
     ollama: 'llama3'
  };
  document.getElementById('ai-model-name').value = tempAIConfig.modelNames[p] || defaultModels[p] || '';
}

function openAISettings() {
  tempAIConfig = JSON.parse(JSON.stringify(getAIConfig()));
  document.getElementById('ai-provider').value = tempAIConfig.provider || 'gemini';
  document.getElementById('ai-target-tool').value = tempAIConfig.targetTool || 'midjourney';
  const rotateCheckbox = document.getElementById('ai-rotate-enabled');
  if (rotateCheckbox) rotateCheckbox.checked = !!tempAIConfig.rotateEnabled;
  
  updateProviderInputs();
  
  document.getElementById('ai-modal-overlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeAISettings() {
  tempAIConfig = null;
  document.getElementById('ai-modal-overlay')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

function saveAISettings() {
  if (tempAIConfig) {
    tempAIConfig.provider = document.getElementById('ai-provider')?.value || 'gemini';
    tempAIConfig.targetTool = document.getElementById('ai-target-tool')?.value || 'midjourney';
    tempAIConfig.rotateEnabled = document.getElementById('ai-rotate-enabled')?.checked || false;
    saveAIConfig(tempAIConfig);
  }
  closeAISettings();
}

async function handleAIEnhance() {
  const subjectInput = document.getElementById('subject-input');
  const enhanceBtn = document.getElementById('ai-enhance-btn');
  const subject = subjectInput?.value.trim();
  if (!subject) {
    alert('Vui lòng nhập ý tưởng (Subject) trước khi nhờ AI viết!');
    return;
  }

  const originalText = enhanceBtn.textContent;
  enhanceBtn.textContent = '✨ Suy nghĩ...';
  enhanceBtn.disabled = true;
  subjectInput.disabled = true;

  try {
    const config = getAIConfig();
    let providersToTry = [config.provider || 'gemini'];
    
    if (config.rotateEnabled) {
      const validProviders = Object.keys(config.apiKeys || {}).filter(k => (config.apiKeys[k] && config.apiKeys[k].trim() !== '') || k === 'ollama');
      if (validProviders.length > 0) {
        const tiers = { 1: [], 2: [], 3: [] };
        const getPriority = (p) => {
           if (['ollama', 'gemini'].includes(p)) return 1;
           if (['deepseek'].includes(p)) return 2;
           return 3;
        };
        validProviders.forEach(p => tiers[getPriority(p)].push(p));
        
        const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
        providersToTry = [
           ...shuffle(tiers[1]),
           ...shuffle(tiers[2]),
           ...shuffle(tiers[3])
        ];
      }
    }
    
    let enhanced = null;
    let lastErr = null;

    for (const p of providersToTry) {
       try {
         const activeConfig = {
           provider: p,
           apiKey: (config.apiKeys || {})[p] || '',
           modelName: (config.modelNames || {})[p] || '',
           targetTool: config.targetTool
         };
         
         enhanced = await enhanceSubjectWithAI(subject, activeConfig);
         break; // Success
       } catch (err) {
         console.warn(`[AI Rotation] Provider ${p} failed:`, err);
         lastErr = err;
       }
    }

    if (!enhanced) {
       throw lastErr || new Error("Tất cả các nền tảng AI đều thất bại.");
    }

    subjectInput.value = enhanced;
    currentTemplate = "[Subject]";
    currentTitle = "AI ENHANCED MASTER PROMPT";
    setActiveCard(null);
    refreshResult();
  } catch (err) {
    alert('Lỗi khi gọi AI: ' + err.message);
  } finally {
    enhanceBtn.textContent = '✨ AI Enhance';
    enhanceBtn.disabled = false;
    subjectInput.disabled = false;
  }
}

/**
 * Fetches a Vietnamese translation of the current modal definition
 * using the MyMemory free API and displays it inside the modal.
 */
async function handleTranslate() {
  const btn         = document.getElementById('translate-btn');
  const translation = document.getElementById('modal-translation');
  if (!btn || !translation || !currentDefinition) return;

  // Disable button + show loading state
  btn.textContent = 'Translating…';
  btn.disabled    = true;

  try {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' 
              + encodeURIComponent(currentDefinition);
    const res = await fetch(url);
    const data = await res.json();
    
    if (!data || !data[0]) throw new Error('Empty response');
    
    // Google Translate may split long text into multiple array elements
    const text = data[0].map(item => item[0]).join('');

    translation.textContent = text;
    translation.classList.remove('modal-translation--error');
    translation.classList.add('is-visible');

    // Hide button — translation is now shown
    btn.classList.add('is-hidden');

  } catch (err) {
    console.error('Translation error:', err);
    translation.textContent = 'Lỗi dịch thuật (Translation failed). Vui lòng thử lại.';
    translation.classList.add('is-visible', 'modal-translation--error');

    // Re-enable so user can retry
    btn.textContent = '🇻🇳 Dịch sang Tiếng Việt';
    btn.disabled    = false;
  }
}

/**
 * Director's Cut: combines camera + lighting + composition + vfx
 * and immediately renders the dual result.
 */
function handleDirectorsCut() {
  triggerRandomizeAnimation();

  const combo = getRandomCombo();
  if (!combo) return;

  currentTemplate = combo.combined.promptTemplate;
  currentTitle    = `DIRECTOR'S CUT: ${combo.combined.name}`;

  setActiveCard(null);
  refreshResult();
}

/* ── Initialisation ───────────────────────────────────────── */

async function init() {
  try {
    // 1. Load data
    await loadPrompts();

    // 2. Populate category dropdown
    populateCategoryFilter(getCategories());

    // 3. Render all cards
    renderGrid(filterPrompts(), handleCardClick, handleFavClick);

    // 4. Wire motion tag toggles (uiController handles DOM; refreshResult is the callback)
    initMotionTags(refreshResult);

    // 5. Wire all control event listeners
    document.getElementById('search-input')?.addEventListener('input', handleFilterChange);
    document.getElementById('category-filter')?.addEventListener('change', handleFilterChange);
    document.getElementById('difficulty-filter')?.addEventListener('change', handleFilterChange);
    document.getElementById('export-btn')?.addEventListener('click', handleExport);
    document.getElementById('builder-btn')?.addEventListener('click', openBuilder);
    document.getElementById('builder-modal-close')?.addEventListener('click', closeBuilder);
    document.getElementById('builder-generate-btn')?.addEventListener('click', generateBuilderCombo);

    document.getElementById('ai-settings-btn')?.addEventListener('click', openAISettings);
    document.getElementById('ai-modal-close')?.addEventListener('click', closeAISettings);
    document.getElementById('ai-save-btn')?.addEventListener('click', saveAISettings);
    document.getElementById('ai-enhance-btn')?.addEventListener('click', handleAIEnhance);
    
    document.getElementById('ai-provider')?.addEventListener('change', () => {
      if (tempAIConfig) {
        tempAIConfig.provider = document.getElementById('ai-provider').value;
        updateProviderInputs();
      }
    });
    
    document.getElementById('ai-api-key')?.addEventListener('input', (e) => {
      if (tempAIConfig) {
        const p = document.getElementById('ai-provider').value;
        if (!tempAIConfig.apiKeys) tempAIConfig.apiKeys = {};
        tempAIConfig.apiKeys[p] = e.target.value;
      }
    });
    
    document.getElementById('ai-model-name')?.addEventListener('input', (e) => {
      if (tempAIConfig) {
        const p = document.getElementById('ai-provider').value;
        if (!tempAIConfig.modelNames) tempAIConfig.modelNames = {};
        tempAIConfig.modelNames[p] = e.target.value;
      }
    });

    document
      .getElementById('subject-input')
      ?.addEventListener('input', refreshResult);

    document
      .getElementById('negative-input')
      ?.addEventListener('input', refreshResult);

    document
      .getElementById('aspect-ratio')
      ?.addEventListener('change', refreshResult);

    document
      .getElementById('randomize-btn')
      ?.addEventListener('click', handleDirectorsCut);

    document
      .getElementById('copy-btn-image')
      ?.addEventListener('click', () => copyPanel('result-text-image', 'copy-btn-image'));

    document
      .getElementById('copy-btn-video')
      ?.addEventListener('click', () => copyPanel('result-text-video', 'copy-btn-video'));

    document
      .getElementById('translate-btn-image')
      ?.addEventListener('click', () => translatePanel('image'));

    document
      .getElementById('translate-btn-video')
      ?.addEventListener('click', () => translatePanel('video'));

    // Modal: close button
    document
      .getElementById('modal-close')
      ?.addEventListener('click', closeModal);

    // Modal: click on dark backdrop (but not inside the content box)
    document
      .getElementById('modal-overlay')
      ?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
      });

    // Modal: Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Translate button
    document
      .getElementById('translate-btn')
      ?.addEventListener('click', handleTranslate);

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = btn.classList.contains('is-open');
        
        document.querySelectorAll('.faq-question').forEach(q => {
          q.classList.remove('is-open');
          q.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
          btn.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    // Onboarding Modal
    const onboardingModal = document.getElementById('onboarding-modal-overlay');
    const helpBtn = document.getElementById('help-btn');
    const onboardingCloseBtn = document.getElementById('onboarding-modal-close');
    const onboardingStartBtn = document.getElementById('onboarding-start-btn');

    const closeOnboarding = () => {
      if (onboardingModal) {
        onboardingModal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    };
    
    if (onboardingModal) {
      if (!localStorage.getItem('cinematique_onboarding_seen')) {
        setTimeout(() => {
          onboardingModal.classList.add('is-open');
          document.body.style.overflow = 'hidden';
        }, 500);
        localStorage.setItem('cinematique_onboarding_seen', 'true');
      }
      helpBtn?.addEventListener('click', () => {
        onboardingModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
      onboardingCloseBtn?.addEventListener('click', closeOnboarding);
      onboardingStartBtn?.addEventListener('click', closeOnboarding);
      onboardingModal.addEventListener('click', (e) => {
        if (e.target === onboardingModal) closeOnboarding();
      });
    }

  } catch (err) {
    console.error('[Cinématique] Initialisation failed:', err);

    const grid = document.getElementById('prompt-grid');
    if (grid) {
      grid.innerHTML = `
        <div class="empty-state">
          <h2>Failed to load prompts</h2>
          <p>${err?.message ?? 'An unexpected error occurred. Please refresh.'}</p>
        </div>
      `;
    }

    const count = document.getElementById('result-count');
    if (count) count.textContent = 'Error';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
