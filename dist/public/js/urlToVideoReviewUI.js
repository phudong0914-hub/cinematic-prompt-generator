/**
 * urlToVideoReviewUI.js — UI Controller for URL to Video Review Studio
 * ──────────────────────────────────────────────────────────────────────────
 * Điều khiển giao diện Modal biến URL (Video hoặc GitHub Repo) thành video hoàn chỉnh:
 * - Tab 1: Nhập link & cấu hình đạo diễn (Presets, Thời lượng, Giọng điệu)
 * - Tab 2: Storyboard 4 phân cảnh điện ảnh trực quan
 * - Tab 3: Phòng thu âm thanh & Giọng đọc AI (Qwen-Omni Voice)
 * - Tab 4: Trạm xuất bản đa nền tảng (CapCut, Bilingual SRT, OpenCreator, Director Vault)
 * 
 * Bản quyền Đạo Diễn Trungvt · Cine Prompt Pro v2.5 / v3.0
 */

import {
  URL_TYPES,
  REVIEW_STYLES,
  detectUrlType,
  parseUrlMetadata,
  extractSourceIntelligence,
  buildDirectorReviewStoryboard,
  generateReviewProductionPackage
} from './urlToVideoReview.js';

import { directorPrivateVault } from './directorPrivateVault.js';

class UrlToVideoReviewUI {
  constructor() {
    this.currentTab = 'input';
    this.currentPackage = null;
    this.isGenerating = false;
    this.activeSceneIdx = 0;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Tab switching
    const tabs = document.querySelectorAll('.url-review-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });

    // Sample Quick Fill Buttons
    const sampleRepoBtn = document.getElementById('url-sample-repo-btn');
    if (sampleRepoBtn) {
      sampleRepoBtn.addEventListener('click', () => {
        const input = document.getElementById('url-review-input');
        if (input) {
          input.value = 'https://github.com/phudong0914-hub/cinematic-prompt-generator';
          this.showToast('Đã nạp link mẫu GitHub Cinema Repo!', 'info');
        }
      });
    }

    const sampleVideoBtn = document.getElementById('url-sample-video-btn');
    if (sampleVideoBtn) {
      sampleVideoBtn.addEventListener('click', () => {
        const input = document.getElementById('url-review-input');
        if (input) {
          input.value = 'https://www.youtube.com/watch?v=midnight_oud_luxury_tvc';
          this.showToast('Đã nạp link mẫu Video YouTube TVC!', 'info');
        }
      });
    }

    const sampleTikTokBtn = document.getElementById('url-sample-tiktok-btn');
    if (sampleTikTokBtn) {
      sampleTikTokBtn.addEventListener('click', () => {
        const input = document.getElementById('url-review-input');
        if (input) {
          input.value = 'https://www.tiktok.com/@director_trungvt/video/7392819283';
          this.showToast('Đã nạp link mẫu TikTok Viral Video!', 'info');
        }
      });
    }

    // Generate Button
    const generateBtn = document.getElementById('url-review-generate-btn');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => this.handleGenerate());
    }

    // Export Buttons
    const btnCapcut = document.getElementById('url-export-capcut-btn');
    if (btnCapcut) {
      btnCapcut.addEventListener('click', () => this.exportCapCut());
    }

    const btnSrt = document.getElementById('url-export-srt-btn');
    if (btnSrt) {
      btnSrt.addEventListener('click', () => this.exportSRT());
    }

    const btnMd = document.getElementById('url-export-md-btn');
    if (btnMd) {
      btnMd.addEventListener('click', () => this.exportMarkdown());
    }

    const btnManifest = document.getElementById('url-export-manifest-btn');
    if (btnManifest) {
      btnManifest.addEventListener('click', () => this.exportManifest());
    }

    const btnSaveVault = document.getElementById('url-save-vault-btn');
    if (btnSaveVault) {
      btnSaveVault.addEventListener('click', () => this.saveToDirectorVault());
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update tab button styles
    const tabBtns = document.querySelectorAll('.url-review-tab-btn');
    tabBtns.forEach(btn => {
      const active = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', active);
      btn.style.borderBottom = active ? '2px solid #ffd700' : '2px solid transparent';
      btn.style.color = active ? '#ffd700' : '#94a3b8';
      btn.style.fontWeight = active ? '800' : '600';
    });

    // Update panels
    const panels = document.querySelectorAll('.url-review-panel');
    panels.forEach(p => {
      p.style.display = p.id === `url-panel-${tabId}` ? 'block' : 'none';
    });
  }

  async handleGenerate() {
    const input = document.getElementById('url-review-input');
    const url = (input ? input.value : '').trim();

    if (!url) {
      this.showToast('Vui lòng dán đường link Video hoặc GitHub Repo!', 'warning');
      return;
    }

    const styleSelect = document.getElementById('url-review-style-select');
    const styleKey = styleSelect ? styleSelect.value : 'DIRECTOR_PREMIUM';

    const durationSelect = document.getElementById('url-review-duration-select');
    const duration = durationSelect ? parseInt(durationSelect.value, 10) : 30;

    const generateBtn = document.getElementById('url-review-generate-btn');
    const statusBox = document.getElementById('url-review-status-box');

    this.isGenerating = true;
    if (generateBtn) {
      generateBtn.disabled = true;
      generateBtn.innerHTML = '⏳ ĐANG BÓC TÁCH & KHỞI TẠO STUDIO...';
    }
    if (statusBox) {
      statusBox.style.display = 'block';
      statusBox.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; color:#ffd700; font-size:0.85rem; font-weight:700;">
          <span style="animation:spin 1s linear infinite; display:inline-block;">⚡</span>
          <span>Đang quét dữ liệu nguồn và thiết lập kịch bản 4 phân cảnh điện ảnh...</span>
        </div>
      `;
    }

    try {
      // 1. Phân tích trí tuệ nhân tạo
      const intelligence = await extractSourceIntelligence(url, { styleKey, duration });

      // 2. Xây dựng storyboard chuẩn Đạo Diễn
      const storyboard = buildDirectorReviewStoryboard(intelligence, { styleKey, duration });

      // 3. Đóng gói sản xuất hoàn chỉnh
      this.currentPackage = generateReviewProductionPackage(storyboard);

      // Render storyboard ra tab 2
      this.renderStoryboard(this.currentPackage.storyboard);

      // Render Voice & Audio ra tab 3
      this.renderVoiceAudio(this.currentPackage);

      // Cho phép chuyển sang các tab khác
      const tabBtns = document.querySelectorAll('.url-review-tab-btn');
      tabBtns.forEach(btn => btn.removeAttribute('disabled'));

      if (statusBox) {
        statusBox.innerHTML = `
          <div style="color:#10b981; font-size:0.85rem; font-weight:700;">
            ✅ ĐÃ KHỞI TẠO XONG: "${this.currentPackage.storyboard.title}" (${duration}s)
          </div>
        `;
      }

      this.showToast('Khởi tạo Video Review thành công!', 'success');

      // Tự động chuyển sang xem Storyboard
      setTimeout(() => {
        this.switchTab('storyboard');
      }, 700);

    } catch (err) {
      console.error('Error generating review:', err);
      this.showToast('Lỗi khi phân tích: ' + err.message, 'error');
      if (statusBox) {
        statusBox.innerHTML = `<div style="color:#ef4444; font-size:0.85rem;">❌ Lỗi: ${err.message}</div>`;
      }
    } finally {
      this.isGenerating = false;
      if (generateBtn) {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '⚡ BÓC TÁCH & SINH VIDEO REVIEW NGAY';
      }
    }
  }

  renderStoryboard(storyboard) {
    const container = document.getElementById('url-storyboard-scenes-container');
    if (!container) return;

    const { scenes, style, durationTotal, title } = storyboard;

    let html = `
      <div style="margin-bottom:16px; padding:12px 16px; background:rgba(255,215,0,0.06); border:1px solid rgba(255,215,0,0.25); border-radius:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <div style="font-size:1rem; font-weight:800; color:#ffd700;">${title}</div>
          <div style="font-size:0.75rem; color:#94a3b8;">Thời lượng: ${durationTotal}s · Chuẩn tỷ lệ 9:16 (Dọc) · ${style.name}</div>
        </div>
        <button id="copy-all-prompts-btn" style="background:rgba(255,215,0,0.15); border:1px solid #ffd700; color:#ffd700; font-size:0.75rem; font-weight:700; padding:6px 12px; border-radius:6px; cursor:pointer;">
          📋 Sao Chép 4 Prompts
        </button>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
    `;

    scenes.forEach((s, idx) => {
      html += `
        <div class="review-scene-card" style="background:rgba(15,23,42,0.85); border:1px solid rgba(255,215,0,0.2); border-radius:12px; padding:14px; display:flex; flex-direction:column; gap:10px; transition:all 0.2s;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="background:linear-gradient(135deg, #ffd700, #f59e0b); color:#0f172a; font-weight:900; font-size:0.7rem; padding:3px 8px; border-radius:6px;">
              SCENE ${s.sceneIndex}
            </span>
            <span style="font-size:0.72rem; color:#ffd700; font-weight:700; font-family:monospace;">
              ${s.timecode} (${s.duration}s)
            </span>
          </div>

          <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">
            ${s.name}
          </div>

          <!-- Lời bình Voiceover -->
          <div style="background:rgba(0,0,0,0.4); border-left:3px solid #38bdf8; padding:8px 10px; border-radius:0 8px 8px 0;">
            <div style="font-size:0.68rem; color:#38bdf8; font-weight:800; margin-bottom:2px;">🎙️ LỜI BÌNH (VOICEOVER VI):</div>
            <div style="font-size:0.78rem; color:#e2e8f0; line-height:1.4;">"${s.voiceoverVI}"</div>
            <div style="font-size:0.7rem; color:#94a3b8; font-style:italic; margin-top:4px;">"${s.voiceoverEN}"</div>
          </div>

          <!-- Chữ nhấn & Motion -->
          <div style="display:flex; flex-direction:column; gap:4px; font-size:0.72rem;">
            <div><strong style="color:#ffd700;">Chữ nhấn Sigmar:</strong> <span style="background:rgba(255,215,0,0.15); color:#ffd700; padding:2px 6px; border-radius:4px; font-weight:800;">${s.subtitleEmphasis}</span></div>
            <div><strong style="color:#a78bfa;">Chuyển động:</strong> <span style="color:#cbd5e1;">${s.motionCraft}</span></div>
            <div><strong style="color:#f43f5e;">Âm thanh SFX:</strong> <span style="color:#94a3b8;">${s.sfx}</span></div>
          </div>

          <!-- Visual Prompt -->
          <div style="margin-top:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-size:0.68rem; color:#94a3b8; font-weight:700;">VIDEO / IMAGE PROMPT:</span>
              <button class="copy-scene-prompt-btn" data-idx="${idx}" style="background:none; border:none; color:#ffd700; font-size:0.7rem; cursor:pointer; font-weight:700;">Sao chép</button>
            </div>
            <div style="background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.08); border-radius:6px; padding:8px; font-size:0.7rem; color:#94a3b8; font-family:monospace; max-height:75px; overflow-y:auto; line-height:1.3;">
              ${s.visualPrompt}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Bind copy events
    const copyAllBtn = document.getElementById('copy-all-prompts-btn');
    if (copyAllBtn) {
      copyAllBtn.addEventListener('click', () => {
        const allPrompts = scenes.map((s, i) => `// Phân cảnh ${i + 1} (${s.timecode})\n${s.visualPrompt}`).join('\n\n');
        navigator.clipboard.writeText(allPrompts).then(() => {
          this.showToast('Đã sao chép toàn bộ 4 prompts vào clipboard!', 'success');
        });
      });
    }

    const sceneCopyBtns = container.querySelectorAll('.copy-scene-prompt-btn');
    sceneCopyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        const p = scenes[idx]?.visualPrompt;
        if (p) {
          navigator.clipboard.writeText(p).then(() => {
            this.showToast(`Đã sao chép Prompt Phân cảnh ${idx + 1}!`, 'success');
          });
        }
      });
    });
  }

  renderVoiceAudio(pkg) {
    const container = document.getElementById('url-voice-audio-container');
    if (!container) return;

    const { storyboard } = pkg;
    const { style, scenes } = storyboard;

    container.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <!-- Cột thông số giọng đọc -->
        <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,215,0,0.2); border-radius:12px; padding:16px;">
          <h4 style="color:#ffd700; font-size:0.9rem; font-weight:800; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
            <span>🎙️</span> Qwen-Omni Voice Profile
          </h4>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.78rem; color:#cbd5e1;">
            <div><strong>Giọng đọc:</strong> <span style="color:#38bdf8;">${style.voiceId} (${style.name})</span></div>
            <div><strong>Nhịp độ thuyết minh:</strong> <span style="color:#ffd700;">${style.wpm} WPM (Words Per Minute)</span></div>
            <div><strong>Nhạc nền (BGM):</strong> <span>${style.bgmType}</span></div>
            <div><strong>Audio Ducking:</strong> <span style="color:#10b981;">-18 dB (Tự động hạ nhạc khi nói)</span></div>
          </div>
          <button id="url-test-tts-btn" style="margin-top:16px; background:linear-gradient(135deg, #ffd700, #f59e0b); border:none; color:#0f172a; font-weight:800; font-size:0.75rem; padding:8px 16px; border-radius:8px; cursor:pointer; width:100%;">
            🔊 Nghe Thử Câu Mở Màn (Scene 1)
          </button>
        </div>

        <!-- Cột danh sách kịch bản thoại -->
        <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,215,0,0.2); border-radius:12px; padding:16px; max-height:260px; overflow-y:auto;">
          <h4 style="color:#ffd700; font-size:0.9rem; font-weight:800; margin-top:0; margin-bottom:12px;">
            📜 Lời Bình Thuyết Minh
          </h4>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${scenes.map((s, idx) => `
              <div style="font-size:0.75rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px;">
                <div style="color:#ffd700; font-weight:700;">Màn ${idx + 1} (${s.timecode}):</div>
                <div style="color:#e2e8f0; margin-top:2px;">"${s.voiceoverVI}"</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const testTtsBtn = document.getElementById('url-test-tts-btn');
    if (testTtsBtn) {
      testTtsBtn.addEventListener('click', () => {
        const textToSpeak = scenes[0]?.voiceoverVI || 'Có phải bạn đang tìm kiếm giải pháp đỉnh cao?';
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'vi-VN';
          utterance.rate = 1.0;
          window.speechSynthesis.speak(utterance);
          this.showToast('Đang phát giọng đọc mẫu...', 'info');
        } else {
          this.showToast('Trình duyệt không hỗ trợ Web Speech trực tiếp.', 'warning');
        }
      });
    }
  }

  exportCapCut() {
    if (!this.currentPackage) {
      this.showToast('Vui lòng tạo video review trước khi xuất file!', 'warning');
      return;
    }
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.currentPackage.capcutTimeline, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `${this.slugify(this.currentPackage.storyboard.title)}_capcut_timeline.json`);
    dlAnchor.click();
    this.showToast('Đã tải CapCut Timeline JSON!', 'success');
  }

  exportSRT() {
    if (!this.currentPackage) {
      this.showToast('Vui lòng tạo video review trước khi xuất file!', 'warning');
      return;
    }
    const dataStr = 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.currentPackage.bilingualSrt);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `${this.slugify(this.currentPackage.storyboard.title)}_bilingual.srt`);
    dlAnchor.click();
    this.showToast('Đã tải Phụ đề song ngữ .SRT!', 'success');
  }

  exportMarkdown() {
    if (!this.currentPackage) {
      this.showToast('Vui lòng tạo video review trước khi xuất file!', 'warning');
      return;
    }
    const dataStr = 'data:text/markdown;charset=utf-8,' + encodeURIComponent(this.currentPackage.summaryMarkdown);
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `${this.slugify(this.currentPackage.storyboard.title)}_MASTER_STORYBOARD.md`);
    dlAnchor.click();
    this.showToast('Đã tải Bản kịch bản đạo diễn .MD!', 'success');
  }

  exportManifest() {
    if (!this.currentPackage) {
      this.showToast('Vui lòng tạo video review trước khi xuất file!', 'warning');
      return;
    }
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.currentPackage.openCreatorManifest, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `${this.slugify(this.currentPackage.storyboard.title)}_opencreator_pipeline.json`);
    dlAnchor.click();
    this.showToast('Đã tải OpenCreator Pipeline Manifest!', 'success');
  }

  saveToDirectorVault() {
    if (!this.currentPackage) {
      this.showToast('Vui lòng tạo video review trước khi lưu kho!', 'warning');
      return;
    }

    try {
      // Lưu kịch bản và timeline vào kho riêng dưới dạng Video Nền / Storyboard
      const asset = {
        name: `Review: ${this.currentPackage.storyboard.title}`,
        category: 'video_bg',
        tags: ['Review', 'URLToVideo', 'ĐạoDiễnTrungvt'],
        dataUrl: '',
        meta: {
          storyboard: this.currentPackage.storyboard,
          capcutTimeline: this.currentPackage.capcutTimeline,
          duration: this.currentPackage.storyboard.durationTotal,
          aspectRatio: '9:16'
        }
      };

      directorPrivateVault.addAsset(asset);
      this.showToast('Đã lưu Kịch bản & Timeline vào Thư Viện Của Tôi (Director Vault) 🔒!', 'success');
    } catch (e) {
      console.error(e);
      this.showToast('Lỗi khi lưu vào Vault: ' + e.message, 'error');
    }
  }

  slugify(text) {
    return (text || 'project')
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '_');
  }

  showToast(msg, type = 'info') {
    const el = document.getElementById('director-vault-toast'); // dùng chung toast nếu có
    if (el) {
      el.textContent = msg;
      el.style.display = 'block';
      el.style.background = type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : (type === 'warning' ? '#f59e0b' : '#3b82f6'));
      setTimeout(() => { el.style.display = 'none'; }, 3000);
    } else {
      alert(msg);
    }
  }
}

export const urlToVideoReviewUI = new UrlToVideoReviewUI();

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    urlToVideoReviewUI.init();
  });
}
