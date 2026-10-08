---
name: emphasis-text-detector
description: Biên tập viên rà soát transcript tìm các câu đáng hiện chữ to lên màn hình (câu nêu vấn đề, câu chốt, câu đảo ngược tư duy, chuỗi ba vế) và tối đa 3 câu thông điệp lớn toàn màn hình. Tuân thủ luật trích đúng 100% lời thoại, lọc từ đệm, chia dòng 2-4 từ, tối đa 2 dòng, cách nhau ít nhất 3s.
argument-hint: "[transcriptOrSrt]"
allowed-tools:
  - run_command
  - view_file
---

# ✍️ Skill Chữ Nhấn Giữa Video (Emphasis Text Detector)

Dùng khi bạn muốn chọn lọc **chính xác những câu trọng tâm để hiện chữ to lên màn hình**, thu hút sự chú ý và nhấn mạnh ý tưởng quan trọng mà không gây rối mắt.

---

## 🎯 4 TIÊU CHÍ CHỌN CÂU ĐÁNG NHẤN

1. **Câu nêu vấn đề**: Chỉ ra trực diện nỗi đau, sai lầm hoặc rào cản người xem đang gặp.
2. **Câu chốt luận điểm**: Đưa ra kết luận đắt giá, bài học cốt lõi của phân đoạn.
3. **Câu đảo ngược tư duy (Paradox / Counter-intuitive)**: Phá vỡ định kiến thông thường, tạo bất ngờ cho khán giả.
4. **Chuỗi ba vế (Rule of Three)**: Nhịp điệu dồn dập, liệt kê 3 trạng thái hoặc 3 hành động liên tiếp.

---

## ⚡ NGUYÊN TẮC TRÌNH BÀY CHỮ

- **Tính chuẩn xác**: Chữ phải **ĐÚNG 100% lời nói** của tác giả. Chỉ được lọc bỏ từ đệm (`à`, `ừ`, `thì`, `là`, `cái`). Tuyệt đối **không viết lại câu**.
- **Quy cách dòng**: **2-4 từ một dòng**, tối đa **2 dòng** cho một lần hiển thị. Nếu câu dài hơn 2 dòng thì chia thành nhiều trang (Trang 1 ➔ Trang 2).
- **Khoảng cách**: Hai vị trí chữ nhấn phải cách nhau **ít nhất 3 giây**.
- **Cảnh toàn màn hình (Master Quotes)**: Chọn lọc thêm **tối đa 3 câu "thông điệp lớn"** mang tính triết lý/chủ đạo của toàn bộ video để làm cảnh chữ toàn màn hình.

---

## 📋 ĐỊNH DẠNG BẢNG ĐẦU RA BẮT BUỘC

| Mốc giây | Chữ hiện (đã chia dòng) | Loại (chữ nhấn / toàn màn hình) | Vì sao đáng nhấn |
| :---: | :--- | :---: | :--- |
| vd: 00:10 | KHÔNG CÓ ĐƯỢC / BẰNG CHỨNG | Chữ nhấn | Câu nêu vấn đề: Thiếu bằng chứng chứng minh điều mình nói |
| vd: 00:34 | THỨ KHÁCH HÀNG MUA / KHÔNG CHỈ LÀ SẢN PHẨM / MÀ LÀ / CHÍNH CON NGƯỜI MÌNH | Toàn màn hình | Thông điệp lớn (1/3): Luận điểm trọng tâm đảo ngược góc nhìn bán hàng |
