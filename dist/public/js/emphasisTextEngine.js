/**
 * emphasisTextEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA RÀ SOÁT CHỮ NHẤN & QUOTE TOÀN MÀN HÌNH (EMPHASIS TEXT ENGINE)
 * Tìm các câu đáng nhấn:
 * 1. Câu nêu vấn đề
 * 2. Câu chốt luận điểm
 * 3. Câu đảo ngược tư duy
 * 4. Chuỗi ba vế
 * + Tối đa 3 câu thông điệp lớn toàn màn hình.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const FILLER_WORDS = ["à", "ừ", "thì", "là", "cái", "những cái"];

export function cleanAndFormatWords(text) {
  if (!text || typeof text !== 'string') return "";
  let clean = text.toLowerCase().replace(/\bnhững cái\b/g, '');
  const words = clean.trim().split(/\s+/).filter(w => {
    const c = w.toLowerCase().replace(/[.,!?;:]/g, '');
    return c && !FILLER_WORDS.includes(c);
  });

  const lines = [];
  let cur = [];
  for (const w of words) {
    cur.push(w.toUpperCase());
    if (cur.length >= 3) { // 2-4 từ/dòng
      lines.push(cur.join(' '));
      cur = [];
    }
  }
  if (cur.length > 0) lines.push(cur.join(' '));

  if (lines.length > 2) {
    return `trang 1: ${lines.slice(0, 2).join(' / ')} | trang 2: ${lines.slice(2).join(' / ')}`;
  }
  return lines.join(' / ');
}

export function detectEmphasisPoints(cues = []) {
  const points = [];
  let fullScreenCount = 0;
  let lastSec = 3.0;

  if (cues && cues.length > 0) {
    for (let i = 0; i < cues.length; i++) {
      const cue = cues[i];
      if (cue.startSec < 3.0) continue;
      if (cue.startSec - lastSec < 3.0) continue;

      const lower = cue.text.toLowerCase();
      let reason = null;
      let isFullScreen = false;

      // 1. Câu thông điệp lớn toàn màn hình (chọn lọc tối đa 3 câu)
      if (fullScreenCount < 3 && (lower.includes("chính là") || lower.includes("thực sự") || lower.includes("tâm đắc") || lower.includes("quan trọng nhất") || lower.includes("không chỉ là"))) {
        isFullScreen = true;
        fullScreenCount++;
        reason = `Thông điệp lớn (${fullScreenCount}/3): Luận điểm cốt lõi thay đổi nhận thức người xem`;
      } else if (lower.includes("vấn đề") || lower.includes("sai lầm") || lower.includes("khó khăn") || lower.includes("không có")) {
        reason = "Câu nêu vấn đề: Đánh trúng rào cản người xem đang vướng phải";
      } else if (lower.includes("chốt lại") || lower.includes("kết quả") || lower.includes("cuối cùng") || lower.includes("bài học")) {
        reason = "Câu chốt: Đúc kết giải pháp hành động dứt khoát";
      } else if (lower.includes("nhưng thực ra") || lower.includes("ngược lại") || lower.includes("không phải") || lower.includes("sự thật")) {
        reason = "Câu đảo ngược tư duy: Phá vỡ lầm tưởng thông thường";
      } else if (cue.text.split(/,| và | hoặc /).length >= 3) {
        reason = "Chuỗi ba vế: Nhịp điệu dồn dập nhấn mạnh 3 khía cạnh liên tiếp";
      }

      if (reason) {
        points.push({
          timeStr: `00:${String(Math.floor(cue.startSec)).padStart(2, '0')}`,
          startSec: cue.startSec,
          formattedText: cleanAndFormatWords(cue.text),
          type: isFullScreen ? "toàn màn hình" : "chữ nhấn",
          reason
        });
        lastSec = cue.startSec + 3.0;
        if (points.length >= 12) break;
      }
    }
  }

  // Mẫu mặc định nếu chưa dán SRT
  if (points.length === 0) {
    points.push(
      {
        timeStr: "00:10",
        formattedText: "trang 1: KHÔNG CÓ ĐƯỢC / BẰNG CHỨNG | trang 2: CHO NHỮNG GÌ / MÀ MÌNH NÓI",
        type: "chữ nhấn",
        reason: "Câu nêu vấn đề: Người làm mới thường chưa có bằng chứng thuyết phục"
      },
      {
        timeStr: "00:34",
        formattedText: "THỨ KHÁCH HÀNG MUA / KHÔNG CHỈ LÀ SẢN PHẨM / MÀ LÀ CHÍNH MÌNH",
        type: "toàn màn hình",
        reason: "Thông điệp lớn (1/3): Luận điểm trọng tâm đảo ngược góc nhìn bán hàng"
      },
      {
        timeStr: "01:25",
        formattedText: "TẬP TRUNG TỐI ĐA / GIẢI QUYẾT TRIỆT ĐỂ",
        type: "chữ nhấn",
        reason: "Câu chốt: Khẳng định nguyên tắc hành động mang lại kết quả"
      }
    );
  }

  return points;
}

export function formatEmphasisMarkdown(points) {
  let md = `### ✍️ BẢNG CHỌN LỌC CHỮ NHẤN & QUOTE TOÀN MÀN HÌNH\n\n`;
  md += `| Mốc giây | Chữ hiện (đã chia dòng) | Loại (chữ nhấn / toàn màn hình) | Vì sao đáng nhấn |\n`;
  md += `| :---: | :--- | :---: | :--- |\n`;

  points.forEach(p => {
    md += `| ${p.timeStr} | ${p.formattedText} | **${p.type}** | ${p.reason} |\n`;
  });

  return md;
}
