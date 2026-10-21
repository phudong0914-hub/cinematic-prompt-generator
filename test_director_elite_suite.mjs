/**
 * test_director_elite_suite.mjs
 * Master validation test suite for Cine Prompt Pro v2.0 Elite Integration
 */

import { addCriticRule, auditAgainstCriticRules, getCriticRules } from './js/criticRuleEngine.js';
import { auditElementPosition, auditTimelineSafeZones } from './js/safeZoneAuditor.js';
import { applyRoughCutRules } from './js/roughCutEngine.js';
import { OpticalLinter } from './js/opticalLinter.js';
import fs from 'fs';

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${testName}`);
    failedTests++;
  }
}

console.log("\n🚀 BẮT ĐẦU KIỂM THỬ TOÀN DIỆN CÁC NĂNG LỰC TINH HOA (Master Test Suite)\n");

// ── 1. TEST CRITIC-TO-RULE ADAPTIVE ENGINE ──
console.log("📌 1. Thử nghiệm Động cơ Biến Lời Chê Thành Luật (Critic-to-Rule):");
const initialRules = getCriticRules();
assert(initialRules.length >= 7, `Đã nạp sẵn ${initialRules.length} luật từ cơ sở dữ liệu`);

// Add a new dynamic critique
const newRule = addCriticRule("Font chữ này mảnh quá không đọc được trên điện thoại");
assert(newRule.category === 'text_legibility', "Phân loại chuẩn xác danh mục text_legibility");
assert(newRule.id.startsWith('CRIT-'), `Sinh mã luật tất định ${newRule.id}`);

// Audit content with a violation
const testTextWithSlop = "cinematic scene with purple neon gradient background and text over face";
const auditSlop = auditAgainstCriticRules(testTextWithSlop);
assert(!auditSlop.passed, "Phát hiện thành công vi phạm luật đã học");
assert(auditSlop.violationsCount >= 2, `Bắt trúng ${auditSlop.violationsCount} vi phạm (AI slop & text over face)`);

// ── 2. TEST SAFE ZONE & FACIAL INVARIANCE MATRIX ──
console.log("\n📌 2. Thử nghiệm Thẩm định Vùng An Toàn & Bảo Vệ Khuôn Mặt (Safe Zone & Face Invariance):");
// 9:16 collision test with TikTok like button
const dangerousTikTokElem = {
  id: 'action_btn_cta',
  text: 'Bấm mua ngay',
  box: { minX: 0.85, maxX: 0.98, minY: 0.50, maxY: 0.58 } // Intersects Right interaction rail
};
const tiktokAudit = auditElementPosition({
  aspectRatio: '9:16',
  element: dangerousTikTokElem
});
assert(!tiktokAudit.passed, "Phát hiện chính xác nút đè vào Vùng nút bấm TikTok (Right Interaction Rail)");
assert(tiktokAudit.autoCorrectedBox.maxX <= 0.80, `Tự động dời tọa độ X về vùng an toàn (X <= 0.80, hiện tại ${tiktokAudit.autoCorrectedBox.maxX})`);

// 16:9 Face occlusion test
const faceCoveringSubtitle = {
  id: 'headline_title',
  text: 'CHỦ TỊCH TẬP ĐOÀN',
  box: { minX: 0.40, maxX: 0.60, minY: 0.30, maxY: 0.45 } // Directly across speaker face
};
const faceAudit = auditElementPosition({
  aspectRatio: '16:9',
  element: faceCoveringSubtitle
});
assert(!faceAudit.passed, "Phát hiện chính xác chữ che mặt người nói ở tỷ lệ 16:9");
assert(faceAudit.autoCorrectedBox.maxX <= 0.32 || faceAudit.autoCorrectedBox.minX >= 0.68, "Tự động dời chữ về 1/3 bên trái hoặc 1/3 bên phải (Rule of Thirds)");

// ── 3. TEST 3 GOLDEN ROUGH-CUT RULES ENGINE ──
console.log("\n📌 3. Thử nghiệm Bộ 3 Luật Cắt Thô Thông Minh (Rough-Cut 3 Golden Rules):");
const mockTranscript = [
  { id: 1, start: 0.0, end: 1.8, text: "Hôm nay mình sẽ" }, // Stumble take 1
  { id: 2, start: 2.2, end: 4.5, text: "Hôm nay mình sẽ chia sẻ với bạn" }, // Stumble take 2
  { id: 3, start: 5.0, end: 8.5, text: "Hôm nay mình sẽ chia sẻ bí quyết làm video" }, // Final take (RULE 1)
  { id: 4, start: 10.5, end: 14.0, text: "Đầu tiên là phần âm thanh" }, // Silence gap = 2.0s (> 0.6s)
  { id: 5, start: 14.2, end: 17.0, text: "Tiếp theo là phần màu sắc điện ảnh" }
];

const cutResult = applyRoughCutRules(mockTranscript);
assert(cutResult.cutCount === 2, `Cắt bỏ thành công 2 take nói vấp (${cutResult.cutCount})`);
assert(cutResult.retainedCount === 3, `Giữ lại 3 câu chuẩn (${cutResult.retainedCount})`);
assert(cutResult.totalTimeSavedSeconds > 5.0, `Tiết kiệm được ${cutResult.totalTimeSavedSeconds}s cho video`);
assert(cutResult.reviewMarkdown.includes("BẢNG DUYỆT CẮT THÔ CHUẨN 3 LUẬT"), "Sinh bảng duyệt Markdown cho đạo diễn");

// ── 4. TEST OPTICAL LINTER WITH ANTI-AI-SLOP & FACIAL INVARIANCE ──
console.log("\n📌 4. Thử nghiệm Optical Linter Mở Rộng:");
const testPrompt = "cinematic close-up portrait with purple neon gradient glow and text over face";
const linterVerdict = OpticalLinter.validate(testPrompt);
assert(!linterVerdict.isClean, "Linter cảnh báo prompt vi phạm tiêu chí quang học");
const slopConflict = linterVerdict.conflicts.find(c => c.id === 'anti_ai_slop_gradient');
const faceConflict = linterVerdict.conflicts.find(c => c.id === 'face_occlusion_invariance');
assert(!!slopConflict, "Bắt trúng tiêu chí anti_ai_slop_gradient");
assert(!!faceConflict, "Bắt trúng tiêu chí face_occlusion_invariance");

const autoFixed = OpticalLinter.autoHarmonize(testPrompt);
assert(!autoFixed.includes("purple neon gradient"), "Tự động tẩy sạch purple neon gradient trong prompt");
assert(autoFixed.includes("warm amber") || autoFixed.includes("lower-left"), "Thay thế bằng chuẩn màu và bố cục điện ảnh");

// ── 5. TEST DIRECTOR COLOR VAULT ──
console.log("\n📌 5. Thử nghiệm Kho Màu Điện Ảnh Đạo Diễn (Director Color Vault):");
const colorVault = JSON.parse(fs.readFileSync('./data/director_color_vault.json', 'utf-8'));
assert(colorVault.palettes.length >= 6, `Đã tích hợp ${colorVault.palettes.length} bảng màu điện ảnh tinh hoa`);
const mochaPalette = colorVault.palettes.find(p => p.id === 'moody_mocha_gold');
assert(!!mochaPalette && mochaPalette.hexCodes.accent === '#D4AF37', "Bảng màu Moody Mocha & Royal Amber cấu hình chuẩn");

// ── SUMMARY ──
console.log(`\n======================================================`);
console.log(`🎉 KẾT QUẢ: ĐÃ VƯỢT QUA ${passedTests}/${passedTests + failedTests} BÀI TEST`);
if (failedTests === 0) {
  console.log(`🏆 HỆ THỐNG CINE PROMPT PRO ĐÃ ĐẠT CHUẨN TINH HOA TOÀN DIỆN!`);
} else {
  console.error(`⚠️ Có ${failedTests} bài test chưa đạt yêu cầu.`);
  process.exit(1);
}
console.log(`======================================================\n`);
