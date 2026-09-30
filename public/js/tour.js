/**
 * tour.js — Interactive 3-Step Spotlight Guided Tour
 * ──────────────────────────────────────────────────
 * Guides first-time users through the core workflow with spotlight focus and animated tooltips.
 */

import { soundFX } from './soundFX.js';

export class OnboardingTour {
  constructor() {
    this.currentStep = 0;
    this.overlay = null;
    this.card = null;
    this.stepsVI = [
      {
        targetSelector: '.control-sidebar',
        title: '🎯 Bước 1: Khởi Tạo Ý Tưởng & Ảnh Tham Chiếu',
        desc: 'Nhập mô tả chủ đề, khóa 5 móc neo nhân vật hoặc kéo thả ảnh sản phẩm (Reference Image) vào đây để AI Vision phân tích.',
        position: 'right'
      },
      {
        targetSelector: '.main-process',
        title: '🎬 Bước 2: Chọn Thẻ Kỹ Thuật & Đạo Diễn',
        desc: 'Chọn các góc máy, setup ánh sáng của Roger Deakins/Wong Kar-wai, hoặc bấm "DIRECTOR\'S CUT" để phối ngẫu nhiên 7 tầng điện ảnh.',
        position: 'center'
      },
      {
        targetSelector: '.sidebar-output',
        title: '⚡ Bước 3: Nhận Trọn Bộ Prompt 3-Trong-1',
        desc: 'Lấy ngay Prompt Ảnh Midjourney 8K, Prompt Video Veo/Sora 10s có timeline, và Kịch bản âm thanh Foley ASMR!',
        position: 'left'
      }
    ];

    this.stepsEN = [
      {
        targetSelector: '.control-sidebar',
        title: '🎯 Step 1: Initialize Subject & Reference Image',
        desc: 'Enter your subject idea, lock 5 character anchor traits, or drag & drop a product image for AI Vision analysis.',
        position: 'right'
      },
      {
        targetSelector: '.main-process',
        title: '🎬 Step 2: Choose Technical Cards & Director Styles',
        desc: 'Select camera angles, lighting setups from Roger Deakins/Wong Kar-wai, or click "DIRECTOR\'S CUT" to randomize 7 cinematic layers.',
        position: 'center'
      },
      {
        targetSelector: '.sidebar-output',
        title: '⚡ Step 3: Get Complete 3-in-1 Prompt Suite',
        desc: 'Instantly receive Midjourney 8K Image Prompt, Veo/Sora 10s Video Prompt with timeline, and Foley ASMR audio script!',
        position: 'left'
      }
    ];
  }

  getSteps() {
    const lang = localStorage.getItem("cine_lang") || "vi";
    return lang === 'en' ? this.stepsEN : this.stepsVI;
  }

  start() {
    this.currentStep = 0;
    this.createElements();
    this.showStep(0);
    soundFX.playRoll();
  }

  createElements() {
    if (document.getElementById('tour-overlay')) return;

    this.overlay = document.createElement('div');
    this.overlay.id = 'tour-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      z-index: 999990;
      transition: all 0.3s ease;
      backdrop-filter: blur(4px);
    `;

    this.card = document.createElement('div');
    this.card.id = 'tour-card';
    this.card.style.cssText = `
      position: fixed;
      z-index: 999995;
      background: #18181b;
      border: 1px solid rgba(201, 162, 39, 0.4);
      box-shadow: 0 16px 40px rgba(0,0,0,0.8), 0 0 30px rgba(201, 162, 39, 0.2);
      border-radius: 16px;
      padding: 24px;
      max-width: 420px;
      width: calc(100% - 40px);
      color: #f4f4f5;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    `;

    document.body.appendChild(this.overlay);
    document.body.appendChild(this.card);

    this.overlay.addEventListener('click', () => this.end());
  }

  showStep(idx) {
    const steps = this.getSteps();
    if (idx < 0 || idx >= steps.length) {
      this.end();
      return;
    }
    this.currentStep = idx;
    const step = steps[idx];
    const lang = localStorage.getItem("cine_lang") || "vi";

    const targetEl = document.querySelector(step.targetSelector);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const stepBadge = lang === 'vi' 
      ? `HƯỚNG DẪN BẮT ĐẦU · BƯỚC ${idx + 1}/${steps.length}`
      : `GETTING STARTED · STEP ${idx + 1}/${steps.length}`;
    const skipText = lang === 'vi' ? 'Bỏ qua' : 'Skip';
    const prevText = lang === 'vi' ? '◀ Quay lại' : '◀ Back';
    const nextText = idx === steps.length - 1
      ? (lang === 'vi' ? '🎉 Bắt Đầu Sáng Tạo!' : '🎉 Start Creating!')
      : (lang === 'vi' ? 'Tiếp tục ➔' : 'Continue ➔');

    // Update card content
    this.card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="color: #ffd700; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">
          ${stepBadge}
        </span>
        <button id="tour-close-btn" style="background: transparent; border: none; color: #71717a; cursor: pointer; font-size: 0.9rem;">✕</button>
      </div>
      <h3 style="color: #fff; font-size: 1.15rem; font-weight: 700; margin: 0 0 8px;">${step.title}</h3>
      <p style="color: #a1a1aa; font-size: 0.84rem; line-height: 1.6; margin: 0 0 20px;">${step.desc}</p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <button id="tour-skip-btn" style="background: transparent; border: none; color: #71717a; font-size: 0.8rem; cursor: pointer;">${skipText}</button>
        <div style="display: flex; gap: 8px;">
          ${idx > 0 ? `<button id="tour-prev-btn" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #e4e4e7; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; cursor: pointer;">${prevText}</button>` : ''}
          <button id="tour-next-btn" style="background: linear-gradient(135deg, #c9a227, #ffd700); border: none; color: #000; font-weight: 700; padding: 6px 16px; border-radius: 8px; font-size: 0.8rem; cursor: pointer;">
            ${nextText}
          </button>
        </div>
      </div>
    `;

    // Position card centered
    this.card.style.top = '50%';
    this.card.style.left = '50%';
    this.card.style.transform = 'translate(-50%, -50%) scale(1)';

    // Wire buttons
    document.getElementById('tour-close-btn')?.addEventListener('click', () => this.end());
    document.getElementById('tour-skip-btn')?.addEventListener('click', () => this.end());
    document.getElementById('tour-prev-btn')?.addEventListener('click', () => {
      soundFX.playClick();
      this.showStep(this.currentStep - 1);
    });
    document.getElementById('tour-next-btn')?.addEventListener('click', () => {
      soundFX.playClick();
      const steps = this.getSteps();
      if (this.currentStep === steps.length - 1) {
        soundFX.playCopy();
        this.end();
      } else {
        this.showStep(this.currentStep + 1);
      }
    });
  }

  end() {
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    if (this.card && this.card.parentNode) {
      this.card.parentNode.removeChild(this.card);
    }
    this.overlay = null;
    this.card = null;
    localStorage.setItem('cinematique_tour_completed', 'true');
  }
}

export const onboardingTour = new OnboardingTour();
