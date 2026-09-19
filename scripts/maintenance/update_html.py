import re
import os

filepath = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Add i18n script before app.js
content = content.replace('<script type="module" src="./js/app.js?v=14"></script>', '<script src="./js/i18n.js"></script>\n  <script type="module" src="./js/app.js?v=14"></script>')

replacements = [
    (r'(<button id="help-btn"[^>]*>.*?</svg>)\s*Guide\s*(</button>)', r'\1 Hướng dẫn \2', '<button id="help-btn" data-i18n="guide" '),
    (r'<label for="search-input" class="control-label">Search Prompts</label>', r'<label for="search-input" class="control-label" data-i18n="search-label">Tìm kiếm Prompts</label>'),
    (r'placeholder="Search styles, keywords..."', r'placeholder="Tìm phong cách, từ khóa..." data-i18n="search-placeholder"'),
    (r'<label for="category-filter" class="control-label">Category</label>', r'<label for="category-filter" class="control-label" data-i18n="category-label">Danh mục</label>'),
    (r'<option value="all">All Categories</option>', r'<option value="all" data-i18n="cat-all">Tất cả Danh mục</option>'),
    (r'<option value="favorites">⭐️ My Favorites</option>', r'<option value="favorites" data-i18n="cat-fav">⭐️ Yêu thích</option>'),
    (r'<label for="difficulty-filter" class="control-label">Difficulty</label>', r'<label for="difficulty-filter" class="control-label" data-i18n="diff-label">Độ khó</label>'),
    (r'<option value="all">All Levels</option>', r'<option value="all" data-i18n="diff-all">Mọi cấp độ</option>'),
    (r'<option value="Basic">Basic</option>', r'<option value="Basic" data-i18n="diff-basic">Cơ bản</option>'),
    (r'<option value="Intermediate">Intermediate</option>', r'<option value="Intermediate" data-i18n="diff-inter">Trung bình</option>'),
    (r'<option value="Advanced">Advanced</option>', r'<option value="Advanced" data-i18n="diff-adv">Nâng cao</option>'),
    (r'<label for="aspect-ratio" class="control-label">Aspect Ratio</label>', r'<label for="aspect-ratio" class="control-label" data-i18n="ar-label">Tỷ lệ khung hình</label>'),
    (r'<option value="--ar 21:9">Cinematic 2.35:1</option>', r'<option value="--ar 21:9" data-i18n="ar-cine">Điện ảnh 2.35:1</option>'),
    (r'<option value="--ar 16:9" selected>Widescreen 16:9</option>', r'<option value="--ar 16:9" selected data-i18n="ar-wide">Toàn cảnh 16:9</option>'),
    (r'<option value="--ar 9:16">Vertical 9:16</option>', r'<option value="--ar 9:16" data-i18n="ar-vert">Dọc 9:16</option>'),
    (r'<option value="--ar 1:1">Square 1:1</option>', r'<option value="--ar 1:1" data-i18n="ar-sq">Vuông 1:1</option>'),
    (r'<span id="result-count" class="result-count">Loading prompts…</span>', r'<span id="result-count" class="result-count" data-i18n="loading">Đang tải prompts…</span>'),
    (r'<span class="hint-text">Click any card or hit Director\'s Cut to generate prompts</span>', r'<span class="hint-text" data-i18n="hint">Nhấn vào thẻ hoặc Director\'s Cut để tạo prompt</span>'),
    (r'<label for="subject-input" class="control-label">Subject Idea</label>', r'<label for="subject-input" class="control-label" data-i18n="subject-label">Ý tưởng Chủ đề</label>'),
    (r'placeholder="e.g., một cô gái dưới mưa"', r'placeholder="VD: một cô gái dưới mưa" data-i18n="subject-placeholder"'),
    (r'<label for="negative-input" class="control-label">Negative Prompt</label>', r'<label for="negative-input" class="control-label" data-i18n="neg-label">Negative Prompt</label>'),
    (r'placeholder="e.g. ugly, deformed, noisy..."', r'placeholder="VD: ugly, deformed, noisy..." data-i18n="neg-placeholder"'),
    (r'<span class="btn-label">Director\'s Cut</span>', r'<span class="btn-label" data-i18n="btn-director">Director\'s Cut</span>'),
    (r'✨ AI Enhance', r'✨ AI Nâng Cấp'), # will add data-i18n below
    (r'<span class="btn-label">Builder</span>', r'<span class="btn-label" data-i18n="btn-builder">Công Cụ Tạo</span>'),
    (r'Generated Prompt\s*</span>', r'Prompt Đã Tạo </span>'),
    (r'IMAGE PROMPT', r'PROMPT HÌNH ẢNH'),
    (r'VIDEO PROMPT', r'PROMPT VIDEO'),
    (r'Select a card or click Director\'s Cut to generate.', r'Chọn một thẻ hoặc nhấn Director\'s Cut để tạo.'),
    (r'<span class="motion-tags-label">Motion:</span>', r'<span class="motion-tags-label" data-i18n="motion-label">Chuyển động:</span>'),
]

for item in replacements:
    if len(item) == 2:
        content = re.sub(item[0], item[1], content, flags=re.DOTALL)
    elif len(item) == 3:
        # replace and inject attribute
        temp = re.sub(item[0], item[1], content, flags=re.DOTALL)
        content = temp.replace('<button id="help-btn" ', item[2])

# Handle elements with attributes directly
content = content.replace('✨ AI Nâng Cấp\n          </button>', '✨ AI Nâng Cấp\n          </button>').replace('id="ai-enhance-btn" class="randomize-btn new-btn-outline" aria-label="AI Enhance"', 'id="ai-enhance-btn" class="randomize-btn new-btn-outline" aria-label="AI Enhance" data-i18n="btn-enhance"')

content = content.replace('Generated Prompt', 'Prompt Đã Tạo').replace('<span class="result-label">', '<span class="result-label" data-i18n="gen-prompt-title">')
content = content.replace('IMAGE PROMPT', 'PROMPT HÌNH ẢNH').replace('VIDEO PROMPT', 'PROMPT VIDEO')
content = content.replace('<span class="panel-label">', '<span class="panel-label" data-i18n="img-prompt">', 1)
content = content.replace('<span class="panel-label">', '<span class="panel-label" data-i18n="vid-prompt">', 1)

content = content.replace('Select a card or click Director\'s Cut to generate.', 'Chọn một thẻ hoặc nhấn Director\'s Cut để tạo.')
content = content.replace('id="result-text-image" class="result-text result-placeholder"', 'id="result-text-image" class="result-text result-placeholder" data-i18n="placeholder-res"')
content = content.replace('id="result-text-video" class="result-text result-placeholder"', 'id="result-text-video" class="result-text result-placeholder" data-i18n="placeholder-res"')

content = content.replace('<span class="copy-label">🇻🇳 Dịch</span>', '<span class="copy-label" data-i18n="btn-translate">🇻🇳 Dịch</span>')
content = content.replace('<span class="copy-label">Sao chép</span>', '<span class="copy-label" data-i18n="btn-copy">Sao chép</span>')
content = content.replace('🇻🇳 Dịch sang Tiếng Việt', '🇻🇳 Dịch').replace('id="translate-btn" class="translate-btn"', 'id="translate-btn" class="translate-btn" data-i18n="btn-translate"')


# Insert Toggles
toggles_html = """
          <div class="header-toggles">
            <button id="theme-toggle-btn" class="header-toggle-btn" title="Toggle Theme">🌙</button>
            <button id="lang-toggle-btn" class="header-toggle-btn" title="Toggle Language">VI</button>
          </div>
"""
content = content.replace('Guide\n          </button>', 'Guide\n          </button>' + toggles_html)
content = content.replace('Hướng dẫn \n          </button>', 'Hướng dẫn \n          </button>' + toggles_html)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
