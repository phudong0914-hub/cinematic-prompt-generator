# 🎬 CINE PROMPT PRO - HỌC PHẦN 12: HYPIT & REMOTION AUTOMATED VIDEO PIPELINE (VIDEO-AS-CODE & BATCH RENDER)

> Tài liệu chuẩn nạp vào NotebookLM Video Overviews & AI Agents. Hướng dẫn tích hợp luồng sản xuất video tự động từ Cine Prompt Pro sang Hypit Engine & Remotion Framework để render hàng trăm biến thể video MP4 tự động.

---

## 📌 1. TỔNG QUAN LUỒNG SẢN XUẤT VIDEO TỰ ĐỘNG (AUTOMATED VIDEO PIPELINE)

```text
[CINE PROMPT PRO (Tạo Kịch Bản & Prompt)] ➔ [NOTEBOOKLM (Tự Động Sinh Thuyết Minh & Audio)] ➔ [HYPIT ENGINE / REMOTION (Render MP4 Hàng Loạt)]
```

---

## 📐 2. HƯỚNG DẪN TÍCH HỢP HYPIT ENGINE (`hypit-ai/hypit`)

### Khái niệm Lõi:
Hypit coi video là **Mã Nguồn (Video-as-Code)**. Thay vì căn chỉnh thời gian bằng giây (Seconds), Hypit gán các hiệu ứng, góc quay và B-roll theo **Từ Ngữ (Word-level Anchors)** trong lời thoại.

### Cấu trúc DSL cho Hypit từ Cine Prompt Pro:
```json
{
  "projectTitle": "Vietnam Commercial Remake",
  "sourceViralVideo": "https://tiktok.com/@competitor/video/123",
  "brandProduct": "Cà Phê Sữa Đá Sài Gòn",
  "wordLevelAnchors": [
    { "word": "Sài Gòn", "broll": "aerial_city_sunset.mp4", "camera": "Drone Top-down" },
    { "word": "Cà phê", "broll": "close_up_pouring_coffee.mp4", "camera": "Macro ECU" }
  ],
  "audioVoiceover": "vietnamese_southern_warm_female.mp3",
  "exportVariants": 100
}
```

---

## 🎥 3. QUY TRÌNH 3 BƯỚC SỬ DỤNG ĐƠN GIẢN CHO NGƯỜI MỚI

1. **Bước 1 (Nhập Ý Tưởng hoặc Link Đối Thủ):**
   - Mở ứng dụng [http://localhost:5173/](http://localhost:5173/).
   - Chọn kiểu video (Ngang 16:9 hoặc Dọc TikTok 9:16).
   - Nhấp **`🕵️‍♂️ Phân Tích & Re-make Video Viral Đối Thủ`** và dán Link / Lời thoại.

2. **Bước 2 (Bấm Nút AI Nâng Cấp 1-Click):**
   - Nhấn **`✨ AI Nâng Cấp`**.
   - AI Đạo Diễn tự động tạo trọn bộ: **Prompt Video 4K (Veo 3/Sora)**, **Prompt Ảnh Bìa (Midjourney)** và **Kịch Bản Thuyết Minh Tiếng Việt**.

3. **Bước 3 (Đẩy Vào Remotion / Hypit / NotebookLM):**
   - Copy Prompt nạp vào **NotebookLM** để làm Video/Audio Masterclass.
   - Hoặc copy file `cinematicPromptsData.ts` vào **Remotion/Hypit** để tự động xuất ra 100 video MP4 hoàn chỉnh!
