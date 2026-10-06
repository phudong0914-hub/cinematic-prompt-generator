import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"

# ==============================================================================
# 1. Update index.html
# ==============================================================================
index_path = os.path.join(base_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

# Header Brand Top Hotline Badge
target_live = '''        <div style="display: flex; align-items: center; gap: 4px; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); padding: 2px 7px; border-radius: 12px; font-size: 0.62rem; font-weight: 800; color: #4ade80; letter-spacing: 0.06em;">
          <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e;"></span>
          <span>LIVE</span>
        </div>'''

replacement_live = '''        <div style="display: flex; align-items: center; gap: 6px;">
          <a href="https://zalo.me/0836384168" target="_blank" rel="noopener noreferrer" id="header-director-hotline-badge" title="Hotline & Zalo Đạo Diễn Trungvt: 0836.384.168 (Bấm để liên hệ Zalo / Cố vấn kịch bản)" style="display: inline-flex; align-items: center; gap: 4px; background: rgba(255, 215, 0, 0.12); border: 1px solid rgba(255, 215, 0, 0.4); color: #ffd700; text-decoration: none; padding: 2px 7px; border-radius: 12px; font-size: 0.62rem; font-weight: 700; transition: all 0.2s; box-shadow: 0 0 8px rgba(255, 215, 0, 0.15);">
            <span>📞</span>
            <span>0836.384.168</span>
            <span style="font-size: 0.55rem; background: rgba(255, 215, 0, 0.25); color: #fff; padding: 0 3px; border-radius: 3px;">Zalo</span>
          </a>
          <div style="display: flex; align-items: center; gap: 4px; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); padding: 2px 7px; border-radius: 12px; font-size: 0.62rem; font-weight: 800; color: #4ade80; letter-spacing: 0.06em;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e;"></span>
            <span>LIVE</span>
          </div>
        </div>'''

target_live_norm = target_live.replace("\r\n", "\n")
content_norm = content.replace("\r\n", "\n")
if target_live_norm in content_norm:
    content_norm = content_norm.replace(target_live_norm, replacement_live.replace("\r\n", "\n"), 1)
    print("[index.html] Patched Header Brand Top with Director Hotline badge")

# Director Identity Slate Tag
target_role = '''            <div style="display: flex; align-items: center;">
              <span id="auth-header-role" style="font-size: 0.60rem; font-weight: 800; color: #ffd700; letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1;">🎬 HOLLYWOOD DIRECTOR</span>
            </div>'''

replacement_role = '''            <div style="display: flex; align-items: center; gap: 6px;">
              <span id="auth-header-role" style="font-size: 0.60rem; font-weight: 800; color: #ffd700; letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1;">🎬 HOLLYWOOD DIRECTOR</span>
              <span style="font-size: 0.58rem; color: #facc15; background: rgba(250, 204, 21, 0.15); padding: 0 4px; border-radius: 3px; border: 1px solid rgba(250, 204, 21, 0.3);">0836.384.168</span>
            </div>'''

target_role_norm = target_role.replace("\r\n", "\n")
if target_role_norm in content_norm:
    content_norm = content_norm.replace(target_role_norm, replacement_role.replace("\r\n", "\n"), 1)
    print("[index.html] Patched Hollywood Director Role Slate")

# Output Dock Contact Bar (Above Details Modal)
target_dock_end = '''          </div>
        </div>

      </div>
    </div>
  </footer>'''

replacement_dock_end = '''          </div>
        </div>

        <!-- VIP Director Contact Bar -->
        <div class="director-contact-strip" style="margin-top: 10px; background: linear-gradient(90deg, rgba(20,24,38,0.95) 0%, rgba(30,22,12,0.95) 100%); border: 1px solid rgba(255,215,0,0.3); border-radius: 8px; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; font-size: 0.72rem; flex-wrap: wrap; gap: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="color: #ffd700; font-size: 0.85rem;">🎬</span>
            <span style="color: #e4e4e7; font-weight: 600;">Cố Vấn Kịch Bản &amp; TVC Độc Quyền:</span>
            <span style="color: #ffd700; font-weight: 800;">Đạo Diễn Trungvt</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <a href="https://zalo.me/0836384168" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; font-weight: 700; background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.35); padding: 2px 8px; border-radius: 5px; transition: all 0.2s;">
              <span>💬</span><span>Zalo: 0836.384.168</span>
            </a>
            <span style="color: #71717a;">•</span>
            <span style="color: #a1a1aa; font-family: monospace;">cinemapromptpro@gmail.com</span>
          </div>
        </div>

      </div>
    </div>
  </footer>'''

target_dock_norm = target_dock_end.replace("\r\n", "\n")
if target_dock_norm in content_norm:
    content_norm = content_norm.replace(target_dock_norm, replacement_dock_end.replace("\r\n", "\n"), 1)
    print("[index.html] Patched Output Dock with Director Contact Bar")

# Profile Modal VIP Booking Card
target_prof = '''            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: #e4e4e7; display: block; margin-bottom: 5px;">Số điện thoại liên hệ</label>
              <input type="text" id="prof-phone" class="text-input new-input-field" placeholder="VD: +84 988 776 655" style="padding: 8px 12px; font-size: 0.84rem;" />
            </div>
          </div>'''

replacement_prof = '''            <div>
              <label style="font-size: 0.75rem; font-weight: 700; color: #e4e4e7; display: block; margin-bottom: 5px;">Số điện thoại liên hệ</label>
              <input type="text" id="prof-phone" class="text-input new-input-field" value="0836.384.168" placeholder="0836.384.168" style="padding: 8px 12px; font-size: 0.84rem;" />
            </div>

            <!-- VIP Director Booking & Contact Card -->
            <div style="grid-column: span 2; background: linear-gradient(135deg, rgba(201, 162, 39, 0.12) 0%, rgba(15, 23, 42, 0.7) 100%); border: 1.2px solid rgba(255, 215, 0, 0.35); border-radius: 10px; padding: 12px 16px; margin-top: 4px; box-shadow: 0 4px 14px rgba(0,0,0,0.35);">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 1.2rem;">🎬</span>
                  <div>
                    <div style="font-size: 0.84rem; font-weight: 800; color: #ffd700; letter-spacing: 0.03em;">HỢP TÁC SẢN XUẤT CÙNG ĐẠO DIỄN TRUNGVT</div>
                    <div style="font-size: 0.70rem; color: #94a3b8;">Cố vấn kịch bản điện ảnh • Sản xuất TVC AI • Đào tạo Workflow</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <a href="https://zalo.me/0836384168" target="_blank" rel="noopener noreferrer" style="background: linear-gradient(135deg, #0284c7, #0369a1); border: 1px solid #38bdf8; color: #fff; text-decoration: none; padding: 5px 12px; border-radius: 6px; font-size: 0.74rem; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 0 10px rgba(56, 189, 248, 0.3); transition: all 0.2s;">
                    <span>💬</span><span>Nhắn Zalo: 0836.384.168</span>
                  </a>
                  <button type="button" onclick="navigator.clipboard.writeText('0836.384.168'); alert('✨ Đã sao chép số điện thoại Đạo Diễn Trungvt: 0836.384.168');" style="background: rgba(255,215,0,0.15); border: 1px solid rgba(255,215,0,0.4); color: #ffd700; padding: 5px 10px; border-radius: 6px; font-size: 0.74rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                    <span>📋</span><span>Sao Chép Số</span>
                  </button>
                </div>
              </div>
              <div style="font-size: 0.72rem; color: #cbd5e1; line-height: 1.5; border-top: 1px dashed rgba(255,215,0,0.2); padding-top: 8px;">
                📞 <strong>Hotline/Zalo:</strong> <span style="color: #ffd700; font-weight: 700;">0836.384.168</span> &nbsp;|&nbsp; ✉️ <strong>Email:</strong> <span style="color: #38bdf8;">cinemapromptpro@gmail.com</span> &nbsp;|&nbsp; 🌐 <strong>Studio:</strong> Trungvt Studio Production
              </div>
            </div>
          </div>'''

target_prof_norm = target_prof.replace("\r\n", "\n")
if target_prof_norm in content_norm:
    content_norm = content_norm.replace(target_prof_norm, replacement_prof.replace("\r\n", "\n"), 1)
    print("[index.html] Patched Profile Modal with VIP Booking Card")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(content_norm)
print("[index.html] Successfully updated")


# ==============================================================================
# 2. Update workflow.html (Archify Workflow Map)
# ==============================================================================
workflow_path = os.path.join(base_dir, "workflow.html")
with open(workflow_path, "r", encoding="utf-8") as f:
    wf_content = f.read()

wf_norm = wf_content.replace("\r\n", "\n")

# Top nav bar update
target_wf_nav = '''    <div style="display: flex; align-items: center; gap: 10px;">
      <a href="/index.html" style="color: #ffd700; text-decoration: none; padding: 5px 12px; background: rgba(255,215,0,0.12); border: 1px solid rgba(255,215,0,0.35); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 5px; transition: all 0.2s;">
        <span>⚡</span><span>Quay Về Studio</span>
      </a>'''

replacement_wf_nav = '''    <div style="display: flex; align-items: center; gap: 10px;">
      <a href="https://zalo.me/0836384168" target="_blank" rel="noopener noreferrer" title="Hotline & Zalo Đạo Diễn Trungvt: 0836.384.168 (Hợp tác sản xuất & Cố vấn kịch bản)" style="color: #ffd700; text-decoration: none; padding: 5px 12px; background: rgba(255,215,0,0.15); border: 1px solid rgba(255,215,0,0.45); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 6px; box-shadow: 0 0 10px rgba(255,215,0,0.2); transition: all 0.2s;">
        <span>📞</span><span>Hotline / Zalo: 0836.384.168</span>
      </a>
      <a href="/index.html" style="color: #ffd700; text-decoration: none; padding: 5px 12px; background: rgba(255,215,0,0.12); border: 1px solid rgba(255,215,0,0.35); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 5px; transition: all 0.2s;">
        <span>⚡</span><span>Quay Về Studio</span>
      </a>'''

if target_wf_nav in wf_norm:
    wf_norm = wf_norm.replace(target_wf_nav, replacement_wf_nav, 1)
    print("[workflow.html] Patched top nav with Director Hotline")

# SVG node-cine_studio title & label
target_wf_node = '''        <text data-detail="fine" x="357.6" y="149" class="t-frontend" font-size="7" text-anchor="middle">Port 5173 / Vercel</text>'''
replacement_wf_node = '''        <text data-detail="fine" x="357.6" y="149" class="t-frontend" font-size="7" text-anchor="middle">Đạo Diễn: 0836.384.168</text>'''

if target_wf_node in wf_norm:
    wf_norm = wf_norm.replace(target_wf_node, replacement_wf_node, 1)
    print("[workflow.html] Patched SVG node-cine_studio label with Director contact")

with open(workflow_path, "w", encoding="utf-8") as f:
    f.write(wf_norm)
print("[workflow.html] Successfully updated")


# ==============================================================================
# 3. Update codeflow.html (CodeFlow Micro Map)
# ==============================================================================
codeflow_path = os.path.join(base_dir, "codeflow.html")
with open(codeflow_path, "r", encoding="utf-8") as f:
    cf_content = f.read()

cf_norm = cf_content.replace("\r\n", "\n")

target_cf_nav = '''  <div style="display: flex; align-items: center; gap: 8px;">
    <a href="/index.html" style="color: #ffd700; text-decoration: none; padding: 4px 10px; background: rgba(255,215,0,0.12); border: 1px solid rgba(255,215,0,0.35); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 4px; transition: all 0.2s;">
      <span>⚡</span><span>Quay Về Studio</span>
    </a>'''

replacement_cf_nav = '''  <div style="display: flex; align-items: center; gap: 8px;">
    <a href="https://zalo.me/0836384168" target="_blank" rel="noopener noreferrer" style="color: #ffd700; text-decoration: none; padding: 4px 10px; background: rgba(255,215,0,0.15); border: 1px solid rgba(255,215,0,0.4); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 4px; transition: all 0.2s;">
      <span>📞</span><span>Hotline/Zalo: 0836.384.168</span>
    </a>
    <a href="/index.html" style="color: #ffd700; text-decoration: none; padding: 4px 10px; background: rgba(255,215,0,0.12); border: 1px solid rgba(255,215,0,0.35); border-radius: 6px; font-weight: 700; display: flex; align-items: center; gap: 4px; transition: all 0.2s;">
      <span>⚡</span><span>Quay Về Studio</span>
    </a>'''

if target_cf_nav in cf_norm:
    cf_norm = cf_norm.replace(target_cf_nav, replacement_cf_nav, 1)
    print("[codeflow.html] Patched top nav with Director Hotline")

with open(codeflow_path, "w", encoding="utf-8") as f:
    f.write(cf_norm)
print("[codeflow.html] Successfully updated")


# ==============================================================================
# 4. Update system_architecture.html
# ==============================================================================
sa_path = os.path.join(base_dir, "system_architecture.html")
if os.path.exists(sa_path):
    with open(sa_path, "r", encoding="utf-8") as f:
        sa_content = f.read()
    sa_norm = sa_content.replace("\r\n", "\n")
    if target_wf_nav in sa_norm:
        sa_norm = sa_norm.replace(target_wf_nav, replacement_wf_nav, 1)
        print("[system_architecture.html] Patched top nav with Director Hotline")
    if target_wf_node in sa_norm:
        sa_norm = sa_norm.replace(target_wf_node, replacement_wf_node, 1)
        print("[system_architecture.html] Patched node-cine_studio")
    with open(sa_path, "w", encoding="utf-8") as f:
        f.write(sa_norm)
    print("[system_architecture.html] Successfully updated")
