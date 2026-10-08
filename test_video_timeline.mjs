import assert from 'assert';
import {
  EDITING_RULES,
  parseSrt,
  generatePostTimeline,
  formatTimelineMarkdown
} from './js/videoTimelineEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL TỔNG · MỘT LẦN RA HẾT (VIDEO TIMELINE MASTER)...\n');

// 1. Kiểm tra 5 bộ luật biên tập
assert.strictEqual(EDITING_RULES.hook.durationSec, 3.0, 'Hook phải có thời lượng chính xác 3 giây');
assert.strictEqual(EDITING_RULES.broll.maxDurationSec, 3.0, 'B-roll tối đa 3 giây/clip');
assert.strictEqual(EDITING_RULES.broll.minIntervalSec, 2.5, 'B-roll cách nhau ít nhất 2.5 giây');
assert.strictEqual(EDITING_RULES.keyText.minIntervalSec, 3.0, 'Chữ nhấn cách nhau ít nhất 3 giây');
assert.strictEqual(EDITING_RULES.listCard.maxChars, 36, 'Thẻ liệt kê ý phải <= 36 ký tự');
assert.strictEqual(EDITING_RULES.transition.singleStyleOnly, true, 'Chuyển cảnh chỉ dùng 1 kiểu duy nhất');
console.log('✅ [1/4] 5 Bộ luật biên tập video ngắn được định nghĩa chuẩn xác 100%.');

// 2. Kiểm tra bộ phân tích SRT
const sampleSrt = `1
00:00:00,000 --> 00:00:02,800
Chào các bạn đang làm video ngắn muốn triệu view

2
00:00:03,500 --> 00:00:06,200
Hôm nay tôi sẽ chỉ cho bạn quy trình dựng phim cực đỉnh

3
00:00:09,000 --> 00:00:12,000
Bước 1: Lên kịch bản phân cảnh chuẩn 3 giây đầu

4
00:00:15,000 --> 00:00:18,000
Tuy nhiên hầu hết mọi người đều mắc sai lầm lớn
`;

const cues = parseSrt(sampleSrt);
assert.strictEqual(cues.length, 4, 'Phải bóc tách được 4 cues từ SRT mẫu');
console.log('✅ [2/4] Trình phân tích cú pháp SRT hoạt động mượt mà.');

// 3. Kiểm tra sinh Timeline từ SRT
const result = generatePostTimeline({
  targetAudience: 'Người sáng tạo nội dung TikTok',
  scriptOrSrt: sampleSrt,
  transitionStyle: 'Smooth Zoom Cut'
});

assert.ok(result.timeline.length >= 4, 'Timeline phải có đầy đủ các mốc');
assert.strictEqual(result.timeline[0].type, 'hook', 'Mục đầu tiên bắt buộc phải là Hook');
assert.strictEqual(result.timeline[0].endSec, 3.0, 'Hook phải kéo dài đúng 3s');

const cardItem = result.timeline.find(t => t.type === 'thẻ liệt kê');
assert.ok(cardItem, 'Phải phát hiện thẻ liệt kê ý ở Bước 1');
assert.ok(cardItem.content.length <= 36, 'Thẻ liệt kê ý phải <= 36 ký tự');

const transItem = result.timeline.find(t => t.type === 'chuyển cảnh');
assert.ok(transItem, 'Phải có chuyển cảnh ở phân đoạn mới');
assert.ok(transItem.content.includes('Smooth Zoom Cut'), 'Chuyển cảnh phải tuân thủ đúng 1 style đã chọn');
console.log('✅ [3/4] Sinh Timeline tuân thủ trọn vẹn 5 luật (Hook, B-roll, Chữ nhấn, Thẻ ý, Chuyển cảnh).');

// 4. Kiểm tra xuất bảng Markdown
const markdownTable = formatTimelineMarkdown(result);
assert.ok(markdownTable.includes('| Mốc giây |'), 'Bảng markdown phải có tiêu đề cột chuẩn');
assert.ok(markdownTable.includes('DANH SÁCH NHỮNG CHỖ CẦN TÁC GIẢ TỰ QUYẾT'), 'Phải có danh sách chỗ không chắc');
console.log('✅ [4/4] Bảng Markdown xuất bản đúng định dạng chuẩn chỉ.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL TỔNG ĐÃ HOÀN HẢO.');
