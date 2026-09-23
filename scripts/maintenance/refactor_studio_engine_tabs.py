# -*- coding: utf-8 -*-
"""
Refactor Studio Engine into compact tabs & relocate 414+ Category Filter bar.
"""

NEW_STUDIO_HTML = """      <!-- ── 🎬 STUDIO ENGINE: CAMERA & MOVEMENT BUILDER (StudioBinder & AICameraMovements) ── -->
      <div id="studio-camera-builder-dashboard" class="studio-camera-dashboard" style="margin: 10px 0 14px; background: linear-gradient(135deg, rgba(18, 20, 32, 0.96), rgba(12, 14, 24, 0.98)); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 215, 0, 0.35); border-radius: 16px; box-shadow: 0 16px 48px rgba(0, 0, 0, 0.8), 0 0 35px rgba(201, 162, 39, 0.18); padding: 14px 16px;">
        
        <!-- Header: Title & Live Status Readout -->
        <div class="scb-header" id="scb-toggle-btn" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(255, 215, 0, 0.2);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 1.3rem; background: rgba(201, 162, 39, 0.2); border: 1px solid rgba(255, 215, 0, 0.4); width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px rgba(255, 215, 0, 0.25);">🎬</div>
            <div>
              <div class="scb-tag" data-i18n="scb-tag" style="font-size: 0.65rem; font-weight: 800; color: #ffd700; letter-spacing: 0.08em; text-transform: uppercase;">STUDIO ENGINE · PROMPT BUILDER</div>
              <h3 class="scb-title" data-i18n="scb-title" style="margin: 2px 0 0; color: #ffffff; font-size: 0.98rem; font-weight: 800; letter-spacing: 0.01em;">StudioBinder™ Shots & AI Camera Movements</h3>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div id="scb-active-badges" style="display: flex; gap: 6px; flex-wrap: wrap;">
              <span id="scb-badge-size" style="font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: rgba(255, 215, 0, 0.12); border: 1px solid rgba(255, 215, 0, 0.4); color: #ffd700; cursor: pointer; transition: all 0.2s;" title="Bấm để chuyển nhanh đến thẻ Cỡ Cảnh">Cỡ cảnh: Tự do</span>
              <span id="scb-badge-angle" style="font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; cursor: pointer; transition: all 0.2s;" title="Bấm để chuyển nhanh đến thẻ Góc Máy">Góc: Tự do</span>
              <span id="scb-badge-motion" style="font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.4); color: #c084fc; cursor: pointer; transition: all 0.2s;" title="Bấm để chuyển nhanh đến thẻ Chuyển Động AI">Chuyển động: Mặc định</span>
            </div>
            <button id="scb-chevron" class="is-open" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,215,0,0.3); color: #ffd700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;" title="Thu gọn / Mở rộng Studio Engine">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5L7 9L11 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>

        <!-- Content Area -->
        <div id="scb-content" style="display: block;">
          
          <!-- Top Bar: Preset Nhanh 1-Touch & Auto-Apply Toggle -->
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 8px 12px; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <!-- 1-Touch Studio Presets -->
            <div style="display: flex; align-items: center; gap: 6px;">
              <span data-i18n="scb-preset-label" style="font-size: 0.72rem; font-weight: 800; color: #ffd700;">⚡ PHIM TRƯỜNG 1-TOUCH:</span>
              <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                <button class="scb-preset-btn" data-size="Close-up shot (CU)" data-angle="low-angle shot" data-motion="slow dolly-in push" style="background: rgba(201,162,39,0.18); border: 1px solid rgba(255,215,0,0.35); color: #ffd700; padding: 4px 8px; border-radius: 6px; font-size: 0.70rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">🎬 Kịch Tính (Dramatic CU)</button>
                <button class="scb-preset-btn" data-size="Extreme wide shot (EWS)" data-angle="sweeping aerial drone shot from high altitude" data-motion="dynamic FPV drone dive and swoop" style="background: rgba(56,189,248,0.18); border: 1px solid rgba(56,189,248,0.35); color: #38bdf8; padding: 4px 8px; border-radius: 6px; font-size: 0.70rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">🚁 Vĩ Đại (Epic Scope)</button>
                <button class="scb-preset-btn" data-size="Medium shot (MS)" data-angle="dutch angle shot, 25-degree tilted horizon" data-motion="organic handheld camera motion with subtle shake" style="background: rgba(168,85,247,0.18); border: 1px solid rgba(168,85,247,0.35); color: #c084fc; padding: 4px 8px; border-radius: 6px; font-size: 0.70rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">🌃 Wong Kar-wai</button>
              </div>
            </div>

            <!-- Toolbar Actions -->
            <div style="display: flex; align-items: center; gap: 10px;">
              <label class="scb-switch-label" style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; font-weight: 700; color: #f4f4f5; cursor: pointer;">
                <input type="checkbox" id="scb-auto-apply" checked />
                <span class="scb-slider-switch"></span>
                <span data-i18n="scb-auto-apply">Tự động ghép vào Prompt</span>
              </label>
              <button id="scb-reset-btn" data-i18n="scb-reset" style="background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.35); color: #f87171; padding: 4px 10px; border-radius: 6px; font-size: 0.70rem; font-weight: 700; cursor: pointer;">↺ Đặt Lại</button>
            </div>
          </div>

          <!-- Studio Navigation Sub-Tabs -->
          <div class="scb-tab-bar" style="display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; background: rgba(0,0,0,0.3); padding: 4px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
            <button type="button" class="scb-tab-btn active" data-tab="size" style="background: linear-gradient(135deg, rgba(201,162,39,0.35), rgba(255,215,0,0.2)); border: 1px solid #ffd700; color: #ffd700; padding: 5px 12px; border-radius: 7px; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">📐 1. Cỡ Cảnh (8)</button>
            <button type="button" class="scb-tab-btn" data-tab="angle" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 12px; border-radius: 7px; font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🎥 2. Góc Máy (8)</button>
            <button type="button" class="scb-tab-btn" data-tab="motion" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 12px; border-radius: 7px; font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🔄 3. Chuyển Động AI (22)</button>
            <button type="button" class="scb-tab-btn" data-tab="all" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 12px; border-radius: 7px; font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">⚡ Tất Cả (All Grid)</button>
          </div>

          <!-- Panes Wrapper -->
          <div id="scb-panes-wrapper" style="display: flex; flex-direction: column; gap: 10px;">
            
            <!-- 1. CỠ CẢNH (SHOT SIZES) -->
            <div id="scb-pane-size" class="scb-tab-pane" style="display: block; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,215,0,0.18); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span data-i18n="scb-size-title" style="font-weight: 800; color: #ffd700; font-size: 0.78rem; letter-spacing: 0.04em;">📐 1. CỠ CẢNH (SHOT SIZES) · StudioBinder Standard</span>
                <span data-i18n="scb-size-sub" style="font-size: 0.66rem; color: #a1a1aa;">Xác định khoảng cách từ ống kính đến chủ thể</span>
              </div>
              <div id="scb-size-pills" role="radiogroup" aria-label="Cỡ cảnh (Shot Sizes)" style="display: flex; flex-wrap: wrap; gap: 6px;">
                <button class="scb-pill active" data-size="" style="background: linear-gradient(135deg, rgba(201,162,39,0.3), rgba(255,215,0,0.15)); border: 1px solid #ffd700; color: #ffd700; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 700; cursor: pointer;">Mặc định</button>
                <button class="scb-pill" data-size="Extreme close-up shot (ECU)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🔍 ECU (Cực Cận)</button>
                <button class="scb-pill" data-size="Close-up shot (CU)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🎯 CU (Cận Cảnh)</button>
                <button class="scb-pill" data-size="Medium close-up shot (MCU)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">👤 MCU (Cận Trung)</button>
                <button class="scb-pill" data-size="Medium shot (MS)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🧍 MS (Trung Cảnh)</button>
                <button class="scb-pill" data-size="Medium wide shot (MWS)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🚶 MWS (Trung Toàn)</button>
                <button class="scb-pill" data-size="Wide shot (WS)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🏞️ WS (Toàn Cảnh)</button>
                <button class="scb-pill" data-size="Extreme wide shot (EWS)" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🌌 EWS (Cực Toàn)</button>
              </div>
            </div>

            <!-- 2. GÓC MÁY (CAMERA ANGLES) -->
            <div id="scb-pane-angle" class="scb-tab-pane" style="display: none; background: rgba(255,255,255,0.02); border: 1px solid rgba(56,189,248,0.18); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span data-i18n="scb-angle-title" style="font-weight: 800; color: #38bdf8; font-size: 0.78rem; letter-spacing: 0.04em;">🎥 2. GÓC MÁY (CAMERA ANGLES) · Psychological Impact</span>
                <span data-i18n="scb-angle-sub" style="font-size: 0.66rem; color: #a1a1aa;">Tạo tâm lý quyền lực, ngỡ ngàng hoặc hồi hộp</span>
              </div>
              <div id="scb-angle-pills" role="radiogroup" aria-label="Góc máy (Camera Angles)" style="display: flex; flex-wrap: wrap; gap: 6px;">
                <button class="scb-pill active" data-angle="" style="background: linear-gradient(135deg, rgba(2,132,199,0.3), rgba(56,189,248,0.15)); border: 1px solid #38bdf8; color: #38bdf8; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 700; cursor: pointer;">Mặc định</button>
                <button class="scb-pill" data-angle="eye-level shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">👀 Eye Level (Ngang Mắt)</button>
                <button class="scb-pill" data-angle="low-angle shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⬆️ Low Angle (Góc Thấp)</button>
                <button class="scb-pill" data-angle="high-angle shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⬇️ High Angle (Góc Cao)</button>
                <button class="scb-pill" data-angle="dutch angle shot, 25-degree tilted horizon" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">📐 Dutch Angle (Nghiêng)</button>
                <button class="scb-pill" data-angle="bird's eye view, overhead top-down shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🦅 Bird's Eye (Mắt Chim)</button>
                <button class="scb-pill" data-angle="sweeping aerial drone shot from high altitude" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🚁 Aerial / Drone</button>
                <button class="scb-pill" data-angle="ground-level shot, worm's eye perspective" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🌱 Ground Level (Sát Đất)</button>
              </div>
            </div>

            <!-- 3. CHUYỂN ĐỘNG CAMERA AI & TỐC ĐỘ -->
            <div id="scb-pane-motion" class="scb-tab-pane" style="display: none; background: rgba(255,255,255,0.02); border: 1px solid rgba(168,85,247,0.18); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span data-i18n="scb-motion-title" style="font-weight: 800; color: #c084fc; font-size: 0.78rem; letter-spacing: 0.04em;">🔄 3. CHUYỂN ĐỘNG CAMERA AI (AI MOTIONS) · AICameraMovements.com</span>
                <span data-i18n="scb-motion-sub" style="font-size: 0.66rem; color: #a1a1aa;">Điều hướng chuyển động ống kính cho Veo 2 / Sora / Kling</span>
              </div>
              <div id="scb-motion-pills" style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
                <button class="scb-pill active" data-motion="" style="background: linear-gradient(135deg, rgba(147,51,234,0.3), rgba(168,85,247,0.15)); border: 1px solid #c084fc; color: #c084fc; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 700; cursor: pointer;">Mặc định</button>
                <button class="scb-pill" data-motion="slow dolly-in push" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🎯 Dolly In (Tiến Tới)</button>
                <button class="scb-pill" data-motion="smooth dolly-out pull back" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⏪ Dolly Out (Lùi Xa)</button>
                <button class="scb-pill" data-motion="smooth horizontal pan left" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⬅️ Pan Left (Quay Trái)</button>
                <button class="scb-pill" data-motion="smooth horizontal pan right" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">➡️ Pan Right (Quay Phải)</button>
                <button class="scb-pill" data-motion="vertical tilt up reveal" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⬆️ Tilt Up (Ngước Lên)</button>
                <button class="scb-pill" data-motion="vertical tilt down reveal" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⬇️ Tilt Down (Cúi Xuống)</button>
                <button class="scb-pill" data-motion="smooth 360-degree orbit around subject" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🔄 360° Orbit (Quay Vòng)</button>
                <button class="scb-pill" data-motion="push past foreground layer into scene" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🚀 Push Past (Lướt Tiền Cảnh)</button>
                <button class="scb-pill" data-motion="rapid whip pan right with motion blur" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⚡ Whip Pan (Chuyển Hướng Gắt)</button>
                <button class="scb-pill" data-motion="dramatic crash zoom in on subject" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">💥 Crash Zoom (Phóng Nhanh)</button>
                <button class="scb-pill" data-motion="vertigo dolly zoom effect, dolly-in with zoom-out" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🌀 Vertigo Dolly Zoom</button>
                <button class="scb-pill" data-motion="smooth arc curve movement around subject" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">💫 Arc Shot (Lượn Vòng)</button>
                <button class="scb-pill" data-motion="dynamic FPV drone dive and swoop" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🦅 FPV Drone Sweep</button>
                <button class="scb-pill" data-motion="snorricam body-mounted shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🎽 Snorricam Gắn Thân</button>
                <button class="scb-pill" data-motion="reverse tracking walk-and-talk" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🚶‍♂️ Walk & Talk (Lùi Theo)</button>
                <button class="scb-pill" data-motion="pass-through movement" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🚪 Pass-Through Xuyên Thấu</button>
                <button class="scb-pill" data-motion="infinite zoom" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">♾️ Infinite Zoom Vô Hạn</button>
                <button class="scb-pill" data-motion="earth zoom out" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🌍 Earth Zoom Vũ Trụ</button>
                <button class="scb-pill" data-motion="tilt-shift miniature view" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🏙️ Tilt-Shift Thu Nhỏ</button>
                <button class="scb-pill" data-motion="locked-camera time-lapse" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">⏱️ Time-Lapse Thời Gian</button>
                <button class="scb-pill" data-motion="static tripod-mounted locked shot" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 5px 11px; border-radius: 7px; font-size: 0.73rem; font-weight: 600; cursor: pointer;">🔒 Static / Tripod</button>
              </div>

              <!-- Speed Bar -->
              <div style="display: flex; align-items: center; gap: 10px; padding-top: 8px; border-top: 1px dashed rgba(255,255,255,0.08);">
                <span data-i18n="scb-speed-title" style="font-size: 0.72rem; font-weight: 800; color: #38bdf8;">⚡ Tốc Độ / Cường Độ Chuyển Động:</span>
                <div id="scb-speed-pills" style="display: flex; gap: 6px;">
                  <button class="scb-speed-pill active" data-speed="slow" style="background: #38bdf8; border: 1px solid #38bdf8; color: #0f172a; padding: 3px 9px; border-radius: 6px; font-size: 0.70rem; font-weight: 800; cursor: pointer;">Slow (Chậm)</button>
                  <button class="scb-speed-pill" data-speed="medium" style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); color: #bae6fd; padding: 3px 9px; border-radius: 6px; font-size: 0.70rem; font-weight: 600; cursor: pointer;">Medium (Vừa)</button>
                  <button class="scb-speed-pill" data-speed="fast" style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); color: #bae6fd; padding: 3px 9px; border-radius: 6px; font-size: 0.70rem; font-weight: 600; cursor: pointer;">Fast (Nhanh)</button>
                  <button class="scb-speed-pill" data-speed="hyper" style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); color: #bae6fd; padding: 3px 9px; border-radius: 6px; font-size: 0.70rem; font-weight: 600; cursor: pointer;">Hyper (Siêu tốc)</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <script>
        (function() {
          function initStudioTabs() {
            const tabs = document.querySelectorAll('.scb-tab-btn');
            const paneSize = document.getElementById('scb-pane-size');
            const paneAngle = document.getElementById('scb-pane-angle');
            const paneMotion = document.getElementById('scb-pane-motion');
            const wrapper = document.getElementById('scb-panes-wrapper');
            const content = document.getElementById('scb-content');
            const chevron = document.getElementById('scb-chevron');

            function switchTab(tabKey) {
              tabs.forEach(btn => {
                const isActive = btn.dataset.tab === tabKey;
                btn.classList.toggle('active', isActive);
                if (isActive) {
                  btn.style.background = 'linear-gradient(135deg, rgba(201,162,39,0.35), rgba(255,215,0,0.2))';
                  btn.style.borderColor = '#ffd700';
                  btn.style.color = '#ffd700';
                } else {
                  btn.style.background = 'rgba(255,255,255,0.05)';
                  btn.style.borderColor = 'rgba(255,255,255,0.12)';
                  btn.style.color = '#e4e4e7';
                }
              });

              if (!paneSize || !paneAngle || !paneMotion || !wrapper) return;

              if (tabKey === 'all') {
                paneSize.style.display = 'block';
                paneAngle.style.display = 'block';
                paneMotion.style.display = 'block';
                wrapper.style.maxHeight = '320px';
                wrapper.style.overflowY = 'auto';
                wrapper.style.paddingRight = '4px';
              } else {
                wrapper.style.maxHeight = 'none';
                wrapper.style.overflowY = 'visible';
                wrapper.style.paddingRight = '0';
                paneSize.style.display = (tabKey === 'size') ? 'block' : 'none';
                paneAngle.style.display = (tabKey === 'angle') ? 'block' : 'none';
                paneMotion.style.display = (tabKey === 'motion') ? 'block' : 'none';
              }

              if (content && content.style.display === 'none') {
                content.style.display = 'block';
                chevron?.classList.add('is-open');
              }
            }

            tabs.forEach(btn => {
              btn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.soundFX?.playClick?.();
                switchTab(btn.dataset.tab);
              });
            });

            // Badges click triggers corresponding tab
            const bSize = document.getElementById('scb-badge-size');
            const bAngle = document.getElementById('scb-badge-angle');
            const bMotion = document.getElementById('scb-badge-motion');

            bSize?.addEventListener('click', (e) => {
              e.stopPropagation();
              window.soundFX?.playClick?.();
              switchTab('size');
            });
            bAngle?.addEventListener('click', (e) => {
              e.stopPropagation();
              window.soundFX?.playClick?.();
              switchTab('angle');
            });
            bMotion?.addEventListener('click', (e) => {
              e.stopPropagation();
              window.soundFX?.playClick?.();
              switchTab('motion');
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initStudioTabs);
          } else {
            initStudioTabs();
          }
        })();
      </script>

      <!-- Search & Filters with 414+ Category Explorer -->
      <div class="top-filters" style="display: flex; flex-direction: column; gap: 12px; background: rgba(18, 20, 32, 0.95); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 215, 0, 0.2); border-top: 1px solid rgba(255, 255, 255, 0.08); padding: 14px 18px; border-radius: 14px; margin-bottom: 14px;">
        
        <!-- 4. THƯ VIỆN & BỘ LỌC CHỦ ĐỀ 414+ (INTELLIGENT CATEGORY SELECTOR 6.0) -->
        <div style="width: 100%;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span data-i18n="scb-cat-title" style="font-weight: 800; color: #ffd700; font-size: 0.8rem; letter-spacing: 0.04em;">📂 THƯ VIỆN & BỘ LỌC CHỦ ĐỀ 414+ (INTELLIGENT CATEGORY SELECTOR 6.0)</span>
            <span data-i18n="scb-cat-sub" style="font-size: 0.68rem; color: #a1a1aa;">Lọc tức thì 414+ kịch bản mẫu chuẩn điện ảnh</span>
          </div>
          <div id="scb-category-pills" style="display: flex; flex-wrap: wrap; gap: 6px;">
            <button class="platform-pill active" data-cat="all" data-i18n="filter-all" style="background: rgba(201,162,39,0.25); border: 1px solid #ffd700; color: #ffd700; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">🌐 Tất Cả (414+)</button>
            <button class="platform-pill" data-cat="camera" data-i18n="filter-camera" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🎥 Góc Máy & Lens</button>
            <button class="platform-pill" data-cat="lighting" data-i18n="filter-lighting" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">💡 Ánh Sáng</button>
            <button class="platform-pill" data-cat="composition" data-i18n="filter-composition" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">📐 Bố Cục</button>
            <button class="platform-pill" data-cat="color" data-i18n="filter-color" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🎨 Tông Màu & Film</button>
            <button class="platform-pill" data-cat="gear" data-i18n="filter-gear" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">⚙️ Thiết Bị & Ống Kính</button>
            <button class="platform-pill" data-cat="food" data-i18n="filter-food" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🍔 Ẩm Thực TVC</button>
            <button class="platform-pill" data-cat="vietnam" data-i18n="filter-vietnam" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🇻🇳 100 Prompt VN</button>
            <button class="platform-pill" data-cat="travel" data-i18n="filter-travel" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">✈️ Du Lịch & Resort</button>
            <button class="platform-pill" data-cat="audio" data-i18n="filter-audio" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🔊 Foley Âm Thanh</button>
            <button class="platform-pill" data-cat="omni" data-i18n="filter-omni" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">⚡ Gemini Omni</button>
            <button class="platform-pill" data-cat="videostyles" data-i18n="filter-videostyles" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: #e4e4e7; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;">🎬 Kịch Bản Video AI</button>
            <button class="platform-pill" data-cat="favorites" data-i18n="filter-fav" style="background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; transition: all 0.2s;">❤️ Yêu Thích</button>
          </div>
        </div>

        <!-- Search Bar & Difficulty Row -->
        <div style="display: flex; gap: 14px; align-items: center; width: 100%; flex-wrap: wrap;">
          <div class="control-group control-group--search" style="position: relative; flex: 2 1 240px;">
            <div class="input-wrapper" style="position: relative; display: flex; align-items: center;">
              <input
                type="text"
                id="search-input"
                class="text-input new-input-field"
                placeholder="Tìm phong cách, từ khóa (Ctrl + K)..." data-i18n="search-placeholder"
                autocomplete="off"
                spellcheck="false"
                style="padding-right: 74px; width: 100%;"
              />
              <div style="position: absolute; right: 8px; display: flex; align-items: center; gap: 5px;">
                <button id="search-clear-btn" style="display: none; background: transparent; border: none; color: #a1a1aa; font-size: 0.82rem; cursor: pointer; padding: 2px 5px;" title="Xóa tìm kiếm">✕</button>
                <span class="kbd-badge" style="font-size: 0.65rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 1px 5px; color: #a1a1aa; font-family: monospace;">Ctrl+K</span>
              </div>
            </div>
          </div>

          <!-- Hidden DOM element for category state synchronization -->
          <select id="category-filter" style="display:none;">
            <option value="all" data-i18n="cat-all">Tất cả Danh mục</option>
            <option value="favorites" data-i18n="cat-fav">⭐️ Yêu thích</option>
            <option value="history" data-i18n="cat-history">📜 Lịch sử (30 Gần Nhất)</option>
          </select>

          <div class="control-group" style="flex: 1 1 160px; min-width: 150px;">
            <div class="select-wrapper premium-select">
              <div class="select-label-row">
                <span class="select-label-icon">🎯</span>
                <span class="select-label-text" data-i18n="diff-label">Cấp Độ</span>
              </div>
              <div class="select-inner">
                <select id="difficulty-filter" class="select-input new-input-field">
                  <option value="all" data-i18n="diff-all">Mọi cấp độ</option>
                  <option value="Basic" data-i18n="diff-basic">Cơ bản</option>
                  <option value="Intermediate" data-i18n="diff-inter">Trung bình</option>
                  <option value="Advanced" data-i18n="diff-adv">Nâng cao</option>
                </select>
                <div class="select-chevron-icon" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
"""

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    start_str = '<!-- ── 🎬 STUDIO ENGINE: CAMERA & MOVEMENT BUILDER (StudioBinder & AICameraMovements) ── -->'
    end_str = '<!-- Card Grid Explorer -->'

    s_idx = content.find(start_str)
    if s_idx == -1:
        print(f"Error: Could not find start_str in {filepath}")
        return False

    e_idx = content.find(end_str, s_idx)
    if e_idx == -1:
        print(f"Error: Could not find end_str in {filepath}")
        return False

    # Also update card-scroll-area padding-bottom if needed
    card_scroll_str = '<div class="card-scroll-area">'
    new_card_scroll_str = '<div class="card-scroll-area" style="padding-bottom: 280px;">'

    patched = content[:s_idx] + NEW_STUDIO_HTML + "\n\n      " + content[e_idx:]
    if card_scroll_str in patched:
        patched = patched.replace(card_scroll_str, new_card_scroll_str, 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(patched)

    print(f"Successfully patched {filepath}")
    return True

if __name__ == '__main__':
    patch_file('index.html')
    patch_file('public/index.html')
