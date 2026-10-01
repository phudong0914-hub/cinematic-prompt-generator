import os

html_path = "index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

old_meta = '<title>Cine Prompt Pro v2.0 - Studio Engine</title>'
new_meta = '''<title>Cine Prompt Pro v2.0 — By Đạo Diễn Trung</title>
  <meta name="author" content="Đạo Diễn Trung" />
  <meta property="og:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trung" />
  <meta property="og:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trung — 82+ Director Styles, Optical Linters & Multi-shot Storytelling." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cine-prompt-pro.vercel.app" />
  <meta property="og:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trung" />
  <meta name="twitter:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trung." />
  <meta name="twitter:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />'''

if old_meta in content:
    content = content.replace(old_meta, new_meta, 1)
    print("Updated Title and Meta Tags OK")

old_sub = '<p class="brand-subtitle" style="font-size: 0.70rem; margin: 0; color: #a1a1aa; letter-spacing: 0.06em; text-transform: uppercase;">Studio Engine v2.0</p>'
new_sub = '<p class="brand-subtitle" style="font-size: 0.68rem; margin: 0; color: #a1a1aa; letter-spacing: 0.04em; display: flex; align-items: center; gap: 6px;"><span style="text-transform: uppercase;">Studio Engine v2.0</span><span style="color: rgba(255,215,0,0.4);">•</span><span style="color: #ffd700; font-weight: 700;">by Đạo Diễn Trung</span></p>'

if old_sub in content:
    content = content.replace(old_sub, new_sub, 1)
    print("Updated Brand Subtitle OK")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Done updating branding.")
