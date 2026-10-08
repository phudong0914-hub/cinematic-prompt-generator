---
name: transition-and-sound
description: Biên tập viên thiết kế chuyển cảnh đồng nhất và âm thanh tinh tế (SFX) cho video ngắn. Tuân thủ luật 1 kiểu chuyển cảnh duy nhất (Flash Zoom), nhẹ êm không giật mình, swoosh nhẹ khi vào cảnh mới, lật giấy khi thẻ hiện, ra cảnh không tiếng, B-roll chỉ mờ dần ngắn.
argument-hint: "[transitionStyle] [transcriptOrSrt]"
allowed-tools:
  - run_command
  - view_file
---

# 🔄 Skill Chuyển Cảnh & Âm Thanh (Transition & Sound Engine)

Dùng khi bạn muốn video có **nhịp chuyển cảnh gọn gàng, tiếng động nhẹ êm, tinh tế** và không bị rối mắt, giật mình.

---

## ⚡ 5 NGUYÊN TẮC CHUYỂN CẢNH & ÂM THANH BẤT BIẾN

1. **Một Kiểu Duy Nhất (Single Transition Rule)**:
   - Toàn bộ video chỉ sử dụng **MỘT kiểu chuyển cảnh duy nhất** (mặc định: `Flash Zoom` hoặc kiểu do tác giả chọn). Tuyệt đối **không trộn nhiều kiểu**.
2. **Vị Trí Đặt Chuyển Cảnh**:
   - Điểm chuyển sang phần nội dung mới.
   - Điểm **vào và ra** cảnh chữ toàn màn hình (Master Quotes).
   - Điểm **vào và ra** đoạn thẻ liệt kê ý (Listicle Layout).
   - *Lưu ý: B-roll KHÔNG dùng chuyển cảnh, chỉ dùng hiệu ứng mờ dần (Dissolve/Fade) ngắn 0.12s.*
3. **Quy Tắc Âm Thanh (Audio Timing & Volume)**:
   - **Lúc VÀO cảnh mới**: Tiếng `swoosh nhẹ`.
   - **Lúc thẻ ý trượt vào**: Tiếng `lật giấy nhẹ` (paper flip).
   - **Lúc RA cảnh**: **Tuyệt đối không có tiếng**.
4. **Giới Hạn Âm Lượng (Volume Hierarchy)**:
   - Tiếng `swoosh` ở giây đầu tiên của Hook là tiếng to nhất.
   - Mọi tiếng động sau đó đều phải **nhỏ hơn**, vào êm ái, không gây giật mình.
5. **Nguồn Âm Thanh Hợp Pháp**:
   - Sử dụng âm thanh có bản quyền an toàn từ **YouTube Audio Library** (mục "No attribution required") để không bị tắt tiếng trên TikTok/Facebook.

---

## 📋 ĐỊNH DẠNG BẢNG ĐẦU RA BẮT BUỘC

| Mốc giây | Chuyển từ → sang | Có chuyển cảnh? | Tiếng động |
| :---: | :--- | :---: | :--- |
| 00:03.0 | Cuối Hook ➔ Đầu phần nội dung chính | Flash Zoom | Swoosh nhẹ |
| 00:21.5 | Mặt người nói ➔ B-roll gõ phím | Không (mờ dần 0.12s) | Không có tiếng |
| 00:34.8 | Mặt người nói ➔ Cảnh Quote toàn màn hình | Flash Zoom | Swoosh nhẹ |
| 00:39.8 | Quote toàn màn hình ➔ Về mặt người nói | Flash Zoom | Không có tiếng |
| 00:59.8 | Mặt người nói ➔ Bố cục thẻ liệt kê | Flash Zoom | Swoosh nhẹ |
| 01:02.6 | Thẻ bước 1 trượt vào màn hình | Không | Lật giấy nhẹ |
| 01:19.5 | Thoát bố cục thẻ ➔ Về mặt người nói | Flash Zoom | Không có tiếng |
