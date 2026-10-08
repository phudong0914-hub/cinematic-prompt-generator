---
name: trungvt-motion-craft
description: Tinh hoa Động cơ Chuyển động Điện ảnh (Trungvt Motion Craft Engine). Tự động gán 157 Card Recipes chuyển động 2.5D Parallax, Kinetic Spring Flip, Whip Zoom Punch, Isometric Drift và xuất timeline CapCut Draft vi giây (f2us) triệt tiêu 100% lỗi SegmentOverlap.
---

# 🎬 SKILL: TRUNGVT MOTION CRAFT ENGINE (ĐỘNG CƠ CHUYỂN ĐỘNG ĐIỆN ẢNH)

> **Tác quyền & Chỉ đạo nghệ thuật**: **Đạo Diễn Trungvt** (`trungvt`)  
> **Hotline Tư Vấn Dự Án**: `0836.384.168` · **Email**: `cinemapromptpro@gmail.com`  
> **Cam kết**: Tuyệt đối bảo vệ thương hiệu độc bản Đạo Diễn Trungvt, không dùng bất kỳ tên thương hiệu bên ngoài nào.

---

## 🌟 1. TỔNG QUAN VÀ GIÁ TRỊ CỐT LÕI

Khi dựng một video cinema chuyên nghiệp đỉnh cao thế giới, hình ảnh tĩnh hay chuyển động thô sơ sẽ làm video mất đi chất điện ảnh.
**Trungvt Motion Craft Engine** tích hợp tinh hoa từ các kiến trúc chuyển động hiện đại nhất thế giới (Shotcraft & JianYing/CapCut Draft Engine), mang lại:
1. **157 Công thức Chuyển động (Motion Shot Recipes)** phân loại khoa học theo tâm lý thị giác.
2. **Thuật toán vi giây chính xác tuyệt đối (`f2us`)**: Chuyển đổi khung hình thành vi giây ($10^{-6}$ giây), loại bỏ triệt để lỗi xung đột timeline (`SegmentOverlap`) khi nhập vào CapCut Pro / JianYing.
3. **Mã nguồn tương thích đa nền tảng**: Tự động sinh CSS Keyframes hiện đại và React Remotion component.

---

## 🎨 2. SÁU NHÓM CÔNG THỨC CHUYỂN ĐỘNG (MOTION RECIPE CATEGORIES)

| Nhóm | Tên Hiệu Ứng | Mô Tả Kỹ Thuật | Ứng Dụng Trong Video |
| :--- | :--- | :--- | :--- |
| **PARALLAX_25D** | *2.5D Parallax & Depth Cam* | Tách lớp ảnh 3 tầng: Tiền cảnh tốc độ 1.2x (bokeh), Diễn viên 1.0x, Hậu cảnh 0.35x (mờ nhẹ). | Các đoạn phủ B-roll tạo cảm giác ống kính điện ảnh trôi qua. |
| **KINETIC_REVEAL** | *Kinetic Card 3D Spring Flip* | Thẻ chữ trượt từ phải sang, nghiêng $-7.5^\circ$ 3D kết hợp vật lý lò xo (`stiffness: 140, damping: 13`). | Thẻ bước 1, bước 2, thẻ định lý, kèm tiếng lật giấy nhẹ. |
| **WHIP_ZOOM_PUNCH** | *Whip Zoom & Scale Punch* | Zoom cực nhanh từ 100% lên 130% trong 0.2s (`Frame 6`), giữ hết câu rồi hồi về 100%. | Đoạn Hook 3 giây đầu tiên và từ khóa gây sốc. |
| **ISOMETRIC_DRIFT** | *Isometric 3D Floating Drift* | Chiếu nghiêng 3D (`rotateX: 25deg, rotateY: -15deg`), nâng cao 18px và trôi chậm. | Trình diễn bằng chứng, ảnh chụp doanh thu, mockup điện thoại. |
| **SPEED_RAMP_BEAT** | *Speed Ramp & Beat Cut* | Tăng tốc 4.5x tại khoảng chuyển tiếp và hạ tốc mượt vào điểm bắt đầu cảnh mới. | Chuyển cảnh Flash Zoom giữa các phân đoạn kịch bản. |
| **MATCH_CUT_ANCHOR** | *Eye-Line Match Anchor* | Khóa tâm điểm mắt nhìn của Đạo Diễn Trungvt ở toạ độ $(50\%, 42\%)$ khung hình. | Cắt cảnh liên tục giữa các đoạn nói không gây nhảy hình giật mắt. |

---

## 📐 3. THUẬT TOÁN ĐỒNG BỘ VI GIÂY & CHỐNG ĐÈ TRACK (ZERO-OVERLAP MATH)

Trong CapCut / Premiere, lỗi phổ biến nhất khi xuất kịch bản tự động là thời gian của hai đoạn bị đè lên nhau dù chỉ 1 miligiây.
Công thức độc quyền của Đạo Diễn Trungvt:

$$\text{us} = \text{round}\left(\frac{\text{frame} \times 1\,000\,000}{\text{FPS}}\right)$$

### Quy tắc kiểm tra (Sanitizer Rule):
$$\text{Segment}[i+1].\text{startMicrosec} \ge \text{Segment}[i].\text{startMicrosec} + \text{Segment}[i].\text{durationMicrosec}$$

Nếu phát hiện vi phạm, hệ thống tự động đẩy đoạn kế tiếp về sau đúng điểm kết thúc của đoạn trước, đảm bảo an toàn 100% khi nạp vào CapCut Pro.

---

## 💻 4. TÍCH HỢP VÀ SỬ DỤNG TRONG CODE

```javascript
import { 
  assignMotionRecipesToTimeline, 
  generateRecipeCssSnippet, 
  generateRemotionReactSnippet 
} from './js/trungvtMotionCraftEngine.js';
import { buildCapCutDraftPayload } from './js/capcutDraftBridge.js';

// 1. Gán Motion Recipe cho timeline
const enrichedTimeline = assignMotionRecipesToTimeline(rawTimeline);

// 2. Xuất CapCut Draft chuẩn vi giây
const capcutProject = buildCapCutDraftPayload({
  videoTitle: "Bí Quyết Độc Bản - Đạo Diễn Trungvt",
  timelineItems: enrichedTimeline,
  cues: transcriptCues
});
```

---

## 🛡️ 5. TIÊU CHUẨN THẨM ĐỊNH (HOLLYWOOD MOTION AUDIT)
1. **Tính tương thích**: Không chứa bất kỳ frame nào có thời lượng âm hoặc đè track.
2. **Tính thẩm mỹ**: Thẻ chữ luôn đi kèm độ nghiêng 3D và gia tốc đàn hồi (Spring), không dùng chuyển động tuyến tính thô (Linear).
3. **Tính độc bản**: Mọi dự án đều ghi rõ chữ ký sản xuất của **Đạo Diễn Trungvt**.
