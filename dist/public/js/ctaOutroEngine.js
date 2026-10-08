/**
 * ctaOutroEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA ĐOẠN KẾT & KÊU GỌI HÀNH ĐỘNG (CTA & OUTRO LOOP ENGINE)
 * Tuân thủ 4 quy luật đoạn kết đẳng cấp:
 * 1. Câu chốt đanh thép (1 câu)
 * 2. 1 CTA chuyển đổi duy nhất (không xin like/share)
 * 3. Kỹ thuật Seamless Loop nối về câu đầu
 * 4. Mốc hạ sáng, giữ đoạn tối 1.5 - 2s, nổi nhạc Outro (-25dB lên -12dB)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const OUTRO_SPECS = {
  closingDurationSec: 3.0,
  ctaDurationSec: 3.0,
  fadeToBlackDurationSec: 0.5,
  darkScreenHoldSec: 2.0,
  outroMusicFadeIn: "-25dB -> -12dB",
  loopTechnique: "Nối liền ngữ nghĩa cuối video vào câu đầu Hook"
};

/**
 * Sinh cấu trúc đoạn kết và kêu gọi hành động
 */
export function generateOutroPlan({ totalDurationSec = 216, topic = "tạo ra ngách", hookFirstWords = "Nếu bạn là người làm video một mình..." } = {}) {
  const endSec = totalDurationSec;
  const darkStartSec = Math.max(0, endSec - OUTRO_SPECS.darkScreenHoldSec);
  const ctaStartSec = Math.max(0, darkStartSec - OUTRO_SPECS.ctaDurationSec);
  const closingStartSec = Math.max(0, ctaStartSec - OUTRO_SPECS.closingDurationSec);

  const closingStatement = `Lựa chọn ngách đúng, bạn không cần phải cạnh tranh với ai.`;
  const ctaText = `Lưu video này lại để bắt đầu ngay hôm nay.`;
  const loopBridge = `...và tất cả bắt đầu khi...`;

  const rows = [
    {
      timeRange: `${formatTime(closingStartSec)} - ${formatTime(ctaStartSec)}`,
      component: "Câu chốt (Closing Beat)",
      content: `"${closingStatement}"`,
      notes: "Font Sigmar IN HOA, từ đã nói xanh #0091ff. Tác giả nhìn thẳng camera, dứt khoát, không giải thích thêm."
    },
    {
      timeRange: `${formatTime(ctaStartSec)} - ${formatTime(darkStartSec)}`,
      component: "Kêu gọi hành động (CTA)",
      content: `"${ctaText}"`,
      notes: "Chữ 1 dòng ngắn gọn dưới mặt. Giọng nói trầm ấm, kêu gọi hành động duy nhất."
    },
    {
      timeRange: `${formatTime(darkStartSec - 1.0)} - ${formatTime(darkStartSec)}`,
      component: "Kỹ thuật Loop",
      content: `"${loopBridge}" ➔ Nối về: "${hookFirstWords}"`,
      notes: "Câu nối liền mạch về ngữ nghĩa, người xem vừa nghe xong là video tự lặp lại câu đầu tiên."
    },
    {
      timeRange: `${formatTime(darkStartSec)} - ${formatTime(endSec)}`,
      component: "Đoạn tối & Nhạc Outro",
      content: "[Màn hình tối hoàn toàn]",
      notes: `Fade to black 0.5s. Giữ tối đúng ${OUTRO_SPECS.darkScreenHoldSec}s. Nhạc Outro nổi đều từ -25dB lên -12dB rồi tắt.`
    }
  ];

  return {
    totalDurationSec,
    closingStatement,
    ctaText,
    loopBridge,
    rows
  };
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function formatOutroMarkdown(plan) {
  let md = `### 🎬 BẢNG THIẾT KẾ ĐOẠN KẾT & KÊU GỌI HÀNH ĐỘNG (CTA & OUTRO LOOP)\n`;
  md += `*Quy tắc: Câu chốt đanh thép | 1 CTA duy nhất | Seamless Loop >100% Retention | Giữ đoạn tối 2s nổi nhạc Outro*\n\n`;

  md += `| Mốc giây | Thành phần (câu chốt / CTA / đoạn tối / nhạc kết) | Nội dung chữ & Lời thoại | Ghi chú CapCut |\n`;
  md += `| :---: | :--- | :--- | :--- |\n`;

  plan.rows.forEach(r => {
    md += `| ${r.timeRange} | **${r.component}** | ${r.content} | ${r.notes} |\n`;
  });

  return md;
}
