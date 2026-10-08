/**
 * cinemaAudioDuckingEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * TRÍ TUỆ CHỌN NHẠC NỀN & MA TRẬN NÉN ÂM TỰ ĐỘNG (SMART BGM & AUDIO DUCKING)
 * Tự động tạo timeline keyframes điều tiết âm lượng nhạc nền:
 * - Khi có tiếng nói: Né sâu (-26dB đến -28dB) hoặc ngắt nhạc hoàn toàn.
 * - Khi có khoảng nghỉ: Nổi nhẹ (-18dB).
 * - Đoạn tối Outro: Tự động nổi lên dũng mãnh (-12dB) tạo dư âm điện ảnh.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const CURATED_BGM_LIBRARY = {
  introspective: {
    mood: "Trầm lắng, sâu sắc, chia sẻ kinh nghiệm",
    trackSuggestion: "Resonance of Thought (YouTube Audio Library - No Attribution)",
    tempoBpm: 75,
    duckingDb: -28,
    crescendoDb: -12
  },
  inspiring: {
    mood: "Truyền cảm hứng, khẳng định, bứt phá",
    trackSuggestion: "Rise of the Creator (YouTube Audio Library - No Attribution)",
    tempoBpm: 92,
    duckingDb: -26,
    crescendoDb: -12
  },
  minimalist: {
    mood: "Công nghệ tối giản, tinh tế, sang trọng",
    trackSuggestion: "Glass Horizon (YouTube Audio Library - No Attribution)",
    tempoBpm: 84,
    duckingDb: -28,
    crescendoDb: -14
  }
};

/**
 * Tạo tự động danh sách Keyframe điều tiết âm lượng (Audio Ducking Timeline)
 */
export function generateAudioDuckingNodes(cues = [], totalDurationSec = 216, moodKey = "introspective") {
  const bgm = CURATED_BGM_LIBRARY[moodKey] || CURATED_BGM_LIBRARY.introspective;
  const nodes = [];

  // 1. Giây đầu tiên (Hook): Bắt đầu không nhạc hoặc nhạc rất nhỏ để tiếng Swoosh nổi bật
  nodes.push({ timeSec: 0.0, volumeDb: -30, note: "Giữ âm lượng cực thấp để tiếng Swoosh ở giây 0 nổi bật nhất" });
  nodes.push({ timeSec: 3.0, volumeDb: bgm.duckingDb, note: `Né giọng nói (-${Math.abs(bgm.duckingDb)}dB)` });

  // 2. Tự động tìm các khoảng lặng giữa lời nói để đẩy nhạc nền
  if (cues && cues.length > 1) {
    for (let i = 0; i < cues.length - 1; i++) {
      const gap = cues[i + 1].startSec - cues[i].endSec;
      if (gap >= 2.0) {
        // Khoảng lặng đủ lớn để nổi nhạc nhẹ
        nodes.push({
          timeSec: parseFloat(cues[i].endSec.toFixed(1)),
          volumeDb: -18,
          note: "Khoảng lặng giữa câu: Nhạc nổi nhẹ (-18dB)"
        });
        nodes.push({
          timeSec: parseFloat((cues[i + 1].startSec - 0.2).toFixed(1)),
          volumeDb: bgm.duckingDb,
          note: "Chuẩn bị vào câu tiếp theo: Nhạc né xuống"
        });
      }
    }
  }

  // 3. Đoạn tối kết thúc (Outro): Tự động đẩy nhạc lên đỉnh điểm
  const darkStartSec = Math.max(0, totalDurationSec - 2.0);
  nodes.push({
    timeSec: parseFloat(darkStartSec.toFixed(1)),
    volumeDb: -20,
    note: "Bắt đầu đoạn tối: Đẩy âm lượng nhạc kết"
  });
  nodes.push({
    timeSec: parseFloat((darkStartSec + 1.0).toFixed(1)),
    volumeDb: bgm.crescendoDb,
    note: `Đoạn tối trọn vẹn: Đạt đỉnh âm lượng Outro (${bgm.crescendoDb}dB)`
  });
  nodes.push({
    timeSec: parseFloat(totalDurationSec.toFixed(1)),
    volumeDb: -40,
    note: "Hết video: Fade out kết thúc hoàn hảo"
  });

  return {
    selectedBgm: bgm,
    totalDurationSec,
    nodes
  };
}

export function formatAudioDuckingMarkdown(duckingPlan) {
  let md = `### 🎵 BẢN THIẾT KẾ NHẠC NỀN & AUDIO DUCKING (TỰ ĐỘNG NÉ GIỌNG)\n`;
  md += `- **Giai điệu đề xuất**: *${duckingPlan.selectedBgm.trackSuggestion}* (${duckingPlan.selectedBgm.mood})\n`;
  md += `- **Mức né giọng**: \`${duckingPlan.selectedBgm.duckingDb}dB\` | **Mức đẩy đoạn tối Outro**: \`${duckingPlan.selectedBgm.crescendoDb}dB\`\n\n`;

  md += `| Mốc thời gian | Âm lượng (dB) | Chỉ dẫn tự động CapCut / Premiere |\n`;
  md += `| :---: | :---: | :--- |\n`;

  duckingPlan.nodes.slice(0, 10).forEach(n => {
    const m = Math.floor(n.timeSec / 60);
    const s = Math.floor(n.timeSec % 60);
    const ms = Math.floor((n.timeSec % 1) * 10);
    const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${ms}`;
    md += `| ${timeStr} | **${n.volumeDb} dB** | ${n.note} |\n`;
  });

  return md;
}
