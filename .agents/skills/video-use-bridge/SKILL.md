---
name: video-use-bridge
description: Cầu nối tự động hóa biên tập video hội thoại (Conversational Video Editing) lấy cảm hứng từ browser-use/video-use. Tự động gọt khoảng lặng (Dead Air & Filler Words), làm mịn âm thanh 30ms Micro-Crossfade chống tiếng nổ click/pop tại các điểm cắt, và tự động QA khung hình biên (Cut-Boundary Self-Evaluation).
---

# 🎬 Video-Use Bridge Skill — Conversational Video Editing Engine

Kỹ năng này tích hợp tinh hoa từ repo **`browser-use/video-use`** vào **Cine Prompt Pro v2.5 / v3.0**.

---

## ⚡ 3 Năng Lực Cốt Lõi

### 1. 30ms Micro-Crossfade (Anti-Pop/Click Audio Smoothing)
- **Mục đích**: Triệt tiêu 100% tiếng nổ lách tách do biên độ sóng âm bị rơi đột ngột về 0 khi nhảy cảnh (jump-cut).
- **Bộ lọc chuẩn**:
  ```bash
  afade=t=in:ss=0:d=0.03:curve=tri,afade=t=out:st=CLIP_END-0.03:d=0.03:curve=tri
  ```
- **Module JavaScript**: `js/videoUseAudioEngine.js`
- **Module Python**: `scripts/video_use_audio_smoother.py` ➜ `apply_30ms_declicker(...)`

### 2. Auto Silence & Dead Space Remover (Bộ gọt khoảng lặng)
- **Mục đích**: Tự động phát hiện khoảng lặng > 350ms, cắt tỉa từ đệm "ờ, à, ừm", co khoảng nghỉ thành 180ms nhịp điệu ngắn chuẩn TikTok/Reels.
- **Lệnh thực thi**:
  ```bash
  python scripts/video_use_audio_smoother.py
  ```
- **Module JavaScript**: `js/deadAirRemoverEngine.js`

### 3. Cut-Boundary QA & Self-Evaluation (Tự kiểm định khung hình mối nối)
- **Mục đích**: Trước khi giao video cho Đạo diễn, AI tự động chụp 2 frame ngay trước (`cut - 40ms`) và sau (`cut + 40ms`) vết cắt để phát hiện khung hình đen (black frame) hoặc vỡ khung, tự động dời vết cắt 60ms để tự vá lỗi (Auto-Healing).
- **Module JavaScript**: `js/cutBoundaryQaEngine.js`

---

## 🛠️ Quy Trình Sử Dụng Chuẩn (Workflow)
1. **Đầu vào**: Video A-roll người nói tự quay hoặc video review bóc tách từ URL.
2. **Bước 1**: Gọi `deadAirRemoverEngine.computeActiveSegments()` để xác định các đoạn thoại có ích.
3. **Bước 2**: Ghép nối các đoạn với `videoUseAudioEngine.buildDeClickerFilter()` (30ms fade).
4. **Bước 3**: Gọi `cutBoundaryQaEngine` để kiểm tra toàn bộ mối nối trước khi xuất bản bản master MP4.
