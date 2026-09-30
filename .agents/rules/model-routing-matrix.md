# 🎯 RULE: Generative Model Routing Matrix

> **ĐỊNH TUYẾN MÔ HÌNH CHÍNH XÁC (Midjourney v8 vs Veo 3 vs Sora 2 vs Wan 2.5)**

---

## Ma trận phân bổ đặc tính (Attribute Matrix)

| Thuộc tính đầu vào | Midjourney v8.2 | DeepMind Veo 3 | OpenAI Sora 2 | Wan 2.5 |
| :--- | :---: | :---: | :---: | :---: |
| **Ảnh tĩnh / Tạp chí / Chân dung nghệ thuật** | ⭐⭐⭐⭐⭐ (95%) | ⭐⭐ (20%) | ⭐ (10%) | ⭐ (10%) |
| **Chất liệu bề mặt vi mô (Skin pore, Impasto)** | ⭐⭐⭐⭐⭐ (95%) | ⭐⭐⭐ (60%) | ⭐⭐⭐ (50%) | ⭐⭐⭐ (50%) |
| **Phân tầng không gian 3 lớp ([Foreground], [Mid], [Back])** | ⭐⭐⭐ (50%) | ⭐⭐⭐⭐⭐ (95%) | ⭐⭐⭐⭐ (80%) | ⭐⭐⭐ (60%) |
| **Typography / Logo thương hiệu trong ngoặc kép** | ⭐ (15%) | ⭐⭐⭐⭐⭐ (96%) | ⭐⭐⭐ (55%) | ⭐⭐ (30%) |
| **Chuyển động máy phức tạp (Technocrane, Russian Arm)** | ❌ (0%) | ⭐⭐⭐⭐ (75%) | ⭐⭐⭐⭐⭐ (95%) | ⭐⭐⭐⭐ (70%) |
| **Diễn biến thời gian Timeline (0.0-2.0s / 2.0-6.0s)** | ❌ (0%) | ⭐⭐⭐ (60%) | ⭐⭐⭐⭐⭐ (96%) | ⭐⭐⭐⭐ (80%) |
| **Đồng bộ âm thanh Foley / Hans Zimmer Braam** | ❌ (0%) | ⭐⭐⭐ (50%) | ⭐⭐⭐⭐⭐ (92%) | ⭐⭐ (30%) |

Code điều hướng tự động: Sử dụng `routePromptToOptimalModel(promptText, context)` trong `js/aiService.js`.
