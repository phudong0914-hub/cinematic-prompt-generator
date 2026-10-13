---
name: opencreator-bridge
description: Cầu nối tự động hóa xuất kịch bản và phân cảnh từ Cine Prompt Pro sang OpenCreator / KrillinAI CLI. Hỗ trợ sinh Manifest JSON đa phân cảnh, lồng tiếng Smart Dubbing TTS theo cảm xúc, phụ đề song ngữ Việt - Anh, và kịch bản cào video đối thủ bằng yt-dlp + Whisper.
---

# 🤖 OpenCreator / KrillinAI Automation Bridge Skill

Skill này đóng gói cầu nối giữa **Cine Prompt Pro v2.0 (Bộ não đạo diễn & thiết kế prompt)** và **OpenCreator (KrillinAI) (Cỗ máy tự động hóa video & lồng tiếng đa ngữ)**.

---

## ⚡ Các Năng Lực Cốt Lõi:

### 1. Xuất OpenCreator Pipeline Manifest (`opencreator_pipeline.json`):
* Tuân thủ chuẩn 5 tầng thực thi của OpenCreator CLI:
  1. `krillinai-cli`: Kiểm tra môi trường & file media.
  2. `krillinai-pipeline`: Lập kế hoạch sinh video đa phân cảnh (Veo 3, Sora 2, Wan 2.5).
  3. `krillinai-tts`: Smart Dubbing đa ngôn ngữ với thông số cảm xúc & nhịp độ (WPM).
  4. `krillinai-subtitle`: Phụ đề song ngữ (Bilingual SRT) tự động căn chỉnh thời gian.
  5. `krillinai-render-vertical` / `krillinai-render-horizontal`: Render xuất bản phẩm MP4 hoàn thiện.

### 2. Phụ đề Song ngữ (Bilingual Subtitles):
* Tạo file `.srt` với 2 dòng phụ đề trên cùng một mốc thời gian:
  * Dòng 1: Tiếng Việt (hoặc ngôn ngữ gốc).
  * Dòng 2: Tiếng Anh (chuẩn quốc tế).

### 3. Kịch bản cào video đối thủ (yt-dlp & Whisper):
* Cung cấp câu lệnh 1 chạm để tải video từ link YouTube/TikTok/Douyin, tách track âm thanh WAV chất lượng cao và dùng Whisper trích xuất transcript phục vụ phân tích kịch bản.

---

## 🚀 Cách Sử Dụng Trong JavaScript:

```javascript
import {
  buildOpenCreatorManifest,
  generateBilingualSRT,
  generateCompetitorExtractionCommands
} from './js/openCreatorBridge.js';

// 1. Tạo Manifest cho dự án TVC
const manifest = buildOpenCreatorManifest({
  title: 'Fresh Coffee TVC',
  productName: 'Cà phê nguyên chất',
  aspectRatio: '16:9'
});

// 2. Tạo Phụ đề song ngữ
const srt = generateBilingualSRT(manifest.scenes);

// 3. Lấy lệnh cào video đối thủ
const cmds = generateCompetitorExtractionCommands('https://tiktok.com/@competitor/video/123');
```
