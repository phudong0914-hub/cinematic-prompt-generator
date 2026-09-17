/**
 * app.js — Main Entry Point
 * ─────────────────────────
 * Initialises the application and wires all event listeners.
 * Delegates data work to dataManager and DOM work to uiController.
 */

import './i18n.js';
import './securityShield.js';

import {
  loadPrompts,
  getAllPrompts,
  getCategories,
  filterPrompts,
  toggleFavorite,
  getFavorites,
  findById,
  getAIConfig,
  saveAIConfig,
  getRandomCombo,
  getPromptHistory,
  addPromptToHistory,
  clearPromptHistory,
} from './dataManager.js';

import { enhanceSubjectWithAI, testSingleKey, analyzeImageWithAI } from './aiService.js';
import { exportToPDF, exportToCSV, exportToPackage } from './exportManager.js';
import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';
import { onboardingTour } from './tour.js';
import { voiceEngine } from './voiceService.js';
import { translateCinematicText } from './translator.js';
import { characterOS } from './characterOS.js';
import { initAuthUI } from './authController.js';

// Phase 1 & 2: New modules
import { sanitizePrompt, countTokens, enforceTokenLimit } from './guardrails.js';
import { scorePrompt } from './scorecard.js';
import {
  saveSessionContext,
  getSessionContext,
  getAllProjects,
  getActiveProject,
  getActiveProjectId,
  setActiveProjectId,
  createProject,
  updateProject,
  deleteProject,
  addSceneToProject,
  removeSceneFromProject,
  getActiveCharacterContext,
  getActiveProjectSummary,
} from './memoryManager.js';

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
  renderHistoryGrid,
  updateStudioCameraBadges,
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
 * Uploaded reference image data.
 * @type {{ base64: string, mimeType: string, name: string, dataUrl: string } | null}
 */
let currentReferenceImage = null;

/**
 * Auto-resizes any textarea smoothly according to content.
 * @param {HTMLTextAreaElement} el
 */
function autoResizeTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = Math.max(48, Math.min(el.scrollHeight, 200)) + 'px';
}
window.autoResizeTextarea = autoResizeTextarea;

/**
 * Studio Engine (StudioBinder & AICameraMovements) State
 */
let studioCameraState = {
  shotSize: '',
  shotAngle: '',
  cameraMotion: '',
  motionSpeed: 'slow',
  autoApply: true
};

/**
 * Currently active style preset name (null = none).
 * @type {string | null}
 */
let activePreset = null;

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

function getCharacterValue() {
  return document.getElementById('character-input')?.value ?? '';
}

function getNegativePromptValue() {
  return document.getElementById('negative-input')?.value ?? '';
}

function getAspectRatioValue() {
  return document.getElementById('aspect-ratio')?.value ?? '--ar 16:9';
}

function getActiveFPS() {
  const activeBtn = document.querySelector('.fps-btn.active');
  return activeBtn ? activeBtn.dataset.fps + 'fps' : '24fps';
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
  if (s) {
    return template.replace(/\[Subject\]/g, () => s);
  }
  if (currentReferenceImage) {
    return template.replace(/\[Subject\]/g, () => `the subject shown in reference image (${currentReferenceImage.name})`);
  }
  return template;
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
    userSubject:     getSubjectValue(),
    characterAnchor: getCharacterValue(),
    fpsValue:        getActiveFPS(),
    studioCamera:    studioCameraState,
  });

  const imageText = document.getElementById('result-text-image')?.textContent || '';
  const videoText = document.getElementById('result-text-video')?.textContent || '';
  const notebooklmText = document.getElementById('result-text-notebooklm')?.textContent || '';
  const audioText = document.getElementById('result-text-audio')?.textContent || '';

  // ── GUARDRAILS: Sanitize output ──
  if (imageText && !imageText.includes('Chọn một thẻ')) {
    const sanitizedImage = sanitizePrompt(imageText);
    const sanitizedVideo = sanitizePrompt(videoText);
    updateGuardrailUI(sanitizedImage, sanitizedVideo);
  }

  // ── SCORECARD: Score the image prompt ──
  if (imageText && !imageText.includes('Chọn một thẻ')) {
    const score = scorePrompt(imageText);
    updateScorecardUI(score);
  }

  // ── TOKEN COUNTER: Update word counts ──
  updateTokenCounterUI('image', imageText);
  updateTokenCounterUI('video', videoText);

  // ── MEMORY: Save to session + history ──
  if (imageText && !imageText.includes('Chọn một thẻ')) {
    saveSessionContext({
      subject: getSubjectValue(),
      character: getCharacterValue(),
      negative: getNegativePromptValue(),
      aspectRatio: getAspectRatioValue(),
      fps: getActiveFPS(),
      preset: activePreset,
      lastTemplate: currentTemplate,
      lastTitle: currentTitle,
    });

    addPromptToHistory({
      title: currentTitle,
      imagePrompt: imageText,
      videoPrompt: videoText,
      notebooklmPrompt: notebooklmText,
      audioPrompt: audioText,
      subject: getSubjectValue(),
      character: getCharacterValue(),
      negative: getNegativePromptValue()
    });
  }
}

/* ── GUARDRAIL UI ──────────────────────────────────────────── */

function updateGuardrailUI(sanitizedImage, sanitizedVideo) {
  const badge = document.getElementById('guardrail-warning-badge');
  if (!badge) return;

  const totalWarnings = sanitizedImage.warnings.length + sanitizedVideo.warnings.length;
  const hasBlock = sanitizedImage.blocked || sanitizedVideo.blocked;

  if (totalWarnings === 0) {
    badge.style.display = 'none';
    return;
  }

  badge.style.display = 'flex';
  const label = badge.querySelector('.guardrail-label');
  const detail = badge.querySelector('.guardrail-detail');

  if (hasBlock) {
    badge.className = 'guardrail-warning-badge guardrail--block';
    if (label) label.textContent = `🛡️ ${totalWarnings} từ khóa bị lọc (Policy Block)`;
  } else {
    badge.className = 'guardrail-warning-badge guardrail--warn';
    if (label) label.textContent = `⚠️ ${totalWarnings} từ khóa nhạy cảm đã thay thế`;
  }

  if (detail) {
    const allWarnings = [...sanitizedImage.warnings, ...sanitizedVideo.warnings];
    detail.textContent = allWarnings.map(w => `"${w.original}" → "${w.replacement}"`).slice(0, 5).join(', ');
  }
}

/* ── SCORECARD UI ──────────────────────────────────────────── */

function updateScorecardUI(score) {
  const widget = document.getElementById('scorecard-widget');
  if (!widget) return;

  if (score.isEmpty) {
    widget.style.display = 'none';
    return;
  }

  widget.style.display = 'block';

  // Update total score circle
  const scoreCircle = widget.querySelector('.score-circle-value');
  const scoreGrade = widget.querySelector('.score-grade');
  const scoreLabel = widget.querySelector('.score-grade-label');
  const circleRing = widget.querySelector('.score-ring');

  if (scoreCircle) scoreCircle.textContent = score.total;
  if (scoreGrade) {
    scoreGrade.textContent = score.grade.grade;
    scoreGrade.style.color = score.grade.color;
  }
  if (scoreLabel) {
    scoreLabel.textContent = score.grade.label;
    scoreLabel.style.color = score.grade.color;
  }

  // Animate ring
  if (circleRing) {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (score.total / 100) * circumference;
    circleRing.style.strokeDasharray = `${circumference}`;
    circleRing.style.strokeDashoffset = `${offset}`;
    circleRing.style.stroke = score.grade.color;
  }

  // Update breakdown HUD matrix
  for (const item of score.breakdown) {
    const val = widget.querySelector(`[data-score-key="${item.key}"] .score-bar-value`);
    if (val) {
      val.textContent = `${item.score}/${item.maxScore}`;
      if (item.score === item.maxScore) {
        val.style.color = '#34d399'; // Green 20/20
      } else if (item.score >= 14) {
        val.style.color = '#ffd700'; // Gold
      } else {
        val.style.color = '#f87171'; // Red
      }
    }
  }

  // Update suggestions
  const sugBox = widget.querySelector('.score-suggestions');
  if (sugBox) {
    if (score.suggestions.length > 0) {
      sugBox.innerHTML = score.suggestions.map(s => `<div class="score-tip">💡 ${s}</div>`).join('');
      sugBox.style.display = 'block';
    } else {
      sugBox.innerHTML = '<div class="score-tip score-tip--perfect">✨ Prompt đạt chuẩn Hollywood!</div>';
      sugBox.style.display = 'block';
    }
  }
}

/* ── TOKEN COUNTER UI ─────────────────────────────────────── */

function updateTokenCounterUI(panelType, text) {
  const counter = document.getElementById(`token-counter-${panelType}`);
  if (!counter) return;

  const { words } = countTokens(text);
  const platform = panelType === 'image' ? 'midjourney' : 'video';
  const limits = { midjourney: 450, video: 600 };
  const max = limits[platform] || 600;

  counter.textContent = `${words}/${max} words`;
  counter.className = 'token-counter';
  if (words > max) {
    counter.classList.add('token-counter--over');
  } else if (words > max * 0.85) {
    counter.classList.add('token-counter--warn');
  }
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

  soundFX.playCopy();
  showCopyFeedback(btnId);
}

/**
 * Copies NotebookLM overview or chat section to clipboard
 * @param {'overview' | 'chat'} part
 * @param {string} btnId
 */
async function copyNotebookLM(part, btnId) {
  const el = document.getElementById('result-text-notebooklm');
  const text = el?.textContent ?? '';
  if (!text || el?.classList.contains('result-placeholder')) return;

  let textToCopy = text;
  if (part === 'chat') {
    const match = text.match(/💬[\s\S]*?(?=🎬|$)/);
    if (match) textToCopy = match[0].trim();
  } else if (part === 'overview') {
    const match = text.match(/🎬[\s\S]*/);
    if (match) textToCopy = match[0].trim();
  }

  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = textToCopy;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  soundFX.playCopy();
  showCopyFeedback(btnId);
}

/**
 * Translates the generated prompt to Vietnamese or English
 * @param {'image' | 'video' | 'notebooklm' | 'audio'} type
 */
async function translatePanel(type) {
  const btn = document.getElementById(`translate-btn-${type}`);
  const textEl = document.getElementById(`result-text-${type}`);
  const transEl = document.getElementById(`result-translation-${type}`);
  
  if (!btn || !textEl || !transEl || textEl.classList.contains('result-placeholder')) return;

  // If already translated and visible, allow toggling
  if (transEl.style.display === 'block' && transEl.textContent) {
    transEl.style.display = 'none';
    return;
  }

  const lang = localStorage.getItem("cine_lang") || "vi";
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `<span class="copy-label">${lang === 'vi' ? 'Đang dịch...' : 'Translating...'}</span>`;
  btn.disabled = true;

  try {
    const textToTranslate = textEl.textContent;
    const targetLang = lang === 'vi' ? 'vi' : 'en';
    const text = await translateCinematicText(textToTranslate, targetLang);

    if (text) {
      transEl.textContent = text;
      transEl.style.display = 'block';
    } else {
      transEl.textContent = lang === 'vi' ? 'Không thể dịch nội dung này.' : 'Unable to translate.';
      transEl.style.display = 'block';
    }
  } catch (err) {
    console.error('Translation error:', err);
    transEl.textContent = lang === 'vi' ? 'Lỗi dịch thuật. Vui lòng thử lại.' : 'Translation error. Please retry.';
    transEl.style.display = 'block';
  } finally {
    btn.innerHTML = originalHtml;
    btn.disabled = false;
  }
}

/* ── Core event handlers ──────────────────────────────────── */

function handleHistoryItemLoad(item) {
  const resultBox       = document.getElementById('result-box');
  const promptTitle     = document.getElementById('prompt-title');
  const resultTextImage = document.getElementById('result-text-image');
  const resultTextVideo = document.getElementById('result-text-video');

  if (item.subject) {
    const subjectInput = document.getElementById('subject-input');
    if (subjectInput) subjectInput.value = item.subject;
  }
  if (item.negative) {
    const negInput = document.getElementById('negative-input');
    if (negInput) negInput.value = item.negative;
  }

  if (promptTitle) promptTitle.textContent = item.title || 'Lịch Sử Prompt';
  if (resultTextImage) {
    resultTextImage.textContent = item.imagePrompt;
    resultTextImage.classList.remove('result-placeholder');
  }
  if (resultTextVideo) {
    resultTextVideo.textContent = item.videoPrompt || item.imagePrompt;
    resultTextVideo.classList.remove('result-placeholder');
  }

  currentTemplate = item.imagePrompt;
  currentTitle = item.title || 'Lịch Sử Prompt';
  
  refreshResult();

  if (resultBox) resultBox.classList.add('active');
  resultBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleClearHistory() {
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử Prompt đã lưu?')) {
    clearPromptHistory();
    handleFilterChange();
  }
}

/**
 * Called when the user clicks (or keyboard-activates) a card.
 * Generates the dual prompts AND opens the details modal.
 * @param {import('../types').Prompt} prompt
 */
function handleCardClick(prompt) {
  soundFX.playClick();
  currentTemplate   = prompt.promptTemplate;
  currentTitle      = prompt.name;
  currentDefinition = prompt.definition ?? '';

  setActiveCard(prompt.id);
  refreshResult();

  const gridCard = document.querySelector(`.card[data-id="${prompt.id}"]`);
  if (gridCard && gridCard.dataset.fromModalSelect === "true") {
    delete gridCard.dataset.fromModalSelect;
    return;
  }

  openModal(prompt.name, currentDefinition, prompt);
}

/**
 * Called whenever any filter (search, category, difficulty) changes.
 */
function handleFilterChange() {
  const query = document.getElementById('search-input')?.value || '';
  const category = document.getElementById('category-filter')?.value || 'all';
  const difficulty = document.getElementById('difficulty-filter')?.value || 'all';

  if (category === 'history') {
    const historyItems = getPromptHistory();
    renderHistoryGrid(historyItems, handleHistoryItemLoad, handleClearHistory);
    setActiveCard(null);
    return;
  }

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
 * Opens the Prompt Builder modal and populates the 6 technical dropdowns.
 */
function openBuilder() {
  document.getElementById('builder-modal-overlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  
  // Pre-fill subject if available in main input
  const mainSubject = document.getElementById('subject-input')?.value;
  const builderSub = document.getElementById('builder-subject-input');
  if (builderSub && mainSubject && !builderSub.value) {
    builderSub.value = mainSubject;
  }

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

  populate('camera', 'builder-camera-select');
  populate('lighting', 'builder-lighting-select');
  populate('composition', 'builder-composition-select');
  populate('vfx', 'builder-vfx-select');
  populate('audio', 'builder-audio-select');
}

function closeBuilder() {
  document.getElementById('builder-modal-overlay')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

function generateBuilderCombo() {
  const subjectVal = document.getElementById('builder-subject-input')?.value.trim();
  const cId = document.getElementById('builder-camera-select')?.value;
  const lId = document.getElementById('builder-lighting-select')?.value;
  const cpId = document.getElementById('builder-composition-select')?.value;
  const vId = document.getElementById('builder-vfx-select')?.value;
  const aId = document.getElementById('builder-audio-select')?.value;
  const aspectVal = document.getElementById('builder-aspect-select')?.value || '--ar 16:9';

  const parts = [];
  const titles = [];

  if (subjectVal) {
    parts.push(`Subject: ${subjectVal}`);
    titles.push(subjectVal);
    // Sync back to main subject input
    const mainSub = document.getElementById('subject-input');
    if (mainSub) mainSub.value = subjectVal;
  }

  if (cId) {
    const c = findById(cId);
    if (c) {
      parts.push(c.promptTemplate);
      titles.push(c.name);
    }
  }

  if (lId) {
    const l = findById(lId);
    if (l) {
      parts.push(l.promptTemplate);
      titles.push(l.name);
    }
  }

  if (cpId) {
    const cp = findById(cpId);
    if (cp) {
      parts.push(cp.promptTemplate);
      titles.push(cp.name);
    }
  }

  if (vId) {
    const v = findById(vId);
    if (v) {
      parts.push(v.promptTemplate);
      titles.push(v.name);
    }
  }

  const dialogueVal = document.getElementById('builder-dialogue-input')?.value.trim();
  const voiceToneVal = document.getElementById('builder-voice-tone-input')?.value.trim();
  const sfxVal = document.getElementById('builder-sfx-input')?.value.trim();

  if (aId) {
    const a = findById(aId);
    if (a) {
      parts.push(`Ambient noise: ${a.promptTemplate}`);
      titles.push(`🔊 ${a.name}`);
    }
  }

  // Veo 3.1 Audio & Dialogue formatting
  if (dialogueVal) {
    let dialoguePart = `Dialogue: "${dialogueVal.replace(/^["']|["']$/g, '')}"`;
    if (voiceToneVal) {
      dialoguePart += ` ${voiceToneVal.startsWith('spoken') ? voiceToneVal : 'spoken ' + voiceToneVal}`;
    }
    parts.push(dialoguePart);
    titles.push('💬 Lời thoại');
  } else if (voiceToneVal) {
    parts.push(`Voice style: ${voiceToneVal}`);
  }

  if (sfxVal) {
    const formattedSfx = sfxVal.startsWith('SFX:') ? sfxVal : `SFX: ${sfxVal}`;
    parts.push(formattedSfx);
    titles.push('⚡ SFX');
  }

  const physicsVal = document.getElementById('builder-physics-select')?.value;
  if (physicsVal) {
    parts.push(`Physics & Motion: ${physicsVal}`);
    titles.push('🌊 Physics');
  }

  if (parts.length === 0) {
    alert('Vui lòng chọn ít nhất 1 trường kỹ thuật hoặc nhập chủ thể để tạo kịch bản!');
    return;
  }

  parts.push(aspectVal);

  const isProMode = document.getElementById('builder-pro-mode')?.checked;
  if (isProMode) {
    const arClean = aspectVal.replace('--ar ', '');
    const subName = subjectVal || 'Chủ thể chính';
    const subClean = subjectVal || 'Nhân vật / Sản phẩm chính';
    const lightText = lId ? (findById(lId)?.promptTemplate || lId) : 'Warm studio lighting with soft highlights';
    const camText = cId ? (findById(cId)?.promptTemplate || cId) : 'Slow dolly-in shot';
    const compText = cpId ? (findById(cpId)?.promptTemplate || cpId) : 'Rule of thirds composition';
    const vfxText = vId ? (findById(vId)?.promptTemplate || vId) : 'Cinematic color grading';
    const audioText = aId ? (findById(aId)?.promptTemplate || aId) : 'Subtle ambient room tone';
    const dlgText = dialogueVal ? `"${dialogueVal.replace(/^["']|["']$/g, '')}"` : '"..."';

    currentTemplate = `## SCENE 1 (0-10S)
Tỷ lệ: ${arClean}
Style: Cinematic commercial film

### CONTINUITY LOCK
* Character Locked Spec: ${subClean}, detailed facial structure & signature outfit.
* Environment Locked Spec: Cinematic studio setup, balanced lighting, consistent color palette.

### CHARACTER DESCRIPTION LOCK
* Character Name: ${subName}
* Appearance: ${subClean}, ${compText}, ${vfxText}.
* Color Palette (HEX): #121420, #FFD700, #38BDF8

### ENVIRONMENT
Location: Studio / Ambient scene
Time/Lighting: ${lightText}
Mood: Atmospheric & Cinematic

### ACTION (ARC 8-GIÂY)
[0-2s] Close-up reveal of ${subClean}.
[2-5s] Main action sequence: ${subClean} moves naturally under ${camText}.
[5-8s] Final hero frame placement with ${physicsVal || 'natural motion'}.

### CAMERA
${camText}, ${compText}.

### VOICE OVER / DIALOGUE
VO: ${dlgText}
WORD_COUNT: ${dialogueVal ? dialogueVal.split(' ').length : 0}

### LIP-SYNC LOCK
Sync mouth movement with VO when speaking; keep closed during ambient moments.

### AUDIO & VFX
Ambient/Score: ${audioText}.
Visual FX: ${vfxText}, ${sfxVal ? 'SFX: ' + sfxVal : 'subtle SFX'}.

### SCENE ANCHOR
${subName} positioned at center, camera held steady on final hero frame.

### TRANSITION HOOK
Smooth lighting fade for seamless transition to Scene 2.

### NEGATIVE PROMPT (MANDATORY)
no proportion changes, no color shifts, no 3D realistic details, no wrong-speaker lip-sync, no cluttered background, no distorted hands.`;

    currentTitle = `UNIVERSAL PROMPT PRO (11 PHẦN): ${titles.slice(0, 3).join(' + ')}`;
    setActiveCard(null);
    refreshResult();
    closeBuilder();
    return;
  }

  currentTemplate = parts.join('. ') + '.';
  currentTitle = `STUDIO COMBO (VEO 3.1): ${titles.slice(0, 4).join(' + ')}`;

  setActiveCard(null);
  refreshResult();
  closeBuilder();
}

/**
 * AI Enhancement Logic
 */
let tempAIConfig = null;

function parseKeysCount(raw) {
  if (!raw) return 0;
  return raw.split(/[\n,;]+/).map(k => k.trim()).filter(k => k.length > 0).length;
}

function saveCurrentProviderState() {
  if (!tempAIConfig) return;
  const p = document.getElementById('ai-provider')?.value || 'gemini';
  if (!tempAIConfig.apiKeys) tempAIConfig.apiKeys = {};
  if (!tempAIConfig.modelNames) tempAIConfig.modelNames = {};
  
  const keyVal = document.getElementById('ai-api-key')?.value.trim() || '';
  const modelVal = document.getElementById('ai-model-name')?.value.trim() || '';
  
  tempAIConfig.apiKeys[p] = keyVal;
  tempAIConfig.modelNames[p] = modelVal;
}

function updateKeyCountBadge() {
  const keyVal = document.getElementById('ai-api-key')?.value || '';
  const count = parseKeysCount(keyVal);

  const display = document.getElementById('key-count-display') || document.getElementById('key-count-badge');
  if (display) {
    display.textContent = count > 1 ? `${count} Keys Đã Nhập` : count === 1 ? `1 Key Đã Nhập` : `Chưa Nhập Key`;
  }

  const statusBadge = document.getElementById('ai-key-status-badge');
  if (statusBadge) {
    if (count > 0) {
      statusBadge.textContent = count > 1 ? `🟢 ${count} Keys Pool Sẵn Sàng` : `🟢 Key Pool Sẵn Sàng`;
      statusBadge.style.background = 'rgba(34, 197, 94, 0.15)';
      statusBadge.style.color = '#4ade80';
      statusBadge.style.borderColor = 'rgba(34, 197, 94, 0.3)';
    } else {
      statusBadge.textContent = `⚪ Chưa Nhập Key`;
      statusBadge.style.background = 'rgba(148, 163, 184, 0.15)';
      statusBadge.style.color = '#94a3b8';
      statusBadge.style.borderColor = 'rgba(148, 163, 184, 0.3)';
    }
  }
}

function renderProviderBadges() {
  const container = document.getElementById('provider-badges-bar');
  if (!container || !tempAIConfig) return;

  const providers = [
    { id: 'gemini', name: 'Gemini' },
    { id: 'openai', name: 'OpenAI' },
    { id: 'deepseek', name: 'DeepSeek' },
    { id: 'openrouter', name: 'OpenRouter' },
    { id: 'agentrouter', name: 'AgentRouter' },
    { id: 'ollama', name: 'Ollama (Local)' }
  ];

  const activeP = document.getElementById('ai-provider')?.value || 'gemini';

  container.innerHTML = providers.map(p => {
    let count = 0;
    if (p.id === 'ollama') {
      count = 1; // Local server
    } else {
      const keys = (tempAIConfig.apiKeys || {})[p.id] || '';
      count = parseKeysCount(keys);
    }

    const isCurrent = p.id === activeP;
    const hasKeys = count > 0;
    const badgeClass = `provider-badge ${hasKeys ? 'badge-has-key' : 'badge-empty'} ${isCurrent ? 'badge-current' : ''}`;
    
    return `<button type="button" class="${badgeClass}" onclick="switchAIProvider('${p.id}')" title="Click để chuyển sang ${p.name}">
      <span class="badge-dot">${hasKeys ? '🟢' : '⚪'}</span>
      <span class="badge-name">${p.name}</span>
      ${count > 0 && p.id !== 'ollama' ? `<span class="badge-count">${count}</span>` : ''}
    </button>`;
  }).join('');
}

window.switchAIProvider = function(pId) {
  saveCurrentProviderState();
  const select = document.getElementById('ai-provider');
  if (select) {
    select.value = pId;
    updateProviderInputs();
  }
};

let currentProviderRef = 'gemini';

function updateProviderInputs() {
  if (!tempAIConfig) return;
  
  // Save previous
  if (currentProviderRef && tempAIConfig.apiKeys) {
    const keyVal = document.getElementById('ai-api-key')?.value.trim() || '';
    const modelVal = document.getElementById('ai-model-name')?.value.trim() || '';
    tempAIConfig.apiKeys[currentProviderRef] = keyVal;
    tempAIConfig.modelNames[currentProviderRef] = modelVal;
  }

  const p = document.getElementById('ai-provider')?.value || 'gemini';
  currentProviderRef = p;

  if (!tempAIConfig.apiKeys) tempAIConfig.apiKeys = {};
  if (!tempAIConfig.modelNames) tempAIConfig.modelNames = {};
  
  const keyInput = document.getElementById('ai-api-key');
  if (keyInput) {
    keyInput.value = tempAIConfig.apiKeys[p] || '';
  }
  
  const defaultModels = {
     gemini: 'gemini-1.5-flash',
     openai: 'gpt-4o-mini',
     agentrouter: 'gpt-4o-mini',
     ollama: 'llama3'
  };
  const modelInput = document.getElementById('ai-model-name');
  if (modelInput) {
    modelInput.value = tempAIConfig.modelNames[p] || defaultModels[p] || '';
  }

  updateKeyCountBadge();
  renderProviderBadges();
}

function openAISettings() {
  tempAIConfig = JSON.parse(JSON.stringify(getAIConfig()));
  currentProviderRef = tempAIConfig.provider || 'gemini';
  
  const providerEl = document.getElementById('ai-provider');
  if (providerEl) providerEl.value = currentProviderRef;

  const targetToolEl = document.getElementById('ai-target-tool');
  if (targetToolEl) targetToolEl.value = tempAIConfig.targetTool || 'midjourney';

  const rotateCheckbox = document.getElementById('ai-rotate-enabled');
  if (rotateCheckbox) rotateCheckbox.checked = !!tempAIConfig.rotateEnabled;
  
  updateProviderInputs();

  // Attach live input listeners for real-time key count & badge updates
  const keyInput = document.getElementById('ai-api-key');
  if (keyInput && !keyInput.dataset.listenerAttached) {
    keyInput.dataset.listenerAttached = "true";
    keyInput.addEventListener('input', () => {
      saveCurrentProviderState();
      updateKeyCountBadge();
      renderProviderBadges();
    });
  }

  const providerSelect = document.getElementById('ai-provider');
  if (providerSelect && !providerSelect.dataset.listenerAttached) {
    providerSelect.dataset.listenerAttached = "true";
    providerSelect.addEventListener('change', () => {
      updateProviderInputs();
    });
  }

  const testBtn = document.getElementById('ai-test-btn');
  if (testBtn && !testBtn.dataset.listenerAttached) {
    testBtn.dataset.listenerAttached = "true";
    testBtn.addEventListener('click', async () => {
      saveCurrentProviderState();
      const p = document.getElementById('ai-provider')?.value || 'gemini';
      const keyVal = document.getElementById('ai-api-key')?.value.trim() || '';
      const modelVal = document.getElementById('ai-model-name')?.value.trim() || '';
      
      const testStatusBadge = document.getElementById('ai-key-status-badge');
      const originalText = testBtn.innerHTML;
      testBtn.innerHTML = '⏳ Đang Ping Key...';
      testBtn.disabled = true;

      try {
        await testSingleKey(p, keyVal, modelVal);
        testBtn.innerHTML = '✅ Kết Nối Thành Công!';
        if (testStatusBadge) {
          testStatusBadge.innerHTML = '🟢 Key Pool Hoạt Động Cực Tốt!';
          testStatusBadge.style.background = 'rgba(34, 197, 94, 0.2)';
          testStatusBadge.style.color = '#4ade80';
        }
      } catch (err) {
        testBtn.innerHTML = '&#10060; Kết Nối Thất Bại!';
        if (testStatusBadge) {
          // Sanitize error message: show only first 80 chars, strip HTML tags
          const safeMsg = (err.message || 'Key thất bại')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .substring(0, 80);
          testStatusBadge.innerHTML = '&#128308; Lỗi: ' + safeMsg;
          testStatusBadge.style.background = 'rgba(239, 68, 68, 0.2)';
          testStatusBadge.style.color = '#f87171';
        }

      } finally {
        setTimeout(() => {
          testBtn.innerHTML = originalText;
          testBtn.disabled = false;
        }, 3000);
      }
    });
  }
  
  document.getElementById('ai-modal-overlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeAISettings() {
  tempAIConfig = null;
  document.getElementById('ai-modal-overlay')?.classList.remove('is-open');
  document.body.style.overflow = '';
}

function saveAISettings() {
  saveCurrentProviderState();
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
    showToast('⚠️ Vui lòng nhập ý tưởng (Subject) trước khi nhờ AI viết!', 'warning');
    return;
  }

  const originalText = enhanceBtn.textContent;
  enhanceBtn.textContent = '✨ Suy nghĩ...';
  enhanceBtn.disabled = true;
  subjectInput.disabled = true;

  // Built-in Smart Hollywood Expander (Guarantees 100/100 S+ Grade)
  const generateBuiltinEnhancement = (rawIdea) => {
    const char = getCharacterValue();
    const charPart = char ? `${char}, ` : '';
    const visualDetails = [
      'photorealistic masterpiece still, 8k resolution',
      'chiaroscuro lighting contrast, cinematic volumetric god rays, practical light atmosphere',
      'shot on ARRI Alexa 65 with 35mm anamorphic lens f/1.8',
      'shallow depth of field, natural organic bokeh',
      'rule of thirds composition, leading lines, layered depth with foreground elements',
      'authentic skin pores, expressive eyes, dressed in detailed wardrobe',
      'shot on Kodak Portra 400 film stock, subtle organic film grain, cinematic teal-orange color grading'
    ];
    return `${charPart}${rawIdea}, ${visualDetails.join(', ')} --ar 16:9 --style raw --v 8`;
  };

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

    for (const p of providersToTry) {
       try {
         const apiKey = (config.apiKeys || {})[p] || '';
         if (!apiKey && p !== 'ollama') {
           continue; // Skip providers with missing keys
         }

         const activeConfig = {
           provider: p,
           apiKey: apiKey,
           modelName: (config.modelNames || {})[p] || '',
           targetTool: config.targetTool
         };
         
          // Build context data for AI
          const contextData = {
            character: getCharacterValue(),
            negative: getNegativePromptValue(),
            aspectRatio: getAspectRatioValue(),
            fps: getActiveFPS(),
            activePreset: activePreset,
            characterBible: getActiveCharacterContext(),
            colorPalette: getActiveCharacterContext()?.colorPalette || '',
          };
          enhanced = await enhanceSubjectWithAI(subject, activeConfig, contextData);
          if (enhanced) break; // Success
       } catch (err) {
         console.warn(`[AI Rotation] Provider ${p} failed:`, err);
       }
    }

    if (!enhanced) {
       // Graceful Smart Fallback with 0 errors!
       enhanced = generateBuiltinEnhancement(subject);
       showToast('✨ Đã nâng cấp bằng Bộ Tăng Cường Hollywood Tích Hợp (Offline SOTA)!', 'success', 3500);
    } else {
       showToast('✨ Đã nâng cấp kịch bản thành công qua Cloud AI!', 'success', 2500);
    }

    subjectInput.value = enhanced;
    autoResizeTextarea(subjectInput);
    currentTemplate = "[Subject]";
    currentTitle = "AI ENHANCED MASTER PROMPT";
    setActiveCard(null);
    refreshResult();
  } catch (err) {
    console.warn('AI enhancement fallback triggered:', err);
    const fallback = generateBuiltinEnhancement(subject);
    subjectInput.value = fallback;
    autoResizeTextarea(subjectInput);
    currentTemplate = "[Subject]";
    currentTitle = "AI ENHANCED MASTER PROMPT";
    setActiveCard(null);
    refreshResult();
    showToast('✨ Đã nâng cấp bằng Bộ Tăng Cường Hollywood Tích Hợp!', 'success');
  } finally {
    enhanceBtn.textContent = '✨ AI Enhance';
    enhanceBtn.disabled = false;
    subjectInput.disabled = false;
  }
}

/**
 * Fetches a translation of the current modal definition
 * using multi-tier translate engine and displays it inside the modal.
 */
async function handleTranslate() {
  const btn         = document.getElementById('translate-btn');
  const translation = document.getElementById('modal-translation');
  if (!btn || !translation || !currentDefinition) return;

  const lang = localStorage.getItem("cine_lang") || "vi";

  // Disable button + show loading state
  btn.textContent = lang === 'vi' ? 'Đang dịch...' : 'Translating…';
  btn.disabled    = true;

  try {
    const targetLang = lang === 'vi' ? 'vi' : 'en';
    const text = await translateCinematicText(currentDefinition, targetLang);

    if (!text) throw new Error('Empty response');

    translation.textContent = text;
    translation.classList.remove('modal-translation--error');
    translation.classList.add('is-visible');

    // Hide button — translation is now shown
    btn.classList.add('is-hidden');

  } catch (err) {
    console.error('Translation error:', err);
    translation.textContent = lang === 'vi' 
      ? 'Lỗi dịch thuật (Translation failed). Vui lòng thử lại.'
      : 'Translation failed. Please retry.';
    translation.classList.add('is-visible', 'modal-translation--error');

    // Re-enable so user can retry
    btn.textContent = lang === 'vi' ? '🇻🇳 Dịch sang Tiếng Việt' : '🌐 Translate';
    btn.disabled    = false;
  }
}

/**
 * Director's Cut: combines camera + lighting + composition + vfx
 * and immediately renders the dual result.
 */
function handleDirectorsCut() {
  soundFX.playRoll();
  triggerRandomizeAnimation();

  const combo = getRandomCombo();
  if (!combo) return;

  currentTemplate = combo.combined.promptTemplate;
  currentTitle    = `DIRECTOR'S CUT: ${combo.combined.name}`;

  setActiveCard(null);
  refreshResult();
}

/* ── STYLE PRESETS ───────────────────────────────────────────── */

/**
 * Curated keyword mappings for each style preset.
 * Each preset defines arrays of terms to match against prompt names/definitions.
 */
const STYLE_PRESETS = {
  nolan: {
    label: '🚀 Nolan IMAX',
    color: '#ffd700',
    fps: '24fps',
    description: '70mm IMAX 15-perf · Thực tế vật lý · Kèn Hans Zimmer',
    keywords: {
      camera:      ['extreme wide', 'establishing', 'tracking shot', 'low angle'],
      lighting:    ['tungsten', 'natural light', 'volumetric', 'high contrast'],
      composition: ['rule of thirds', 'leading lines', 'layered depth', 'scale'],
      vfx:         ['film grain', 'anamorphic', 'imax', 'photorealistic'],
    },
    extraSuffix: ', directed by Christopher Nolan, 70mm IMAX cinematography, practical in-camera realism, grand architectural scale, Hans Zimmer brass swell',
  },
  deakins: {
    label: '🕯️ Deakins Light',
    color: '#f59e0b',
    fps: '24fps',
    description: 'Bậc Thầy Ánh Sáng Tự Nhiên · Ngược Sáng Silhouette · 35mm Master Prime',
    keywords: {
      camera:      ['medium shot', 'wide shot', 'slow dolly in', 'silhouette'],
      lighting:    ['chiaroscuro', 'low key', 'golden hour', 'natural light', 'rim light'],
      composition: ['rule of thirds', 'leading lines', 'symmetry', 'negative space'],
      vfx:         ['film look', 'atmospheric', 'high dynamic range'],
    },
    extraSuffix: ', cinematography by Roger Deakins, natural low-key lighting, ARRI Alexa with 35mm Master Prime, deep chiaroscuro silhouettes',
  },
  villeneuve: {
    label: '🏜️ Villeneuve Dune',
    color: '#ea580c',
    fps: '24fps',
    description: 'Kiến Trúc Monolith Khổng Lồ · Bụi Khí Quyển · Bảng Màu Ochre/Slate',
    keywords: {
      camera:      ['extreme wide', 'aerial', 'drone', 'low angle'],
      lighting:    ['diffused', 'overcast', 'golden hour', 'volumetric'],
      composition: ['scale', 'negative space', 'center frame', 'symmetry'],
      vfx:         ['dust haze', 'sandstorm', 'atmospheric', 'monolithic'],
    },
    extraSuffix: ', directed by Denis Villeneuve, cinematography by Greig Fraser, monumental brutalist architecture, dense atmospheric sand haze',
  },
  tarantino: {
    label: '🔥 Tarantino 70s',
    color: '#ef4444',
    fps: '24fps',
    description: 'Trunk Shot Từ Cốp Xe · 70s Technicolor Rực Cháy · Whip Pan',
    keywords: {
      camera:      ['low angle', 'close up', 'whip pan', 'snap zoom'],
      lighting:    ['hard light', 'dramatic', 'vintage', 'warm light'],
      composition: ['framing within frame', 'center frame', 'rule of thirds'],
      vfx:         ['technicolor', 'vintage', '70s film', 'high contrast'],
    },
    extraSuffix: ', directed by Quentin Tarantino, low-angle upward trunk shot, rich 1970s Technicolor film saturation, vintage pulp cinema aesthetic',
  },
  fincher: {
    label: '📐 Fincher Precision',
    color: '#10b981',
    fps: '24fps',
    description: 'Chuyển Động Chuẩn Xác · Tông Vàng Xanh Lạnh · Vi Tương Phản Cao',
    keywords: {
      camera:      ['slow tracking shot', 'medium shot', 'low angle', 'close up'],
      lighting:    ['low key', 'fluorescent', 'moody', 'shadow'],
      composition: ['rule of thirds', 'symmetry', 'leading lines'],
      vfx:         ['desaturated', 'sickly green', 'film look', 'clean'],
    },
    extraSuffix: ', directed by David Fincher, surgical camera stabilization, clinical desaturated sickly yellow-green color grading',
  },
  wong_kar_wai: {
    label: '🌃 Wong Kar-wai',
    color: '#ec4899',
    fps: '12fps',
    description: 'Step-printing 12fps · Mưa Đêm Neon Hong Kong · Nỗi Buồn Hoài Niệm',
    keywords: {
      camera:      ['close up', 'medium shot', 'dutch angle', 'slow motion'],
      lighting:    ['neon', 'reflected light', 'moody', 'low key'],
      composition: ['framing within frame', 'rule of thirds', 'layered depth'],
      vfx:         ['step printing', 'motion blur', 'film grain', 'vintage'],
    },
    extraSuffix: ', directed by Wong Kar-wai, step-printing 12fps motion blur, neon-drenched Hong Kong rain reflections, poetic yearning melancholy',
  },
  ridley_scott: {
    label: '🌧️ Ridley Scott',
    color: '#06b6d4',
    fps: '24fps',
    description: 'Khói Sương Volumetric · Vệt Anamorphic Xanh · Blade Runner Noir',
    keywords: {
      camera:      ['wide shot', 'tracking shot', 'low angle', 'establishing'],
      lighting:    ['backlight', 'rim light', 'volumetric rays', 'neon'],
      composition: ['layered depth', 'foreground interest', 'rule of thirds'],
      vfx:         ['anamorphic flare', 'volumetric smoke', 'blade runner', 'cyberpunk'],
    },
    extraSuffix: ', directed by Ridley Scott, heavy volumetric atmospheric smoke and backlit rain, sharp Panavision anamorphic blue streak flares',
  },
  vox: {
    label: '📺 Vox Style',
    color: '#38bdf8',
    fps: '12fps',
    description: 'Chậm rãi 12fps · Informational · Wide + Chiaroscuro + Rule of Thirds',
    keywords: {
      camera:      ['wide shot', 'extreme wide', 'establishing', 'medium shot'],
      lighting:    ['chiaroscuro', 'low key', 'flat lighting', 'soft light', 'diffused'],
      composition: ['rule of thirds', 'leading lines', 'negative space', 'symmetry'],
      vfx:         ['motion graphics', 'flat design', 'infographic', 'kinetic typography'],
    },
    extraSuffix: ', documentary motion graphic style, 12fps stop-motion feel, informational visual',
  },
  bbc: {
    label: '🌍 BBC Documentary',
    color: '#4ade80',
    fps: '24fps',
    description: 'Epic Wide · Golden Hour · Nature & Wildlife',
    keywords: {
      camera:      ['extreme wide', 'aerial', 'establishing', 'drone'],
      lighting:    ['golden hour', 'natural light', 'magic hour', 'blue hour'],
      composition: ['rule of thirds', 'leading lines', 'foreground interest', 'layered depth'],
      vfx:         ['color grading', 'film look', 'naturalistic'],
    },
    extraSuffix: ', BBC documentary cinematography, photorealistic, epic scope, David Attenborough narration feel',
  },
  iman: {
    label: '💼 Iman Gadzhi',
    color: '#fbbf24',
    fps: '24fps',
    description: 'Talking Head · Urban Minimal · Handheld Energy',
    keywords: {
      camera:      ['medium shot', 'close up', 'portrait', 'talking head', 'shoulder'],
      lighting:    ['rim light', 'soft box', 'studio lighting', 'cinematic', 'three point'],
      composition: ['negative space', 'center frame', 'symmetry', 'clean minimal'],
      vfx:         ['shallow depth of field', 'bokeh', 'sharp focus', 'urban'],
    },
    extraSuffix: ', entrepreneurship vlog aesthetic, sharp focus subject, urban luxury backdrop, clean minimal',
  },
  noir: {
    label: '🎭 Film Noir',
    color: '#c084fc',
    fps: '24fps',
    description: 'High Contrast · Dramatic Shadows · Anamorphic Lens',
    keywords: {
      camera:      ['low angle', 'dutch angle', 'extreme close up', 'silhouette'],
      lighting:    ['chiaroscuro', 'low key', 'hard light', 'shadow', 'dramatic', 'spotlight'],
      composition: ['leading lines', 'framing within frame', 'rule of thirds', 'symmetry'],
      vfx:         ['anamorphic', 'film grain', 'desaturated', 'high contrast', 'vignette'],
    },
    extraSuffix: ', classic Hollywood film noir, heavy shadows, rain-slicked streets, anamorphic lens flare, 35mm grain',
  },
  wes: {
    label: '🎨 Wes Anderson',
    color: '#fb923c',
    fps: '24fps',
    description: 'Perfect Symmetry · Pastel Palette · Quirky Flat',
    keywords: {
      camera:      ['flat angle', 'wide shot', 'symmetrical', 'medium shot', 'overhead'],
      lighting:    ['soft light', 'pastel', 'flat lighting', 'diffused', 'overcast'],
      composition: ['symmetry', 'center frame', 'rule of thirds', 'leading lines'],
      vfx:         ['pastel', 'warm tones', 'whimsical', 'color palette', 'retro'],
    },
    extraSuffix: ', Wes Anderson film aesthetic, perfect bilateral symmetry, pastel color palette, whimsical storybook, quirky deadpan',
  },
  food_asmr: {
    label: '🍜 F&B ASMR 10s',
    color: '#10b981',
    fps: '24fps',
    description: 'Food & Drink ASMR · Macro Texture · 10s Multi-Shot Timeline',
    keywords: {
      camera:      ['macro shot', 'close up', 'slow push in', 'extreme close up'],
      lighting:    ['warm light', 'soft backlight', 'cozy morning', 'natural light'],
      composition: ['shallow depth of field', 'leading lines', 'rule of thirds'],
      vfx:         ['cinematic steam', 'fluid dynamics', 'high appetite appeal'],
    },
    extraSuffix: ', 10-second vertical 9:16 food ASMR, macro texture focus, high appetite appeal, realistic fluid dynamics',
  },
  travel_resort: {
    label: '✈️ Travel Reel 10s',
    color: '#38bdf8',
    fps: '24fps',
    description: 'Luxury Travel · Destination Reel · 10s Dreamscape Multi-Shot',
    keywords: {
      camera:      ['aerial', 'drone', 'slow tracking shot', 'establishing', 'wide shot'],
      lighting:    ['golden hour', 'blue hour', 'soft morning light', 'twilight'],
      composition: ['layered depth', 'foreground interest', 'rule of thirds', 'negative space'],
      vfx:         ['cinematic travel reel', 'luxury resort aesthetics', 'dreamscape'],
    },
    extraSuffix: ', 10-second vertical 9:16 luxury destination travel reel, cinematic atmosphere, authentic location audio',
  },
  wf_shop: {
    label: '🛍️ Shop Online 10s',
    color: '#10b981',
    fps: '24fps',
    description: 'Video bán hàng 10s · Khóa sản phẩm 100% · Safe zone CTA',
    keywords: {
      camera:      ['close up', 'macro shot', 'slow push in', 'static shot'],
      lighting:    ['warm morning light', 'softbox studio light', 'natural light'],
      composition: ['center frame', 'rule of thirds', 'clean minimal'],
      vfx:         ['high appetite appeal', 'realistic commercial', 'sharp focus'],
    },
    extraSuffix: ', 10-second vertical 9:16 product sales video, strictly maintain product shape and logo, leave safe zone at top for CTA caption',
  },
  wf_marketer: {
    label: '📊 Marketer A/B',
    color: '#f59e0b',
    fps: '24fps',
    description: 'Workflow A/B Test · Visual Hook · High Conversion Framing',
    keywords: {
      camera:      ['establishing', 'orbit shot', 'medium shot', 'slow tracking shot'],
      lighting:    ['rim light', 'three point', 'cinematic', 'high-key lighting'],
      composition: ['leading lines', 'rule of thirds', 'negative space'],
      vfx:         ['commercial', 'color grading', 'sharp focus'],
    },
    extraSuffix: ', 10-second marketing A/B concept reel, strong 2-second visual hook, clean brand framing',
  },
  wf_faceless: {
    label: '🎬 Creator Faceless',
    color: '#a855f7',
    fps: '24fps',
    description: 'B-Roll Kênh Không Mặt · Safe Zone Caption · Clean Lifestyle',
    keywords: {
      camera:      ['top-down', 'pov shot', 'medium shot', 'close up'],
      lighting:    ['soft light', 'natural light', 'diffused'],
      composition: ['negative space', 'clean minimal', 'rule of thirds'],
      vfx:         ['shallow depth of field', 'bokeh', 'minimalist'],
    },
    extraSuffix: ', 10-second vertical 9:16 faceless B-roll, no human faces visible, spacious top safe zone for voiceover captions',
  },
  wf_educator: {
    label: '🎓 Educator Claymation',
    color: '#ec4899',
    fps: '24fps',
    description: 'Video Giải Thích · Handmade Claymation · Metaphor Visual',
    keywords: {
      camera:      ['flat angle', 'medium shot', 'overhead', 'slow push in'],
      lighting:    ['warm light', 'soft light', 'diffused'],
      composition: ['center frame', 'symmetry', 'rule of thirds'],
      vfx:         ['claymation', 'stop motion', 'whimsical'],
    },
    extraSuffix: ', 10-second handmade claymation style educational video, tactile clay textures, clear single visual metaphor, warm friendly light',
  },
  wf_freelancer: {
    label: '💼 Freelancer Moodboard',
    color: '#6366f1',
    fps: '24fps',
    description: 'Dựng Video Moodboard 10s · Aesthetic Showcase · Zero Artifacts',
    keywords: {
      camera:      ['slow dolly in', 'tracking shot', 'establishing', 'wide shot'],
      lighting:    ['chiaroscuro', 'low key', 'golden hour', 'blue hour'],
      composition: ['layered depth', 'foreground interest', 'rule of thirds'],
      vfx:         ['film look', 'cinematic lighting', 'high dynamic range'],
    },
    extraSuffix: ', 10-second cinematic previsualization moodboard, high aesthetic motion showcase, zero distortion artifacts',
  },
};

/**
 * Apply a style preset: find best-matching prompt from each category
 * and combine them into a curated combo.
 */
function applyStylePreset(presetKey) {
  const preset = STYLE_PRESETS[presetKey];
  if (!preset) return;

  const allData = window._allPrompts || [];
  if (allData.length === 0) return;

  function findBestMatch(category, keywords) {
    const pool = allData.filter(p => p.category === category);
    if (pool.length === 0) return null;
    // Score by how many keywords match
    const scored = pool.map(p => {
      const text = `${p.name} ${p.definition || ''}`.toLowerCase();
      const score = keywords.reduce((s, kw) => s + (text.includes(kw.toLowerCase()) ? 1 : 0), 0);
      return { p, score };
    });
    scored.sort((a, b) => b.score - a.score);
    // If best score > 0 use it, else random
    return scored[0].score > 0 ? scored[0].p : pool[Math.floor(Math.random() * pool.length)];
  }

  const camera      = findBestMatch('camera', preset.keywords.camera);
  const lighting    = findBestMatch('lighting', preset.keywords.lighting);
  const composition = findBestMatch('composition', preset.keywords.composition);
  const vfx         = findBestMatch('vfx', preset.keywords.vfx) ||
                      findBestMatch('videostyles', preset.keywords.vfx);

  if (!camera || !lighting || !composition) return;

  const vfxPart = vfx ? `. ${vfx.promptTemplate}` : '';
  const combined = [
    camera.promptTemplate,
    lighting.promptTemplate,
    composition.promptTemplate,
  ].join('. ') + vfxPart + preset.extraSuffix;

  const parts = [camera.name, lighting.name, composition.name];
  if (vfx) parts.push(vfx.name);

  currentTemplate = combined;
  currentTitle    = `${preset.label}: ${parts.join(' + ')}`;
  activePreset    = presetKey;

  // Update UI — highlight active pill
  document.querySelectorAll('.style-pill').forEach(btn => {
    btn.classList.toggle('style-pill--active', btn.dataset.preset === presetKey);
    if (btn.dataset.preset === presetKey) {
      btn.style.setProperty('--pill-accent', preset.color);
    }
  });

  // Show active badge
  const activeBar  = document.getElementById('style-preset-active');
  const activeName = document.getElementById('preset-active-name');
  if (activeBar && activeName) {
    activeName.textContent = preset.label + ' · ' + preset.description;
    activeName.style.color = preset.color;
    activeBar.style.display = 'flex';
  }

  triggerRandomizeAnimation();
  setActiveCard(null);
  refreshResult();
}

/**
 * Clear the active style preset and return to normal mode.
 */
function clearStylePreset() {
  activePreset = null;
  document.querySelectorAll('.style-pill').forEach(btn => btn.classList.remove('style-pill--active'));
  const activeBar = document.getElementById('style-preset-active');
  if (activeBar) activeBar.style.display = 'none';
  currentTemplate = null;
  currentTitle    = '';
  refreshResult();
}

/**
 * Updates the visual active state of the Production Pipeline Tracker
 */
function updatePipelineStep(stepNum, statusText) {
  const statusEl = document.getElementById('pipeline-status-text');
  if (statusEl) statusEl.textContent = statusText;

  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById(`p-step-${i}`);
    if (stepEl) {
      if (i <= stepNum) {
        stepEl.classList.add('active');
      } else {
        stepEl.classList.remove('active');
      }
    }
  }
}

/**
 * Reference Image Upload & Smart Textarea Auto-Resize Controller (Checklist Compliant)
 */
function initReferenceImageModule() {
  const dropzone = document.getElementById('ref-image-dropzone');
  const fileInput = document.getElementById('ref-image-file-input');
  const previewBox = document.getElementById('ref-image-preview-box');
  const progressBar = document.getElementById('ref-image-progress-bar');
  const progressFill = document.getElementById('ref-progress-fill');
  const progressPercent = document.getElementById('ref-progress-percent');
  const progressLabel = document.getElementById('ref-progress-label');
  const thumbImg = document.getElementById('ref-image-thumb');
  const nameEl = document.getElementById('ref-image-name');
  const sizeEl = document.getElementById('ref-image-size');
  const removeBtn = document.getElementById('ref-image-remove-btn');
  const replaceBtn = document.getElementById('ref-image-replace-btn');
  const analyzeBtn = document.getElementById('ref-image-analyze-btn');
  const statusEl = document.getElementById('ref-image-status');
  const dropTextMain = document.getElementById('ref-drop-text-main');
  
  if (!dropzone || !fileInput) return;

  // 1. Click to upload / replace
  dropzone.addEventListener('click', () => fileInput.click());
  replaceBtn?.addEventListener('click', () => fileInput.click());

  // 2. Drag & Drop Visual Interactions
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.style.borderColor = '#38bdf8';
      dropzone.style.background = 'rgba(56, 189, 248, 0.18)';
      dropzone.style.boxShadow = '0 0 20px rgba(56,189,248,0.3)';
      if (dropTextMain) dropTextMain.textContent = '✨ Thả ảnh vào đây để tải lên ngay!';
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'rgba(56, 189, 248, 0.35)';
      dropzone.style.background = 'rgba(0, 0, 0, 0.35)';
      dropzone.style.boxShadow = 'none';
      if (dropTextMain) dropTextMain.textContent = 'Kéo thả ảnh vào đây hoặc bấm để chọn tệp';
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      handleImageFile(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleImageFile(e.target.files[0]);
    }
  });

  // 3. File validation & Progress handling
  function formatBytes(bytes, decimals = 1) {
    if (!+bytes) return '0 B';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  function handleImageFile(file) {
    // Check format constraint
    if (!file.type.startsWith('image/')) {
      soundFX.playClick();
      showToast('⚠️ Định dạng không hợp lệ! Vui lòng chọn tệp ảnh PNG, JPG hoặc WEBP.', 'error');
      return;
    }

    // Check size constraint (Max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      soundFX.playClick();
      showToast('⚠️ Dung lượng vượt quá giới hạn! Vui lòng chọn ảnh nhỏ hơn 10MB.', 'error');
      return;
    }

    // Show Progress Bar
    if (progressBar) {
      progressBar.style.display = 'block';
      if (progressPercent) progressPercent.textContent = '35%';
      if (progressFill) progressFill.style.width = '35%';
      if (progressLabel) progressLabel.textContent = `Đang đọc ${file.name}...`;
    }

    const reader = new FileReader();

    reader.onprogress = (e) => {
      if (e.lengthComputable && progressBar) {
        const percent = Math.round((e.loaded / e.total) * 100);
        if (progressPercent) progressPercent.textContent = `${percent}%`;
        if (progressFill) progressFill.style.width = `${percent}%`;
      }
    };

    reader.onload = (event) => {
      setTimeout(() => {
        const dataUrl = event.target.result;
        const base64 = dataUrl.split(',')[1];
        currentReferenceImage = {
          name: file.name,
          size: file.size,
          mimeType: file.type,
          base64: base64,
          dataUrl: dataUrl
        };
        
        // Update UI
        if (thumbImg) thumbImg.src = dataUrl;
        if (nameEl) nameEl.textContent = file.name;
        if (sizeEl) sizeEl.textContent = formatBytes(file.size);
        if (progressBar) progressBar.style.display = 'none';
        if (dropzone) dropzone.style.display = 'none';
        if (previewBox) previewBox.style.display = 'flex';
        if (statusEl) {
          statusEl.textContent = '🟢 Active Anchor';
          statusEl.style.color = '#34d399';
        }

        soundFX.playCopy();
        showToast(`✅ Đã tải thành công: ${file.name} (${formatBytes(file.size)})`, 'success');
        refreshResult();
      }, 300);
    };

    reader.onerror = () => {
      if (progressBar) progressBar.style.display = 'none';
      soundFX.playClick();
      showToast('❌ Đọc tệp thất bại. Vui lòng thử lại!', 'error');
    };

    reader.readAsDataURL(file);
  }

  // 4. Remove image action
  removeBtn?.addEventListener('click', () => {
    currentReferenceImage = null;
    if (fileInput) fileInput.value = '';
    if (previewBox) previewBox.style.display = 'none';
    if (dropzone) dropzone.style.display = 'block';
    if (statusEl) {
      statusEl.textContent = 'Image-to-Video Hook';
      statusEl.style.color = '#a1a1aa';
    }
    soundFX.playClick();
    showToast('🗑️ Đã gỡ ảnh tham chiếu.', 'info');
    refreshResult();
  });

  // 5. AI Vision Analyze Image
  analyzeBtn?.addEventListener('click', async () => {
    if (!currentReferenceImage) return;
    const config = getAIConfig();
    const originalText = analyzeBtn.innerHTML;
    
    try {
      analyzeBtn.innerHTML = '⏳ Đang phân tích DNA...';
      analyzeBtn.disabled = true;
      soundFX.playRoll();
      
      const visionResult = await analyzeImageWithAI(
        currentReferenceImage.base64,
        currentReferenceImage.mimeType,
        config
      );
      
      const subInput = document.getElementById('subject-input');
      if (subInput) {
        subInput.value = visionResult;
        autoResizeTextarea(subInput);
        subInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      
      soundFX.playCopy();
      showToast('✨ AI Vision đã trích xuất thành công DNA & bối cảnh từ ảnh!', 'success');
    } catch (err) {
      soundFX.playClick();
      showToast('⚠️ AI Vision: ' + (err.message || 'Không thể phân tích ảnh'), 'error');
    } finally {
      analyzeBtn.innerHTML = originalText;
      analyzeBtn.disabled = false;
    }
  });

  // Clear button for Subject
  document.getElementById('subject-clear-btn')?.addEventListener('click', () => {
    const sub = document.getElementById('subject-input');
    if (sub) {
      sub.value = '';
      autoResizeTextarea(sub);
      refreshResult();
    }
  });

  // Clear button for Character
  document.getElementById('character-clear-btn')?.addEventListener('click', () => {
    const char = document.getElementById('character-input');
    if (char) {
      char.value = '';
      autoResizeTextarea(char);
      refreshResult();
    }
  });

  // Auto-resize on input
  document.getElementById('subject-input')?.addEventListener('input', (e) => {
    autoResizeTextarea(e.target);
  });
  document.getElementById('character-input')?.addEventListener('input', (e) => {
    autoResizeTextarea(e.target);
  });
}

/**
 * Checklist Design Master Enhancements (Tour, Pills, Masking, History Drawer)
 */
function initChecklistDesignFeatures() {
  // 1. Tour Start Button
  document.getElementById('tour-start-btn')?.addEventListener('click', () => {
    onboardingTour.start();
  });

  // 2. Platform Quick-Filters (Dropdown Menu)
  const catTrigger = document.getElementById('cat-dropdown-trigger');
  const catPanel = document.getElementById('cat-dropdown-panel');
  const catLabel = document.getElementById('cat-dropdown-label');
  const catChevron = document.getElementById('cat-dropdown-chevron');
  let catDropdownOpen = false;

  function toggleCatDropdown(forceClose) {
    if (forceClose || catDropdownOpen) {
      catPanel.style.display = 'none';
      catChevron.style.transform = 'rotate(0deg)';
      catDropdownOpen = false;
    } else {
      catPanel.style.display = 'block';
      catChevron.style.transform = 'rotate(180deg)';
      catDropdownOpen = true;
    }
  }

  if (catTrigger) {
    catTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      soundFX.playClick();
      toggleCatDropdown();
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (catDropdownOpen && catPanel && !catPanel.contains(e.target) && e.target !== catTrigger) {
      toggleCatDropdown(true);
    }
  });

  document.querySelectorAll('.platform-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      soundFX.playClick();
      document.querySelectorAll('.platform-pill').forEach(p => {
        p.classList.remove('active');
        p.style.background = 'rgba(255,255,255,0.05)';
        p.style.borderColor = 'rgba(255,255,255,0.12)';
        p.style.color = '#e4e4e7';
      });
      pill.classList.add('active');
      pill.style.background = 'rgba(201,162,39,0.25)';
      pill.style.borderColor = '#ffd700';
      pill.style.color = '#ffd700';

      const cat = pill.dataset.cat;
      const catSelect = document.getElementById('category-filter');
      if (catSelect) {
        catSelect.value = cat;
        handleFilterChange();
      }
    });
  });

  // 3. API Key Mask / Eye Toggle
  const keyInput = document.getElementById('ai-api-key');
  const maskBtn = document.getElementById('ai-key-mask-btn');
  let isMasked = false;
  if (maskBtn && keyInput) {
    maskBtn.addEventListener('click', () => {
      soundFX.playClick();
      isMasked = !isMasked;
      keyInput.style.webkitTextSecurity = isMasked ? 'disc' : 'none';
      maskBtn.textContent = isMasked ? '👁️ Hiện Key' : '👁️ Ẩn Key';
      maskBtn.style.color = isMasked ? '#34d399' : '#ffd700';
    });
  }

  // 4. History Slide-Over Drawer
  const drawerOverlay = document.getElementById('history-drawer-overlay');
  const drawerContent = document.getElementById('history-drawer-content');
  const drawerBtn = document.getElementById('history-drawer-btn');
  const drawerCloseBtn = document.getElementById('history-drawer-close-btn');
  const drawerClearBtn = document.getElementById('history-drawer-clear-btn');
  const drawerList = document.getElementById('history-drawer-list');

  const openDrawer = () => {
    soundFX.playClick();
    if (drawerOverlay && drawerContent) {
      drawerOverlay.classList.add('is-open');
      drawerContent.style.transform = 'translateX(0)';
      document.body.style.overflow = 'hidden';
      renderDrawerHistory();
    }
  };

  const closeDrawer = () => {
    if (drawerOverlay && drawerContent) {
      drawerContent.style.transform = 'translateX(100%)';
      setTimeout(() => {
        drawerOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }, 250);
    }
  };

  const renderDrawerHistory = () => {
    if (!drawerList) return;
    const history = getPromptHistory();
    if (!history || history.length === 0) {
      drawerList.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: #71717a;">
          <div style="font-size: 2rem; margin-bottom: 8px;">📜</div>
          <div style="font-size: 0.9rem; font-weight: 600; color: #a1a1aa;">Chưa có lịch sử kịch bản</div>
          <div style="font-size: 0.75rem; margin-top: 4px;">Các kịch bản bạn tạo sẽ tự động lưu trữ tại đây.</div>
        </div>
      `;
      return;
    }

    drawerList.innerHTML = history.map((item, idx) => `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(201,162,39,0.4)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
          <div style="color: #ffd700; font-weight: 700; font-size: 0.82rem; line-height: 1.3;">${item.title || 'Kịch Bản #' + (idx + 1)}</div>
          <span style="font-size: 0.65rem; color: #71717a; white-space: nowrap;">${item.timestamp ? new Date(item.timestamp).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'}) : 'Vừa xong'}</span>
        </div>
        ${item.subject ? `<div style="font-size: 0.72rem; color: #38bdf8; margin-bottom: 6px;">🎯 ${item.subject}</div>` : ''}
        <div style="font-size: 0.7rem; color: #a1a1aa; font-family: monospace; max-height: 48px; overflow: hidden; text-overflow: ellipsis; margin-bottom: 8px; line-height: 1.4;">
          ${item.imagePrompt || item.videoPrompt || ''}
        </div>
        <div style="display: flex; gap: 6px; justify-content: flex-end;">
          <button class="drawer-copy-btn" data-idx="${idx}" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 3px 8px; border-radius: 4px; font-size: 0.68rem; cursor: pointer;">📋 Chép</button>
          <button class="drawer-restore-btn" data-idx="${idx}" style="background: linear-gradient(135deg, #c9a227, #ffd700); border: none; color: #000; font-weight: 700; padding: 3px 10px; border-radius: 4px; font-size: 0.68rem; cursor: pointer;">⚡ Khôi Phục</button>
        </div>
      </div>
    `).join('');

    drawerList.querySelectorAll('.drawer-restore-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        const idx = parseInt(btn.dataset.idx, 10);
        const item = history[idx];
        if (item) {
          handleHistoryItemLoad(item);
          closeDrawer();
          showToast(`⚡ Đã khôi phục kịch bản: ${item.title || 'Thành công'}!`, 'success');
        }
      });
    });

    drawerList.querySelectorAll('.drawer-copy-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const item = history[idx];
        if (item) {
          const text = item.videoPrompt || item.imagePrompt;
          await navigator.clipboard.writeText(text);
          soundFX.playCopy();
          btn.textContent = '✨ Đã chép!';
          setTimeout(() => btn.textContent = '📋 Chép', 1500);
          showToast('✨ Đã sao chép kịch bản vào Clipboard!', 'success');
        }
      });
    });
  };

  drawerBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeDrawer();
  });

  drawerClearBtn?.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn xóa sạch toàn bộ lịch sử đã lưu?')) {
      clearPromptHistory();
      renderDrawerHistory();
      showToast('Đã xóa sạch lịch sử kịch bản.', 'info');
    }
  });

  // 5. Project Storyboard Slide-Over Drawer
  initProjectStoryboardDrawer();
}

/**
 * Project Storyboard & Character Bible Controller
 */
function initProjectStoryboardDrawer() {
  const pDrawerOverlay = document.getElementById('project-drawer-overlay');
  const pDrawerContent = document.getElementById('project-drawer-content');
  const pDrawerBtn = document.getElementById('project-drawer-btn');
  const pDrawerCloseBtn = document.getElementById('project-drawer-close-btn');
  const pSelect = document.getElementById('project-select');
  const pCreateBtn = document.getElementById('project-create-btn');
  const pDeleteBtn = document.getElementById('project-delete-btn');
  const cbSaveBtn = document.getElementById('cb-save-btn');
  const cbNameInput = document.getElementById('cb-name-input');
  const cbDescInput = document.getElementById('cb-desc-input');
  const cbColorInput = document.getElementById('cb-color-input');
  const pAddCurrentBtn = document.getElementById('project-add-current-btn');
  const saveToProjectBtn = document.getElementById('save-to-project-btn');
  const pSceneCount = document.getElementById('project-scene-count');
  const pScenesList = document.getElementById('project-scenes-list');

  // Ensure default project exists
  let projects = getAllProjects();
  if (projects.length === 0) {
    createProject('🎬 Phim Ngắn Mẫu: Neon Dreams', 'Dự án mẫu đầu tiên');
    const active = getActiveProject();
    if (active) {
      updateProject(active.id, {
        characterBible: {
          name: 'Elena',
          description: 'Nữ thám tử 26 tuổi, tóc bob bạch kim, áo trench coat da đen bóng, mắt xanh neon phát sáng',
          visualAnchors: 'Platinum bob hair, glowing cyan cybernetic left eye, black leather trench coat'
        },
        colorPalette: 'Teal, Amber & Deep Violet'
      });
    }
  }

  const openPDrawer = () => {
    soundFX.playClick();
    if (pDrawerOverlay && pDrawerContent) {
      pDrawerOverlay.classList.add('is-open');
      pDrawerContent.style.transform = 'translateX(0)';
      document.body.style.overflow = 'hidden';
      renderProjectUI();
    }
  };

  const closePDrawer = () => {
    if (pDrawerOverlay && pDrawerContent) {
      pDrawerContent.style.transform = 'translateX(100%)';
      setTimeout(() => {
        pDrawerOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }, 250);
    }
  };

  const renderProjectUI = () => {
    const allProj = getAllProjects();
    const activeId = getActiveProjectId();

    // Populate dropdown
    if (pSelect) {
      pSelect.innerHTML = allProj.map(p => `
        <option value="${p.id}" ${p.id === activeId ? 'selected' : ''}>
          📁 ${p.name} (${p.scenes.length} cảnh)
        </option>
      `).join('');
    }

    const currentProj = getActiveProject();
    if (!currentProj) return;

    // Fill Character Bible
    if (cbNameInput) cbNameInput.value = currentProj.characterBible?.name || '';
    if (cbDescInput) cbDescInput.value = currentProj.characterBible?.description || '';
    if (cbColorInput) cbColorInput.value = currentProj.colorPalette || '';

    // Update count
    if (pSceneCount) pSceneCount.textContent = currentProj.scenes.length;

    // Render scenes list
    if (pScenesList) {
      if (currentProj.scenes.length === 0) {
        pScenesList.innerHTML = `
          <div style="text-align:center; padding:30px 10px; color:#71717a; border:1px dashed rgba(255,255,255,0.08); border-radius:8px;">
            <div style="font-size:1.8rem; margin-bottom:6px;">🎞️</div>
            <div style="font-size:0.85rem; font-weight:600; color:#a1a1aa;">Chưa có phân cảnh nào trong dự án</div>
            <div style="font-size:0.72rem; margin-top:4px;">Nhấn "➕ Thêm Cảnh Hiện Tại" hoặc nút "📌 +Cảnh" để lưu cảnh quay.</div>
          </div>
        `;
        return;
      }

      pScenesList.innerHTML = currentProj.scenes.map((scene, idx) => `
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:10px; transition:all 0.2s;" onmouseover="this.style.borderColor='rgba(168,85,247,0.4)';" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="background:rgba(168,85,247,0.25); color:#c084fc; font-weight:700; font-size:0.68rem; padding:1px 6px; border-radius:4px;">CẢNH #${idx + 1}</span>
              <span style="color:#e4e4e7; font-weight:600; font-size:0.8rem;">${scene.title || 'Phân cảnh ' + (idx + 1)}</span>
            </div>
            <span style="font-size:0.65rem; color:#71717a;">${scene.createdAt ? new Date(scene.createdAt).toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'}) : ''}</span>
          </div>

          ${scene.subject ? `<div style="font-size:0.72rem; color:#38bdf8; margin-bottom:4px;">🎯 ${scene.subject}</div>` : ''}

          <div style="font-size:0.68rem; color:#a1a1aa; font-family:monospace; max-height:40px; overflow:hidden; text-overflow:ellipsis; margin-bottom:6px; line-height:1.4;">
            ${scene.imagePrompt || scene.videoPrompt || ''}
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.65rem; color:#ffd700;">⭐ Điểm: ${scene.score || 0}/100</span>
            <div style="display:flex; gap:4px;">
              <button class="scene-load-btn" data-scene-id="${scene.id}" style="background:linear-gradient(135deg, #9333ea, #a855f7); border:none; color:#fff; font-weight:700; padding:2px 8px; border-radius:4px; font-size:0.68rem; cursor:pointer;">⚡ Nạp Cảnh</button>
              <button class="scene-del-btn" data-scene-id="${scene.id}" style="background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.3); color:#f87171; padding:2px 6px; border-radius:4px; font-size:0.68rem; cursor:pointer;">🗑️</button>
            </div>
          </div>
        </div>
      `).join('');

      // Wire scene item buttons
      pScenesList.querySelectorAll('.scene-load-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          soundFX.playClick();
          const sceneId = btn.dataset.sceneId;
          const currentP = getActiveProject();
          const scene = currentP?.scenes.find(s => s.id === sceneId);
          if (scene) {
            handleHistoryItemLoad({
              title: scene.title,
              imagePrompt: scene.imagePrompt,
              videoPrompt: scene.videoPrompt,
              subject: scene.subject,
              character: scene.character,
              negative: scene.negative
            });
            closePDrawer();
            showToast(`⚡ Đã tải Cảnh: ${scene.title}`, 'success');
          }
        });
      });

      pScenesList.querySelectorAll('.scene-del-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const sceneId = btn.dataset.sceneId;
          if (confirm('Xóa phân cảnh này khỏi Storyboard?')) {
            removeSceneFromProject(sceneId);
            renderProjectUI();
            showToast('Đã xóa phân cảnh.', 'info');
          }
        });
      });
    }
  };

  // Open/Close listeners
  pDrawerBtn?.addEventListener('click', openPDrawer);
  pDrawerCloseBtn?.addEventListener('click', closePDrawer);
  pDrawerOverlay?.addEventListener('click', (e) => {
    if (e.target === pDrawerOverlay) closePDrawer();
  });

  // Switch project
  pSelect?.addEventListener('change', (e) => {
    setActiveProjectId(e.target.value);
    renderProjectUI();
    showToast('Đã chuyển sang dự án mới.', 'info');
  });

  // Create Project
  pCreateBtn?.addEventListener('click', () => {
    const name = prompt('Nhập tên dự án / MV / Phim ngắn mới:');
    if (name && name.trim()) {
      try {
        const created = createProject(name.trim());
        renderProjectUI();
        showToast(`✨ Đã tạo dự án: "${created.name}"!`, 'success');
      } catch (err) {
        alert(err.message);
      }
    }
  });

  // Delete Project
  pDeleteBtn?.addEventListener('click', () => {
    const active = getActiveProject();
    if (!active) return;
    if (confirm(`Bạn có chắc muốn xóa dự án "${active.name}" và toàn bộ ${active.scenes.length} phân cảnh?`)) {
      deleteProject(active.id);
      renderProjectUI();
      showToast('Đã xóa dự án.', 'info');
    }
  });

  // Save Character Bible
  cbSaveBtn?.addEventListener('click', () => {
    const active = getActiveProject();
    if (!active) return;
    const name = cbNameInput?.value.trim() || '';
    const desc = cbDescInput?.value.trim() || '';
    const color = cbColorInput?.value.trim() || '';

    updateProject(active.id, {
      characterBible: {
        name,
        description: desc,
        visualAnchors: desc
      },
      colorPalette: color
    });

    // Also auto-sync to character-input if user desires
    if (desc) {
      const charInput = document.getElementById('character-input');
      if (charInput && !charInput.value.trim()) {
        charInput.value = `${name ? name + ': ' : ''}${desc}`;
        charInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }

    soundFX.playSuccess?.() || soundFX.playClick();
    showToast('💾 Đã lưu Character Bible vào dự án!', 'success');
  });

  // Add Current Prompt to Project Scenes
  const handleAddCurrentToProject = () => {
    const imageText = document.getElementById('result-text-image')?.textContent || '';
    const videoText = document.getElementById('result-text-video')?.textContent || '';

    if (!imageText || imageText.includes('Chọn một thẻ')) {
      alert('Vui lòng tạo hoặc chọn một prompt trước khi thêm vào Storyboard!');
      return;
    }

    let active = getActiveProject();
    if (!active) {
      active = createProject('Dự Án Mới');
    }

    const currentSubject = getSubjectValue();
    const currentScore = scorePrompt(imageText)?.total || 80;

    try {
      const sceneTitle = currentSubject
        ? (currentSubject.length > 30 ? currentSubject.substring(0, 27) + '...' : currentSubject)
        : `Cảnh ${active.scenes.length + 1}`;

      addSceneToProject({
        title: sceneTitle,
        imagePrompt: imageText,
        videoPrompt: videoText,
        subject: currentSubject,
        character: getCharacterValue(),
        negative: getNegativePromptValue(),
        aspectRatio: getAspectRatioValue(),
        preset: activePreset,
        score: currentScore
      });

      soundFX.playSuccess?.() || soundFX.playClick();
      showToast(`📌 Đã thêm Cảnh #${active.scenes.length + 1} vào Storyboard!`, 'success');
      renderProjectUI();
    } catch (err) {
      alert(err.message);
    }
  };

  pAddCurrentBtn?.addEventListener('click', handleAddCurrentToProject);
  saveToProjectBtn?.addEventListener('click', handleAddCurrentToProject);
}

/**
 * Studio Engine (StudioBinder & AICameraMovements) Controller
 */
function initStudioCameraDashboard() {
  const toggleBtn = document.getElementById('scb-toggle-btn');
  const content = document.getElementById('scb-content');
  const chevron = document.getElementById('scb-chevron');

  if (toggleBtn && content) {
    toggleBtn.addEventListener('click', (e) => {
      soundFX.playClick();
      const isOpen = content.style.display !== 'none';
      if (isOpen) {
        content.style.display = 'none';
        chevron?.classList.remove('is-open');
      } else {
        content.style.display = 'block';
        chevron?.classList.add('is-open');
      }
    });
  }

  // 1. Shot Sizes
  document.querySelectorAll('#scb-size-pills .scb-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      soundFX.playClick();
      document.querySelectorAll('#scb-size-pills .scb-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      studioCameraState.shotSize = pill.dataset.size || '';
      updateStudioCameraBadges(studioCameraState);
      refreshResult();
    });
  });

  // 2. Camera Angles
  document.querySelectorAll('#scb-angle-pills .scb-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      soundFX.playClick();
      document.querySelectorAll('#scb-angle-pills .scb-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      studioCameraState.shotAngle = pill.dataset.angle || '';
      updateStudioCameraBadges(studioCameraState);
      refreshResult();
    });
  });

  // 3. Camera Motions
  document.querySelectorAll('#scb-motion-pills .scb-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      soundFX.playClick();
      document.querySelectorAll('#scb-motion-pills .scb-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      studioCameraState.cameraMotion = pill.dataset.motion || '';
      updateStudioCameraBadges(studioCameraState);
      refreshResult();
    });
  });

  // 4. Motion Speed
  document.querySelectorAll('#scb-speed-pills .scb-speed-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      soundFX.playClick();
      document.querySelectorAll('#scb-speed-pills .scb-speed-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      studioCameraState.motionSpeed = pill.dataset.speed || 'slow';
      updateStudioCameraBadges(studioCameraState);
      refreshResult();
    });
  });

  // 5. Auto-Apply toggle
  const autoApplyCheckbox = document.getElementById('scb-auto-apply');
  if (autoApplyCheckbox) {
    autoApplyCheckbox.addEventListener('change', (e) => {
      soundFX.playClick();
      studioCameraState.autoApply = e.target.checked;
      refreshResult();
    });
  }

  // 6. Reset button
  const resetBtn = document.getElementById('scb-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      soundFX.playClick();
      studioCameraState = {
        shotSize: '',
        shotAngle: '',
        cameraMotion: '',
        motionSpeed: 'slow',
        autoApply: autoApplyCheckbox ? autoApplyCheckbox.checked : true
      };

      // Reset pill active classes to default (first child)
      ['#scb-size-pills', '#scb-angle-pills', '#scb-motion-pills'].forEach(wrapId => {
        const pills = document.querySelectorAll(`${wrapId} .scb-pill`);
        pills.forEach((p, idx) => {
          if (idx === 0) p.classList.add('active');
          else p.classList.remove('active');
        });
      });

      // Reset speed to slow (first child)
      document.querySelectorAll('#scb-speed-pills .scb-speed-pill').forEach((p, idx) => {
        if (idx === 0) p.classList.add('active');
        else p.classList.remove('active');
      });

      updateStudioCameraBadges(studioCameraState);
      refreshResult();
    });
  }

  // 7. 1-Touch Studio Presets
  document.querySelectorAll('.scb-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      soundFX.playRoll();
      const size = btn.dataset.size || '';
      const angle = btn.dataset.angle || '';
      const motion = btn.dataset.motion || '';

      studioCameraState.shotSize = size;
      studioCameraState.shotAngle = angle;
      studioCameraState.cameraMotion = motion;

      // Update pills active states
      document.querySelectorAll('#scb-size-pills .scb-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.size === size);
      });
      document.querySelectorAll('#scb-angle-pills .scb-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.angle === angle);
      });
      document.querySelectorAll('#scb-motion-pills .scb-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.motion === motion);
      });

      updateStudioCameraBadges(studioCameraState);
      refreshResult();
      showToast(`🎬 Đã áp dụng Preset: ${btn.textContent.trim()}!`, 'success');
    });
  });
}

/**
 * Character Production OS V4.0 Module Initialization (Steve Jobs UI)
 */
function initCharacterOSModule() {
  const modalOverlay = document.getElementById('char-os-modal-overlay');
  const openBtn = document.getElementById('char-os-btn');
  const closeBtn = document.getElementById('char-os-modal-close');

  const tabDna = document.getElementById('cos-tab-dna');
  const tabStory = document.getElementById('cos-tab-story');
  const tabQa = document.getElementById('cos-tab-qa');

  const viewDna = document.getElementById('cos-view-dna');
  const viewStory = document.getElementById('cos-view-story');
  const viewQa = document.getElementById('cos-view-qa');

  const lockBtn = document.getElementById('cos-lock-btn');
  const genStoryBtn = document.getElementById('cos-gen-story-btn');
  const storyInput = document.getElementById('cos-story-input');
  const storyResults = document.getElementById('cos-story-results');
  const activeCharBox = document.getElementById('cos-active-char-box');

  const switchTab = (activeBtn, activeView) => {
    soundFX.playClick();
    [tabDna, tabStory, tabQa].forEach(b => {
      if (b) {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.borderColor = 'transparent';
        b.style.color = '#a1a1aa';
      }
    });
    [viewDna, viewStory, viewQa].forEach(v => {
      if (v) v.style.display = 'none';
    });

    if (activeBtn) {
      activeBtn.classList.add('active');
      activeBtn.style.background = 'rgba(236,72,153,0.2)';
      activeBtn.style.borderColor = 'rgba(236,72,153,0.4)';
      activeBtn.style.color = '#f472b6';
    }
    if (activeView) activeView.style.display = 'block';
  };

  tabDna?.addEventListener('click', () => switchTab(tabDna, viewDna));
  tabStory?.addEventListener('click', () => switchTab(tabStory, viewStory));
  tabQa?.addEventListener('click', () => switchTab(tabQa, viewQa));

  const renderActiveCharacter = () => {
    let char = characterOS.getActiveCharacter();
    if (!char) {
      const userChar = getCharacterValue() || getSubjectValue() || 'Nhân vật chính';
      char = characterOS.createOrUpdateCharacter({
        name: userChar,
        faceDNA: 'Symmetric facial geometry, realistic skin texture',
        apparentAge: '25-30 years old'
      });
    }

    if (activeCharBox) {
      activeCharBox.innerHTML = `
        <div style="width: 70px; height: 70px; border-radius: 12px; background: rgba(236,72,153,0.15); border: 1px solid rgba(236,72,153,0.4); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: #f472b6;">
          👤
        </div>
        <div style="flex: 1;">
          <div style="color: #fff; font-weight: 800; font-size: 1rem; margin-bottom: 2px;">${char.name} <span style="font-size: 0.7rem; color: #ffd700; font-family: monospace;">[${char.id}]</span></div>
          <div style="color: #38bdf8; font-size: 0.75rem; margin-bottom: 4px;">🧬 Face DNA: ${char.faceDNA}</div>
          <div style="color: #a1a1aa; font-size: 0.72rem;">👔 Wardrobe: ${char.wardrobeCanon} | ⏳ ${char.apparentAge}</div>
        </div>
      `;
    }
  };

  openBtn?.addEventListener('click', () => {
    soundFX.playClick();
    if (modalOverlay) {
      modalOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      renderActiveCharacter();
    }
  });

  closeBtn?.addEventListener('click', () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  lockBtn?.addEventListener('click', () => {
    soundFX.playCopy();
    const lockBlock = characterOS.buildIdentityLock();
    const charInput = document.getElementById('character-input');
    if (charInput) {
      charInput.value = lockBlock;
      autoResizeTextarea(charInput);
      refreshResult();
    }
    showToast('🔒 Đã tiêm Khóa Nhận Diện Vàng (Identity Lock) vào kịch bản!', 'success');
  });

  genStoryBtn?.addEventListener('click', () => {
    const text = storyInput?.value || getSubjectValue() || 'Nhân vật chính';
    soundFX.playRoll();
    const pack = characterOS.generateStoryPack(text);
    
    if (storyResults && pack.scenes) {
      const fullChainText = pack.scenes.map((s, i) => `=== SCENE ${i+1}: ${s.title.toUpperCase()} ===\n[IMAGE PROMPT]: ${s.imagePrompt}\n[VIDEO PROMPT]: ${s.videoPrompt}\n`).join('\n');

      storyResults.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(236,72,153,0.15); border: 1px solid rgba(236,72,153,0.35); padding: 8px 12px; border-radius: 8px; margin-bottom: 8px;">
          <span style="color: #ffd700; font-size: 0.75rem; font-weight: 800;">⚡ CHUỖI 4 PHÂN CẢNH ĐỒNG NHẤT (NARRATIVE VIDEO CHAIN)</span>
          <button id="cos-copy-all-chain-btn" style="background: linear-gradient(135deg, #ffd700, #f59e0b); border: none; color: #000; font-weight: 800; padding: 4px 10px; border-radius: 6px; font-size: 0.72rem; cursor: pointer; display: flex; align-items: center; gap: 4px;">⚡ Chép Toàn Bộ 4 Cảnh</button>
        </div>
        ${pack.scenes.map((scene, idx) => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="color: #f472b6; font-weight: 700; font-size: 0.8rem;">${scene.title}</span>
            <span style="font-size: 0.65rem; color: #ffd700; background: rgba(201,162,39,0.15); padding: 2px 6px; border-radius: 4px;">${scene.shotType}</span>
          </div>
          <div style="font-size: 0.72rem; color: #a1a1aa; font-family: monospace; margin-bottom: 8px; line-height: 1.45;">
            ${scene.videoPrompt}
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 6px;">
            <button class="cos-copy-scene-btn" data-idx="${idx}" style="background: linear-gradient(135deg, #ec4899, #a855f7); border: none; color: #fff; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; cursor: pointer;">📋 Chép Cảnh ${idx + 1}</button>
          </div>
        </div>
      `).join('')}
      `;

      document.getElementById('cos-copy-all-chain-btn')?.addEventListener('click', async () => {
        await navigator.clipboard.writeText(fullChainText);
        soundFX.playCopy();
        showToast('🚀 Đã chép toàn bộ chuỗi 4 cảnh phim & chỉ lệnh cú máy vào Clipboard!', 'success');
      });

      storyResults.querySelectorAll('.cos-copy-scene-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const scene = pack.scenes[idx];
          if (scene) {
            await navigator.clipboard.writeText(scene.videoPrompt);
            soundFX.playCopy();
            showToast(`✨ Đã sao chép ${scene.title}!`, 'success');
          }
        });
      });
    }
  });
}

/* ── Initialisation ───────────────────────────────────────── */

async function init() {
  try {
    // 1. Load data
    await loadPrompts();
    // Expose to Style Presets system (getAllPrompts is already statically imported)
    window._allPrompts = getAllPrompts ? getAllPrompts() : [];

    // 2. Populate category dropdown
    populateCategoryFilter(getCategories());

    // Auto-fill voice-over bank selection
    const voicebankSelect = document.getElementById('builder-voicebank-select');
    voicebankSelect?.addEventListener('change', () => {
      const val = voicebankSelect.value;
      if (!val) return;
      const dialogueMatch = val.match(/dialogue="([^"]+)"/);
      const toneMatch = val.match(/tone=([^|]+)/);

      const dlgInput = document.getElementById('builder-dialogue-input');
      const toneInput = document.getElementById('builder-voice-tone-input');

      if (dialogueMatch && dlgInput) dlgInput.value = `"${dialogueMatch[1]}"`;
      if (toneMatch && toneInput) toneInput.value = toneMatch[1];
    });

    // 3. Render all cards
    renderGrid(filterPrompts(), handleCardClick, handleFavClick);

    // 4. Wire motion tag toggles (uiController handles DOM; refreshResult is the callback)
    initMotionTags(refreshResult);

    // 5. Initialize Checklist Design Master Features & Character OS V4.0
    initChecklistDesignFeatures();
    initCharacterOSModule();
    initAuthUI();

    // Optimize search with debounce to prevent UI hangs on rapid typing
    let debounceTimer;
    const searchInput = document.getElementById('search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    
    searchInput?.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      if (searchClearBtn) {
        searchClearBtn.style.display = searchInput.value ? 'block' : 'none';
      }
      debounceTimer = setTimeout(handleFilterChange, 200);
    });

    searchClearBtn?.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        handleFilterChange();
        searchInput.focus();
      }
    });

    // 🛠️ 10 Audio Fix Modifiers Handler
    const fixMap = {
      mix_music_low: "\n\n[AUDIO AUTO-FIX]: Mix: keep music low under the product SFX and voice-over. Product sounds must remain clear and audible.",
      ambience_match: "\n\n[AUDIO AUTO-FIX]: Ambience must match the visible location exactly. Use only specific environment noise, no unrelated crowd or indoor sounds.",
      short_dialogue: "\n\n[AUDIO AUTO-FIX]: Use one short spoken line only, under 8 words. Keep mouth movement subtle and naturally timed.",
      sfx_sync: "\n\n[AUDIO AUTO-FIX]: Sync each SFX to the visible action: cap click when cap opens, ice clink when ice falls, pour sound when liquid flows.",
      clean_sparse: "\n\n[AUDIO AUTO-FIX]: Use a clean sparse sound design: one ambience bed, one primary product SFX, and one subtle music cue only.",
      realistic_foley: "\n\n[AUDIO AUTO-FIX]: Use realistic natural sound, not cartoon sound effects. Keep all foley grounded, close-mic, and physically believable.",
      muffled_crowd: "\n\n[AUDIO AUTO-FIX]: Background voices should be indistinct and muffled. No clear random dialogue, no unrelated speech.",
      product_foreground: "\n\n[AUDIO AUTO-FIX]: Product SFX foreground: make the product action audible and satisfying, such as cap click, spray mist, glass clink, or pour.",
      restrained_trailer: "\n\n[AUDIO AUTO-FIX]: Use a restrained premium trailer cue, not aggressive. No heavy boom, no horror hit, no overblown bass.",
      clean_cta_ending: "\n\n[AUDIO AUTO-FIX]: End with a clean 1-second audio resolve and no extra voices, leaving space for CTA voice-over or caption overlay in post-production."
    };

    document.querySelectorAll('.audio-fix-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fixKey = btn.getAttribute('data-fix');
        const fixText = fixMap[fixKey];
        const audioRes = document.getElementById('result-text-audio');
        if (audioRes && fixText && !audioRes.classList.contains('result-placeholder')) {
          if (!audioRes.textContent.includes(fixText)) {
            audioRes.textContent += fixText;
            btn.style.borderColor = '#10b981';
            btn.style.background = 'rgba(16,185,129,0.25)';
          }
        }
      });
    });
    document.addEventListener('keydown', (e) => {
      // Ctrl+K / Cmd+K: Focus search box
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        searchInput?.focus();
        searchInput?.select();
        return;
      }

      // Ctrl+Enter / Cmd+Enter: Director's Cut randomizer
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleDirectorsCut();
        return;
      }

      // ESC key: Close any open modal
      if (e.key === 'Escape') {
        closeBuilder();
        closeAISettings();
        closeModal();
        const helpOverlay = document.getElementById('help-modal-overlay');
        if (helpOverlay) {
          helpOverlay.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      }
    });

    // Backdrop Click-Outside to Close Modals
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });

    // Quick Suggested Tag Click in Empty State
    document.getElementById('prompt-grid')?.addEventListener('click', (e) => {
      const tagBtn = e.target.closest('.suggest-tag-btn');
      if (tagBtn) {
        const q = tagBtn.dataset.query;
        if (searchInput) {
          searchInput.value = q;
          if (searchClearBtn) searchClearBtn.style.display = 'block';
        }
        const catSel = document.getElementById('category-filter');
        if (catSel) catSel.value = 'all';
        handleFilterChange();
      }
    });
    
    // SFX Sound Toggle Button
    const sfxBtn = document.getElementById('sfx-toggle-btn');
    if (sfxBtn) {
      const updateSFXBtn = () => {
        const isEn = soundFX.isEnabled();
        sfxBtn.textContent = isEn ? '🔊' : '🔇';
        sfxBtn.style.opacity = isEn ? '1' : '0.5';
        sfxBtn.title = isEn ? 'Âm thanh: Đang Bật (Bấm để Tắt)' : 'Âm thanh: Đang Tắt (Bấm để Bật)';
      };
      updateSFXBtn();
      sfxBtn.addEventListener('click', () => {
        soundFX.toggle();
        updateSFXBtn();
        if (soundFX.isEnabled()) soundFX.playClick();
      });
    }

    // 6. Restore Short-term Session Memory if present
    const session = getSessionContext();
    if (session && session.subject) {
      const sInput = document.getElementById('subject-input');
      if (sInput && !sInput.value) {
        sInput.value = session.subject;
      }
      const cInput = document.getElementById('character-input');
      if (cInput && session.character && !cInput.value) {
        cInput.value = session.character;
      }
      const nInput = document.getElementById('negative-input');
      if (nInput && session.negative && !nInput.value) {
        nInput.value = session.negative;
      }
      if (session.lastTemplate) {
        currentTemplate = session.lastTemplate;
        currentTitle = session.lastTitle || 'Kịch Bản Khôi Phục';
        refreshResult();
      }
    }

    window.addEventListener('languageChanged', () => {
      handleFilterChange();
      refreshResult();
    });
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

    // Initialize Reference Image Upload & Auto-Expanding Textareas
    initReferenceImageModule();
    initStudioCameraDashboard();

    // Initialize Voice Dictation for Subject Input
    voiceEngine.bind('subject-voice-btn', 'subject-input', (textarea) => {
      autoResizeTextarea(textarea);
      refreshResult();
    });

    document
      .getElementById('subject-input')
      ?.addEventListener('input', refreshResult);

    document
      .getElementById('character-input')
      ?.addEventListener('input', refreshResult);

    document
      .getElementById('export-package-btn')
      ?.addEventListener('click', () => {
        exportToPackage({
          title: currentTitle,
          subject: getSubjectValue(),
          character: getCharacterValue(),
          imagePrompt: document.getElementById('result-text-image')?.textContent || '',
          videoPrompt: document.getElementById('result-text-video')?.textContent || '',
          notebooklmPrompt: document.getElementById('result-text-notebooklm')?.textContent || ''
        });
      });

    document
      .getElementById('export-pdf-btn')
      ?.addEventListener('click', () => {
        exportToPDF({
          title: currentTitle,
          subject: getSubjectValue(),
          character: getCharacterValue(),
          imagePrompt: document.getElementById('result-text-image')?.textContent || '',
          videoPrompt: document.getElementById('result-text-video')?.textContent || '',
          notebooklmPrompt: document.getElementById('result-text-notebooklm')?.textContent || ''
        });
      });

    document
      .getElementById('export-csv-btn')
      ?.addEventListener('click', () => {
        const history = getPromptHistory();
        if (history && history.length) {
          exportToCSV(history, `Production_Shotlist_${new Date().toISOString().slice(0,10)}.csv`);
        } else {
          exportToCSV([{
            title: currentTitle,
            subject: getSubjectValue(),
            character: getCharacterValue(),
            imagePrompt: document.getElementById('result-text-image')?.textContent || '',
            videoPrompt: document.getElementById('result-text-video')?.textContent || '',
            notebooklmPrompt: document.getElementById('result-text-notebooklm')?.textContent || ''
          }], `Shotlist_${new Date().toISOString().slice(0,10)}.csv`);
        }
      });

    document
      .getElementById('negative-input')
      ?.addEventListener('input', refreshResult);

    document
      .getElementById('aspect-ratio')
      ?.addEventListener('change', refreshResult);

    document
      .getElementById('randomize-btn')
      ?.addEventListener('click', handleDirectorsCut);

    // Style Presets
    document.querySelectorAll('.style-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        if (activePreset === preset) {
          clearStylePreset();
        } else {
          applyStylePreset(preset);
        }
      });
    });
    document.getElementById('preset-clear-btn')?.addEventListener('click', clearStylePreset);

    // FPS Selector
    document.querySelectorAll('.fps-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.fps-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = '#a1a1aa';
        });
        btn.classList.add('active');
        btn.style.background = 'rgba(201,162,39,0.3)';
        btn.style.color = '#ffd700';
        refreshResult();
      });
    });

    document
      .getElementById('copy-btn-image')
      ?.addEventListener('click', () => {
        copyPanel('result-text-image', 'copy-btn-image');
        updatePipelineStep(2, 'Step 2/4: Asset Copy Ready');
      });

    document
      .getElementById('copy-btn-video')
      ?.addEventListener('click', () => {
        copyPanel('result-text-video', 'copy-btn-video');
        updatePipelineStep(3, 'Step 3/4: Video Motion Copy Ready');
      });

    document
      .getElementById('copy-btn-notebooklm')
      ?.addEventListener('click', () => {
        copyNotebookLM('overview', 'copy-btn-notebooklm');
        updatePipelineStep(4, 'Step 4/4: Script Assembly Ready');
      });

    document
      .getElementById('copy-btn-notebooklm-chat')
      ?.addEventListener('click', () => {
        copyNotebookLM('chat', 'copy-btn-notebooklm-chat');
        updatePipelineStep(4, 'Step 4/4: Script Assembly Ready');
      });

    document
      .getElementById('translate-btn-image')
      ?.addEventListener('click', () => translatePanel('image'));

    document
      .getElementById('translate-btn-video')
      ?.addEventListener('click', () => translatePanel('video'));

    document
      .getElementById('translate-btn-notebooklm')
      ?.addEventListener('click', () => translatePanel('notebooklm'));

    // ── MULTI-MODEL SLATE TABS (Midjourney, Nanobana, Image GPT, Video, NotebookLM) ──
    document.querySelectorAll('.model-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        const tabKey = tabBtn.dataset.tab;
        document.querySelectorAll('.model-tab-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = '#a1a1aa';
        });
        tabBtn.classList.add('active');
        tabBtn.style.background = 'rgba(201,162,39,0.3)';
        tabBtn.style.color = '#ffd700';

        // Hide all tab panels
        document.querySelectorAll('.result-panel').forEach(p => {
          if (p.id.startsWith('panel-tab-')) p.style.display = 'none';
        });

        // Show target panel
        const targetPanel = document.getElementById(`panel-tab-${tabKey}`);
        if (targetPanel) {
          targetPanel.style.display = tabKey === 'notebooklm' ? 'flex' : 'block';
        }
      });
    });

    // Copy Buttons for Nanobana & Image GPT
    document.getElementById('copy-btn-nanobana')?.addEventListener('click', () => {
      copyPanel('result-text-nanobana', 'copy-btn-nanobana');
    });
    document.getElementById('copy-btn-imagegpt')?.addEventListener('click', () => {
      copyPanel('result-text-imagegpt', 'copy-btn-imagegpt');
    });

    // ── DIRECTOR VIEWFINDER ASPECT RATIO CONTROLS ──
    document.querySelectorAll('.vf-aspect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const aspect = btn.dataset.aspect;
        document.querySelectorAll('.vf-aspect-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'rgba(255,255,255,0.06)';
          b.style.borderColor = 'rgba(255,255,255,0.15)';
          b.style.color = '#e4e4e7';
        });
        btn.classList.add('active');
        btn.style.background = 'rgba(201,162,39,0.3)';
        btn.style.borderColor = '#ffd700';
        btn.style.color = '#ffd700';

        // Sync with aspect-ratio select
        const arSelect = document.getElementById('aspect-ratio');
        if (arSelect) {
          arSelect.value = `--ar ${aspect}`;
          refreshResult();
        }
      });
    });

    // ── DUAL MODE SWITCHER: QUICK DIRECTOR vs. PRO DP STUDIO ──
    const quickBtn = document.getElementById('mode-quick-btn');
    const proBtn = document.getElementById('mode-pro-btn');
    const advancedGroups = [
      '.control-group--character',
      '.control-group--reference-image',
      '.control-group--negative',
      '#studio-camera-builder-dashboard'
    ];

    function setWorkspaceMode(mode) {
      if (mode === 'quick') {
        quickBtn?.classList.add('active');
        if (quickBtn) {
          quickBtn.style.background = 'linear-gradient(135deg, rgba(201,162,39,0.35), rgba(255,215,0,0.25))';
          quickBtn.style.color = '#ffd700';
        }
        proBtn?.classList.remove('active');
        if (proBtn) {
          proBtn.style.background = 'transparent';
          proBtn.style.color = '#a1a1aa';
        }
        advancedGroups.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
        });
      } else {
        proBtn?.classList.add('active');
        if (proBtn) {
          proBtn.style.background = 'linear-gradient(135deg, rgba(168,85,247,0.35), rgba(255,215,0,0.25))';
          proBtn.style.color = '#ffd700';
        }
        quickBtn?.classList.remove('active');
        if (quickBtn) {
          quickBtn.style.background = 'transparent';
          quickBtn.style.color = '#a1a1aa';
        }
        advancedGroups.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => el.style.display = '');
        });
      }
    }

    quickBtn?.addEventListener('click', () => setWorkspaceMode('quick'));
    proBtn?.addEventListener('click', () => setWorkspaceMode('pro'));

    // ── OPTICAL LINTER AUTO-HARMONIZE ──
    document.getElementById('linter-autofix-btn')?.addEventListener('click', () => {
      const subjectInput = document.getElementById('subject-input');
      if (subjectInput && subjectInput.value) {
        soundFX.playSuccess();
        refreshResult();
      }
    });

    // ── AUDIO PANEL HANDLERS (Restored) ──
    document
      .getElementById('translate-btn-audio')
      ?.addEventListener('click', () => translatePanel('audio'));

    document
      .getElementById('copy-btn-audio')
      ?.addEventListener('click', () => {
        copyPanel('result-text-audio', 'copy-btn-audio');
      });

    
    // Telegram / Google Apps Script Lead Form Hook
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', function(e) {
        // Lấy URL Web App (Sẽ do bạn điền vào đây sau khi tạo Apps Script)
        const appsScriptUrl = "https://script.google.com/macros/s/AKfycbzc5OW_uAuKbz8oOgPbWu1O3AN93M_nT1J658uaCYobzu9vaCxp55VkowO3hV7ilA/exec";
        const emailInput = this.querySelector('input[name="fields[email]"]');
        
        if (emailInput && emailInput.value && appsScriptUrl.includes("script.google.com")) {
          // Bắn ngầm dữ liệu sang Google Apps Script
          fetch(appsScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput.value })
          }).catch(err => console.error("Lỗi khi gửi báo cáo Telegram:", err));
        }
        
        // Không e.preventDefault() để form vẫn tiếp tục submit sang MailerLite bình thường
      });
    }

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
    
    // Expose Viral Video Remake Modal Functions to window
    window.openViralModal = function() {
      const modal = document.getElementById('viral-analyzer-modal-overlay');
      if (modal) modal.style.display = 'flex';
    };
    window.closeViralModal = function() {
      const modal = document.getElementById('viral-analyzer-modal-overlay');
      if (modal) modal.style.display = 'none';
    };
    window.executeViralRemake = function() {
      const url = document.getElementById('viral-video-url')?.value.trim() || '';
      const script = document.getElementById('viral-video-script')?.value.trim() || '';
      const myProduct = document.getElementById('viral-my-product')?.value.trim() || 'Sản phẩm / Thương hiệu mới của tôi';
      
      const input = document.getElementById('subject-input');
      if (input) {
        input.value = `[VIRAL REMAKE MODE]:\n- Link Video Đối Thủ: ${url || 'N/A'}\n- Lời thoại Đối Thủ: ${script || 'Review / Kịch bản triệu view trên TikTok/Shorts'}\n- Sản Phẩm MỚI Của Tôi: ${myProduct}\n\nAI ĐẠO DIỄN HÃY PHÂN TÍCH:\n1. Phân tích 3s Viral Hook và Công thức tâm lý triệu view của video đối thủ này.\n2. Giữ nguyên bộ khung thành công nhưng VIẾT LẠI 100% KỊCH BẢN MỚI cho sản phẩm ${myProduct}!\n3. Xuất trọn bộ Prompt Video NotebookLM/Veo3 4K, Prompt Ảnh Bìa Midjourney và Lời thoại Thuyết minh Tiếng Việt đồng bộ.`;
        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      window.closeViralModal();
      const enhanceBtn = document.getElementById('ai-enhance-btn');
      if (enhanceBtn) {
        enhanceBtn.click();
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
