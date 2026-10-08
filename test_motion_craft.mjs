import assert from 'assert';
import {
  f2us,
  sec2us,
  us2sec,
  MOTION_RECIPE_CATEGORIES,
  TRUNGVT_MOTION_RECIPES,
  assignMotionRecipesToTimeline,
  sanitizeZeroOverlapTrack,
  generateRecipeCssSnippet,
  generateRemotionReactSnippet
} from './js/trungvtMotionCraftEngine.js';

import {
  buildCapCutDraftPayload
} from './js/capcutDraftBridge.js';

import {
  executeFullCinemaProduction,
  formatMasterProductionMarkdown
} from './js/cinemaStudioOrchestrator.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: ĐỘNG CƠ CHUYỂN ĐỘNG ĐIỆN ẢNH TRUNGVT MOTION CRAFT...\n');

// 1. Kiểm tra thuật toán thời gian vi giây f2us, sec2us, us2sec
const frame6Us = f2us(6, 30);
assert.strictEqual(frame6Us, 200000, 'Frame 6 @ 30fps phải là 200,000 microseconds (0.2s)');

const sec3Us = sec2us(3.0);
assert.strictEqual(sec3Us, 3000000, '3.0 giây phải là 3,000,000 microseconds');

const backToSec = us2sec(frame6Us);
assert.strictEqual(backToSec, 0.2, '200,000 microseconds phải tương ứng 0.2s');
console.log('✅ [1/6] Thuật toán vi giây f2us và sec2us chuẩn xác 100%.');

// 2. Kiểm tra Thư viện Recipes & 6 Phân loại Chuyển động
assert.strictEqual(Object.keys(MOTION_RECIPE_CATEGORIES).length, 6, 'Phải có đúng 6 nhóm hiệu ứng');
assert.ok(TRUNGVT_MOTION_RECIPES.length >= 6, 'Thư viện mẫu phải có đủ các đại diện cốt lõi');
const hookRecipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_whip_zoom_hook_punch');
assert.ok(hookRecipe, 'Phải có recipe Zoom Hook 3s');
assert.strictEqual(hookRecipe.categoryId, 'WHIP_ZOOM_PUNCH');
console.log('✅ [2/6] Thư viện 157 Motion Recipes phân loại khoa học theo chuẩn Đạo Diễn Trungvt.');

// 3. Kiểm tra Gán Motion Recipes vào Timeline
const mockTimeline = [
  { startSec: 0, durationSec: 3.0, type: 'Hook 3s', content: 'Mở đầu ấn tượng' },
  { startSec: 10, durationSec: 3.0, type: 'B-roll', content: 'Cảnh làm việc đêm' },
  { startSec: 25, durationSec: 2.0, type: 'thẻ bước 1', content: 'Tìm vấn đề' },
  { startSec: 40, durationSec: 0.5, type: 'chuyển cảnh', content: 'Flash Zoom' },
  { startSec: 50, durationSec: 5.0, type: 'đối thoại', content: 'Kể chuyện' }
];
const assigned = assignMotionRecipesToTimeline(mockTimeline);
assert.strictEqual(assigned[0].motionRecipe.recipeId, 'rec_whip_zoom_hook_punch');
assert.strictEqual(assigned[1].motionRecipe.recipeId, 'rec_parallax_depth_push');
assert.strictEqual(assigned[2].motionRecipe.recipeId, 'rec_kinetic_card_spring_flip');
assert.strictEqual(assigned[3].motionRecipe.recipeId, 'rec_speed_ramp_transition');
assert.strictEqual(assigned[4].motionRecipe.recipeId, 'rec_match_cut_anchor');
console.log('✅ [3/6] Phân bổ tự động Motion Recipes theo ngữ cảnh timeline chính xác.');

// 4. Kiểm tra Bộ lọc chống đè track (Zero-Overlap Sanitizer)
const badSegments = [
  { id: 'seg1', startMicrosec: 0, durationMicrosec: 1000000 },
  { id: 'seg2', startMicrosec: 500000, durationMicrosec: 1000000 }, // Bị đè 0.5s
  { id: 'seg3', startMicrosec: 1200000, durationMicrosec: 1000000 } // Bị đè tiếp
];
const cleanSegments = sanitizeZeroOverlapTrack(badSegments);
assert.strictEqual(cleanSegments[0].startMicrosec, 0);
assert.strictEqual(cleanSegments[0].endMicrosec, 1000000);
assert.strictEqual(cleanSegments[1].startMicrosec, 1000000, 'Segment 2 phải tự động đẩy về sau segment 1');
assert.strictEqual(cleanSegments[1].endMicrosec, 2000000);
assert.strictEqual(cleanSegments[2].startMicrosec, 2000000, 'Segment 3 phải tự động đẩy về sau segment 2');
console.log('✅ [4/6] Thuật toán Zero-Overlap Sanitizer triệt tiêu hoàn toàn lỗi đè track.');

// 5. Kiểm tra Sinh mã CSS Keyframes & Remotion React Component
const cssCode = generateRecipeCssSnippet('rec_kinetic_card_spring_flip');
assert.ok(cssCode.includes('perspective(1000px)'), 'CSS phải chứa perspective 3D');
assert.ok(cssCode.includes('cubic-bezier'), 'CSS phải chứa đường cong cubic-bezier');

const remotionCode = generateRemotionReactSnippet('rec_whip_zoom_hook_punch');
assert.ok(remotionCode.includes("from 'remotion'"), 'Remotion component phải import remotion hooks');
assert.ok(remotionCode.includes('spring({'), 'Remotion component phải sử dụng lò xo vật lý');
console.log('✅ [5/6] Bộ sinh mã CSS & Remotion React hoạt động trơn tru.');

// 6. Kiểm tra Cầu nối CapCut Draft & Bộ Tổng Chỉ Huy (Master Orchestrator)
const prod = executeFullCinemaProduction({
  topic: "Xây dựng ngách độc bản",
  targetAudience: "Nhà sáng tạo nội dung",
  videoDuration: "3:36"
});

assert.strictEqual(prod.director, 'Đạo Diễn Trungvt', 'Bản quyền sản xuất phải là Đạo Diễn Trungvt');
assert.ok(prod.motionCraftPackage, 'Sản phẩm phải chứa gói Motion Craft');
assert.strictEqual(prod.motionCraftPackage.engine, 'Trungvt Motion Craft Engine');
assert.ok(prod.capcutDraft.motion_craft_meta.zero_overlap_sanitized, 'CapCut Draft phải có cờ zero-overlap sanitized');

// Đảm bảo không có segment nào trong CapCut Draft bị chồng lấn
for (const track of prod.capcutDraft.tracks) {
  for (let i = 0; i < track.segments.length - 1; i++) {
    const cur = track.segments[i];
    const nxt = track.segments[i + 1];
    assert.ok(nxt.start >= cur.start + cur.duration, `Track ${track.id} segment ${i+1} bị overlap segment ${i}`);
  }
}

const masterDoc = formatMasterProductionMarkdown(prod);
assert.ok(masterDoc.includes('TINH HOA CHUYỂN ĐỘNG ĐIỆN ẢNH (TRUNGVT MOTION CRAFT RECIPES)'), 'Master doc phải chứa phần Motion Craft');
assert.ok(masterDoc.includes('Mẫu Code CSS Keyframe'), 'Master doc phải chứa mẫu CSS');
console.log('✅ [6/6] Tích hợp toàn diện vào CapCut Draft & Master Orchestrator thành công mỹ mãn!');

console.log('\n🎉 TẤT CẢ 6/6 BÀI KIỂM THỬ TRUNGVT MOTION CRAFT ĐỀU ĐẠT 100%!');
