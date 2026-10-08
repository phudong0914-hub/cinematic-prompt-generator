import assert from 'assert';
import {
  buildStockLinks,
  buildFileName,
  generateBrollSourcePlan,
  formatBrollSourceMarkdown
} from './js/brollSourceEngine.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: SKILL LẤY NGUỒN B-ROLL NGAY...\n');

// 1. Kiểm tra sinh 3 link tìm kiếm chuẩn
const links = buildStockLinks('typing laptop night');
assert.strictEqual(links.length, 3, 'Phải sinh đúng 3 link tìm kiếm');
assert.ok(links[0].includes('pexels.com/search/videos/typing-laptop-night/'), 'Link Pexels sai mẫu');
assert.ok(links[1].includes('pixabay.com/videos/search/typing-laptop-night/'), 'Link Pixabay sai mẫu');
assert.ok(links[2].includes('mixkit.co/free-stock-video/typing-laptop-night/'), 'Link Mixkit sai mẫu');
console.log('✅ [1/4] 3 Mẫu link tìm kiếm Pexels, Pixabay, Mixkit hoạt động chính xác 100%.');

// 2. Kiểm tra quy tắc đặt tên file: mocgiay_mota-ngan
const fn1 = buildFileName(42, 'go phim laptop');
assert.strictEqual(fn1, '0042_go-phim-laptop', 'Tên file phải có định dạng 0042_go-phim-laptop');
const fn2 = buildFileName(125, 'khach hang mua');
assert.strictEqual(fn2, '0205_khach-hang-mua', 'Tên file phút thứ 2:05 phải là 0205_khach-hang-mua');
console.log('✅ [2/4] Quy tắc đặt tên file CapCut (mocgiay_mota-ngan) chuẩn xác 100%.');

// 3. Kiểm tra phân loại A (tự quay) và B (stock) + gom địa điểm
const plan = generateBrollSourcePlan();
assert.ok(plan.items.length >= 2, 'Phải có các mục tư liệu');
assert.ok(Object.keys(plan.selfShotByLocation).length >= 1, 'Phải gom được cảnh tự quay theo địa điểm');
console.log('✅ [3/4] Phân nhóm địa điểm tự quay để quay 1 lượt hoàn thành xuất sắc.');

// 4. Kiểm tra xuất bảng Markdown
const md = formatBrollSourceMarkdown(plan);
assert.ok(md.includes('BẢNG TƯ LIỆU B-ROLL TẢI ĐƯỢC NGAY'), 'Tiêu đề bảng Markdown phải đúng');
assert.ok(md.includes('DANH SÁCH CẢNH TỰ QUAY'), 'Phải có mục gom cảnh tự quay');
assert.ok(md.includes('TÊN FILE GỢI Ý CHO CAPCUT'), 'Phải có mục tên file');
console.log('✅ [4/4] Báo cáo Markdown xuất bản đầy đủ cấu trúc 3 phần.');

console.log('\n🎉 TẤT CẢ 4/4 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! SKILL LẤY NGUỒN B-ROLL ĐÃ HOÀN TẤT.');
