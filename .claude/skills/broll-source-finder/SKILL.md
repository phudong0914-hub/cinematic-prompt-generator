---
name: broll-source-finder
description: Trợ lý tìm tư liệu B-roll tải được ngay. Phân loại cảnh tự quay (kèm góc máy, vị trí quay trong nhà/chỗ làm việc) và cảnh stock kèm link tìm kiếm trực tiếp Pexels, Pixabay, Mixkit. Tự động gom cảnh tự quay theo địa điểm và gợi ý tên file mocgiay_mota-ngan cho CapCut.
argument-hint: "[targetAudience] [transcriptOrSrt]"
allowed-tools:
  - run_command
  - view_file
---

# 📥 Skill Lấy Nguồn B-roll Ngay (B-roll Source Finder)

Dùng khi bạn vừa quay xong video và muốn có ngay **danh sách cảnh kèm link tải trực tiếp**, không phải tự nghĩ từ khóa hay tìm kiếm thủ công mệt mỏi.

---

## ⚡ NGUYÊN TẮC LỰA CHỌN CHỖ CHÈN

1. **Nhịp điệu**: Mỗi B-roll dài tối đa **3 giây**, giữa 2 B-roll cách ít nhất **2.5 giây** thấy mặt tác giả.
2. **Mật độ**: Video 3-4 phút chỉ cần khoảng **10 B-roll** (*"Thưa còn hơn dày"*).
3. **Tính trực quan**: Chỉ chèn ở câu có **hình ảnh cụ thể** (đồ vật, nơi chốn, hành động, con số). Câu mang tính trừu tượng / cảm xúc thì giữ nguyên khung hình thấy mặt tác giả.

---

## 🧭 CẤU TRÚC 2 LOẠI TƯ LIỆU

### A. CẢNH TÔI TỰ QUAY ĐƯỢC (Ưu tiên số 1):
- Mô tả cảnh ngắn gọn trong 1 câu, quay bằng camera điện thoại trong vòng 5 giây.
- Chỉ rõ **góc máy** (cận tay / toàn cảnh / màn hình máy tính) và **địa điểm quay** (bàn làm việc, góc phòng khách, ban công...).

### B. CẢNH STOCK (Chỉ khi ý chung chung, không tự quay được):
- Gợi ý **2 từ khóa tiếng Anh cụ thể**, mỗi từ khóa 1-3 từ (vd: `typing-laptop-night`, không dùng từ chung chung như `work`).
- Gắn kèm **3 link tìm kiếm trực tiếp** chuẩn (thay khoảng trắng bằng dấu gạch ngang `-`):
  - `https://www.pexels.com/search/videos/TU-KHOA/`
  - `https://pixabay.com/videos/search/TU-KHOA/`
  - `https://mixkit.co/free-stock-video/TU-KHOA/`
- ⚠️ *Cấm bịa link đến clip cụ thể. Chỉ dùng 3 mẫu link tìm kiếm ở trên.*

---

## 📋 ĐỊNH DẠNG ĐẦU RA BẮT BUỘC

### 1. Bảng Tư Liệu Xếp Theo Mốc Thời Gian:
| Mốc giây | Câu đang nói | Loại (tự quay / stock) | Cảnh cần có | Cách quay HOẶC từ khoá + 3 link |
| :---: | :--- | :---: | :--- | :--- |

### 2. Danh Sách Cảnh Tự Quay (Gom Theo Địa Điểm):
Gộp tất cả cảnh loại A theo từng vị trí (vd: *Tại bàn làm việc*, *Tại góc phòng*) để bạn cầm điện thoại quay một lượt cho xong.

### 3. Gợi Ý Đặt Tên File (Kéo Thả CapCut Tiện Lợi):
Quy tắc đặt tên file: `mocgiay_mota-ngan` (ví dụ: `0042_go-phim-laptop.mp4`).
