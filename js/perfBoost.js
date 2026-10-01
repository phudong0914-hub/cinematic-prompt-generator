/**
 * perfBoost.js — Modern Web Performance & UX Layer (2025)
 * ─────────────────────────────────────────────────────────
 * Techniques applied:
 *  1. Passive event listeners (scroll, touch, wheel) → no jank
 *  2. IntersectionObserver → lazy-reveal cards with fade-in
 *  3. ResizeObserver → debounced responsive recalc
 *  4. requestIdleCallback → defer non-critical init work
 *  5. View Transitions API → smooth panel/page switches
 *  6. GPU-composited animations only (transform + opacity)
 *  7. Pointer feedback: instant `active` state via PointerEvents
 *  8. Scroll momentum lock: overscroll-behavior via JS fallback
 *  9. AbortController → clean up all listeners on destroy
 * 10. Throttle / debounce utilities
 */

'use strict';

/* ── Utilities ──────────────────────────────────────────────── */

/**
 * Throttle: max 1 call per `limit` ms (leading edge).
 */
export function throttle(fn, limit = 16) {
  let last = 0;
  return (...args) => {
    const now = performance.now();
    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };
}

/**
 * Debounce: call fn only after `wait` ms of silence.
 */
export function debounce(fn, wait = 150) {
  let timer;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
}

/**
 * scheduleIdle: run callback during browser idle time.
 * Falls back to setTimeout(fn, 1) if rIC not supported.
 */
export function scheduleIdle(fn, timeout = 2000) {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(fn, { timeout });
  } else {
    setTimeout(fn, 1);
  }
}

/**
 * nextFrame: await next animation frame (Promise-based rAF).
 */
export function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}

/* ── View Transitions API ───────────────────────────────────── */

/**
 * Wrap a DOM mutation in View Transitions API for silky transitions.
 * Falls back to direct call if API not supported.
 * @param {() => void | Promise<void>} updateFn
 */
export async function withViewTransition(updateFn) {
  if (document.startViewTransition) {
    const transition = document.startViewTransition(updateFn);
    try {
      await transition.ready;
    } catch {
      // transition was skipped (prefers-reduced-motion etc.)
    }
    return transition;
  }
  // Fallback: just run the update
  await updateFn();
  return null;
}

/* ── Intersection Observer — Card Reveal ────────────────────── */

const REVEAL_THRESHOLD = 0.08;

let _revealObserver = null;

function getRevealObserver() {
  if (_revealObserver) return _revealObserver;
  _revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Use rAF to guarantee paint before class toggle
          requestAnimationFrame(() => {
            el.classList.add('is-visible');
            el.classList.remove('will-reveal');
          });
          _revealObserver.unobserve(el);
        }
      });
    },
    { threshold: REVEAL_THRESHOLD, rootMargin: '0px 0px -30px 0px' }
  );
  return _revealObserver;
}

/**
 * Observe a list of card elements for scroll-reveal.
 * Adds `will-reveal` class (initial hidden state) and
 * `is-visible` class when entering viewport.
 */
export function observeCards(elements) {
  const obs = getRevealObserver();
  elements.forEach(el => {
    if (!el.classList.contains('is-visible')) {
      el.classList.add('will-reveal');
      obs.observe(el);
    }
  });
}

/* ── Resize Observer ────────────────────────────────────────── */

const _resizeCallbacks = new Map();

let _resizeObserver = null;

function getResizeObserver() {
  if (_resizeObserver) return _resizeObserver;
  _resizeObserver = new ResizeObserver(
    throttle((entries) => {
      entries.forEach(entry => {
        const cb = _resizeCallbacks.get(entry.target);
        if (cb) cb(entry.contentRect);
      });
    }, 100)
  );
  return _resizeObserver;
}

/**
 * Watch an element for size changes.
 * @param {Element} el
 * @param {(rect: DOMRectReadOnly) => void} callback
 */
export function watchResize(el, callback) {
  _resizeCallbacks.set(el, callback);
  getResizeObserver().observe(el);
}

export function unwatchResize(el) {
  _resizeCallbacks.delete(el);
  _resizeObserver?.unobserve(el);
}

/* ── Passive Scroll / Touch Listeners ──────────────────────── */

const _abortControllers = new Map();

/**
 * Add a passive event listener (scroll, wheel, touch) that
 * will NOT block the browser's compositing thread.
 * @param {EventTarget} target
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} handler
 * @param {string} [key]  optional key for later removal
 */
export function addPassiveListener(target, event, handler, key) {
  const ac = new AbortController();
  if (key) _abortControllers.set(key, ac);
  target.addEventListener(event, handler, { passive: true, signal: ac.signal });
  return ac;
}

/**
 * Remove a passive listener by key.
 */
export function removePassiveListener(key) {
  _abortControllers.get(key)?.abort();
  _abortControllers.delete(key);
}

/* ── Button Press Feedback (Pointer Events) ─────────────────── */

/**
 * Attach instant pointer-down/up visual feedback to all
 * `.atb-btn` and `.btn-primary` elements.
 * Uses PointerEvents for both touch and mouse.
 */
function attachButtonFeedback() {
  const selector = '.atb-btn, .btn-primary, .randomize-btn, .copy-btn, .pill-btn';

  document.addEventListener('pointerdown', (e) => {
    const btn = e.target.closest(selector);
    if (!btn) return;
    btn.setAttribute('data-pressing', '1');
  }, { passive: true });

  document.addEventListener('pointerup', (e) => {
    const btn = e.target.closest(selector);
    if (!btn) return;
    btn.removeAttribute('data-pressing');
  }, { passive: true });

  document.addEventListener('pointercancel', (e) => {
    const btn = e.target.closest(selector);
    if (!btn) return;
    btn.removeAttribute('data-pressing');
  }, { passive: true });
}

/* ── Smooth Scroll on all scrollable containers ─────────────── */

function applyScrollOptimizations() {
  // Prevent overscroll bounce on mobile that causes layout shifts
  document.documentElement.style.overscrollBehavior = 'none';

  // Optimize scroll performance on scrollable panels
  const scrollables = document.querySelectorAll(
    '.card-scroll-area, .sidebar-output, .result-area, .modal-body, .glossary-list'
  );
  scrollables.forEach(el => {
    // Hint to browser: this element scrolls
    el.style.willChange = 'scroll-position';
    // Enable momentum scrolling on iOS
    el.style.webkitOverflowScrolling = 'touch';
  });
}

/* ── Content Visibility optimization ────────────────────────── */

/**
 * Apply content-visibility: auto to off-screen heavy sections.
 * This tells the browser to skip layout/paint for hidden content.
 */
function applyContentVisibility() {
  const heavySections = document.querySelectorAll(
    '.sidebar-output, .glossary-modal-content, .char-os-panel, .project-panel'
  );
  heavySections.forEach(el => {
    if (!el.dataset.cvApplied) {
      el.style.contentVisibility = 'auto';
      el.style.containIntrinsicSize = '0 600px';
      el.dataset.cvApplied = '1';
    }
  });
}

/* ── Font smoothing ──────────────────────────────────────────── */

function applyFontOptimizations() {
  document.documentElement.style.setProperty('-webkit-font-smoothing', 'antialiased');
  document.documentElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
  document.documentElement.style.setProperty('text-rendering', 'optimizeLegibility');
}

/* ── Init ────────────────────────────────────────────────────── */

/**
 * Call this once after DOMContentLoaded.
 * Critical work runs immediately; non-critical deferred to idle.
 */
export function initPerfBoost() {
  // --- CRITICAL (blocking frame) ---
  attachButtonFeedback();
  applyFontOptimizations();

  // --- DEFERRED (idle time) ---
  scheduleIdle(() => {
    applyScrollOptimizations();
    applyContentVisibility();

    // Observe all rendered cards for scroll-reveal
    scheduleIdle(() => {
      const cards = document.querySelectorAll('.card:not(.is-visible)');
      if (cards.length > 0) observeCards(Array.from(cards));
    }, 3000);
  }, 1000);
}

export default {
  throttle,
  debounce,
  scheduleIdle,
  nextFrame,
  withViewTransition,
  observeCards,
  watchResize,
  unwatchResize,
  addPassiveListener,
  removePassiveListener,
  initPerfBoost,
};
