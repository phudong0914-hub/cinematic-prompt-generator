import os

index_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\index.html"
with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

target = """              <div class="score-bar-row" data-score-key="filmstock" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06); padding: 4px 8px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; grid-column: span 2;">
                <span class="score-bar-label" data-i18n="score-filmstock" style="color:#e4e4e7;">🎞️ Film Stock & Màu</span>
                <span class="score-bar-value" style="font-weight:700; color:#ffd700; font-family:monospace;">0/20</span>
              </div>
            </div>
          </div>
          <div class="score-suggestions\""""

replacement = """              <div class="score-bar-row" data-score-key="filmstock" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06); padding: 4px 8px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; grid-column: span 2;">
                <span class="score-bar-label" data-i18n="score-filmstock" style="color:#e4e4e7;">🎞️ Film Stock & Màu</span>
                <span class="score-bar-value" style="font-weight:700; color:#ffd700; font-family:monospace;">0/20</span>
              </div>
            </div>
          </div>

          <!-- 4 PILLARS OF VISUAL CRITIQUE (photography-course-master) -->
          <div class="scorecard-4pillars" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #ffd700; letter-spacing: 0.05em;">🎓 4 TRỤ CỘT TỰ CHẨN ĐOÁN THỊ GIÁC</span>
              <a href="https://photography-course-master.vercel.app/" target="_blank" rel="noopener noreferrer" style="font-size: 0.68rem; color: #38bdf8; text-decoration: none; display: flex; align-items: center; gap: 3px; background: rgba(56,189,248,0.1); padding: 2px 7px; border-radius: 4px; border: 1px solid rgba(56,189,248,0.3);">
                <span>19 Bài Giảng Gốc ↗</span>
              </a>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; font-size: 0.70rem;">
              <div data-pillar="bocuc" style="background: rgba(124,138,255,0.1); border: 1px solid rgba(124,138,255,0.3); padding: 5px 6px; border-radius: 6px; text-align: center;">
                <div style="color: #7c8aff; font-weight: 700; font-size: 0.65rem;">📐 BỐ CỤC</div>
                <div class="pillar-value" style="font-weight: 900; color: #fff; font-family: monospace; font-size: 0.82rem; margin-top: 2px;">--/100</div>
              </div>
              <div data-pillar="anhsang" style="background: rgba(255,203,107,0.1); border: 1px solid rgba(255,203,107,0.3); padding: 5px 6px; border-radius: 6px; text-align: center;">
                <div style="color: #ffcb6b; font-weight: 700; font-size: 0.65rem;">💡 ÁNH SÁNG</div>
                <div class="pillar-value" style="font-weight: 900; color: #fff; font-family: monospace; font-size: 0.82rem; margin-top: 2px;">--/100</div>
              </div>
              <div data-pillar="mausac" style="background: rgba(240,113,120,0.1); border: 1px solid rgba(240,113,120,0.3); padding: 5px 6px; border-radius: 6px; text-align: center;">
                <div style="color: #f07178; font-weight: 700; font-size: 0.65rem;">🎨 MÀU SẮC</div>
                <div class="pillar-value" style="font-weight: 900; color: #fff; font-family: monospace; font-size: 0.82rem; margin-top: 2px;">--/100</div>
              </div>
              <div data-pillar="chatlieu" style="background: rgba(195,232,141,0.1); border: 1px solid rgba(195,232,141,0.3); padding: 5px 6px; border-radius: 6px; text-align: center;">
                <div style="color: #c3e88d; font-weight: 700; font-size: 0.65rem;">🧪 CHẤT LIỆU</div>
                <div class="pillar-value" style="font-weight: 900; color: #fff; font-family: monospace; font-size: 0.82rem; margin-top: 2px;">--/100</div>
              </div>
            </div>
          </div>

          <div class="score-suggestions\""""

if target in content:
    content = content.replace(target, replacement)
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Inserted into index.html")
else:
    print("ERROR: target not found")
