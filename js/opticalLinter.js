/**
 * opticalLinter.js
 * ─────────────────────────────────────────────────────────────────────────────
 * HOLLYWOOD OPTICAL INTEGRITY & PHYSICS LINTER (v1.0 Pro)
 * ─────────────────────────────────────────────────────────────────────────────
 * Analyzes prompt parameters and keywords to detect and resolve optical conflicts:
 * 1. Lens Focal Length vs. Shot Framing
 * 2. Key Lighting vs. Time of Day / Environment
 * 3. Shutter Speed vs. Motion Blur Dynamics
 * 4. Surface Material vs. Lighting Falloff
 * ─────────────────────────────────────────────────────────────────────────────
 */

export class OpticalLinter {
  /**
   * Scans a prompt string and contextual parameters for physics and optical conflicts.
   * @param {string} promptText - The generated prompt text
   * @param {Object} context - Optional context parameters
   * @returns {Object} { score: number, conflicts: Array, suggestions: Array, isClean: boolean }
   */
  static validate(promptText, context = {}) {
    const text = (promptText || '').toLowerCase();
    const conflicts = [];
    const suggestions = [];

    // 1. Conflict: Macro Lens with Ultra-Wide / Landscape Framing
    if ((text.includes('macro') || text.includes('probe lens')) && (text.includes('wide shot') || text.includes('extreme wide') || text.includes('panoramic'))) {
      conflicts.push({
        type: 'OPTICAL_FOCAL_CONFLICT',
        severity: 'HIGH',
        message: 'Xung đột tiêu cự: Ống kính Macro cực cận mâu thuẫn với Góc máy Đại cảnh (Wide/Panoramic).',
        fix: 'Chuyển góc máy thành "Extreme Close-Up Detail" hoặc đổi ống kính thành "ARRI Master Prime 21mm Ultra-Wide".'
      });
    }

    // 2. Conflict: Direct Noon Sun with Chiaroscuro / Candlelight
    if ((text.includes('harsh noon sun') || text.includes('midday sun') || text.includes('bright daylight')) && (text.includes('chiaroscuro') || text.includes('candlelight') || text.includes('pitch black shadow'))) {
      conflicts.push({
        type: 'LIGHTING_PHYSICS_CONFLICT',
        severity: 'MEDIUM',
        message: 'Mâu thuẫn nguồn sáng: Ánh nắng gắt ban trưa xung đột với kỹ thuật Chiaroscuro / Ánh nến tương phản tối.',
        fix: 'Đổi thời điểm quay sang "Magic Hour / Blue Hour" hoặc sử dụng "Overcast Diffused Daylight".'
      });
    }

    // 3. Conflict: Ultra High Speed 1000fps with Heavy Kinetic Motion Blur
    if ((text.includes('1000fps') || text.includes('frozen in time')) && (text.includes('heavy motion blur') || text.includes('kinetic smear'))) {
      conflicts.push({
        type: 'SHUTTER_PHYSICS_CONFLICT',
        severity: 'LOW',
        message: 'Xung đột tốc độ màn trập: 1000fps đóng băng thời gian mâu thuẫn với Vệt nhòe chuyển động (Motion blur).',
        fix: 'Sử dụng "180-degree shutter angle for cinematic motion cadence" hoặc giữ "Razor-sharp frozen particles".'
      });
    }

    // 4. Conflict: Anamorphic Horizontal Flare on Vertical 9:16 Video
    if (context.aspectRatio === '9:16' && text.includes('anamorphic horizontal blue streak flare')) {
      suggestions.push({
        type: 'ASPECT_ANAMORPHIC_OPTIMIZATION',
        message: 'Tối ưu tỷ lệ: Vệt lóe sáng ngang Anamorphic hoạt động tốt nhất trên khung hình rộng 16:9 hoặc 2.39:1 Cinema.',
        fix: 'Chuyển sang "Spherical Cooke S4/i soft portrait bokeh" cho khung dọc 9:16.'
      });
    }

    // 5. Visual Law: Horror Vacui (Bệnh sợ khoảng trống) - Bài 6
    const hasClutter = text.includes('cluttered') || text.includes('overcrowded') || text.includes('packed with countless') || text.includes('too many objects') || text.includes('crammed');
    const hasNegativeSpace = text.includes('negative space') || text.includes('breathing room') || text.includes('anti-horror-vacui') || text.includes('minimalist');
    if (hasClutter && !hasNegativeSpace) {
      conflicts.push({
        type: 'HORROR_VACUI_OVERCROWDING',
        severity: 'MEDIUM',
        message: 'Hội chứng Horror Vacui (Bài 6): Khung hình bị nhồi nhét quá nhiều vật thể phụ, triệt tiêu nhịp thở và làm nghẹt thở điểm neo thị giác.',
        fix: 'Bổ sung "deliberate expansive negative space, anti-horror-vacui breathing room, poetic spatial minimalism".'
      });
    }

    // 6. Visual Law: Texture without Raking Light (Xúc giác thị giác thiếu ánh sáng xiên) - Bài 10
    const hasTextureNeed = text.includes('skin pore') || text.includes('fabric weave') || text.includes('micro-texture') || text.includes('tactile surface') || text.includes('somatosensory') || text.includes('rough stone');
    const hasRakingLight = text.includes('raking light') || text.includes('grazing light') || text.includes('cross light') || text.includes('side light') || text.includes('low-angle light');
    if (hasTextureNeed && !hasRakingLight) {
      suggestions.push({
        type: 'MISSING_RAKING_LIGHT_TEXTURE',
        message: 'Chất liệu thiếu ánh sáng xiên (Bài 10): Muốn kích hoạt vỏ não xúc giác (Somatosensory Cortex), bắt buộc phải có nguồn sáng quét góc cực thấp 10-20° để tạo bóng đổ vi mô.',
        fix: 'Thêm "10-20 degree low-angle raking light grazing across tactile micro-textures".'
      });
    }

    // 7. Visual Law: Chromatic Chaos (Mất cân bằng hệ màu chủ đạo 80%) - Bài 8
    const saturatedColorHits = ['neon green', 'vivid purple', 'bright yellow', 'saturated cyan', 'fiery red', 'electric pink'].filter(c => text.includes(c));
    const hasDominantPalette = text.includes('dominant color') || text.includes('dominant palette') || text.includes('monochromatic') || text.includes('harmonious palette') || text.includes('color harmony');
    if (saturatedColorHits.length >= 3 && !hasDominantPalette) {
      conflicts.push({
        type: 'CHROMATIC_CHAOS_CONFLICT',
        severity: 'MEDIUM',
        message: 'Nhiễu loạn sắc độ (Bài 8): Có quá nhiều màu bão hòa cao tranh chấp nhau, thiếu quy luật 80% hệ màu chủ đạo dẫn dắt cảm xúc.',
        fix: 'Áp dụng "curated 80% dominant color harmony with calculated complementary chromatic accents".'
      });
    }

    // 8. Visual Law: Ethical Framing Filter (Đạo đức khung hình & chống định kiến) - Bài 3
    if (text.includes('exotic tribe') || text.includes('primitive people') || text.includes('savior helping poor') || text.includes('pity victim')) {
      conflicts.push({
        type: 'ETHICAL_FRAMING_CONFLICT',
        severity: 'HIGH',
        message: 'Cảnh báo Đạo đức thị giác (Bài 3): Khung hình có dấu hiệu Exoticization (lạ mắt hóa) hoặc Savior Framing (hạ thấp quyền tự chủ của chủ thể).',
        fix: 'Chuyển sang "authentic human dignity, dignified sovereign presence, eye-level respectful camera stance".'
      });
    }


    // Calculate Integrity Score (100 is perfect)
    const score = Math.max(70, 100 - (conflicts.length * 12) - (suggestions.length * 4));

    return {
      score,
      isClean: conflicts.length === 0,
      conflicts,
      suggestions,
      badge: score >= 95 ? 'HOLLYWOOD GRADE (100% CLEAN)' : score >= 85 ? 'CINEMATIC PASS' : 'NEEDS OPTICAL TUNING'
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

    return harmonized;
  }
}
