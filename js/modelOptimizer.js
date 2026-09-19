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
  kling: {
    id: 'kling',
    name: 'Kling AI v1.6',
    badge: 'Pro Video',
    provider: 'Kuaishou',
    order: ['ENVIRONMENT', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'STYLE', 'PALETTE', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Khóa không gian bối cảnh đầu câu, chống biến dạng chi tiết nền.'
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
  },
  sora: {
    id: 'sora',
    name: 'OpenAI Sora',
    badge: 'Photoreal',
    provider: 'OpenAI',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Phong cách điện ảnh và hành động nhân vật được ưu tiên hàng đầu.'
  },
  runway: {
    id: 'runway',
    name: 'Runway Gen-3 Alpha',
    badge: 'Director Mode',
    provider: 'RunwayML',
    order: ['STYLE', 'SUBJECT', 'ACTIONS', 'CINEMATOGRAPHY', 'PALETTE', 'ENVIRONMENT', 'DIALOGUE', 'SOUND'],
    type: 'video',
    description: 'Nhận diện tốt chỉ thị máy quay chuyên nghiệp và lighting cao cấp.'
  },
  grok: {
    id: 'grok',
    name: 'Grok Imagine Video',
    badge: 'xAI',
    provider: 'xAI',
    order: ['SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'CINEMATOGRAPHY', 'STYLE', 'PALETTE', 'SOUND', 'DIALOGUE'],
    type: 'video',
    description: 'Tập trung vào tính nhất quán của hành động và âm thanh đối thoại.'
  },
  flux: {
    id: 'flux',
    name: 'FLUX.1 Pro / Schnell',
    badge: 'Keyframe Hero',
    provider: 'Black Forest Labs',
    order: ['CINEMATOGRAPHY', 'SUBJECT', 'ACTIONS', 'ENVIRONMENT', 'STYLE', 'PALETTE'],
    type: 'image',
    description: 'Chuyên tạo ảnh Keyframe sắc nét, kiểm soát bố cục quang học tối ưu.'
  },
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney v6.1',
    badge: 'Aesthetic',
    provider: 'Midjourney',
    order: ['SUBJECT', 'ACTIONS', 'STYLE', 'ENVIRONMENT', 'PALETTE', 'CINEMATOGRAPHY'],
    type: 'image',
    description: 'Tối ưu cho ảnh tĩnh giàu tính nghệ thuật và chất liệu da thực.'
  }
};

/**
 * Re-order an array or map of prompt segments based on the target AI Model.
 * @param {Object} sections - Object containing section contents: { STYLE, SUBJECT, ACTIONS, ... }
 * @param {string} modelKey - Key from AI_MODELS (e.g. 'kling', 'ltx', 'sora')
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
