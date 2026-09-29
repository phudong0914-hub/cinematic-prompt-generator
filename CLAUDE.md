# 🎬 Cine Prompt Pro v2.0 — Master Brain (CLAUDE.md)

> **Bộ não điều hành toàn diện của dự án Cine Prompt Pro v2.0 (Studio Engine).**  
> Mỗi khi mở session mới, AI Agent bắt buộc phải đọc file này để nắm rõ toàn bộ kiến trúc, luồng thực thi và quy tắc bất khả xâm phạm.

---

## 🧭 CẤU TRÚC 6 TRỤ CỘT ĐIỀU HÀNH (.claude/ & .agents/)

Mọi hành vi, năng lực và quy chuẩn của dự án được phân định rạch ròi qua 6 trụ cột:

```text
cinematic-prompt-v2/
├── .claude / .agents/
│   ├── 1️⃣ CLAUDE.md (Root)         --> Bộ não tổng chỉ huy, định tuyến toàn bộ session
│   ├── 2️⃣ commands/               --> Lệnh chủ động (gõ /tên-lệnh mới chạy)
│   │   ├── build.md               --> /build : Chạy quy trình đóng gói & xác thực bundle
│   │   ├── audit.md               --> /audit : Quét bảo mật theo OWASP & Deployment Checklist
│   │   └── lint-optical.md        --> /lint-optical : Kiểm tra xung đột quang học & sanitize prompt
│   ├── 2️⃣ skills/                 --> Năng lực tự động kích hoạt khi có ngữ cảnh phù hợp
│   │   ├── prompt-engine/         --> Tự động kích hoạt khi chỉnh sửa syntax Veo 3, Midjourney v8, Sora
│   │   ├── optical-linter/        --> Tự động kích hoạt khi xử lý tiêu cự, khẩu độ, ánh sáng, chống injection
│   │   └── video-pipeline/        --> Tự động kích hoạt khi xuất kịch bản sang Remotion, CapCut, Powtoon
│   ├── 3️⃣ hooks/                  --> Chạy workflow tự động theo chuỗi liên hoàn
│   │   ├── pipeline-verify.mjs    --> Chạy liên hoàn 1 mạch 5 bước (Data -> Security -> Index -> Build -> Dist)
│   │   └── hooks.json             --> Khai báo các sự kiện trigger tự động
│   ├── 4️⃣ plans/                  --> Bản vẽ kỹ thuật trước khi code (Architecture, User Story, Roadmap)
│   │   └── roadmap-v2.1.md        --> Lộ trình chi tiết các mốc CodeFlow & Hardening
│   ├── 5️⃣ references/             --> Thư viện tri thức riêng của dự án
│   │   └── deployment-checklist.md--> Bảng kiểm chuẩn Production ([BLOCKER], [SHOULD], [NICE])
│   └── 6️⃣ rules/                  --> LUẬT BẤT DI BẤT DỊCH (AI luôn luôn ghi nhớ & tuân thủ)
│       ├── token.md               --> CẤM đọc toàn bộ index.html 336KB; chỉ soi vùng cần sửa
│       ├── folder-structure.md    --> CẤM tạo file rác ở Root; gom đúng js/, styles/, data/, docs/
│       ├── naming-conventions.md  --> Chuẩn đặt tên hàm camelCase, class BEM, biến {VARIABLE}
│       ├── docs-placement.md      --> Tất cả tài liệu, báo cáo, sơ đồ PHẢI nằm trong docs/
│       ├── security-guardrails.md --> BẢO MẬT: Chống lộ BYOK API Key & Delimiter Sandboxing
│       └── studio-design-system.md--> Chuẩn bảng màu Hollywood Dark Mode, Gold/Cyan & Glassmorphism
├── docs/                          --> Thư viện tài liệu của dự án
├── js/                            --> Logic ứng dụng theo mô hình 3 cột IPO
├── styles/                        --> Modular CSS giao diện Studio
├── data/                          --> Dữ liệu presets & model configs
└── index.html                     --> Studio Engine App (chạy tại http://localhost:5173)
```

---

## ⚡ QUICK START & RUNTIME
- **Local Dev Server**: `python -m http.server 5173` (Đang chạy tại [http://localhost:5173](http://localhost:5173))
- **Quy trình đóng gói nhanh**: `npm run build`
- **Chạy Hook kiểm tra liên hoàn**: `node .agents/hooks/pipeline-verify.mjs`
