/**
 * listCardEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA LIỆT KÊ Ý TỪNG BƯỚC (LIST CARD STEPS ENGINE)
 * Tìm và thiết kế các đoạn liệt kê ý ("bước 1", "thứ hai", "tiếp theo", "cuối cùng"):
 * - Thẻ trượt vào trễ 0.3s sau từ đánh dấu
 * - Tối đa 36 ký tự/thẻ, rút gọn giữ nguyên ý
 * - Thẻ cũ đứng yên
 * - Chia đoạn 10-20s nếu có kể chuyện xen giữa
 * - Kèm tiếng lật giấy nhẹ
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const LIST_TRIGGERS = [
  { regex: /\bbước\s*1\b/i, label: "bước 1" },
  { regex: /\bbước\s*2\b/i, label: "bước 2" },
  { regex: /\bbước\s*3\b/i, label: "bước 3" },
  { regex: /\bbước\s*4\b/i, label: "bước 4" },
  { regex: /\bbước\s*5\b/i, label: "bước 5" },
  { regex: /\bthứ\s*nhất\b|\bđầu\s*tiên\b/i, label: "thứ nhất" },
  { regex: /\bthứ\s*hai\b/i, label: "thứ hai" },
  { regex: /\bthứ\s*ba\b/i, label: "thứ ba" },
  { regex: /\bthứ\s*tư\b/i, label: "thứ tư" },
  { regex: /\btiếp\s*theo\b/i, label: "tiếp theo" },
  { regex: /\bcuối\s*cùng\b/i, label: "cuối cùng" }
];

export function cleanCardText(fullText, triggerLabel) {
  if (!fullText) return "";
  let clean = fullText.replace(new RegExp(triggerLabel, 'i'), '').trim();
  clean = clean.replace(/^[:,\s-]+/, '').trim();
  if (clean.length > 36) {
    clean = clean.slice(0, 33).trim() + "...";
  }
  return clean;
}

export function detectListCards(cues = []) {
  const lists = [];
  let currentList = [];
  let lastTime = 0;

  if (cues && cues.length > 0) {
    for (let i = 0; i < cues.length; i++) {
      const cue = cues[i];
      const lower = cue.text.toLowerCase();

      for (const trig of LIST_TRIGGERS) {
        if (trig.regex.test(lower)) {
          const appearSec = cue.startSec + 0.3; // Hiện sau từ đánh dấu 0.3s
          const cardText = cleanCardText(cue.text, trig.label);

          const item = {
            appearTimeStr: formatSec(appearSec),
            appearSec,
            triggerWord: trig.label,
            cardText: cardText || cue.text.slice(0, 36)
          };

          // Nếu khoảng cách giữa 2 thẻ > 20s (có kể chuyện xen giữa) ➔ tách đoạn
          if (currentList.length > 0 && appearSec - lastTime > 20) {
            lists.push([...currentList]);
            currentList = [];
          }

          currentList.push(item);
          lastTime = appearSec;
          break;
        }
      }
    }
    if (currentList.length > 0) {
      lists.push(currentList);
    }
  }

  // Mẫu mặc định nếu chưa dán SRT
  if (lists.length === 0) {
    lists.push([
      { appearTimeStr: "01:02.6", appearSec: 62.6, triggerWord: "bước 1", cardText: "Tìm vấn đề của chính bản thân mình" },
      { appearTimeStr: "01:13.4", appearSec: 73.4, triggerWord: "thứ hai", cardText: "Thử nhiều cách giải quyết triệt để" }
    ]);
    lists.push([
      { appearTimeStr: "01:51.5", appearSec: 111.5, triggerWord: "cuối cùng", cardText: "Đóng gói thành phương pháp, lộ trình" }
    ]);
  }

  return lists;
}

function formatSec(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.floor((sec % 1) * 10);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${ms}`;
}

export function formatListCardsMarkdown(lists) {
  let md = `### 📑 BẢNG THẺ LIỆT KÊ Ý TỪNG BƯỚC (CHUẨN CAPCUT)\n`;
  md += `*Quy tắc: Thẻ ≤ 36 ký tự | Hiện trễ 0.3s sau từ khóa | Thẻ cũ đứng yên | Kèm tiếng lật giấy nhẹ*\n\n`;

  lists.forEach((list, idx) => {
    md += `#### 📋 Danh Sách Phân Đoạn ${idx + 1}:\n`;
    md += `| Mốc giây hiện | Từ đánh dấu | Chữ trên thẻ |\n`;
    md += `| :---: | :---: | :--- |\n`;

    list.forEach(item => {
      md += `| ${item.appearTimeStr} | "${item.triggerWord}" | **${item.cardText}** |\n`;
    });
    md += `\n*(Bố cục: Camera thu ô dọc bo góc bên trái, thẻ chữ trượt vào bên phải. Flash Zoom lúc vào và ra)*\n\n`;
  });

  return md;
}
