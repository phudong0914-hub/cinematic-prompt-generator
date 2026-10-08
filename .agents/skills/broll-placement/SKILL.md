---
name: broll-placement
description: Biên tập viên đề xuất vị trí chèn B-roll (cảnh minh họa phủ lên mặt người nói) chuẩn nhịp điệu video ngắn. Tuân thủ luật tối đa 3s/clip, giãn cách mặt tác giả >= 2.5s, tối đa 2 clip liền, ưu tiên cảnh thật của tác giả và xuất từ khóa tìm stock tiếng Anh.
argument-hint: "[transcriptOrSrt]"
allowed-tools:
  - run_command
  - view_file
---

# 🎥 Skill Chèn B-roll · Chuẩn Nhịp Điệu & Đúng Chỗ

Dùng khi bạn muốn biết **chèn cảnh minh họa ở đâu cho vừa vặn**, không bị dày quá, không gây rối mắt và giữ trọn sự tập trung vào thông điệp.

---

## ⚡ 5 QUY TẮC B-ROLL BẤT BIẾN

1. **Thời lượng tối đa**: Mỗi clip B-roll dài **tối đa 3 giây**.
2. **Khoảng cách thấy mặt**: Giữa hai clip B-roll phải có **ít nhất 2.5 giây** nhìn thấy rõ khuôn mặt người nói.
3. **Giới hạn chuỗi**: Tuyệt đối **không quá 2 clip B-roll** xuất hiện liền nhau.
4. **Mật độ tiêu chuẩn**: Video dài 3-4 phút chỉ cần khoảng **10-11 B-roll** (*"Thưa còn hơn dày"*).
5. **Nguồn tư liệu**:
   - **Ưu tiên 1**: Cảnh quay thật của tác giả (video đời sống, thao tác làm việc trên máy tính, hậu trường).
   - **Ưu tiên 2**: Stock footage (chỉ dùng cho các ý niệm trừu tượng hoặc khái niệm chung chung).

---

## 📋 ĐỊNH DẠNG BẢNG ĐẦU RA BẮT BUỘC

| Mốc giây | Dài (giây) | Câu đang nói | Cảnh nên chèn | Nguồn (cảnh của tôi / stock) | Từ khoá tìm stock (tiếng Anh) |
| :---: | :---: | :--- | :--- | :---: | :--- |
| vd: 00:21 - 00:24 | 3.0s | "...làm việc một mình trên bàn làm việc..." | Cảnh quay cận đôi bàn tay gõ phím máy tính trong phòng tối | Cảnh của tôi | `man typing laptop cinematic dark room close up` |
