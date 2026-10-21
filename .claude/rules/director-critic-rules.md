# 🎯 BỘ LUẬT ĐẠO DIỄN: BIẾN LỜI CHÊ THÀNH LUẬT BẤT BIẾN (Critic-to-Rule Adaptive Engine)

> **Triết lý tinh hoa từ Đạo diễn Minh Đỗ & Đạo diễn Trungvt**:  
> *"Mỗi lần đạo diễn chê một cảnh, ghi lời chê đó thành MỘT DÒNG LUẬT BẤT BIẾN trong mục phong cách. Video hoàn hảo được kiến tạo bởi một AI đã nghe chê cả trăm lần và không bao giờ lặp lại lỗi cũ."*

---

## 🏛️ NGUYÊN TẮC HOẠT ĐỘNG
1. **Zero Recurring Mistakes (Không tái phạm lỗi)**: Bất kỳ khía cạnh nào đã bị Đạo diễn chê (về bố cục, màu sắc, phông chữ, nhịp điệu, góc quay) lập tức được chuẩn hóa thành một `Negative Constraint` (Luật phủ định) có trọng số phạt cao nhất.
2. **Deterministic Enforcement (Thực thi tất định)**: Các luật được kiểm tra tự động qua `criticRuleEngine.js` và `opticalLinter.js` trước khi xuất prompt hay timeline.
3. **Anti-AI-Slop Guarantee**: Nghiêm cấm các phong cách AI rẻ tiền, generic (nền tối mịt chữ trắng kèm gradient tím neon) trừ khi có chỉ định tường minh.
4. **Facial Invariance Absolute**: Mặt người nói là thánh đường bất khả xâm phạm; đồ họa và chữ chỉ được xuất hiện ở vùng phụ trợ (Rule of Thirds).

---

## 📋 DANH MỤC LUẬT MẪU ĐƯỢC CHỐT SAU 100+ LẦN ĐẠO DIỄN KIỂM DUYỆT

| Mã Luật | Lời chê nguyên bản của Đạo diễn | Luật phủ định (Negative Constraint) | Quy chuẩn khắc phục (Enforced Fix) |
|---|---|---|---|
| `CRIT-001` | "Chữ to quá che cả mắt người nói" | CẤM Text box đè vào vùng tọa độ khuôn mặt $0.35 \le X \le 0.65, 0.15 \le Y \le 0.65$ | Dạt đồ họa sang 1/3 bên trái ($X \le 0.32$) hoặc 1/3 bên phải ($X \ge 0.68$). |
| `CRIT-002` | "Màu tím neon rẻ tiền nhìn là biết AI làm" | CẤM `purple-magenta neon gradient`, `generic dark purple glow` | Áp dụng Palette Moody Mocha, Warm Amber hoặc Teal & Orange điện ảnh. |
| `CRIT-003` | "Chữ nằm sát mép phải bị nút like và comment TikTok che mất" | CẤM Text vượt quá $X > 0.82$ khi $Y > 0.40$ trên khung hình 9:16 | Giới hạn Safe Action Region: $5\% \le X \le 80\%, 12\% \le Y \le 72\%$. |
| `CRIT-004` | "Nói vấp 2-3 lần mà video vẫn để nguyên" | CẤM giữ các câu nói thử hoặc câu bị vấp trước lần nói chuẩn | Kích hoạt `last_take_rule`: Tự động cắt bỏ các lần trước, chỉ giữ take cuối cùng. |
| `CRIT-005` | "Chữ xuất hiện trễ cả giây so với giọng đọc" | CẤM độ lệch đồng bộ âm thanh - chữ $> \pm 0.1s$ | Căn chỉnh vi-giây theo timestamp từng chữ của Whisper. |
| `CRIT-006` | "Render bị đen màn hình suốt video quay từ iPhone" | CẤM nạp trực tiếp video 10-bit HEVC vào pipeline dựng | Tự động tiền xử lý FFmpeg sang `H.264 yuv420p 8-bit` chuẩn hóa. |
| `CRIT-007` | "Chữ to nhưng mờ nhòe không đọc được trên nền sáng" | CẤM độ tương phản tương đối giữa chữ và nền $< 4.5:1$ (WCAG AA) | Tự động thêm Drop Shadow đen $50\%$ hoặc Solid Pill Badge tương phản. |

---

*Hệ thống Cine Prompt Pro liên tục cập nhật bảng luật này tự động qua API `/api/critic-rules`.*
