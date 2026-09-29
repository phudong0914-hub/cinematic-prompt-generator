---
name: business-flow
description: Chuyển đổi yêu cầu từ ngôn ngữ tự nhiên thành Đặc tả quy trình nghiệp vụ (Business Process Spec) chuẩn chỉ cho Dev, Tester và AI.
---

# 📋 Command: /business-flow

Trigger: `/business-flow <requirement text | path to filled form | "form">`  
Mục tiêu: Biến yêu cầu bằng ngôn ngữ đời thường thành đặc tả quy trình nghiệp vụ chuẩn cho dev, tester và các AI khác.  
Ngôn ngữ đầu ra: LUÔN LUÔN TIẾNG VIỆT (trừ mã code, tên bảng, role key).

## Các chế độ (Modes)
1. **`form` hoặc để trống**: Ghi phiếu yêu cầu trống (Template A) vào `docs/flows/_phieu-yeu-cau.md`, hướng dẫn cách điền và dừng.
2. **Đường dẫn file .md**: Đọc phiếu đã điền, thực hiện Steps 1-5.
3. **Đoạn văn tự do**: Xử lý văn bản như câu trả lời phiếu, thực hiện Steps 1-5.
4. **`existing <feature>`**: Dò ngược từ mã nguồn để mô tả luồng hiện có, đánh dấu điểm sai lệch với ⚠️.

## Các bước thực hiện (Steps 1-5)
- **Step 1 - Học dự án ngầm**: Đọc `CLAUDE.md`, model dữ liệu, vai trò quyền hạn, tính năng hiện có để lập từ điển nội bộ.
- **Step 2 - Kiểm tra khoảng trống**: Hỏi tối đa 5 câu hỏi tiếng Việt nếu thiếu thông tin then chốt.
- **Step 3 - Viết đặc tả**: Điền vào Template B (`QT-nn-slug.md`) với tiêu chuẩn nghiêm ngặt (không bịa đặt, có luồng lỗi, acceptance criteria Cho/Khi/Thì).
- **Step 4 - Lưu**: Lưu vào `docs/flows/QT-<nn>-<slug>.md`.
- **Step 5 - Phản hồi**: Trả lời ngắn gọn <= 6 dòng, dẫn link file và các câu hỏi mở còn tồn đọng.
