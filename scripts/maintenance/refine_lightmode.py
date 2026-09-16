import re

filepath = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\styles\main.css"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Light Mode Variables for more contrast
old_light_theme = """[data-theme="light"] {
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

new_light_theme = """[data-theme="light"] {
  --bg-void:         #e5e7eb;  /* Darker gray for outer blocks */
  --bg-deep:         #d1d5db;  /* Even darker gray for left panel */
  --bg-surface:      #ffffff;  /* Keep cards and inputs white */
  --bg-card:         #ffffff;
  --bg-card-solid:   #ffffff;
  --bg-card-hover:   #f9fafb;
  --bg-result:       #ffffff;

  --border-subtle:   rgba(0, 0, 0, 0.15); /* Stronger borders */
  --border-mid:      rgba(0, 0, 0, 0.25);
  --border-accent:   rgba(201, 162, 39, 0.9);

  --text-primary:    #000000;  /* Pure black for highest contrast */
  --text-secondary:  #111827;  /* Very dark gray */
  --text-muted:      #374151;  /* Darker muted text for readability */
  
  --accent-glow:     rgba(201, 162, 39, 0.2);
}"""

content = content.replace(old_light_theme, new_light_theme)

# 2. Append extra overrides for tags in light mode
extra_css = """

/* --- LIGHT MODE PRO OVERRIDES --- */
[data-theme="light"] .control-label {
  font-weight: 700;
  color: var(--text-secondary);
}

[data-theme="light"] .quick-tag,
[data-theme="light"] .motion-tag,
[data-theme="light"] .neg-pill,
[data-theme="light"] .pos-pill,
[data-theme="light"] .tag-btn {
  background: rgba(0, 0, 0, 0.06) !important;
  color: var(--text-secondary) !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  font-weight: 600 !important;
}

[data-theme="light"] .quick-tag:hover,
[data-theme="light"] .motion-tag:hover,
[data-theme="light"] .neg-pill:hover,
[data-theme="light"] .pos-pill:hover,
[data-theme="light"] .tag-btn:hover {
  background: rgba(0, 0, 0, 0.12) !important;
  color: var(--text-primary) !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}

[data-theme="light"] .card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

[data-theme="light"] .card.is-active {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 2px var(--border-accent);
}
"""

if "/* --- LIGHT MODE PRO OVERRIDES --- */" not in content:
    content += extra_css

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS refined.")
