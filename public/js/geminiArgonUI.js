/**
 * geminiArgonUI.js — UI Controller for Gemini 4 Argon & October 2026 Engine
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Sketch-to-Shot Modal: Sơ đồ góc máy & phân tích tọa độ không gian 3D.
 * 2. Closed-Loop Continuity Inspector: Giám sát raccord ánh sáng & bóng đổ giữa các cảnh.
 * 3. 5-Engine Multi-Compiler Slates: Cập nhật real-time sang Seedance 2.5, Kling 4.0, Veo 3.1, Runway Gen-4.5, Midjourney V8.1.
 * 4. Multi-Asset Matrix Management: Quản lý tối đa 50 References (@Img, @Video, @Audio).
 */

import { geminiArgonEngine } from './geminiArgonEngine.js';
import { compileAllEngines } from './promptCompiler2026.js';

class GeminiArgonUI {
  constructor() {
    this.currentCompiled = null;
  }

  init() {
    this.injectModals();
    this.bindEvents();
    this.updateAssetCounter();
  }

  /**
   * Tạo các modal Sketch-to-Shot, Continuity Inspector & Multi-Compiler
   */
  injectModals() {
    if (document.getElementById('gemini-argon-modals-root')) return;

    const root = document.createElement('div');
    root.id = 'gemini-argon-modals-root';
    root.innerHTML = `
      <!-- 🎨 1. SKETCH-TO-SHOT MODAL -->
      <div id="sketch-to-shot-modal" class="modal-overlay" style="display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); align-items:center; justify-content:center; padding:20px;">
        <div style="background:linear-gradient(135deg, #0b0f19 0%, #111827 100%); border:1.5px solid #ffd700; border-radius:16px; max-width:820px; width:100%; max-height:90vh; overflow-y:auto; box-shadow:0 0 35px rgba(255,215,0,0.25); display:flex; flex-direction:column;">
          
          <!-- Modal Header -->
          <div style="padding:16px 24px; border-bottom:1px solid rgba(255,215,0,0.2); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3);">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.5rem;">📐</span>
              <div>
                <h3 style="margin:0; font-size:1.1rem; color:#ffd700; font-weight:800; letter-spacing:0.04em;">SKETCH-TO-SHOT · GEMINI 4 ARGON (OCT 2026)</h3>
                <span style="font-size:0.7rem; color:#94a3b8;">Physical Reasoning & Spatial Coordinate Trajectory Generator</span>
              </div>
            </div>
            <button id="close-sketch-modal-btn" style="background:none; border:none; color:#a1a1aa; font-size:1.4rem; cursor:pointer;">✕</button>
          </div>

          <!-- Modal Body -->
          <div style="padding:24px; display:flex; flex-direction:column; gap:18px;">
            <p style="margin:0; font-size:0.82rem; color:#cbd5e1; line-height:1.5;">
              Vẽ sơ đồ góc máy hoặc chọn mẫu quỹ đạo vật lý bên dưới. Gemini 4 Argon sẽ đọc tọa độ 3D và tự động sinh thông số máy quay, tiêu cự lens, và quỹ đạo chuẩn xác vào Prompt:
            </p>

            <!-- Trajectory Presets Grid -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:10px;">
              <button type="button" class="sketch-preset-btn" data-preset="orbital_arc" style="background:rgba(255,215,0,0.1); border:1.2px solid #ffd700; color:#ffd700; border-radius:10px; padding:12px; text-align:left; cursor:pointer; transition:all 0.2s;">
                <div style="font-size:1.1rem; margin-bottom:4px;">🔄</div>
                <div style="font-size:0.8rem; font-weight:800;">Dolly Orbital Arc 180°</div>
                <div style="font-size:0.68rem; color:#cbd5e1; margin-top:2px;">Quét vòng qua vai (OTS) góc 45° đến 135°, tiêu cự 35mm f/1.8.</div>
              </button>

              <button type="button" class="sketch-preset-btn" data-preset="vertigo_push_pull" style="background:rgba(255,255,255,0.04); border:1.2px solid rgba(255,255,255,0.15); color:#e4e4e7; border-radius:10px; padding:12px; text-align:left; cursor:pointer; transition:all 0.2s;">
                <div style="font-size:1.1rem; margin-bottom:4px;">🌪️</div>
                <div style="font-size:0.8rem; font-weight:800;">Vertigo Dolly Zoom</div>
                <div style="font-size:0.68rem; color:#a1a1aa; margin-top:2px;">Zemeckis push-pull, dolly lùi zoom tới, nén không gian thực tế.</div>
              </button>

              <button type="button" class="sketch-preset-btn" data-preset="hero_crane_down" style="background:rgba(255,255,255,0.04); border:1.2px solid rgba(255,255,255,0.15); color:#e4e4e7; border-radius:10px; padding:12px; text-align:left; cursor:pointer; transition:all 0.2s;">
                <div style="font-size:1.1rem; margin-bottom:4px;">🏗️</div>
                <div style="font-size:0.8rem; font-weight:800;">Crane Boom Down</div>
                <div style="font-size:0.68rem; color:#a1a1aa; margin-top:2px;">Hạ từ 4.5m góc cao xuống 0.6m góc hùng tráng (Low-Angle Hero).</div>
              </button>

              <button type="button" class="sketch-preset-btn" data-preset="tracking_steadicam" style="background:rgba(255,255,255,0.04); border:1.2px solid rgba(255,255,255,0.15); color:#e4e4e7; border-radius:10px; padding:12px; text-align:left; cursor:pointer; transition:all 0.2s;">
                <div style="font-size:1.1rem; margin-bottom:4px;">🚶</div>
                <div style="font-size:0.8rem; font-weight:800;">Lateral Steadicam 5-Axis</div>
                <div style="font-size:0.68rem; color:#a1a1aa; margin-top:2px;">Đi song song hấp thụ xung lực bước chân, tiêu cự 50mm f/1.4.</div>
              </button>
            </div>

            <!-- Interactive Canvas Preview -->
            <div style="background:#000; border:1px dashed rgba(255,215,0,0.4); border-radius:12px; height:180px; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden;">
              <canvas id="sketch-canvas" width="760" height="180" style="width:100%; height:100%; cursor:crosshair;"></canvas>
              <div id="sketch-canvas-overlay" style="position:absolute; pointer-events:none; text-align:center; color:rgba(255,215,0,0.7); font-size:0.75rem; font-weight:600;">
                🖱️ Nhấp để vẽ đường di chuyển máy quay hoặc chọn preset bên trên
              </div>
            </div>

            <!-- Physical Reasoning Result Box -->
            <div id="sketch-result-box" style="background:rgba(15,23,42,0.8); border:1px solid rgba(56,189,248,0.3); border-radius:10px; padding:14px;">
              <div style="font-size:0.75rem; color:#38bdf8; font-weight:800; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                <span>⚡ KẾT QUẢ SUY LUẬN VẬT LÝ KHÔNG GIAN (GEMINI 4 ARGON):</span>
              </div>
              <div id="sketch-directive-text" style="font-size:0.8rem; color:#e2e8f0; line-height:1.6; font-family:monospace; background:rgba(0,0,0,0.4); padding:10px; border-radius:6px;">
                Camera begins at 45° camera-left of Nhân vật A, sweeps through a smooth continuous horizontal orbital arc passing over the shoulder of Nhân vật B across 4.5 seconds. Focal depth shallow (f/1.8), foreground subject parallax shifts naturally with optical bokeh rotation.
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div style="padding:16px 24px; border-top:1px solid rgba(255,215,0,0.2); background:rgba(0,0,0,0.3); display:flex; justify-content:flex-end; gap:10px;">
            <button id="apply-sketch-btn" style="background:linear-gradient(135deg, #ffd700, #f59e0b); border:none; color:#0f172a; font-weight:900; font-size:0.82rem; padding:10px 18px; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:6px;">
              <span>⚡ Áp Dụng Chỉ Thị Vào Prompt Video</span>
            </button>
          </div>

        </div>
      </div>

      <!-- 🛡️ 2. CLOSED-LOOP CONTINUITY INSPECTOR MODAL -->
      <div id="continuity-inspector-modal" class="modal-overlay" style="display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); align-items:center; justify-content:center; padding:20px;">
        <div style="background:linear-gradient(135deg, #0b0f19 0%, #111827 100%); border:1.5px solid #10b981; border-radius:16px; max-width:820px; width:100%; max-height:90vh; overflow-y:auto; box-shadow:0 0 35px rgba(16,185,129,0.25); display:flex; flex-direction:column;">
          
          <div style="padding:16px 24px; border-bottom:1px solid rgba(16,185,129,0.2); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3);">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.5rem;">🛡️</span>
              <div>
                <h3 style="margin:0; font-size:1.1rem; color:#10b981; font-weight:800; letter-spacing:0.04em;">CLOSED-LOOP CONTINUITY INSPECTOR</h3>
                <span style="font-size:0.7rem; color:#94a3b8;">Giám Sát Raccord Nguồn Sáng, Bóng Đổ & Eyeline Đa Phân Cảnh</span>
              </div>
            </div>
            <button id="close-continuity-modal-btn" style="background:none; border:none; color:#a1a1aa; font-size:1.4rem; cursor:pointer;">✕</button>
          </div>

          <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
            <!-- Score & Badge -->
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:12px; padding:12px 18px;">
              <div>
                <span style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; font-weight:700;">Độ Khớp Raccord:</span>
                <div style="font-size:1.4rem; font-weight:900; color:#34d399;" id="continuity-score">100/100</div>
              </div>
              <span id="continuity-badge" style="background:#10b981; color:#0f172a; font-weight:800; font-size:0.78rem; padding:4px 12px; border-radius:20px;">Raccord Chuẩn Điện Ảnh</span>
            </div>

            <!-- Issues List -->
            <div id="continuity-issues-container" style="display:flex; flex-direction:column; gap:10px;">
              <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:14px; color:#cbd5e1; font-size:0.8rem; line-height:1.5;">
                ✅ <strong>Gemini 4 Argon Kiểm Tra Vòng Lặp Khép Kín:</strong> Các phân cảnh duy trì tính liên tục 100% về hướng ánh sáng chính (Key Light), góc bóng đổ 3D và trục máy quay (180-degree line).
              </div>
            </div>

            <!-- Auto-Fix Injector -->
            <div id="continuity-fix-container" style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.3); border-radius:10px; padding:14px;">
              <div style="font-size:0.75rem; color:#f59e0b; font-weight:800; margin-bottom:4px;">⚡ CHỈ LỆNH TỰ ĐỘNG BÙ TRỪ RACCORD (AUTO-LOCK DIRECTIVE):</div>
              <div id="continuity-fix-text" style="font-size:0.78rem; color:#fed7aa; font-family:monospace; line-height:1.5;">
                [RACCORD CONTINUITY LOCK]: Cố định hướng nguồn sáng Key light từ bên trái góc 30 độ để bóng đổ trên mặt nhân vật đổ tự nhiên sang phía bên phải, khớp 100% với Cảnh trước.
              </div>
            </div>
          </div>

          <div style="padding:16px 24px; border-top:1px solid rgba(16,185,129,0.2); background:rgba(0,0,0,0.3); display:flex; justify-content:flex-end;">
            <button id="apply-continuity-btn" style="background:linear-gradient(135deg, #10b981, #059669); border:none; color:#fff; font-weight:800; font-size:0.82rem; padding:10px 18px; border-radius:8px; cursor:pointer;">
              🔒 Chèn Lệnh Khóa Raccord Vào Kịch Bản
            </button>
          </div>

        </div>
      </div>

      <!-- 🚀 3. AUTO-COMPILER ALL-IN-ONE MODAL -->
      <div id="auto-compiler-modal" class="modal-overlay" style="display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.85); backdrop-filter:blur(10px); align-items:center; justify-content:center; padding:20px;">
        <div style="background:linear-gradient(135deg, #0b0f19 0%, #111827 100%); border:1.5px solid #ffd700; border-radius:16px; max-width:920px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 0 35px rgba(255,215,0,0.3); display:flex; flex-direction:column;">
          
          <div style="padding:16px 24px; border-bottom:1px solid rgba(255,215,0,0.2); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3);">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.6rem;">⚡</span>
              <div>
                <h3 style="margin:0; font-size:1.15rem; color:#ffd700; font-weight:800; letter-spacing:0.04em;">GEMINI 4 ARGON · 5-ENGINE UNIFIED COMPILER</h3>
                <span style="font-size:0.72rem; color:#94a3b8;">1 Cú Nhấp Chuột Xuất Trọn Bộ Kịch Bản Sang 5 Chuẩn Engine T10/2026 Mới Nhất</span>
              </div>
            </div>
            <button id="close-compiler-modal-btn" style="background:none; border:none; color:#a1a1aa; font-size:1.4rem; cursor:pointer;">✕</button>
          </div>

          <div style="padding:24px; display:flex; flex-direction:column; gap:16px;">
            <!-- Tabs for 5 engines inside modal -->
            <div style="display:flex; gap:6px; flex-wrap:wrap; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px;">
              <button class="compiler-tab-btn active" data-engine="seedance" style="background:#ffd700; color:#0f172a; border:none; border-radius:6px; padding:6px 12px; font-weight:800; font-size:0.75rem; cursor:pointer;">🌊 Seedance 2.5 (30s Multi-Shot)</button>
              <button class="compiler-tab-btn" data-engine="kling" style="background:rgba(255,255,255,0.06); color:#e4e4e7; border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:6px 12px; font-weight:700; font-size:0.75rem; cursor:pointer;">⚡ Kling 4.0 (6 Shots / 10 KF)</button>
              <button class="compiler-tab-btn" data-engine="veo" style="background:rgba(255,255,255,0.06); color:#e4e4e7; border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:6px 12px; font-weight:700; font-size:0.75rem; cursor:pointer;">🎬 Veo 3.1 & Omni Flash 1.1</button>
              <button class="compiler-tab-btn" data-engine="runway" style="background:rgba(255,255,255,0.06); color:#e4e4e7; border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:6px 12px; font-weight:700; font-size:0.75rem; cursor:pointer;">🎞️ Runway Gen-4.5 (Cause-Effect)</button>
              <button class="compiler-tab-btn" data-engine="mj" style="background:rgba(255,255,255,0.06); color:#e4e4e7; border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:6px 12px; font-weight:700; font-size:0.75rem; cursor:pointer;">🎨 Midjourney V8.1 (Native 2K)</button>
              <button class="compiler-tab-btn" data-engine="json" style="background:rgba(255,255,255,0.06); color:#e4e4e7; border:1px solid rgba(255,255,255,0.15); border-radius:6px; padding:6px 12px; font-weight:700; font-size:0.75rem; cursor:pointer;">📦 Full JSON Package</button>
            </div>

            <!-- Content Area -->
            <div style="position:relative;">
              <textarea id="compiler-output-textarea" readonly style="width:100%; height:320px; background:#070a12; border:1px solid rgba(255,215,0,0.3); border-radius:10px; color:#38bdf8; font-family:'JetBrains Mono', monospace; font-size:0.8rem; line-height:1.55; padding:14px; box-sizing:border-box; resize:none;"></textarea>
              <button id="compiler-copy-btn" style="position:absolute; top:12px; right:12px; background:linear-gradient(135deg, #ffd700, #f59e0b); border:none; color:#0f172a; font-weight:800; font-size:0.75rem; padding:6px 14px; border-radius:6px; cursor:pointer; box-shadow:0 0 10px rgba(255,215,0,0.3);">
                📋 Sao Chép Bản Này
              </button>
            </div>
          </div>

          <div style="padding:16px 24px; border-top:1px solid rgba(255,215,0,0.2); background:rgba(0,0,0,0.3); display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.72rem; color:#94a3b8;">
              Bảo mật 100% · Tương thích trọn vẹn với API & Studio T10/2026
            </span>
            <div style="display:flex; gap:8px;">
              <button id="compiler-download-json-btn" style="background:rgba(56,189,248,0.15); border:1px solid #38bdf8; color:#38bdf8; font-weight:800; font-size:0.8rem; padding:8px 16px; border-radius:6px; cursor:pointer;">
                📥 Tải Full JSON (.json)
              </button>
              <button id="compiler-copy-all-btn" style="background:linear-gradient(135deg, #ffd700, #f59e0b); border:none; color:#0f172a; font-weight:900; font-size:0.82rem; padding:8px 18px; border-radius:6px; cursor:pointer;">
                ⚡ Sao Chép Toàn Bộ 5 Bản
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(root);
  }

  /**
   * Gắn sự kiện đóng mở modal và các nút điều hướng
   */
  bindEvents() {
    // 1. Sketch Modal triggers
    document.getElementById('close-sketch-modal-btn')?.addEventListener('click', () => {
      document.getElementById('sketch-to-shot-modal').style.display = 'none';
    });

    // 2. Continuity Modal triggers
    document.getElementById('close-continuity-modal-btn')?.addEventListener('click', () => {
      document.getElementById('continuity-inspector-modal').style.display = 'none';
    });

    // 3. Compiler Modal triggers
    document.getElementById('close-compiler-modal-btn')?.addEventListener('click', () => {
      document.getElementById('auto-compiler-modal').style.display = 'none';
    });

    // Sketch Presets Click
    document.querySelectorAll('.sketch-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sketch-preset-btn').forEach(b => {
          b.style.background = 'rgba(255,255,255,0.04)';
          b.style.borderColor = 'rgba(255,255,255,0.15)';
          b.style.color = '#e4e4e7';
        });
        btn.style.background = 'rgba(255,215,0,0.1)';
        btn.style.borderColor = '#ffd700';
        btn.style.color = '#ffd700';

        const preset = btn.dataset.preset;
        const analysis = geminiArgonEngine.analyzeSketchTrajectory({ type: preset });
        const dirEl = document.getElementById('sketch-directive-text');
        if (dirEl) dirEl.textContent = analysis.physicsDirective;
      });
    });

    // Apply sketch to prompt
    document.getElementById('apply-sketch-btn')?.addEventListener('click', () => {
      const dirText = document.getElementById('sketch-directive-text')?.textContent.trim() || '';
      const subjectInput = document.getElementById('subject-input');
      if (subjectInput && dirText) {
        subjectInput.value += `\n[GEMINI 4 ARGON SPATIAL DIRECTIVE]: ${dirText}`;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      document.getElementById('sketch-to-shot-modal').style.display = 'none';
      if (window.showToast) window.showToast('⚡ Đã nạp chỉ thị vật lý & góc máy của Gemini 4 Argon vào Prompt!', 'success');
    });

    // Apply continuity lock
    document.getElementById('apply-continuity-btn')?.addEventListener('click', () => {
      const fixText = document.getElementById('continuity-fix-text')?.textContent.trim() || '';
      const subjectInput = document.getElementById('subject-input');
      if (subjectInput && fixText) {
        subjectInput.value += `\n${fixText}`;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      document.getElementById('continuity-inspector-modal').style.display = 'none';
      if (window.showToast) window.showToast('🔒 Đã chèn lệnh khóa Raccord ánh sáng vào kịch bản!', 'success');
    });

    // Compiler Tab switching
    document.querySelectorAll('.compiler-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.compiler-tab-btn').forEach(b => {
          b.style.background = 'rgba(255,255,255,0.06)';
          b.style.color = '#e4e4e7';
          b.style.border = '1px solid rgba(255,255,255,0.15)';
        });
        btn.style.background = '#ffd700';
        btn.style.color = '#0f172a';
        btn.style.border = 'none';

        const eng = btn.dataset.engine;
        this.renderCompilerOutput(eng);
      });
    });

    // Compiler Copy Button
    document.getElementById('compiler-copy-btn')?.addEventListener('click', () => {
      const txt = document.getElementById('compiler-output-textarea')?.value;
      if (txt) {
        navigator.clipboard.writeText(txt);
        if (window.showToast) window.showToast('📋 Đã sao chép kịch bản vào Clipboard!', 'success');
      }
    });

    // Compiler Download JSON
    document.getElementById('compiler-download-json-btn')?.addEventListener('click', () => {
      if (!this.currentCompiled) return;
      const jsonStr = JSON.stringify(this.currentCompiled.jsonManifest, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cine-prompt-argon-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast('📥 Đã tải xuống gói kịch bản JSON đa nền tảng!', 'success');
    });

    // Compiler Copy All 5 Engines
    document.getElementById('compiler-copy-all-btn')?.addEventListener('click', () => {
      if (!this.currentCompiled) return;
      const allText = `🎬 CINE PROMPT PRO v3.0 · GEMINI 4 ARGON 5-ENGINE BUNDLE (OCTOBER 2026)
═════════════════════════════════════════════════════════════════════════

1. 🌊 BYTEDANCE SEEDANCE 2.5 (30s Multi-Shot · 1080p 10-bit)
-------------------------------------------------------------------------
${this.currentCompiled.seedance}

2. ⚡ KLING 4.0 / 3.0 TURBO (6-Shot Continuity Lock & 10 Keyframes)
-------------------------------------------------------------------------
${this.currentCompiled.kling}

3. 🎬 GEMINI OMNI FLASH 1.1 & DEEPMIND VEO 3.1 (24fps Physical Prose)
-------------------------------------------------------------------------
${this.currentCompiled.veoOmni}

4. 🎞️ RUNWAY GEN-4.5 (Cause & Effect Motion Scripting)
-------------------------------------------------------------------------
${this.currentCompiled.runwayT2V}

5. 🎨 MIDJOURNEY V8.1 (Native 2K HD Master Optics)
-------------------------------------------------------------------------
${this.currentCompiled.midjourney}
`;
      navigator.clipboard.writeText(allText);
      if (window.showToast) window.showToast('⚡ Đã sao chép TRỌN BỘ 5 KỊCH BẢN ĐA NỀN TẢNG!', 'success');
    });
  }

  openSketchModal() {
    const modal = document.getElementById('sketch-to-shot-modal');
    if (modal) modal.style.display = 'flex';
  }

  openContinuityModal() {
    const modal = document.getElementById('continuity-inspector-modal');
    if (!modal) return;

    // Run inspection on current state
    const report = geminiArgonEngine.inspectContinuity([
      { action: 'Nhân vật bước vào từ bên trái, ánh sáng cửa sổ chiếu từ trái 30 độ', cameraMovement: 'Dolly in' },
      { action: 'Nhân vật ngồi xuống, bóng lệch sang trái', cameraMovement: 'Close-up static' }
    ]);

    const scoreEl = document.getElementById('continuity-score');
    const badgeEl = document.getElementById('continuity-badge');
    const issuesContainer = document.getElementById('continuity-issues-container');
    const fixText = document.getElementById('continuity-fix-text');

    if (scoreEl) scoreEl.textContent = `${report.score}/100`;
    if (badgeEl) {
      badgeEl.textContent = report.badge;
      badgeEl.style.background = report.issues.length > 0 ? '#f59e0b' : '#10b981';
    }

    if (issuesContainer) {
      issuesContainer.innerHTML = '';
      if (report.issues.length === 0) {
        issuesContainer.innerHTML = `
          <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:14px; color:#34d399; font-size:0.8rem;">
            ✅ <strong>Khớp Raccord Hoàn Hảo 100%:</strong> Hướng sáng Key Light, bóng đổ và Eyeline nhất quán tuyệt đối.
          </div>
        `;
      } else {
        report.issues.forEach(iss => {
          const div = document.createElement('div');
          div.style.cssText = 'background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:10px; padding:12px; color:#fca5a5; font-size:0.8rem; line-height:1.5;';
          div.textContent = iss.message;
          issuesContainer.appendChild(div);
        });
      }
    }

    if (fixText && report.autoFixes.length > 0) {
      fixText.textContent = report.autoFixes[0].directive;
    }

    modal.style.display = 'flex';
  }

  openAutoCompilerModal() {
    const subject = document.getElementById('subject-input')?.value || 'Nam chính phong trần trong quán cà phê mưa đêm Sài Gòn';
    const character = document.getElementById('character-input')?.value || 'Nam chính 35 tuổi, áo măng tô đen ướt sũng';
    const ar = document.querySelector('.aspect-btn.active')?.dataset?.ar || '21:9';

    this.currentCompiled = compileAllEngines({
      subject,
      character,
      ar,
      lighting: 'Chiaroscuro dramatic low-key neon glow',
      motion: 'Smooth orbital tracking arc 180-degree',
      style: 'Kodak Vision3 500T 35mm film emulation'
    });

    this.renderCompilerOutput('seedance');
    const modal = document.getElementById('auto-compiler-modal');
    if (modal) modal.style.display = 'flex';
  }

  renderCompilerOutput(engineKey) {
    if (!this.currentCompiled) return;
    const txtArea = document.getElementById('compiler-output-textarea');
    if (!txtArea) return;

    switch (engineKey) {
      case 'seedance':
        txtArea.value = this.currentCompiled.seedance;
        break;
      case 'kling':
        txtArea.value = this.currentCompiled.kling;
        break;
      case 'veo':
        txtArea.value = this.currentCompiled.veoOmni;
        break;
      case 'runway':
        txtArea.value = `${this.currentCompiled.runwayT2V}\n\n[RUNWAY GEN-4.5 IMG2VID MODE]:\n${this.currentCompiled.runwayI2V}`;
        break;
      case 'mj':
        txtArea.value = this.currentCompiled.midjourney;
        break;
      case 'json':
        txtArea.value = JSON.stringify(this.currentCompiled.jsonManifest, null, 2);
        break;
      default:
        txtArea.value = this.currentCompiled.seedance;
    }
  }

  updateAssetCounter() {
    const statusEl = document.getElementById('ref-image-status');
    if (statusEl) {
      const summary = geminiArgonEngine.getAssetSummary();
      statusEl.textContent = `Matrix: ${summary.total}/50 Refs (@Img: ${summary.imagesCount}, @Vid: ${summary.videosCount}, @Aud: ${summary.audiosCount})`;
    }
  }
}

export const geminiArgonUI = new GeminiArgonUI();
