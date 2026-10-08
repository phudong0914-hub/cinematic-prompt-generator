import assert from 'assert';
import {
  cleanAndFormatWords,
  detectEmphasisPoints,
  formatEmphasisMarkdown
} from './js/emphasisTextEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL CHỮ NHẤN GIỮA VIDEO...\n');

// 1. Kiểm tra lọc từ đệm và chia dòng
const raw = "mình không có được những cái bằng chứng cho những gì mà mình nói";
const formatted = cleanAndFormatWords(raw);
assert.ok(!formatted.includes('NHỮNG CÁI'), 'Phải lọc bỏ từ đệm "những cái"');
assert.ok(formatted.includes('BẰNG CHỨNG'), 'Chữ phải được chuyển thành IN HOA');
assert.ok(formatted.includes('trang 1:') && formatted.includes('trang 2:'), 'Câu dài phải tự động chia nhiều trang');
console.log(`✅ [1/4] Bộ lọc từ đệm và phân dòng 2-4 từ/dòng thành công:\n   -> "${formatted}"`);

// 2. Kiểm tra phát hiện các loại câu đáng nhấn
const mockCues = [
  { startSec: 4.0, text: "Vấn đề lớn nhất là người mới thường thiếu bằng chứng thực tế" },
  { startSec: 9.0, text: "Nhưng thực ra khách hàng không mua vì lý do đó" },
  { startSec: 15.0, text: "Thứ khách hàng thực sự mua chính là sự tin tưởng và con người mình" },
  { startSec: 22.0, text: "Chốt lại bạn chỉ cần tập trung làm tốt 3 bước cốt lõi" }
];

const points = detectEmphasisPoints(mockCues);
assert.ok(points.length >= 3, 'Phải phát hiện được ít nhất 3 điểm nhấn');

const fullScreen = points.filter(p => p.type === 'toàn màn hình');
assert.ok(fullScreen.length <= 3, 'Tối đa chỉ được 3 câu toàn màn hình');
assert.ok(fullScreen.length >= 1, 'Phải có ít nhất 1 câu toàn màn hình từ câu thông điệp lớn');
console.log(`✅ [2/4] Phát hiện thành công ${points.length} điểm nhấn (trong đó có ${fullScreen.length} cảnh toàn màn hình).`);

// 3. Kiểm tra khoảng cách >= 3s
for (let i = 1; i < points.length; i++) {
  const gap = points[i].startSec - points[i - 1].startSec;
  assert.ok(gap >= 3.0, `Khoảng cách giữa các chữ nhấn phải >= 3 giây, thực tế: ${gap}s`);
}
console.log('✅ [3/4] Giữ vững khoảng cách >= 3 giây giữa các điểm chữ nhấn.');

// 4. Kiểm tra xuất Markdown
const md = formatEmphasisMarkdown(points);
assert.ok(md.includes('| Mốc giây | Chữ hiện (đã chia dòng) | Loại (chữ nhấn / toàn màn hình) | Vì sao đáng nhấn |'), 'Bảng markdown phải có đúng 4 cột');
console.log('✅ [4/4] Bảng Markdown xuất bản đúng 4 cột chuẩn.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL CHỮ NHẤN ĐÃ HOÀN TẤT.');
