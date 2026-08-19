/**
 * uiController.js
 * ───────────────
 * Responsible ONLY for rendering the card grid and updating DOM elements.
 * No data fetching. No event wiring (that belongs in app.js).
 */

import { isFavorite } from './dataManager.js';
import { translateCinematicText } from './translator.js';

/* ── Video suffix (base, without dynamic parts) ───────────── */

/** Core video quality suffix; dynamic parts (motion, AR) are appended by displayDualResult. */
const VIDEO_SUFFIX = ', cinematic motion, smooth camera movement, highly detailed video, continuous action';

/**
 * Standardized 4-Part AI Camera Movement Directives (from aicameramovements.com)
 * Architecture: [Movement Name]. Movement: [Action]. Speed: [Speed]. Framing: [Framing/Parallax]. End: [Landing Frame].
 */
export const AI_CAMERA_DIRECTIVES = {
  // ── NHÓM 1: CỐ ĐỊNH & THU PHÓNG (STATIC & ZOOMS) ──
  'static tripod-mounted locked shot': {
    name: 'locked-off static shot',
    movement: 'hold one fixed camera position for full clip',
    speed: 'still and steady',
    framing: 'keep same angle, height, lens distance and composition',
    end: 'finish with same framing and camera position'
  },
  'slow zoom in': {
    name: 'slow zoom in',
    movement: 'slowly increase lens focal length toward tighter frame',
    speed: 'gradual and even push',
    framing: 'keep main visual target readable as it becomes larger in frame',
    end: 'finish on stable tighter composition'
  },
  'slow zoom out': {
    name: 'slow zoom out',
    movement: 'slowly decrease lens focal length toward wider frame',
    speed: 'gradual and even retreat',
    framing: 'keep main visual target readable as surrounding space appears',
    end: 'finish on stable wider composition'
  },
  'dramatic crash zoom in on subject': {
    name: 'crash zoom in',
    movement: 'snap lens rapidly toward main visual target',
    speed: 'very fast and punchy',
    framing: 'keep target centered through sudden scale change',
    end: 'land on bold tighter composition'
  },
  'crash zoom out': {
    name: 'crash zoom out',
    movement: 'snap lens rapidly away from main visual target',
    speed: 'very fast and punchy',
    framing: 'keep target readable as environment violently reveals',
    end: 'land on bold wider composition'
  },
  'infinite zoom': {
    name: 'infinite zoom',
    movement: 'zoom continuously inward toward exact center target without stopping',
    speed: 'smooth accelerating zoom',
    framing: 'keep circular target centered as it endlessly expands',
    end: 'finish when next visual world fills frame'
  },
  'earth zoom out': {
    name: 'earth zoom out',
    movement: 'pull straight upward from ground level through street, city, clouds and planet scale',
    speed: 'rapid expanding zoom out',
    framing: 'keep starting point centered as cosmic scale grows',
    end: 'finish on planet-scale view with starting point implied at center'
  },
  'vertigo dolly zoom effect, dolly-in with zoom-out': {
    name: 'vertigo dolly zoom',
    movement: 'physically dolly camera in while zooming lens out simultaneously',
    speed: 'smooth calibrated counter-motion',
    framing: 'keep subject size constant while background perspective warp expands',
    end: 'settle on dramatic altered depth'
  },

  // ── NHÓM 2: TRỤC DI CHUYỂN VẬT LÝ (DOLLY, TRUCK, PEDESTAL, SLIDER) ──
  'slow dolly-in push': {
    name: 'dolly in',
    movement: 'move camera physically forward in a straight line toward main subject',
    speed: 'smooth controlled push',
    framing: 'keep camera height, lens direction and subject centered while distance closes',
    end: 'settle on a tighter composition'
  },
  'smooth dolly-out pull back': {
    name: 'dolly out',
    movement: 'move camera physically backward in a straight line away from main subject',
    speed: 'smooth controlled retreat',
    framing: 'keep lens direction and camera height consistent while environment enters frame',
    end: 'finish in a wider composition'
  },
  'truck right': {
    name: 'truck right',
    movement: 'move camera physically to right on straight horizontal track',
    speed: 'smooth constant lateral travel',
    framing: 'keep lens facing same direction while scene slides across frame',
    end: 'finish on clean lateral composition'
  },
  'truck left': {
    name: 'truck left',
    movement: 'move camera physically to left on straight horizontal track',
    speed: 'smooth constant lateral travel',
    framing: 'keep lens facing same direction while scene slides across frame',
    end: 'finish on clean lateral composition'
  },
  'pedestal up': {
    name: 'pedestal up',
    movement: 'raise entire camera vertically upward in a straight line without tilting lens',
    speed: 'smooth constant vertical lift',
    framing: 'keep lens level while higher vantage point reveals',
    end: 'finish with higher framing clearly readable'
  },
  'pedestal down': {
    name: 'pedestal down',
    movement: 'lower entire camera vertically downward in a straight line without tilting lens',
    speed: 'smooth constant vertical descent',
    framing: 'keep lens level while lower details enter frame',
    end: 'finish with lower framing clearly readable'
  },
  'slider right': {
    name: 'slider right',
    movement: 'slide camera a small measured distance to right',
    speed: 'slow controlled constant motion',
    framing: 'keep foreground and background parallax layers shifting smoothly',
    end: 'finish on refined composition with new right-side angle'
  },
  'slider left': {
    name: 'slider left',
    movement: 'slide camera a small measured distance to left',
    speed: 'slow controlled constant motion',
    framing: 'keep foreground and background parallax layers shifting smoothly',
    end: 'finish on refined composition with new left-side angle'
  },

  // ── NHÓM 3: XOAY & LIA (PAN, TILT, WHIP PAN) ──
  'smooth horizontal pan left': {
    name: 'pan left',
    movement: 'rotate camera horizontally from right to left from one fixed point',
    speed: 'smooth constant rotation',
    framing: 'keep horizon level while new space enters from left side',
    end: 'settle on a clear final composition'
  },
  'smooth horizontal pan right': {
    name: 'pan right',
    movement: 'rotate camera horizontally from left to right from one fixed point',
    speed: 'smooth constant rotation',
    framing: 'keep horizon level while new space enters from right side',
    end: 'settle on a clear final composition'
  },
  'vertical tilt up reveal': {
    name: 'tilt up',
    movement: 'rotate camera upward from one fixed point',
    speed: 'smooth constant tilt',
    framing: 'keep vertical subject or architecture centered as frame travels upward',
    end: 'land on upper target'
  },
  'vertical tilt down reveal': {
    name: 'tilt down',
    movement: 'rotate camera downward from one fixed point',
    speed: 'smooth constant tilt',
    framing: 'keep vertical subject centered as frame travels downward',
    end: 'land on lower target'
  },
  'rapid whip pan right with motion blur': {
    name: 'whip pan right',
    movement: 'rotate rapidly from starting direction toward new target on right',
    speed: 'fast snap with brief motion blur during rotation',
    framing: 'begin on readable composition and land on second target',
    end: 'settle into sharp final frame'
  },
  'whip pan left': {
    name: 'whip pan left',
    movement: 'rotate rapidly from starting direction toward new target on left',
    speed: 'fast snap with brief motion blur during rotation',
    framing: 'begin on readable composition and land on second target',
    end: 'settle into sharp final frame'
  },

  // ── NHÓM 4: QUỸ ĐẠO & XUYÊN THẤU (ORBIT, ARC, PUSH PAST, PASS-THROUGH) ──
  'smooth 360-degree orbit around subject': {
    name: '360 orbit',
    movement: 'circle clockwise around main subject at consistent radius',
    speed: 'smooth controlled orbit',
    framing: 'keep subject centered while background rotates seamlessly',
    end: 'complete intended arc with stable framing'
  },
  'counterclockwise orbit': {
    name: 'counterclockwise orbit',
    movement: 'circle counterclockwise around main subject at consistent radius',
    speed: 'smooth controlled orbit',
    framing: 'keep subject centered while background rotates counterclockwise',
    end: 'complete intended circle with stable framing'
  },
  'push past foreground layer into scene': {
    name: 'push past',
    movement: 'move forward past visible foreground object, edge or opening',
    speed: 'smooth forward glide',
    framing: 'let foreground pass close to lens while space beyond reveals',
    end: 'arrive inside or beyond foreground layer'
  },
  'pass-through movement': {
    name: 'pass-through',
    movement: 'move forward toward visible opening, glass or barrier and penetrate into space beyond',
    speed: 'smooth centered glide',
    framing: 'keep opening centered as seamless portal transition point',
    end: 'arrive inside revealed space beyond'
  },
  'smooth arc curve movement around subject': {
    name: 'arc right',
    movement: 'move on shallow curved path around main subject toward right side',
    speed: 'smooth measured curve',
    framing: 'keep distance, height and subject readability consistent',
    end: 'finish from new right-side angle'
  },
  'arc left': {
    name: 'arc left',
    movement: 'move on shallow curved path around main subject toward left side',
    speed: 'smooth measured curve',
    framing: 'keep distance, height and subject readability consistent',
    end: 'finish from new left-side angle'
  },

  // ── NHÓM 5: BÁM THEO & NHÂN VẬT (TRACKING & SNORRICAM) ──
  'tracking shot': {
    name: 'tracking shot',
    movement: 'move through scene with main subject along their path',
    speed: 'match subject pace precisely',
    framing: 'keep subject consistently readable while environment moves around them',
    end: 'maintain clear moving composition'
  },
  'reverse tracking walk-and-talk': {
    name: 'reverse tracking',
    movement: 'move backward in front of walking subject facing camera',
    speed: 'match subject forward walking pace',
    framing: 'keep front-facing face and body framing stable as background moves behind',
    end: 'hold clear front-facing moving composition'
  },
  'side tracking shot': {
    name: 'side tracking',
    movement: 'move parallel beside subject along direction of travel',
    speed: 'match subject motion',
    framing: 'keep subject in side profile or 3/4 profile at stable distance',
    end: 'continue parallel movement with clean horizontal motion'
  },
  'snorricam body-mounted shot': {
    name: 'snorricam body-mounted',
    movement: 'keep camera rigidly fixed relative to subject torso/face while subject moves',
    speed: 'match subject body momentum',
    framing: 'keep subject centered and facing camera while background swings wildly behind them',
    end: 'finish with subject still locked in frame'
  },
  'chase shot': {
    name: 'chase shot',
    movement: 'follow moving subject aggressively along action route',
    speed: 'fast, reactive and physically close',
    framing: 'keep subject visible while allowing energetic kinetic reframing',
    end: 'stay connected to subject in motion'
  },
  'organic handheld camera motion with subtle shake': {
    name: 'handheld camera',
    movement: 'natural organic handheld movement with subtle physical micro-jitters',
    speed: 'natural human pace',
    framing: 'follow subject organically with realistic breathing room',
    end: 'stable handheld rest'
  },

  // ── NHÓM 6: TRÊN KHÔNG & ĐẶC BIỆT (AERIAL, CRANE, FPV, TILT-SHIFT, TIMELAPSE) ──
  'dynamic FPV drone dive and swoop': {
    name: 'FPV drone sweep',
    movement: 'sweep through 3D space with continuous dynamic altitude adjustment',
    speed: 'fast agile trajectory',
    framing: 'wide immersive perspective with dynamic banking',
    end: 'settle on sweeping cinematic wide shot'
  },
  'drone push in': {
    name: 'drone push in',
    movement: 'fly smoothly forward through open space toward destination',
    speed: 'controlled aerial glide',
    framing: 'keep destination readable as altitude and distance close',
    end: 'arrive at closer aerial composition'
  },
  'drone pull back': {
    name: 'drone pull back',
    movement: 'fly smoothly backward away from destination',
    speed: 'controlled aerial retreat',
    framing: 'reveal massive surrounding landscape scale',
    end: 'finish on wide expansive aerial view'
  },
  'crane up': {
    name: 'crane up',
    movement: 'travel smoothly upward through open space on crane arm',
    speed: 'slow controlled vertical lift',
    framing: 'reveal large-scale environment as camera ascends',
    end: 'finish with higher scale clearly visible'
  },
  'crane down': {
    name: 'crane down',
    movement: 'travel smoothly downward through open space toward ground target',
    speed: 'slow controlled vertical descent',
    framing: 'isolate subject as camera descends to eye level',
    end: 'finish with intimate lower framing'
  },
  'tilt-shift miniature view': {
    name: 'tilt-shift miniature',
    movement: 'glide from high angled view over miniature-scale environment',
    speed: 'small precise movement',
    framing: 'narrow band of sharp focus with dreamy optical blur above and below',
    end: 'finish with miniature diorama look intact'
  },
  'locked-camera time-lapse': {
    name: 'time-lapse',
    movement: 'hold one fixed rigid position while time moves rapidly forward',
    speed: 'fast time compression with stable frame',
    framing: 'keep same composition as clouds, sun and shadows streak through frame',
    end: 'finish with dramatic passage of time'
  }
};

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
  videostyles: '#ef4444',
  audio:       '#10b981',
  omni:        '#f59e0b',
  food:        '#fb923c',
  vietnam:     '#ef4444',
  travel:      '#0ea5e9',
};

const CATEGORY_LABELS = {
  gear: 'Equipment / Lenses',
  videostyles: '🎬 AI Video Styles (NotebookLM / Sora)',
  audio: '🔊 Audio & SFX Foley (Veo / Omni)',
  omni: '⚡ Gemini Omni Flash (8-Layer)',
  food: '🍔 Food, Beverage & ASMR (Gemini Omni)',
  vietnam: '🇻🇳 Vietnam Cinematic & Culture (100 Prompts)',
  travel: '✈️ Luxury Travel & Destination (Gemini Omni)',
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
    prompt.category === 'omni' ||
    prompt.category === 'food' ||
    prompt.category === 'travel' ||
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
    case 'audio':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    case 'omni':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
    case 'food':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
    case 'vietnam':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    case 'travel':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"></path><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`;
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

  let catLabel  = CATEGORY_LABELS[prompt.category] || (prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1));
  let suit      = getSuitability(prompt);
  let definition = prompt.definition ?? '';
  let diffLabel = prompt.difficulty;
  
  const lang = localStorage.getItem("cine_lang") || "vi";
  if (lang === 'vi') {
    const VI_CATS = {
      camera: 'Góc Máy',
      lighting: 'Ánh Sáng',
      composition: 'Bố Cục',
      editing: 'Hậu Kỳ',
      genres: 'Thể Loại',
      storytelling: 'Kể Chuyện',
      vfx: 'Kỹ Xảo',
      gear: 'Thiết Bị',
      videostyles: '🎬 AI Video Styles',
      audio: '🔊 Âm Thanh & Foley',
      omni: '⚡ Gemini Omni (8 Lớp)',
      food: '🍔 Ẩm Thực & ASMR',
      vietnam: '🇻🇳 Văn Hóa & Đời Sống Việt Nam',
      travel: '✈️ Du Lịch & Resort Thượng Lưu'
    };
    const VI_DIFFS = {
      Basic: 'Cơ Bản', Intermediate: 'Trung Bình', Advanced: 'Nâng Cao'
    };
    catLabel = VI_CATS[prompt.category] || catLabel;
    diffLabel = VI_DIFFS[prompt.difficulty] || diffLabel;
    definition = prompt.whenToUse || definition;
    if (suit.cls === 'suitability-badge--video') suit.text = '🎥 Chuyên Video';
    else suit.text = '🌟 Đa Năng';
  } else {
    const EN_DIFFS = {
      Basic: 'Basic', Intermediate: 'Intermediate', Advanced: 'Advanced'
    };
    diffLabel = EN_DIFFS[prompt.difficulty] || diffLabel;
    if (suit.cls === 'suitability-badge--video') suit.text = '🎥 Video-Ready';
    else suit.text = '🌟 Versatile';
  }
  const favClass = isFavorite(prompt.id) ? 'is-favorite' : '';
  const deepDiveText = lang === 'vi' ? 'Chuyên sâu' : 'Deep Dive';

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
        >${escapeHTML(diffLabel)}</span>
        <span
          class="badge mood-badge"
          style="--badge-color: ${moodColor}"
          title="Mood"
        >${escapeHTML(prompt.mood)}</span>
      </div>
      <div class="card-quick-actions">
        <button class="deep-dive-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          ${deepDiveText}
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

  const lang = localStorage.getItem("cine_lang") || "vi";

  if (count) {
    const n = prompts.length;
    count.textContent = lang === 'vi' 
      ? `${n} thẻ kịch bản`
      : `${n} ${n === 1 ? 'prompt' : 'prompts'}`;
  }

  if (prompts.length === 0) {
    const isEn = lang === 'en';
    const emptyTitle = isEn ? 'No matching prompts found' : 'Không tìm thấy kịch bản phù hợp';
    const emptyDesc = isEn 
      ? 'Try changing your search keywords or select "All Categories" to broaden results.'
      : 'Hãy thử đổi từ khóa tìm kiếm hoặc chọn danh mục "Tất cả danh mục" để mở rộng kết quả.';
    const suggestHeader = isEn ? '⚡ TRENDING KEYWORD SUGGESTIONS:' : '⚡ GỢI Ý TỪ KHÓA THỊNH HÀNH:';

    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.12); border-radius: 16px; margin: 20px 0;">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
        <h3 style="color: #f4f4f5; font-size: 1.05rem; font-weight: 700; margin: 0 0 6px;">${emptyTitle}</h3>
        <p style="color: #a1a1aa; font-size: 0.8rem; max-width: 420px; margin: 0 auto 16px; line-height: 1.5;">${emptyDesc}</p>
        <div style="color: #ffd700; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 10px;">${suggestHeader}</div>
        <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
          <button class="suggest-tag-btn" data-query="Saigon" style="background: rgba(201,162,39,0.15); border: 1px solid rgba(201,162,39,0.4); color: #ffd700; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">${isEn ? '☕ Saigon Coffee' : '☕ Cà Phê Sài Gòn'}</button>
          <button class="suggest-tag-btn" data-query="Pho" style="background: rgba(248,113,113,0.15); border: 1px solid rgba(248,113,113,0.4); color: #f87171; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">${isEn ? '🍜 Steaming Pho' : '🍜 Phở Bốc Khói'}</button>
          <button class="suggest-tag-btn" data-query="Ao Dai" style="background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.4); color: #38bdf8; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">${isEn ? '👘 Ao Dai Dress' : '👘 Áo Dài'}</button>
          <button class="suggest-tag-btn" data-query="Deakins" style="background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4); color: #fbbf24; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">💡 Roger Deakins</button>
          <button class="suggest-tag-btn" data-query="Wong Kar" style="background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.4); color: #c084fc; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🌃 Wong Kar-wai</button>
          <button class="suggest-tag-btn" data-query="Macro" style="background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.4); color: #34d399; padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🔍 Macro Close-Up</button>
        </div>
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
 *   userSubject?:     string,   // user-provided subject
 *   characterAnchor?: string,   // user-provided character anchor
 * }} [options]
 */
export function displayDualResult(basePrompt, title, options = {}) {
  const {
    aspectRatioFlag = '--ar 16:9',
    negativePrompt  = '',
    motionTags      = [],
    userSubject     = '',
    characterAnchor = '',
    fpsValue        = '24fps',
    studioCamera    = null,
  } = options;

  const resultBox       = document.getElementById('result-box');
  const promptTitle     = document.getElementById('prompt-title');
  const resultTextImage = document.getElementById('result-text-image');
  const resultTextVideo = document.getElementById('result-text-video');
  const transImageEl    = document.getElementById('result-translation-image');
  const transVideoEl    = document.getElementById('result-translation-video');

  if (!resultBox || !promptTitle || !resultTextImage || !resultTextVideo) return;

  promptTitle.textContent = title;

  const cleanChar = characterAnchor ? characterAnchor.trim() : '';

  // ── Studio Engine Prefixes (StudioBinder & AICameraMovements) ──
  const studioImgPrefixes = [];
  const studioVidPrefixes = [];

  if (studioCamera && studioCamera.autoApply) {
    if (studioCamera.shotSize) {
      studioImgPrefixes.push(studioCamera.shotSize);
      studioVidPrefixes.push(studioCamera.shotSize);
    }
    if (studioCamera.shotAngle) {
      studioImgPrefixes.push(studioCamera.shotAngle);
      studioVidPrefixes.push(studioCamera.shotAngle);
    }
    if (studioCamera.cameraMotion) {
      const speed = studioCamera.motionSpeed || 'slow';
      const speedWord = speed === 'slow' ? 'Slow' : speed === 'fast' ? 'Fast-paced' : speed === 'hyper' ? 'Hyper-speed dynamic' : 'Smooth';
      studioVidPrefixes.unshift(`${speedWord} ${studioCamera.cameraMotion}`);
    }
  }

  // ── Image prompt (Clean Video/Timeline artifacts for pure Still Photo) ────────
  let cleanImageBase = basePrompt;
  // If basePrompt contains multi-shot timeline format (e.g. Gemini Omni video prompt), clean it up for Midjourney Still
  if (cleanImageBase.includes('Generate a 10-second') || cleanImageBase.includes('Timeline:') || cleanImageBase.includes('0.0-')) {
    cleanImageBase = cleanImageBase
      .replace(/Generate a \d+-second[^\.]*\.\s*/gi, '')
      .replace(/Concept:\s*/gi, '')
      .replace(/\d+\.\d+-\d+\.\d+s:\s*/g, '')
      .replace(/Native audio:[^\.]*\./gi, '')
      .replace(/Timeline:\s*/gi, '')
      .trim();
  }

  let imageText = cleanImageBase;
  if (studioImgPrefixes.length > 0) {
    imageText = studioImgPrefixes.join(', ') + ', ' + imageText;
  }
  if (cleanChar) {
    imageText += `, character visual anchor: ${cleanChar}`;
  }
  imageText += ', 8k resolution, cinematic masterpiece, highly detailed still ' + aspectRatioFlag + ' --style raw';

  if (negativePrompt.trim()) {
    imageText += ' --no ' + negativePrompt.trim();
  }

  resultTextImage.textContent = imageText;
  resultTextImage.classList.remove('result-placeholder');
  
  // Real-time Word & Character Counter for Image Prompt
  const imgWords = imageText.trim() ? imageText.trim().split(/\s+/).length : 0;
  const countImgBadge = document.getElementById('count-badge-image');
  if (countImgBadge) {
    countImgBadge.textContent = `${imgWords} từ · ${imageText.length} ký tự`;
    countImgBadge.style.color = imgWords > 120 ? '#fbbf24' : '#34d399';
  }

  if (transImageEl) {
    transImageEl.textContent = '';
    transImageEl.style.display = 'none';
  }

  // ── Video prompt (Standardized 4-Part AI Camera Movement Directive) ─────────────────
  const aspectLabel = aspectRatioFlag.replace('--ar ', '');
  let videoText = basePrompt;
  if (studioVidPrefixes.length > 0) {
    videoText = studioVidPrefixes.join(', ') + ', ' + videoText;
  }
  if (cleanChar) {
    videoText += `, Character Anchor: ${cleanChar}`;
  }
  videoText += VIDEO_SUFFIX;

  // Format 4-Part Directive for AICameraMovements if active
  if (studioCamera && studioCamera.cameraMotion && AI_CAMERA_DIRECTIVES[studioCamera.cameraMotion]) {
    const dir = AI_CAMERA_DIRECTIVES[studioCamera.cameraMotion];
    const speedPref = studioCamera.motionSpeed ? ` (${studioCamera.motionSpeed} pacing)` : '';
    videoText += ` | Camera Directive [${dir.name.toUpperCase()}]: Movement: ${dir.movement}. Speed: ${dir.speed}${speedPref}. Framing: ${dir.framing}. End: ${dir.end}.`;
  } else if (motionTags.length) {
    videoText += ', Camera Motion: ' + motionTags.join(', ');
  }

  videoText += `, Frame Rate: ${fpsValue}`;
  videoText += ', Aspect Ratio: ' + aspectLabel;

  resultTextVideo.textContent = videoText;
  resultTextVideo.classList.remove('result-placeholder');
  
  // Real-time Word & Character Counter for Video Prompt
  const vidWords = videoText.trim() ? videoText.trim().split(/\s+/).length : 0;
  const countVidBadge = document.getElementById('count-badge-video');
  if (countVidBadge) {
    countVidBadge.textContent = `${vidWords} từ · ${videoText.length} ký tự`;
    countVidBadge.style.color = vidWords > 160 ? '#fbbf24' : '#38bdf8';
  }
  
  if (transVideoEl) {
    transVideoEl.textContent = '';
    transVideoEl.style.display = 'none';
  }

  // ── Audio prompt ───────────────────────────────────────
  const resultTextAudio = document.getElementById('result-text-audio');
  const transAudioEl = document.getElementById('result-translation-audio');

  if (resultTextAudio) {
    const subjectLower = (userSubject || basePrompt || '').toLowerCase();
    const topic = userSubject.trim() || 'subject';

    let category = 'cinematic';
    if (subjectLower.match(/(coffee|tea|juice|soda|drink|food|sizzle|pan|steak|sauce|món|bánh|ăn|bếp|nước ép|trà sữa|vị|dipping|sauce|bakery|pastry|noodle|phở|bún|mì|ramen|dinner|rice)/)) {
      category = 'food';
    } else if (subjectLower.match(/(serum|skin|cream|face|beauty|lip|makeup|spa|perfume|fragrance|mist|hair|brush|jewelry|necklace|ring|ao dai|áo dài|tắm|gội|nha khoa|thẩm mỹ)/)) {
      category = 'beauty';
    } else if (subjectLower.match(/(phone|tech|device|button|click|keyboard|mouse|desk|workspace|app|code|computer|screen|appliance|clean|spray|wipe|craft|handmade|notebook|book|pen|shutter|camera)/)) {
      category = 'tech';
    } else if (subjectLower.match(/(beach|waves|ocean|travel|street|alley|resort|rain|mountain|valley|forest|hotel|lobby|apartment|room|house|garden|outdoor|nature|birds)/)) {
      category = 'travel';
    }

    let audioText = "";
    if (category === 'food') {
      audioText = 
`Audio Direction (6-Layer / 10s Timeline) for "${topic}":
0-2s (Hook): Close-mic sizzling or ice clinks with a fresh splash of "${topic}", satisfying opening hook.
2-5s (Body): Liquid pouring, cup/ceramic plate resonance, morning room tone or warm kitchen background.
5-8s (Emotion): Low warm piano pad or light acoustic guitar enters softly, friends' laughter or cafe murmur.
8-10s (Ending): Clean final plate/cup set-down, music resolves with a subtle premium chime.

Mix Direction:
- Ambience: Cozy cafe murmur or soft kitchen room tone.
- Foley: Ceramic cup clink, paper wrap rustle, or chopsticks contact.
- Product SFX: Close-mic pouring of "${topic}", ice clinks, or pan sizzle.
- Voice-over: Friendly Vietnamese voice: "Nóng hổi, đậm đà, đúng vị quen." (or "Mát một ngụm, vui cả buổi.")
- Music Cue: Subtle non-lyrical acoustic guitar or low piano pad.
- Mix priority: Keep "${topic}" pouring and plate/glass SFX crisp in the foreground, ambience low, music warm but non-distracting.`;
    } else if (category === 'beauty') {
      audioText = 
`Audio Direction (6-Layer / 10s Timeline) for "${topic}":
0-2s (Hook): Soft dropper click or elegant spray burst of "${topic}", close-mic texture.
2-5s (Body): Gentle glide/patting sound on skin, fabric swish, quiet breath, airy room tone.
5-8s (Emotion): Low cinematic luxury pad enters, slow-tempo atmospheric chords.
8-10s (Ending): Product bottle set down with a refined clink, shimmering fade out.

Mix Direction:
- Ambience: Airy bathroom tone or peaceful spa studio hum.
- Foley: Cloth/fabric movement, soft makeup compact mirror click.
- Product SFX: Dropper click, spray mist, or glass bottle clink of "${topic}".
- Voice-over: Calm Vietnamese female voice: "Đẹp nhẹ nhàng, tự tin mỗi ngày." (or "Một chạm nhỏ, khác biệt lớn.")
- Music Cue: Slow-tempo premium ambient pad (non-lyrical).
- Mix priority: Keep "${topic}" spray/dropper SFX delicate in the foreground, room ambience airy, music low and premium.`;
    } else if (category === 'tech') {
      audioText = 
`Audio Direction (6-Layer / 10s Timeline) for "${topic}":
0-2s (Hook): Crisp device snap-on, switch flip, or button click of "${topic}".
2-5s (Body): Rhythmic keyboard taps, precise mouse clicks, pen writing/ticking on paper, desk room tone.
5-8s (Emotion): Modern focused electronic synth pulse enters, expressing workflow productivity.
8-10s (Ending): Clean success chime or app notification blip on final frame.

Mix Direction:
- Ambience: Quiet office hum or creative studio room tone.
- Foley: Keyboard taps, mouse clicks, paper page rustle, or box lid lift.
- Product SFX: Mechanical button click, camera shutter, or appliance hum of "${topic}".
- Voice-over: Clear Vietnamese business voice: "Việc gọn hơn, ngày nhẹ hơn."
- Music Cue: Minimal modern electronic pulse (medium-low tempo, no lyrics).
- Mix priority: Keep work/tech foley sharp, synth low and focused, ending chime clear.`;
    } else if (category === 'travel') {
      audioText = 
`Audio Direction (6-Layer / 10s Timeline) for "${topic}":
0-2s (Hook): Immersive wave crash, rain tapping, or wind whoosh in "${topic}".
2-5s (Body): Footsteps on wood floor/stone path, door handle turn, distant birds or wind chimes.
5-8s (Emotion): Hopeful emotional piano pad or airy acoustic texture enters, expanding the landscape.
8-10s (Ending): Ambient sound slowly fades into a clean resolved chord.

Mix Direction:
- Ambience: Ocean waves, morning forest birds, or soft rain on window/tin roof.
- Foley: Rhythmic footsteps, door open, suitcase wheels rolling, or fabric swish.
- Product SFX: Water splashes, leaf rustling, or breeze moving curtains in "${topic}".
- Voice-over: Calm Vietnamese travel narrator: "Đổi gió một hôm, nhớ cả tuần."
- Music Cue: Soft emotional piano or ambient acoustic pad.
- Mix priority: Ambience wide and realistic, steps/foley clear in middle distance, music emotional but restrained.`;
    } else {
      audioText = 
`Audio Direction (6-Layer / 10s Timeline) for "${topic}":
0-2s (Hook): Low cinematic riser or atmospheric whoosh, drawing attention to "${topic}".
2-5s (Body): Subtle material sound (fabric swish, glass clink, or packaging rustle), quiet room tone.
5-8s (Emotion): Warm synth pad rises gently, enhancing visual anticipation.
8-10s (Ending): Refined premium trailer hit or logo resolve with a short reverb tail.

Mix Direction:
- Ambience: Quiet premium room tone.
- Foley: Delicate fabric movement or object handling.
- Product SFX: Synchronized movement or reveal sound of "${topic}".
- Voice-over: Sincere Vietnamese voice: "Một chạm nhỏ, khác biệt lớn."
- Music Cue: Cinematic ambient pad building to a clean hit.
- Mix priority: Keep reveal hit elegant, product SFX recognizable in the foreground, music low.`;
    }

    resultTextAudio.textContent = audioText;
    resultTextAudio.classList.remove('result-placeholder');

    if (transAudioEl) {
      transAudioEl.textContent = '';
      transAudioEl.style.display = 'none';
    }
  }

  // ── NotebookLM Directive prompt ───────────────────────
  const resultTextNotebookLM = document.getElementById('result-text-notebooklm');
  const transNotebookLMEl = document.getElementById('result-translation-notebooklm');

  if (resultTextNotebookLM) {
    const motionStr = motionTags.length ? motionTags.join(', ') : 'Smooth Cinematic Motion';
    const lang = localStorage.getItem("cine_lang") || "vi";

    const cleanSubject = userSubject ? userSubject.trim() : '';
    const topicName = cleanSubject ? cleanSubject : (lang === 'vi' ? '[Điền chủ đề của bạn]' : '[Insert your topic]');
    const charLineVi = cleanChar ? `\n• Khóa nhân vật cố định: ${cleanChar} (Giữ nguyên diện mạo & thần thái qua mọi cảnh quay)` : '';
    const charLineEn = cleanChar ? `\n• Character Continuity Anchor: ${cleanChar} (Enforce consistent appearance across all shots)` : '';

    let nblmText = "";
    if (lang === 'vi') {
      nblmText = 
`💬 BƯỚC 1: DÀNH CHO KHUNG "TRÒ CHUYỆN" (NOTEBOOKLM CHAT):
Dựa trên các tài liệu nguồn đã tải lên, hãy phân tích chủ đề "${topicName}" và tạo kịch bản phân cảnh chi tiết (Shotlist) theo phong cách điện ảnh ${title}.
• Kỹ thuật điện ảnh: ${basePrompt}${charLineVi}
• Chuyển động máy quay: ${motionStr}
• Yêu cầu: Tất cả nội dung xuất ra bằng Tiếng Việt tự nhiên, truyền cảm và súc tích. Xuất ra dạng bảng 4 cột: [STT | Góc quay & Ánh sáng | Mô tả Visual | Lời thuyết minh / Audio].

🎬 BƯỚC 2: DÀNH CHO Ô "CHỦ ĐỀ TÙY CHỈNH" (VIDEO OVERVIEW):
Hãy đóng vai một Đạo diễn Điện ảnh chuyên nghiệp. Dựa vào các tài liệu nguồn đã cung cấp, hãy tổng hợp một Video Overview mang phong cách ${title} về chủ đề "${topicName}".
• Phong cách & Bối cảnh: ${title}${charLineVi}
• Kỹ thuật chi tiết: ${basePrompt} (Chuyển động: ${motionStr})
• Ngôn ngữ đầu ra: Tiếng Việt tự nhiên, truyền cảm và lôi cuốn
• Yêu cầu: Tóm tắt súc tích, hấp dẫn, chú trọng tính kể chuyện và cấu trúc mạch lạc.`;
    } else {
      nblmText = 
`💬 STEP 1: FOR NOTEBOOKLM CHAT WINDOW:
Based on the uploaded source files, analyze topic "${topicName}" and generate a detailed scene breakdown shotlist in the style of ${title}.
• Cinematic Techniques: ${basePrompt}${charLineEn}
• Camera Motion: ${motionStr}
• Format: Output as a 4-column table: [Scene # | Camera & Lighting | Visual Description | Voiceover / Audio].

🎬 STEP 2: FOR "CUSTOM OVERVIEW" FIELD (VIDEO OVERVIEW):
Act as a professional Film Director. Based on the uploaded source documents, generate a Cinematic Video Overview in the style of ${title} for topic "${topicName}".
• Style & Aesthetic: ${title}
• Requirements: Engaging narrative pacing, clear structure, and immersive storytelling based on source files.`;
    }

    resultTextNotebookLM.textContent = nblmText;
    resultTextNotebookLM.classList.remove('result-placeholder');
    if (transNotebookLMEl) {
      transNotebookLMEl.textContent = '';
      transNotebookLMEl.style.display = 'none';
    }
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
export function openModal(name, definition, prompt) {
  const overlay    = document.getElementById('modal-overlay');
  const title      = document.getElementById('modal-title');
  const defEl      = document.getElementById('modal-definition');
  const translateBtn  = document.getElementById('translate-btn');
  const translation   = document.getElementById('modal-translation');
  const favBtn        = document.getElementById('modal-fav-btn');

  if (!overlay || !title || !defEl || !translateBtn || !translation) return;

  const modalParams = overlay.querySelector('.modal-parameters');
  if (modalParams) modalParams.style.display = 'flex';

  // Populate content
  title.textContent  = name;
  defEl.textContent  = '';
  defEl.style.display = 'none';
  
  // Create beautiful full card technical detail representation for the zoom-in view
  const descEl = document.getElementById('modal-description');
  if (descEl && prompt) {
    const defaultVIcats = {
      camera: 'Góc Máy', lighting: 'Ánh Sáng', composition: 'Bố Cục', editing: 'Hậu Kỳ', genres: 'Thể Loại', storytelling: 'Kể Chuyện', vfx: 'Kỹ Xảo', gear: 'Thiết Bị', audio: 'Âm Thanh & SFX', omni: 'Omni Flash (8 Lớp)'
    };
    const friendlyCat = defaultVIcats[prompt.category] || prompt.category;

    descEl.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:14px; margin-top:8px;">
        <!-- Technical Badge Header Row -->
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:4px;">
          <span style="background:rgba(255,215,0,0.12); border:1px solid rgba(255,215,0,0.3); color:#ffd700; border-radius:6px; padding:3px 10px; font-size:0.72rem; font-weight:800; letter-spacing:0.04em;">🗂️ CHỦ ĐỀ: ${friendlyCat.toUpperCase()}</span>
          <span style="background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; border-radius:6px; padding:3px 10px; font-size:0.72rem; font-weight:800; letter-spacing:0.04em;">⚡ CẤP ĐỘ: ${(prompt.difficulty || 'Mặc Định').toUpperCase()}</span>
          <span style="background:rgba(52,211,153,0.12); border:1px solid rgba(52,211,153,0.3); color:#34d399; border-radius:6px; padding:3px 10px; font-size:0.72rem; font-weight:800; letter-spacing:0.04em;">🎬 SUITABILITY: ĐA NĂNG HOLLYWOOD</span>
        </div>

        <!-- 1. Rich Original Definition Block -->
        <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-left:4px solid #ffd700; border-radius:12px; padding:16px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
          <div style="color:#ffd700; font-weight:800; font-size:0.8rem; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
            <span>📖 ĐỊNH NGHĨA KỸ THUẬT GỐC (FULL EXPLANATION)</span>
          </div>
          <div style="color:#e4e4e7; font-size:0.83rem; line-height:1.65; font-family:var(--font-ui);">
            ${escapeHTML(prompt.definition || prompt.description || 'Kỹ thuật điện ảnh chuyên nghiệp với đầy đủ thông số.')}
          </div>
        </div>

        <!-- 2. Application Context Quick Tip Box -->
        <div style="background:linear-gradient(135deg, rgba(56,189,248,0.06), rgba(0,0,0,0.25)); border:1px solid rgba(56,189,248,0.2); border-radius:12px; padding:16px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <div style="color:#38bdf8; font-weight:800; font-size:0.8rem; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:8px; display:flex; align-items:center; gap:6px;">
            <span>🎯 NGỮ CẢNH VẬN HÀNH (OPERATIONAL USAGE)</span>
          </div>
          <div style="color:#bae6fd; font-size:0.83rem; line-height:1.6; font-family:var(--font-ui);">
            ${escapeHTML(prompt.whenToUse || 'Áp dụng cho các phân cảnh đặc tả hoặc toàn cảnh cần chiều sâu và điểm nhấn điện ảnh mạnh mẽ.')}
          </div>
        </div>
      </div>
    `;
  } else if (descEl) {
    descEl.innerHTML = '';
    descEl.textContent = definition || '';
  }

  // Populate dynamic specs if prompt object is provided
  if (prompt) {
    const imgCode = document.getElementById('modal-prompt-template');
    const vidCode = document.getElementById('modal-video-template');
    const motionTag = document.getElementById('modal-motion-tag');
    const arTag = document.getElementById('modal-ar-tag');

    const subjectInput = document.getElementById('subject-input');
    let subject = subjectInput ? subjectInput.value.trim() : '';
    if (!subject) subject = '[Subject]';

    const arSelect = document.getElementById('aspect-ratio');
    const aspectRatioFlag = (arSelect && arSelect.value) ? arSelect.value : '--ar 16:9';

    let assembledImg = (prompt.promptTemplate || prompt.name).replace(/\[Subject\]/gi, subject);
    assembledImg += ', 8k resolution, cinematic masterpiece, highly detailed still ' + aspectRatioFlag + ' --style raw';
    const negInput = document.getElementById('negative-input');
    if (negInput && negInput.value.trim()) {
      assembledImg += ' --no ' + negInput.value.trim();
    }

    let assembledVid = (prompt.promptTemplate || prompt.name).replace(/\[Subject\]/gi, subject);
    assembledVid += ', 24fps cinema motion, camera movement, Aspect Ratio: ' + aspectRatioFlag.replace('--ar ', '');

    if (imgCode) imgCode.textContent = assembledImg;
    if (vidCode) vidCode.textContent = assembledVid;
    if (motionTag) motionTag.textContent = prompt.recommendedMotion || 'Pan / Zoom / Dolly';
    if (arTag) arTag.textContent = aspectRatioFlag;
  }

  // Setup modal-select-btn to assign prompt to grid & close modal
  const selectBtn = document.getElementById('modal-select-btn');
  if (selectBtn && prompt) {
    selectBtn.onclick = () => {
      // Simulate selecting card & close modal
      const gridCard = document.querySelector(`.card[data-id="${prompt.id}"]`);
      if (gridCard) {
        // Trigger select card
        const cardClickEvent = new Event('click', { bubbles: true });
        // Temporarily bypass openModal click prevention to avoid infinite loop
        gridCard.dataset.fromModalSelect = "true";
        gridCard.dispatchEvent(cardClickEvent);
      }
      closeModal();
    };
  }

  // Setup fav button
  if (favBtn) {
    const activeCard = document.querySelector('.card.is-active');
    const promptId = activeCard ? activeCard.dataset.id : (prompt ? prompt.id : null);
    if (promptId) {
      favBtn.className = isFavorite(promptId) ? 'fav-btn is-favorite' : 'fav-btn';
      favBtn.onclick = (e) => {
        const isFav = !favBtn.classList.contains('is-favorite');
        favBtn.className = isFav ? 'fav-btn is-favorite' : 'fav-btn';
        // Simulate click on grid card to sync
        const gridCard = document.querySelector(`.card[data-id="${promptId}"]`);
        const gridBtn = gridCard?.querySelector('.fav-btn');
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

  // Close the main modal first if it's open
  const mainOverlay = document.getElementById('modal-overlay');
  if (mainOverlay && mainOverlay.classList.contains('is-open')) {
    mainOverlay.classList.remove('is-open');
  }

  // Populate badge header
  const catBadge = document.getElementById('dd-badge-cat');
  const diffBadge = document.getElementById('dd-badge-diff');
  const moodBadge = document.getElementById('dd-badge-mood');
  if (catBadge) catBadge.textContent = (prompt.category || 'N/A').toUpperCase();
  if (diffBadge) diffBadge.textContent = (prompt.difficulty || 'N/A').toUpperCase();
  if (moodBadge) moodBadge.textContent = (prompt.mood || 'N/A').toUpperCase();

  // Title
  const titleEl = document.getElementById('deep-dive-modal-title');
  if (titleEl) titleEl.textContent = `🔍 ${prompt.name}`;

  // Definition
  const defEl = document.getElementById('dd-definition');
  if (defEl) defEl.textContent = prompt.definition || 'Không có mô tả.';

  // When to use
  const whenEl = document.getElementById('dd-when-to-use');
  if (whenEl) whenEl.textContent = prompt.whenToUse || 'Chưa có dữ liệu.';

  // Best practices
  const bestEl = document.getElementById('dd-best-practices');
  if (bestEl) bestEl.textContent = prompt.bestPractices || 'Chưa có dữ liệu.';

  // Common mistakes
  const mistakesEl = document.getElementById('dd-common-mistakes');
  const mistakesHeader = document.getElementById('dd-mistakes-header');
  if (mistakesEl && mistakesHeader) {
    if (prompt.commonMistakes && prompt.commonMistakes.length > 0) {
      mistakesHeader.style.display = 'block';
      mistakesEl.style.display = 'block';
      mistakesEl.innerHTML = prompt.commonMistakes.map(m => `<li>${escapeHTML(m)}</li>`).join('');
    } else {
      mistakesHeader.style.display = 'none';
      mistakesEl.style.display = 'none';
      mistakesEl.innerHTML = '';
    }
  }

  // Assemble the prompt template
  const promptText = document.getElementById('dd-prompt-text');
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

  const lang = localStorage.getItem("cine_lang") || "vi";

  // Handle Copy Button
  const copyBtn = document.getElementById('dd-copy-btn');
  if (copyBtn) {
    copyBtn.textContent = lang === 'vi' ? 'Sao chép' : 'Copy';
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
      copyBtn.textContent = lang === 'vi' ? 'Đã chép!' : 'Copied!';
      copyBtn.classList.add('copied');
    };
  }

  // Handle Translate Button
  const translateBtn = document.getElementById('dd-translate-prompt-btn');
  if (translateBtn) {
    translateBtn.textContent = lang === 'vi' ? '🇻🇳 Dịch' : '🌐 Translate';
    translateBtn.disabled = false;
    translateBtn.onclick = async () => {
      const text = promptText ? promptText.textContent : (prompt.promptTemplate || '');
      if (!text) return;

      translateBtn.textContent = lang === 'vi' ? 'Đang dịch...' : 'Translating...';
      translateBtn.disabled = true;

      try {
        const targetLang = lang === 'vi' ? 'vi' : 'en';
        const translatedText = await translateCinematicText(text, targetLang);

        if (promptText && translatedText) {
          promptText.textContent = translatedText;
        }
        translateBtn.textContent = lang === 'vi' ? 'Đã dịch' : 'Translated';
      } catch (err) {
        console.error('Translation error:', err);
        translateBtn.textContent = lang === 'vi' ? 'Lỗi dịch' : 'Error';
        translateBtn.disabled = false;
      }
    };
  }

  // Open modal
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Scroll overlay to top
  overlay.scrollTop = 0;

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
    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        close();
      }
    });
  }
}


/**
 * Returns a human-readable relative time string.
 */
function getTimeAgo(dateString) {
  if (!dateString) return 'Vừa xong';
  const now = new Date();
  const past = new Date(dateString);
  const diffSec = Math.floor((now - past) / 1000);
  
  if (diffSec < 60) return 'Vừa xong';
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} phút trước`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} giờ trước`;
  return `${Math.floor(diffSec / 86400)} ngày trước`;
}

/**
 * Render prompt history grid items when 'history' category is selected.
 */
export function renderHistoryGrid(historyItems, onLoadItem, onClearHistory) {
  const grid  = document.getElementById('prompt-grid');
  const count = document.getElementById('result-count');

  if (!grid) return;

  if (count) {
    count.textContent = `${historyItems.length} prompt trong lịch sử`;
  }

  if (historyItems.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border-mid);">
        <div style="font-size: 40px; margin-bottom: 12px;">📜</div>
        <h2 style="font-size: 18px; color: var(--text-primary); margin-bottom: 8px;">Chưa có lịch sử Prompt</h2>
        <p style="color: var(--text-muted); font-size: 13px; max-width: 420px; margin: 0 auto; line-height: 1.5;">Mỗi khi bạn tạo hoặc chỉnh sửa Prompt, 30 câu lệnh gần nhất sẽ tự động lưu ở đây để bạn dễ dàng tìm lại bất kỳ lúc nào.</p>
      </div>
    `;
    return;
  }

  const clearBarHTML = `
    <div style="grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border-subtle); margin-bottom: 8px;">
      <span style="font-size: 13px; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
        📜 Lịch Sử 30 Prompt Gần Nhất
      </span>
      <button id="clear-history-btn" class="header-btn" style="background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: #ef4444; height: 28px; font-size: 11px; padding: 0 10px;">
        🗑️ Xóa Lịch Sử
      </button>
    </div>
  `;

  const cardsHTML = historyItems.map((item, idx) => {
    const timeAgo = getTimeAgo(item.timestamp);
    const shortImageText = escapeHTML(item.imagePrompt || item.videoPrompt || 'No content');
    const titleText = escapeHTML(item.title || 'Master Prompt');

    return `
      <div class="card history-card" data-hist-id="${item.id}" data-index="${idx}" tabindex="0" style="position: relative;">
        <div class="card-header" style="justify-content: space-between;">
          <span class="badge" style="--badge-color: #38bdf8; font-size: 10px; font-weight: 700;">📜 ${timeAgo}</span>
          <button class="history-copy-btn" title="Sao chép Image Prompt" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M4 11H3a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 3 1h7a1.5 1.5 0 0 1 1.5 1.5V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        <h3 class="card-name" style="margin-top: 6px; font-size: 15px;">${titleText}</h3>
        <p class="card-definition" style="font-family: var(--font-mono); font-size: 11px; line-height: 1.4; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin-top: 6px;">
          ${shortImageText}
        </p>
        <div class="card-quick-actions" style="margin-top: 12px;">
          <button class="history-load-btn new-btn-outline" style="width: 100%; justify-content: center; font-size: 11px; padding: 6px 10px;">
            🚀 Nạp lại Prompt này
          </button>
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = clearBarHTML + cardsHTML;

  // Wire clear history button
  const clearBtn = document.getElementById('clear-history-btn');
  if (clearBtn && onClearHistory) {
    clearBtn.addEventListener('click', onClearHistory);
  }

  // Wire cards
  grid.querySelectorAll('.history-card').forEach(cardEl => {
    const idx = parseInt(cardEl.dataset.index, 10);
    const item = historyItems[idx];
    if (!item) return;

    const loadItem = (e) => {
      if (e && e.target.closest('.history-copy-btn')) return;
      onLoadItem(item);
    };

    cardEl.addEventListener('click', loadItem);

    const copyBtn = cardEl.querySelector('.history-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(item.imagePrompt || item.videoPrompt);
          alert('Đã sao chép Prompt từ lịch sử!');
        } catch (err) {
          console.warn("Copy failed:", err);
        }
      });
    }
  });
}

/**
 * Updates summary badges on the Studio Engine Camera Dashboard header.
 * @param {{ shotSize?: string, shotAngle?: string, cameraMotion?: string, motionSpeed?: string }} state
 */
export function updateStudioCameraBadges(state = {}) {
  const badgeSize = document.getElementById('scb-badge-size');
  const badgeAngle = document.getElementById('scb-badge-angle');
  const badgeMotion = document.getElementById('scb-badge-motion');

  if (badgeSize) {
    if (state.shotSize) {
      const shortName = state.shotSize.split('(')[0].trim();
      badgeSize.textContent = `Cỡ: ${shortName}`;
      badgeSize.classList.add('is-active');
    } else {
      badgeSize.textContent = 'Cỡ cảnh: Tự do';
      badgeSize.classList.remove('is-active');
    }
  }

  if (badgeAngle) {
    if (state.shotAngle) {
      const shortName = state.shotAngle.split(',')[0].trim();
      badgeAngle.textContent = `Góc: ${shortName}`;
      badgeAngle.classList.add('is-active');
    } else {
      badgeAngle.textContent = 'Góc: Tự do';
      badgeAngle.classList.remove('is-active');
    }
  }

  if (badgeMotion) {
    if (state.cameraMotion) {
      const speed = state.motionSpeed ? `${state.motionSpeed} ` : '';
      badgeMotion.textContent = `Motion: ${speed}${state.cameraMotion.split(' ')[0]}`;
      badgeMotion.classList.add('is-active');
    } else {
      badgeMotion.textContent = 'Chuyển động: Mặc định';
      badgeMotion.classList.remove('is-active');
    }
  }
}

