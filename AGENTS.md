# Quy Tắc Bảo Vệ Kiến Trúc & UI/UX (Cinematique Project Rules)

1. **Bảo Vệ Thanh Cuộn Modal (`Modal Body Scrollability`):**
   - Mọi Modal lớn (như `📖 Guide` / `Encyclopedia Playbook`) MUST bắt buộc có `max-height: 82vh` và `overflow-y: auto` trực tiếp trong `modal-body` inline style để đảm bảo trọn vẹn cả 6 Modules luôn cuộn được 100%, không bị cắt khúc dưới đáy màn hình trên mọi độ phân giải.

2. **Cấu Trúc Layout 3 Cột:**
   - Cột 1 (Input), Cột 2 (Process - gồm Style Presets & Production Pipeline), Cột 3 (Output).
