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
  const lang = typeof localStorage !== 'undefined' ? (localStorage.getItem("cine_lang") || "vi") : "vi";

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

  // Calculate 4-Pillars Visual Mastery Score (from photography-course-master.vercel.app)
  const fourPillars = calculate4Pillars(lowerText, lang);

  return {
    total,
    grade: getGrade(total, lang),
    breakdown,
    suggestions,
    fourPillars,
    isEmpty: false,
  };
}

/* ── 4 PILLARS OF VISUAL CRITIQUE (photography-course-master.vercel.app) ── */

/**
 * Evaluates a prompt against the 4 fundamental pillars of visual mastery:
 * 1. Bố cục (Composition & Camera - 5 sub-laws: Bố cục, Góc chụp, Tiêu điểm, Tỷ lệ, Nhịp điệu)
 * 2. Ánh sáng (Lighting & Space - 3 sub-laws: Ánh sáng, Không gian, Cân bằng)
 * 3. Màu sắc (Color & Contrast - 3 sub-laws: Màu sắc, Tương phản, Film Look)
 * 4. Chất liệu & Thống nhất (Texture & Unity - 8 sub-laws: Chất liệu/Raking light, Khí quyển, Phân cấp, Thống nhất...)
 * 
 * @param {string} lowerText 
 * @param {'vi'|'en'} lang 
 * @returns {object}
 */
export function calculate4Pillars(lowerText, lang = 'vi') {
  if (!lowerText || lowerText.length < 5) {
    return {
      bocuc: { score: 0, label: lang === 'vi' ? 'Bố Cục' : 'Composition', color: '#7c8aff' },
      anhsang: { score: 0, label: lang === 'vi' ? 'Ánh Sáng' : 'Lighting', color: '#ffcb6b' },
      mausac: { score: 0, label: lang === 'vi' ? 'Màu Sắc' : 'Color', color: '#f07178' },
      chatlieu: { score: 0, label: lang === 'vi' ? 'Chất Liệu & Thống Nhất' : 'Texture & Unity', color: '#c3e88d' },
      averageScore: 0,
      strengths: [],
      improvements: []
    };
  }

  // 1. Pillar: Bố Cục (Composition)
  const bocucKeywords = [
    'rule of thirds', 'golden ratio', 'fibonacci', 'leading lines', 'frame in frame',
    'frame within frame', 'vanishing point', 'symmetry', 'symmetrical', 'bilateral',
    'low angle', 'high angle', 'eye level', 'worm eye', 'dutch angle', 'depth of field',
    'shallow depth', 'deep focus', 'anamorphic', 'scale contrast', 'rhythm', 'geometric'
  ];
  const bocucMatches = bocucKeywords.filter(k => lowerText.includes(k)).length;
  const bocucScore = Math.min(100, Math.max(30, bocucMatches * 20 + 20));

  // 2. Pillar: Ánh Sáng (Lighting & Space)
  const anhsangKeywords = [
    'chiaroscuro', 'rembrandt', 'volumetric', 'rim light', 'negative space',
    'breathing room', 'anti-horror-vacui', 'motivated light', 'key light', 'bounce light',
    'directional light', 'softbox', 'golden hour', 'blue hour', 'balance', 'shadow sculpting'
  ];
  const anhsangMatches = anhsangKeywords.filter(k => lowerText.includes(k)).length;
  const anhsangScore = Math.min(100, Math.max(30, anhsangMatches * 22 + 15));

  // 3. Pillar: Màu Sắc (Color & Contrast)
  const mausacKeywords = [
    'color harmony', 'dominant color', 'dominant palette', '80% dominant', 'monochromatic',
    'tonal contrast', 'warm-cool', 'teal and orange', 'teal-orange', 'kodak', 'portra',
    'cinestill', 'fuji', 'aces', 'color grade', 'lut', 'high contrast', 'chromatic'
  ];
  const mausacMatches = mausacKeywords.filter(k => lowerText.includes(k)).length;
  const mausacScore = Math.min(100, Math.max(30, mausacMatches * 22 + 15));

  // 4. Pillar: Chất Liệu & Thống Nhất (Texture & Unity)
  const chatlieuKeywords = [
    'texture', 'raking light', 'somatosensory', 'micro-relief', 'tactile',
    'volumetric haze', 'atmosphere', 'visual hierarchy', 'anchor point', 'unity',
    'gestalt', 'subconscious', 'skin pore', 'fabric weave', 'palpable', 'cohesion'
  ];
  const chatlieuMatches = chatlieuKeywords.filter(k => lowerText.includes(k)).length;
  const chatlieuScore = Math.min(100, Math.max(30, chatlieuMatches * 22 + 15));

  const averageScore = Math.round((bocucScore + anhsangScore + mausacScore + chatlieuScore) / 4);

  // Strengths and improvements
  const strengths = [];
  const improvements = [];

  if (bocucScore >= 80) {
    strengths.push(lang === 'vi' ? 'Bố cục hình học và phối cảnh lớp không gian chặt chẽ.' : 'Strong geometric composition and spatial layering.');
  } else {
    improvements.push(lang === 'vi' ? 'Cần bổ sung đường dẫn (leading lines) hoặc tỷ lệ vàng để dẫn dắt mắt nhìn.' : 'Add leading lines or golden ratio to guide viewer eye-path.');
  }

  if (anhsangScore >= 80) {
    strengths.push(lang === 'vi' ? 'Ánh sáng có chủ đích cao, tương phản sáng tối Chiaroscuro chuẩn điện ảnh.' : 'Motivated directional lighting with cinematic chiaroscuro depth.');
  } else {
    improvements.push(lang === 'vi' ? 'Bổ sung khoảng trống âm (negative space) và nguồn sáng xiên có động cơ.' : 'Incorporate deliberate negative space and motivated raking light.');
  }

  if (mausacScore >= 80) {
    strengths.push(lang === 'vi' ? 'Hệ màu chủ đạo 80% nhất quán, kiểm soát nhiệt độ màu xuất sắc.' : 'Disciplined 80% dominant palette with controlled chromatic harmony.');
  } else {
    improvements.push(lang === 'vi' ? 'Khóa chặt 1 bảng màu chủ đạo (dominant palette) tránh nhiễu loạn màu.' : 'Lock an 80% dominant color palette to prevent chromatic noise.');
  }

  if (chatlieuScore >= 80) {
    strengths.push(lang === 'vi' ? 'Kích hoạt xúc giác thị giác (Somatosensory) và bầu không khí thể tích chân thực.' : 'Tactile somatosensory micro-textures and dense volumetric atmosphere.');
  } else {
    improvements.push(lang === 'vi' ? 'Ứng dụng ánh sáng xiên 10-20° (raking light) để lột tả chi tiết bề mặt da/vải.' : 'Use 10-20° raking light to activate tactile surface micro-textures.');
  }

  return {
    bocuc: { score: bocucScore, label: lang === 'vi' ? 'Bố Cục (Composition)' : 'Composition', color: '#7c8aff' },
    anhsang: { score: anhsangScore, label: lang === 'vi' ? 'Ánh Sáng (Lighting)' : 'Lighting', color: '#ffcb6b' },
    mausac: { score: mausacScore, label: lang === 'vi' ? 'Màu Sắc (Color)' : 'Color', color: '#f07178' },
    chatlieu: { score: chatlieuScore, label: lang === 'vi' ? 'Chất Liệu & Thống Nhất' : 'Texture & Unity', color: '#c3e88d' },
    averageScore,
    strengths,
    improvements
  };
}

