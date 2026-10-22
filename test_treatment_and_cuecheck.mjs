import assert from 'assert';
import {
  NARRATIVE_STRUCTURES,
  NATIVE_MOVES_CATALOG,
  generateBenchmark,
  buildDirectorTreatment,
  formatTreatmentMarkdown
} from './js/treatmentEngine.js';

import {
  generatePostTimeline,
  cueCheckTimeline,
  buildMasterTimeline
} from './js/videoTimelineEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: TREATMENT METHODOLOGY & CUECHECK ENGINE (OPUSCAR x CINEPRO)...\n');

// 1. Kiểm tra Narrative Structures & Native Moves Catalog
assert.strictEqual(NARRATIVE_STRUCTURES.length, 5, 'Phải có 5 cấu trúc tự sự chuẩn');
assert.strictEqual(NATIVE_MOVES_CATALOG.length, 5, 'Phải có 5 native moves chuẩn');
console.log('✅ [1/5] Thư viện Cấu trúc tự sự & Chiêu thức bản địa (Native Moves) sẵn sàng.');

// 2. Kiểm tra sinh Benchmark Analysis
const benchmark = generateBenchmark({
  topic: 'Cà phê rang mộc Tây Nguyên',
  style: 'Cinematic Macro Commercial'
});
assert.ok(benchmark.whatToLearn.length >= 4, 'Phải có đủ 4 bài học tích cực từ benchmark');
assert.ok(benchmark.whatNotToTake.length >= 4, 'Phải có đủ 4 điều cấm kỵ (clichés)');
console.log('✅ [2/5] Phân tích Benchmark (Learn vs Not Take) hoạt động chính xác.');

// 3. Kiểm tra dựng Treatment hoàn chỉnh
const treatment = buildDirectorTreatment({
  title: 'TVC Cà Phê Mộc 1990s',
  topic: 'Cà phê rang mộc pha phin nhôm',
  director: 'Đạo Diễn Trungvt',
  style: 'Film Noir 1990s',
  durationSec: 30,
  structureId: 'before_after_contrast',
  nativeMoveId: 'whip_zoom_macro_punch'
});

assert.strictEqual(treatment.selectedStructure.id, 'before_after_contrast');
assert.strictEqual(treatment.nativeMove.id, 'whip_zoom_macro_punch');
assert.ok(treatment.shotList.length >= 5, 'Shot list phải có ít nhất 5 phân cảnh');
assert.ok(treatment.soundDesign.keyFoleyCues.length >= 4, 'Phải có ít nhất 4 cue foley chính');
assert.strictEqual(treatment.soundDesign.masterLoudness, '-14 LUFS (EBU R128 Cinema Standard)');

const treatmentMd = formatTreatmentMarkdown(treatment);
assert.ok(treatmentMd.includes('# 🎬 DIRECTOR TREATMENT SPECIFICATION'), 'Markdown phải chuẩn format DIRECTOR.md');
assert.ok(treatmentMd.includes('THE NATIVE MOVE'), 'Markdown phải chứa phần Native Move');
console.log('✅ [3/5] Dựng Treatment 3 Hồi & Shotlist động cơ đạo diễn thành công 100%.');

// 4. Kiểm tra cueCheckTimeline trên Timeline hợp lệ
const sampleSrt = `1
00:00:00,000 --> 00:00:02,800
Chào các bạn đang làm video ngắn muốn triệu view

2
00:00:03,500 --> 00:00:06,200
Hôm nay tôi sẽ chỉ cho bạn quy trình dựng phim cực đỉnh

3
00:00:09,000 --> 00:00:12,000
Bước 1: Lên kịch bản phân cảnh chuẩn 3 giây đầu
`;
const postTimeline = generatePostTimeline({
  targetAudience: 'Content Creator',
  scriptOrSrt: sampleSrt,
  transitionStyle: 'Flash Zoom'
});

const cleanCheck = cueCheckTimeline(postTimeline.timeline);
assert.strictEqual(cleanCheck.valid, true, 'Timeline chuẩn không được có lỗi va chạm');
assert.strictEqual(cleanCheck.issues.length, 0, 'Số lỗi va chạm phải bằng 0');
console.log('✅ [4/5] cueCheckTimeline xác thực Timeline sạch đạt điểm chuẩn:', cleanCheck.score);

// 5. Kiểm tra cueCheckTimeline phát hiện va chạm đa tầng & chữ đọc quá nhanh
const problematicTimeline = [
  {
    timeRange: '00:00.0 - 00:02.0',
    startSec: 0,
    endSec: 2.0,
    type: 'hook',
    content: 'Đây là câu hook siêu dài với quá nhiều chữ không thể đọc kịp trong vòng hai giây'
  },
  {
    timeRange: '00:01.0 - 00:03.0',
    startSec: 1.0,
    endSec: 3.0,
    type: 'B-roll',
    content: 'Cảnh va chạm chồng lấn với hook'
  }
];

const conflictCheck = cueCheckTimeline(problematicTimeline);
assert.strictEqual(conflictCheck.valid, false, 'Timeline lỗi phải bị phát hiện');
assert.ok(conflictCheck.issues.some(i => i.id === 'VISUAL_LAYER_COLLISION'), 'Phải phát hiện VISUAL_LAYER_COLLISION');
assert.ok(conflictCheck.issues.some(i => i.id === 'READCHECK_OVERLOAD'), 'Phải phát hiện READCHECK_OVERLOAD');

const master = buildMasterTimeline(postTimeline);
assert.strictEqual(master.version, '2.0.0');
assert.ok(master.qaValidation);
console.log('✅ [5/5] cueCheckTimeline chặn đứng 100% va chạm thị giác & tình trạng nhồi chữ.');

console.log('\n🎉 HOÀN THÀNH: TẤT CẢ 5/5 BÀI TEST KIẾN TRÚC MỚI ĐÃ VƯỢT QUA TUYỆT ĐỐI!');
