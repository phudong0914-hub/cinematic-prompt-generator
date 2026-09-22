import os

index_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\index.html"
public_index_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\public\index.html"

with open(index_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add Glossary and Skill Export buttons in the action toolbar Row 2
row2_needle = """<button id="history-drawer-btn" title="Xem Lịch Sử Kịch Bản Đã Tạo" style="height: 30px; background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.35); color:#38bdf8; padding: 0 4px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box; transition: all 0.2s;">
            <span style="overflow:hidden; text-overflow:ellipsis;">🕒 Lịch Sử</span>
          </button>"""

row2_addon = """<button id="glossary-modal-btn" title="Từ Điển Điện Ảnh & Thị Giác Song Ngữ (720+ Thuật Ngữ)" style="height: 30px; background: linear-gradient(135deg, rgba(56,189,248,0.25), rgba(168,85,247,0.25)); border: 1.2px solid #38bdf8; color:#7dd3fc; padding: 0 4px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box; transition: all 0.2s; box-shadow: 0 0 10px rgba(56,189,248,0.25);">
            <span style="overflow:hidden; text-overflow:ellipsis;">📚 Từ Điển 720+</span>
          </button>

          <button id="skill-export-btn" title="Xuất Bộ Kỹ Năng Đạo Diễn Chuẩn AI (SKILL.md cho Claude/Cursor)" style="height: 30px; background: linear-gradient(135deg, rgba(245,158,11,0.25), rgba(255,215,0,0.25)); border: 1.2px solid #ffd700; color:#ffd700; padding: 0 4px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box; transition: all 0.2s;">
            <span style="overflow:hidden; text-overflow:ellipsis;">📥 Xuất SKILL</span>
          </button>

          """ + row2_needle

if row2_needle in html:
    html = html.replace(row2_needle, row2_addon)
    print("SUCCESS: Inserted toolbar buttons into index.html")
else:
    print("WARNING: row2_needle not found")

# 2. Add 10 Commercial Presets & Emotion-to-Shot Matrix inside style-presets-bar
presets_needle = """<!-- 🎬 8 HOLLYWOOD MASTER DIRECTORS -->"""

commercial_presets_addon = """<!-- 💎 10 COMMERCIAL PRODUCTION PRESETS -->
        <div style="width:100%; margin-bottom:8px; padding-bottom:6px; border-bottom:1px dashed rgba(255,255,255,0.12);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-size:0.70rem; font-weight:800; color:#ffd700; letter-spacing:0.04em;">🔥 10 COMMERCIAL PRESETS (THỰC CHIẾN):</span>
            <span style="font-size:0.62rem; color:#38bdf8; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); padding:1px 6px; border-radius:4px;">High-Converting</span>
          </div>
          <div style="display:flex; gap:5px; overflow-x:auto; padding-bottom:4px;" class="custom-scrollbar">
            <button class="style-pill commercial-pill" data-comm-id="comm_flashback" title="Kể chuyện & Hồi tưởng: Áo bà ba, Ánh sáng cửa sổ, 35mm Grain">
              <span>👵 1. Kể Chuyện</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_horror" title="Kinh dị Pháp cổ: Dutch tilt, Ánh nến đơn lẻ, Sương sàn">
              <span>🕯️ 2. Kinh Dị</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_wuxia" title="Cổ trang Tu tiên: Biển mây, Tia sáng God rays, Thủy mặc">
              <span>☁️ 3. Tu Tiên</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_ecommerce_suite" title="E-Commerce 2-Clip: Clip 1 Xoay 360° + Clip 2 Macro chi tiết">
              <span>📦 4. E-Com 2-Clip</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_food" title="Ẩm thực: Phở bốc khói, Flat lay -> 45°, Ánh sáng ngược">
              <span>🍜 5. Ẩm Thực</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_corporate" title="Talking Head: Ánh sáng 2 điểm, Nền bokeh, Phong thái chuyên gia">
              <span>🎙️ 6. Đào Tạo</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_neon_noir" title="Phố đêm mưa Neon: Mặt đường ướt, Vệt Anamorphic, Áo da">
              <span>🌃 7. Phố Đêm</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_travel_drone" title="Du lịch FPV: Ruộng bậc thang Mù Cang Chải, Hoàng hôn rực rỡ">
              <span>🚁 8. Du Lịch FPV</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_action" title="Hành động tốc độ cao: Đua xe ôm cua, Shutter 180°, Tracking">
              <span>🏎️ 9. Hành Động</span>
            </button>
            <button class="style-pill commercial-pill" data-comm-id="comm_tiktok_ugc" title="TikTok/Reels UGC: Góc quay điện thoại tự nhiên, Unboxing chân thực">
              <span>📱 10. TikTok UGC</span>
            </button>
          </div>
        </div>

        <!-- 🎭 EMOTION-TO-SHOT DIRECTOR HUD (Ma Trận Cảm Xúc) -->
        <div style="width:100%; margin-bottom:8px; padding-bottom:6px; border-bottom:1px dashed rgba(255,255,255,0.12);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-size:0.70rem; font-weight:800; color:#c084fc; letter-spacing:0.04em;">🎭 ĐẠO DIỄN CẢM XÚC (EMOTION-TO-SHOT):</span>
            <span style="font-size:0.62rem; color:#a855f7;">Tự động phối Góc + Sáng + Màu</span>
          </div>
          <div style="display:flex; gap:4px; overflow-x:auto; padding-bottom:4px;" class="custom-scrollbar">
            <button class="emotion-pill" data-emotion="melancholic" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#cbd5e1; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              🌧️ Buồn / Cô Đơn
            </button>
            <button class="emotion-pill" data-emotion="empowered" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#ffd700; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              👑 Quyền Lực
            </button>
            <button class="emotion-pill" data-emotion="nostalgic" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#f59e0b; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              🍂 Ấm Áp / Ký Ức
            </button>
            <button class="emotion-pill" data-emotion="mysterious_eerie" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#2dd4bf; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              🕯️ Bí Ẩn / Kinh Dị
            </button>
            <button class="emotion-pill" data-emotion="majestic_awe" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#38bdf8; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              ⛰️ Kỳ Vĩ / Choáng Ngợp
            </button>
            <button class="emotion-pill" data-emotion="intimate_romantic" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#f472b6; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              🌹 Lãng Mạn / Thân Mật
            </button>
            <button class="emotion-pill" data-emotion="intense_urgent" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#ef4444; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              ⚡ Hành Động / Gấp Gáp
            </button>
            <button class="emotion-pill" data-emotion="dreamy_surreal" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#c084fc; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:6px; cursor:pointer; white-space:nowrap; transition:all 0.2s;">
              ✨ Mơ Màng / Siêu Thực
            </button>
          </div>
        </div>

        """ + presets_needle

if presets_needle in html:
    html = html.replace(presets_needle, commercial_presets_addon)
    print("SUCCESS: Inserted Commercial Presets and Emotion Matrix into index.html")
else:
    print("WARNING: presets_needle not found")

# 3. Add 2 Modals before </body>: Bilingual Glossary Modal & Skill Export Modal
modals_addon = """
  <!-- ================================================================ -->
  <!-- MODAL: TỪ ĐIỂN ĐIỆN ẢNH & THỊ GIÁC SONG NGỮ ANH - VIỆT (720+)     -->
  <!-- ================================================================ -->
  <div id="bilingual-glossary-modal" role="dialog" aria-modal="true" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); z-index:999999; align-items:center; justify-content:center; padding:20px;">
    <div style="background:#0f111a; border:1.5px solid rgba(56,189,248,0.45); border-radius:14px; width:95%; max-width:980px; max-height:92vh; display:flex; flex-direction:column; box-shadow:0 0 50px rgba(56,189,248,0.25); overflow:hidden;">
      
      <!-- Modal Header -->
      <div style="padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center; background:linear-gradient(90deg, rgba(56,189,248,0.08), transparent);">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.3rem;">📚</span>
          <div>
            <h3 style="margin:0; font-size:1.0rem; font-weight:800; color:#38bdf8; letter-spacing:0.5px;">TỪ ĐIỂN ĐIỆN ẢNH & THỊ GIÁC SONG NGỮ ANH - VIỆT</h3>
            <span style="font-size:0.75rem; color:#94a3b8;">720+ thuật ngữ quay phim, góc máy, ánh sáng, bố cục & quang học chuyên sâu</span>
          </div>
        </div>
        <button id="glossary-close-btn" type="button" style="background:transparent; border:none; color:#a1a1aa; font-size:1.4rem; cursor:pointer; padding:4px 8px; border-radius:6px; transition:color 0.2s;" onmouseover="this.style.color='#fff';" onmouseout="this.style.color='#a1a1aa';">✕</button>
      </div>

      <!-- Search & Filters -->
      <div style="padding:14px 20px; background:rgba(255,255,255,0.02); border-bottom:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; gap:10px;">
        <div style="position:relative; width:100%;">
          <input id="glossary-search-input" type="text" placeholder="🔍 Tìm kiếm thuật ngữ (gõ tiếng Việt hoặc tiếng Anh: Dutch tilt, góc nghiêng, Chiaroscuro, ngược sáng, f/1.4...)" style="width:100%; box-sizing:border-box; background:rgba(0,0,0,0.45); border:1px solid rgba(56,189,248,0.35); border-radius:8px; padding:10px 14px; font-size:0.88rem; color:#fff; outline:none; transition:border 0.2s;" autocomplete="off" spellcheck="false" />
        </div>
        <div id="glossary-category-pills" style="display:flex; gap:6px; flex-wrap:wrap;">
          <button class="glossary-cat-btn active" data-cat="all" style="background:#38bdf8; color:#000; border:none; font-size:0.72rem; font-weight:800; padding:4px 10px; border-radius:6px; cursor:pointer;">Tất Cả (720+)</button>
          <button class="glossary-cat-btn" data-cat="camera_movement" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">🎥 Góc & Máy</button>
          <button class="glossary-cat-btn" data-cat="lighting" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">💡 Ánh Sáng</button>
          <button class="glossary-cat-btn" data-cat="composition" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">📐 Bố Cục</button>
          <button class="glossary-cat-btn" data-cat="lens_film" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">🎞️ Ống Kính & Phim</button>
          <button class="glossary-cat-btn" data-cat="style_color_mood" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">🎨 Màu & Mood</button>
          <button class="glossary-cat-btn" data-cat="materials_weather_pose" style="background:rgba(255,255,255,0.06); color:#cbd5e1; border:1px solid rgba(255,255,255,0.12); font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:6px; cursor:pointer;">🌦️ Chất Liệu & Dáng</button>
        </div>
      </div>

      <!-- Results Body -->
      <div id="glossary-results-container" style="flex:1; padding:14px 20px; overflow-y:auto; display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:10px;" class="custom-scrollbar">
        <!-- Injected dynamically via JS -->
      </div>

      <!-- Modal Footer -->
      <div style="padding:10px 20px; border-top:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#64748b;">
        <span id="glossary-stats-text">Đang hiển thị 722 thuật ngữ</span>
        <button id="glossary-modal-done-btn" type="button" style="background:#38bdf8; border:none; color:#000; padding:6px 14px; border-radius:6px; font-weight:800; cursor:pointer;">Hoàn Tất</button>
      </div>

    </div>
  </div>

  <!-- ================================================================ -->
  <!-- MODAL: XUẤT BỘ KỸ NĂNG ĐẠO DIỄN CHUẨN AI (SKILL.MD CHO CLAUDE/CURSOR) -->
  <!-- ================================================================ -->
  <div id="skill-export-modal" role="dialog" aria-modal="true" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.88); backdrop-filter:blur(12px); z-index:999999; align-items:center; justify-content:center; padding:20px;">
    <div style="background:#11131f; border:1.5px solid rgba(255,215,0,0.45); border-radius:14px; width:95%; max-width:860px; max-height:90vh; display:flex; flex-direction:column; box-shadow:0 0 40px rgba(255,215,0,0.25); overflow:hidden;">
      
      <!-- Header -->
      <div style="padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.3rem;">📥</span>
          <div>
            <h3 style="margin:0; font-size:1.0rem; font-weight:800; color:#ffd700;">XUẤT AI SKILL (SKILL.MD) — CINE PROMPT PRO</h3>
            <span style="font-size:0.75rem; color:#a1a1aa;">Đóng gói toàn bộ tri thức đạo diễn quang học để nạp vào Claude Code, Cursor, Antigravity, ChatGPT</span>
          </div>
        </div>
        <button id="skill-export-close-btn" type="button" style="background:transparent; border:none; color:#a1a1aa; font-size:1.4rem; cursor:pointer;">✕</button>
      </div>

      <!-- Body -->
      <div style="padding:16px 20px; flex:1; display:flex; flex-direction:column; gap:10px; overflow:hidden;">
        <div style="background:rgba(255,215,0,0.08); border:1px solid rgba(255,215,0,0.25); padding:10px 14px; border-radius:8px; font-size:0.78rem; color:#cbd5e1; line-height:1.5;">
          💡 <strong>Hướng dẫn sử dụng:</strong> Lưu file này thành <code>SKILL.md</code> trong thư mục <code>.agents/skills/cine-prompt-pro/</code> hoặc dán vào Custom Instructions của Claude/Cursor để trợ lý AI tự động tạo prompt theo chuẩn Cine Prompt Pro!
        </div>
        <textarea id="skill-export-textarea" style="flex:1; width:100%; min-height:360px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.15); border-radius:10px; color:#f4f4f5; font-size:0.85rem; line-height:1.5; padding:12px 14px; font-family:'JetBrains Mono', monospace; resize:none; outline:none; box-sizing:border-box;" readonly></textarea>
      </div>

      <!-- Footer -->
      <div style="padding:12px 20px; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:flex-end; gap:10px; background:rgba(0,0,0,0.25);">
        <button id="skill-export-copy-btn" type="button" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:#fff; padding:8px 16px; border-radius:8px; font-size:0.8rem; font-weight:700; cursor:pointer;">📋 Sao Chép Toàn Bộ</button>
        <button id="skill-export-download-btn" type="button" style="background:linear-gradient(135deg, #ffd700, #f59e0b); border:none; color:#000; padding:8px 20px; border-radius:8px; font-size:0.82rem; font-weight:800; cursor:pointer; box-shadow:0 0 12px rgba(255,215,0,0.4);">💾 Tải Tệp SKILL.md</button>
      </div>

    </div>
  </div>
"""

body_needle = "</body>"
if body_needle in html:
    html = html.replace(body_needle, modals_addon + "\n" + body_needle)
    print("SUCCESS: Inserted Modals into index.html")
else:
    print("WARNING: body_needle not found")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(html)

with open(public_index_path, "w", encoding="utf-8") as f:
    f.write(html)

print("SUCCESS: Both index.html and public/index.html updated successfully!")
