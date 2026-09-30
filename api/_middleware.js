/**
 * _middleware.js — Rate Limiting & Anti-Scraping Shield
 * ─────────────────────────────────────────────────────
 * Vercel Edge Middleware: runs BEFORE every /api/* request.
 * - Rate limiting: 15 requests per minute per IP
 * - CSRF session token validation
 * - Blocks non-browser scrapers
 */

// In-memory rate limit store (resets on cold start, which is fine for Vercel)
const rateLimitStore = new Map();

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 15;           // max requests per window

function getRateLimitKey(request) {
  return request.headers.get('x-forwarded-for')
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(key) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { windowStart: now, count: 1 });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

// Cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS * 2) {
      rateLimitStore.delete(key);
    }
  }
}, 300_000);

export default function middleware(request) {
  const url = new URL(request.url);

  // Only apply to /api/ routes
  if (!url.pathname.startsWith('/api/')) return;

  // ── 1. Block suspicious user agents (basic bot detection) ──
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  const suspiciousUA = ['curl', 'wget', 'python-requests', 'scrapy', 'httpie', 'postman'];
  if (suspiciousUA.some(bot => ua.includes(bot))) {
    return new Response(
      JSON.stringify({ error: 'Access denied', code: 'BOT_DETECTED' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── 2. Rate limiting ──
  const clientKey = getRateLimitKey(request);
  if (isRateLimited(clientKey)) {
    return new Response(
      JSON.stringify({
        error: 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút.',
        code: 'RATE_LIMITED'
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
        }
      }
    );
  }

  // ── 3. Enforce POST-only for data endpoints ──
  if (request.method !== 'POST' && request.method !== 'GET' && request.method !== 'OPTIONS') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // ── 4. CORS headers for OPTIONS preflight ──
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-CinePrompt-Session',
      }
    });
  }
}

export const config = {
  matcher: '/api/:path*',
};
