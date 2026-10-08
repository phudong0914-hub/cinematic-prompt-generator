/**
 * hookGeneratorEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA THIẾT KẾ 3 GIÂY ĐẦU VIDEO NGẮN (HOOK 3 GIÂY ENGINE)
 * Tự động tạo 3 phương án Hook độc đáo tuân thủ 4 luật:
 * 1. Gọi đúng đích danh người xem ("video này nói về mình")
 * 2. Chữ font đậm, chia dòng 2-4 từ/dòng, tối đa 2 dòng, từ nói đổi màu
 * 3. Zoom in 100% -> 130% trong 0.2s, giữ, lùi dần về 100% khi hết câu
 * 4. Swoosh nhẹ ở giây đầu
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function splitHookLines(text) {
  if (!text || typeof text !== 'string') return [];
  const words = text.trim().split(/\s+/);
  const lines = [];
  let current = [];

  for (const word of words) {
    current.push(word.toUpperCase());
    if (current.length >= 3) { // 2-4 từ / dòng
      lines.push(current.join(' '));
      current = [];
    }
  }
  if (current.length > 0) {
    lines.push(current.join(' '));
  }

  // Tối đa 2 dòng hiển thị cùng lúc
  if (lines.length > 2) {
    return [lines.slice(0, 2).join('\n'), lines.slice(2).join('\n')].join('\n---\n');
  }
  return lines.join('\n');
}

/**
 * Sinh 3 phương án Hook cho video
 */
export function generateThreeHookOptions({ targetAudience = "người làm video một mình", scriptOrSrt = "" } = {}) {
  const cleanAudience = targetAudience.trim();

  // Phương án 1: Trực diện (Direct / Transcript-based)
  const opt1 = {
    name: "Phương án 1 (Trực diện / Đồng cảm thực tế)",
    hookSentence: `Nếu bạn là ${cleanAudience}, đừng lướt qua video này!`,
    isNewProposal: true,
    textOnScreen: splitHookLines(`NẾU BẠN LÀ / ${cleanAudience.toUpperCase()}`),
    zoomKeyframe: "0.0s bắt đầu zoom: 0.0s -> 0.2s phóng to 100% lên 130%, giữ nguyên, 2.5s lùi về 100% khi dứt câu.",
    soundCue: "Swoosh nhẹ tại 0.0s",
    rationale: `Gọi đích danh cụm từ '${cleanAudience}' ngay trong 1 giây đầu tiên, khiến người xem nhận diện đây là nội dung dành riêng cho họ.`
  };

  // Phương án 2: Đánh trúng Nỗi đau & Thức tỉnh (Pain Callout)
  const opt2 = {
    name: "Phương án 2 (Đánh trúng nỗi đau & Thức tỉnh)",
    hookSentence: `Có phải bạn đang chật vật làm video một mình mà mãi không có kết quả?`,
    isNewProposal: true,
    textOnScreen: splitHookLines(`BẠN ĐANG LÀM / MÃI KHÔNG RA KẾT QUẢ?`),
    zoomKeyframe: "0.0s bắt đầu zoom: 0.0s -> 0.2s phóng to 100% lên 130%, giữ nguyên, 2.7s lùi về 100% khi dứt câu.",
    soundCue: "Swoosh nhẹ tại 0.0s",
    rationale: `Đánh thẳng vào cảm giác bế tắc và hoài nghi của người xem, kích hoạt sự đồng cảm sâu sắc khiến họ phải ở lại nghe giải pháp.`
  };

  // Phương án 3: Đảo ngược tư duy & Kích hoạt tò mò (Counter-intuitive / Secret)
  const opt3 = {
    name: "Phương án 3 (Đảo ngược tư duy & Bí mật ít người biết)",
    hookSentence: `Bí mật làm video một mình chuẩn như cả ekip mà chưa ai nói cho bạn!`,
    isNewProposal: true,
    textOnScreen: splitHookLines(`LÀM VIDEO MỘT MÌNH / CHUẨN NHƯ CẢ EKIP`),
    zoomKeyframe: "0.0s bắt đầu zoom: 0.0s -> 0.2s phóng to 100% lên 130%, giữ nguyên, 2.6s lùi về 100% khi dứt câu.",
    soundCue: "Swoosh nhẹ tại 0.0s",
    rationale: `Tạo sự tương phản mạnh mẽ giữa 'làm một mình' và 'chuẩn như cả ekip', gợi mở giá trị vượt trội kích thích tính hiếu kỳ.`
  };

  return {
    targetAudience: cleanAudience,
    options: [opt1, opt2, opt3]
  };
}

/**
 * Định dạng báo cáo 3 Phương Án Hook ra Markdown
 */
export function formatThreeHooksMarkdown(data) {
  let md = `### 🎯 3 PHƯƠNG ÁN THIẾT KẾ HOOK 3 GIÂY ĐẦU\n`;
  md += `**Video dành cho đối tượng**: *${data.targetAudience}*\n\n`;

  data.options.forEach((opt, idx) => {
    md += `#### ${opt.name}\n`;
    md += `- **Câu Hook**: "${opt.hookSentence}" *(${opt.isNewProposal ? "Đề xuất câu mới" : "Trích từ transcript"})*\n`;
    md += `- **Chữ hiện trên màn hình** (Font đậm, 2-4 từ/dòng):\n\`\`\`text\n${opt.textOnScreen}\n\`\`\`\n`;
    md += `- **Mốc giây bắt đầu zoom**: ${opt.zoomKeyframe}\n`;
    md += `- **Âm thanh**: ${opt.soundCue}\n`;
    md += `- **Lý do gọi đúng người xem**: ${opt.rationale}\n\n`;
  });

  return md;
}
