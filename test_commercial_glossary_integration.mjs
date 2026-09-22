import assert from 'assert';
import fs from 'fs';
import path from 'path';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: TÍCH HỢP TINH HOA BILINGUAL GLOSSARY & COMMERCIAL PRESETS...\n');

// 1. Test Bilingual Glossary
import { CINEMATIC_GLOSSARY, searchGlossary, getTermsByCategory, GLOSSARY_CATEGORIES } from './js/bilingualGlossary.js';

assert.ok(CINEMATIC_GLOSSARY.length >= 700, `Glossary phải có ít nhất 700 thuật ngữ, hiện có: ${CINEMATIC_GLOSSARY.length}`);
console.log(`✅ [1/5] Danh mục từ điển nạp thành công: ${CINEMATIC_GLOSSARY.length} thuật ngữ.`);

// Test Search English
const enResults = searchGlossary('dutch tilt');
assert.ok(enResults.length >= 1, 'Tìm kiếm tiếng Anh "dutch tilt" phải có kết quả');
console.log(`✅ [1/5] Tìm kiếm tiếng Anh "dutch tilt": ${enResults.length} kết quả tìm thấy.`);

// Test Search Vietnamese with accent
const viResults = searchGlossary('ngược sáng');
assert.ok(viResults.length >= 1, 'Tìm kiếm tiếng Việt "ngược sáng" phải có kết quả');
console.log(`✅ [1/5] Tìm kiếm tiếng Việt có dấu "ngược sáng": ${viResults.length} kết quả tìm thấy.`);

// Test Search Vietnamese without accent
const viNoAccentResults = searchGlossary('nguoc sang');
assert.ok(viNoAccentResults.length >= 1, 'Tìm kiếm tiếng Việt không dấu "nguoc sang" phải có kết quả');
console.log(`✅ [1/5] Tìm kiếm tiếng Việt không dấu "nguoc sang": ${viNoAccentResults.length} kết quả tìm thấy.`);

// Test Category Filtering
const camTerms = getTermsByCategory('camera_movement');
assert.ok(camTerms.length >= 100, `Danh mục camera_movement phải có >= 100 thuật ngữ, có: ${camTerms.length}`);
const lightTerms = getTermsByCategory('lighting');
assert.ok(lightTerms.length >= 70, `Danh mục lighting phải có >= 70 thuật ngữ, có: ${lightTerms.length}`);
console.log(`✅ [1/5] Lọc danh mục: camera_movement (${camTerms.length}), lighting (${lightTerms.length}).`);

// 2. Test Commercial Presets & Emotion Matrix
import { COMMERCIAL_PRODUCTION_PRESETS, EMOTION_TO_SHOT_MATRIX, generateTwoClipSequence, exportSkillMarkdown } from './js/directorKnowledgeEngine.js';

assert.strictEqual(COMMERCIAL_PRODUCTION_PRESETS.length, 10, 'Phải có chính xác 10 Commercial Presets');
COMMERCIAL_PRODUCTION_PRESETS.forEach(p => {
  assert.ok(p.id && p.title && p.fullPrompt && p.rationale, `Preset ${p.id} thiếu trường dữ liệu`);
  assert.ok(p.fullPrompt.length > 50, `Prompt của preset ${p.id} quá ngắn`);
});
console.log(`✅ [2/5] 10 Commercial Production Presets hợp lệ 100%.`);

const emotions = Object.keys(EMOTION_TO_SHOT_MATRIX);
assert.strictEqual(emotions.length, 8, 'Ma trận cảm xúc phải có 8 trạng thái');
emotions.forEach(e => {
  const item = EMOTION_TO_SHOT_MATRIX[e];
  assert.ok(item.emotionVi && item.shotSize && item.lighting && item.movement, `Emotion ${e} thiếu dữ liệu`);
});
console.log(`✅ [2/5] Ma trận 8 trạng thái Đạo diễn Cảm xúc (Emotion-to-Shot Matrix) hoàn thiện.`);

// 3. Test 2-Clip Sequence Generator
const twoClip = generateTwoClipSequence('luxury perfume glass bottle on marble counter', 'cinematic advertising', 'empowered');
assert.ok(twoClip.clip1.includes('Clip 1 (Wide Establishing & Movement):'), 'Clip 1 sai định dạng');
assert.ok(twoClip.clip2.includes('Clip 2 (Macro Detail & Texture):'), 'Clip 2 sai định dạng');
assert.ok(twoClip.clip2.includes('luxury perfume glass bottle'), 'Clip 2 phải khóa cùng đối tượng chủ thể');
console.log(`✅ [3/5] Bộ tạo phân cảnh 2-Clip Sequence hoạt động chuẩn xác.`);

// 4. Test Skill Export (.md)
const skillMd = exportSkillMarkdown();
assert.ok(skillMd.startsWith('---'), 'Skill markdown phải bắt đầu bằng YAML frontmatter');
assert.ok(skillMd.includes('name: cine-prompt-pro'), 'YAML frontmatter phải có name: cine-prompt-pro');
assert.ok(skillMd.includes('The Master Prompt Formula'), 'Skill markdown phải có công thức prompt');
assert.ok(skillMd.includes('4-Pillar Critique HUD'), 'Skill markdown phải có thang điểm 4 trụ cột');
console.log(`✅ [4/5] Trình xuất bản AI Skill (SKILL.md) chuẩn Claude/Cursor thành công (${skillMd.length} bytes).`);

// 5. Verify HTML & Bundle DOM Elements
const indexHtml = fs.readFileSync('index.html', 'utf8');
const publicHtml = fs.readFileSync('public/index.html', 'utf8');

[indexHtml, publicHtml].forEach((html, idx) => {
  const name = idx === 0 ? 'index.html' : 'public/index.html';
  assert.ok(html.includes('id="glossary-modal-btn"'), `${name} thiếu glossary-modal-btn`);
  assert.ok(html.includes('id="skill-export-btn"'), `${name} thiếu skill-export-btn`);
  assert.ok(html.includes('class="style-pill commercial-pill"'), `${name} thiếu commercial-pill`);
  assert.ok(html.includes('class="emotion-pill"'), `${name} thiếu emotion-pill`);
  assert.ok(html.includes('id="bilingual-glossary-modal"'), `${name} thiếu bilingual-glossary-modal`);
  assert.ok(html.includes('id="skill-export-modal"'), `${name} thiếu skill-export-modal`);
});
console.log(`✅ [5/5] Cấu trúc DOM trong index.html và public/index.html đồng bộ 100%.`);

console.log('\n🎉 TẤT CẢ 5/5 MỤC KIỂM THỬ ĐÃ VƯỢT QUA 100%! HỆ THỐNG SẴN SÀNG HOÀN TOÀN.');
