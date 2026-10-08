---
name: list-card-steps
description: Biên tập viên phân tích và thiết kế hiệu ứng thẻ liệt kê ý từng bước (Listicle Cards). Tự động phát hiện các từ mốc ("thứ nhất", "bước 1", "tiếp theo", "cuối cùng"...), tính toán độ trễ xuất hiện 0.3s, giới hạn chữ ≤ 36 ký tự, chia đoạn 10-20s nếu có kể chuyện xen giữa, kèm tiếng lật giấy nhẹ.
argument-hint: "[transcriptOrSrt]"
allowed-tools:
  - run_command
  - view_file
---

# 📑 Skill Liệt Kê Ý Từng Bước (List Card Steps)

Dùng khi trong video bạn có nói **"bước 1, bước 2"**, **"thứ nhất, thứ hai"**, **"tiếp theo"**, **"cuối cùng"** và muốn hiển thị các thẻ chữ trượt vào bên hông màn hình chuyên nghiệp.

---

## ⚡ 5 NGUYÊN TẮC THẺ LIỆT KÊ BẤT BIẾN

1. **Bố Cục Hiển Thị (Layout)**:
   - Camera người nói thu thành ô dọc bo góc nằm ở **bên trái**.
   - Các thẻ chữ xếp cột trượt vào ở **bên phải**.
2. **Quy Cách Thẻ**:
   - Mỗi thẻ dài **tối đa 36 ký tự**.
   - Dùng chính xác lời nói của tác giả, rút gọn súc tích chứ **tuyệt đối không thay đổi ý nghĩa**.
3. **Độ Trễ Xuất Hiện**:
   - Thẻ trượt vào trễ **khoảng 0.3 giây** sau khi tác giả phát âm từ đánh dấu (*"bước 1"*, *"thứ hai"...*).
4. **Quy Tắc Thẻ Cũ Đứng Yên**:
   - Thẻ trượt vào từng cái một.
   - **Thẻ cũ đứng yên hoàn toàn**, không dịch chuyển, không nhảy vị trí.
5. **Xử Lý Kể Chuyện Xen Giữa & Âm Thanh**:
   - Nếu danh sách dài có đoạn kể chuyện xen giữa: Chia thành nhiều đoạn nhỏ **10-20 giây**. Đoạn sau hiển thị sẵn các thẻ đã nói ở đoạn trước, rồi mới trượt thẻ mới vào.
   - Mỗi thẻ trượt vào kèm **một tiếng lật giấy nhẹ** (`paper flip`).

---

## 📋 ĐỊNH DẠNG ĐẦU RA BẮT BUỘC

Với mỗi danh sách liệt kê, trả về MỘT bảng độc lập:
| Mốc giây hiện | Từ đánh dấu | Chữ trên thẻ (≤ 36 ký tự) |
| :---: | :---: | :--- |
| vd: 01:02.6 | "bước 1" | Tìm vấn đề của chính bản thân mình |
| vd: 01:13.4 | "thứ hai" | Thử nhiều cách giải quyết triệt để |
| vd: 01:51.5 | "cuối cùng" | Đóng gói thành phương pháp, lộ trình |
