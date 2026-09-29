---
name: build
description: Chạy quy trình đóng gói và xác thực toàn bộ assets của Cine Prompt Pro.
---

# 🚀 Command: /build

Khi người dùng gõ `/build`, thực hiện các bước sau:
1. Chạy hook kiểm tra quang học: `node scripts/build.js`.
2. Kiểm tra các thư mục đích: `dist/`, `dist/public/`, `public/`.
3. Báo cáo trạng thái đóng gói và kích thước bundle cho người dùng.
