/**
 * scorecard.js — Prompt Quality Scoring Engine
 * ──────────────────────────────────────────────
 * Scores cinematic prompts across 5 criteria (20 pts each, total 100).
 * Returns breakdown, grade (S/A/B/C/D), and improvement suggestions.
 */

/* ── SCORING CRITERIA ──────────────────────────────────────── */

const CRITERIA = {
  subject: {
    label: '🎯 Chủ Thể',
    labelShort: 'Subject',
    maxScore: 20,
    tiers: [
      {
        score: 20,
        keywords: [
          // Specific descriptors (age, appearance, action)
          'yo,', 'year old', 'years old', 'tuổi',
          'wearing', 'dressed', 'holding', 'sitting', 'standing',
          'walking', 'running', 'dancing', 'looking', 'reaching',
          'hair', 'eyes', 'skin', 'face', 'hands',
        ],
        minMatches: 3,
      },
      {
        score: 14,
        keywords: [
          'girl', 'boy', 'woman', 'man', 'person', 'character',
          'portrait', 'couple', 'warrior', 'detective', 'dancer',
          'product', 'car', 'food', 'drink', 'coffee', 'bottle',
          'animal', 'cat', 'dog', 'flower', 'building',
        ],
        minMatches: 1,
      },
      {
        score: 6,
        keywords: [
          'subject', 'figure', 'object', 'thing', 'item', 'scene',
        ],
        minMatches: 1,
      },
    ],
  },

  lighting: {
    label: '💡 Ánh Sáng',
    labelShort: 'Lighting',
    maxScore: 20,
    tiers: [
      {
        score: 20,
        keywords: [
          'chiaroscuro', 'rembrandt light', 'split light', 'butterfly light',
          'volumetric light', 'volumetric lighting', 'volumetric ray', 'god ray', 'god rays', 'crepuscular',
          'caustic', 'subsurface scattering', 'three point',
          'practical light', 'practical lights', 'motivated light', 'bounce light',
        ],
        minMatches: 2,
      },
      {
        score: 15,
        keywords: [
          'rim light', 'backlight', 'side light', 'top light',
          'golden hour', 'blue hour', 'magic hour',
          'neon glow', 'neon light', 'neon reflection',
          'soft light', 'hard light', 'diffused light',
          'high key', 'low key', 'silhouette',
          'candlelight', 'firelight', 'moonlight', 'sunlight',
          'spotlight', 'studio light', 'ambient light',
          'warm light', 'cool light', 'dramatic light',
        ],
        minMatches: 1,
      },
      {
        score: 8,
        keywords: [
          'light', 'lighting', 'shadow', 'glow', 'bright', 'dark',
          'illuminated', 'lit', 'shining', 'radiant', 'luminous',
        ],
        minMatches: 1,
      },
    ],
  },

  camera: {
    label: '📹 Camera & Lens',
    labelShort: 'Camera',
    maxScore: 20,
    tiers: [
      {
        score: 20,
        keywords: [
          'anamorphic', 'f/1.2', 'f/1.4', 'f/1.8', 'f/2.0', 'f/2.8',
          'ARRI Alexa', 'RED Helium', 'Sony Venice', 'Hasselblad',
          'Cooke', 'Zeiss', 'Panavision', 'Leica',
          'tilt-shift', 'split diopter', 'rack focus',
          '16mm', '35mm', '50mm', '65mm', '85mm', '135mm', '200mm',
          'depth of field', 'shallow depth', 'deep focus',
        ],
        minMatches: 2,
      },
      {
        score: 14,
        keywords: [
          'close up', 'extreme close', 'medium shot', 'wide shot',
          'extreme wide', 'establishing shot', 'full shot',
          'over the shoulder', 'point of view', 'POV',
          'low angle', 'high angle', 'dutch angle', 'bird eye',
          'overhead', 'worm eye', 'eye level',
          'bokeh', 'lens flare', 'focus', 'aperture',
          'telephoto', 'wide angle', 'macro', 'fisheye',
        ],
        minMatches: 1,
      },
      {
        score: 6,
        keywords: [
          'camera', 'lens', 'shot', 'angle', 'frame', 'framing',
          'zoom', 'pan', 'tilt', 'dolly', 'tracking',
        ],
        minMatches: 1,
      },
    ],
  },

  composition: {
    label: '📐 Bố Cục',
    labelShort: 'Composition',
    maxScore: 20,
    tiers: [
      {
        score: 20,
        keywords: [
          'rule of thirds', 'golden ratio', 'golden spiral', 'fibonacci',
          'phi grid', 'dynamic symmetry', 'rabatment',
          'frame within frame', 'frame in frame',
          'leading lines', 'vanishing point', 'perspective',
          'negative space', 'breathing room',
          'layered depth', 'foreground interest', 'depth layers',
        ],
        minMatches: 2,
      },
      {
        score: 14,
        keywords: [
          'symmetry', 'symmetrical', 'center frame', 'centered',
          'balance', 'balanced', 'asymmetric',
          'diagonal', 'triangular',
          'rule of thirds', 'thirds',
          'framing', 'foreground', 'midground', 'background',
          'depth', 'layers', 'overlap',
        ],
        minMatches: 1,
      },
      {
        score: 6,
        keywords: [
          'composition', 'layout', 'arrangement', 'placement',
          'position', 'aligned', 'spacing',
        ],
        minMatches: 1,
      },
    ],
  },

  filmstock: {
    label: '🎞️ Film Stock & Color',
    labelShort: 'Film/Color',
    maxScore: 20,
    tiers: [
      {
        score: 20,
        keywords: [
          'Kodak Portra', 'Kodak Ektar', 'Kodak Vision3', 'Kodak Gold',
          'Fuji Velvia', 'Fuji Superia', 'Fuji Pro 400H', 'Fuji C200',
          'Cinestill 800T', 'Ilford HP5', 'Ilford Delta',
          'Technicolor', 'Eastmancolor', 'ACES',
          'ARRI Alexa 65', 'ARRI LogC', 'RED IPP2',
          'teal and orange', 'teal-orange', 'cross-process',
          'LUT', 'color science', 'color grade',
          'film emulation', 'analog film',
        ],
        minMatches: 2,
      },
      {
        score: 14,
        keywords: [
          'film grain', 'grain', 'film stock', 'film look',
          'color grading', 'color palette', 'color tone',
          'warm tone', 'cool tone', 'muted tone', 'pastel',
          'desaturated', 'saturated', 'vibrant', 'earthy',
          'vintage', 'retro', 'analog', 'cinematic color',
          'contrast', 'high contrast', 'low contrast',
          'monochrome', 'black and white', 'sepia',
          'Portra', 'Ektar', 'Velvia', 'Cinestill',
        ],
        minMatches: 1,
      },
      {
        score: 6,
        keywords: [
          'color', 'tone', 'palette', 'hue', 'shade',
          'film', 'cinematic', 'aesthetic', 'mood', 'feel',
        ],
        minMatches: 1,
      },
    ],
  },
};

/* ── GRADE SYSTEM ──────────────────────────────────────────── */

const GRADES_VI = [
  { min: 95, grade: 'S', label: 'Chuẩn Hollywood', color: '#ffd700', glow: 'rgba(255,215,0,0.4)' },
  { min: 80, grade: 'A', label: 'Xuất Sắc', color: '#4ade80', glow: 'rgba(74,222,128,0.3)' },
  { min: 65, grade: 'B', label: 'Tốt', color: '#38bdf8', glow: 'rgba(56,189,248,0.3)' },
  { min: 50, grade: 'C', label: 'Trung Bình', color: '#fbbf24', glow: 'rgba(251,191,36,0.3)' },
  { min: 0,  grade: 'D', label: 'Cần Cải Thiện', color: '#f87171', glow: 'rgba(248,113,113,0.3)' },
];

const GRADES_EN = [
  { min: 95, grade: 'S', label: 'Hollywood Standard', color: '#ffd700', glow: 'rgba(255,215,0,0.4)' },
  { min: 80, grade: 'A', label: 'Excellent', color: '#4ade80', glow: 'rgba(74,222,128,0.3)' },
  { min: 65, grade: 'B', label: 'Good', color: '#38bdf8', glow: 'rgba(56,189,248,0.3)' },
  { min: 50, grade: 'C', label: 'Average', color: '#fbbf24', glow: 'rgba(251,191,36,0.3)' },
  { min: 0,  grade: 'D', label: 'Needs Improvement', color: '#f87171', glow: 'rgba(248,113,113,0.3)' },
];

/**
 * Determines the grade from a total score.
 * @param {number} total
 * @param {'vi'|'en'} lang
 * @returns {{ grade: string, label: string, color: string, glow: string }}
 */
function getGrade(total, lang = 'vi') {
  const grades = lang === 'vi' ? GRADES_VI : GRADES_EN;
  for (const g of grades) {
    if (total >= g.min) return g;
  }
  return grades[grades.length - 1];
}

/* ── MAIN SCORING FUNCTION ──────────────────────────────────── */

/**
 * Scores a prompt across 5 cinematic criteria.
 * 
 * @param {string} promptText - The prompt to score
 * @returns {{
 *   total: number,
 *   grade: { grade: string, label: string, color: string, glow: string },
 *   breakdown: Array<{ key: string, label: string, labelShort: string, score: number, maxScore: number, percentage: number }>,
 *   suggestions: string[],
 *   isEmpty: boolean
 * }}
 */
export function scorePrompt(promptText) {
  const lang = localStorage.getItem("cine_lang") || "vi";

  if (!promptText || promptText.trim().length < 5) {
    return {
      total: 0,
      grade: getGrade(0, lang),
      breakdown: Object.entries(CRITERIA).map(([key, c]) => ({
        key,
        label: c.label,
        labelShort: c.labelShort,
        score: 0,
        maxScore: c.maxScore,
        percentage: 0,
      })),
      suggestions: [lang === 'vi' ? 'Nhập ý tưởng và tạo prompt để xem điểm chất lượng.' : 'Enter an idea and generate a prompt to see quality score.'],
      isEmpty: true,
    };
  }

  const lowerText = promptText.toLowerCase();
  const breakdown = [];
  const suggestions = [];
  let total = 0;

  for (const [key, criteria] of Object.entries(CRITERIA)) {
    let score = 0;

    // Check tiers from highest to lowest
    for (const tier of criteria.tiers) {
      const matchCount = tier.keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
      if (matchCount >= tier.minMatches) {
        score = Math.max(score, tier.score);
        // Bonus for extra matches in top tier
        if (tier === criteria.tiers[0] && matchCount > tier.minMatches) {
          score = Math.min(criteria.maxScore, score + Math.min(matchCount - tier.minMatches, 2));
        }
      }
    }

    // Cap at maxScore
    score = Math.min(score, criteria.maxScore);

    breakdown.push({
      key,
      label: criteria.label,
      labelShort: criteria.labelShort,
      score,
      maxScore: criteria.maxScore,
      percentage: Math.round((score / criteria.maxScore) * 100),
    });

    total += score;

    // Generate suggestion for low-scoring criteria
    if (score < 10) {
      const tipMapVI = {
        subject: 'Mô tả cụ thể hơn chủ thể: tuổi, trang phục, hành động, biểu cảm.',
        lighting: 'Thêm kỹ thuật ánh sáng: chiaroscuro, rim light, golden hour, volumetric rays...',
        camera: 'Chỉ định lens cụ thể: 35mm f/1.8, anamorphic, ARRI Alexa 65...',
        composition: 'Áp dụng bố cục: rule of thirds, leading lines, frame within frame...',
        filmstock: 'Gắn film stock: Kodak Portra 400, Cinestill 800T, teal-orange grading...',
      };
      const tipMapEN = {
        subject: 'Describe subject in more detail: age, wardrobe, action, expression.',
        lighting: 'Add lighting technique: chiaroscuro, rim light, golden hour, volumetric rays...',
        camera: 'Specify lens & sensor: 35mm f/1.8, anamorphic, ARRI Alexa 65...',
        composition: 'Apply composition rule: rule of thirds, leading lines, frame within frame...',
        filmstock: 'Specify film stock: Kodak Portra 400, Cinestill 800T, teal-orange grading...',
      };
      const tipMap = lang === 'vi' ? tipMapVI : tipMapEN;
      if (tipMap[key]) suggestions.push(tipMap[key]);
    }
  }

  return {
    total,
    grade: getGrade(total, lang),
    breakdown,
    suggestions,
    isEmpty: false,
  };
}
