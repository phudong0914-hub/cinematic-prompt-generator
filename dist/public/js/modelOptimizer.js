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
  midjourney8: {
    id: 'midjourney8',
    name: 'Midjourney v8.2',
    badge: 'v8.2 Ultra',
    provider: 'Midjourney',
    order: ['SUBJECT', 'ACTIONS', 'STYLE', 'ENVIRONMENT', 'PALETTE', 'CINEMATOGRAPHY'],
    type: 'image',
    description: 'Midjourney v8.2: Bố cục quang học đỉnh cao, kết cấu da siêu thực và tỷ lệ khung hình chuẩn cinema.'
  },
  google_flow: {
    id: 'google_flow',
    name: 'Google Flow (Veo)',
    badge: 'Google Veo Flow',
    provider: 'Google DeepMind',
    order: ['STYLE', 'CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'PALETTE', 'SOUND'],
    type: 'video',
    description: 'Google Flow (Veo Engine): Tối ưu chuyển động mượt mà, dynamic camera pans và ánh sáng điện ảnh 4K.'
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
  runway_gen4: {
    id: 'runway_gen4',
    name: 'Runway Gen-4',
    badge: 'Director Act-Two',
    provider: 'RunwayML',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'SOUND'],
    type: 'video',
    description: 'Runway Gen-4 Act-Two: Kiểm soát quỹ đạo camera chuyên sâu và tính nhất quán nhân vật.'
  },
  kling2: {
    id: 'kling2',
    name: 'Kling v2.0 Pro',
    badge: 'Dynamic Motion',
    provider: 'Kuaishou',
    order: ['ENVIRONMENT', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'STYLE', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Kling 2.0: Khóa chặt phối cảnh môi trường, hỗ trợ biên độ hành động phức tạp không biến dạng.'
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
    id: 'sora',
    name: 'OpenAI Sora',
    badge: 'Photoreal Video',
    provider: 'OpenAI',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Phong cách điện ảnh và hành động nhân vật được ưu tiên hàng đầu.'
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
    name: 'MiniMax Hailuo',
    badge: 'Top Motion',
    provider: 'MiniMax',
    order: ['SUBJECT', 'ENVIRONMENT', 'ACTIONS', 'STYLE', 'CINEMATOGRAPHY', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Tập trung vào biểu cảm diễn viên và không gian bối cảnh sống động.'
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
