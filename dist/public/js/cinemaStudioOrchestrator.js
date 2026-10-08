/**
 * cinemaStudioOrchestrator.js
 * ─────────────────────────────────────────────────────────────────────────────
 * BỘ TỔNG CHỈ HUY PHÒNG DỰNG CINEMA TỰ ĐỘNG (MASTER CINEMA STUDIO ORCHESTRATOR)
 * Hợp nhất 6 khối thi công tự động chuẩn Đạo Diễn Trungvt:
 * 1. Timeline Signature Đạo Diễn Trungvt (8 skills chuẩn chỉ)
 * 2. Phụ đề Karaoke Sigmar Xanh #0091ff (.srt & .ass)
 * 3. Bộ 3 Tiêu đề Viral & Bản thiết kế Thumbnail triệu view
 * 4. Ma trận BGM & Audio Ducking tự động né giọng
 * 5. Bộ Động cơ Chuyển động Điện ảnh (Trungvt Motion Craft Engine - 157 Recipes)
 * 6. Cầu nối xuất CapCut Draft JSON & Premiere XML 1-Click (Zero Overlap Math)
 * 7. Báo cáo Thẩm định Chất lượng Điện ảnh (Hollywood QC / 100)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { generateTrungvtTimeline, formatTrungvtTimelineMarkdown } from './trungvtStyleEngine.js';
import { generateBilingualSubtitlePackage } from './cinemaSubtitleEngine.js';
import { generateCinemaTitleSuite, formatCinemaTitleMarkdown } from './cinemaTitleEngine.js';
import { generateAudioDuckingNodes, formatAudioDuckingMarkdown } from './cinemaAudioDuckingEngine.js';
import { buildCapCutDraftPayload, buildPremiereXml } from './capcutDraftBridge.js';
import { generateOutroPlan, formatOutroMarkdown } from './ctaOutroEngine.js';
import { auditTimeline, formatQcAuditMarkdown } from './hollywoodQcEngine.js';
import { parseSrt } from './videoTimelineEngine.js';
import {
  assignMotionRecipesToTimeline,
  MOTION_RECIPE_CATEGORIES,
  TRUNGVT_MOTION_RECIPES,
  generateRecipeCssSnippet,
  generateRemotionReactSnippet
} from './trungvtMotionCraftEngine.js';

export function executeFullCinemaProduction({
  targetAudience = "người làm video một mình",
  topic = "Tạo ra ngách độc bản",
  videoDuration = "3:36",
  srtOrScript = "",
  moodKey = "introspective"
} = {}) {
  const cues = srtOrScript.includes('-->') ? parseSrt(srtOrScript) : [
    { startSec: 0.0, endSec: 2.8, text: `Chào các bạn là ${targetAudience}` },
    { startSec: 4.0, endSec: 7.5, text: `Hôm nay tôi sẽ chia sẻ bí quyết ${topic}` },
    { startSec: 10.8, endSec: 14.5, text: `Khó khăn lớn nhất là không có bằng chứng thuyết phục` },
    { startSec: 34.8, endSec: 39.8, text: `Thứ khách hàng thực sự mua chính là con người mình` },
    { startSec: 62.3, endSec: 67.0, text: `Bước 1: Tìm vấn đề của chính bản thân mình` }
  ];

  const totalDurationSec = cues.length > 0 ? Math.max(216, cues[cues.length - 1].endSec + 5) : 216;

  // 1. Sinh Timeline Signature Đạo Diễn Trungvt
  const rawTimelineResult = generateTrungvtTimeline({
    targetAudience,
    videoDuration,
    srtOrTranscript: srtOrScript
  });

  // Gán Motion Craft Recipes vào từng node Timeline
  const enrichedTimeline = assignMotionRecipesToTimeline(rawTimelineResult.timeline);
  const timelineResult = {
    ...rawTimelineResult,
    timeline: enrichedTimeline
  };

  // 2. Sinh Phụ đề song ngữ & Karaoke ASS #0091ff
  const subtitleResult = generateBilingualSubtitlePackage(cues);

  // 3. Sinh Bộ Tiêu đề & Thumbnail Blueprint
  const titleSuite = generateCinemaTitleSuite({
    topic,
    targetAudience
  });

  // 4. Sinh Ma trận Audio Ducking & BGM
  const audioDuckingPlan = generateAudioDuckingNodes(cues, totalDurationSec, moodKey);

  // 5. Sinh Đoạn kết CTA & Outro Loop
  const outroPlan = generateOutroPlan({
    totalDurationSec,
    topic,
    hookFirstWords: cues[0].text
  });

  // 6. Cầu nối CapCut Draft & Premiere XML (Microsecond Precision & Zero-Overlap)
  const capcutDraft = buildCapCutDraftPayload({
    videoTitle: `${topic} - Signature Đạo Diễn Trungvt`,
    durationSec: totalDurationSec,
    timelineItems: enrichedTimeline,
    cues
  });

  const premiereXml = buildPremiereXml({
    videoTitle: `${topic} - Signature Đạo Diễn Trungvt`,
    durationSec: totalDurationSec,
    cues
  });

  // 7. Thẩm định QC Hollywood
  const qcResult = auditTimeline(timelineResult.timeline);

  // 8. Đóng gói Motion Craft Assets (Remotion & CSS)
  const motionCraftPackage = {
    engine: "Trungvt Motion Craft Engine",
    categories: MOTION_RECIPE_CATEGORIES,
    recipesCount: TRUNGVT_MOTION_RECIPES.length,
    activeRecipes: enrichedTimeline.map(t => t.motionRecipe).filter(Boolean),
    sampleCss: generateRecipeCssSnippet('rec_kinetic_card_spring_flip'),
    sampleRemotion: generateRemotionReactSnippet('rec_whip_zoom_hook_punch')
  };

  return {
    director: "Đạo Diễn Trungvt",
    contact: "0836.384.168 · cinemapromptpro@gmail.com",
    meta: {
      topic,
      targetAudience,
      videoDuration,
      totalDurationSec,
      status: "PRODUCTION_READY"
    },
    timelineResult,
    motionCraftPackage,
    subtitleResult,
    titleSuite,
    audioDuckingPlan,
    outroPlan,
    capcutDraft,
    premiereXml,
    qcResult
  };
}

/**
 * Xuất Bản Báo Cáo Sản Xuất Điện Ảnh Toàn Diện (Master Production Document)
 */
export function formatMasterProductionMarkdown(prod) {
  let md = `# 🎬 GÓI SẢN XUẤT CINEMA TỰ ĐỘNG HÓA TOÀN DIỆN (SIGNATURE ĐẠO DIỄN TRUNGVT)\n\n`;
  md += `> **Đạo Diễn & Cố Vấn Sản Xuất**: **${prod.director}** (Hotline: \`${prod.contact}\`)\n`;
  md += `> **Chủ đề**: **${prod.meta.topic}** | **Khán giả**: *${prod.meta.targetAudience}* | **Thời lượng**: \`${prod.meta.videoDuration}\`\n\n`;

  md += `## 🏆 1. BÁO CÁO THẨM ĐỊNH CHẤT LƯỢNG (HOLLYWOOD QC AUDIT)\n\n`;
  md += formatQcAuditMarkdown(prod.qcResult) + "\n\n---\n\n";

  md += `## 📌 2. BỘ TIÊU ĐỀ VIRAL & BẢN THIẾT KẾ THUMBNAIL\n\n`;
  md += formatCinemaTitleMarkdown(prod.titleSuite) + "\n\n---\n\n";

  md += `## ⏱️ 3. TIMELINE HẬU KỲ SIGNATURE ĐẠO DIỄN TRUNGVT\n\n`;
  md += formatTrungvtTimelineMarkdown(prod.timelineResult) + "\n\n---\n\n";

  md += `## 🚀 4. TINH HOA CHUYỂN ĐỘNG ĐIỆN ẢNH (TRUNGVT MOTION CRAFT RECIPES)\n\n`;
  md += `> **Động cơ**: \`${prod.motionCraftPackage.engine}\` | **Thư viện**: \`${prod.motionCraftPackage.recipesCount} Công thức Chuyển động Tiêu chuẩn\`\n\n`;
  md += `| Mốc thời gian | Loại thẻ/Cảnh | Tên Recipe Chuyển Động | Nhóm Hiệu Ứng | SFX Đi Kèm |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;
  for (const item of (prod.timelineResult.timeline || []).slice(0, 8)) {
    const r = item.motionRecipe;
    if (r) {
      md += `| ${item.time || '0:00'} | **${item.type}** | \`${r.recipeName}\` | ${r.category} | \`${r.sfxSync}\` |\n`;
    }
  }
  md += `\n**Mẫu Code CSS Keyframe (Nhúng trực tiếp vào Web/CapCut Webview):**\n\`\`\`css\n${prod.motionCraftPackage.sampleCss}\n\`\`\`\n\n---\n\n`;

  md += `## 🎵 5. NHẠC NỀN & MA TRẬN AUDIO DUCKING TỰ ĐỘNG NÉ GIỌNG\n\n`;
  md += formatAudioDuckingMarkdown(prod.audioDuckingPlan) + "\n\n---\n\n";

  md += `## 🎬 6. ĐOẠN KẾT CTA & SEAMLESS OUTRO LOOP\n\n`;
  md += formatOutroMarkdown(prod.outroPlan) + "\n\n---\n\n";

  md += `## 📦 7. CẦU NỐI XUẤT DỰ ÁN 1-CLICK (CAPCUT DRAFT & PREMIERE XML)\n\n`;
  md += `- **CapCut Draft JSON Tracks**: \`${prod.capcutDraft.tracks.length}\` tracks (Video thô 2.5D, B-roll Parallax, Phụ đề Sigmar xanh #0091ff, SFX Beat Sync).\n`;
  md += `- **Thuật toán triệt tiêu lỗi lệch thời gian**: \`f2us() microsecond math\` (Zero-Overlap Guaranteed).\n`;
  md += `- **Độ phân giải chuẩn Canvas**: \`1080x1920 (9:16 vertical cinema)\` @ \`30 FPS\`.\n`;
  md += `- **File Phụ Đề Kèm Theo**: Sẵn sàng file \`.srt\` và file \`.ass\` hiệu ứng Karaoke Word-by-word highlight.\n`;
  md += `- **Sẵn sàng Import**: Toàn bộ dự án đã được đóng gói cấu trúc để mở máy lên là dựng ngay lập tức!\n`;

  return md;
}
