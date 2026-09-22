import json
import re

terms_file = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\scratch\terms.json"
out_file = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\js\bilingualGlossary.js"

with open(terms_file, 'r', encoding='utf-8') as f:
    terms = json.load(f)

category_meta = {
    "all": {"labelVi": "Tất Cả (720+)", "icon": "📚"},
    "camera_movement": {"labelVi": "Góc & Chuyển Động Máy", "icon": "🎥"},
    "lighting": {"labelVi": "Ánh Sáng & Tương Phản", "icon": "💡"},
    "composition": {"labelVi": "Bố Cục & Tầm Nhìn", "icon": "📐"},
    "lens_film": {"labelVi": "Ống Kính & Chất Phim", "icon": "🎞️"},
    "style_color_mood": {"labelVi": "Phong Cách, Màu & Cảm Xúc", "icon": "🎨"},
    "materials_weather_pose": {"labelVi": "Chất Liệu, Thời Tiết & Dáng", "icon": "🌦️"}
}

js_code = f"""/**
 * bilingualGlossary.js
 * ─────────────────────────────────────────────────────────────────────────────
 * TỪ ĐIỂN ĐIỆN ẢNH & THỊ GIÁC SONG NGỮ ANH - VIỆT (720+ THUẬT NGỮ CHUYÊN NGHIỆP)
 * Hấp thụ từ điển thuật ngữ quay phim, góc máy, ánh sáng, bố cục và quang học
 * Hỗ trợ tra cứu tức thì, lọc danh mục và chèn 1-click vào prompt của Cine Prompt Pro.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const GLOSSARY_CATEGORIES = {json.dumps(category_meta, ensure_ascii=False, indent=2)};

export const CINEMATIC_GLOSSARY = {json.dumps(terms, ensure_ascii=False, indent=2)};

/**
 * Tìm kiếm thuật ngữ song ngữ (hỗ trợ không dấu, có dấu tiếng Việt & tiếng Anh)
 * @param {{string}} query
 * @param {{string}} categoryFilter
 * @returns {{Array}}
 */
export function searchGlossary(query = '', categoryFilter = 'all') {{
  const q = query.trim().toLowerCase();
  
  // Hàm loại bỏ dấu tiếng Việt để tìm kiếm fuzzy
  const removeAccents = (str) => {{
    return str ? str.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D') : '';
  }};

  const qNoAccents = removeAccents(q);

  return CINEMATIC_GLOSSARY.filter(item => {{
    if (categoryFilter !== 'all' && item.category !== categoryFilter) {{
      return false;
    }}
    if (!q) return true;

    const enMatch = item.en.toLowerCase().includes(q);
    const viMatch = item.vi.toLowerCase().includes(q) || removeAccents(item.vi.toLowerCase()).includes(qNoAccents);
    const usageMatch = item.usage ? (item.usage.toLowerCase().includes(q) || removeAccents(item.usage.toLowerCase()).includes(qNoAccents)) : false;
    const subMatch = item.subCategory ? (item.subCategory.toLowerCase().includes(q) || removeAccents(item.subCategory.toLowerCase()).includes(qNoAccents)) : false;

    return enMatch || viMatch || usageMatch || subMatch;
  }});
}}

/**
 * Lấy danh sách thuật ngữ theo danh mục
 * @param {{string}} category
 * @returns {{Array}}
 */
export function getTermsByCategory(category) {{
  if (!category || category === 'all') return CINEMATIC_GLOSSARY;
  return CINEMATIC_GLOSSARY.filter(item => item.category === category);
}}

/**
 * Lấy ngẫu nhiên 1 thuật ngữ truyền cảm hứng
 * @returns {{Object}}
 */
export function getRandomInspiringTerm() {{
  const index = Math.floor(Math.random() * CINEMATIC_GLOSSARY.length);
  return CINEMATIC_GLOSSARY[index];
}}
"""

with open(out_file, 'w', encoding='utf-8') as f:
    f.write(js_code)

print(f"Generated {out_file} with {len(terms)} terms successfully.")
