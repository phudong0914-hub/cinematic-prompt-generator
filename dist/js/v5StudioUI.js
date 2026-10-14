/**
 * v5StudioUI.js — Master Director Workstation & Viral Studio OS (v5.0 Enterprise)
 * Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS)
 * by Đạo Diễn Trungvt (0836.384.168)
 */

import { cinemaMasterEngine, CAMERA_BODIES, LENS_PACKAGES } from './cinemaMasterEngine.js';
import { omniDirectorEngine } from './omniDirectorEngine.js';
import { threadViralEngine } from './threadViralEngine.js';

export class V5StudioUI {
  constructor() {
    this.engine = cinemaMasterEngine;
    this.activeShotIndex = 0;
    this.activeCompilerTab = 'seedance'; // 'seedance' | 'kling' | 'veoOmni' | 'runway' | 'midjourney'
    this.isFastViralMode = false;
    this.lang = 'vi'; // 'vi' | 'en'
    this.isBentoOpen = true;
    this.webcamActive = false;
  }

  init() {
    this.injectStudioStyles();
    this.injectStudioModal();
    this.injectTopHeaderBar();
    this.bindEvents();
    this.bindShortcuts();
    this.renderActiveShot();
    this.renderCompilerOutput();
    this.updateContinuityBadge();
  }

  injectStudioStyles() {
    if (document.getElementById('cine-v5-styles')) return;
    const style = document.createElement('style');
    style.id = 'cine-v5-styles';
    style.textContent = `
      :root {
        --cine-bg-primary: #0B0C10;
        --cine-surface: #14161D;
        --cine-surface-card: #181B24;
        --cine-border: #262936;
        --cine-amber: #F59E0B;
        --cine-amber-glow: rgba(245, 158, 11, 0.35);
        --cine-omni-emerald: #10B981;
        --cine-viral-purple: #8B5CF6;
        --cine-text-dim: #94A3B8;
      }
      .v5-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
      .v5-scroll::-webkit-scrollbar-track { background: #0b0c10; }
      .v5-scroll::-webkit-scrollbar-thumb { background: #262936; border-radius: 4px; }
      .v5-scroll::-webkit-scrollbar-thumb:hover { background: #f59e0b; }
      .pulse-recording { animation: pulseRec 1.2s infinite alternate; }
      @keyframes pulseRec { from { box-shadow: 0 0 5px #ef4444; } to { box-shadow: 0 0 16px #ef4444; } }
      .shot-visual-svg { transition: transform 0.3s ease; }
      .shot-visual-svg:hover { transform: scale(1.05); }
    `;
    document.head.appendChild(style);
  }

  injectTopHeaderBar() {
    let header = document.querySelector('.top-bar-inner') || document.querySelector('.header-brand-top');
    if (!header) header = document.body;

    const switcher = document.createElement('div');
    switcher.id = 'v5-global-switchers';
    switcher.style.cssText = 'display: inline-flex; align-items: center; gap: 8px; margin-left: auto;';

    switcher.innerHTML = `
      <!-- Mode Switcher -->
      <div style="display:inline-flex; background:#14161d; border:1px solid #262936; border-radius:8px; padding:2px;">
        <button id="btn-mode-fast" type="button" style="background:transparent; border:none; color:#94a3b8; font-size:0.72rem; font-weight:700; padding:4px 10px; border-radius:6px; cursor:pointer;">
          ⚡ Fast Viral Mode
        </button>
        <button id="btn-mode-master" type="button" style="background:linear-gradient(135deg, #f59e0b, #d97706); border:none; color:#000; font-size:0.72rem; font-weight:900; padding:4px 12px; border-radius:6px; cursor:pointer; box-shadow:0 0 10px rgba(245,158,11,0.35);">
          🎬 Master Director (v5.0)
        </button>
      </div>

      <!-- i18n Switcher -->
      <button id="btn-lang-toggle" type="button" style="background:#14161d; border:1px solid #262936; color:#f59e0b; font-size:0.72rem; font-weight:800; padding:4px 8px; border-radius:8px; cursor:pointer;">
        🇻🇳 VI
      </button>

      <!-- Launch Workstation Button -->
      <button id="btn-open-v5-studio" type="button" style="background:linear-gradient(135deg, #10b981, #059669); border:none; color:#fff; font-size:0.72rem; font-weight:900; padding:5px 12px; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:5px; box-shadow:0 0 12px rgba(16,185,129,0.35);">
        <span>🚀 MỞ BÀN ĐẠO DIỄN v5.0</span>
      </button>
    `;

    if (header === document.body) {
      switcher.style.position = 'fixed';
      switcher.style.top = '10px';
      switcher.style.right = '20px';
      switcher.style.zIndex = '9999';
      document.body.appendChild(switcher);
    } else {
      header.appendChild(switcher);
    }
  }

  injectStudioModal() {
    if (document.getElementById('v5-master-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'v5-master-modal';
    modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:#0B0C10; z-index:99999; flex-direction:column; overflow:hidden; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color:#f4f4f5;';

    modal.innerHTML = `
      <!-- TOP NAVIGATION BAR -->
      <header style="height:54px; background:#14161D; border-bottom:1px solid #262936; display:flex; align-items:center; justify-content:space-between; padding:0 20px; flex-shrink:0;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="width:32px; height:32px; border-radius:50%; border:2px solid #f59e0b; overflow:hidden; background:#000;">
            <img src="/logo.jpg" alt="Logo" style="width:100%; height:100%; object-fit:cover;" />
          </div>
          <div>
            <div style="font-weight:900; font-size:0.95rem; color:#fff; letter-spacing:0.04em;">
              <span style="color:#f59e0b;">CINE PROMPT PRO</span> • Studio Engine v5.0
            </div>
            <div style="font-size:0.65rem; color:#94a3b8;">by Đạo Diễn Trungvt • Hotline/Zalo: <span style="color:#f59e0b; font-weight:700;">0836.384.168</span></div>
          </div>

          <!-- Production Pipeline Bar -->
          <div style="display:flex; align-items:center; gap:6px; margin-left:20px; background:#0b0c10; padding:4px 10px; border-radius:20px; border:1px solid #262936; font-size:0.68rem;">
            <span style="color:#f59e0b; font-weight:700;">1. Ý Tưởng</span>
            <span style="color:#475569;">➔</span>
            <span style="color:#10b981; font-weight:700;">2. Google Flow / MJ V8.1 / Flux.2</span>
            <span style="color:#475569;">➔</span>
            <span style="color:#8b5cf6; font-weight:700;">3. Seedance 2.5 / Kling 4.0 / Veo 3.1 / Runway Gen-4.5</span>
            <span style="color:#475569;">➔</span>
            <span style="color:#38bdf8; font-weight:700;">4. DaVinci XML / Remotion / CapCut</span>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:10px;">
          <!-- Continuity Diagnostic Badge -->
          <div id="v5-continuity-badge" style="display:flex; align-items:center; gap:6px; background:rgba(16,185,129,0.12); border:1px solid #10b981; padding:4px 10px; border-radius:8px; font-size:0.72rem; font-weight:800; color:#10b981; cursor:pointer;">
            <span>🛡️ Raccord: 100% Khớp Trục 180°</span>
          </div>

          <!-- Close / Minimize Button -->
          <button id="v5-close-modal-btn" type="button" style="background:#262936; border:none; color:#fff; font-size:0.85rem; font-weight:800; padding:6px 14px; border-radius:8px; cursor:pointer;" title="Đóng về giao diện chính">
            ✕ Đóng
          </button>
        </div>
      </header>

      <!-- 3-COLUMN WORKSTATION BODY -->
      <div style="flex:1; display:flex; overflow:hidden; background:#0B0C10;">
        
        <!-- ========================================== -->
        <!-- CỘT 1: BIBLE VAULT, OMNI LIVE & OPTICAL RIG -->
        <!-- ========================================== -->
        <aside class="v5-scroll" style="width:340px; background:#14161D; border-right:1px solid #262936; padding:16px; overflow-y:auto; display:flex; flex-direction:column; gap:16px;">
          
          <!-- MODULE A: QWEN OMNI LIVE DIRECTOR & WALKIE-TALKIE -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:10px; padding:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:0.78rem; font-weight:900; color:#10b981; display:flex; align-items:center; gap:5px;">
                <span>🎙️</span> BỘ ĐÀM ĐẠO DIỄN OMNI LIVE
              </span>
              <span style="font-size:0.62rem; background:rgba(16,185,129,0.15); color:#10b981; padding:2px 6px; border-radius:6px; font-weight:700;">Web Speech</span>
            </div>

            <p style="font-size:0.68rem; color:#94a3b8; margin:0 0 8px 0; line-height:1.4;">
              Nói tự nhiên (hoặc giữ phím Space): "Cảnh toàn phố mưa đêm, máy Dolly In vào ly cà phê, nhạc Jazz buồn..."
            </p>

            <div style="display:flex; gap:8px;">
              <button id="v5-walkie-talkie-btn" type="button" style="flex:1; background:linear-gradient(135deg, #10b981, #059669); border:none; color:#fff; font-size:0.75rem; font-weight:800; padding:8px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
                <span>🎙️ Bấm & Nói Khẩu Lệnh</span>
              </button>

              <button id="v5-webcam-toggle-btn" type="button" style="background:#262936; border:1px solid #3f3f46; color:#f4f4f5; font-size:0.75rem; padding:8px 10px; border-radius:8px; cursor:pointer;" title="Mở Webcam / Soi Phác Thảo Trực Tiếp">
                📷 Soi Live
              </button>
            </div>

            <!-- Video feed popup container (nếu bật webcam) -->
            <div id="v5-webcam-container" style="display:none; margin-top:10px; position:relative; border-radius:8px; overflow:hidden; border:1px solid #10b981;">
              <video id="v5-webcam-video" style="width:100%; height:auto; display:block; background:#000;" playsinline></video>
              <button id="v5-capture-frame-btn" type="button" style="position:absolute; bottom:8px; left:50%; transform:translateX(-50%); background:#f59e0b; border:none; color:#000; font-size:0.7rem; font-weight:800; padding:5px 12px; border-radius:20px; cursor:pointer;">
                📸 Chụp Vào @Prop_1
              </button>
            </div>
          </div>

          <!-- MODULE B: 4-SLOT MULTI-ASSET PROJECT BIBLE VAULT -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:10px; padding:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:0.78rem; font-weight:900; color:#f59e0b;">🏛️ PROJECT BIBLE VAULT</span>
              <span style="font-size:0.62rem; color:#94a3b8;">Chuẩn 50 Refs Seedance 2.5</span>
            </div>

            <!-- 4 Slots Matrix -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <!-- Slot 1: @Char_1 -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.7rem; font-weight:800; color:#f59e0b;">@Char_1</span>
                  <span style="font-size:0.6rem; color:#10b981;">Start-KF</span>
                </div>
                <div style="font-size:0.65rem; color:#ccc; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Người Đàn Ông Từng Trải</div>
                <input type="file" id="v5-upload-char1" accept="image/*" style="display:none;" />
                <button type="button" onclick="document.getElementById('v5-upload-char1').click()" style="margin-top:6px; width:100%; background:#262936; border:none; color:#94a3b8; font-size:0.62rem; padding:3px; border-radius:4px; cursor:pointer;">
                  Đổi ảnh / DNA
                </button>
              </div>

              <!-- Slot 2: @Char_2 -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.7rem; font-weight:800; color:#f59e0b;">@Char_2</span>
                  <span style="font-size:0.6rem; color:#38bdf8;">Mid-KF</span>
                </div>
                <div style="font-size:0.65rem; color:#ccc; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Cô Gái Quán Cà Phê</div>
                <input type="file" id="v5-upload-char2" accept="image/*" style="display:none;" />
                <button type="button" onclick="document.getElementById('v5-upload-char2').click()" style="margin-top:6px; width:100%; background:#262936; border:none; color:#94a3b8; font-size:0.62rem; padding:3px; border-radius:4px; cursor:pointer;">
                  Đổi ảnh / DNA
                </button>
              </div>

              <!-- Slot 3: @Prop_1 -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.7rem; font-weight:800; color:#f59e0b;">@Prop_1</span>
                  <span style="font-size:0.6rem; color:#ec4899;">Hero-Prop</span>
                </div>
                <div style="font-size:0.65rem; color:#ccc; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Phin Cà Phê Nhôm</div>
                <input type="file" id="v5-upload-prop1" accept="image/*" style="display:none;" />
                <button type="button" onclick="document.getElementById('v5-upload-prop1').click()" style="margin-top:6px; width:100%; background:#262936; border:none; color:#94a3b8; font-size:0.62rem; padding:3px; border-radius:4px; cursor:pointer;">
                  Đổi ảnh / DNA
                </button>
              </div>

              <!-- Slot 4: @Env_1 -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.7rem; font-weight:800; color:#f59e0b;">@Env_1</span>
                  <span style="font-size:0.6rem; color:#a855f7;">End-KF</span>
                </div>
                <div style="font-size:0.65rem; color:#ccc; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Quán Mưa Sài Gòn</div>
                <input type="file" id="v5-upload-env1" accept="image/*" style="display:none;" />
                <button type="button" onclick="document.getElementById('v5-upload-env1').click()" style="margin-top:6px; width:100%; background:#262936; border:none; color:#94a3b8; font-size:0.62rem; padding:3px; border-radius:4px; cursor:pointer;">
                  Đổi ảnh / DNA
                </button>
              </div>
            </div>

            <!-- Vision DNA Real Feedback -->
            <div id="v5-vision-dna-box" style="margin-top:8px; padding:6px; background:#0b0c10; border-radius:6px; font-size:0.62rem; color:#10b981; border:1px solid #262936; line-height:1.4;">
              🧬 <strong>Vision DNA:</strong> Tương phản 8.0:1 (Chiaroscuro), Key light 45° Camera Left, Kodak 500T Palette.
            </div>
          </div>

          <!-- MODULE C: PHYSICAL CAMERA, LENS & INTERACTIVE 2D GAFFER PAD -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:10px; padding:12px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:0.78rem; font-weight:900; color:#f59e0b;">🎥 QUANG HỌC & ĐÁNH ĐÈN 2D</span>
              <span style="font-size:0.62rem; color:#94a3b8;">19 DP Laws</span>
            </div>

            <!-- Camera Body & Lens Glass -->
            <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">
              <div>
                <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Camera Body:</label>
                <select id="v5-camera-body-select" style="width:100%; background:#14161d; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;">
                  ${CAMERA_BODIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
              </div>

              <div>
                <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Lens Glass Package:</label>
                <select id="v5-lens-package-select" style="width:100%; background:#14161d; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;">
                  ${LENS_PACKAGES.map(l => `<option value="${l.id}">${l.name}</option>`).join('')}
                </select>
              </div>
            </div>

            <!-- Focal Length & T-Stop Slider -->
            <div style="display:flex; gap:10px; margin-bottom:10px;">
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:#94a3b8;">
                  <span>Tiêu Cự:</span>
                  <span id="v5-focal-val" style="color:#f59e0b; font-weight:700;">35mm</span>
                </div>
                <input id="v5-focal-slider" type="range" min="14" max="135" value="35" step="1" style="width:100%; accent-color:#f59e0b;" />
              </div>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:#94a3b8;">
                  <span>Khẩu Độ:</span>
                  <span id="v5-tstop-val" style="color:#f59e0b; font-weight:700;">T1.4</span>
                </div>
                <input id="v5-tstop-slider" type="range" min="1.4" max="11" value="1.4" step="0.2" style="width:100%; accent-color:#f59e0b;" />
              </div>
            </div>

            <!-- Interactive 2D Lighting Radar Pad -->
            <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px; text-align:center;">
              <div style="font-size:0.65rem; font-weight:700; color:#94a3b8; margin-bottom:6px;">Bản Đồ Đánh Đèn 2D (Kéo chỉnh góc Key Light):</div>
              <div style="position:relative; width:120px; height:120px; margin:0 auto; border-radius:50%; border:2px dashed #3f3f46; background:radial-gradient(circle, #262936 0%, #14161d 70%);">
                <!-- Center Subject Dot -->
                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:12px; height:12px; border-radius:50%; background:#f59e0b; box-shadow:0 0 8px #f59e0b;"></div>
                <!-- Key Light draggable dot -->
                <div id="v5-key-light-dot" style="position:absolute; top:18px; left:88px; width:14px; height:14px; border-radius:50%; background:#fef08a; border:2px solid #ca8a04; box-shadow:0 0 10px #fef08a; cursor:grab;" title="Key Light (45°)"></div>
              </div>
              <div id="v5-lighting-desc" style="font-size:0.62rem; color:#f59e0b; margin-top:6px;">
                Rembrandt 45° Key Light with natural nose triangle
              </div>
            </div>

            <!-- 180° Axis Lock Checkbox -->
            <div style="margin-top:10px; display:flex; align-items:center; gap:6px;">
              <input type="checkbox" id="v5-axis-lock-cb" checked style="accent-color:#f59e0b;" />
              <label for="v5-axis-lock-cb" style="font-size:0.68rem; color:#f4f4f5; font-weight:700; cursor:pointer;">
                🔒 Khóa Trục 180° & Raccord Ánh Sáng
              </label>
            </div>
          </div>

        </aside>

        <!-- ============================================================== -->
        <!-- CỘT 2: THREADVIRAL BENTO TOOLS, 30S SEQUENCER & NATIVE MIXER    -->
        <!-- ============================================================== -->
        <main class="v5-scroll" style="flex:1; padding:16px; overflow-y:auto; display:flex; flex-direction:column; gap:16px;">
          
          <!-- MODULE D: THREADVIRAL BENTO MICRO-TOOLS DOCK -->
          <div style="background:#181B24; border:1px solid #8b5cf6; border-radius:12px; padding:14px; box-shadow:0 4px 20px rgba(139,92,246,0.15);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
              <span style="font-size:0.85rem; font-weight:900; color:#8b5cf6; display:flex; align-items:center; gap:6px;">
                <span>🔥</span> BỘ CÔNG CỤ VIRAL & CHUYỂN ĐỔI THỰC CHIẾN (ThreadViral OS)
              </span>
              <button id="v5-toggle-bento-btn" type="button" style="background:transparent; border:none; color:#94a3b8; font-size:0.75rem; cursor:pointer;">
                Thu gọn ▲
              </button>
            </div>

            <div id="v5-bento-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
              <!-- Tool 1: 3-Second Viral Hook Generator -->
              <div style="background:#14161D; border:1px solid #262936; border-radius:8px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#f59e0b; margin-bottom:4px;">⚡ 3s Triệu View</div>
                  <div style="font-size:0.65rem; color:#94a3b8; line-height:1.3;">Gắn beat 00:00 - 00:03 giật mắt dừng lướt.</div>
                </div>
                <button id="v5-tool-hook-btn" type="button" style="margin-top:8px; background:#8b5cf6; border:none; color:#fff; font-size:0.65rem; font-weight:800; padding:5px; border-radius:6px; cursor:pointer;">
                  Bơm Vào Shot 1
                </button>
              </div>

              <!-- Tool 2: Viral Video Reverse-Engineer -->
              <div style="background:#14161D; border:1px solid #262936; border-radius:8px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#10b981; margin-bottom:4px;">🧬 Giải Phẫu Viral</div>
                  <div style="font-size:0.65rem; color:#94a3b8; line-height:1.3;">Dán mô tả/transcript bóc 4 góc máy chuẩn.</div>
                </div>
                <button id="v5-tool-reverse-btn" type="button" style="margin-top:8px; background:#262936; border:1px solid #3f3f46; color:#10b981; font-size:0.65rem; font-weight:800; padding:5px; border-radius:6px; cursor:pointer;">
                  Phân Tích Ngay
                </button>
              </div>

              <!-- Tool 3: Script-to-MultiShot Splitter -->
              <div style="background:#14161D; border:1px solid #262936; border-radius:8px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#38bdf8; margin-bottom:4px;">✂️ Tách Kịch Bản</div>
                  <div style="font-size:0.65rem; color:#94a3b8; line-height:1.3;">Biến đoạn văn TVC dài thành các shot 5-8s.</div>
                </div>
                <button id="v5-tool-split-btn" type="button" style="margin-top:8px; background:#262936; border:1px solid #3f3f46; color:#38bdf8; font-size:0.65rem; font-weight:800; padding:5px; border-radius:6px; cursor:pointer;">
                  Nhập Kịch Bản
                </button>
              </div>

              <!-- Tool 4: High-CTR Thumbnail Prompt -->
              <div style="background:#14161D; border:1px solid #262936; border-radius:8px; padding:10px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="font-size:0.75rem; font-weight:800; color:#ec4899; margin-bottom:4px;">🖼️ Thumbnail CTR</div>
                  <div style="font-size:0.65rem; color:#94a3b8; line-height:1.3;">Prompt poster MJ V8.1 chữ 3D & biểu cảm sốc.</div>
                </div>
                <button id="v5-tool-thumb-btn" type="button" style="margin-top:8px; background:#262936; border:1px solid #3f3f46; color:#ec4899; font-size:0.65rem; font-weight:800; padding:5px; border-radius:6px; cursor:pointer;">
                  Tạo Ảnh Bìa
                </button>
              </div>
            </div>
          </div>

          <!-- MODULE E: 30-SECOND MULTI-SHOT & MICRO-TIMELINE SEQUENCER -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:12px; padding:16px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
              <div>
                <span style="font-size:0.9rem; font-weight:900; color:#f59e0b;">⏱️ TRỤC THỜI GIAN ĐA PHÂN CẢNH 30 GIÂY</span>
                <span style="font-size:0.68rem; color:#94a3b8; margin-left:8px;">Seedance 2.5 & Kling 4.0 Standard</span>
              </div>
              <button id="v5-add-shot-btn" type="button" style="background:#262936; border:1px solid #f59e0b; color:#f59e0b; font-size:0.72rem; font-weight:800; padding:4px 10px; border-radius:6px; cursor:pointer;">
                + Thêm Cảnh (Max 6)
              </button>
            </div>

            <!-- Shot Tabs Header -->
            <div id="v5-shot-tabs-header" style="display:flex; gap:6px; margin-bottom:12px; overflow-x:auto;">
              <!-- Injected by renderActiveShot -->
            </div>

            <!-- Active Shot Configuration Card -->
            <div id="v5-shot-editor-card" style="background:#14161D; border:1px solid #262936; border-radius:10px; padding:14px;">
              <!-- Dynamic content injected by renderActiveShot() -->
            </div>
          </div>

          <!-- MODULE F: NATIVE CINEMA SOUND MIXER & 11-LANG LIP-SYNC -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:12px; padding:14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
              <span style="font-size:0.82rem; font-weight:900; color:#38bdf8; display:flex; align-items:center; gap:6px;">
                <span>🎚️</span> BÀN TRỘN ÂM THANH 3 TRACK & LIP-SYNC 11 NGÔN NGỮ
              </span>
              <span style="font-size:0.65rem; color:#94a3b8;">Gemini Omni / Veo 3.1 Synchronized</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <!-- Track 1: Dialogue & Lip-Sync -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <span style="font-size:0.7rem; font-weight:800; color:#38bdf8;">Track 1: Thoại & Khẩu Hình (Lip-Sync)</span>
                  <div style="display:flex; gap:4px;">
                    <select id="v5-lip-lang-select" style="background:#0b0c10; border:1px solid #262936; color:#fff; font-size:0.62rem; padding:2px 4px; border-radius:4px;">
                      <option value="vi-VN">🇻🇳 Tiếng Việt</option>
                      <option value="en-US">🇺🇸 English</option>
                      <option value="zh-CN">🇨🇳 中文</option>
                      <option value="ja-JP">🇯🇵 日本語</option>
                      <option value="ko-KR">🇰🇷 한국어</option>
                      <option value="fr-FR">🇫🇷 Français</option>
                    </select>
                    <select id="v5-lip-delivery-select" style="background:#0b0c10; border:1px solid #262936; color:#f59e0b; font-size:0.62rem; padding:2px 4px; border-radius:4px;">
                      <option value="Slow, quiet intensity">Thì thầm, nội tâm sâu</option>
                      <option value="Commanding, authoritative">Mạnh mẽ, uy quyền</option>
                      <option value="Emotional, trembling">Xúc động, run rẩy</option>
                      <option value="Sarcastic, humorous">Châm biếm, dí dỏm</option>
                    </select>
                  </div>
                </div>
                <input id="v5-dialogue-input" type="text" placeholder="Nhập câu thoại cho phân cảnh này..." style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#f4f4f5; font-size:0.75rem; padding:6px 8px; border-radius:6px;" />
              </div>

              <!-- Track 2: Time-coded Foley & SFX -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="font-size:0.7rem; font-weight:800; color:#10b981; margin-bottom:4px;">Track 2: Foley & Hiệu Ứng Vật Lý (SFX)</div>
                <input id="v5-foley-input" type="text" placeholder="e.g. [00:02.5] Tiếng đá lạnh va lách cách vào thành ly thủy tinh..." style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#f4f4f5; font-size:0.75rem; padding:6px 8px; border-radius:6px;" />
              </div>

              <!-- Track 3: Ambient Room Tone & Score -->
              <div style="background:#14161d; border:1px solid #262936; border-radius:8px; padding:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <span style="font-size:0.7rem; font-weight:800; color:#ec4899;">Track 3: Không Gian & Nhạc Phim (Score)</span>
                  <span style="font-size:0.62rem; color:#94a3b8;">BPM: 65 (Melancholic Jazz & Đàn Tranh)</span>
                </div>
                <input id="v5-ambient-input" type="text" placeholder="Nhạc nền Hans Zimmer braaam hoặc Solo Cello buồn 65 BPM..." style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#f4f4f5; font-size:0.75rem; padding:6px 8px; border-radius:6px;" />
              </div>
            </div>
          </div>

        </main>

        <!-- ============================================================== -->
        <!-- CỘT 3: UNIVERSAL 5-ENGINE COMPILER & PRODUCTION EXPORT         -->
        <!-- ============================================================== -->
        <aside class="v5-scroll" style="width:380px; background:#14161D; border-left:1px solid #262936; padding:16px; overflow-y:auto; display:flex; flex-direction:column; gap:14px;">
          
          <!-- Master Output Header -->
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <span style="font-size:0.85rem; font-weight:900; color:#f59e0b;">⚡ TRÌNH BIÊN DỊCH 5 ENGINE</span>
            <span style="font-size:0.62rem; background:rgba(245,158,11,0.15); color:#f59e0b; padding:2px 6px; border-radius:6px; font-weight:700;">T10/2026</span>
          </div>

          <!-- 5 Platform Tabs Header -->
          <div style="display:flex; gap:4px; background:#0b0c10; padding:3px; border-radius:8px; border:1px solid #262936;">
            <button id="v5-tab-btn-seedance" class="v5-tab-btn" type="button" style="flex:1; background:#f59e0b; color:#000; font-size:0.65rem; font-weight:800; padding:6px 2px; border-radius:6px; border:none; cursor:pointer;">
              Seedance
            </button>
            <button id="v5-tab-btn-kling" class="v5-tab-btn" type="button" style="flex:1; background:transparent; color:#94a3b8; font-size:0.65rem; font-weight:800; padding:6px 2px; border-radius:6px; border:none; cursor:pointer;">
              Kling 4.0
            </button>
            <button id="v5-tab-btn-veo" class="v5-tab-btn" type="button" style="flex:1; background:transparent; color:#94a3b8; font-size:0.65rem; font-weight:800; padding:6px 2px; border-radius:6px; border:none; cursor:pointer;">
              Veo 3.1
            </button>
            <button id="v5-tab-btn-runway" class="v5-tab-btn" type="button" style="flex:1; background:transparent; color:#94a3b8; font-size:0.65rem; font-weight:800; padding:6px 2px; border-radius:6px; border:none; cursor:pointer;">
              Runway
            </button>
            <button id="v5-tab-btn-mj" class="v5-tab-btn" type="button" style="flex:1; background:transparent; color:#94a3b8; font-size:0.65rem; font-weight:800; padding:6px 2px; border-radius:6px; border:none; cursor:pointer;">
              MJ V8.1
            </button>
          </div>

          <!-- Runway Mode Toggle (chỉ hiện khi tab runway) -->
          <div id="v5-runway-toggle-box" style="display:none; align-items:center; justify-content:space-between; background:#0b0c10; padding:6px 10px; border-radius:6px; border:1px solid #262936;">
            <span style="font-size:0.65rem; color:#94a3b8;">Chế độ Runway:</span>
            <div style="display:flex; gap:4px;">
              <button id="v5-runway-i2v-btn" type="button" style="background:#8b5cf6; color:#fff; border:none; font-size:0.62rem; padding:3px 8px; border-radius:4px; font-weight:800; cursor:pointer;">Image-to-Video (Pure Action)</button>
              <button id="v5-runway-t2v-btn" type="button" style="background:#262936; color:#94a3b8; border:none; font-size:0.62rem; padding:3px 8px; border-radius:4px; font-weight:800; cursor:pointer;">Text-to-Video</button>
            </div>
          </div>

          <!-- Compiler Output Textarea Box -->
          <div style="position:relative; flex:1; min-height:260px; display:flex; flex-direction:column;">
            <textarea id="v5-compiler-output" readonly class="v5-scroll" style="flex:1; width:100%; box-sizing:border-box; background:#0B0C10; border:1px solid #262936; border-radius:8px; color:#4ade80; font-family:monospace; font-size:0.75rem; line-height:1.45; padding:12px; resize:none; outline:none;"></textarea>
            
            <button id="v5-copy-output-btn" type="button" style="margin-top:8px; background:linear-gradient(135deg, #f59e0b, #d97706); border:none; color:#000; font-size:0.75rem; font-weight:900; padding:8px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
              <span>📋 Copy Prompt Chuẩn Nền Tảng</span>
            </button>
          </div>

          <!-- Enterprise Export Suite -->
          <div style="background:#181B24; border:1px solid #262936; border-radius:10px; padding:12px;">
            <div style="font-size:0.75rem; font-weight:800; color:#fff; margin-bottom:8px;">📦 BỘ XUẤT HẬU KỲ ENTERPRISE</div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <button id="v5-export-json-btn" type="button" style="background:#14161d; border:1px solid #262936; color:#38bdf8; font-size:0.72rem; font-weight:800; padding:6px; border-radius:6px; cursor:pointer; text-align:left; display:flex; align-items:center; gap:6px;">
                <span>💾 Xuất JSON Manifest (Remotion / API)</span>
              </button>
              <button id="v5-export-xml-btn" type="button" style="background:#14161d; border:1px solid #262936; color:#f59e0b; font-size:0.72rem; font-weight:800; padding:6px; border-radius:6px; cursor:pointer; text-align:left; display:flex; align-items:center; gap:6px;">
                <span>🎬 Xuất DaVinci Resolve Final Cut XML</span>
              </button>
              <button id="v5-export-callsheet-btn" type="button" style="background:#14161d; border:1px solid #262936; color:#10b981; font-size:0.72rem; font-weight:800; padding:6px; border-radius:6px; cursor:pointer; text-align:left; display:flex; align-items:center; gap:6px;">
                <span>📄 In PDF Call Sheet & Storyboard Đoàn Phim</span>
              </button>
            </div>
          </div>

        </aside>

      </div>
    `;

    document.body.appendChild(modal);
  }

  renderActiveShot() {
    const timeline = this.engine.projectData.multi_shot_timeline;
    if (this.activeShotIndex >= timeline.length) {
      this.activeShotIndex = Math.max(0, timeline.length - 1);
    }
    const shot = timeline[this.activeShotIndex];
    if (!shot) return;

    // Render Shot Tabs
    const tabsHeader = document.getElementById('v5-shot-tabs-header');
    if (tabsHeader) {
      tabsHeader.innerHTML = timeline.map((s, idx) => {
        const isActive = idx === this.activeShotIndex;
        return `
          <button type="button" class="v5-shot-tab" data-idx="${idx}" style="background:${isActive ? '#f59e0b' : '#14161d'}; color:${isActive ? '#000' : '#94a3b8'}; border:1px solid ${isActive ? '#f59e0b' : '#262936'}; font-size:0.72rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; white-space:nowrap;">
            Shot ${s.shot_number} (${s.timecode.split(' - ')[0]})
          </button>
        `;
      }).join('');

      tabsHeader.querySelectorAll('.v5-shot-tab').forEach(btn => {
        btn.onclick = () => {
          this.activeShotIndex = parseInt(btn.dataset.idx, 10);
          this.renderActiveShot();
        };
      });
    }

    // Render Active Shot Editor Card
    const card = document.getElementById('v5-shot-editor-card');
    if (card) {
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-size:0.85rem; font-weight:900; color:#f59e0b;">
            Cảnh ${shot.shot_number} — <span style="color:#fff;">[${shot.timecode}]</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button id="v5-delete-shot-btn" type="button" style="background:#ef4444; border:none; color:#fff; font-size:0.65rem; font-weight:800; padding:4px 8px; border-radius:4px; cursor:pointer;">
              Xóa Cảnh Này
            </button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:140px 1fr; gap:14px; margin-bottom:12px;">
          <!-- SVG Visual Shot Representation -->
          <div style="background:#0b0c10; border:1px solid #262936; border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:10px;">
            <svg class="shot-visual-svg" width="80" height="60" viewBox="0 0 80 60" style="background:#14161d; border-radius:4px; border:1px solid #3f3f46;">
              <rect x="2" y="2" width="76" height="56" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3" />
              <circle cx="40" cy="25" r="8" fill="#f59e0b" />
              <path d="M 28 50 C 28 35, 52 35, 52 50 Z" fill="#f59e0b" />
            </svg>
            <div style="font-size:0.62rem; color:#f59e0b; font-weight:800; margin-top:6px; text-align:center;">
              ${shot.shot_size}
            </div>
          </div>

          <!-- Shot Parameters Grid -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Quy cách cảnh (Shot Size):</label>
              <select id="v5-shot-size-select" style="width:100%; background:#0b0c10; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;">
                <option value="Wide Establishing Shot (WS)" ${shot.shot_size.includes('Wide') ? 'selected' : ''}>Wide Establishing Shot (WS)</option>
                <option value="Medium Shot (MS)" ${shot.shot_size.includes('Medium Shot') ? 'selected' : ''}>Medium Shot (MS)</option>
                <option value="Medium Close-Up (MCU)" ${shot.shot_size.includes('MCU') ? 'selected' : ''}>Medium Close-Up (MCU)</option>
                <option value="Close-Up (CU)" ${shot.shot_size.includes('Close-Up (CU)') ? 'selected' : ''}>Close-Up (CU)</option>
                <option value="Extreme Close-Up (ECU)" ${shot.shot_size.includes('Extreme') ? 'selected' : ''}>Extreme Close-Up (ECU)</option>
              </select>
            </div>

            <div>
              <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Góc máy (Angle):</label>
              <select id="v5-shot-angle-select" style="width:100%; background:#0b0c10; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;">
                <option value="Eye-Level" ${shot.camera_angle.includes('Eye-Level') ? 'selected' : ''}>Eye-Level (Gần gũi)</option>
                <option value="Low Angle" ${shot.camera_angle.includes('Low Angle') ? 'selected' : ''}>Low Angle (Uy quyền)</option>
                <option value="High Angle" ${shot.camera_angle.includes('High Angle') ? 'selected' : ''}>High Angle (Bao quát)</option>
                <option value="Dutch Angle" ${shot.camera_angle.includes('Dutch') ? 'selected' : ''}>Dutch Angle (Kịch tính)</option>
                <option value="Over-The-Shoulder (OTS)" ${shot.camera_angle.includes('Shoulder') ? 'selected' : ''}>Over-The-Shoulder (OTS)</option>
              </select>
            </div>

            <div>
              <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Chuyển động (Motion):</label>
              <input id="v5-shot-motion-input" type="text" value="${shot.camera_movement || ''}" style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;" />
            </div>

            <div>
              <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Kiểu chuyển cảnh vào (Transition):</label>
              <select id="v5-shot-trans-select" style="width:100%; background:#0b0c10; border:1px solid #262936; color:#fff; font-size:0.72rem; padding:4px 6px; border-radius:6px;">
                <option value="Hard Cut">Hard Cut (Cắt trực tiếp)</option>
                <option value="Match Cut">Match Cut (Khớp hướng nhìn)</option>
                <option value="Whip Pan">Whip Pan (Lia nhanh sang)</option>
                <option value="Rack Focus">Rack Focus (Trượt nét mượt)</option>
                <option value="Fade from Black">Fade from Black</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Spatial Blocking & Action Physics -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div>
            <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Bố trí không gian & Trục nhìn (Spatial Blocking):</label>
            <input id="v5-shot-spatial-input" type="text" value="${shot.spatial_blocking || ''}" style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#38bdf8; font-size:0.72rem; padding:6px 8px; border-radius:6px;" />
          </div>

          <div>
            <label style="font-size:0.65rem; color:#94a3b8; display:block; margin-bottom:2px;">Hành động nhân vật & Vật lý (Action Physics):</label>
            <textarea id="v5-shot-action-input" rows="2" style="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid #262936; color:#f4f4f5; font-size:0.72rem; padding:6px 8px; border-radius:6px; resize:none;">${shot.action_physics || ''}</textarea>
          </div>
        </div>
      `;

      // Update Native Audio inputs for active shot
      const dInput = document.getElementById('v5-dialogue-input');
      if (dInput) dInput.value = shot.audio_layers?.dialogue?.text || '';
      const fInput = document.getElementById('v5-foley-input');
      if (fInput) fInput.value = shot.audio_layers?.foley_sfx || '';
      const aInput = document.getElementById('v5-ambient-input');
      if (aInput) aInput.value = shot.audio_layers?.ambience || '';

      // Bind input events
      document.getElementById('v5-shot-size-select').onchange = (e) => {
        shot.shot_size = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
      document.getElementById('v5-shot-angle-select').onchange = (e) => {
        shot.camera_angle = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
      document.getElementById('v5-shot-motion-input').onchange = (e) => {
        shot.camera_movement = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
      document.getElementById('v5-shot-trans-select').onchange = (e) => {
        shot.transition_in = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
      document.getElementById('v5-shot-spatial-input').onchange = (e) => {
        shot.spatial_blocking = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
        this.updateContinuityBadge();
      };
      document.getElementById('v5-shot-action-input').onchange = (e) => {
        shot.action_physics = e.target.value;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };

      document.getElementById('v5-delete-shot-btn').onclick = () => {
        this.engine.removeShot(this.activeShotIndex);
        this.renderActiveShot();
        this.renderCompilerOutput();
      };
    }
  }

  renderCompilerOutput() {
    const outputs = this.engine.projectData.compiled_outputs;
    const outputArea = document.getElementById('v5-compiler-output');
    if (!outputArea || !outputs) return;

    if (this.activeCompilerTab === 'seedance') {
      outputArea.value = outputs.seedance || '';
    } else if (this.activeCompilerTab === 'kling') {
      outputArea.value = outputs.kling || '';
    } else if (this.activeCompilerTab === 'veoOmni') {
      outputArea.value = outputs.veoOmni || '';
    } else if (this.activeCompilerTab === 'runway') {
      outputArea.value = outputs.runway || '';
    } else if (this.activeCompilerTab === 'midjourney') {
      outputArea.value = outputs.midjourney || '';
    }
  }

  updateContinuityBadge() {
    const badge = document.getElementById('v5-continuity-badge');
    if (!badge) return;
    const issues = this.engine.validate180DegreeAxis();
    if (issues.length === 0) {
      badge.style.background = 'rgba(16,185,129,0.12)';
      badge.style.borderColor = '#10b981';
      badge.style.color = '#10b981';
      badge.innerHTML = '<span>🛡️ Raccord: 100% Khớp Trục 180°</span>';
      badge.onclick = null;
    } else {
      badge.style.background = 'rgba(239,68,68,0.18)';
      badge.style.borderColor = '#ef4444';
      badge.style.color = '#ef4444';
      badge.innerHTML = `<span>⚠️ Phát hiện ${issues.length} lỗi Vượt Trục (Bấm Sửa Ngay)</span>`;
      badge.onclick = () => {
        issues[0].autoFix();
        this.renderActiveShot();
        this.renderCompilerOutput();
        this.updateContinuityBadge();
        alert('Đã tự động sửa trục Eyeline cho cảnh khớp tuyệt đối chuẩn điện ảnh!');
      };
    }
  }

  bindEvents() {
    // Open / Close Modal
    const modal = document.getElementById('v5-master-modal');
    const openBtn = document.getElementById('btn-open-v5-studio');
    const closeBtn = document.getElementById('v5-close-modal-btn');

    if (openBtn) openBtn.onclick = () => { modal.style.display = 'flex'; };
    if (closeBtn) closeBtn.onclick = () => { modal.style.display = 'none'; };

    // Mode Switcher buttons
    const btnFast = document.getElementById('btn-mode-fast');
    const btnMaster = document.getElementById('btn-mode-master');
    if (btnFast && btnMaster) {
      btnFast.onclick = () => {
        this.isFastViralMode = true;
        btnFast.style.background = '#8b5cf6';
        btnFast.style.color = '#fff';
        btnMaster.style.background = 'transparent';
        btnMaster.style.color = '#94a3b8';
        modal.style.display = 'flex';
        // Auto scroll to viral bento
        document.getElementById('v5-bento-grid')?.scrollIntoView({ behavior: 'smooth' });
      };
      btnMaster.onclick = () => {
        this.isFastViralMode = false;
        btnMaster.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        btnMaster.style.color = '#000';
        btnFast.style.background = 'transparent';
        btnFast.style.color = '#94a3b8';
        modal.style.display = 'flex';
      };
    }

    // Language Toggle
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.onclick = () => {
        this.lang = this.lang === 'vi' ? 'en' : 'vi';
        langBtn.textContent = this.lang === 'vi' ? '🇻🇳 VI' : '🌐 EN';
        this.engine.projectData.project_metadata.lang = this.lang;
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
    }

    // Walkie-Talkie Button
    const micBtn = document.getElementById('v5-walkie-talkie-btn');
    if (micBtn) {
      micBtn.onclick = () => {
        if (!omniDirectorEngine.isListening) {
          micBtn.classList.add('pulse-recording');
          micBtn.innerHTML = '<span>🔴 Đang Lắng Nghe Khẩu Lệnh...</span>';
          omniDirectorEngine.startWalkieTalkie('vi-VN', (parsed) => {
            micBtn.classList.remove('pulse-recording');
            micBtn.innerHTML = '<span>🎙️ Bấm & Nói Khẩu Lệnh</span>';
            // Apply parsed attributes to current shot
            const shot = this.engine.projectData.multi_shot_timeline[this.activeShotIndex];
            if (shot) {
              if (parsed.shotSize) shot.shot_size = parsed.shotSize;
              if (parsed.cameraAngle) shot.camera_angle = parsed.cameraAngle;
              if (parsed.movement) shot.camera_movement = parsed.movement;
              if (parsed.action) shot.action_physics = parsed.action;
              if (parsed.audio) {
                if (!shot.audio_layers) shot.audio_layers = {};
                shot.audio_layers.ambience = parsed.audio;
              }
              this.engine.recompileAll();
              this.renderActiveShot();
              this.renderCompilerOutput();
            }
          });
        } else {
          omniDirectorEngine.stopWalkieTalkie();
          micBtn.classList.remove('pulse-recording');
          micBtn.innerHTML = '<span>🎙️ Bấm & Nói Khẩu Lệnh</span>';
        }
      };
    }

    // Webcam Live Frame Grabber
    const webcamBtn = document.getElementById('v5-webcam-toggle-btn');
    const webcamBox = document.getElementById('v5-webcam-container');
    const videoEl = document.getElementById('v5-webcam-video');
    const captureBtn = document.getElementById('v5-capture-frame-btn');

    if (webcamBtn && webcamBox && videoEl) {
      webcamBtn.onclick = async () => {
        if (!this.webcamActive) {
          webcamBox.style.display = 'block';
          const ok = await omniDirectorEngine.openCaptureFeed(videoEl, 'webcam');
          if (ok) {
            this.webcamActive = true;
            webcamBtn.textContent = '✕ Đóng Cam';
          }
        } else {
          omniDirectorEngine.closeCaptureFeed();
          webcamBox.style.display = 'none';
          this.webcamActive = false;
          webcamBtn.textContent = '📷 Soi Live';
        }
      };

      if (captureBtn) {
        captureBtn.onclick = () => {
          const snap = omniDirectorEngine.captureFrameToCanvas(videoEl);
          if (snap) {
            this.engine.projectData.global_bible_vault.prop_1.reference_images = [snap.dataUrl];
            const dnaBox = document.getElementById('v5-vision-dna-box');
            if (dnaBox && snap.visionDNA) {
              dnaBox.innerHTML = `🧬 <strong>Vision DNA:</strong> ${snap.visionDNA.physicalDescriptor}`;
            }
            alert('Đã chụp khung hình thực tế vào @Prop_1 và trích xuất Vision DNA vật lý thành công!');
            this.engine.recompileAll();
            this.renderCompilerOutput();
          }
        };
      }
    }

    // Compiler Tabs
    const tabSeedance = document.getElementById('v5-tab-btn-seedance');
    const tabKling = document.getElementById('v5-tab-btn-kling');
    const tabVeo = document.getElementById('v5-tab-btn-veo');
    const tabRunway = document.getElementById('v5-tab-btn-runway');
    const tabMj = document.getElementById('v5-tab-btn-mj');
    const runwayToggleBox = document.getElementById('v5-runway-toggle-box');

    const setTab = (tabName, activeBtn) => {
      this.activeCompilerTab = tabName;
      document.querySelectorAll('.v5-tab-btn').forEach(b => {
        b.style.background = 'transparent';
        b.style.color = '#94a3b8';
      });
      activeBtn.style.background = '#f59e0b';
      activeBtn.style.color = '#000';
      if (runwayToggleBox) {
        runwayToggleBox.style.display = tabName === 'runway' ? 'flex' : 'none';
      }
      this.renderCompilerOutput();
    };

    if (tabSeedance) tabSeedance.onclick = () => setTab('seedance', tabSeedance);
    if (tabKling) tabKling.onclick = () => setTab('kling', tabKling);
    if (tabVeo) tabVeo.onclick = () => setTab('veoOmni', tabVeo);
    if (tabRunway) tabRunway.onclick = () => setTab('runway', tabRunway);
    if (tabMj) tabMj.onclick = () => setTab('midjourney', tabMj);

    // Runway Mode toggles
    const i2vBtn = document.getElementById('v5-runway-i2v-btn');
    const t2vBtn = document.getElementById('v5-runway-t2v-btn');
    if (i2vBtn && t2vBtn) {
      i2vBtn.onclick = () => {
        this.engine.projectData.project_metadata.runway_mode = 'image_to_video';
        i2vBtn.style.background = '#8b5cf6';
        i2vBtn.style.color = '#fff';
        t2vBtn.style.background = '#262936';
        t2vBtn.style.color = '#94a3b8';
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
      t2vBtn.onclick = () => {
        this.engine.projectData.project_metadata.runway_mode = 'text_to_video';
        t2vBtn.style.background = '#8b5cf6';
        t2vBtn.style.color = '#fff';
        i2vBtn.style.background = '#262936';
        i2vBtn.style.color = '#94a3b8';
        this.engine.recompileAll();
        this.renderCompilerOutput();
      };
    }

    // Copy Prompt Button
    const copyBtn = document.getElementById('v5-copy-output-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        const text = document.getElementById('v5-compiler-output')?.value;
        if (text) {
          navigator.clipboard.writeText(text);
          copyBtn.innerHTML = '<span>✅ Đã Sao Chép Chuẩn Cú Pháp!</span>';
          setTimeout(() => {
            copyBtn.innerHTML = '<span>📋 Copy Prompt Chuẩn Nền Tảng</span>';
          }, 2000);
        }
      };
    }

    // Export JSON Manifest
    const exportJsonBtn = document.getElementById('v5-export-json-btn');
    if (exportJsonBtn) {
      exportJsonBtn.onclick = () => {
        const manifest = this.engine.projectData.compiled_outputs?.jsonManifest || this.engine.projectData;
        const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `CinePrompt_v5_Manifest_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      };
    }

    // Export DaVinci XML
    const exportXmlBtn = document.getElementById('v5-export-xml-btn');
    if (exportXmlBtn) {
      exportXmlBtn.onclick = () => {
        const xml = this.engine.exportDaVinciXML();
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `DaVinci_Resolve_Timeline_${Date.now()}.xml`;
        a.click();
        URL.revokeObjectURL(url);
      };
    }

    // Export PDF / Printable Call Sheet
    const exportCallsheetBtn = document.getElementById('v5-export-callsheet-btn');
    if (exportCallsheetBtn) {
      exportCallsheetBtn.onclick = () => {
        const html = this.engine.generatePrintableCallSheetHTML();
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
      };
    }

    // Add Shot Button
    const addShotBtn = document.getElementById('v5-add-shot-btn');
    if (addShotBtn) {
      addShotBtn.onclick = () => {
        this.engine.addShot();
        this.activeShotIndex = this.engine.projectData.multi_shot_timeline.length - 1;
        this.renderActiveShot();
        this.renderCompilerOutput();
      };
    }

    // Audio Mixer inputs
    const dInput = document.getElementById('v5-dialogue-input');
    const fInput = document.getElementById('v5-foley-input');
    const aInput = document.getElementById('v5-ambient-input');

    if (dInput) {
      dInput.onchange = (e) => {
        this.engine.updateShotDialogue(this.activeShotIndex, e.target.value);
        this.renderCompilerOutput();
      };
    }
    if (fInput) {
      fInput.onchange = (e) => {
        this.engine.updateShotFoley(this.activeShotIndex, e.target.value);
        this.renderCompilerOutput();
      };
    }
    if (aInput) {
      aInput.onchange = (e) => {
        const shot = this.engine.projectData.multi_shot_timeline[this.activeShotIndex];
        if (shot) {
          if (!shot.audio_layers) shot.audio_layers = {};
          shot.audio_layers.ambience = e.target.value;
          this.engine.recompileAll();
          this.renderCompilerOutput();
        }
      };
    }

    // Bento Tools
    const hookBtn = document.getElementById('v5-tool-hook-btn');
    if (hookBtn) {
      hookBtn.onclick = () => {
        const hook = threadViralEngine.generateViralHook('pattern_interrupt');
        const shot1 = this.engine.projectData.multi_shot_timeline[0];
        if (shot1) {
          shot1.shot_size = hook.hookShotSpec.shot_size;
          shot1.camera_angle = hook.hookShotSpec.camera_angle;
          shot1.camera_movement = hook.hookShotSpec.camera_movement;
          shot1.action_physics = hook.hookShotSpec.action_physics;
          if (!shot1.audio_layers) shot1.audio_layers = {};
          shot1.audio_layers.foley_sfx = hook.sfxLayer;
          this.engine.recompileAll();
          this.renderActiveShot();
          this.renderCompilerOutput();
          alert('⚡ Đã bơm thành công Viral Hook 3s (Pattern Interrupt) vào Shot 1!');
        }
      };
    }

    const reverseBtn = document.getElementById('v5-tool-reverse-btn');
    if (reverseBtn) {
      reverseBtn.onclick = () => {
        const txt = prompt('Dán kịch bản hoặc mô tả video viral bạn muốn giải phẫu:', 'Video một người rót mật ong lên ly đá rồi camera lia nhanh vào mắt nhân vật bất ngờ...');
        if (txt) {
          const rev = threadViralEngine.reverseEngineerViralVideo(txt);
          alert(`🧬 Đã giải phẫu thành công:\n- Nhịp dựng: ${rev.sourceAnalysis.estimatedPacing}\n- Cung bậc cảm xúc: ${rev.sourceAnalysis.emotionalArc}`);
        }
      };
    }

    const splitBtn = document.getElementById('v5-tool-split-btn');
    if (splitBtn) {
      splitBtn.onclick = () => {
        const scriptText = prompt('Dán đoạn kịch bản TVC / phim ngắn cần chia cảnh:', 'Đêm Sài Gòn mưa tầm tã. Người đàn ông đẩy cửa bước vào quán cà phê nhỏ. Anh nhìn ly cà phê phin đang nhỏ từng giọt. Hương vị cà phê làm sống dậy ký ức hai mươi năm trước.');
        if (scriptText) {
          const newShots = threadViralEngine.splitScriptToMultiShot(scriptText);
          if (newShots.length > 0) {
            this.engine.projectData.multi_shot_timeline = newShots;
            this.engine.recompileAll();
            this.activeShotIndex = 0;
            this.renderActiveShot();
            this.renderCompilerOutput();
            alert(`✂️ Đã chia tự động thành ${newShots.length} phân cảnh chuẩn nhịp 30s!`);
          }
        }
      };
    }

    const thumbBtn = document.getElementById('v5-tool-thumb-btn');
    if (thumbBtn) {
      thumbBtn.onclick = () => {
        const topic = prompt('Nhập chủ đề video của bạn để tạo Thumbnail CTR cao:', 'Bí Mật Cà Phê Sài Gòn 1990s');
        if (topic) {
          const thumb = threadViralEngine.generateThumbnailPrompt(topic);
          const modalText = prompt('Prompt Thumbnail Midjourney V8.1 (Copy ngay):', thumb.midjourneyV8Prompt);
        }
      };
    }

    // Toggle Bento Grid
    const toggleBentoBtn = document.getElementById('v5-toggle-bento-btn');
    const bentoGrid = document.getElementById('v5-bento-grid');
    if (toggleBentoBtn && bentoGrid) {
      toggleBentoBtn.onclick = () => {
        this.isBentoOpen = !this.isBentoOpen;
        bentoGrid.style.display = this.isBentoOpen ? 'grid' : 'none';
        toggleBentoBtn.textContent = this.isBentoOpen ? 'Thu gọn ▲' : 'Mở rộng ▼';
      };
    }
  }

  bindShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Ctrl + K: Search Archive
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('archive-search-input') || document.querySelector('input[type="search"]');
        if (searchInput) {
          searchInput.focus();
        } else {
          alert('🔍 Phím tắt Ctrl+K: Mở kho 415 Hollywood Master Archive.');
        }
      }

      // Space key for Push-to-Talk when in Workstation and not focused in an input/textarea
      if (e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        const modal = document.getElementById('v5-master-modal');
        if (modal && modal.style.display === 'flex') {
          e.preventDefault();
          const micBtn = document.getElementById('v5-walkie-talkie-btn');
          micBtn?.click();
        }
      }
    });
  }
}

export const v5StudioUI = new V5StudioUI();
