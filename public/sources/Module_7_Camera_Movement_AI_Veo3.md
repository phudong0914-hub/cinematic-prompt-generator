# 🎬 CINE PROMPT PRO - HỌC PHẦN 7: CAMERA MOVEMENT PROMPT GUIDE (VEO 3.1 & GEMINI OMNI)

> Tài liệu chuẩn nạp vào NotebookLM Video Overviews. Cẩm nang điều khiển chuyển động máy quay chuyên sâu dành cho Veo 3.1, Gemini Omni, Runway, Firefly, Pika, Kling.

---

## 📌 1. BỘ CÔNG THỨC CHUẨN ĐIỆN ẢNH (FORMULA MATRIX)

### 🟢 1. Công Thức T2V (Text to Video):
```text
[Shot size / angle] + [Camera movement] + [Direction / speed] + [Subject] + [Action] + [Reveal / ending] + [Style / lighting]
```
*Dùng khi: Tạo cảnh hoàn toàn từ câu chữ.*

### 🔵 2. Công Thức I2V (Image to Video):
```text
The camera [motion] as the subject [action]. [Environmental motion]. [Speed / timing / stabilization].
```
*Dùng khi: Ảnh đầu vào đã quyết định nhân vật, bố cục, ánh sáng và phong cách.*

### 🟡 3. Công Thức Edit / Omni (Thay Đổi Góc Máy Giữ Nguyên Cảnh):
```text
Keep the subject, composition, lighting, timing, and audio unchanged. Change only the camera to [movement]. [Direction / speed].
```
*Dùng khi: Muốn thay đổi góc máy quay nhưng giữ nguyên nhân vật và môi trường.*

---

## 🎥 2. PROMPT PACK: 24 MẪU CAMERA MOVEMENT HOÀN CHỈNH

### 01. PUSH-IN: KHOẢNH KHẮC NHẬN RA
```text
Medium shot, a slow, controlled dolly-in toward a woman at a rain-streaked train window. She notices a familiar silhouette on the platform and her expression shifts from calm to startled. The background stays softly blurred; the camera ends in a tight close-up on her eyes. One continuous shot, cool blue night lighting.
```

### 02. PULL-BACK: REVEAL SỰ CÔ ĐƠN
```text
Begin in a close-up of a lone fisherman gripping a wet rope. The camera slowly pulls back and rises, revealing the tiny boat surrounded by an immense gray ocean. He remains still while the waves move around him. Quiet, contemplative, natural overcast light.
```

### 03. PAN REVEAL: THÔNG TIN XUẤT HIỆN
```text
A locked starting frame shows an empty candlelit hallway. The camera pans slowly from right to left, revealing a child standing silently at the far end. Hold the child in frame for the final beat. Subtle candle flicker, restrained suspense, one continuous shot.
```

### 04. TILT UP: MỞ RỘNG CHIỀU CAO
```text
Start on the boots of a climber stepping onto ancient stone. The camera performs a slow tilt upward past the worn armor and determined face, continuing to reveal a colossal mountain temple above the clouds. Gentle wind, epic scale, soft sunrise backlight.
```

### 05. TRACKING: ĐỒNG HÀNH CÙNG NHÂN VẬT
```text
A stabilized side-tracking shot follows a young chef walking quickly through a crowded night market. Keep her in the center of the frame while colorful stalls slide past in the background. The camera maintains the same distance and screen direction, natural motion blur, energetic but controlled.
```

### 06. ARC: ĐỔI GÓC NHÌN CẢM XÚC
```text
The camera performs a gentle 120-degree arc from the man's profile to a frontal close-up as he opens an old letter. The movement is smooth and deliberate; the letter remains visible in the foreground, then his eyes become the final focus. Warm window light, intimate drama, shallow depth of field.
```

### 07. ORBIT: HERO PRODUCT (SẢN PHẨM CAO CẤP)
```text
A premium black perfume bottle stands on a circular stone pedestal. The camera executes a slow, precise 180-degree orbit from left to right, keeping the bottle perfectly centered while soft highlights travel across the glass and metal cap. Minimal studio background, luxury beauty commercial, controlled reflections.
```

### 08. PEDESTAL UP: THEO SẢN PHẨM NÂNG LÊN
```text
Macro product shot of a hand lifting a translucent skincare bottle from a marble surface. The camera performs a gentle pedestal up, following the bottle vertically from the label to the cap. Keep the logo sharp and readable, soft prismatic light, clean beauty advertising style.
```

### 09. PUSH-IN + RACK FOCUS: NHẤN ĐIỂM KHÁC BIỆT
```text
Start with a medium product shot of a matte wireless earbud case on a wooden desk. The camera slowly pushes in while focus racks from the soft background to the textured hinge and engraved logo. The case opens at the final moment. Clean daylight, quiet premium technology commercial.
```

### 10. TRUCK: CHUYỂN ĐỘNG SONG SONG
```text
The camera trucks left in a smooth lateral move across a row of colorful ceramic cups, passing each cup at the same speed before stopping on the hero mug in the center. Steam rises naturally from the drink. Warm café light, tactile surfaces, cozy lifestyle advertising.
```

### 11. TALKING HEAD: PUNCH-IN CÓ CHỦ ĐÍCH
```text
A locked medium shot of a confident creator speaking directly to camera in a bright home studio. At the key sentence, the camera makes a subtle punch-in to a medium close-up and holds. The speaker stays centered, eye contact remains steady, clean audio, natural daylight, no cut.
```

### 12. STATIC: CHUYỂN ĐỘNG NẰM TRONG CẢNH
```text
Static, completely motionless camera on a neatly arranged desk with a notebook, laptop, and cup of coffee. Only the subject's hands move as they write three words in the notebook and place the pen down. The composition never changes. Soft morning light, calm productivity aesthetic.
```

### 13. POV HANDHELD: NHẬP VAI
```text
POV handheld shot from a cyclist riding through a narrow old-town street after rain. The camera bobs naturally with each turn, water droplets catch the streetlights, and pedestrians move aside as the bicycle passes. Keep the forward path readable, documentary realism, energetic but physically plausible.
```

### 14. FOLLOW SHOT: BÁM SAU NHÂN VẬT
```text
A steadicam follows closely behind a woman in a red coat as she runs through a foggy forest toward a distant warm light. The camera keeps her centered and maintains a stable distance while branches pass near the lens. Continuous movement, urgent rhythm, muted colors, cinematic realism.
```

### 15. CRANE: TỪ NHỎ ĐẾN LỚN
```text
Begin with a low-angle close view of a child releasing a paper lantern. The camera cranes upward and backward with the lantern, revealing hundreds of glowing lanterns floating above a riverside town at dusk. The child becomes a small silhouette below. Awe-inspiring, smooth aerial reveal.
```

### 16. AERIAL PULL-BACK: BẢN ĐỒ KHÔNG GIAN
```text
A high aerial shot starts close to a lone hiker crossing a narrow ridge. The camera pulls back and ascends gradually, revealing the winding trail, layered mountains, and a sea of clouds below. Keep the hiker visible as a small moving point. Vast landscape, golden-hour light, slow cinematic pace.
```

### 17. DOLLY ZOOM: BẤT AN (VERTIGO EFFECT)
```text
Medium close-up of a detective standing in a deserted corridor. The camera slowly dollies backward while zooming in at the same time, keeping his face the same size as the hallway stretches unnaturally behind him. His eyes dart toward an unseen sound. Subtle tension, cool fluorescent light, controlled surrealism.
```

### 18. WHIP PAN: CHUYỂN CẢNH NĂNG LƯỢNG
```text
A fast whip pan follows a skateboarder turning sharply around a red wall, creating natural motion blur. The pan continues through the blur and resolves on a new location where the same skateboarder lands a trick. Match screen direction and momentum, punchy street style, no abrupt freeze.
```

### 19. I2V: MOTION-FIRST
```text
The camera slowly pushes in as the woman turns her head toward the window. Her hair moves gently in the breeze, and distant city lights slide across the glass reflection. Preserve the original composition and color palette. Smooth, subtle motion, one continuous shot.
```

### 20. I2V: ORBIT QUANH CHỦ THỂ
```text
The camera executes a slow 90-degree arc around the seated musician as she lifts the violin and begins to play. The subject remains consistent and the background moves naturally with the camera perspective. Keep the original lighting and wardrobe, cinematic steadicam motion.
```

### 21. LOOP: ĐẦU-CUỐI TƯƠNG THÍCH
```text
The camera remains locked off on a quiet window with rain running down the glass. Only the rain, a curtain, and soft reflections move. The motion is subtle and seamless; the camera starts and ends on the exact same frame, creating a perfect loop.
```

### 22. OMNI EDIT: ĐỔI CAMERA, GIỮ CẢNH
```text
Keep the subject, composition, lighting, timing, and audio unchanged. Change only the camera to a slow push-in from a medium shot to a medium close-up. Preserve the speaker's facial expression, lip sync, and hand gestures. One continuous shot, natural camera movement.
```

### 23. OMNI EDIT: STATIC KIỂM SOÁT
```text
Edit this keeping everything the same. Make the camera completely locked off and motionless while the subject continues the same action. Preserve the original framing, background movement, sound, and duration.
```

### 24. FIRST-TO-LAST-FRAME TRANSITION
```text
The camera performs a smooth 180-degree arc from the front view of the singer to the rear stage view, maintaining the same subject and lighting throughout. The movement is continuous and ends exactly on the provided final frame, with no jump cut.
```
