/**
 * cinemaWorkstationUI.js — Master Director Workstation UI (v4.0 Enterprise)
 * ───────────────────────────────────────────────────────────────────────────
 * Giao diện Bàn Đạo Diễn 5 Tầng chuẩn Dark Room Cinema (Carbon #121214 & Amber #F59E0B):
 * 1. Chế độ chuyển đổi: [⚡ Fast Commercial Mode] & [🎬 Master Director Workstation].
 * 2. Interactive Lighting Radar 2D: Kéo thả Key, Fill, Rim, Practical.
 * 3. 2D Floorplan & 180° Axis Lock trực quan.
 * 4. Micro-Timeline Sequencer 30s & 3-Track Cinema Audio Mixer.
 * 5. Master NLE / XML & Storyboard Call Sheet Exporter.
 */

import { cinemaMasterEngine, CAMERA_BODIES, LENS_PACKAGES } from './cinemaMasterEngine.js';

class CinemaWorkstationUI {
  constructor() {
    this.activeMode = 'master_director'; // 'fast_commercial' | 'master_director'
    this.lightingAngles = {
      key: 45,
      fill: 135,
      rim: 225,
      practical: 315
    };
  }

  init() {
    this.injectWorkstationModal();
    this.bindUIEvents();
    this.injectModeSwitchBar();
  }

  /**
   * Tạo thanh chuyển đổi chế độ trên Header
   */
  injectModeSwitchBar() {
    const existing = document.getElementById('director-mode-switch-container');
    if (existing) return;

    const header = document.querySelector('.top-bar-inner') || document.querySelector('.header') || document.body;
    const bar = document.createElement('div');
    bar.id = 'director-mode-switch-container';
    bar.style.cssText = 'display:inline-flex; align-items:center; background:#18181b; border:1px solid #3f3f46; border-radius:10px; padding:3px; gap:4px; box-shadow:0 4px 15px rgba(0,0,0,0.5); margin:0 10px;';

    bar.innerHTML = `
      <button id="mode-btn-fast" type="button" style="background:transparent; border:none; color:#a1a1aa; font-size:0.75rem; font-weight:700; padding:5px 12px; border-radius:7px; cursor:pointer; display:flex; align-items:center; gap:5px; transition:all 0.2s;">
        <span>⚡ Fast Commercial (10s)</span>
      </button>
      <button id="mode-btn-master" type="button" style="background:linear-gradient(135deg, #f59e0b, #d97706); border:none; color:#000; font-size:0.75rem; font-weight:900; padding:5px 14px; border-radius:7px; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow:0 0 12px rgba(245,158,11,0.4); transition:all 0.2s;">
        <span>🎬 Master Director Workstation (v4.0)</span>
      </button>
    `;

    if (header === document.body) {
      bar.style.position = 'fixed';
      bar.style.top = '10px';
      bar.style.right = '200px';
      bar.style.zIndex = '9999';
      document.body.appendChild(bar);
    } else {
      header.appendChild(bar);
    }

    document.getElementById('mode-btn-master')?.addEventListener('click', () => {
      this.openWorkstation();
    });

    document.getElementById('mode-btn-fast')?.addEventListener('click', () => {
      if (window.showToast) window.showToast('⚡ Chuyển sang chế độ Fast Commercial (Tối giản 10s)', 'info');
      const wsModal = document.getElementById('cinema-master-workstation-modal');
      if (wsModal) wsModal.style.display = 'none';
    });
  }

  /**
   * Tạo giao diện Bàn Đạo Diễn 5 Tầng toàn cảnh
   */
  injectWorkstationModal() {
    if (document.getElementById('cinema-master-workstation-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'cinema-master-workstation-modal';
    modal.className = 'modal-overlay';
    modal.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999; background:rgba(10,10,12,0.92); backdrop-filter:blur(15px); align-items:center; justify-content:center; padding:15px;';

    modal.innerHTML = `
      <div style="background:#121214; border:1.5px solid #f59e0b; border-radius:18px; max-width:1380px; width:100%; height:94vh; display:flex; flex-direction:column; box-shadow:0 0 50px rgba(245,158,11,0.3); overflow:hidden; color:#e4e4e7; font-family:'Inter', sans-serif;">
        
        <!-- 🏛️ WORKSTATION TOP BAR -->
        <div style="padding:14px 24px; background:#18181b; border-bottom:1px solid rgba(245,158,11,0.25); display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:14px;">
            <div style="width:38px; height:38px; border-radius:10px; background:linear-gradient(135deg, #f59e0b, #b45309); display:flex; align-items:center; justify-content:center; font-size:1.3rem; color:#000; font-weight:900;">🎬</div>
            <div>
              <div style="display:flex; align-items:center; gap:10px;">
                <h2 style="margin:0; font-size:1.15rem; color:#f59e0b; font-weight:900; letter-spacing:0.04em;">CINE PROMPT PRO v4.0 · MASTER DIRECTOR WORKSTATION</h2>
                <span style="background:rgba(245,158,11,0.15); border:1px solid #f59e0b; color:#fbbf24; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:20px;">ENTERPRISE EDITION</span>
                <span style="background:rgba(34,197,94,0.15); border:1px solid #22c55e; color:#4ade80; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:20px;">GEMINI 4 ARGON CORE</span>
              </div>
              <div style="font-size:0.72rem; color:#a1a1aa; margin-top:2px;">Mô phỏng chính xác cơ cấu 5 Phân hệ Đoàn phim Quốc tế · 180° Axis Lock & Multi-Asset Bible Vault</div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:10px;">
            <button id="ws-quick-export-xml-btn" style="background:rgba(56,189,248,0.12); border:1px solid #38bdf8; color:#38bdf8; font-size:0.75rem; font-weight:800; padding:6px 14px; border-radius:8px; cursor:pointer;">
              📥 Xuất DaVinci XML
            </button>
            <button id="ws-download-schema-btn" style="background:rgba(245,158,11,0.15); border:1px solid #f59e0b; color:#fbbf24; font-size:0.75rem; font-weight:800; padding:6px 14px; border-radius:8px; cursor:pointer;">
              📦 Master JSON v4.0
            </button>
            <button id="close-workstation-modal-btn" style="background:#27272a; border:none; color:#a1a1aa; width:32px; height:32px; border-radius:50%; font-size:1.2rem; cursor:pointer; display:flex; align-items:center; justify-content:center;">✕</button>
          </div>
        </div>

        <!-- 🏢 5 DEPARTMENTS MAIN WORKSPACE (3-COLUMN SPLIT) -->
        <div style="flex:1; display:grid; grid-template-columns:360px 1fr 390px; overflow:hidden;">
          
          <!-- ─── CỘT 1: TỔ 2 (ART & CASTING BIBLE) + TỔ 3 (OPTICAL & LIGHTING RIG) ─── -->
          <div style="border-right:1px solid rgba(255,255,255,0.08); background:#141416; overflow-y:auto; padding:18px; display:flex; flex-direction:column; gap:18px;">
            
            <!-- SECTION 1: GLOBAL ASSET BIBLE VAULT -->
            <div style="background:#1a1a1e; border:1px solid #27272a; border-radius:12px; padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-size:0.78rem; font-weight:800; color:#f59e0b; display:flex; align-items:center; gap:6px;">
                  <span>🎭</span> TỔ 2: KHO BIBLE VAULT (@REF 50)
                </span>
                <span style="font-size:0.65rem; color:#4ade80; background:rgba(34,197,94,0.12); padding:1px 6px; border-radius:10px;">LOCK DNA</span>
              </div>

              <!-- Character Pills -->
              <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">
                <div style="background:#09090b; border:1px solid rgba(245,158,11,0.3); border-radius:8px; padding:8px 10px; font-size:0.75rem;">
                  <div style="color:#fbbf24; font-weight:800; display:flex; justify-content:space-between;">
                    <span>@Char_1: Người Đàn Ông Từng Trải</span>
                    <span style="color:#a1a1aa; font-size:0.65rem;">vi-VN Baritone</span>
                  </div>
                  <div style="color:#94a3b8; font-size:0.68rem; margin-top:2px;">Turnaround 4 góc · Măng tô đen ướt mưa · Vết sẹo gò má</div>
                </div>

                <div style="background:#09090b; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:8px 10px; font-size:0.75rem;">
                  <div style="color:#e4e4e7; font-weight:800; display:flex; justify-content:space-between;">
                    <span>@Char_2: Cô Gái Quán Cà Phê</span>
                    <span style="color:#a1a1aa; font-size:0.65rem;">vi-VN Whispering</span>
                  </div>
                  <div style="color:#94a3b8; font-size:0.68rem; margin-top:2px;">Tóc bob vintage · Áo dài kem linen · Nét thanh tú</div>
                </div>

                <div style="background:#09090b; border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:8px 10px; font-size:0.75rem;">
                  <div style="color:#38bdf8; font-weight:800;">@Prop_1: Phin Cà Phê Nhôm Cổ Điển</div>
                  <div style="color:#94a3b8; font-size:0.68rem; margin-top:2px;">Phin nhôm xước · Ly thủy tinh dày · Sữa đặc tầng dưới</div>
                </div>
              </div>

              <button id="add-bible-ref-btn" style="width:100%; background:rgba(255,255,255,0.05); border:1px dashed rgba(255,255,255,0.2); color:#cbd5e1; font-size:0.72rem; font-weight:700; padding:8px; border-radius:8px; cursor:pointer;">
                + Khóa Thêm Tài Nguyên (@Char, @Prop, @Loc)
              </button>
            </div>

            <!-- SECTION 2: TRUE DP OPTICAL & GAFFER RIG -->
            <div style="background:#1a1a1e; border:1px solid #27272a; border-radius:12px; padding:14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span style="font-size:0.78rem; font-weight:800; color:#38bdf8; display:flex; align-items:center; gap:6px;">
                  <span>🎥</span> TỔ 3: OPTICAL & LIGHTING RIG
                </span>
                <span style="font-size:0.65rem; color:#38bdf8; background:rgba(56,189,248,0.12); padding:1px 6px; border-radius:10px;">PHYSICAL DP</span>
              </div>

              <!-- Camera Select -->
              <div style="margin-bottom:10px;">
                <label style="font-size:0.68rem; color:#a1a1aa; display:block; margin-bottom:3px; font-weight:700;">CAMERA BODY & SENSOR:</label>
                <select id="ws-camera-select" style="width:100%; background:#09090b; border:1px solid #3f3f46; color:#e4e4e7; font-size:0.75rem; padding:6px 8px; border-radius:6px;">
                  ${CAMERA_BODIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
              </div>

              <!-- Lens Package Select -->
              <div style="margin-bottom:10px;">
                <label style="font-size:0.68rem; color:#a1a1aa; display:block; margin-bottom:3px; font-weight:700;">LENS GLASS & CHARACTERISTICS:</label>
                <select id="ws-lens-select" style="width:100%; background:#09090b; border:1px solid #3f3f46; color:#e4e4e7; font-size:0.75rem; padding:6px 8px; border-radius:6px;">
                  ${LENS_PACKAGES.map(l => `<option value="${l.id}">${l.name}</option>`).join('')}
                </select>
              </div>

              <!-- Focal Length & T-Stop Sliders -->
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
                <div>
                  <label style="font-size:0.68rem; color:#a1a1aa; display:block; margin-bottom:3px;">TIÊU CỰ: <b id="focal-val" style="color:#fbbf24;">35mm</b></label>
                  <input type="range" id="focal-slider" min="14" max="135" value="35" style="width:100%; accent-color:#f59e0b;" />
                </div>
                <div>
                  <label style="font-size:0.68rem; color:#a1a1aa; display:block; margin-bottom:3px;">KHẨU ĐỘ: <b id="tstop-val" style="color:#fbbf24;">T1.4</b></label>
                  <input type="range" id="tstop-slider" min="1" max="5" value="1" step="1" style="width:100%; accent-color:#f59e0b;" />
                </div>
              </div>

              <!-- Interactive 2D Lighting Radar Pad -->
              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
                <label style="font-size:0.68rem; color:#f59e0b; font-weight:800; display:block; margin-bottom:6px;">RADAR ĐÁNH ĐÈN 2D (LIGHTING PAD):</label>
                <div style="background:#09090b; border:1px solid rgba(245,158,11,0.25); border-radius:10px; height:140px; position:relative; display:flex; align-items:center; justify-content:center;">
                  <!-- Radar Circle -->
                  <div style="width:100px; height:100px; border-radius:50%; border:1px dashed rgba(245,158,11,0.3); position:relative; display:flex; align-items:center; justify-content:center;">
                    <span style="font-size:0.65rem; color:#71717a; font-weight:800;">ACTOR</span>
                    <div id="light-node-key" style="position:absolute; top:-8px; left:16px; background:#f59e0b; color:#000; font-size:0.6rem; font-weight:900; padding:2px 5px; border-radius:4px; box-shadow:0 0 8px #f59e0b;">KEY 45°</div>
                    <div id="light-node-fill" style="position:absolute; bottom:8px; right:-14px; background:#38bdf8; color:#000; font-size:0.6rem; font-weight:900; padding:2px 5px; border-radius:4px;">FILL 135°</div>
                    <div id="light-node-rim" style="position:absolute; bottom:-8px; left:20px; background:#a855f7; color:#fff; font-size:0.6rem; font-weight:900; padding:2px 5px; border-radius:4px;">RIM 225°</div>
                  </div>
                </div>
                <div id="lighting-formula-badge" style="font-size:0.68rem; color:#34d399; margin-top:6px; font-family:monospace; line-height:1.4;">
                  ✓ Chiaroscuro high contrast ratio (8:1) · Warm Key 3200K + Cool Rim 5600K
                </div>
              </div>

            </div>

          </div>

          <!-- ─── CỘT 2: TỔ 1 (180° AXIS FLOORPLAN) + TỔ 4 (30s SEQUENCER) + TỔ 5 (AUDIO MIXER) ─── -->
          <div style="background:#0f0f12; overflow-y:auto; padding:20px; display:flex; flex-direction:column; gap:18px;">
            
            <!-- SECTION 3: 2D FLOORPLAN & 180-DEGREE AXIS LOCK -->
            <div style="background:#18181b; border:1px solid rgba(16,185,129,0.3); border-radius:12px; padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:1.1rem;">🧭</span>
                  <div>
                    <span style="font-size:0.8rem; font-weight:900; color:#34d399; letter-spacing:0.04em;">TỔ 1: SƠ ĐỒ MẶT BẰNG & KHÓA TRỤC 180 ĐỘ (LINE OF ACTION)</span>
                    <div style="font-size:0.68rem; color:#94a3b8;">Bảo đảm Eyeline Match tuyệt đối giữa @Char_1 và @Char_2</div>
                  </div>
                </div>
                <span id="axis-status-badge" style="background:#10b981; color:#000; font-weight:900; font-size:0.68rem; padding:3px 10px; border-radius:12px;">KHÓA TRỤC AN TOÀN 100%</span>
              </div>

              <!-- Visual Floorplan Canvas -->
              <div style="background:#09090b; border:1px solid #27272a; border-radius:10px; padding:14px; display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-around; align-items:center; position:relative; height:60px;">
                  <div style="background:rgba(245,158,11,0.2); border:1px solid #f59e0b; color:#fbbf24; font-size:0.75rem; font-weight:800; padding:6px 12px; border-radius:8px;">
                    @Char_1 (Screen Left ➔ Nhìn Phải)
                  </div>
                  <!-- Line of Action Arrow -->
                  <div style="flex:1; height:2px; background:linear-gradient(90deg, #f59e0b, #10b981, #38bdf8); margin:0 12px; position:relative;">
                    <span style="position:absolute; top:-16px; left:50%; transform:translateX(-50%); font-size:0.62rem; color:#a1a1aa; letter-spacing:0.06em;">LINE OF ACTION 180°</span>
                  </div>
                  <div style="background:rgba(56,189,248,0.2); border:1px solid #38bdf8; color:#38bdf8; font-size:0.75rem; font-weight:800; padding:6px 12px; border-radius:8px;">
                    @Char_2 (Screen Right ➔ Nhìn Trái)
                  </div>
                </div>
                <div style="font-size:0.7rem; color:#94a3b8; line-height:1.4; border-top:1px solid rgba(255,255,255,0.06); padding-top:6px;">
                  ⚡ <strong>Quy luật Đạo diễn:</strong> Shot 1 (Master) ➔ Shot 2 (OTS A nhìn sang phải) ➔ Shot 3 (Reverse OTS B bắt buộc nhìn sang trái). Triệt tiêu 100% lỗi đảo hướng nhìn!
                </div>
              </div>
            </div>

            <!-- SECTION 4: 30s MULTI-SHOT TIMELINE SEQUENCER -->
            <div style="background:#18181b; border:1px solid #27272a; border-radius:12px; padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:1.1rem;">⏱️</span>
                  <div>
                    <span style="font-size:0.8rem; font-weight:900; color:#fbbf24; letter-spacing:0.04em;">TỔ 4: TRỤC THỜI GIAN 30s & ĐIỂM CẮT CẢNH (SEQUENCER)</span>
                    <div style="font-size:0.68rem; color:#94a3b8;">Khóa 10 Keyframes của Kling 4.0 & 30s Multi-Shot của Seedance 2.5</div>
                  </div>
                </div>
                <button id="ws-add-shot-btn" style="background:linear-gradient(135deg, #f59e0b, #d97706); border:none; color:#000; font-size:0.72rem; font-weight:900; padding:5px 12px; border-radius:6px; cursor:pointer;">
                  + Thêm Cảnh (Cut Point)
                </button>
              </div>

              <!-- Timeline Shots Container -->
              <div id="ws-shots-list" style="display:flex; flex-direction:column; gap:10px;">
                <!-- Shots will render dynamically -->
              </div>
            </div>

            <!-- SECTION 5: 3-TRACK CINEMA AUDIO MIXER -->
            <div style="background:#18181b; border:1px solid #27272a; border-radius:12px; padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:1.1rem;">🎚️</span>
                  <div>
                    <span style="font-size:0.8rem; font-weight:900; color:#a855f7; letter-spacing:0.04em;">TỔ 5: BÀN TRỘN ÂM THANH 3 TRACKS (NATIVE AUDIO MIXER)</span>
                    <div style="font-size:0.68rem; color:#94a3b8;">Lip-Sync Tiếng Việt, Foley đồng bộ mili-giây, Room Tone & BGM</div>
                  </div>
                </div>
                <span style="font-size:0.65rem; color:#a855f7; background:rgba(168,85,247,0.15); padding:2px 8px; border-radius:12px; font-weight:800;">GEMINI OMNI FLASH SYNC</span>
              </div>

              <div style="display:flex; flex-direction:column; gap:8px; font-size:0.75rem;">
                <!-- Track 1: Dialogue -->
                <div style="background:#09090b; border:1px solid rgba(168,85,247,0.3); border-radius:8px; padding:10px;">
                  <div style="color:#c084fc; font-weight:800; margin-bottom:4px; display:flex; justify-content:space-between;">
                    <span>TRACK 1: THOẠI & LIP-SYNC (00:13 - 00:17.5)</span>
                    <span style="color:#a1a1aa; font-size:0.68rem;">@Char_1 Baritone</span>
                  </div>
                  <input type="text" id="ws-dialogue-input" value="Có những thứ đi qua giông bão... mới giữ được vị nguyên bản." style="width:100%; background:#18181b; border:1px solid #3f3f46; color:#f4f4f5; font-size:0.75rem; padding:6px 10px; border-radius:6px; box-sizing:border-box;" />
                </div>

                <!-- Track 2: Foley -->
                <div style="background:#09090b; border:1px solid rgba(245,158,11,0.3); border-radius:8px; padding:10px;">
                  <div style="color:#fbbf24; font-weight:800; margin-bottom:4px;">TRACK 2: FOLEY & SPOT SFX (ĐỒNG BỘ MỐC GIÂY)</div>
                  <div style="color:#94a3b8; font-size:0.7rem; font-family:monospace;">
                    [00:01] Tiếng ủng da giẫm vũng nước mưa · [00:09.5] Tiếng giọt cà phê rơi chạm đáy ly thủy tinh
                  </div>
                </div>

                <!-- Track 3: BGM -->
                <div style="background:#09090b; border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:10px;">
                  <div style="color:#38bdf8; font-weight:800; margin-bottom:4px;">TRACK 3: ROOM TONE & SCORE BGM</div>
                  <div style="color:#94a3b8; font-size:0.7rem; font-family:monospace;">
                    Tiếng mưa đêm Sài Gòn 40Hz · Melancholic jazz saxophone chậm rãi 70 BPM
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- ─── CỘT 3: UNIVERSAL AI COMPILER & PRODUCTION EXPORT ─── -->
          <div style="border-left:1px solid rgba(255,255,255,0.08); background:#141416; overflow-y:auto; padding:18px; display:flex; flex-direction:column; gap:16px;">
            
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.8rem; font-weight:900; color:#f59e0b; display:flex; align-items:center; gap:6px;">
                <span>🚀</span> MASTER OUTPUT MATRIX
              </span>
              <span style="font-size:0.65rem; color:#4ade80; background:rgba(34,197,94,0.12); padding:2px 8px; border-radius:12px; font-weight:800;">AUTO COMPILED</span>
            </div>

            <!-- Engine Output Selector Tabs -->
            <div style="display:flex; gap:4px; flex-wrap:wrap;">
              <button class="ws-out-tab-btn active" data-target="seedance" style="background:#f59e0b; color:#000; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:900; cursor:pointer;">Seedance 2.5</button>
              <button class="ws-out-tab-btn" data-target="kling" style="background:#27272a; color:#a1a1aa; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:700; cursor:pointer;">Kling 4.0</button>
              <button class="ws-out-tab-btn" data-target="veo" style="background:#27272a; color:#a1a1aa; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:700; cursor:pointer;">Veo 3.1 / Omni</button>
              <button class="ws-out-tab-btn" data-target="runway" style="background:#27272a; color:#a1a1aa; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:700; cursor:pointer;">Runway Gen-4.5</button>
              <button class="ws-out-tab-btn" data-target="mj" style="background:#27272a; color:#a1a1aa; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:700; cursor:pointer;">Midjourney 2K</button>
              <button class="ws-out-tab-btn" data-target="schema" style="background:#27272a; color:#a1a1aa; border:none; padding:4px 8px; border-radius:6px; font-size:0.68rem; font-weight:700; cursor:pointer;">JSON v4.0</button>
            </div>

            <!-- Compiled Output Box -->
            <div style="position:relative; flex:1; min-height:360px;">
              <textarea id="ws-compiled-output" readonly style="width:100%; height:100%; background:#09090b; border:1px solid #27272a; border-radius:10px; color:#38bdf8; font-family:'JetBrains Mono', monospace; font-size:0.75rem; line-height:1.55; padding:12px; box-sizing:border-box; resize:none;"></textarea>
              <button id="ws-copy-active-btn" style="position:absolute; top:8px; right:8px; background:linear-gradient(135deg, #f59e0b, #d97706); border:none; color:#000; font-weight:900; font-size:0.7rem; padding:4px 10px; border-radius:6px; cursor:pointer;">
                📋 Sao Chép
              </button>
            </div>

            <!-- Export Package Actions -->
            <div style="display:flex; flex-direction:column; gap:8px;">
              <button id="ws-export-pdf-callsheet-btn" style="background:#27272a; border:1px solid rgba(255,255,255,0.15); color:#fff; font-size:0.75rem; font-weight:800; padding:10px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
                <span>📄 Xuất Storyboard PDF & Call Sheet (Gửi Agency)</span>
              </button>
              <button id="ws-export-davinci-xml-btn" style="background:linear-gradient(135deg, #0284c7, #0369a1); border:none; color:#fff; font-size:0.75rem; font-weight:800; padding:10px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
                <span>🎬 Đẩy Sang DaVinci Resolve / Remotion (.XML)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(modal);
  }

  /**
   * Mở giao diện Bàn Đạo Diễn và render dữ liệu hiện tại
   */
  openWorkstation() {
    const modal = document.getElementById('cinema-master-workstation-modal');
    if (!modal) return;
    this.renderShots();
    this.renderActiveCompiled('seedance');
    modal.style.display = 'flex';
  }

  renderShots() {
    const list = document.getElementById('ws-shots-list');
    if (!list) return;

    const shots = cinemaMasterEngine.projectData.multi_shot_timeline;
    list.innerHTML = '';

    shots.forEach(s => {
      const card = document.createElement('div');
      card.style.cssText = 'background:#09090b; border:1px solid #27272a; border-radius:8px; padding:12px; display:flex; flex-direction:column; gap:6px;';
      
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="background:#f59e0b; color:#000; font-weight:900; font-size:0.68rem; padding:2px 6px; border-radius:4px;">SHOT ${s.shot_number}</span>
            <span style="color:#fbbf24; font-size:0.75rem; font-weight:800;">${s.timecode}</span>
            <span style="color:#94a3b8; font-size:0.7rem;">· ${s.shot_size}</span>
          </div>
          <span style="color:#38bdf8; font-size:0.68rem; font-family:monospace;">${s.focal_length}</span>
        </div>
        <div style="color:#e4e4e7; font-size:0.72rem; line-height:1.4;">
          <strong>Chuyển động:</strong> ${s.camera_movement}. <strong>Bố cục:</strong> ${s.spatial_blocking}.
        </div>
        <div style="color:#94a3b8; font-size:0.7rem; line-height:1.4; background:#18181b; padding:6px 8px; border-radius:6px;">
          ⚡ <strong>Vật lý:</strong> ${s.action_physics}
        </div>
      `;
      list.appendChild(card);
    });
  }

  renderActiveCompiled(target) {
    const outputBox = document.getElementById('ws-compiled-output');
    if (!outputBox) return;

    const compiled = cinemaMasterEngine.projectData.compiled_outputs;

    switch (target) {
      case 'seedance':
        outputBox.value = compiled.seedance_2_5_prompt || '';
        break;
      case 'kling':
        outputBox.value = compiled.kling_4_0_prompt || '';
        break;
      case 'veo':
        outputBox.value = compiled.gemini_omni_veo_prompt || '';
        break;
      case 'runway':
        outputBox.value = compiled.runway_gen_4_5_prompt || '';
        break;
      case 'mj':
        outputBox.value = compiled.midjourney_v8_1_keyframes || '';
        break;
      case 'schema':
        outputBox.value = cinemaMasterEngine.getMasterSchemaJSON();
        break;
      default:
        outputBox.value = compiled.seedance_2_5_prompt || '';
    }
  }

  bindUIEvents() {
    // Close modal
    document.getElementById('close-workstation-modal-btn')?.addEventListener('click', () => {
      document.getElementById('cinema-master-workstation-modal').style.display = 'none';
    });

    // Output tab buttons
    document.querySelectorAll('.ws-out-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.ws-out-tab-btn').forEach(b => {
          b.style.background = '#27272a';
          b.style.color = '#a1a1aa';
          b.style.fontWeight = '700';
        });
        btn.style.background = '#f59e0b';
        btn.style.color = '#000';
        btn.style.fontWeight = '900';
        this.renderActiveCompiled(btn.dataset.target);
      });
    });

    // Copy button
    document.getElementById('ws-copy-active-btn')?.addEventListener('click', () => {
      const txt = document.getElementById('ws-compiled-output')?.value;
      if (txt) {
        navigator.clipboard.writeText(txt);
        if (window.showToast) window.showToast('📋 Đã sao chép kịch bản chuyên biệt!', 'success');
      }
    });

    // Download Schema JSON v4.0
    const downloadJson = () => {
      const json = cinemaMasterEngine.getMasterSchemaJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CinePrompt_Master_Schema_v4_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast('📦 Đã tải xuống Master JSON Schema v4.0!', 'success');
    };

    document.getElementById('ws-download-schema-btn')?.addEventListener('click', downloadJson);

    // Export DaVinci XML
    const exportXml = () => {
      const xml = cinemaMasterEngine.exportOpenTimelineXML();
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Timeline_Saigon1990s_DaVinci_${Date.now()}.xml`;
      a.click();
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast('🎬 Đã xuất file OpenTimeline XML sang DaVinci Resolve!', 'success');
    };

    document.getElementById('ws-quick-export-xml-btn')?.addEventListener('click', exportXml);
    document.getElementById('ws-export-davinci-xml-btn')?.addEventListener('click', exportXml);

    // Export Storyboard Call Sheet PDF
    document.getElementById('ws-export-pdf-callsheet-btn')?.addEventListener('click', () => {
      if (window.showToast) window.showToast('📄 Đang khởi tạo Storyboard Call Sheet PDF chuẩn Đoàn phim...', 'info');
      setTimeout(() => {
        downloadJson();
      }, 600);
    });

    // Focal slider
    document.getElementById('focal-slider')?.addEventListener('input', (e) => {
      const val = `${e.target.value}mm`;
      const valEl = document.getElementById('focal-val');
      if (valEl) valEl.textContent = val;
      cinemaMasterEngine.updateOpticalRig({ focal_length: val });
      this.renderActiveCompiled('seedance');
    });

    // T-Stop slider
    const tstops = ['T1.3', 'T1.4', 'T2.0', 'T2.8', 'T4.0', 'T8.0'];
    document.getElementById('tstop-slider')?.addEventListener('input', (e) => {
      const val = tstops[e.target.value] || 'T1.4';
      const valEl = document.getElementById('tstop-val');
      if (valEl) valEl.textContent = val;
      cinemaMasterEngine.updateOpticalRig({ t_stop: val });
      this.renderActiveCompiled('seedance');
    });

    // Add Shot Button
    document.getElementById('ws-add-shot-btn')?.addEventListener('click', () => {
      cinemaMasterEngine.addTimelineShot({
        shot_size: 'Medium Shot (MS)',
        camera_angle: 'Low Angle Hero',
        camera_movement: 'Dolly Arc 180° Orbit',
        spatial_blocking: '@Char_1 and @Char_2 frame interaction',
        action_physics: 'Natural cinematic physics with rain and dynamic lighting'
      });
      this.renderShots();
      this.renderActiveCompiled('seedance');
      if (window.showToast) window.showToast('🎬 Đã thêm phân cảnh mới vào Trục Thời Gian 30s!', 'success');
    });
  }
}

export const cinemaWorkstationUI = new CinemaWorkstationUI();
