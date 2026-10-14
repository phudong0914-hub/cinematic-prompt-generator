/**
 * modelOptimizer.js — Model-Specific Prompt Re-ordering & Optimization
 * ─────────────────────────────────────────────────────────────────────
 * Chắt lọc từ CinePrompt.io v2.0:
 * Mỗi mô hình AI video/image có trọng số Attention (sự chú ý) khác biệt:
 * - Kling: Cần khóa Bối cảnh (Environment) đầu câu để tránh méo phối cảnh.
 * - LTX Video: Cực nhạy với Máy quay (Cinematography) ở đầu câu.
 * - MiniMax / Hailuo: Đòi hỏi Chủ thể (Subject) & Bối cảnh trước.
 * - Sora / Runway: Chuẩn Universal (Style -> Subject -> Action -> Camera).
 * - FLUX / Midjourney: Tối ưu cho ảnh tĩnh với Camera/Framing & Subject đầu câu.
 */

export const AI_MODELS = {
  universal: {
    id: 'universal',
    name: 'Universal Cinema',
    badge: 'Standard',
    provider: 'Hollywood Standard',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'CINEMATOGRAPHY', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Cấu trúc kịch bản toàn năng, tương thích hoàn hảo với mọi model.'
  },
  flux2: {
    id: 'flux2',
    name: 'FLUX 2 Pro',
    badge: '4K Photoreal',
    provider: 'Black Forest Labs',
    order: ['CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'STYLE', 'PALETTE'],
    type: 'image',
    description: 'FLUX 2 (2026): Quang học điện ảnh chuẩn xác, phân giải 4K, chi tiết kết cấu da và ánh sáng chân thực.'
  },
  midjourney81: {
    id: 'midjourney81',
    name: 'Midjourney v8.1',
    badge: 'Native 2K HD',
    provider: 'Midjourney',
    order: ['SUBJECT', 'ACTIONS', 'STYLE', 'ENVIRONMENT', 'PALETTE', 'CINEMATOGRAPHY'],
    type: 'image',
    description: 'Midjourney v8.1 (T10/2026): Nhanh gấp 5 lần, Native 2K HD không cần upscale, sạch tag-soup, chuẩn --v 8.1 --style raw --s 150.'
  },
  midjourney8: {
    id: 'midjourney81',
    name: 'Midjourney v8.1',
    badge: 'Native 2K HD',
    provider: 'Midjourney',
    order: ['SUBJECT', 'ACTIONS', 'STYLE', 'ENVIRONMENT', 'PALETTE', 'CINEMATOGRAPHY'],
    type: 'image',
    description: 'Midjourney v8.1 (T10/2026): Native 2K HD, --v 8.1 --style raw.'
  },
  seedance25: {
    id: 'seedance25',
    name: 'ByteDance Seedance 2.5',
    badge: '30s Multi-Shot',
    provider: 'ByteDance',
    order: ['STYLE', 'CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Seedance 2.5 (T10/2026): Xuất 30s 1080p 10-bit nguyên bản, ma trận 50 References, Multi-shot tự cắt cảnh, thoại tiếng Việt.'
  },
  gemini_omni_veo: {
    id: 'gemini_omni_veo',
    name: 'Gemini Omni 1.1 & Veo 3.1',
    badge: 'Physical Prose',
    provider: 'Google DeepMind',
    order: ['STYLE', 'CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'PALETTE', 'SOUND'],
    type: 'video',
    description: 'Gemini Omni Flash 1.1 song song Veo 3.1: 24fps kèm âm thanh đồng bộ, mô phỏng quang học ARRI Alexa và hậu kỳ hội thoại.'
  },
  google_flow: {
    id: 'gemini_omni_veo',
    name: 'Gemini Omni 1.1 & Veo 3.1',
    badge: 'Google Ecosystem',
    provider: 'Google DeepMind',
    order: ['STYLE', 'CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'PALETTE', 'SOUND'],
    type: 'video',
    description: 'Veo 3.1 & Gemini Omni Flash 1.1: Tối ưu chuyển động mượt mà, dynamic camera pans và âm thanh đồng bộ.'
  },
  kling4: {
    id: 'kling4',
    name: 'Kling 4.0 / 3.0 Turbo',
    badge: '6-Shot Multi-Cam',
    provider: 'Kuaishou',
    order: ['ENVIRONMENT', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'STYLE', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Kling 4.0 / 3.0 Turbo (T10/2026): Gộp 6 Shots/lần, Native 4K, khóa 10 Keyframes và raccord bối cảnh tuyệt đối.'
  },
  kling2: {
    id: 'kling4',
    name: 'Kling 4.0 / 3.0 Turbo',
    badge: '6-Shot Multi-Cam',
    provider: 'Kuaishou',
    order: ['ENVIRONMENT', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'STYLE', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Kling 4.0 / 3.0 Turbo: Khóa chặt phối cảnh môi trường và 10 keyframes liên tục.'
  },
  runway_gen45: {
    id: 'runway_gen45',
    name: 'Runway Gen-4.5',
    badge: 'Cause & Effect',
    provider: 'RunwayML',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'SOUND'],
    type: 'video',
    description: 'Runway Gen-4.5 (T10/2026): Khung hình 21:9 chuẩn rạp, tách biệt Scene Description và Sequenced Cause-and-Effect Motion.'
  },
  runway_gen4: {
    id: 'runway_gen45',
    name: 'Runway Gen-4.5',
    badge: 'Cause & Effect',
    provider: 'RunwayML',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'SOUND'],
    type: 'video',
    description: 'Runway Gen-4.5 (T10/2026): Chuỗi hành động nguyên nhân - kết quả vật lý.'
  },
  notebooklm: {
    id: 'notebooklm',
    name: 'NotebookLM Studio',
    badge: 'Knowledge Visuals',
    provider: 'Google Labs',
    order: ['SUBJECT', 'STYLE', 'ENVIRONMENT', 'CINEMATOGRAPHY', 'ACTIONS', 'SOUND'],
    type: 'multimodal',
    description: 'NotebookLM: Tạo visual slides, infographic tài liệu và deep-dive video trực quan.'
  },
  luma_ray2: {
    id: 'luma_ray2',
    name: 'Luma Ray 2',
    badge: 'Physics Motion',
    provider: 'Luma Dream Machine',
    order: ['CINEMATOGRAPHY', 'ACTIONS', 'SUBJECT', 'ENVIRONMENT', 'STYLE', 'PALETTE', 'SOUND'],
    type: 'video',
    description: 'Luma Ray 2 (2026): Mô phỏng vật lý chuyển động máy quay và ánh sáng thực nghiệm mượt mà.'
  },
  haiper2: {
    id: 'haiper2',
    name: 'Haiper 2.0',
    badge: 'VFX Fluid',
    provider: 'Haiper AI',
    order: ['ACTIONS', 'SUBJECT', 'CINEMATOGRAPHY', 'ENVIRONMENT', 'STYLE', 'PALETTE'],
    type: 'video',
    description: 'Haiper 2.0: Chuyên biệt mô phỏng chuyển động vật lý chất lỏng, khói bụi và vải vóc chân thực.'
  },
  sora: {
    id: 'seedance25',
    name: 'Seedance 2.5 / Wan 3.0',
    badge: 'Successor Engine',
    provider: 'ByteDance / Wan',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Thay thế OpenAI Sora đã ngắt API: ByteDance Seedance 2.5 & Wan 3.0 xuất 30s 1080p 10-bit.'
  },
  elevenlabs_foley: {
    id: 'elevenlabs_foley',
    name: 'ElevenLabs Audio',
    badge: 'Foley & Sound FX',
    provider: 'ElevenLabs',
    order: ['SOUND', 'DIALOGUE', 'ACTIONS', 'ENVIRONMENT', 'STYLE'],
    type: 'audio',
    description: 'Đặc chế cho hiệu ứng âm thanh điện ảnh Foley, lời thoại diễn cảm và nhạc nền đa lớp.'
  },
  ltx: {
    id: 'ltx',
    name: 'LTX Video',
    badge: 'Lightricks',
    provider: 'Lightricks',
    order: ['CINEMATOGRAPHY', 'ENVIRONMENT', 'ACTIONS', 'SUBJECT', 'STYLE', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Ưu tiên góc quay máy và động học lens để kích hoạt motion mượt nhất.'
  },
  minimax: {
    id: 'minimax',
    name: 'MiniMax H3 Max',
    badge: 'Top Motion',
    provider: 'MiniMax',
    order: ['SUBJECT', 'ENVIRONMENT', 'ACTIONS', 'STYLE', 'CINEMATOGRAPHY', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'MiniMax H3 Max: Tập trung vào biểu cảm diễn viên, chuyển động vật lý và không gian bối cảnh sống động.'
  }
};

/**
 * Re-order an array or map of prompt segments based on the target AI Model.
 * @param {Object} sections - Object containing section contents: { STYLE, SUBJECT, ACTIONS, ... }
 * @param {string} modelKey - Key from AI_MODELS (e.g. 'kling2', 'ltx', 'sora')
 * @returns {Array<{ section: string, text: string }>} ordered array of segments
 */
export function reorderPromptByModel(sections = {}, modelKey = 'universal') {
  const modelConfig = AI_MODELS[modelKey] || AI_MODELS.universal;
  const order = modelConfig.order;
  const result = [];

  for (const sec of order) {
    if (sections[sec] && sections[sec].trim()) {
      result.push({
        section: sec,
        text: sections[sec].trim()
      });
    }
  }

  // Add any leftover sections that were not explicitly in the model's order list
  for (const [sec, text] of Object.entries(sections)) {
    if (text && text.trim() && !order.includes(sec)) {
      result.push({
        section: sec,
        text: text.trim()
      });
    }
  }

  return result;
}

/**
 * Format ordered segments into a Hollywood-grade screenplay prose.
 * @param {Array<{ section: string, text: string }>} orderedSegments
 * @returns {string} final formatted prompt
 */
export function compileProsePrompt(orderedSegments = []) {
  if (!orderedSegments.length) return '';

  return orderedSegments
    .map(seg => {
      let t = seg.text.trim();
      // Ensure sentence ends with period if not already punctuated
      if (!/[.!?]$/.test(t)) t += '.';
      // Capitalize first letter
      return t.charAt(0).toUpperCase() + t.slice(1);
    })
    .join(' ');
}
