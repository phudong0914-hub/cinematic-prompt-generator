# 🚀 Production Deployment Checklist

Adapted from *PinoyFreeCoder/deployment-checklist* for Cine Prompt Pro.

## 🔴 Blocker (`[BLOCKER]`) — Do Not Deploy Without Resolving
- [ ] **No Hardcoded Keys**: Verify all API keys (Gemini, OpenRouter, Groq) are absent from Git commits.
- [ ] **BYOK Encryption**: Client-entered API keys must only exist in encrypted localStorage or session memory.
- [ ] **Clean Build**: `npm run build` runs cleanly and generates `dist/` without broken file links.
- [ ] **Local Verification**: App renders and runs without console errors on `http://localhost:5173`.

## 🟡 Should (`[SHOULD]`) — Plan to Resolve Before Public Launch
- [ ] **Security Headers**: `vercel.json` includes `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- [ ] **Asset Minification**: Compress large static images in `assets/` and minify bundle files.
- [ ] **Prompt Injection Sanitizer**: Active validation against delimiter breakout attacks.
- [ ] **SEO Meta Tags**: OpenGraph and Twitter cards configured with production URL (`https://cine-prompt-pro.vercel.app`).

## 🟢 Nice (`[NICE]`) — Post-Launch Enhancements
- [ ] **Offline PWA Support**: Service worker caching for offline prompt generation.
- [ ] **CodeFlow Architecture Map**: Direct interactive visualization tab embedded in Studio dashboard.
- [ ] **Export to PDF**: In-browser client-side PDF export for TVC production packages.
