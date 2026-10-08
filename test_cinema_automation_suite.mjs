import assert from 'assert';
import {
  generateSrtContent,
  generateAssContent,
  generateBilingualSubtitlePackage,
  SUBTITLE_STYLES
} from './js/cinemaSubtitleEngine.js';

import {
  generateCinemaTitleSuite,
  formatCinemaTitleMarkdown
} from './js/cinemaTitleEngine.js';

import {
  generateAudioDuckingNodes,
  formatAudioDuckingMarkdown
} from './js/cinemaAudioDuckingEngine.js';

import {
  buildCapCutDraftPayload,
  buildPremiereXml
} from './js/capcutDraftBridge.js';

import {
  executeFullCinemaProduction,
  formatMasterProductionMarkdown
} from './js/cinemaStudioOrchestrator.js';

import cinemaStudioHandler from './api/cinema-studio.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: BỘ CÔNG CỤ TỰ ĐỘNG HÓA CINEMA ĐẲNG CẤP THẾ GIỚI...\n');

// 1. Kiểm tra Khối Phụ đề Karaoke & Song ngữ
const mockCues = [
  { startSec: 0.0, endSec: 2.8, text: "Chào các bạn làm video một mình" },
  { startSec: 4.0, endSec: 7.2, text: "Hôm nay tôi chia sẻ cách tạo ra ngách độc bản" }
];

const srt = generateSrtContent(mockCues);
assert.ok(srt.includes('00:00:00,000 --> 00:00:02,800'), 'SRT timestamp sai');
assert.ok(srt.includes('Chào các bạn làm video một mình'), 'SRT text thiếu');

const ass = generateAssContent(mockCues);
assert.ok(ass.includes('Sigmar'), 'ASS phải chứa font Sigmar');
assert.ok(ass.includes('&H00FF9100&'), 'ASS phải có mã màu xanh #0091ff');
assert.ok(ass.includes('{\\k'), 'ASS phải chứa thẻ karaoke {\\k...}');

const biling = generateBilingualSubtitlePackage(mockCues);
assert.strictEqual(biling.totalCues, 2, 'Tổng số cues phải là 2');
console.log('✅ [1/6] Khối Phụ đề Karaoke Sigmar Xanh #0091ff (.srt & .ass) hoạt động hoàn hảo.');

// 2. Kiểm tra Khối Tiêu đề & Thumbnail
const titleSuite = generateCinemaTitleSuite({ topic: "Tạo ra ngách", targetAudience: "người làm video một mình" });
assert.strictEqual(titleSuite.titles.length, 3, 'Phải có đủ 3 tiêu đề viral');
assert.ok(titleSuite.thumbnailBlueprint.lighting.includes('Rim Light xanh dương #0091ff'), 'Thumbnail phải có Rim light xanh #0091ff');
console.log('✅ [2/6] Khối Tiêu đề Viral & Bản thiết kế Thumbnail triệu view sẵn sàng.');

// 3. Kiểm tra Khối BGM & Audio Ducking
const ducking = generateAudioDuckingNodes(mockCues, 216, 'introspective');
assert.ok(ducking.nodes.length >= 4, 'Phải có các điểm keyframe ducking');
const outroCrescendo = ducking.nodes.find(n => n.volumeDb === -12);
assert.ok(outroCrescendo, 'Phải có điểm nổi nhạc -12dB ở đoạn tối');
console.log('✅ [3/6] Khối Nhạc nền & Ma trận Audio Ducking tự động né giọng hoạt động chuẩn xác.');

// 4. Kiểm tra Cầu nối CapCut Draft & Premiere XML
const capcutPayload = buildCapCutDraftPayload({
  videoTitle: "Test Video",
  durationSec: 216,
  timelineItems: [{ type: 'B-roll', startSec: 10, durationSec: 3 }],
  cues: mockCues
});
assert.strictEqual(capcutPayload.canvas_config.ratio, "9:16", 'Canvas phải là 9:16 vertical');
assert.ok(capcutPayload.tracks.length >= 3, 'Phải có đủ các track video, text, sfx');

const xml = buildPremiereXml({ videoTitle: "Test Video", durationSec: 216 });
assert.ok(xml.includes('<?xml version="1.0" encoding="UTF-8"?>'), 'Premiere XML phải hợp lệ');
assert.ok(xml.includes('<sequence id="sequence-1">'), 'XML phải chứa sequence');
console.log('✅ [4/6] Cầu nối CapCut Draft JSON & Premiere XML 1-Click xuất file chuẩn chỉ.');

// 5. Kiểm tra Bộ Tổng Chỉ Huy (Cinema Studio Orchestrator)
const prod = executeFullCinemaProduction({
  topic: "Xây dựng thương hiệu cá nhân",
  targetAudience: "chuyên gia sáng tạo nội dung",
  videoDuration: "3:36"
});
assert.strictEqual(prod.director, 'Đạo Diễn Trungvt', 'Tác quyền phải là Đạo Diễn Trungvt');
assert.ok(prod.qcResult.score >= 90, 'Chất lượng QC phải đạt trên 90 điểm');
const masterDoc = formatMasterProductionMarkdown(prod);
assert.ok(masterDoc.includes('GÓI SẢN XUẤT CINEMA TỰ ĐỘNG HÓA TOÀN DIỆN'), 'Master document phải có tiêu đề đúng');
console.log('✅ [5/6] Bộ Tổng Chỉ Huy (Master Orchestrator) liên kết thông suốt 5 khối thi công.');

// 6. Kiểm tra API Handler (/api/cinema-studio)
let apiCode = 0;
let apiData = null;
const mockRes = {
  setHeader: () => {},
  status: (code) => {
    apiCode = code;
    return { json: (data) => { apiData = data; } };
  }
};
const mockReq = {
  method: 'POST',
  body: { topic: "Làm chủ điện ảnh", targetAudience: "nhà làm phim độc lập" }
};

cinemaStudioHandler(mockReq, mockRes);
assert.strictEqual(apiCode, 200, 'API /api/cinema-studio phải trả về HTTP 200');
assert.strictEqual(apiData.success, true, 'API phải trả về success: true');
assert.strictEqual(apiData.director, 'Đạo Diễn Trungvt', 'API phải xác nhận tác quyền Đạo Diễn Trungvt');
console.log('✅ [6/6] API Endpoint (/api/cinema-studio) chạy đồng bộ và bảo mật.');

console.log('\n🎉 TẤT CẢ 6/6 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! HỆ THỐNG CINEMA TỰ ĐỘNG HÓA ĐÃ HOÀN TẤT.');
