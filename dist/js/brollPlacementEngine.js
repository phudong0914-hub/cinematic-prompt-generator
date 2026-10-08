/**
 * brollPlacementEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CHUYÊN GIA ĐỀ XUẤT CHÈN B-ROLL (B-ROLL PLACEMENT ENGINE)
 * Tuân thủ 5 quy luật:
 * 1. Tối đa 3 giây/clip
 * 2. Giữa 2 B-roll cách ít nhất 2.5 giây thấy mặt người nói
 * 3. Không quá 2 B-roll liền nhau
 * 4. Video 3-4 phút khoảng 10 B-roll (thưa còn hơn dày)
 * 5. Ưu tiên cảnh thật của tác giả, stock chỉ cho ý chung chung + từ khóa tiếng Anh
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const BROLL_SPECS = {
  maxDurationSec: 3.0,
  minFaceIntervalSec: 2.5,
  maxConsecutive: 2,
  standardQuota3to4Min: 10,
  priorityRule: "Cảnh thật của tôi (đời sống, làm việc) > Stock footage"
};

/**
 * Đề xuất vị trí B-roll từ transcript/cues
 */
export function generateBrollProposals(cues = []) {
  const proposals = [];
  let lastBrollEnd = 3.0; // Hook 3s đầu luôn thấy mặt
  let consecutive = 0;

  if (cues && cues.length > 0) {
    for (let i = 0; i < cues.length; i++) {
      const cue = cues[i];
      if (cue.startSec < 3.0) continue; // Giữ 3s đầu cho Hook

      // Kiểm tra khoảng cách thấy mặt >= 2.5s và không quá 2 clip liền
      if (cue.startSec - lastBrollEnd >= BROLL_SPECS.minFaceIntervalSec && consecutive < BROLL_SPECS.maxConsecutive) {
        const duration = Math.min(BROLL_SPECS.maxDurationSec, Math.max(2.0, cue.endSec - cue.startSec));
        const endSec = cue.startSec + duration;

        // Phân loại nguồn dựa trên ngữ nghĩa câu nói
        const lower = cue.text.toLowerCase();
        const isPersonal = lower.includes("tôi") || lower.includes("mình") || lower.includes("kinh nghiệm") || lower.includes("bàn làm việc");
        
        proposals.push({
          timeRange: `${formatTime(cue.startSec)} - ${formatTime(endSec)}`,
          startSec: cue.startSec,
          endSec: endSec,
          durationSec: parseFloat(duration.toFixed(1)),
          spokenPhrase: cue.text,
          recommendedVisual: isPersonal 
            ? `Cảnh quay thực tế của tác giả đang làm việc hoặc trải nghiệm đời sống tương ứng với: "${cue.text}"`
            : `Góc máy điện ảnh quay bối cảnh hoặc hành động trừu tượng minh họa cho: "${cue.text}"`,
          source: isPersonal ? "Cảnh của tôi" : "Stock",
          stockKeywordsEn: isPersonal 
            ? `creator working desk laptop cinematic authentic lifestyle b-roll`
            : `cinematic conceptual illustration modern minimalist 4k footage`
        });

        lastBrollEnd = endSec;
        consecutive++;

        if (proposals.length >= 12) break; // Giữ mức trần ~10-12 clip cho video 3-4 phút
      } else {
        consecutive = 0;
      }
    }
  }

  // Nếu không có cues chi tiết, xuất dữ liệu khung mẫu chuẩn
  if (proposals.length === 0) {
    proposals.push(
      {
        timeRange: "00:21 - 00:24",
        durationSec: 3.0,
        spokenPhrase: "Khi bạn phải tự làm mọi thứ từ kịch bản đến quay dựng...",
        recommendedVisual: "Góc máy cận quay đôi tay gõ phím và chuột trên bàn làm việc trong phòng tối",
        source: "Cảnh của tôi",
        stockKeywordsEn: "man typing laptop keyboard dark studio desk close up cinematic"
      },
      {
        timeRange: "00:45 - 00:48",
        durationSec: 3.0,
        spokenPhrase: "Khán giả lướt qua hàng trăm video mỗi ngày...",
        recommendedVisual: "Màn hình điện thoại hiển thị ngón tay lướt nhanh trên bảng tin TikTok/Reels",
        source: "Stock",
        stockKeywordsEn: "person scrolling smartphone social media feed fast speed close up"
      },
      {
        timeRange: "01:15 - 01:18",
        durationSec: 3.0,
        spokenPhrase: "Tập trung vào thông điệp và giải quyết vấn đề cốt lõi...",
        recommendedVisual: "Cảnh ghi chú ý tưởng trên sổ tay hoặc bảng kế hoạch công việc",
        source: "Cảnh của tôi",
        stockKeywordsEn: "writing notes pen notebook desk creative thinking top view"
      }
    );
  }

  return proposals;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * Định dạng bảng Markdown theo yêu cầu
 */
export function formatBrollMarkdown(proposals) {
  let md = `### 🎥 BẢNG ĐỀ XUẤT CHÈN B-ROLL (CHUẨN NHỊP ĐIỆU VIDEO NGẮN)\n`;
  md += `*Quy tắc áp dụng: Tối đa 3s/clip | Giãn cách thấy mặt ≥ 2.5s | Không quá 2 clip liền | Quota ~10 clip cho video 3-4 phút*\n\n`;
  md += `| Mốc giây | Dài (giây) | Câu đang nói | Cảnh nên chèn | Nguồn (cảnh của tôi / stock) | Từ khoá tìm stock (tiếng Anh) |\n`;
  md += `| :---: | :---: | :--- | :--- | :---: | :--- |\n`;

  proposals.forEach(p => {
    md += `| ${p.timeRange} | ${p.durationSec}s | "${p.spokenPhrase}" | ${p.recommendedVisual} | **${p.source}** | \`${p.stockKeywordsEn}\` |\n`;
  });

  return md;
}
