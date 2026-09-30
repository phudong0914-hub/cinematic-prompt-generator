# 🎬 Cine Prompt Pro v2.0 — Master Brain (CLAUDE.md)

> **Bộ não điều hành toàn diện của dự án Cine Prompt Pro v2.0 (Studio Engine).**  
> Thiết kế theo chuẩn **Agentic Engineering** từ `claude-code-best-practice` và **Tư duy System 1 / Jev Primitives** từ `awesome-jev`.

---

## 🧭 CẤU TRÚC ĐIỀU HÀNH (.claude/ & .agents/)

Mọi hành vi, năng lực và quy chuẩn của dự án được phân định rạch ròi qua mô hình **Command → Subagent → Skill → Hooks**:

```text
cinematic-prompt-v2/
├── .claude / .agents/
│   ├── 1️⃣ CLAUDE.md (Root)         --> Bộ não tổng chỉ huy, định tuyến toàn bộ session
│   ├── 2️⃣ agents/                 --> Subagents độc lập ngữ cảnh (context: fork)
│   │   ├── optical-auditor.md     --> Subagent thẩm định quang học & an toàn injection
│   │   ├── model-router-agent.md  --> Subagent phân loại & định tuyến mô hình tạo ảnh/video
│   │   └── pipeline-deployer.md   --> Subagent kiểm tra liên hoàn 5 bước trước khi build
│   ├── 3️⃣ commands/               --> Lệnh chủ động (gõ /tên-lệnh mới chạy)
│   │   ├── route-model.md         --> /route-model : Tự động gợi ý & điều phối sang Veo 3, Midjourney v8, Sora
│   │   ├── lint-optical.md        --> /lint-optical : Chạy ma trận tiêu chí quang học nguyên tử (Atomic Criteria)
│   │   ├── audit.md               --> /audit : Quét bảo mật theo OWASP & Jev Atomic Safety Matrix
│   │   ├── build.md               --> /build : Chạy quy trình đóng gói & xác thực bundle
│   │   └── standup.md             --> /standup : Họp báo cáo tiến độ 60 giây cùng AI Staff
│   ├── 4️⃣ skills/                 --> Năng lực định kiểu với YAML Frontmatter chuẩn
│   │   ├── model-router/          --> Năng lực phân loại ma trận thuộc tính (Lens, Lighting, Motion)
│   │   ├── optical-linter/        --> Năng lực kiểm soát quang học & sandbox injection
│   │   ├── prompt-engine/         --> Tối ưu cú pháp theo từng Engine (Veo 3, Midjourney, Sora)
│   │   └── video-pipeline/        --> Xuất kịch bản sang Remotion, CapCut, Powtoon
│   ├── 5️⃣ hooks/                  --> Chạy workflow tự động theo chuỗi liên hoàn
│   │   ├── pipeline-verify.mjs    --> Chạy liên hoàn 1 mạch 5 bước (Data -> Security -> Index -> Build -> Dist)
│   │   ├── pre-commit-guard.mjs   --> Chặn commit nếu lộ API key hoặc trượt fuzzer bảo mật
│   │   └── hooks.json             --> Khai báo các sự kiện lifecycle hooks
│   ├── 6️⃣ rules/                  --> LUẬT BẤT DI BẤT DỊCH (System 1 + Security)
│   │   ├── atomic-criteria.md     --> Chuẩn phán đoán nguyên tử: Noul (P), Score (0..100), Choice
│   │   ├── model-routing-matrix.md--> Bảng trọng số định tuyến Veo 3 / Midjourney v8 / Sora 2 / Wan 2.5
│   │   ├── security-guardrails.md --> BẢO MẬT: Chống lộ BYOK API Key & Delimiter Sandboxing
│   │   └── token.md               --> CẤM đọc toàn bộ index.html 336KB; chỉ soi vùng cần sửa
│   ├── settings.json              --> Cấu hình quyền, auto mode, statusline
│   └── .mcp.json                  --> Cấu hình Chrome DevTools & Filesystem MCP
├── js/
│   ├── opticalLinter.js           --> Linter quang học theo Jev Atomic Criteria Matrix
│   ├── guardrails.js              --> Bộ lọc an toàn, chống injection & token guard
│   └── aiService.js               --> Logic kết nối AI & routePromptToOptimalModel()
├── styles/                        --> Modular CSS giao diện Studio
├── data/                          --> Dữ liệu presets & model configs
└── index.html                     --> Studio Engine App (chạy tại http://localhost:5173)
```

---

## ⚡ QUICK START & RUNTIME
- **Local Dev Server**: `python -m http.server 5173` (Đang chạy tại [http://localhost:5173](http://localhost:5173))
- **Chạy Hook kiểm tra liên hoàn**: `node .agents/hooks/pipeline-verify.mjs`
- **Chạy Unit Test System 1 Engine**: `node test_system1_engine.mjs`
- **Quy trình đóng gói nhanh**: `npm run build`
