import re
import os

filepath = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update cache busters
content = content.replace('styles/main.css?v=14', 'styles/main.css?v=15')
content = content.replace('js/app.js?v=14', 'js/app.js?v=15')

# 2. Replace the old header toggles with a premium version
old_toggles = """<div class="header-toggles">
            <button id="theme-toggle-btn" class="header-toggle-btn" title="Toggle Theme">🌙</button>
            <button id="lang-toggle-btn" class="header-toggle-btn" title="Toggle Language">VI</button>
          </div>"""

new_toggles = """<div class="header-toggles">
            <button id="theme-toggle-btn" class="pro-toggle-btn" title="Toggle Theme" aria-label="Toggle Theme">
              <svg class="icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <svg class="icon-sun" style="display:none;" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </button>
            <div class="toggle-divider"></div>
            <button id="lang-toggle-btn" class="pro-toggle-btn lang-btn" title="Toggle Language">
              <span class="lang-text">VI</span>
            </button>
          </div>"""

content = content.replace(old_toggles, new_toggles)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("HTML updated.")
