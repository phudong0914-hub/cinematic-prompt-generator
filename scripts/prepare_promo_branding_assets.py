#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
prepare_promo_branding_assets.py
─────────────────────────────────────────────────────────────────────────────
Chuẩn bị tài nguyên Logo & Nhân Vật Đạo Diễn Trungvt cho Video Quảng Cáo:
1. Biến logo Alpha thành huy hiệu tròn (Circular Glass Badge) với viền phát sáng.
2. Chuẩn hóa chân dung Đạo Diễn Trungvt sang khung hình dọc 1080x1920 chuẩn 9:16.
─────────────────────────────────────────────────────────────────────────────
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageOps

sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
PROMO_DIR = os.path.join(WORKSPACE, "exports", "cine-prompt-pro-promo")

def process_logo_badge():
    logo_path = os.path.join(PROMO_DIR, "logo_brand_alpha.jpg")
    out_badge = os.path.join(PROMO_DIR, "logo_circle_badge.png")
    
    img = Image.open(logo_path).convert("RGBA")
    w, h = img.size
    
    # Tạo circular mask siêu mịn
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((10, 10, w - 10, h - 10), fill=255)
    
    # Áp mask tròn
    circular = ImageOps.fit(img, (w, h), centering=(0.5, 0.5))
    circular.putalpha(mask)
    
    # Tạo viền phát sáng tròn
    border_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    border_draw = ImageDraw.Draw(border_img)
    border_draw.ellipse((10, 10, w - 10, h - 10), outline=(255, 255, 255, 220), width=18)
    
    # Ghép viền
    badge = Image.alpha_composite(circular, border_img)
    # Resize thành 180x180 cho overlay watermark
    badge_resized = badge.resize((180, 180), Image.Resampling.LANCZOS)
    badge_resized.save(out_badge, "PNG")
    print(f"✅ Đã tạo Logo Badge tròn hoàn hảo: {out_badge}")
    return out_badge

def process_character_portrait():
    char_path = os.path.join(PROMO_DIR, "character_director_trungvt.jpg")
    out_portrait = os.path.join(PROMO_DIR, "keyframe_2_director_trungvt_916.jpg")
    
    img = Image.open(char_path).convert("RGB")
    cw, ch = img.size
    
    # Tạo nền 1080x1920 studio ấm áp từ ảnh gốc (blurred background)
    bg = img.resize((1080, 1920), Image.Resampling.LANCZOS)
    bg = bg.filter(ImageFilter.GaussianBlur(radius=35))
    # Hạ độ sáng nền để làm nổi bật nhân vật
    bg = ImageOps.autocontrast(bg)
    
    # Scale nhân vật đặt ở trung tâm vừa vặn, chuẩn phong thái đạo diễn
    target_h = 1650
    target_w = int(cw * (target_h / ch))
    char_fg = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Tạo shadow mềm cho nhân vật
    paste_x = (1080 - target_w) // 2
    paste_y = 1920 - target_h  # Neo sát đáy
    
    bg.paste(char_fg, (paste_x, paste_y))
    
    # Tinh chỉnh tương phản điện ảnh (Hollywood Teal-Amber touch)
    bg.save(out_portrait, "JPEG", quality=95)
    print(f"✅ Đã chuẩn hóa Chân dung Đạo Diễn Trungvt 9:16: {out_portrait}")
    return out_portrait

if __name__ == '__main__':
    process_logo_badge()
    process_character_portrait()
