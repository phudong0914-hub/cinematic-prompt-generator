import assert from 'assert';
import {
  OUTRO_SPECS,
  generateOutroPlan,
  formatOutroMarkdown
} from './js/ctaOutroEngine.js';

import {
  HOLLYWOOD_QC_RULES,
  auditTimeline,
  formatQcAuditMarkdown
} from './js/hollywoodQcEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL 7 (CTA & OUTRO LOOP) & SKILL 8 (MASTER HOLLYWOOD QC)...\n');

// 1. Kiểm tra Skill 7 - Thông số Outro
assert.strictEqual(OUTRO_SPECS.darkScreenHoldSec, 2.0, 'Đoạn tối phải giữ đúng 2 giây');
assert.strictEqual(OUTRO_SPECS.fadeToBlackDurationSec, 0.5, 'Fade to black trong 0.5s');

const outroPlan = generateOutroPlan({ totalDurationSec: 216 });
assert.strictEqual(outroPlan.rows.length, 4, 'Đoạn kết phải đủ 4 thành phần (chốt, CTA, loop, đoạn tối)');
const loopRow = outroPlan.rows.find(r => r.component === 'Kỹ thuật Loop');
assert.ok(loopRow, 'Phải có thành phần Seamless Loop');
console.log('✅ [1/4] Skill 7 (CTA & Outro Loop) sinh chuẩn xác 4 tầng kết thúc.');

// 2. Kiểm tra xuất Markdown Skill 7
const outroMd = formatOutroMarkdown(outroPlan);
assert.ok(outroMd.includes('| Mốc giây | Thành phần (câu chốt / CTA / đoạn tối / nhạc kết) | Nội dung chữ & Lời thoại | Ghi chú CapCut |'), 'Markdown Skill 7 đúng định dạng');
console.log('✅ [2/4] Bảng Markdown Skill 7 xuất bản chuẩn chỉ.');

// 3. Kiểm tra Skill 8 - QC Rules & Audit
assert.strictEqual(HOLLYWOOD_QC_RULES.length, 7, 'Phải có 7 tiêu chí kiểm toán cốt lõi');
const cleanAudit = auditTimeline([]);
assert.strictEqual(cleanAudit.score, 100, 'Timeline sạch phải đạt 100 điểm');
assert.strictEqual(cleanAudit.status, 'PASSED (ĐẠT CHUẨN ĐIỆN ẢNH HOLLYWOOD)', 'Trạng thái phải là Passed');

// Test phát hiện lỗi B-roll dài > 3s
const faultyTimeline = [
  { type: 'B-roll', durationSec: 4.5, content: 'B-roll quá dài' }
];
const faultyAudit = auditTimeline(faultyTimeline);
assert.ok(faultyAudit.score < 100, 'Phát hiện lỗi B-roll dài thì điểm phải bị trừ');
assert.ok(faultyAudit.issues.some(i => i.includes('vượt quá giới hạn 3 giây')), 'Phải báo cáo rõ lỗi B-roll dài');
console.log('✅ [3/4] Skill 8 (Hollywood QC) kiểm toán chính xác và phát hiện lỗi tự động.');

// 4. Kiểm tra xuất Markdown Skill 8
const qcMd = formatQcAuditMarkdown(cleanAudit);
assert.ok(qcMd.includes('BÁO CÁO KIỂM TOÁN CHẤT LƯỢNG ĐIỆN ẢNH'), 'Tiêu đề QC Report phải đúng');
assert.ok(qcMd.includes('KẾT LUẬN HỘI ĐỒNG THẨM ĐỊNH'), 'Phải có kết luận cấp phép');
console.log('✅ [4/4] Báo cáo thẩm định chất lượng xuất bản rõ ràng, chuyên nghiệp.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! HỆ SINH THÁI HOLLYWOOD ĐÃ HOÀN TẤT.');
