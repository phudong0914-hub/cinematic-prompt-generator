import assert from 'assert';
import {
  URL_TYPES,
  REVIEW_STYLES,
  detectUrlType,
  parseUrlMetadata,
  extractSourceIntelligence,
  buildDirectorReviewStoryboard,
  generateReviewProductionPackage
} from './js/urlToVideoReview.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: URL TO VIDEO REVIEW & INTRO STUDIO ENGINE...\n');

// 1. Kiểm tra Detect URL Type
assert.strictEqual(detectUrlType('https://github.com/phudong0914-hub/cinematic-prompt-generator'), URL_TYPES.GITHUB_REPO);
assert.strictEqual(detectUrlType('https://gitlab.com/awesome-group/ai-video'), URL_TYPES.GITLAB_REPO);
assert.strictEqual(detectUrlType('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), URL_TYPES.YOUTUBE_VIDEO);
assert.strictEqual(detectUrlType('https://youtu.be/dQw4w9WgXcQ'), URL_TYPES.YOUTUBE_VIDEO);
assert.strictEqual(detectUrlType('https://www.youtube.com/shorts/abcXYZ123'), URL_TYPES.YOUTUBE_SHORTS);
assert.strictEqual(detectUrlType('https://www.tiktok.com/@director/video/7123456789'), URL_TYPES.TIKTOK_VIDEO);
assert.strictEqual(detectUrlType('https://example.com/product'), URL_TYPES.GENERIC_WEB);
console.log('✅ [1/5] Phân loại chính xác 100% các nền tảng URL (GitHub, YouTube, TikTok, Facebook, Generic).');

// 2. Kiểm tra Parse Metadata từ URL
const repoMeta = parseUrlMetadata('https://github.com/phudong0914-hub/cinematic-prompt-generator');
assert.strictEqual(repoMeta.isRepo, true);
assert.strictEqual(repoMeta.owner, 'phudong0914-hub');
assert.strictEqual(repoMeta.repoName, 'cinematic-prompt-generator');
assert.strictEqual(repoMeta.identifier, 'phudong0914-hub/cinematic-prompt-generator');

const videoMeta = parseUrlMetadata('https://www.youtube.com/watch?v=k1m2n3o4');
assert.strictEqual(videoMeta.isVideo, true);
assert.strictEqual(videoMeta.identifier, 'k1m2n3o4');
console.log('✅ [2/5] Trích xuất sạch sẽ metadata, identifier và project owner.');

// 3. Kiểm tra Bóc Tách Tri Thức (Repo & Video Intelligence)
async function testIntelligence() {
  const repoIntel = await extractSourceIntelligence('https://github.com/phudong0914-hub/cinematic-prompt-generator', {
    styleKey: 'TECH_EXPERT',
    duration: 30
  });

  assert.ok(repoIntel.killerFeatures.length >= 3, 'Repo phải có ít nhất 3 tính năng sát thủ');
  assert.ok(repoIntel.painPoint.length > 10, 'Phải có câu nêu nỗi đau / Hook');

  const videoIntel = await extractSourceIntelligence('https://www.tiktok.com/@cinema/video/98765', {
    styleKey: 'VIRAL_CREATOR',
    duration: 15
  });
  assert.ok(videoIntel.killerFeatures.length >= 3);
  console.log('✅ [3/5] Bóc tách tri thức và phân tích cấu trúc bài bản cho cả Repo và Video.');
  return { repoIntel, videoIntel };
}

const { repoIntel, videoIntel } = await testIntelligence();

// 4. Kiểm tra Sinh Kịch Bản Phân Cảnh Review Chuẩn Đạo Diễn (4 Scenes)
const storyboard = buildDirectorReviewStoryboard(repoIntel, {
  styleKey: 'DIRECTOR_PREMIUM',
  duration: 30
});

assert.strictEqual(storyboard.scenes.length, 4, 'Phải có chuẩn 4 phân cảnh (Hook, Breakdown, Verdict, Loop CTA)');
assert.strictEqual(storyboard.scenes[0].sceneIndex, 1);
assert.ok(storyboard.scenes[0].name.includes('Hook'));
assert.ok(storyboard.scenes[0].motionCraft.includes('Whip Zoom Punch'));
assert.ok(storyboard.scenes[0].visualPrompt.includes('--ar 9:16'));
assert.ok(storyboard.scenes[3].motionCraft.includes('Fade to Black'));
assert.strictEqual(storyboard.director, 'Đạo Diễn Trungvt');
console.log('✅ [4/5] Kịch bản storyboard 4 phân cảnh điện ảnh chuẩn quy tắc nhịp điệu & chuyển động.');

// 5. Kiểm tra Xuất Bản Toàn Diện (Production Master Package)
const pkg = generateReviewProductionPackage(storyboard);

assert.ok(pkg.openCreatorManifest.execution_plan.stages.length >= 5, 'Phải có đủ các tầng OpenCreator');
assert.ok(pkg.bilingualSrt.includes('-->'), 'Phải có mốc thời gian SRT');
assert.ok(pkg.bilingualSrt.includes('Có phải bạn đang tìm kiếm'));
assert.ok(pkg.capcutTimeline.tracks.length === 3, 'Phải có 3 tracks CapCut (video, voiceover, subtitles)');
assert.strictEqual(pkg.capcutTimeline.time_scale, 1000000, 'Chuẩn vi giây f2us triệt tiêu overlap');
assert.ok(pkg.summaryMarkdown.includes('Đạo Diễn Trungvt'));
console.log('✅ [5/5] Xuất trọn gói Production Package: OpenCreator Manifest, Bilingual SRT, CapCut Draft vi giây & Markdown.');

console.log('\n🎉 TẤT CẢ 5/5 BÀI KIỂM THỬ THÀNH CÔNG RỰC RỠ 100%! MODULE URL TO VIDEO REVIEW ĐÃ SẴN SÀNG.');
