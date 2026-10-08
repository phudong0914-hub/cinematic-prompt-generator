/**
 * trungvtStyleEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * SIGNATURE ĐẠO DIỄN TRUNGVT — CHUẨN POST-PRODUCTION DỰNG PHIM ĐỘC QUYỀN
 * Đúc kết sau 14 bản dựng thử độc quyền của Đạo Diễn Trungvt (Thời lượng chuẩn 3:36).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const TRUNGVT_STYLE_SPECS = {
  director: "Đạo Diễn Trungvt",
  typography: {
    fontFamily: "Sigmar",
    textTransform: "UPPERCASE",
    spokenColor: "#0091ff",
    unspokenColor: "#ffffff",
    shadow: "Drop shadow đen nhẹ",
    hookPlacement: "Ngay dưới khuôn mặt Đạo Diễn Trungvt"
  },
  hook: {
    durationSec: 3.0,
    zoomAnimation: "0.0s -> 0.2s: 100% -> 130%, giữ nguyên, lùi đều về 100% khi dứt câu",
    transitionOut: "Flash Zoom",
    soundCue: "Swoosh nhẹ (giây đầu tiên, âm lượng to nhất video)"
  },
  emphasisText: {
    placementRules: ["Câu nêu vấn đề", "Câu chốt luận điểm", "Câu đảo ngược tư duy", "Chuỗi ba vế"],
    wordsPerLine: "2-4 từ/dòng",
    linesPerPage: "1-2 dòng/trang",
    timingAdvanceSec: 0.2, // Hiện sớm hơn tiếng 0.2s
    minIntervalSec: 3.0,
    fillerWords: ["à", "ừ", "thì", "là", "cái"],
    banHardZoom: true // Câu có chữ nhấn thì cấm dùng zoom nhảy
  },
  quote: {
    maxCountFor3m30s: 3,
    background: "Nền sáng (nền sao sáng)",
    noQuotationMarks: true,
    maxLines: 4,
    transitionInOut: "Flash Zoom lúc vào và lúc ra"
  },
  listCards: {
    layout: "Camera thu thành ô dọc bo góc bên trái, thẻ chữ bên phải",
    delaySec: 0.3,
    maxChars: 36,
    soundCue: "Tiếng lật giấy nhẹ",
    transitionInOut: "Flash Zoom lúc vào và lúc ra đoạn thẻ"
  },
  broll: {
    maxDurationSec: 3.0,
    minSpeakerFaceGapSec: 2.5,
    maxConsecutive: 2,
    prioritizeRealFootage: true,
    banStillImages: true,
    preZoom: "Zoom nhảy thẳng 100% lên 125%, giữ 1.5 giây ngay trước B-roll",
    transition: "Mờ dần (Dissolve/Fade) trong 0.12 giây, không Flash Zoom, không tiếng"
  },
  transition: {
    style: "Flash Zoom",
    inSound: "Swoosh nhẹ",
    outSound: "Không có tiếng",
    singleStyleOnly: true
  },
  audio: {
    musicUnderVoice: false,
    sfxTypes: ["swoosh nhẹ", "tiếng lật giấy nhẹ"],
    bannedSFX: ["whoosh trầm to", "tiếng nổ", "tiếng vang chói"]
  },
  densityBenchmark3m36s: {
    totalDurationSec: 216,
    broll: 11,
    emphasisText: 9,
    quote: 3,
    listBlocks: 3
  }
};

/**
 * Loại bỏ từ đệm tiếng Việt và chia dòng 2-4 từ, IN HOA
 */
export function formatEmphasisText(text) {
  if (!text || typeof text !== 'string') return "";
  
  let cleaned = text.toLowerCase()
    .replace(/\bnhững cái\b/g, '')
    .replace(/\bnhững\b/g, (match) => match);

  const words = cleaned.trim().split(/\s+/).filter(w => {
    const clean = w.toLowerCase().replace(/[.,!?;:]/g, '');
    return clean && !TRUNGVT_STYLE_SPECS.emphasisText.fillerWords.includes(clean);
  });

  const lines = [];
  let currentLine = [];

  for (const word of words) {
    currentLine.push(word.toUpperCase());
    if (currentLine.length >= 3) {
      lines.push(currentLine.join(' '));
      currentLine = [];
    }
  }
  if (currentLine.length > 0) {
    lines.push(currentLine.join(' '));
  }

  if (lines.length > 2) {
    const page1 = lines.slice(0, 2).join(' / ');
    const page2 = lines.slice(2).join(' / ');
    return `trang 1: ${page1} | trang 2: ${page2}`;
  }

  return lines.join(' / ');
}

/**
 * Tạo timeline chuẩn phong cách Signature Đạo Diễn Trungvt
 */
export function generateTrungvtTimeline({ targetAudience = "Người xem", videoDuration = "3:36", srtOrTranscript = "" } = {}) {
  const timeline = [];
  const counts = { broll: 0, emphasisText: 0, quote: 0, listBlocks: 0 };
  const uncertainList = [];

  // 1. Hook chuẩn 3 giây đầu
  timeline.push({
    inTime: "00:00.0",
    outTime: "00:03.0",
    type: "hook",
    content: `CÂU GỌI ĐÍCH DANH: ${targetAudience.toUpperCase()}`,
    capcutNotes: "Font Sigmar, IN HOA, đặt dưới mặt Đạo Diễn Trungvt. Từ đã nói #0091ff, chưa nói #ffffff + shadow đen. Zoom keyframe: 100% lên 130% trong 0.2s, lùi về 100% khi dứt câu. 0s: Swoosh nhẹ."
  });

  timeline.push({
    inTime: "00:03.0",
    outTime: "00:03.3",
    type: "chuyển cảnh",
    content: "Flash Zoom kết thúc Hook",
    capcutNotes: "Flash Zoom vào phân đoạn nội dung chính. Không có tiếng lúc thoát."
  });

  // Mẫu mô phỏng cấu trúc nếu không có SRT chi tiết
  if (!srtOrTranscript.includes('-->')) {
    counts.emphasisText++;
    timeline.push({
      inTime: "00:10.8",
      outTime: "00:13.5",
      type: "chữ nhấn",
      content: formatEmphasisText("mình không có được những cái bằng chứng cho những gì mà mình nói"),
      capcutNotes: "Font Sigmar, IN HOA, từ nói xanh #0091ff. Hiện sớm 0.2s. Cấm dùng zoom nhảy."
    });

    timeline.push({
      inTime: "00:20.0",
      outTime: "00:21.5",
      type: "zoom",
      content: "Camera zoom nhảy thẳng 100% ➔ 125%",
      capcutNotes: "Giữ 1.5s ngay trước B-roll để tạo đà thị giác."
    });

    counts.broll++;
    timeline.push({
      inTime: "00:21.5",
      outTime: "00:24.5",
      type: "B-roll",
      content: "Tư liệu thực tế của Đạo Diễn Trungvt (không dùng ảnh tĩnh)",
      capcutNotes: "Vào/ra mờ dần (dissolve) 0.12s. Không Flash Zoom, không tiếng SFX."
    });

    counts.quote++;
    timeline.push({
      inTime: "00:34.8",
      outTime: "00:39.8",
      type: "quote",
      content: "THỨ KHÁCH HÀNG MUA / KHÔNG CHỈ LÀ SẢN PHẨM / MÀ LÀ / CHÍNH CON NGƯỜI MÌNH",
      capcutNotes: "Nền sao sáng, KHÔNG dấu ngoặc kép. Font Sigmar IN HOA, từ đã nói #0091ff. Flash Zoom lúc vào (kèm swoosh) và Flash Zoom lúc ra (không tiếng)."
    });

    counts.listBlocks++;
    timeline.push({
      inTime: "00:59.8",
      outTime: "01:19.5",
      type: "thẻ",
      content: "Đoạn 1: Thẻ 1 (62.6s) 'Tìm vấn đề của chính bản thân mình' | Thẻ 2 (73.4s) 'Thử nhiều cách giải quyết triệt để'",
      capcutNotes: "Camera thu ô dọc bo góc bên trái. Thẻ chữ bên phải, trượt vào sau từ khóa 0.3s kèm tiếng lật giấy nhẹ. Flash Zoom lúc vào và ra."
    });

    uncertainList.push("Cần dán SRT chi tiết để xác định chính xác 9 điểm chữ nhấn và 11 clip B-roll theo đúng lời thoại của Đạo Diễn Trungvt.");
    uncertainList.push("Xác nhận sẵn có video B-roll thực tế của tác giả cho các luận điểm hay cần cảnh quay thay thế.");
  }

  const densityComparison = {
    actual: counts,
    benchmark3m36s: TRUNGVT_STYLE_SPECS.densityBenchmark3m36s,
    notes: `Phong cách Signature Đạo Diễn Trungvt: Thưa còn hơn dày, không nhạc nền dưới giọng nói, Flash Zoom là hiệu ứng chuyển cảnh duy nhất.`
  };

  return {
    targetAudience,
    videoDuration,
    specs: TRUNGVT_STYLE_SPECS,
    timeline,
    densityComparison,
    uncertainList
  };
}

/**
 * Xuất bản bảng CapCut Markdown chuẩn Signature Đạo Diễn Trungvt
 */
export function formatTrungvtTimelineMarkdown(data) {
  let md = `### 🎬 TIMELINE HẬU KỲ SIGNATURE ĐẠO DIỄN TRUNGVT (Chuẩn CapCut)\n`;
  md += `- **Đạo diễn sáng tạo**: **${TRUNGVT_STYLE_SPECS.director}**\n`;
  md += `- **Đối tượng khán giả**: ${data.targetAudience}\n`;
  md += `- **Độ dài video**: ${data.videoDuration}\n`;
  md += `- **Font chữ chính**: **Sigmar** (Google Fonts / CapCut) | **Màu nhấn**: \`#0091ff\`\n\n`;

  md += `| Mốc giây vào | Mốc giây ra | Loại | Nội dung (IN HOA, chia dòng) | Ghi chú đặt trong CapCut |\n`;
  md += `| :---: | :---: | :---: | :--- | :--- |\n`;

  data.timeline.forEach(item => {
    md += `| ${item.inTime} | ${item.outTime} | **${item.type}** | ${item.content} | ${item.capcutNotes} |\n`;
  });

  md += `\n### 📊 ĐỐI SOÁT MẬT ĐỘ SO VỚI BẢN MẪU SIGNATURE TRUNGVT (3:36):\n`;
  md += `- **B-roll**: ${data.densityComparison.actual.broll} clip (Mẫu: ~11 clip)\n`;
  md += `- **Chữ nhấn**: ${data.densityComparison.actual.emphasisText} vị trí (Mẫu: ~9 vị trí)\n`;
  md += `- **Quote toàn màn hình**: ${data.densityComparison.actual.quote} cảnh (Mẫu: 3 cảnh)\n`;
  md += `- **Đoạn thẻ liệt kê**: ${data.densityComparison.actual.listBlocks} đoạn (Mẫu: 3 đoạn)\n\n`;

  md += `### ❓ DANH SÁCH CHỖ CẦN ĐẠO DIỄN TRUNGVT TỰ QUYẾT:\n`;
  data.uncertainList.forEach((item, idx) => {
    md += `${idx + 1}. ${item}\n`;
  });

  return md;
}
