---
name: oss-blueprint
description: Bóc tách repo open-source thành 1 bản thiết kế (Blueprint) toàn diện để dựng lại hệ thống cho tổ chức.
---

# 🏗️ Command: /oss-blueprint — Bóc tách Repo Open-Source Dựng Lại Hệ Thống

> **Trigger**: Người dùng đưa link repo open-source (GitHub/GitLab/...) và muốn lấy toàn bộ nghiệp vụ, học kiến trúc, hoặc dựng lại hệ thống.  
> **Output**: Đúng 1 file `OSS-BLUEPRINT-<project>.md` tại thư mục gốc hoặc `docs/`.

---

## 0. Luật cứng (Bắt buộc tuân thủ)
1. **Chạy kiểm tra an toàn trước**: Không chạy lệnh `npm install`, `pip install`, `make`, `docker build` bừa bãi trên máy thật.
2. **Cổng pháp lý trước cổng kỹ thuật**: Xác định License thật trước khi bóc tách sâu.
3. **Không bịa đặt**: Mọi phát biểu nghiệp vụ phải trỏ được `file:line`. Không tìm thấy ghi `> Not Found`.
4. **Tin vào code thật**: Xung đột giữa README/Docs và Code/Migration/Test -> Code luôn thắng.
5. **Read-only**: Không sửa bất kỳ file nào trong repo nguồn.

---

## 1. Phase 0 — Intake (Hỏi trước khi đọc)
Hỏi bằng `ask_question`, lần lượt từng câu:
- **Q1**: Mục đích dùng? (Học nội bộ / Tự host / Làm SaaS thương mại / Dựng lại từ đầu)
- **Q2**: Lấy toàn bộ hay 1 phần? (Toàn bộ / Module cụ thể)
- **Q3**: Bối cảnh đích? (Cá nhân / Startup / Doanh nghiệp có compliance)
- **Q4**: Stack đích? (Giữ nguyên stack hay port sang ngôn ngữ khác)
- **Q5**: Ràng buộc hạ tầng, ngân sách, quy định dữ liệu (PII, thanh toán)?
- **Q6**: Đã có hệ thống sẵn hay xây mới từ đầu (greenfield)?

---

## 2. Phase 1 — Cổng pháp lý & 4 Chiến lược
- Kiểm tra file LICENSE, NOTICE, SPDX identifiers và dependencies licenses.
- Chọn 1 trong 4 chiến lược:
  * **A. Adopt**: Dùng nguyên, không sửa, tự host.
  * **B. Fork & Sửa**: Chấp nhận giữ nguyên license và gánh nợ merge.
  * **C. Lấy ý tưởng & Tự viết (Khuyến nghị)**: Học nghiệp vụ + bài học, code độc lập.
  * **D. Clean-room thật sự**: 2 nhóm độc lập (Nhóm 1 viết đặc tả, Nhóm 2 chỉ đọc đặc tả để viết code).

---

## 3. Phase 2 — Trinh sát & Lập bản đồ
- Đánh giá sinh hiệu dự án (commit cuối, bus factor, số maintainer).
- Nhận diện stack, kiến trúc thư mục, churn rate (những file sửa nhiều nhất).
- Xác định tất cả Entry Points (HTTP server, worker/queue, cron scheduler, CLI).

---

## 4. Phase 3 — Bóc tách nghiệp vụ (6 nguồn sự thật)
1. **Migrations / Schema**: Bảng, cột, quan hệ, khóa ngoại, ràng buộc CHECK/UNIQUE.
2. **Tests**: Các use-case, kịch bản thành công và thất bại.
3. **Service / Domain Layer**: Logic nghiệp vụ, điều kiện, chuyển trạng thái.
4. **API Surface / Router**: Các endpoint, phương thức, input/output.
5. **i18n / Email Templates**: Từ vựng người dùng thật (Glossary).
6. **CHANGELOG / ADR**: Quyết định thiết kế và lý do đánh đổi.

---

## 5. Phase 4 — Bộ lọc LẤY / THAY / BỎ / HOÃN
- **LẤY**: Nghiệp vụ chuẩn, thiết kế đúng.
- **THAY**: Ý tưởng đúng nhưng giải pháp của họ yếu/không phù hợp (ví dụ: thay queue tự chế bằng RabbitMQ/Redis).
- **BỎ**: Phục vụ nhu cầu riêng của họ mà tổ chức mình không cần.
- **HOÃN**: Tính năng phức tạp chưa cần ở giai đoạn 1.

---

## 6. Phase 5 & 6 — Xuất file OSS-BLUEPRINT-<project>.md
Đúng 1 file duy nhất gồm 17 mục chuẩn:
0. TL;DR (10 dòng)
1. Cổng pháp lý
2. Tổng quan hệ thống & Sơ đồ kiến trúc (Mermaid)
3. Glossary (Từ vựng nghiệp vụ)
4. Actor & Phân quyền
5. Data Model & ERD (Mermaid)
6. Máy trạng thái các thực thể (Mermaid StateDiagram)
7. Luật nghiệp vụ & Bất biến (Kèm `file:line`)
8. Danh mục use-case (Event Storming ngược)
9. API Surface
10. Việc chạy nền & Tích hợp ngoài (Env vars)
11. Bounded Context đề xuất
12. Đánh giá LẤY / THAY / BỎ / HOÃN
13. Bài học rút ra (Điểm mạnh & Bẫy cần tránh)
14. Bản thiết kế chuyển đổi cho tổ chức
15. Roadmap dựng lại 4 giai đoạn
16. Chưa xác minh được (> Not Found)
17. Phụ lục (Chỉ mục file:line, Bảng enum, Sơ đồ tổng hợp)
