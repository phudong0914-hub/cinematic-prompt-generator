import re

html_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"
css_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\styles\main.css"

# 1. Update HTML: Replace 💾 with SVG
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

old_btn = """<button id="export-btn" class="randomize-btn new-btn-outline" style="flex:0.2;" aria-label="Export Favorites">
            <span aria-hidden="true">💾</span>
          </button>"""

new_btn = """<button id="export-btn" class="randomize-btn new-btn-outline" style="flex:0.2; display: flex; align-items: center; justify-content: center;" aria-label="Export Favorites">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:auto;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
          </button>"""

if "💾" in html_content:
    html_content = html_content.replace(old_btn, new_btn)
    
    # Increment cache buster in HTML
    html_content = html_content.replace("v=17", "v=18")
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

# 2. Update CSS: Add contrast for light mode outline buttons
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

extra_css = """
[data-theme="light"] .new-btn-outline {
  background-color: #ffffff !important;
  color: #8a6808 !important; /* Darker gold for better contrast on light mode */
  border: 1px solid rgba(212, 175, 55, 0.4) !important; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.05) !important;
}

[data-theme="light"] .new-btn-outline:hover {
  background-color: rgba(212, 175, 55, 0.08) !important;
  color: #aa8111 !important;
  border-color: rgba(212, 175, 55, 0.8) !important;
}
"""

if "[data-theme=\"light\"] .new-btn-outline" not in css_content:
    # insert before the closing of the previous extra css block or at the end
    css_content += extra_css
    
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)

print("HTML and CSS updated.")
