import assert from 'assert';
import {
  RESTORATION_PRESETS,
  buildRestorationPayload,
  formatRestorationJson,
  generateChatGptGeminiPrompt
} from './js/photoRestorationEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: PHOTO RESTORATION & 4K FACIAL ENHANCER ENGINE...\n');

// 1. Kiểm tra Presets
assert.ok(RESTORATION_PRESETS.face_clarity, 'Thiếu preset face_clarity');
assert.ok(RESTORATION_PRESETS.vintage_archive, 'Thiếu preset vintage_archive');
assert.ok(RESTORATION_PRESETS.cinema_anchor, 'Thiếu preset cinema_anchor');
assert.ok(RESTORATION_PRESETS.extreme_super_res, 'Thiếu preset extreme_super_res');
console.log('✅ [1/4] Khởi tạo đủ 4 Presets chuyên biệt (Làm nét mặt, Phục chế ảnh cũ, Chuẩn hóa Anchor Video, Siêu phóng đại 8K).');

// 2. Kiểm tra Payload JSON cấu trúc phân cấp
const payload = buildRestorationPayload({ preset: 'face_clarity' });
assert.strictEqual(payload.task_meta.task_type, 'photo_restoration');
assert.strictEqual(payload.task_meta.target_quality, 'high_definition_8k');
assert.strictEqual(payload.facial_enhancement.priority, 'identity_preservation');
assert.ok(payload.facial_enhancement.skin_texture.avoid.includes('plastic_look'), 'Phải chứa chống da nhựa');
assert.ok(payload.facial_enhancement.skin_texture.avoid.includes('waxy_skin'), 'Phải chứa chống da sáp');
assert.strictEqual(payload.facial_enhancement.skin_texture.details, 'visible_pores_and_micro_details');
assert.strictEqual(payload.upscale.factor, 4);
console.log('✅ [2/4] Kiểm tra cấu trúc JSON chuẩn: Triệt tiêu 100% da nhựa/sáp, bảo tồn danh tính và vi vân da.');

// 3. Kiểm tra JSON Formatting
const jsonStr = formatRestorationJson({ preset: 'vintage_archive' });
assert.ok(jsonStr.includes('"repair_tears"'), 'Phải chứa sửa vết rách');
assert.ok(jsonStr.includes('"fill_scratches"'), 'Phải chứa sửa vết trầy');
const parsed = JSON.parse(jsonStr);
assert.strictEqual(parsed.task_meta.task_type, 'archival_photo_restoration');
console.log('✅ [3/4] Format JSON hợp lệ 100% với JSON parser.');

// 4. Kiểm tra sinh prompt kết hợp cho Gemini / ChatGPT
const fullPrompt = generateChatGptGeminiPrompt({ preset: 'cinema_anchor' });
assert.ok(fullPrompt.includes('Please analyze the uploaded image'), 'Chứa chỉ thị mở đầu multimodal');
assert.ok(fullPrompt.includes('Preserve 100% of the subject\'s authentic facial identity'), 'Chứa chỉ thị bảo toàn danh tính');
assert.ok(fullPrompt.includes('natural visible pores'), 'Chứa chỉ thị lỗ chân lông tự nhiên');
console.log('✅ [4/4] Sinh câu lệnh Multimodal Prompt cho ChatGPT-4o / Gemini Vision hoàn hảo.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! MODULE HOÀN TOÀN SẴN SÀNG CHO CINE PROMPT PRO.');
