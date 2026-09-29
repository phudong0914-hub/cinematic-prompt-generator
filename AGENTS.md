# 🎬 Cine Prompt Pro v2.0 — AI Agent Master Instructions

Welcome AI Agent. You are collaborating on **Cine Prompt Pro v2.0 (Studio Engine)**.
Follow these operational guidelines strictly.

---

## ⚡ Quick Start & Development
- **Local Dev Server**: `python -m http.server 5173` (Served at `http://localhost:5173`)
- **Build Command**: `npm run build` (Runs `node scripts/build.js`, populates `dist/` & `public/`)
- **Online Deployment**: Live on Vercel at `https://cine-prompt-pro.vercel.app`

---

## 🎯 Architecture: 3-Column IPO Model
1. **Input (Column 1)**: Director controls, topic inputs, character anchors, and 1-Touch presets.
2. **Process (Column 2)**: 4-Layer Director Engine (`aiService.js`), optical parameters, and shot framing.
3. **Output (Column 3)**: Generated slates, flow bridges (Google Flow, Gemini, ChatGPT), and video export packages.

---

## 🧭 6 Trụ Cột Điều Hành Dự Án (.agents/ & .claude/)
Dự án được chuẩn hóa theo bộ khung 6 thành phần:
1. **CLAUDE.md / AGENTS.md**: Bộ não của dự án, đọc đầu tiên khi bắt đầu session mới.
2. **commands/**: Lệnh chủ động khi gõ slash command (`/build`, `/audit`, `/lint-optical`).
3. **skills/**: Năng lực tự động kích hoạt theo ngữ cảnh (`prompt-engine`, `optical-linter`, `video-pipeline`).
4. **hooks/**: Workflow tự động chạy liên hoàn (`pipeline-verify.mjs` chạy 1 mạch 5 bước).
5. **plans/**: Bản vẽ kỹ thuật & roadmap trước khi bắt đầu code (`roadmap-v2.1.md`).
6. **references/**: Thư viện tài liệu tham khảo nội bộ (`deployment-checklist.md`).
7. **rules/**: Luật bất di bất dịch (tiết kiệm token, cấu trúc thư mục, bảo mật, thiết kế studio).

Chi tiết đầy đủ xem tại [CLAUDE.md](file:///C:/Users/Trungvt/.gemini/antigravity-ide/scratch/cinematic-prompt-v2/CLAUDE.md).
