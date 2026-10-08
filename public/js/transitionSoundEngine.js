/**
 * transitionSoundEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA THIẾT KẾ CHUYỂN CẢNH & ÂM THANH (TRANSITION & SOUND ENGINE)
 * Tuân thủ 5 quy luật:
 * 1. Chỉ MỘT kiểu chuyển cảnh cho cả video (mặc định: Flash Zoom)
 * 2. Đặt ở: chuyển phần mới, vào/ra quote toàn màn hình, vào/ra đoạn thẻ
 * 3. Tiếng động: swoosh nhẹ lúc vào cảnh mới, lật giấy lúc thẻ hiện, ra cảnh không tiếng
 * 4. Không tiếng nào to hơn tiếng ở 3 giây đầu
 * 5. B-roll không chuyển cảnh, chỉ mờ dần ngắn 0.12s
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const TRANSITION_SPECS = {
  defaultStyle: "Flash Zoom",
  singleStyleOnly: true,
  sfx: {
    hookStart: "Swoosh nhẹ (to nhất video)",
    intoNewScene: "Swoosh nhẹ (nhẹ êm)",
    cardAppear: "Lật giấy nhẹ",
    outOfScene: "Không có tiếng",
    broll: "Không có tiếng (mờ dần 0.12s)"
  }
};

/**
 * Tạo danh sách các điểm chuyển cảnh và âm thanh
 */
export function generateTransitionAndSoundPlan({ transitionStyle = "Flash Zoom", cues = [] } = {}) {
  const points = [];

  // 1. Điểm chuyển kết thúc Hook (00:03.0)
  points.push({
    timeStr: "00:03.0",
    fromTo: "Cuối Hook ➔ Đầu phần nội dung chính",
    hasTransition: transitionStyle,
    sound: TRANSITION_SPECS.sfx.intoNewScene,
    notes: "Chuyển sang phần nội dung chính, swoosh nhẹ không giật mình."
  });

  if (cues && cues.length > 0) {
    for (let i = 0; i < cues.length; i++) {
      const cue = cues[i];
      const lower = cue.text.toLowerCase();
      const timeStr = `00:${String(Math.floor(cue.startSec)).padStart(2, '0')}`;

      // Điểm vào/ra Quote toàn màn hình
      if (lower.includes("thứ khách hàng") || lower.includes("tâm đắc") || lower.includes("chính là")) {
        points.push({
          timeStr,
          fromTo: "Mặt người nói ➔ Cảnh Quote toàn màn hình",
          hasTransition: transitionStyle,
          sound: TRANSITION_SPECS.sfx.intoNewScene,
          notes: "Vào cảnh Quote nền sao sáng, kèm swoosh nhẹ."
        });
        const outTimeStr = `00:${String(Math.floor(cue.endSec)).padStart(2, '0')}`;
        points.push({
          timeStr: outTimeStr,
          fromTo: "Quote toàn màn hình ➔ Về mặt người nói",
          hasTransition: transitionStyle,
          sound: TRANSITION_SPECS.sfx.outOfScene,
          notes: "Ra cảnh Quote về camera mặt, không có tiếng."
        });
      }

      // Điểm vào/ra đoạn thẻ
      if (lower.includes("bước 1") || lower.includes("thứ nhất")) {
        points.push({
          timeStr,
          fromTo: "Mặt người nói ➔ Bố cục thẻ bên phải",
          hasTransition: transitionStyle,
          sound: TRANSITION_SPECS.sfx.intoNewScene,
          notes: "Vào bố cục ô camera dọc bên trái, thẻ bên phải."
        });
        points.push({
          timeStr: `00:${String(Math.floor(cue.startSec + 0.3)).padStart(2, '0')}`,
          fromTo: "Thẻ ý trượt vào vị trí",
          hasTransition: "Không",
          sound: TRANSITION_SPECS.sfx.cardAppear,
          notes: "Thẻ trượt vào trễ 0.3s kèm tiếng lật giấy nhẹ."
        });
      }
    }
  }

  // Mẫu mặc định nếu không có SRT
  if (points.length <= 1) {
    points.push(
      {
        timeStr: "00:21.5",
        fromTo: "Mặt người nói ➔ B-roll gõ phím",
        hasTransition: "Không (mờ dần 0.12s)",
        sound: "Không có tiếng",
        notes: "B-roll không chuyển cảnh, chỉ mờ dần ngắn 0.12s."
      },
      {
        timeStr: "00:34.8",
        fromTo: "Mặt người nói ➔ Cảnh Quote toàn màn hình",
        hasTransition: transitionStyle,
        sound: "Swoosh nhẹ",
        notes: "Vào cảnh Quote toàn màn hình."
      },
      {
        timeStr: "00:39.8",
        fromTo: "Quote toàn màn hình ➔ Về mặt người nói",
        hasTransition: transitionStyle,
        sound: "Không có tiếng",
        notes: "Thoát Quote về mặt người nói, không có tiếng."
      },
      {
        timeStr: "00:59.8",
        fromTo: "Mặt người nói ➔ Bố cục thẻ liệt kê",
        hasTransition: transitionStyle,
        sound: "Swoosh nhẹ",
        notes: "Vào bố cục thẻ liệt kê."
      },
      {
        timeStr: "01:02.6",
        fromTo: "Thẻ bước 1 trượt vào",
        hasTransition: "Không",
        sound: "Lật giấy nhẹ",
        notes: "Thẻ trượt vào kèm tiếng lật giấy nhẹ."
      },
      {
        timeStr: "01:19.5",
        fromTo: "Thoát bố cục thẻ ➔ Về mặt người nói",
        hasTransition: transitionStyle,
        sound: "Không có tiếng",
        notes: "Thoát bố cục thẻ về mặt người nói, không tiếng."
      }
    );
  }

  return { transitionStyle, points };
}

export function formatTransitionSoundMarkdown(plan) {
  let md = `### 🔄 BẢNG ĐỀ XUẤT CHUYỂN CẢNH & TIẾNG ĐỘNG (CHUẨN CAPCUT)\n`;
  md += `- **Kiểu chuyển cảnh duy nhất**: **${plan.transitionStyle}**\n`;
  md += `- **Nguyên tắc**: Nhẹ êm không giật mình, ra cảnh không tiếng, không tiếng nào to hơn 3s đầu.\n\n`;

  md += `| Mốc giây | Chuyển từ → sang | Có chuyển cảnh? | Tiếng động |\n`;
  md += `| :---: | :--- | :---: | :--- |\n`;

  plan.points.forEach(p => {
    md += `| ${p.timeStr} | ${p.fromTo} | **${p.hasTransition}** | ${p.sound} |\n`;
  });

  return md;
}
