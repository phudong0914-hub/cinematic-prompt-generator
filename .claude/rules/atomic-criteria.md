# 📐 RULE: Jev System 1 Atomic Criteria Standards

> **BẮT BUỘC TUÂN THỦ**: Kiểm soát chất lượng quang học và an toàn hệ thống bằng các phán đoán nguyên tử (Atomic Criteria) định kiểu chặt chẽ, loại bỏ hoàn toàn việc phụ thuộc vào text LLM tự do.

---

## 1. Ba nguyên ngữ bắt buộc (3 Primitives)
- **`Noul` (Xác suất độc lập)**: Mỗi tiêu chí kiểm tra (như xung đột tiêu cự, tràn bộ nhớ, injection) phải là một gut-check độc lập trả về xác suất $P \in [0.0, 1.0]$.
- **`Score` (Thang đo thứ tự có trọng số)**: Tổng hợp các Noul thành chỉ số từ 0 đến 100 (như `opticalIntegrityScore`, `threatScore`).
- **`Choice` (Lựa chọn phân loại dứt khoát)**: Dùng để rẽ nhánh code (`ALLOW` | `SANITIZE` | `BLOCK` hoặc `HOLLYWOOD GRADE` | `NEEDS TUNING`).

## 2. Nguyên tắc "Control Flow Belongs To Code"
- Logic rẽ nhánh `if / else / switch` thuộc về mã nguồn JavaScript (`opticalLinter.js`, `guardrails.js`), AI chỉ đóng vai trò thẩm định viên xác suất.
- Không để AI tự ý thay đổi cấu trúc dữ liệu hoặc sinh prose mơ hồ khi làm nhiệm vụ linter/security.
