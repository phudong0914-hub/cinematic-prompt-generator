/**
 * toast.js — Premium Dark Glass Toast Notification System
 * ────────────────────────────────────────────────────────
 * Displays non-intrusive, stacked glassmorphic toasts for success, warning, error, and info.
 */

let toastContainer = null;

function ensureContainer() {
  if (!toastContainer || !document.body.contains(toastContainer)) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
      max-width: 380px;
      width: calc(100% - 48px);
    `;
    document.body.appendChild(toastContainer);
  }
}

/**
 * Shows a stylish toast notification.
 * @param {string} message 
 * @param {'success' | 'error' | 'warning' | 'info'} type 
 * @param {number} duration (ms)
 */
export function showToast(message, type = 'success', duration = 3200) {
  ensureContainer();

  const toast = document.createElement('div');
  toast.className = `glass-toast toast--${type}`;
  
  const colors = {
    success: { border: 'rgba(52, 211, 153, 0.4)', glow: 'rgba(52, 211, 153, 0.25)', icon: '✨', titleColor: '#34d399' },
    error:   { border: 'rgba(239, 68, 68, 0.4)', glow: 'rgba(239, 68, 68, 0.25)', icon: '❌', titleColor: '#f87171' },
    warning: { border: 'rgba(251, 191, 36, 0.4)', glow: 'rgba(251, 191, 36, 0.25)', icon: '⚠️', titleColor: '#fbbf24' },
    info:    { border: 'rgba(56, 189, 248, 0.4)', glow: 'rgba(56, 189, 248, 0.25)', icon: 'ℹ️', titleColor: '#38bdf8' },
  };

  const c = colors[type] || colors.info;

  toast.style.cssText = `
    pointer-events: auto;
    background: rgba(18, 20, 30, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${c.border};
    box-shadow: 0 8px 32px ${c.glow}, 0 2px 8px rgba(0,0,0,0.5);
    border-radius: 12px;
    padding: 12px 16px;
    color: #f4f4f5;
    font-size: 0.82rem;
    line-height: 1.45;
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transform: translateX(30px) scale(0.95);
    transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  toast.innerHTML = `
    <div style="font-size: 1.2rem; line-height: 1; flex-shrink: 0;">${c.icon}</div>
    <div style="flex: 1; color: #e4e4e7; font-weight: 500;">${message}</div>
    <button style="background: transparent; border: none; color: #71717a; cursor: pointer; padding: 2px; font-size: 0.9rem; line-height: 1;" aria-label="Close">✕</button>
  `;

  const closeBtn = toast.querySelector('button');
  const dismiss = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px) scale(0.95)';
    setTimeout(() => {
      if (toastContainer && toast.parentNode === toastContainer) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  };

  closeBtn.addEventListener('click', dismiss);

  toastContainer.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0) scale(1)';
  });

  // Auto dismiss
  if (duration > 0) {
    setTimeout(dismiss, duration);
  }
}

// Global window exposure
if (typeof window !== 'undefined') {
  window.showToast = showToast;
}
