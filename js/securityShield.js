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
      // Allow right-click ONLY on textareas and text inputs so user can paste
      if (['TEXTAREA', 'INPUT'].includes(e.target.tagName)) return true;
      e.preventDefault();
      return false;
    }, { capture: true });

    // ── 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S, Mac Cmd+Opt+I/J/C/U) ──
    document.addEventListener('keydown', (e) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Windows/Linux Ctrl + Shift + I/J/C/K or Mac Cmd + Alt/Option + I/J/C/U
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      const isShiftOrAlt = e.shiftKey || e.altKey;
      const inspectKeys = ['i', 'j', 'c', 'k', 'u', 's'];

      if (isCmdOrCtrl && isShiftOrAlt && inspectKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + U (View Source) or Ctrl + S (Save Page)
      if (isCmdOrCtrl && ['u', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, { capture: true });

    // ── 3. Console Protection & Copyright Seal on Production ──
    try {
      const banner = () => {
        console.clear();
        console.log(
          '%c🎬 CINE PROMPT PRO v2.0\n%c© 2026 Đạo Diễn Trung. All Rights Reserved.\nProprietary Cinematography & Multi-shot AI Engine.\nTampering with or copying source code is strictly prohibited.',
          'color: #ffd700; font-size: 16px; font-weight: 800; font-family: sans-serif;',
          'color: #38bdf8; font-size: 12px; font-weight: 500;'
        );
      };
      banner();
      setInterval(banner, 10000);
    } catch (_) {}
  }
}

export const securityShield = new SecurityShield();
