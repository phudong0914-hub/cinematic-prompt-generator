/**
 * opticalLinter.js
 * ─────────────────────────────────────────────────────────────────────────────
 * HOLLYWOOD OPTICAL INTEGRITY & PHYSICS LINTER (v2.0 System 1 Edition)
 * ─────────────────────────────────────────────────────────────────────────────
 * Analyzes prompt parameters and keywords using deterministic atomic criteria
 * inspired by TypeSafe Jev primitives:
 * - Noul: Probability P(condition = true) in [0.0, 1.0]
 * - Score: Calibrated severity on an ordered scale [0..100]
 * - Choice: Categorical judgment ('CLEAN', 'LOW', 'MEDIUM', 'CRITICAL')
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Atomic Optical Criteria Matrix
 * Each criterion evaluates an isolated physical condition and returns a calibrated Noul.
 */
export const ATOMIC_OPTICAL_CRITERIA = [
  {
    id: 'focal_framing_clash',
    dimension: 'lens_vs_framing',
    severity: 'HIGH',
    evaluator: (text) => {
      const isMacro = /\b(macro|probe lens|microscope|extreme close-?up detail)\b/i.test(text);
      const isWide = /\b(wide shot|extreme wide|panoramic|aerial vista|establishing shot)\b/i.test(text);
      if (isMacro && isWide) return 0.95;
      if (isMacro && /\b(medium shot|cowboy shot)\b/i.test(text)) return 0.45;
      return 0.0;
    },
    message: 'Xung đột tiêu cự: Ống kính Macro cực cận mâu thuẫn với Góc máy Đại cảnh (Wide/Panoramic).',
    fix: 'Chuyển góc máy thành "Extreme Close-Up Detail" hoặc đổi ống kính thành "ARRI Master Prime 21mm Ultra-Wide".'
  },
  {
    id: 'noon_chiaroscuro_clash',
    dimension: 'lighting_coherence',
    severity: 'MEDIUM',
    evaluator: (text) => {
      const isHarshSun = /\b(harsh noon sun|midday sun|bright daylight|blazing sunlight)\b/i.test(text);
      const isLowKey = /\b(chiaroscuro|candlelight|pitch black shadow|deep low-?key|dim interior)\b/i.test(text);
      if (isHarshSun && isLowKey) return 0.92;
      return 0.0;
    },
    message: 'Mâu thuẫn nguồn sáng: Ánh nắng gắt ban trưa xung đột với kỹ thuật Chiaroscuro / Ánh nến tương phản tối.',
    fix: 'Đổi thời điểm quay sang "Magic Hour / Blue Hour" hoặc sử dụng "Overcast Diffused Daylight".'
  },
  {
    id: 'shutter_fps_clash',
    dimension: 'temporal_physics',
    severity: 'LOW',
    evaluator: (text) => {
      const isHighFps = /\b(1000fps|frozen in time|ultra high speed phantom)\b/i.test(text);
      const isMotionBlur = /\b(heavy motion blur|kinetic smear|long exposure streak)\b/i.test(text);
      if (isHighFps && isMotionBlur) return 0.88;
      return 0.0;
    },
    message: 'Xung đột tốc độ màn trập: 1000fps đóng băng thời gian mâu thuẫn với Vệt nhòe chuyển động (Motion blur).',
    fix: 'Sử dụng "180-degree shutter angle for cinematic motion cadence" hoặc giữ "Razor-sharp frozen particles".'
  },
  {
    id: 'horror_vacui_clutter',
    dimension: 'visual_breathing_space',
    severity: 'MEDIUM',
    evaluator: (text) => {
      const hasClutter = /\b(cluttered|overcrowded|packed with countless|too many objects|crammed full)\b/i.test(text);
      const hasBreathingRoom = /\b(negative space|breathing room|anti-horror-vacui|minimalist|clean background)\b/i.test(text);
      if (hasClutter && !hasBreathingRoom) return 0.85;
      if (hasClutter && hasBreathingRoom) return 0.30;
      return 0.0;
    },
    message: 'Hội chứng Horror Vacui (Bài 6): Khung hình bị nhồi nhét quá nhiều vật thể phụ, triệt tiêu nhịp thở thị giác.',
    fix: 'Bổ sung "deliberate expansive negative space, anti-horror-vacui breathing room, poetic spatial minimalism".'
  },
  {
    id: 'missing_raking_light',
    dimension: 'tactile_micro_surface',
    severity: 'SUGGESTION',
    evaluator: (text) => {
      const hasTactileSubject = /\b(skin pore|fabric weave|micro-texture|tactile surface|somatosensory|rough stone|weathered wood)\b/i.test(text);
      const hasRakingLight = /\b(raking light|grazing light|cross light|side light|low-angle light|10-20 degree light)\b/i.test(text);
      if (hasTactileSubject && !hasRakingLight) return 0.78;
      return 0.0;
    },
    message: 'Chất liệu thiếu ánh sáng xiên (Bài 10): Muốn kích hoạt vỏ não xúc giác (Somatosensory), cần nguồn sáng xiên góc thấp 10-20° để tạo bóng đổ vi mô.',
    fix: 'Thêm "10-20 degree low-angle raking light grazing across tactile micro-textures".'
  },
  {
    id: 'chromatic_chaos',
    dimension: 'color_harmony_80_20',
    severity: 'MEDIUM',
    evaluator: (text) => {
      const saturatedColors = ['neon green', 'vivid purple', 'bright yellow', 'saturated cyan', 'fiery red', 'electric pink'];
      const matches = saturatedColors.filter(c => text.includes(c));
      const hasDominant = /\b(dominant color|dominant palette|monochromatic|harmonious palette|color harmony|80% dominant)\b/i.test(text);
      if (matches.length >= 3 && !hasDominant) return 0.89;
      if (matches.length >= 2 && !hasDominant) return 0.45;
      return 0.0;
    },
    message: 'Nhiễu loạn sắc độ (Bài 8): Quá nhiều màu bão hòa tranh chấp, thiếu quy luật 80% hệ màu chủ đạo dẫn dắt cảm xúc.',
    fix: 'Áp dụng "curated 80% dominant color harmony with calculated complementary chromatic accents".'
  },
  {
    id: 'ethical_framing_bias',
    dimension: 'ethical_visual_stance',
    severity: 'HIGH',
    evaluator: (text) => {
      if (/\b(exotic tribe|primitive people|savior helping poor|pity victim|helpless villagers)\b/i.test(text)) return 0.96;
      return 0.0;
    },
    message: 'Cảnh báo Đạo đức thị giác (Bài 3): Khung hình có dấu hiệu Exoticization hoặc Savior Framing.',
    fix: 'Chuyển sang "authentic human dignity, dignified sovereign presence, eye-level respectful camera stance".'
  },
  {
    id: 'prompt_injection_override',
    dimension: 'security_sandbox',
    severity: 'CRITICAL',
    evaluator: (text) => {
      const injectionPatterns = [
        /\bignore\s+(?:all\s+)?(?:previous|prior|above)\s+(?:instructions?|directives?)\b/i,
        /\bdisregard\s+(?:all\s+)?(?:previous|prior)\s+(?:prompts?|instructions?)\b/i,
        /\breveal\s+(?:the\s+)?(?:system\s+prompt|raw\s+instructions?)\b/i,
        /\byou\s+are\s+now\s+(?:unrestricted|dan|jailbroken)\b/i,
        /\bsystem\s+prompt\s+reset\b/i
      ];
      const match = injectionPatterns.some(pat => pat.test(text));
      return match ? 1.0 : 0.0;
    },
    message: '🛡️ Phát hiện mã độc Prompt Injection: Cố tình thao túng chỉ thị hệ thống.',
    fix: 'Loại bỏ ngay các chỉ thị can thiệp hệ thống và chỉ tập trung vào mô tả quang học / bối cảnh điện ảnh.'
  }
];

export class OpticalLinter {
  /**
   * Scans prompt text using Atomic Criteria Matrix (System 1 calibrated probabilities).
   * @param {string} promptText - The generated prompt text
   * @param {Object} context - Optional context parameters
   * @returns {Object} Structured verdict with atomic evaluations, score, and choice grade
   */
  static validate(promptText, context = {}) {
    const text = (promptText || '').toLowerCase();
    const conflicts = [];
    const suggestions = [];
    const atomicEvaluations = [];

    // Context check: Anamorphic Horizontal Flare on Vertical 9:16 Video
    if (context.aspectRatio === '9:16' && text.includes('anamorphic horizontal blue streak flare')) {
      suggestions.push({
        type: 'ASPECT_ANAMORPHIC_OPTIMIZATION',
        severity: 'SUGGESTION',
        noul: 0.85,
        message: 'Tối ưu tỷ lệ: Vệt lóe sáng ngang Anamorphic hoạt động tốt nhất trên khung hình rộng 16:9 hoặc 2.39:1 Cinema.',
        fix: 'Chuyển sang "Spherical Cooke S4/i soft portrait bokeh" cho khung dọc 9:16.'
      });
    }

    // Evaluate each atomic criterion independently
    for (const criterion of ATOMIC_OPTICAL_CRITERIA) {
      const noulProbability = criterion.evaluator(text);
      atomicEvaluations.push({
        id: criterion.id,
        dimension: criterion.dimension,
        noul: noulProbability, // Calibrated probability in [0.0, 1.0]
        thresholdPassed: noulProbability >= 0.5
      });

      if (noulProbability >= 0.5) {
        const payload = {
          type: criterion.id.toUpperCase(),
          severity: criterion.severity,
          noul: noulProbability,
          message: criterion.message,
          fix: criterion.fix
        };

        if (criterion.severity === 'SUGGESTION') {
          suggestions.push(payload);
        } else {
          conflicts.push(payload);
        }
      }
    }

    // Compute Calibrated Integrity Score (Scale: 0 to 100)
    let penalty = 0;
    conflicts.forEach(c => {
      if (c.severity === 'CRITICAL') penalty += 35;
      else if (c.severity === 'HIGH') penalty += 20;
      else if (c.severity === 'MEDIUM') penalty += 12;
      else penalty += 6;
    });
    penalty += suggestions.length * 4;

    const score = Math.max(0, Math.min(100, Math.round(100 - penalty)));

    // Categorical Choice Primitive
    let gradeChoice = 'HOLLYWOOD GRADE (100% CLEAN)';
    if (score < 75 || conflicts.some(c => c.severity === 'CRITICAL')) {
      gradeChoice = 'CRITICAL ATTENTION REQUIRED';
    } else if (score < 85) {
      gradeChoice = 'NEEDS OPTICAL TUNING';
    } else if (score < 95) {
      gradeChoice = 'CINEMATIC PASS';
    }

    return {
      score, // Jev Score Primitive (0-100)
      isClean: conflicts.length === 0,
      badge: gradeChoice, // Jev Choice Primitive
      conflicts,
      suggestions,
      atomicEvaluations // Full list of isolated Noul gut-checks
    };
  }

  /**
   * Automatically auto-corrects conflicting optical parameters inside a prompt.
   * @param {string} promptText 
   * @returns {string} Cleaned and harmonized prompt
   */
  static autoHarmonize(promptText) {
    let harmonized = promptText;
    
    // Auto-fix 1: Replace Macro + Wide
    if (harmonized.toLowerCase().includes('macro') && harmonized.toLowerCase().includes('extreme wide')) {
      harmonized = harmonized.replace(/extreme wide/gi, 'tactile extreme close-up');
    }

    // Auto-fix 2: Fix Harsh noon + Chiaroscuro
    if (harmonized.toLowerCase().includes('midday sun') && harmonized.toLowerCase().includes('chiaroscuro')) {
      harmonized = harmonized.replace(/midday sun/gi, 'dim interior tungsten key light');
    }

    // Auto-fix 3: Sanitize prompt injection attempts
    harmonized = harmonized.replace(/ignore\s+(?:all\s+)?(?:previous|prior)\s+instructions?/gi, 'follow cinematic screenplay directive');

    return harmonized;
  }
}
