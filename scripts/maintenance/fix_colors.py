import re

filepath = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\styles\main.css"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Light Mode Variables
old_light_theme = """[data-theme="light"] {
  --bg-void:         #f4f4f6;
  --bg-deep:         #f9f9fa;
  --bg-surface:      #ffffff;
  --bg-card:         #ffffffcc;
  --bg-card-solid:   #ffffff;
  --bg-card-hover:   #f0f0f4;
  --bg-result:       #ffffff;

  --border-subtle:   rgba(0, 0, 0, 0.08);
  --border-mid:      rgba(0, 0, 0, 0.15);
  --border-accent:   rgba(201, 162, 39, 0.5);

  --text-primary:    #111111;
  --text-secondary:  #444455;
  --text-muted:      #666677;
  
  --accent-glow:     rgba(201, 162, 39, 0.3);
}"""

new_light_theme = """[data-theme="light"] {
  --bg-void:         #f0f2f5;
  --bg-deep:         #e4e6eb;
  --bg-surface:      #ffffff;
  --bg-card:         #ffffff;
  --bg-card-solid:   #ffffff;
  --bg-card-hover:   #f8f9fa;
  --bg-result:       #ffffff;

  --border-subtle:   rgba(0, 0, 0, 0.08);
  --border-mid:      rgba(0, 0, 0, 0.15);
  --border-accent:   rgba(201, 162, 39, 0.8);

  --text-primary:    #050505;
  --text-secondary:  #4a4b4c;
  --text-muted:      #65676b;
  
  --accent-glow:     rgba(201, 162, 39, 0.15);
}"""

content = content.replace(old_light_theme, new_light_theme)

# 2. Fix layout hardcoded colors
content = content.replace("background-color: #0d0d0d;", "background-color: var(--bg-void);")
content = content.replace("background-color: #121212;", "background-color: var(--bg-surface);")
content = content.replace("border-bottom: 1px solid #2a2a2a;", "border-bottom: 1px solid var(--border-subtle);")
content = content.replace("background-color: #161618;", "background-color: var(--bg-deep);")
content = content.replace("border-right: 1px solid #2a2a2a;", "border-right: 1px solid var(--border-subtle);")

content = content.replace("background-color: #0a0a0a !important;", "background-color: var(--bg-surface) !important;")
content = content.replace("border: 1px solid #333 !important;", "border: 1px solid var(--border-subtle) !important;")
content = content.replace("color: #e0e0e0;", "color: var(--text-primary);")

# 3. Fix card texts
content = content.replace("color: #cccccc;", "color: var(--text-secondary);")
content = content.replace("""
.card:hover .card-name,
.card:focus .card-name {
  color: #fff;
}""", """
.card:hover .card-name,
.card:focus .card-name {
  color: var(--text-accent);
}""")

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS variables applied.")
