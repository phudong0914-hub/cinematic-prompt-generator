import re

html_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Make sure it's not already there
if "security.js" not in html:
    html = html.replace('<script type="module" src="./js/app.js?v=18"></script>', '<script type="module" src="./js/app.js"></script>\n  <script src="./js/security.js"></script>')
    html = html.replace('<script type="module" src="./js/app.js"></script>', '<script type="module" src="./js/app.js"></script>\n  <script src="./js/security.js"></script>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)
