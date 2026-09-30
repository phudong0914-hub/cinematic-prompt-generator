# 🎬 Cine Prompt Pro v2.0 — AI Agent Master Instructions

Welcome AI Agent. You are collaborating on **Cine Prompt Pro v2.0 (Studio Engine)**.
Follow these operational guidelines strictly.

---

## ⚡ Quick Start & Development
- **Local Dev Server**: `python -m http.server 5173` (Served at `http://localhost:5173`)
- **Build Command**: `npm run build` (Runs `node scripts/build.js`, populates `dist/` & `public/`)
- **System 1 Engine Test**: `node test_system1_engine.mjs` (Validates atomic criteria & routing)
- **Pipeline Verify**: `node .agents/hooks/pipeline-verify.mjs`

---

## 🎯 Architecture: 3-Column IPO Model
1. **Input (Column 1)**: Director controls, topic inputs, character anchors, and 1-Touch presets.
2. **Process (Column 2)**: 4-Layer Director Engine (`aiService.js`), optical parameters, shot framing, and Jev System 1 Atomic Router.
3. **Output (Column 3)**: Generated slates, flow bridges (Google Flow, Gemini, ChatGPT), and video export packages.

---

## 🧭 Kiến Trúc Điều Hành Chuẩn (Command → Subagent → Skill → Hooks)
Dự án được chuẩn hóa theo `claude-code-best-practice` và `awesome-jev`:
1. **CLAUDE.md / AGENTS.md**: Bộ não của dự án, đọc đầu tiên khi bắt đầu session mới.
2. **agents/**: Subagents độc lập (`optical-auditor`, `model-router-agent`, `pipeline-deployer`).
3. **commands/**: Lệnh chủ động khi gõ slash command (`/route-model`, `/lint-optical`, `/audit`, `/build`, `/standup`).
4. **skills/**: Năng lực chuyên biệt nạp động qua YAML frontmatter (`model-router`, `optical-linter`, `prompt-engine`, `video-pipeline`).
5. **hooks/**: Workflow tự động chạy liên hoàn (`pipeline-verify.mjs`, `pre-commit-guard.mjs`).
6. **rules/**: Luật bất di bất dịch (`atomic-criteria.md`, `model-routing-matrix.md`, `security-guardrails.md`, `token.md`).

Chi tiết đầy đủ xem tại [CLAUDE.md](file:///C:/Users/Trungvt/.gemini/antigravity-ide/scratch/cinematic-prompt-v2/CLAUDE.md).
