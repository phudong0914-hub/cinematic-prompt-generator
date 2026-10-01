import os
import sys

# Ensure UTF-8 stdout
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

html_path = "index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title and Meta Tags
old_title_meta = """<title>Cine Prompt Pro v2.0 — By Đạo Diễn Trung</title>
  <meta name="author" content="Đạo Diễn Trung" />
  <meta property="og:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trung" />
  <meta property="og:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trung — 82+ Director Styles, Optical Linters & Multi-shot Storytelling." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cine-prompt-pro.vercel.app" />
  <meta property="og:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trung" />
  <meta name="twitter:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trung." />
  <meta name="twitter:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />"""

new_title_meta = """<title>Cine Prompt Pro v2.0 — By Đạo Diễn Trungvt</title>
  <meta name="author" content="Đạo Diễn Trungvt (trungvtco@gmail.com - 0836.384.168)" />
  <meta property="og:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trungvt" />
  <meta property="og:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trungvt (Hotline: 0836.384.168 · trungvtco@gmail.com) — 82+ Director Styles, Optical Linters & Multi-shot Storytelling." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://cine-prompt-pro.vercel.app" />
  <meta property="og:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cine Prompt Pro v2.0 — By Đạo Diễn Trungvt" />
  <meta name="twitter:description" content="Hollywood Cinematic Prompt & Storyboard Engine by Đạo Diễn Trungvt (Hotline: 0836.384.168 · Email: trungvtco@gmail.com)." />
  <meta name="twitter:image" content="https://cine-prompt-pro.vercel.app/logo.jpg" />"""

if old_title_meta in content:
    content = content.replace(old_title_meta, new_title_meta)
    print("Updated Meta Tags OK")

# 2. Update Subtitle
content = content.replace("by Đạo Diễn Trung", "by Đạo Diễn Trungvt")

# 3. Update Avatar Initial from DT to TV
content = content.replace('>DT</div>', '>TV</div>')

# 4. Update Header Name
content = content.replace('Đạo Diễn Trung</div>', 'Đạo Diễn Trungvt</div>')

# 5. Add phone under header name if not present
old_director_name_block = '<div id="auth-header-name" style="font-family: var(--font-ui, \'Inter\', sans-serif); font-size: 0.86rem; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; text-shadow: 0 1px 3px rgba(0,0,0,0.6);">Đạo Diễn Trungvt</div>'
new_director_name_block = '<div id="auth-header-name" style="font-family: var(--font-ui, \'Inter\', sans-serif); font-size: 0.86rem; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; text-shadow: 0 1px 3px rgba(0,0,0,0.6);">Đạo Diễn Trungvt</div><div style="font-size: 0.60rem; color: #38bdf8; font-family: monospace; display: flex; align-items: center; gap: 4px; margin-top: 1px;"><span style="color: #4ade80;">●</span> 0836.384.168</div>'

if old_director_name_block in content and '0836.384.168' not in content:
    content = content.replace(old_director_name_block, new_director_name_block, 1)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)

print("index.html successfully written.")
