/**
 * uiController.js
 * ───────────────
 * Responsible ONLY for rendering the card grid and updating DOM elements.
 * No data fetching. No event wiring (that belongs in app.js).
 */

import { isFavorite } from './dataManager.js';

/* ── Video suffix (base, without dynamic parts) ───────────── */

/** Core video quality suffix; dynamic parts (motion, AR) are appended by displayDualResult. */
const VIDEO_SUFFIX = ', cinematic motion, smooth camera movement, highly detailed video, continuous action';

/* ── Colour maps ──────────────────────────────────────────── */

const DIFFICULTY_COLORS = {
  Basic:        '#22c55e',
  Intermediate: '#f59e0b',
  Advanced:     '#ef4444',
};

const MOOD_COLORS = {
  Cinematic:   '#818cf8',
  Dramatic:    '#f87171',
  Artistic:    '#a78bfa',
  Documentary: '#38bdf8',
  Horror:      '#94a3b8',
  Romantic:    '#f472b6',
  Nostalgic:   '#fb923c',
  Action:      '#ef4444',
};

const CATEGORY_ACCENT = {
  camera:      '#c9a227',
  lighting:    '#f97316',
  composition: '#8b5cf6',
  editing:     '#06b6d4',
  genres:      '#ec4899',
  storytelling:'#22c55e',
  vfx:         '#3b82f6',
};

const CATEGORY_LABELS = {
  gear: 'Equipment / Lenses'
};

/* ── Suitability badge ────────────────────────────────────── */

/**
 * Keywords in a prompt name that indicate video-first content.
 * Matched case-insensitively against prompt.name.
 */
const VIDEO_KEYWORDS = ['pan', 'zoom', 'motion', 'dolly', 'tracking', 'take'];

/**
 * Returns the suitability badge descriptor for a prompt.
 * @param {import('../types').Prompt} prompt
 * @returns {{ text: string, cls: string }}
 */
function getSuitability(prompt) {
  const nameLower = prompt.name.toLowerCase();
  const isVideo   =
    prompt.category === 'editing' ||
    VIDEO_KEYWORDS.some((kw) => nameLower.includes(kw));

  return isVideo
    ? { text: '🎥 Video Focus',        cls: 'suitability-badge--video'     }
    : { text: '🌟 Universal',          cls: 'suitability-badge--universal'  };
}

/* ── Internal helpers ─────────────────────────────────────── */

/**
 * Returns an SVG line-art icon based on the category.
 * @param {string} category 
 * @returns {string}
 */
function getCategoryIcon(category) {
  switch(category.toLowerCase()) {
    case 'camera':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
    case 'lighting':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    case 'composition':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`;
    case 'vfx':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`;
  }
}

/**
 * Build the HTML for a single card.
 * @param {import('../types').Prompt} prompt
 * @param {number} index
 * @returns {string}
 */
function buildCardHTML(prompt, index) {
  const diffColor  = DIFFICULTY_COLORS[prompt.difficulty] ?? '#888';
  const moodColor  = MOOD_COLORS[prompt.mood]             ?? '#888';
  const catAccent  = CATEGORY_ACCENT[prompt.category]     ?? '#c9a227';

  const catLabel  = CATEGORY_LABELS[prompt.category] || (prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1));
  const suit      = getSuitability(prompt);
  const definition = prompt.definition ?? '';
  const favClass = isFavorite(prompt.id) ? 'is-favorite' : '';
  const thumbIcon = getCategoryIcon(prompt.category);

  return `
    <div
      class="card"
      data-id="${escapeAttr(prompt.id)}"
      data-index="${index}"
      tabindex="0"
      role="button"
      aria-label="Generate prompt for ${escapeAttr(prompt.name)}"
      style="--card-accent: ${catAccent}"
    >
      <div class="card-top">
        <div class="card-category">${escapeHTML(catLabel)}</div>
        <div class="card-top-right">
          <span class="badge suitability-badge ${escapeAttr(suit.cls)}">${suit.text}</span>
          <button class="fav-btn ${favClass}" data-id="${escapeAttr(prompt.id)}" aria-label="Toggle favorite">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <h3 class="card-name">${escapeHTML(prompt.name)}</h3>
      ${definition ? `<p class="card-desc">${escapeHTML(definition)}</p>` : ''}
      <div class="card-meta">
        <span
          class="badge difficulty-badge"
          style="--badge-color: ${diffColor}"
          title="Difficulty"
        >${escapeHTML(prompt.difficulty)}</span>
        <span
          class="badge mood-badge"
          style="--badge-color: ${moodColor}"
          title="Mood"
        >${escapeHTML(prompt.mood)}</span>
      </div>
      <div class="card-quick-actions">
        <button class="deep-dive-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          Chuyên sâu
        </button>
      </div>
    </div>
  `;
}

/** Escape text for safe insertion into HTML attributes. */
function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Escape text for safe insertion into HTML content. */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ── Public API ───────────────────────────────────────────── */

/**
 * Render the full card grid.
 *
 * @param {import('../types').Prompt[]} prompts - Filtered prompt list.
 * @param {(prompt: import('../types').Prompt) => void} onCardClick - Callback when a card is activated.
 * @param {(id: string, e: Event) => void} onFavClick - Callback when fav button is clicked.
 */
export function renderGrid(prompts, onCardClick, onFavClick) {
  const grid  = document.getElementById('prompt-grid');
  const count = document.getElementById('result-count');

  if (!grid) return;

  if (count) {
    const n = prompts.length;
    count.textContent = `${n} ${n === 1 ? 'prompt' : 'prompts'}`;
  }

  if (prompts.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>No prompts found</h2>
        <p>Try selecting a different category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = prompts.map((p, i) => buildCardHTML(p, i)).join('');

  grid.querySelectorAll('.card').forEach((cardEl) => {
    const idx = parseInt(cardEl.dataset.index, 10);
    const prompt = prompts[idx];
    if (!prompt) return;

    const activate = (e) => {
      if (e && e.target.closest('.fav-btn')) return;
      if (e && e.target.closest('.deep-dive-btn')) return;
      onCardClick(prompt);
    };
    cardEl.addEventListener('click', activate);

    const favBtn = cardEl.querySelector('.fav-btn');
    if (favBtn && onFavClick) {
      favBtn.addEventListener('click', (e) => onFavClick(prompt.id, e));
    }
    
    const deepDiveBtn = cardEl.querySelector('.deep-dive-btn');
    if (deepDiveBtn) {
      deepDiveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDeepDiveModal(prompt);
      });
    }

    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  });
}

/**
 * Mark a card as active (selected) and remove active state from all others.
 * Pass null to clear all active states.
 *
 * @param {string | null} promptId
 */
export function setActiveCard(promptId) {
  document.querySelectorAll('.card').forEach((el) => {
    el.classList.toggle('is-active', promptId !== null && el.dataset.id === promptId);
  });
}

/**
 * Populate the category <select> with options derived from the prompt data.
 * @param {string[]} categories
 */
export function populateCategoryFilter(categories) {
  const select = document.getElementById('category-filter');
  if (!select) return;

  categories.forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = CATEGORY_LABELS[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1));
    select.appendChild(option);
  });
}

/**
 * Attach toggle behaviour to all .motion-tag buttons.
 * Calls onToggle() whenever any tag is toggled so app.js can refresh the prompt.
 *
 * @param {() => void} onToggle - Callback fired after any tag state changes.
 */
export function initMotionTags(onToggle) {
  document.querySelectorAll('.motion-tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      const nowActive = tag.classList.toggle('is-active');
      tag.setAttribute('aria-pressed', String(nowActive));
      onToggle();
    });
  });
}

/**
 * Returns the data-motion values of all currently active motion tags.
 *
 * @returns {string[]}
 */
export function getActiveMotionTags() {
  return [...document.querySelectorAll('.motion-tag.is-active')]
    .map((el) => el.dataset.motion ?? '');
}

/**
 * Display the dual (image + video) result panels.
 *
 * @param {string} basePrompt - The resolved prompt (subject already replaced).
 * @param {string} title      - Display name shown in the result header.
 * @param {{
 *   aspectRatioFlag?: string,   // e.g. "--ar 16:9"
 *   negativePrompt?:  string,   // free-text negative prompt
 *   motionTags?:      string[], // active camera motion labels
 * }} [options]
 */
export function displayDualResult(basePrompt, title, options = {}) {
  const {
    aspectRatioFlag = '--ar 16:9',
    negativePrompt  = '',
    motionTags      = [],
  } = options;

  const resultBox       = document.getElementById('result-box');
  const promptTitle     = document.getElementById('prompt-title');
  const resultTextImage = document.getElementById('result-text-image');
  const resultTextVideo = document.getElementById('result-text-video');
  const transImageEl    = document.getElementById('result-translation-image');
  const transVideoEl    = document.getElementById('result-translation-video');

  if (!resultBox || !promptTitle || !resultTextImage || !resultTextVideo) return;

  promptTitle.textContent = title;

  // ── Image prompt ───────────────────────────────────────
  let imageText = basePrompt
    + ', 8k resolution, cinematic masterpiece, highly detailed still'
    + ' ' + aspectRatioFlag
    + ' --style raw';

  if (negativePrompt.trim()) {
    imageText += ' --no ' + negativePrompt.trim();
  }

  resultTextImage.textContent = imageText;
  resultTextImage.classList.remove('result-placeholder');
  
  if (transImageEl) {
    transImageEl.textContent = '';
    transImageEl.style.display = 'none';
  }

  // ── Video prompt ───────────────────────────────────────
  const aspectLabel = aspectRatioFlag.replace('--ar ', '');
  let videoText = basePrompt + VIDEO_SUFFIX;

  if (motionTags.length) {
    videoText += ', Camera Motion: ' + motionTags.join(', ');
  }

  videoText += ', Aspect Ratio: ' + aspectLabel;

  resultTextVideo.textContent = videoText;
  resultTextVideo.classList.remove('result-placeholder');
  
  if (transVideoEl) {
    transVideoEl.textContent = '';
    transVideoEl.style.display = 'none';
  }

  // Reveal the result box
  resultBox.classList.add('active');
}

/**
 * Flash "Copied!" feedback on a specific copy button.
 *
 * @param {'copy-btn-image' | 'copy-btn-video'} btnId
 */
export function showCopyFeedback(btnId) {
  const btn   = document.getElementById(btnId);
  const label = btn?.querySelector('.copy-label');
  if (!btn || !label) return;

  const original = label.textContent;
  label.textContent = 'Copied!';
  btn.classList.add('copied');

  setTimeout(() => {
    label.textContent = original;
    btn.classList.remove('copied');
  }, 2200);
}

/* ── Modal ────────────────────────────────────────────────── */

/**
 * Open the details modal and populate it with the prompt's name and definition.
 * Resets the translation area and translate button to their default state.
 *
 * @param {string} name       - Prompt display name (shown as the modal headline).
 * @param {string} definition - English definition text.
 */
export function openModal(name, definition) {
  const overlay    = document.getElementById('modal-overlay');
  const title      = document.getElementById('modal-title');
  const defEl      = document.getElementById('modal-definition');
  const translateBtn  = document.getElementById('translate-btn');
  const translation   = document.getElementById('modal-translation');
  const favBtn        = document.getElementById('modal-fav-btn');

  if (!overlay || !title || !defEl || !translateBtn || !translation) return;

  // Populate content
  title.textContent  = name;
  defEl.textContent  = definition || '—';

  // Setup fav button
  if (favBtn) {
    const activeCard = document.querySelector('.card.is-active');
    const promptId = activeCard ? activeCard.dataset.id : null;
    if (promptId) {
      favBtn.className = isFavorite(promptId) ? 'fav-btn is-favorite' : 'fav-btn';
      favBtn.onclick = (e) => {
        const isFav = !favBtn.classList.contains('is-favorite');
        favBtn.className = isFav ? 'fav-btn is-favorite' : 'fav-btn';
        // Simulate click on grid card to sync
        const gridBtn = activeCard.querySelector('.fav-btn');
        if (gridBtn) gridBtn.click();
      };
    }
  }

  // Reset translate state
  translateBtn.textContent = '🇻🇳 Dịch sang Tiếng Việt';
  translateBtn.disabled    = false;
  translateBtn.classList.remove('is-hidden');

  translation.textContent = '';
  translation.classList.remove('is-visible', 'modal-translation--error');

  // Show
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Move focus to the modal for a11y
  overlay.querySelector('.modal-close')?.focus();
}

/**
 * Close the details modal.
 */
export function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

/**
 * Trigger the film-clapper animation on the Director's Cut button.
 */
export function triggerRandomizeAnimation() {
  const btn  = document.getElementById('randomize-btn');
  const dice = btn?.querySelector('.btn-dice');
  if (!dice) return;

  dice.classList.remove('spin');
  void dice.offsetWidth; // force reflow to restart animation
  dice.classList.add('spin');
}

/**
 * Open the Deep Dive modal.
 */
export function openDeepDiveModal(prompt) {
  const overlay = document.getElementById('deep-dive-modal-overlay');
  if (!overlay) return;

  // Set Badges
  const catBadge = document.getElementById('dd-badge-cat');
  const diffBadge = document.getElementById('dd-badge-diff');
  const moodBadge = document.getElementById('dd-badge-mood');
  
  if (catBadge) catBadge.textContent = prompt.category || 'N/A';
  if (diffBadge) diffBadge.textContent = prompt.difficulty || 'N/A';
  if (moodBadge) moodBadge.textContent = prompt.mood || 'N/A';

  // Set Content
  const title = document.getElementById('deep-dive-modal-title');
  const def = document.getElementById('dd-definition');
  const promptText = document.getElementById('dd-prompt-text');

  // Deep Dive data
  const whenToUse = document.getElementById('dd-when-to-use');
  const bestPractices = document.getElementById('dd-best-practices');
  const commonMistakes = document.getElementById('dd-common-mistakes');
  const mistakesHeader = document.getElementById('dd-mistakes-header');

  if (title) title.textContent = prompt.name;
  if (def) def.textContent = prompt.definition || 'Không có mô tả.';
  if (whenToUse) whenToUse.textContent = prompt.whenToUse || 'Chưa có dữ liệu.';
  if (bestPractices) bestPractices.textContent = prompt.bestPractices || 'Chưa có dữ liệu.';
  
  if (commonMistakes && mistakesHeader) {
    if (prompt.commonMistakes && prompt.commonMistakes.length > 0) {
      mistakesHeader.style.display = 'block';
      commonMistakes.style.display = 'block';
      commonMistakes.innerHTML = prompt.commonMistakes.map(m => `<li>${escapeHTML(m)}</li>`).join('');
    } else {
      mistakesHeader.style.display = 'none';
    commonMistakes.style.display = 'none';
      commonMistakes.innerHTML = '';
    }
  }

  // Assemble the prompt template
  let assembledText = prompt.promptTemplate || '';
  if (promptText) {
    const subjectInput = document.getElementById('subject-input');
    let subject = subjectInput ? subjectInput.value.trim() : '';
    if (!subject) subject = '[Subject]';

    assembledText = assembledText.replace(/\[Subject\]/gi, subject);

    const arSelect = document.getElementById('aspect-ratio');
    const aspectRatioFlag = (arSelect && arSelect.value !== 'none') ? arSelect.value : '--ar 16:9';
    
    assembledText += ', 8k resolution, cinematic masterpiece, highly detailed still ' + aspectRatioFlag + ' --style raw';

    const negInput = document.getElementById('negative-input');
    if (negInput && negInput.value.trim()) {
      assembledText += ' --no ' + negInput.value.trim();
    }

    promptText.textContent = assembledText;
  }

  // Handle Copy Button
  const copyBtn = document.getElementById('dd-copy-btn');
  if (copyBtn) {
    copyBtn.textContent = 'Sao chép';
    copyBtn.classList.remove('copied');
    copyBtn.onclick = async () => {
      const text = promptText ? promptText.textContent : (prompt.promptTemplate || '');
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyBtn.textContent = 'Đã chép!';
      copyBtn.classList.add('copied');
    };
  }

  // Handle Translate Button
  const translateBtn = document.getElementById('dd-translate-prompt-btn');
  if (translateBtn) {
    translateBtn.textContent = 'Dịch';
    translateBtn.disabled = false;
    translateBtn.onclick = async () => {
      const text = prompt.promptTemplate || '';
      if (!text) return;

      translateBtn.textContent = 'Đang dịch...';
      translateBtn.disabled = true;

      try {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=' + encodeURIComponent(text);
        const res = await fetch(url);
        const data = await res.json();
        
        if (!data || !data[0]) throw new Error('Empty response');
        
        const translatedText = data[0].map(item => item[0]).join('');
        if (promptText) promptText.textContent = translatedText;
        translateBtn.textContent = 'Đã dịch';
      } catch (err) {
        console.error('Translation error:', err);
        translateBtn.textContent = 'Lỗi dịch';
        translateBtn.disabled = false;
      }
    };
  }

  // Open modal
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Setup close events if not already done
  if (!overlay.dataset.eventsBound) {
    overlay.dataset.eventsBound = "true";
    const closeBtn = document.getElementById('deep-dive-modal-close');
    const close = () => {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
  }
}
