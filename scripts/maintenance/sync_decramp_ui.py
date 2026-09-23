import os
import shutil
import re

print("Starting UI De-cramping and Vercel Deployment Synchronization...")

ROOT = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
INDEX_PATH = os.path.join(ROOT, "index.html")
PUBLIC_INDEX_PATH = os.path.join(ROOT, "public", "index.html")

# Read index.html
with open(INDEX_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. De-cramp Column 1 Action Toolbar
old_toolbar_regex = re.compile(
    r'<div class="action-toolbar-container".*?<!-- Input 1: Subject',
    re.DOTALL
)

new_toolbar = '''<div class="action-toolbar-container" style="display:flex; flex-direction:column; gap:6px; padding: 10px; background: rgba(18, 20, 32, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; margin-bottom: 14px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); width: 100%; box-sizing: border-box; flex-shrink: 0;">

        <!-- 2-Column Ergonomic Grid for Core Director Tools -->
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; width:100%; box-sizing: border-box;">
          <button id="ai-settings-btn" title="Cấu Hình Máy Chủ AI & Gắn API Key (Gemini, OpenAI...)" data-i18n-title="btn-ai-settings" style="height: 34px; background: rgba(234,179,8,0.18); border: 1px solid rgba(234,179,8,0.45); color:#facc15; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s;" aria-label="AI Settings">
            <span>⚙️</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Cấu Hình AI</span>
          </button>

          <button id="byok-studio-btn" title="Bring Your Own Key: Render video/ảnh trực tiếp qua fal.ai, Luma, Kling" style="height: 34px; background: linear-gradient(135deg, rgba(245,158,11,0.3), rgba(234,88,12,0.3)); border: 1.2px solid #f59e0b; color:#fbbf24; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s; box-shadow: 0 0 10px rgba(245,158,11,0.3);">
            <span>🔑</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">BYOK Studio</span>
          </button>

          <button id="char-os-btn" title="Hệ Điều Hành Sản Xuất Nhân Vật V4.0 (Character Production OS)" style="height: 34px; background: linear-gradient(135deg, rgba(236,72,153,0.35), rgba(255,215,0,0.25)); border: 1.5px solid #ffd700; color:#ffd700; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s; box-shadow: 0 0 10px rgba(255,215,0,0.35);">
            <span>🎭</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Nhân Vật OS</span>
          </button>

          <button id="project-drawer-btn" title="Quản Lý Dự Án & Kịch Bản Phân Cảnh (Storyboard)" style="height: 34px; background: rgba(168,85,247,0.18); border: 1px solid rgba(168,85,247,0.45); color:#c084fc; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s;">
            <span>🎬</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Dự Án / Phim</span>
          </button>

          <button id="glossary-modal-btn" title="Từ Điển Điện Ảnh & Thị Giác Song Ngữ (720+ Thuật Ngữ)" style="height: 34px; background: linear-gradient(135deg, rgba(56,189,248,0.22), rgba(168,85,247,0.22)); border: 1.2px solid #38bdf8; color:#7dd3fc; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s; box-shadow: 0 0 10px rgba(56,189,248,0.2);">
            <span>📚</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Từ Điển 720+</span>
          </button>

          <button id="skill-export-btn" title="Xuất Bộ Kỹ Năng Đạo Diễn Chuẩn AI (SKILL.md cho Claude/Cursor)" style="height: 34px; background: linear-gradient(135deg, rgba(245,158,11,0.22), rgba(255,215,0,0.22)); border: 1.2px solid #ffd700; color:#ffd700; padding: 0 8px; border-radius: 8px; font-size: 0.74rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s;">
            <span>📥</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Xuất SKILL.md</span>
          </button>

          <button id="history-drawer-btn" title="Xem Lịch Sử Kịch Bản Đã Tạo" style="height: 32px; background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.35); color:#38bdf8; padding: 0 8px; border-radius: 7px; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s;">
            <span>🕒</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Lịch Sử Tạo</span>
          </button>

          <button id="tour-start-btn" title="Bắt Đầu Tour Hướng Dẫn 3 Bước" data-i18n-title="btn-tour-title" style="height: 32px; background: rgba(201,162,39,0.18); border: 1px solid rgba(201,162,39,0.4); color:#ffd700; padding: 0 8px; border-radius: 7px; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: flex-start; gap: 6px; box-sizing: border-box; transition: all 0.2s;">
            <span>🎯</span> <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Tour Studio</span>
          </button>
        </div>

        <!-- Utility Row: Guide + Language + Sound (Full Width Clean Strip) -->
        <div style="display:grid; grid-template-columns: 1fr auto auto; gap:6px; width:100%; box-sizing: border-box; margin-top:2px;">
          <button id="help-btn" title="Mở Hướng Dẫn Điện Ảnh Chuyên Sâu" data-i18n-title="btn-guide" style="height: 30px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); color:#e4e4e7; padding: 0 8px; border-radius: 7px; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; box-sizing: border-box; transition: all 0.2s;">
            <span>📖</span> <span>Guide Đạo Diễn</span>
          </button>

          <button id="lang-toggle-btn" title="Switch Language (EN/VI)" style="height: 30px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18); color:#ffd700; padding: 0 10px; border-radius: 7px; font-size: 0.72rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; white-space: nowrap; box-sizing: border-box; transition: all 0.2s;">
            <span class="lang-text">VI</span>
          </button>

          <button id="sfx-toggle-btn" title="Bật/Tắt Âm Thanh Tương Tác" data-i18n-title="btn-sfx-title" style="width: 32px; height: 30px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18); color:#e4e4e7; padding: 0; border-radius: 7px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; box-sizing: border-box; transition: all 0.2s;">
            🔊
          </button>
        </div>

      </div>

      <!-- Input 1: Subject'''

content = old_toolbar_regex.sub(new_toolbar, content)

# 2. In Column 2, streamline the redundant 110px pipeline-tracker-box
old_pipeline_box_regex = re.compile(
    r'<div class="pipeline-tracker-box">.*?</div>\s*</div>\s*<!-- Top Action Bar',
    re.DOTALL
)

new_action_bar_prefix = '''<!-- Top Action Bar (Creative Action & Flow Bridge Relay) -->
      <!-- Clean 1-Line Production Breadcrumb (Replaces 120px bulky tracker box) -->
      <div style="background: rgba(18, 20, 32, 0.95); border-bottom: 1px solid rgba(255, 215, 0, 0.2); padding: 8px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 800; color: #ffd700;">⚡ PRODUCTION FLOW:</span>
          <span style="color: #4ade80; font-weight: 700;">1. Ý Tưởng</span>
          <span style="color: #64748b;">➔</span>
          <span style="color: #38bdf8; font-weight: 700;">2. Ảnh Tĩnh</span>
          <span style="color: #64748b;">➔</span>
          <span style="color: #c084fc; font-weight: 700;">3. Video AI</span>
          <span style="color: #64748b;">➔</span>
          <span style="color: #f59e0b; font-weight: 700;">4. Hậu Kỳ & Nhạc</span>
        </div>
        <span style="font-size: 0.65rem; background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.35); color: #4ade80; padding: 2px 7px; border-radius: 4px; font-weight: 800;">STUDIO READY</span>
      </div>

      <!-- Top Action Bar'''

content = old_pipeline_box_regex.sub(new_action_bar_prefix, content)

# 3. Ensure Column 3 (.sidebar-output) has generous padding-bottom: 280px
content = content.replace(
    '<aside id="sidebar-inspector" class="sidebar-output" style="padding-bottom: 80px;">',
    '<aside id="sidebar-inspector" class="sidebar-output" style="padding-bottom: 280px;">'
)

# 4. Save to index.html and public/index.html
with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(content)

with open(PUBLIC_INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html and public/index.html successfully!")

# 5. Sync the newest JS bundle (index-BeKU_6gu.js) to index-C6RykyBe.js in all asset dirs
BEKU_PATH = os.path.join(ROOT, "assets", "index-BeKU_6gu.js")
C6_PATH = os.path.join(ROOT, "assets", "index-C6RykyBe.js")
PUB_BEKU_PATH = os.path.join(ROOT, "public", "assets", "index-BeKU_6gu.js")
PUB_C6_PATH = os.path.join(ROOT, "public", "assets", "index-C6RykyBe.js")

if os.path.exists(BEKU_PATH):
    shutil.copyfile(BEKU_PATH, C6_PATH)
    shutil.copyfile(BEKU_PATH, PUB_BEKU_PATH)
    shutil.copyfile(BEKU_PATH, PUB_C6_PATH)
    print("Synchronized latest JS bundle to index-C6RykyBe.js and index-BeKU_6gu.js across all asset directories!")

