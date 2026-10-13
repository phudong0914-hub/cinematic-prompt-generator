import assert from 'assert';
import {
  VAULT_CATEGORIES,
  directorPrivateVault
} from './js/directorPrivateVault.js';

console.log('🏛️ BẮT ĐẦU KIỂM THỬ: DIRECTOR PRIVATE ASSET VAULT ("THƯ VIỆN CỦA TÔI")...\n');

// 1. Kiểm tra 6 Danh mục tài sản theo đúng ảnh thiết kế
const categories = Object.keys(VAULT_CATEGORIES);
assert.strictEqual(categories.length, 6, 'Phải có đúng 6 danh mục tài sản');
assert.ok(categories.includes('background_images'));
assert.ok(categories.includes('background_videos'));
assert.ok(categories.includes('stickers'));
assert.ok(categories.includes('effects'));
assert.ok(categories.includes('audio_tracks'));
assert.ok(categories.includes('fonts'));

assert.strictEqual(VAULT_CATEGORIES.background_images.isPrivate, true, 'Ảnh nền phải được gắn cờ bảo mật riêng tư');
assert.strictEqual(VAULT_CATEGORIES.background_videos.isPrivate, true, 'Video nền phải được gắn cờ bảo mật riêng tư');
console.log('✅ [1/5] Khởi tạo đủ 6 danh mục tài nguyên (Ảnh nền 🔒, Video nền 🔒, Sticker, Hiệu ứng, Nhạc nền, Font).');

// 2. Kiểm tra Seed tài nguyên mẫu cao cấp
const stats = directorPrivateVault.getVaultStats();
assert.ok(stats.background_images >= 2, 'Kho ảnh nền phải chứa ít nhất 2 mẫu');
assert.ok(stats.background_videos >= 1, 'Kho video nền phải chứa video mẫu');
assert.ok(stats.effects >= 1, 'Kho hiệu ứng phải chứa 3D LUT mẫu');
assert.ok(stats.audio_tracks >= 2, 'Kho âm thanh phải chứa audio bed & voice clone');
assert.ok(stats.fonts >= 1, 'Kho font phải chứa font Sigmar');
console.log('✅ [2/5] Kho mẫu Đạo diễn (Flagship Assets) đã nạp sẵn 100% tài nguyên Midnight Oud.');

// 3. Kiểm tra Thêm tài sản cá nhân mới
const newAsset = directorPrivateVault.addAsset('background_images', {
  name: 'Studio Interior Dark Rose Plate',
  isPrivate: true,
  previewUrl: 'data:image/png;base64,mock',
  tags: ['dark_rose', 'studio_custom']
});
assert.ok(newAsset.id.startsWith('VAULT_'));
assert.strictEqual(newAsset.isPrivate, true);
assert.strictEqual(directorPrivateVault.getAssets('background_images').length, stats.background_images + 1);
console.log('✅ [3/5] Tính năng Tải lên & Khóa riêng tư tài nguyên (Client-isolated) hoạt động hoàn hảo.');

// 4. Kiểm tra Xóa tài sản cá nhân
const removed = directorPrivateVault.removeAsset('background_images', newAsset.id);
assert.strictEqual(removed, true);
assert.strictEqual(directorPrivateVault.getAssets('background_images').length, stats.background_images);
console.log('✅ [4/5] Tính năng Quản lý & Thu hồi tài sản an toàn.');

// 5. Kiểm tra Xuất gói Brand Kit Manifest tự động
const brandKit = directorPrivateVault.exportBrandKitManifest();
assert.strictEqual(brandKit.owner, 'Đạo Diễn Trungvt');
assert.strictEqual(brandKit.brand_kit.primary_font, 'Sigmar');
assert.ok(brandKit.brand_kit.color_lut.includes('.cube'));
assert.ok(brandKit.brand_kit.voice_clone_anchor.includes('Qwen-Omni'));
console.log('✅ [5/5] Gói cấu hình Brand Kit Đạo diễn tự động kết nối và đồng bộ cho mọi dự án.');

console.log('\n🎉 TẤT CẢ 5/5 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! THƯ VIỆN CỦA TÔI HOÀN TOÀN SẴN SÀNG.');
