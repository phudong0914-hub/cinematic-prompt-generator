---
name: audit
description: Kiểm chuẩn toàn diện dự án theo Deployment Checklist & Security Guardrails.
---

# 🛡️ Command: /audit

Khi người dùng gõ `/audit`, thực hiện kiểm tra 3 cấp độ:
1. **[BLOCKER]**: Quét kiểm tra rò rỉ API key trong code & commit history. Kiểm tra tính năng BYOK mã hóa.
2. **[SHOULD]**: Kiểm tra bảo mật header trong `vercel.json` (CSP, X-Frame-Options) và bộ lọc prompt injection.
3. **[NICE]**: Kiểm tra tối ưu dung lượng ảnh và tính khả dụng của offline PWA.
4. Xuất kết quả kiểm chuẩn rõ ràng theo bảng trạng thái.
