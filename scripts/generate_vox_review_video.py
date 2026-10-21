import os
import sys
if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
import asyncio
import edge_tts
from PIL import Image, ImageDraw, ImageFont
import subprocess

OUTPUT_DIR = os.path.abspath("exports/vox-review")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 1. TẠO GIỌNG ĐỌC AI (EDGE-TTS)
VOICE = "vi-VN-NamMinhNeural"
SCRIPT_LINES = [
    {
        "scene": 1,
        "text": "Đừng mất cả ngày để tự cắt ghép video phong cách Vox nữa! Đây là repo mã nguồn mở đang tự động hóa 100% toàn bộ quy trình này.",
        "audio": os.path.join(OUTPUT_DIR, "scene1.mp3"),
        "duration": 5.0
    },
    {
        "scene": 2,
        "text": "Chỉ cần gõ một dòng chủ đề: hệ thống sẽ tự viết kịch bản, tự vẽ ảnh cắt dán cổ điển, diễn hoạt chuyển động và xuất thẳng file final.mp4 hoàn chỉnh.",
        "audio": os.path.join(OUTPUT_DIR, "scene2.mp3"),
        "duration": 8.0
    },
    {
        "scene": 3,
        "text": "Đặc biệt, nó hoạt động như một Agent Skill ngay trong Claude Code và Cursor, giúp bạn nhân bản hàng loạt video ngắn triệu view cực nhanh.",
        "audio": os.path.join(OUTPUT_DIR, "scene3.mp3"),
        "duration": 8.0
    },
    {
        "scene": 4,
        "text": "Mã nguồn mở 100% trên GitHub Anil-matcha gạch chéo vox-ai. Lưu lại ngay để làm video bạn nhé!",
        "audio": os.path.join(OUTPUT_DIR, "scene4.mp3"),
        "duration": 6.0
    }
]

from gtts import gTTS

def generate_speech():
    print("🎙️ Đang sinh giọng đọc AI tiếng Việt qua gTTS...")
    for item in SCRIPT_LINES:
        tts = gTTS(text=item["text"], lang="vi", slow=False)
        tts.save(item["audio"])
        print(f"  ✅ Đã tạo audio Cảnh {item['scene']}: {item['audio']}")

# 2. VẼ CÁC FRAME ĐỒ HỌA PHONG CÁCH VOX PAPER-COLLAGE (1080x1920)
def get_font(size):
    try:
        # Thử font Arial hoặc Segoe UI có sẵn trên Windows
        return ImageFont.truetype("arialbd.ttf", size)
    except:
        try:
            return ImageFont.truetype("segoeui.ttf", size)
        except:
            return ImageFont.load_default()

def draw_header_badge(draw, text, y_pos, bg_color="#F59E0B", text_color="#000000"):
    font = get_font(32)
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0] + 40
    h = bbox[3] - bbox[1] + 20
    x = (1080 - w) // 2
    draw.rounded_rectangle([x, y_pos, x + w, y_pos + h], radius=12, fill=bg_color)
    draw.text((x + 20, y_pos + 10), text, fill=text_color, font=font)

def create_scene_1_image():
    # Background Dark Room #0B0C10
    img = Image.new("RGB", (1080, 1920), "#0B0C10")
    draw = ImageDraw.Draw(img)

    # Hiệu ứng giấy báo nền (Paper texture grid)
    for y in range(0, 1920, 40):
        draw.line([(0, y), (1080, y)], fill="#14161D", width=1)
    for x in range(0, 1080, 40):
        draw.line([(x, 0), (x, 1920)], fill="#14161D", width=1)

    # Top Brand Badge
    draw_header_badge(draw, "🎬 GITHUB GEMS REVIEW · T10/2026", 180, bg_color="#8B5CF6", text_color="#FFFFFF")

    # Hook Text
    font_hook = get_font(68)
    draw.text((80, 320), "DỪNG TỰ CẮT GHÉP", fill="#F59E0B", font=font_hook)
    draw.text((80, 410), "VIDEO VOX HÀNG GIỜ!", fill="#FFFFFF", font=font_hook)

    # Paper Collage Mockup Box
    box_y = 560
    draw.rectangle([100, box_y, 980, box_y + 700], fill="#181B24", outline="#F59E0B", width=4)
    # Hiệu ứng rách giấy (Torn paper illusion)
    draw.rectangle([120, box_y + 20, 960, box_y + 120], fill="#262936")
    font_tag = get_font(42)
    draw.text((150, box_y + 45), "⚡ VOX AI MOTION GRAPHICS", fill="#10B981", font=font_tag)

    # Body description
    font_desc = get_font(38)
    draw.text((150, box_y + 160), "• Tự động viết kịch bản đa hồi", fill="#E2E8F0", font=font_desc)
    draw.text((150, box_y + 240), "• Tự cắt dán ảnh phong cách báo chí", fill="#E2E8F0", font=font_desc)
    draw.text((150, box_y + 320), "• Diễn hoạt Motion Graphics chuẩn Vox", fill="#E2E8F0", font=font_desc)
    draw.text((150, box_y + 400), "• Đốt phụ đề & Lồng tiếng AI tức thì", fill="#E2E8F0", font=font_desc)
    draw.text((150, box_y + 480), "• Xuất file final.mp4 trong 1 click", fill="#F59E0B", font=font_desc)

    # Repo Badge Box
    draw.rounded_rectangle([150, box_y + 570, 930, box_y + 660], radius=16, fill="#0F172A", outline="#38BDF8", width=2)
    draw.text((180, box_y + 595), "⭐ Anil-matcha / vox-ai-motion-graphics", fill="#38BDF8", font=get_font(34))

    # Bottom Callout
    draw_header_badge(draw, "🔥 ĐỘT PHÁ TỰ ĐỘNG HÓA 2026", 1450, bg_color="#10B981", text_color="#000000")

    path = os.path.join(OUTPUT_DIR, "scene1.png")
    img.save(path)
    return path

def create_scene_2_image():
    img = Image.new("RGB", (1080, 1920), "#0B0C10")
    draw = ImageDraw.Draw(img)

    for y in range(0, 1920, 40):
        draw.line([(0, y), (1080, y)], fill="#14161D", width=1)

    draw_header_badge(draw, "✂️ PIPELINE 4 BƯỚC KHÉP KÍN", 180, bg_color="#F59E0B", text_color="#000000")

    font_title = get_font(60)
    draw.text((80, 310), "CHỈ CẦN 1 CHỦ ĐỀ", fill="#FFFFFF", font=font_title)
    draw.text((80, 390), "HỆ THỐNG LO TOÀN BỘ!", fill="#10B981", font=font_title)

    steps = [
        ("1. Screenwriter", "Tự động phân hồi và cấu trúc cốt truyện hấp dẫn", "#38BDF8"),
        ("2. Collage Artist", "Ghép các mảnh báo cũ, bản đồ, vector tư liệu", "#F59E0B"),
        ("3. Motion Animator", "Diễn hoạt 2.5D Parallax & Paper Cutout", "#EC4899"),
        ("4. Audio & Dubbing", "Thu âm giọng đọc, ducking nhạc & đốt phụ đề", "#10B981")
    ]

    start_y = 520
    for i, (name, desc, col) in enumerate(steps):
        y = start_y + (i * 200)
        draw.rounded_rectangle([100, y, 980, y + 160], radius=16, fill="#181B24", outline=col, width=3)
        draw.text((140, y + 25), name, fill=col, font=get_font(42))
        draw.text((140, y + 85), desc, fill="#CBD5E1", font=get_font(30))

    # Result Box
    draw.rounded_rectangle([100, 1400, 980, 1550], radius=20, fill="#14532D", outline="#22C55E", width=3)
    draw.text((150, 1435), "➔ XUẤT RA FILE FINAL.MP4 HOÀN HẢO", fill="#FFFFFF", font=get_font(38))
    draw.text((150, 1495), "Không cần mở Premiere Pro hay After Effects!", fill="#86EFAC", font=get_font(30))

    path = os.path.join(OUTPUT_DIR, "scene2.png")
    img.save(path)
    return path

def create_scene_3_image():
    img = Image.new("RGB", (1080, 1920), "#0B0C10")
    draw = ImageDraw.Draw(img)

    for y in range(0, 1920, 40):
        draw.line([(0, y), (1080, y)], fill="#14161D", width=1)

    draw_header_badge(draw, "🤖 AGENT SKILL TIÊN TIẾN", 180, bg_color="#EC4899", text_color="#FFFFFF")

    font_title = get_font(60)
    draw.text((80, 310), "CHẠY TRỰC TIẾP TRÊN", fill="#FFFFFF", font=font_title)
    draw.text((80, 390), "CLAUDE CODE & CODEX", fill="#8B5CF6", font=font_title)

    # Mock Terminal Box
    term_y = 520
    draw.rounded_rectangle([80, term_y, 1000, term_y + 800], radius=16, fill="#090A0F", outline="#3F3F46", width=2)
    # Terminal header bar
    draw.rectangle([80, term_y, 1000, term_y + 50], fill="#181B24")
    draw.ellipse([100, term_y + 18, 120, term_y + 38], fill="#EF4444")
    draw.ellipse([130, term_y + 18, 150, term_y + 38], fill="#EAB308")
    draw.ellipse([160, term_y + 18, 180, term_y + 38], fill="#22C55E")
    draw.text((210, term_y + 15), "bash — claude-code agent terminal", fill="#94A3B8", font=get_font(24))

    # Terminal command lines
    f_code = get_font(32)
    draw.text((120, term_y + 90), "$ claude", fill="#F59E0B", font=f_code)
    draw.text((120, term_y + 160), '> "Make me a 15-second Vox-style collage', fill="#38BDF8", font=f_code)
    draw.text((140, term_y + 210), '   video on the history of coffee."', fill="#38BDF8", font=f_code)
    draw.text((120, term_y + 300), "[1/4] Writing story beats with Claude...", fill="#A1A1AA", font=f_code)
    draw.text((120, term_y + 370), "[2/4] Generating torn-paper collages...", fill="#A1A1AA", font=f_code)
    draw.text((120, term_y + 440), "[3/4] Synthesizing voice-over & SFX...", fill="#A1A1AA", font=f_code)
    draw.text((120, term_y + 510), "[4/4] ffmpeg stitching final.mp4...", fill="#10B981", font=f_code)
    draw.text((120, term_y + 620), "✨ SUCCESS: final.mp4 rendered in 45s!", fill="#FBBF24", font=get_font(36))

    draw_header_badge(draw, "⚡ NHÂN BẢN KÊNH TRIỆU VIEW", 1450, bg_color="#38BDF8", text_color="#000000")

    path = os.path.join(OUTPUT_DIR, "scene3.png")
    img.save(path)
    return path

def create_scene_4_image():
    img = Image.new("RGB", (1080, 1920), "#0B0C10")
    draw = ImageDraw.Draw(img)

    for y in range(0, 1920, 40):
        draw.line([(0, y), (1080, y)], fill="#14161D", width=1)

    draw_header_badge(draw, "⭐ OPEN SOURCE ON GITHUB", 220, bg_color="#F59E0B", text_color="#000000")

    font_title = get_font(65)
    draw.text((80, 360), "LƯU LẠI NGAY ĐỂ", fill="#FFFFFF", font=font_title)
    draw.text((80, 450), "LÀM VIDEO TRIỆU VIEW!", fill="#10B981", font=font_title)

    # Big GitHub Card
    card_y = 600
    draw.rounded_rectangle([100, card_y, 980, card_y + 650], radius=24, fill="#181B24", outline="#F59E0B", width=4)

    draw.text((150, card_y + 60), "📦 REPO GITHUB:", fill="#94A3B8", font=get_font(32))
    draw.text((150, card_y + 120), "Anil-matcha /", fill="#FFFFFF", font=get_font(52))
    draw.text((150, card_y + 190), "vox-ai-motion-graphics", fill="#F59E0B", font=get_font(52))

    draw.line([(150, card_y + 280), (930, card_y + 280)], fill="#262936", width=2)

    draw.text((150, card_y + 320), "• Python 3.10+ & ffmpeg Powered", fill="#E2E8F0", font=get_font(34))
    draw.text((150, card_y + 380), "• Tích hợp Claude Code, Codex, Cursor", fill="#E2E8F0", font=get_font(34))
    draw.text((150, card_y + 440), "• Giấy phép MIT mã nguồn mở 100%", fill="#E2E8F0", font=get_font(34))

    # Star Button mockup
    draw.rounded_rectangle([150, card_y + 520, 930, card_y + 600], radius=12, fill="#F59E0B")
    draw.text((360, card_y + 540), "⭐ STAR TRÊN GITHUB", fill="#000000", font=get_font(36))

    # Bottom Credit
    draw.text((200, 1600), "Review bởi Cine Prompt Pro v5.0 • Đạo Diễn Trungvt", fill="#64748B", font=get_font(28))

    path = os.path.join(OUTPUT_DIR, "scene4.png")
    img.save(path)
    return path

# 3. KẾT HỢP FFMPEG TẠO VIDEO MP4 TỪNG CẢNH VÀ GHÉP FINAL
def render_video():
    print("🎨 Đang vẽ các khung hình đồ họa chuyển động Vox...")
    img1 = create_scene_1_image()
    img2 = create_scene_2_image()
    img3 = create_scene_3_image()
    img4 = create_scene_4_image()

    scene_images = [img1, img2, img3, img4]
    scene_videos = []

    print("🎬 Đang render từng phân cảnh video với hiệu ứng chuyển động...")
    for i, item in enumerate(SCRIPT_LINES):
        img_path = scene_images[i]
        audio_path = item["audio"]
        out_clip = os.path.join(OUTPUT_DIR, f"clip_{item['scene']}.mp4")

        # Sử dụng zoompan mượt mà để tạo chuyển động nhẹ nhàng (Ken Burns)
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", img_path,
            "-i", audio_path,
            "-c:v", "libx264", "-tune", "stillimage", "-c:a", "aac", "-b:a", "192k",
            "-pix_fmt", "yuv420p",
            "-vf", "scale=1080:1920,zoompan=z='min(zoom+0.0008,1.06)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920",
            "-shortest",
            out_clip
        ]
        subprocess.run(cmd, check=True)
        scene_videos.append(out_clip)
        print(f"  ✅ Render xong Phân cảnh {item['scene']}: {out_clip}")

    # Tạo danh sách nối video
    concat_list = os.path.join(OUTPUT_DIR, "concat.txt")
    with open(concat_list, "w", encoding="utf-8") as f:
        for v in scene_videos:
            f.write(f"file '{v.replace(chr(92), '/')}'\n")

    final_video = os.path.join(OUTPUT_DIR, "vox_ai_review_30s.mp4")
    print("🎞️ Đang nối 4 phân cảnh thành video MP4 hoàn chỉnh...")
    cmd_concat = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", concat_list,
        "-c", "copy",
        final_video
    ]
    subprocess.run(cmd_concat, check=True)
    print(f"\n🎉 HOÀN THÀNH VIDEO MP4 XUẤT SẮC: {final_video}")

    # Sao chép vào thư mục public để xem trực tiếp qua web
    public_target = os.path.abspath("public/vox_ai_review_30s.mp4")
    dist_target = os.path.abspath("dist/vox_ai_review_30s.mp4")
    subprocess.run(["ffmpeg", "-y", "-i", final_video, "-c", "copy", public_target], check=False)
    subprocess.run(["ffmpeg", "-y", "-i", final_video, "-c", "copy", dist_target], check=False)
    print(f"  🌐 Đã đồng bộ sang Web: {public_target}")

if __name__ == "__main__":
    generate_speech()
    render_video()
