import assert from 'assert';
import {
  TRANSITION_SPECS,
  generateTransitionAndSoundPlan,
  formatTransitionSoundMarkdown
} from './js/transitionSoundEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL CHUYỂN CẢNH & ÂM THANH...\n');

// 1. Kiểm tra nguyên tắc chuyển cảnh duy nhất & âm thanh
assert.strictEqual(TRANSITION_SPECS.singleStyleOnly, true, 'Chỉ được dùng 1 kiểu chuyển cảnh duy nhất');
assert.strictEqual(TRANSITION_SPECS.defaultStyle, 'Flash Zoom', 'Kiểu mặc định là Flash Zoom');
assert.strictEqual(TRANSITION_SPECS.sfx.outOfScene, 'Không có tiếng', 'Lúc ra cảnh tuyệt đối không có tiếng');
console.log('✅ [1/4] Bộ quy tắc chuyển cảnh đơn nhất và âm thanh chuẩn mực 100%.');

// 2. Kiểm tra sinh danh sách điểm chuyển cảnh
const plan = generateTransitionAndSoundPlan({ transitionStyle: 'Flash Zoom' });
assert.ok(plan.points.length >= 5, 'Phải có các điểm chuyển cảnh chính');

// Điểm vào cảnh mới phải có tiếng swoosh nhẹ
const intoQuote = plan.points.find(p => p.fromTo.includes('➔ Cảnh Quote'));
assert.ok(intoQuote, 'Phải có điểm vào cảnh Quote');
assert.strictEqual(intoQuote.hasTransition, 'Flash Zoom', 'Phải dùng Flash Zoom');
assert.strictEqual(intoQuote.sound, 'Swoosh nhẹ', 'Vào cảnh mới phải có swoosh nhẹ');

// Điểm ra cảnh không có tiếng
const outQuote = plan.points.find(p => p.fromTo.includes('Quote toàn màn hình ➔ Về mặt'));
assert.ok(outQuote, 'Phải có điểm thoát cảnh Quote');
assert.strictEqual(outQuote.sound, 'Không có tiếng', 'Thoát cảnh không được có tiếng');

// Thẻ hiện lên có tiếng lật giấy nhẹ và không dùng chuyển cảnh
const cardItem = plan.points.find(p => p.fromTo.includes('Thẻ'));
assert.ok(cardItem, 'Phải có mốc thẻ ý hiện lên');
assert.strictEqual(cardItem.hasTransition, 'Không', 'Thẻ hiện không dùng chuyển cảnh');
assert.strictEqual(cardItem.sound, 'Lật giấy nhẹ', 'Thẻ hiện phải có tiếng lật giấy nhẹ');

// B-roll không dùng chuyển cảnh và không có tiếng
const brollItem = plan.points.find(p => p.fromTo.includes('B-roll'));
assert.ok(brollItem, 'Phải có mốc B-roll');
assert.ok(brollItem.hasTransition.includes('mờ dần'), 'B-roll chỉ mờ dần ngắn');
assert.strictEqual(brollItem.sound, 'Không có tiếng', 'B-roll không có tiếng');
console.log('✅ [2/4] Kiểm soát chính xác từng vị trí vào/ra, loại chuyển cảnh và tiếng động.');

// 3. Kiểm tra tính đồng nhất của kiểu chuyển cảnh
const transitionsUsed = plan.points
  .map(p => p.hasTransition)
  .filter(t => t !== 'Không' && !t.includes('mờ dần'));

transitionsUsed.forEach(t => {
  assert.strictEqual(t, 'Flash Zoom', 'Tất cả các điểm chuyển cảnh bắt buộc phải cùng là Flash Zoom');
});
console.log('✅ [3/4] Đồng nhất 100% duy nhất 1 kiểu chuyển cảnh xuyên suốt video.');

// 4. Kiểm tra xuất Markdown đúng 4 cột
const md = formatTransitionSoundMarkdown(plan);
assert.ok(md.includes('| Mốc giây | Chuyển từ → sang | Có chuyển cảnh? | Tiếng động |'), 'Bảng markdown phải có đúng 4 cột');
console.log('✅ [4/4] Bảng Markdown xuất bản đúng 4 cột chuẩn.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL CHUYỂN CẢNH & ÂM THANH ĐÃ HOÀN TẤT.');
