---
name: harness-check
description: Chạy kiểm chuẩn toàn diện 5 hệ thống con Harness Engineering theo WalkingLabs.
---

# 🛡️ Command: /harness-check

Khi người dùng gõ `/harness-check`, thực thi:
`node scripts/harness_check.mjs`

Kiểm tra 5 hệ thống con:
1. **Instruction**: `AGENTS.md`, `CLAUDE.md`, `.agents/rules/`
2. **Tools**: `.agents/commands/`, `.agents/skills/`
3. **Environment**: `package.json`, `vercel.json`
4. **State**: `PROGRESS.md`
5. **Feedback**: `.agents/hooks/pipeline-verify.mjs`
