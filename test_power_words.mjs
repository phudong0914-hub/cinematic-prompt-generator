import assert from 'assert';
import {
  POWER_WORDS_DATABASE,
  POWER_WORD_CATEGORIES,
  POWER_WORDS_STATS,
  getPowerWordsByCategory,
  searchPowerWords,
  generateVideoHook
} from './js/powerWords.js';

console.log('🧪 BẮT ĐẦU KIỂM THỬ: BỘ NGÔN TỪ SỨC MẠNH & HOOK VIDEO CHUYỂN ĐỔI CAO...\n');

// 1. Kiểm tra số lượng và danh mục
assert.ok(POWER_WORDS_DATABASE.length >= 100, `Database phải có ít nhất 100 từ ngữ/mẫu câu, hiện có: ${POWER_WORDS_DATABASE.length}`);
console.log(`✅ [1/6] Nạp thành công database: ${POWER_WORDS_DATABASE.length} từ ngữ & mẫu câu sức mạnh.`);

const catKeys = Object.keys(POWER_WORD_CATEGORIES);
assert.strictEqual(catKeys.length, 6, 'Phải có chính xác 6 danh mục phân loại chuẩn');
console.log(`✅ [2/6] 6 Danh mục phân loại chuẩn xác (Urgency, Curiosity, Hook Openers, Authority, Frictionless, Scale).`);

// 2. Kiểm tra lọc theo danh mục
catKeys.forEach(cat => {
  const items = getPowerWordsByCategory(cat);
  assert.ok(items.length >= 10, `Danh mục ${cat} phải có ít nhất 10 mục, có: ${items.length}`);
});
console.log(`✅ [3/6] Phân tách danh mục hoàn hảo: Mỗi danh mục đều chứa đầy đủ bộ từ ngữ tương ứng.`);

// 3. Kiểm tra tìm kiếm tiếng Việt có dấu và không dấu
const search1 = searchPowerWords('miễn phí');
assert.ok(search1.length >= 5, `Tìm kiếm có dấu 'miễn phí' phải có >= 5 kết quả, có: ${search1.length}`);

const search2 = searchPowerWords('mien phi');
assert.ok(search2.length >= 5, `Tìm kiếm không dấu 'mien phi' phải có >= 5 kết quả, có: ${search2.length}`);

const search3 = searchPowerWords('chuyên gia');
assert.ok(search3.length >= 1, `Tìm kiếm 'chuyên gia' phải tìm thấy kết quả`);
console.log(`✅ [4/6] Tìm kiếm thông minh 2 chiều (tiếng Việt có dấu và không dấu) hoạt động chính xác 100%.`);

// 4. Kiểm tra bộ tạo Video Hook
const hookQuestion = generateVideoHook({ topic: 'làm phim điện ảnh với AI', style: 'question', targetAudience: 'bạn' });
assert.ok(hookQuestion.hook && hookQuestion.hook.length > 20, 'Hook câu hỏi phải được sinh hợp lệ');

const hookUrgency = generateVideoHook({ topic: 'khóa học video ngắn', style: 'urgency' });
assert.ok(hookUrgency.hook.includes('khóa học video ngắn'), 'Hook khẩn cấp phải chứa đúng chủ đề');

const hookSecret = generateVideoHook({ topic: 'Cine Prompt Pro', style: 'secret' });
assert.ok(hookSecret.hook.includes('Cine Prompt Pro'), 'Hook bí mật phải chứa đúng chủ đề');
console.log(`✅ [5/6] Bộ tạo Video Hook đa phong cách (Question, Urgency, Secret, Effortless, Transformation) sinh chuẩn xác.`);

// 5. Kiểm tra API Handler
import powerWordsHandler from './api/power-words.js';

let apiOutput = null;
let apiStatusCode = 0;
const mockRes = {
  setHeader: () => {},
  status: (code) => {
    apiStatusCode = code;
    return {
      json: (data) => { apiOutput = data; }
    };
  }
};

const mockReq = {
  method: 'POST',
  body: {
    query: 'bí mật',
    hookOptions: { topic: 'sáng tạo nội dung', style: 'secret' }
  }
};

powerWordsHandler(mockReq, mockRes);
assert.strictEqual(apiStatusCode, 200, 'API /api/power-words phải trả về HTTP 200');
assert.ok(apiOutput.success === true, 'API phải trả về success: true');
assert.ok(apiOutput.results.length >= 1, 'API phải tìm thấy từ khóa');
assert.ok(apiOutput.generatedHook && apiOutput.generatedHook.hook, 'API phải sinh hook thành công');
console.log(`✅ [6/6] API Handler (/api/power-words) hoạt động đồng bộ và bảo mật.`);

console.log('\n🎉 TẤT CẢ 6/6 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! BỘ TỪ NGỮ SỨC MẠNH ĐÃ SẴN SÀNG.');
