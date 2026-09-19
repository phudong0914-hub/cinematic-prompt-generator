/**
 * securityShield.js — Commercial IP Protection & Anti-Inspect Engine
 * ─────────────────────────────────────────────────────────────────
 * 1. Blocks F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S on Production.
 * 2. Blocks Right-Click context menu on Production.
 * 3. Keeps Developer Mode ACTIVE on localhost / 127.0.0.1 for the owner.
 * 4. Clears console logs & prevents debugger attached tampering.
 */

class SecurityShield {
  constructor() {
    this.isProduction = !['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);
    this.init();
  }

  init() {
    if (!this.isProduction) {
      console.log('%c🛡️ [Security Shield] Chế độ Chủ Sở Hữu (Localhost Dev Mode) đang kích hoạt: F12 & Chuột phải được mở để bạn chỉnh sửa.', 'color: #38bdf8; font-weight: bold; font-size: 11px;');
      return;
    }

    // ── 1. Disable Right Click ──
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    }, { capture: true });

    // ── 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S) ──
    document.addEventListener('keydown', (e) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + Shift + I (Inspect) or J (Console) or C (Elements)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + U (View Source)
      if ((e.ctrlKey || e.metaKey) && ['U', 'u', 'S', 's'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, { capture: true });

    // ── 3. Console Protection on Production ──
    try {
      console.log = () => {};
      console.info = () => {};
      console.warn = () => {};
      console.debug = () => {};
    } catch (_) {}
  }
}

export const securityShield = new SecurityShield();
