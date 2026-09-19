import re

html_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"
i18n_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\js\i18n.js"
app_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\js\app.js"
ui_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\js\uiController.js"

# 1. Update HTML
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace('<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Lỗi Cơ Bản & Hình Thể</div>', 
                    '<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;" data-i18n="neg-basic">Lỗi Cơ Bản & Hình Thể</div>')

html = html.replace('<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Lỗi Chất Lượng & Ánh Sáng</div>',
                    '<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;" data-i18n="neg-quality">Lỗi Chất Lượng & Ánh Sáng</div>')

html = html.replace('<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Khử Phong Cách Ảo (Ép Tả Thực)</div>',
                    '<div>\n              <div style="font-size: 10px; color: #71717a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;" data-i18n="neg-style">Khử Phong Cách Ảo (Ép Tả Thực)</div>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

# 2. Update i18n.js
with open(i18n_path, "r", encoding="utf-8") as f:
    i18n = f.read()

# Add translations
if '"neg-basic"' not in i18n:
    i18n = i18n.replace('"motion-label": "Chuyển động:"\n  }', '"motion-label": "Chuyển động:",\n    "neg-basic": "LỖI CƠ BẢN & HÌNH THỂ",\n    "neg-quality": "LỖI CHẤT LƯỢNG & ÁNH SÁNG",\n    "neg-style": "KHỬ PHONG CÁCH ẢO (ÉP TẢ THỰC)"\n  }')
    i18n = i18n.replace('"motion-label": "Motion:"\n  }', '"motion-label": "Motion:",\n    "neg-basic": "BASIC & ANATOMY ERRORS",\n    "neg-quality": "QUALITY & LIGHTING ERRORS",\n    "neg-style": "REMOVE VIRTUAL STYLE (FORCE REALISM)"\n  }')

# Add event dispatch
if 'window.dispatchEvent' not in i18n:
    i18n = i18n.replace('applyLanguage(newLang);\n}', "applyLanguage(newLang);\n  window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));\n}")

with open(i18n_path, "w", encoding="utf-8") as f:
    f.write(i18n)

# 3. Update app.js
with open(app_path, "r", encoding="utf-8") as f:
    app = f.read()

if "window.addEventListener('languageChanged'" not in app:
    app = app.replace("document.getElementById('search-input')?.addEventListener('input', handleFilterChange);",
                      "document.getElementById('search-input')?.addEventListener('input', handleFilterChange);\n    window.addEventListener('languageChanged', handleFilterChange);")

with open(app_path, "w", encoding="utf-8") as f:
    f.write(app)

# 4. Update uiController.js
with open(ui_path, "r", encoding="utf-8") as f:
    ui = f.read()

old_build = """function buildCardHTML(prompt, index) {
  const diffColor  = DIFFICULTY_COLORS[prompt.difficulty] ?? '#888';
  const moodColor  = MOOD_COLORS[prompt.mood]             ?? '#888';
  const catAccent  = CATEGORY_ACCENT[prompt.category]     ?? '#c9a227';

  const catLabel  = CATEGORY_LABELS[prompt.category] || (prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1));
  const suit      = getSuitability(prompt);
  const definition = prompt.definition ?? '';"""

new_build = """function buildCardHTML(prompt, index) {
  const diffColor  = DIFFICULTY_COLORS[prompt.difficulty] ?? '#888';
  const moodColor  = MOOD_COLORS[prompt.mood]             ?? '#888';
  const catAccent  = CATEGORY_ACCENT[prompt.category]     ?? '#c9a227';

  let catLabel  = CATEGORY_LABELS[prompt.category] || (prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1));
  let suit      = getSuitability(prompt);
  let definition = prompt.definition ?? '';
  let diffLabel = prompt.difficulty;
  
  const lang = localStorage.getItem("cine_lang") || "vi";
  if (lang === 'vi') {
    const VI_CATS = {
      camera: 'Góc Máy', lighting: 'Ánh Sáng', composition: 'Bố Cục', editing: 'Hậu Kỳ', genres: 'Thể Loại', storytelling: 'Kể Chuyện', vfx: 'Kỹ Xảo', gear: 'Thiết Bị'
    };
    const VI_DIFFS = {
      Basic: 'Cơ Bản', Intermediate: 'Trung Bình', Advanced: 'Nâng Cao'
    };
    catLabel = VI_CATS[prompt.category] || catLabel;
    diffLabel = VI_DIFFS[prompt.difficulty] || diffLabel;
    definition = prompt.whenToUse || definition;
    if (suit.cls === 'suitability-badge--video') suit.text = '🎥 Chuyên Video';
    else suit.text = '🌟 Đa Năng';
  }"""

ui = ui.replace(old_build, new_build)
ui = ui.replace('>${escapeHTML(prompt.difficulty)}</span>', '>${escapeHTML(diffLabel)}</span>')

with open(ui_path, "w", encoding="utf-8") as f:
    f.write(ui)

print("Done updating i18n logic for cards and negative tags.")
