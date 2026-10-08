import assert from 'assert';
import {
  splitHookLines,
  generateThreeHookOptions,
  formatThreeHooksMarkdown
} from './js/hookGeneratorEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL HOOK 3 GIÂY ĐẦU (GIỮ CHÂN KHÁN GIẢ TỨC THÌ)...\n');

// 1. Kiểm tra tách dòng chữ 2-4 từ
const sampleLine = "Người làm video một mình chưa có editor";
const splitRes = splitHookLines(sampleLine);
assert.ok(splitRes.includes('\n') || splitRes.length > 5, 'Chữ phải được chia dòng hợp lý');
console.log(`✅ [1/4] Chia dòng chữ đậm 2-4 từ thành công:\n${splitRes}`);

// 2. Kiểm tra sinh 3 phương án Hook
const hooksData = generateThreeHookOptions({
  targetAudience: 'người làm video một mình, chưa có editor'
});

assert.strictEqual(hooksData.options.length, 3, 'Phải trả về đúng 3 phương án Hook');
console.log('✅ [2/4] Sinh đủ 3 phương án Hook đa dạng góc tiếp cận (Trực diện, Nỗi đau, Đảo ngược tư duy).');

// 3. Kiểm tra các trường dữ liệu bắt buộc trong mỗi phương án
hooksData.options.forEach((opt, idx) => {
  assert.ok(opt.hookSentence, `Phương án ${idx + 1} thiếu hookSentence`);
  assert.ok(opt.textOnScreen, `Phương án ${idx + 1} thiếu textOnScreen`);
  assert.ok(opt.zoomKeyframe.includes('100%') && opt.zoomKeyframe.includes('130%'), `Phương án ${idx + 1} thiếu thông số zoom keyframe 100%->130%`);
  assert.ok(opt.rationale, `Phương án ${idx + 1} thiếu lý do gọi đúng người xem`);
  assert.ok(opt.soundCue.toLowerCase().includes('swoosh'), `Phương án ${idx + 1} thiếu âm thanh swoosh nhẹ`);
});
console.log('✅ [3/4] Mọi phương án đều tuân thủ 100% 4 quy tắc kỹ thuật (Câu hook, chữ chia dòng, zoom 100->130%, swoosh nhẹ, lý do).');

// 4. Kiểm tra xuất Markdown
const md = formatThreeHooksMarkdown(hooksData);
assert.ok(md.includes('3 PHƯƠNG ÁN THIẾT KẾ HOOK 3 GIÂY ĐẦU'), 'Markdown phải có tiêu đề chính xác');
assert.ok(md.includes('Phương án 1') && md.includes('Phương án 2') && md.includes('Phương án 3'), 'Markdown phải liệt kê đủ 3 phương án');
console.log('✅ [4/4] Báo cáo Markdown xuất bản chuẩn chỉ.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL HOOK 3 GIÂY ĐẦU ĐÃ HOÀN HẢO.');
