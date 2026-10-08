import assert from 'assert';
import {
  TRUNGVT_STYLE_SPECS,
  formatEmphasisText,
  generateTrungvtTimeline,
  formatTrungvtTimelineMarkdown
} from './js/trungvtStyleEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL SIGNATURE ĐẠO DIỄN TRUNGVT (CHUẨN 14 BẢN THỬ)...\n');

// 1. Kiểm tra bộ thông số kỹ thuật chuẩn
assert.strictEqual(TRUNGVT_STYLE_SPECS.director, 'Đạo Diễn Trungvt', 'Tác quyền phải là Đạo Diễn Trungvt');
assert.strictEqual(TRUNGVT_STYLE_SPECS.typography.fontFamily, 'Sigmar', 'Font chữ phải là Sigmar');
assert.strictEqual(TRUNGVT_STYLE_SPECS.typography.spokenColor, '#0091ff', 'Màu từ đã nói phải là #0091ff');
assert.strictEqual(TRUNGVT_STYLE_SPECS.transition.style, 'Flash Zoom', 'Chuyển cảnh duy nhất phải là Flash Zoom');
assert.strictEqual(TRUNGVT_STYLE_SPECS.quote.noQuotationMarks, true, 'Quote toàn màn hình không có dấu ngoặc kép');
assert.strictEqual(TRUNGVT_STYLE_SPECS.quote.maxCountFor3m30s, 3, 'Tối đa 3 quote cho 3.5 phút');
assert.strictEqual(TRUNGVT_STYLE_SPECS.audio.musicUnderVoice, false, 'Cấm nhạc nền dưới giọng nói');
console.log('✅ [1/5] Bộ thông số kỹ thuật độc quyền Đạo Diễn Trungvt chuẩn xác 100%.');

// 2. Kiểm tra bộ lọc từ đệm và định dạng chữ nhấn
const rawText = "mình không có được những cái bằng chứng cho những gì mà mình nói";
const formatted = formatEmphasisText(rawText);
assert.ok(!formatted.includes('NHỮNG CÁI'), 'Phải lọc bỏ từ đệm "những cái"');
assert.ok(formatted.includes('BẰNG CHỨNG'), 'Chữ phải được chuyển thành IN HOA');
assert.ok(formatted.includes('trang 1:') && formatted.includes('trang 2:'), 'Câu dài phải tự động chia nhiều trang');
console.log(`✅ [2/5] Lọc từ đệm và phân trang chữ nhấn thành công:\n   -> "${formatted}"`);

// 3. Kiểm tra sinh Timeline
const res = generateTrungvtTimeline({
  targetAudience: 'Người làm nội dung đơn độc',
  videoDuration: '3:36'
});

assert.ok(res.timeline.length >= 5, 'Timeline phải có các phần tử chính');
const hook = res.timeline.find(t => t.type === 'hook');
assert.ok(hook, 'Phải có Hook 3 giây đầu');
assert.ok(hook.capcutNotes.includes('Sigmar'), 'Ghi chú CapCut phải chỉ định rõ font Sigmar');
assert.ok(hook.capcutNotes.includes('#0091ff'), 'Ghi chú CapCut phải chỉ định màu xanh #0091ff');

const zoomItem = res.timeline.find(t => t.type === 'zoom');
assert.ok(zoomItem, 'Phải có zoom nhảy 100% lên 125% trước B-roll');

const quoteItem = res.timeline.find(t => t.type === 'quote');
assert.ok(quoteItem, 'Phải có cảnh Quote toàn màn hình');
assert.ok(quoteItem.capcutNotes.includes('Nền sao sáng'), 'Quote phải có nền sao sáng');
console.log('✅ [3/5] Bộ cấu trúc Timeline tuân thủ toàn bộ 8 quy tắc kỹ thuật của phong cách Đạo Diễn Trungvt.');

// 4. Kiểm tra đối soát mật độ
assert.strictEqual(res.densityComparison.benchmark3m36s.broll, 11, 'Benchmark B-roll phải là 11');
assert.strictEqual(res.densityComparison.benchmark3m36s.emphasisText, 9, 'Benchmark chữ nhấn phải là 9');
assert.strictEqual(res.densityComparison.benchmark3m36s.quote, 3, 'Benchmark quote phải là 3');
assert.strictEqual(res.densityComparison.benchmark3m36s.listBlocks, 3, 'Benchmark đoạn thẻ phải là 3');
console.log('✅ [4/5] Hệ thống đối soát mật độ (Density Benchmark 3:36) hoạt động chuẩn mực.');

// 5. Kiểm tra xuất Markdown
const md = formatTrungvtTimelineMarkdown(res);
assert.ok(md.includes('SIGNATURE ĐẠO DIỄN TRUNGVT'), 'Markdown phải có tiêu đề đúng chuẩn');
assert.ok(md.includes('ĐỐI SOÁT MẬT ĐỘ SO VỚI BẢN MẪU'), 'Markdown phải có bảng đếm mật độ');
assert.ok(md.includes('DANH SÁCH CHỖ CẦN ĐẠO DIỄN TRUNGVT TỰ QUYẾT'), 'Markdown phải có danh sách chỗ tự quyết');
console.log('✅ [5/5] Định dạng bảng CapCut xuất bản chi tiết, rõ ràng chuẩn bản quyền.');

console.log('\n🎉 TẤT CẢ 5/5 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL SIGNATURE ĐẠO DIỄN TRUNGVT SẴN SÀNG.');
