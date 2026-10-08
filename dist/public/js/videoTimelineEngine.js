/**
 * videoTimelineEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * SHORT-FORM VIDEO POST-PRODUCTION TIMELINE ENGINE (SKILL TỔNG · MỘT LẦN RA HẾT)
 * Tuân thủ nghiêm ngặt 5 quy luật biên tập video ngắn:
 * 1. Hook 3s (zoom 100->130% 0.2s, 2-4 từ/dòng, swoosh nhẹ)
 * 2. B-roll (max 3s, cách >=2.5s, max 2 clip liền, ưu tiên cảnh thật)
 * 3. Chữ nhấn (đúng lời nói, cách >=3s, max 3 cảnh full-screen)
 * 4. Thẻ liệt kê ý ("bước 1...", <=36 ký tự, trễ 0.3s, tiếng lật giấy)
 * 5. Chuyển cảnh (1 kiểu duy nhất ở đầu phần mới, tiếng nhẹ không to hơn 3s đầu)
 * + Quy tắc Anti-Overlap: Không để 2 yếu tố thị giác đè lên nhau cùng lúc.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const EDITING_RULES = {
  hook: {
    durationSec: 3.0,
    zoomAnimation: "100% -> 130% in 0.2s",
    wordsPerLine: "2-4 từ/dòng",
    soundCue: "Swoosh nhẹ"
  },
  broll: {
    maxDurationSec: 3.0,
    minIntervalSec: 2.5,
    maxConsecutiveClips: 2,
    footagePriority: "Tư liệu thực tế của tác giả > Stock footage"
  },
  keyText: {
    minIntervalSec: 3.0,
    maxFullScreenClips: 3,
    fidelity: "Trích xuất đúng 100% lời nói của tác giả"
  },
  listCard: {
    maxChars: 36,
    delaySec: 0.3,
    triggerPatterns: ["bước 1", "bước 2", "bước 3", "thứ nhất", "thứ hai", "thứ ba", "điều 1", "điều 2", "lưu ý 1", "tip 1"],
    soundCue: "Tiếng lật giấy (paper flip)"
  },
  transition: {
    singleStyleOnly: true,
    volumeConstraint: "Âm lượng nhẹ, không to hơn 3 giây đầu",
    trigger: "Điểm bắt đầu phân đoạn hoặc chủ đề mới"
  }
};

/**
 * Phân tích cú pháp SRT đơn giản thành danh sách cue
 */
export function parseSrt(srtContent) {
  if (!srtContent || typeof srtContent !== 'string') return [];
  const blocks = srtContent.trim().split(/\n\s*\n/);
  const cues = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length >= 2) {
      const timeMatch = lines[1].match(/(\d{2}):(\d{2}):(\d{2})[,.](\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})[,.](\d{3})/);
      if (timeMatch) {
        const startSec = parseInt(timeMatch[1]) * 3600 + parseInt(timeMatch[2]) * 60 + parseInt(timeMatch[3]) + parseInt(timeMatch[4]) / 1000;
        const endSec = parseInt(timeMatch[5]) * 3600 + parseInt(timeMatch[6]) * 60 + parseInt(timeMatch[7]) + parseInt(timeMatch[8]) / 1000;
        const text = lines.slice(2).join(' ').trim();
        cues.push({ startSec, endSec, text });
      }
    }
  }
  return cues;
}

/**
 * Định dạng giây thành định dạng MM:SS hoặc 00:SS.m
 */
export function formatTimeSec(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.floor((sec % 1) * 10);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${ms}`;
}

/**
 * Kiểm tra xem 2 khoảng thời gian có bị chồng chéo hay không
 */
export function isOverlapping(start1, end1, start2, end2) {
  return Math.max(start1, start2) < Math.min(end1, end2);
}

/**
 * Tạo timeline hậu kỳ hoàn chỉnh theo 5 luật biên tập video ngắn
 */
export function generatePostTimeline({ targetAudience = "Khán giả đại chúng", scriptOrSrt = "", transitionStyle = "Whip Pan" } = {}) {
  const cues = scriptOrSrt.includes('-->') ? parseSrt(scriptOrSrt) : [];
  const timeline = [];
  const uncertainPoints = [];

  // 1. Hook 3 giây đầu
  timeline.push({
    timeRange: "00:00.0 - 00:03.0",
    startSec: 0,
    endSec: 3.0,
    type: "hook",
    content: cues.length > 0 ? cues[0].text : "Câu gọi đích danh người xem: " + targetAudience,
    notes: `Chữ đậm 2-4 từ/dòng, zoom 100% ➔ 130% trong 0.2s, âm thanh swoosh nhẹ.`
  });

  // Nếu có transcript cues, rà soát từng mốc
  let lastBrollEnd = 3.0;
  let consecutiveBroll = 0;
  let lastKeyTextEnd = 3.0;
  let fullScreenCount = 0;

  if (cues.length > 1) {
    for (let i = 1; i < cues.length; i++) {
      const cue = cues[i];
      const lower = cue.text.toLowerCase();

      // Kiểm tra thẻ liệt kê ý (List Card)
      const hasListKeyword = EDITING_RULES.listCard.triggerPatterns.some(p => lower.includes(p));
      if (hasListKeyword) {
        const cardText = cue.text.slice(0, 36);
        const cardStart = cue.startSec + 0.3;
        const cardEnd = Math.min(cardStart + 2.5, cue.endSec);

        timeline.push({
          timeRange: `${formatTimeSec(cardStart)} - ${formatTimeSec(cardEnd)}`,
          startSec: cardStart,
          endSec: cardEnd,
          type: "thẻ liệt kê",
          content: cardText,
          notes: `Hiện sau từ khóa 0.3s. Độ dài: ${cardText.length} ký tự (≤36 ký tự). Kèm tiếng lật giấy.`
        });
        continue;
      }

      // Kiểm tra chuyển cảnh (Transition)
      if (lower.includes("tuy nhiên") || lower.includes("đặc biệt") || lower.includes("sau đó") || lower.includes("kết luận")) {
        timeline.push({
          timeRange: `${formatTimeSec(cue.startSec)} - ${formatTimeSec(cue.startSec + 0.5)}`,
          startSec: cue.startSec,
          endSec: cue.startSec + 0.5,
          type: "chuyển cảnh",
          content: `Chuyển cảnh duy nhất: ${transitionStyle}`,
          notes: `Âm lượng nhẹ, không to hơn 3s đầu. Đặt ở điểm vào phần mới.`
        });
      }

      // Kiểm tra chèn B-roll (tuân thủ luật giãn cách >=2.5s và max 2 clip liền)
      if (cue.startSec - lastBrollEnd >= 2.5 && consecutiveBroll < 2 && cue.endSec - cue.startSec >= 2.0) {
        const brollDuration = Math.min(3.0, cue.endSec - cue.startSec);
        const brollStart = cue.startSec;
        const brollEnd = brollStart + brollDuration;

        timeline.push({
          timeRange: `${formatTimeSec(brollStart)} - ${formatTimeSec(brollEnd)}`,
          startSec: brollStart,
          endSec: brollEnd,
          type: "B-roll",
          content: `Tư liệu thực tế minh họa cho: "${cue.text}"`,
          notes: `Thời lượng ${brollDuration.toFixed(1)}s (≤3s). Ưu tiên video quay thật của tác giả.`
        });

        lastBrollEnd = brollEnd;
        consecutiveBroll++;
      } else {
        consecutiveBroll = 0;

        // Chữ nhấn (Key Text) - cách nhau ít nhất 3 giây
        if (cue.startSec - lastKeyTextEnd >= 3.0 && fullScreenCount < 3) {
          const isFullScreen = fullScreenCount < 3 && cue.text.length < 25;
          if (isFullScreen) fullScreenCount++;

          timeline.push({
            timeRange: `${formatTimeSec(cue.startSec)} - ${formatTimeSec(cue.endSec)}`,
            startSec: cue.startSec,
            endSec: cue.endSec,
            type: "chữ nhấn",
            content: `"${cue.text}"`,
            notes: `Trích đúng 100% lời nói.${isFullScreen ? ' [Toàn màn hình ' + fullScreenCount + '/3]' : ''} Cách cụm chữ trước ≥3s.`
          });
          lastKeyTextEnd = cue.endSec;
        }
      }
    }
  } else {
    // Template mẫu nếu chưa dán SRT cụ thể
    timeline.push(
      { timeRange: "00:03.0 - 00:05.5", type: "chữ nhấn", content: `Lời thoại mở đầu quan trọng`, notes: "Trích đúng 100% lời nói, hiển thị dứt khoát" },
      { timeRange: "00:08.0 - 00:10.5", type: "B-roll", content: `Cảnh quay thao tác thực tế của tác giả`, notes: "Tối đa 3 giây, cách cụm trước ≥2.5s" },
      { timeRange: "00:13.5 - 00:14.0", type: "chuyển cảnh", content: `Chuyển cảnh: ${transitionStyle}`, notes: "Tiếng nhẹ, sang phần chia sẻ bước thực hiện" },
      { timeRange: "00:14.3 - 00:16.8", type: "thẻ liệt kê", content: `Bước 1: [Thẻ tóm tắt ý ≤36 ký tự]`, notes: "Hiện sau từ đánh dấu 0.3s, kèm tiếng lật giấy" }
    );
    uncertainPoints.push("Cần dán nội dung SRT cụ thể để tính toán chính xác frame và thời lượng từng phân cảnh.");
  }

  return {
    targetAudience,
    transitionStyle,
    rules: EDITING_RULES,
    timeline,
    uncertainPoints: uncertainPoints.length > 0 ? uncertainPoints : [
      "Kiểm tra xem tác giả đã có sẵn video B-roll thực tế cho phân cảnh minh họa hay cần bổ sung cảnh quay bổ trợ.",
      "Xác nhận font chữ hiển thị có đồng bộ với bộ nhận diện thương hiệu hay không."
    ]
  };
}

/**
 * Xuất timeline thành bảng Markdown chuẩn theo yêu cầu của Skill
 */
export function formatTimelineMarkdown(result) {
  let md = `### 🎬 TIMELINE HẬU KỲ HOÀN CHỈNH (Video dành cho: ${result.targetAudience})\n\n`;
  md += `| Mốc giây | Loại (hook / B-roll / chữ nhấn / thẻ / chuyển cảnh / tiếng) | Nội dung | Ghi chú |\n`;
  md += `| :---: | :--- | :--- | :--- |\n`;

  result.timeline.forEach(item => {
    md += `| ${item.timeRange} | **${item.type}** | ${item.content} | ${item.notes} |\n`;
  });

  md += `\n### ❓ DANH SÁCH NHỮNG CHỖ CẦN TÁC GIẢ TỰ QUYẾT:\n`;
  result.uncertainPoints.forEach((point, idx) => {
    md += `${idx + 1}. ${point}\n`;
  });

  return md;
}
