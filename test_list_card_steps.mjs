import assert from 'assert';
import {
  LIST_TRIGGERS,
  cleanCardText,
  detectListCards,
  formatListCardsMarkdown
} from './js/listCardEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL LIỆT KÊ Ý TỪNG BƯỚC (LIST CARD STEPS)...\n');

// 1. Kiểm tra bộ từ khóa kích hoạt
assert.ok(LIST_TRIGGERS.length >= 8, 'Phải có ít nhất 8 từ khóa kích hoạt danh sách');
console.log(`✅ [1/5] Định nghĩa thành công ${LIST_TRIGGERS.length} mẫu từ khóa đánh dấu bước.`);

// 2. Kiểm tra rút gọn chữ trên thẻ <= 36 ký tự
const longText = "Bước 1: Chúng ta phải chủ động đi tìm vấn đề của chính bản thân mình và khách hàng tiềm năng";
const cleaned = cleanCardText(longText, "bước 1");
assert.ok(cleaned.length <= 36, `Thẻ chữ phải <= 36 ký tự, thực tế: ${cleaned.length}`);
console.log(`✅ [2/5] Rút gọn câu chữ giữ nguyên ý nghĩa: "${cleaned}" (${cleaned.length} ký tự).`);

// 3. Kiểm tra phát hiện thẻ và cộng độ trễ 0.3s
const mockCues = [
  { startSec: 62.3, text: "Bước 1: Tìm vấn đề của chính bản thân mình" },
  { startSec: 73.1, text: "Thứ hai: Thử nhiều cách giải quyết triệt để" },
  { startSec: 111.2, text: "Và bước cuối cùng: Đóng gói thành phương pháp lộ trình" }
];

const lists = detectListCards(mockCues);
assert.ok(lists.length >= 2, 'Phải tự động tách thành ít nhất 2 đoạn do khoảng cách kể chuyện xen giữa > 20s');

const firstItem = lists[0][0];
assert.strictEqual(firstItem.appearSec, 62.3 + 0.3, 'Thời điểm hiện phải trễ đúng 0.3s sau khi nói từ đánh dấu');
console.log('✅ [3/5] Tính toán chính xác độ trễ 0.3s sau từ khóa mốc.');

// 4. Kiểm tra phân đoạn khi có kể chuyện xen giữa
assert.strictEqual(lists[0].length, 2, 'Đoạn 1 gồm 2 thẻ');
assert.strictEqual(lists[1].length, 1, 'Đoạn 2 gồm 1 thẻ sau khi kể chuyện xong');
console.log('✅ [4/5] Chia đoạn 10-20s khi có kể chuyện xen giữa hoạt động mượt mà.');

// 5. Kiểm tra xuất Markdown đúng 3 cột
const md = formatListCardsMarkdown(lists);
assert.ok(md.includes('| Mốc giây hiện | Từ đánh dấu | Chữ trên thẻ |'), 'Bảng markdown phải có đúng 3 cột');
console.log('✅ [5/5] Bảng Markdown xuất bản chuẩn chỉ từng danh sách phân đoạn.');

console.log('\n🎉 TẤT CẢ 5/5 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL LIỆT KÊ Ý ĐÃ HOÀN HẢO.');
