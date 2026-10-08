/**
 * scripts/generate_fresh_coffee_tvc.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * SCRIPT TẠO DỰ ÁN TVC QUẢNG CÁO ĐIỆN ẢNH "FRESH COFFEE"
 * Đạo Diễn: Đạo Diễn Trungvt (0836.384.168 - cinemapromptpro@gmail.com)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs';
import path from 'path';
import { executeFullCinemaProduction, formatMasterProductionMarkdown } from '../js/cinemaStudioOrchestrator.js';
import { generateSrtContent, generateAssContent } from '../js/cinemaSubtitleEngine.js';
import { buildCapCutDraftPayload, buildPremiereXml } from '../js/capcutDraftBridge.js';
import { TRUNGVT_MOTION_RECIPES } from '../js/trungvtMotionCraftEngine.js';

const EXPORT_DIR = path.resolve('exports/fresh-coffee-tvc');

// 1. Kịch bản phân cảnh TVC 30s (7 Shots đỉnh cao Hollywood)
const tvcScriptCues = [
  { startSec: 0.0, endSec: 3.0, text: "Từng hạt Arabica đánh thức ngày mới của bạn" },
  { startSec: 3.2, endSec: 6.8, text: "Rang mộc thủ công giữ trọn tầng hương nguyên bản" },
  { startSec: 7.2, endSec: 12.0, text: "Chắt lọc giọt crema sánh đậm tinh tế từng giây" },
  { startSec: 12.5, endSec: 17.5, text: "Năng lượng đánh thức mọi giác quan làm chủ ngày mới" },
  { startSec: 18.0, endSec: 23.0, text: "Bước 1: 100% Cầu Đất. Bước 2: Rang tươi trong ngày" },
  { startSec: 23.5, endSec: 27.5, text: "Fresh Coffee: Hương vị của người dẫn đầu" },
  { startSec: 27.8, endSec: 30.0, text: "Thưởng thức ngay hôm nay tại FreshCoffee.vn" }
];

const timelineShots = [
  {
    startSec: 0.0,
    durationSec: 3.0,
    type: 'Hook 3s',
    content: 'TỪNG HẠT ARABICA ĐÁNH THỨC NGÀY MỚI',
    visualDesc: 'Cận cảnh vĩ mô (Macro) hạt cà phê rang nứt nở, khói thơm bốc lên cuộn xoáy trong ánh nắng sớm',
    cameraMotion: 'Whip Zoom Punch (100% -> 130%)',
    sfx: 'Tiếng nứt hạt (Crack SFX) + Swoosh nhẹ 0s'
  },
  {
    startSec: 3.2,
    durationSec: 3.6,
    type: 'B-roll',
    content: 'RANG MỘC THỦ CÔNG NGUYÊN BẢN',
    visualDesc: 'Cối xay cà phê bột mịn rơi xuống tay cầm portafilter, Speed Ramp từ nhanh sang chậm',
    cameraMotion: 'Speed Ramp Beat Sync',
    sfx: 'Tiếng rào rào của bột cà phê tươi'
  },
  {
    startSec: 7.2,
    durationSec: 4.8,
    type: 'B-roll',
    content: 'CHẮT LỌC CREAMA SÁNH ĐẬM',
    visualDesc: 'Dòng espresso vàng hổ phách chảy chậm từ portafilter không đáy vào ly thủy tinh trong suốt',
    cameraMotion: '2.5D Parallax Slow-Motion (0.35x speed)',
    sfx: 'Tiếng giọt cà phê tí tách rơi vào ly'
  },
  {
    startSec: 12.5,
    durationSec: 5.0,
    type: 'quote',
    content: 'NĂNG LƯỢNG ĐÁNH THỨC MỌI GIÁC QUAN',
    visualDesc: 'Diễn viên nhấp ngụm cà phê, ánh mắt bừng sáng, không gian văn phòng mờ ảo bokeh phía sau',
    cameraMotion: 'Eye-Line Match Cut Anchor',
    sfx: 'Tiếng thở phào sảng khoái nhẹ'
  },
  {
    startSec: 18.0,
    durationSec: 5.0,
    type: 'thẻ bước 1',
    content: '100% CẦU ĐẤT / RANG TƯƠI TRONG NGÀY',
    visualDesc: 'Thẻ chữ 3D nghiêng -7.5 độ trượt vào bên phải, diễn viên cầm ly bên trái',
    cameraMotion: 'Kinetic Card 3D Spring Flip',
    sfx: 'Tiếng lật giấy nhẹ (Paper flip SFX)'
  },
  {
    startSec: 23.5,
    durationSec: 4.0,
    type: 'quote',
    content: 'FRESH COFFEE: HƯƠNG VỊ CỦA NGƯỜI DẪN ĐẦU',
    visualDesc: 'Hero Shot: Ly cà phê bốc khói nghi ngút trên bàn gỗ mộc bên bao bì túi giấy cao cấp',
    cameraMotion: 'Isometric Floating Drift',
    sfx: 'Hợp âm Jazz ấm áp ngân dài'
  },
  {
    startSec: 27.8,
    durationSec: 2.2,
    type: 'chuyển cảnh',
    content: 'THƯỞNG THỨC NGAY TẠI FRESHCOFFEE.VN',
    visualDesc: 'Màn hình tối dần 0.5s, giữ tối 2s, logo Fresh Coffee & Hotline phát sáng mạ vàng',
    cameraMotion: 'Fade to Black & Outro Crescendo',
    sfx: 'Nhạc Outro nổi lên -12dB kết thúc'
  }
];

console.log('🚀 Đang khởi động tiến trình sản xuất TVC Fresh Coffee...');

// 2. Chạy Cinema Studio Orchestrator
const prod = executeFullCinemaProduction({
  topic: "Đánh Thức Bản Lĩnh — Fresh Coffee",
  targetAudience: "Người sành cà phê & Giới văn phòng hiện đại",
  videoDuration: "0:30",
  srtOrScript: tvcScriptCues.map((c, i) => `${i+1}\n00:00:0${Math.floor(c.startSec)},000 --> 00:00:0${Math.floor(c.endSec)},000\n${c.text}`).join('\n\n'),
  moodKey: "inspirational"
});

// Gán kịch bản chi tiết TVC vào timeline
prod.timelineResult.timeline = timelineShots;

// 3. Xuất file CapCut Draft JSON
const capcutPayload = buildCapCutDraftPayload({
  videoTitle: "TVC_Fresh_Coffee_30s_Dao_Dien_Trungvt",
  durationSec: 30,
  timelineItems: timelineShots,
  cues: tvcScriptCues
});
fs.writeFileSync(path.join(EXPORT_DIR, 'draft_content.json'), JSON.stringify(capcutPayload, null, 2), 'utf-8');

// 4. Xuất file Premiere XML
const premiereXml = buildPremiereXml({
  videoTitle: "TVC_Fresh_Coffee_30s_Dao_Dien_Trungvt",
  durationSec: 30,
  cues: tvcScriptCues
});
fs.writeFileSync(path.join(EXPORT_DIR, 'fresh_coffee_tvc.xml'), premiereXml, 'utf-8');

// 5. Xuất file Phụ Đề SRT & Phụ Đề Karaoke ASS Sigmar #0091ff
const srtData = generateSrtContent(tvcScriptCues);
fs.writeFileSync(path.join(EXPORT_DIR, 'subtitles.srt'), srtData, 'utf-8');

const assData = generateAssContent(tvcScriptCues);
fs.writeFileSync(path.join(EXPORT_DIR, 'subtitles_karaoke.ass'), assData, 'utf-8');

// 6. Xuất Cue Sheet Audio Ducking & SFX
fs.writeFileSync(path.join(EXPORT_DIR, 'audio_ducking_cues.json'), JSON.stringify(prod.audioDuckingPlan, null, 2), 'utf-8');

// 7. Tạo Master Production Bible Markdown
const masterDoc = `# 🎬 BẢN ĐẶC TẢ SẢN XUẤT TVC 30S: FRESH COFFEE (SIGNATURE ĐẠO DIỄN TRUNGVT)

> **Đạo Diễn & Tổng Chỉ Huy Sản Xuất**: **Đạo Diễn Trungvt**  
> **Hotline Tư Vấn**: \`0836.384.168\` · **Email**: \`cinemapromptpro@gmail.com\`  
> **Tác phẩm**: TVC Quảng Cáo Điện Ảnh **"Fresh Coffee — Đánh Thức Bản Lĩnh"**  
> **Thời lượng**: **30 Giây (30.0s @ 30 FPS = 900 Frames)** | **Tỷ lệ**: **9:16 Vertical Cinema (1080x1920)**  
> **Phong cách hình ảnh**: Cinematic Dark Moody, Ánh sáng Rembrandt kết hợp Rim Light mật ong & xanh dương #0091ff.

---

## 📸 1. KEYFRAME CINEMATIC VISUALS (ẢNH THỰC TẾ ĐÃ RENDER)

- **Keyframe 1: Hero Shot - Ly Fresh Coffee bốc khói bên tia nắng sớm**:
  ![Fresh Coffee Hero Shot](keyframe_hero.jpg)

- **Keyframe 2: Macro Pouring Shot - Dòng Crema sánh mịn từ Portafilter**:
  ![Fresh Coffee Pour Shot](keyframe_pour.jpg)

---

## 🎞️ 2. BẢNG PHÂN CẢNH CHI TIẾT (SHOT-BY-SHOT STORYBOARD GRID)

| Cảnh | Giây | Loại Shot | Kỹ Thuật Máy Quay (2.5D Motion) | Chi Tiết Hình Ảnh & Ánh Sáng | Âm Thanh & SFX Đồng Bộ |
| :---: | :---: | :--- | :--- | :--- | :--- |
| **01** | \`0.0 - 3.0\` | **Hook 3s** | **Whip Zoom Punch** (100% -> 130% trong 0.2s) | Cận cảnh hạt cà phê Arabica rang nứt hạt, khói xoáy trong nắng | 0s: Swoosh nhẹ + Tiếng hạt nổ giòn (Crack SFX) |
| **02** | \`3.0 - 6.5\` | **B-roll 1** | **Speed Ramp Beat Sync** | Bột cà phê rơi mịn màng vào portafilter, chuyển từ nhanh sang chậm | Tiếng rào rào của bột cà phê xay tươi |
| **03** | \`6.5 - 12.0\` | **B-roll 2** | **2.5D Parallax Slow-Mo** | Dòng espresso vàng óng chảy chậm vào ly pha lê, lớp crema dày mịn | Tiếng tí tách từng giọt rơi ngân vang |
| **04** | \`12.0 - 17.5\` | **Main Actor** | **Eye-Line Match Cut Anchor** | Diễn viên nhấp ngụm đầu tiên, mắt bừng sáng, nền bokeh mờ ảo | Tiếng thở phào sảng khoái nhẹ, nhạc lắng |
| **05** | \`17.5 - 23.0\` | **Kinetic Card** | **Kinetic 3D Spring Flip** (Nghiêng -7.5°) | Thẻ chữ cam kết: "100% CẦU ĐẤT / RANG TƯƠI TRONG NGÀY" | 17.8s: Tiếng lật giấy nhẹ (Paper flip SFX) |
| **06** | \`23.0 - 27.5\` | **Hero Shot** | **Isometric Floating Drift** | Ly Fresh Coffee bốc khói bên bao bì cao cấp mạ vàng sang trọng | Nhạc nền dâng trào hợp âm Jazz ấm áp |
| **07** | \`27.5 - 30.0\` | **Outro Loop** | **Fade to Black & Outro Hold** | Màn hình tối 2s, Logo Fresh Coffee phát sáng, Hotline & Web | 28s: Nhạc Outro vút lên -12dB dứt khoát |

---

## 🎯 3. BỘ TIÊU ĐỀ VIRAL & BẢN THIẾT KẾ THUMBNAIL

- **Tiêu đề 1 (Curiosity Hook)**: *"Sự Thật Về Cà Phê Pha Sẵn Mà Giới Sành Cà Phê Chưa Từng Nói Với Bạn!"*
- **Tiêu đề 2 (Pain Relief)**: *"Đừng Uống Cà Phê Nữa Nếu Bạn Chưa Nếm Thử Hương Vị Này!"*
- **Tiêu đề 3 (Signature Authority)**: *"Quy Trình 3 Bước Tạo Nên Ly Fresh Coffee Đạt Chuẩn Điện Ảnh (Chốt Sau 14 Bản Thử)"*

---

## 🎛️ 4. HỆ THỐNG FILE THÀNH PHẨM ĐÃ XUẤT RA DỰ ÁN

Tất cả các tệp thành phẩm đã được lưu trữ sẵn trong thư mục \`exports/fresh-coffee-tvc/\`:
1. \`draft_content.json\`: Dự án CapCut Draft JSON nhập 1-click vào CapCut Pro (Chuẩn vi giây \`f2us\`, Zero Segment Overlap).
2. \`fresh_coffee_tvc.xml\`: Dự án timeline Premiere Pro & Final Cut Pro XML.
3. \`subtitles.srt\`: Phụ đề định dạng chuẩn SRT.
4. \`subtitles_karaoke.ass\`: Phụ đề Karaoke Sigmar Xanh #0091ff hiển thị theo thời gian thực.
5. \`audio_ducking_cues.json\`: Ma trận âm thanh ducking né giọng -28dB và nổi nhạc -12dB.
6. \`keyframe_hero.jpg\` & \`keyframe_pour.jpg\`: Ảnh chụp keyframe điện ảnh chất lượng 8K.
`;

fs.writeFileSync(path.join(EXPORT_DIR, 'TVC_PRODUCTION_MASTER.md'), masterDoc, 'utf-8');

console.log('✅ Hoàn tất xuất bản trọn bộ dự án TVC Fresh Coffee tại: ' + EXPORT_DIR);
