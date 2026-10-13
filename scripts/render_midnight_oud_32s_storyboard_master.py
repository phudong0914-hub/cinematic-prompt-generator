import asyncio
import os
import subprocess
import sys
import math
import wave
import array
import shutil
import random

sys.stdout.reconfigure(encoding='utf-8')
import edge_tts

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "midnight-oud-tvc")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_storyboard_32s")
FONTS_DIR = os.path.join(EXPORT_DIR, "fonts")
LUT_FILE = os.path.join(EXPORT_DIR, "MIDNIGHT_OUD_TEAL_AMBER.cube")
os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(FONTS_DIR, exist_ok=True)

# 6 Keyframe Assets Chuẩn Điện Ảnh 9:16
IMG_DROP = os.path.join(EXPORT_DIR, "keyframe_macro_drop.jpg")
IMG_ACTOR = os.path.join(EXPORT_DIR, "keyframe_actor_portrait.jpg")
IMG_MIST = os.path.join(EXPORT_DIR, "keyframe_mist_ritual.jpg")
IMG_STRATA = os.path.join(EXPORT_DIR, "keyframe_ingredients_strata.jpg")
IMG_BOTTLE = os.path.join(EXPORT_DIR, "keyframe_bottle_hero.jpg")
IMG_ENDCARD = os.path.join(EXPORT_DIR, "keyframe_endcard_cta.jpg")

# Khung Kịch Bản 32 Giây Chuẩn Xác 100% Theo Bảng Đặc Tả:
# 00:00 - 00:04 (4.0s) Macro Amber Droplet
# 00:04 - 00:08 (4.0s) Tuxedo Medium Close-Up
# 00:08 - 00:13 (5.0s) Profile Shot Vòi Xịt Phun Sương Aetheria
# 00:13 - 00:17 (4.0s) Tuxedo Slow Push-In
# 00:17 - 00:23 (6.0s) Flat-lay 3 Tầng Hương
# 00:23 - 00:28 (5.0s) Hero Shot Midnight Oud Trên Bệ Đá
# 00:28 - 00:32 (4.0s) End-Card / Call-To-Action Logo & QR Code
#
# Để khi nối 6 đoạn xfade (0.4s) video đạt đúng 32.0s:
# Raw lengths: 4.4, 4.4, 5.4, 4.4, 6.4, 5.4, 4.0 -> Tổng 34.4s - (6 * 0.4s) = 32.0s!
scenes = [
    {
        "id": 1,
        "name": "00:00 - 00:04 | Macro Amber Droplet",
        "img": IMG_DROP,
        "tts_text": "Có phải bạn đang tìm mùi hương của quyền lực?",
        "tts_rate": "+0%",
        "vo_start": 0.3,
        "clip_dur": 4.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0008,1.15)':d=132:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "00:04 - 00:08 | Tuxedo Medium Close-up",
        "img": IMG_ACTOR,
        "tts_text": "Không cần ồn ào, nhưng khiến cả căn phòng phải ngoảnh nhìn.",
        "tts_rate": "+0%",
        "vo_start": 4.2,
        "clip_dur": 4.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.14)':d=132:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((132-on)/132)*16':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "00:08 - 00:13 | Profile Shot Mist Spray",
        "img": IMG_MIST,
        "tts_text": "Đậm đà nguyên bản, chắt lọc từ những thân trầm trăm năm.",
        "tts_rate": "-2%",
        "vo_start": 8.3,
        "clip_dur": 5.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0011,1.16)':d=162:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "00:13 - 00:17 | Tuxedo Slow Push-In",
        "img": IMG_ACTOR,
        "tts_text": "Từng nốt hương bừng sáng như một dấu ấn không thể phai mờ.",
        "tts_rate": "+0%",
        "vo_start": 13.2,
        "clip_dur": 4.4,
        "motion": "scale=1350:2400:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0009,1.15)':d=132:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)-20':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "00:17 - 00:23 | Flat-lay Ingredients Strata",
        "img": IMG_STRATA,
        "tts_text": "Ba tầng hương chuyển biến, từ cam bergamot đến trầm hương và xạ hương đen.",
        "tts_rate": "+0%",
        "vo_start": 17.3,
        "clip_dur": 6.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.18)':d=192:x='iw/2-(iw/zoom/2)-18':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "00:23 - 00:28 | Hero Shot Midnight Oud Bottle",
        "img": IMG_BOTTLE,
        "tts_text": "Midnight Oud. Mùi hương không cần cất lời, nó định vị đẳng cấp của bạn.",
        "tts_rate": "-4%",
        "vo_start": 23.2,
        "clip_dur": 5.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.15-0.0010*on,1.02)':d=162:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "00:28 - 00:32 | End-card / Call-to-Action",
        "img": IMG_ENDCARD,
        "tts_text": "Khám phá ngay tại đường dẫn phía trên.",
        "tts_rate": "-4%",
        "vo_start": 28.3,
        "clip_dur": 4.0,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.08)':d=120:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    }
]

async def generate_voiceovers():
    print("🎙️ Đang tạo Voiceover AI theo đúng kịch bản 32 Giây...")
    voice = "vi-VN-NamMinhNeural"

    for s in scenes:
        audio_mp3 = os.path.join(TMP_DIR, f"vo_{s['id']}.mp3")
        audio_wav = os.path.join(TMP_DIR, f"vo_{s['id']}.wav")
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(s["tts_text"], voice, rate=s["tts_rate"])
                await comm.save(audio_mp3)
                break
            except Exception as e:
                print(f"    ⚠️ Thử lại cảnh {s['id']}: {e}")
                await asyncio.sleep(1)

        subprocess.run([
            "ffmpeg", "-y", "-i", audio_mp3,
            "-ar", "44100", "-ac", "1",
            audio_wav
        ], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        s["audio_wav"] = audio_wav
        print(f"  ✓ {s['name']} | VO: \"{s['tts_text']}\"")

def build_full_audio_track_32s():
    print("🎵 Đang thiết kế Soundscape 32.0 Giây (Ambient Orchestral Pad + Sub-Bass + Micro-SFX)...")
    sample_rate = 44100
    total_dur = 32.0
    total_samples = int(total_dur * sample_rate)

    # 1. Voiceover Full Buffer (Khớp 100% thời gian)
    vo_buf = [0.0] * total_samples
    for s in scenes:
        with wave.open(s["audio_wav"], "rb") as wf:
            n_frames = wf.getnframes()
            frames = wf.readframes(n_frames)
            samples = array.array('h')
            samples.frombytes(frames)

            start_idx = int(s["vo_start"] * sample_rate)
            for k, val in enumerate(samples):
                pos = start_idx + k
                if pos < total_samples:
                    vo_buf[pos] += (val / 32768.0) * 1.05

    # 2. Soundscape Buffer
    bgm_buf = [0.0] * total_samples

    # Hòa thanh điện ảnh sang trọng:
    # 0.0 - 8.0: D minor (Sub-bass 36.7Hz, Pad D3/A3/F4)
    # 8.0 - 17.0: F major (Sub-bass 43.65Hz, Pad F3/C4/A4)
    # 17.0 - 23.0: G minor / Bb (Sub-bass 49.0Hz, Pad G3/D4/Bb4)
    # 23.0 - 28.0: A sus4 (Sub-bass 55.0Hz, Strings swell)
    # 28.0 - 32.0: D minor Grand Resolution (Sub-bass 36.7Hz, Outro swell kết thúc gọn gàng)
    chords = [
        (0.0, 8.0, 36.7, [146.83, 220.0, 349.23]),
        (8.0, 17.0, 43.65, [174.61, 261.63, 440.0]),
        (17.0, 23.0, 49.0, [196.0, 293.66, 466.16]),
        (23.0, 28.0, 55.0, [220.0, 329.63, 392.0]),
        (28.0, 32.0, 36.7, [146.83, 220.0, 293.66, 349.23])
    ]

    for start_t, end_t, sub_freq, pad_freqs in chords:
        start_samp = int(start_t * sample_rate)
        end_samp = int(end_t * sample_rate)

        for idx in range(start_samp, min(end_samp, total_samples)):
            t = (idx - start_samp) / sample_rate
            env = 1.0
            if t < 0.8:
                env = t / 0.8
            elif (end_t - (idx / sample_rate)) < 0.8 and end_t < 32.0:
                env = (end_t - (idx / sample_rate)) / 0.8
            elif end_t >= 32.0 and (32.0 - (idx / sample_rate)) < 1.4:
                env = max(0.0, (32.0 - (idx / sample_rate)) / 1.4)

            # Sub-Bass
            sub_val = math.sin(2 * math.pi * sub_freq * t) * 0.14
            sub_val += math.sin(2 * math.pi * (sub_freq * 2) * t) * 0.05

            # Pad Chords
            pad_val = 0.0
            for pf in pad_freqs:
                pad_val += math.sin(2 * math.pi * pf * t) * 0.035
                pad_val += math.sin(2 * math.pi * (pf + 0.6) * t) * 0.02
                pad_val += math.sin(2 * math.pi * (pf - 0.6) * t) * 0.02

            bgm_buf[idx] += (sub_val + pad_val) * env

    # B. Micro-SFX Khớp Theo Từng Dòng Đặc Tả
    # 00:00 - 00:04: Tiếng giọt nước đọng tí tách nhẹ (water drop micro-sfx at 0.55s)
    drop_start = int(0.55 * sample_rate)
    drop_dur = int(1.2 * sample_rate)
    for i in range(drop_dur):
        pos = drop_start + i
        if pos < total_samples:
            t = i / sample_rate
            pitch = 1800.0 * math.exp(-t * 8.0) + 1200.0
            decay = math.exp(-t * 4.5)
            ping = math.sin(2 * math.pi * pitch * t) * decay * 0.22
            chime = math.sin(2 * math.pi * 2100.0 * t) * math.exp(-t * 3.0) * 0.12
            bgm_buf[pos] += ping + chime

    # 00:04 - 00:08: Tiếng vải áo sột soạt rất nhỏ (fabric rustle at 4.6s)
    cloth_start = int(4.6 * sample_rate)
    cloth_dur = int(1.2 * sample_rate)
    for i in range(cloth_dur):
        pos = cloth_start + i
        if pos < total_samples:
            t = i / sample_rate
            env = math.sin(math.pi * (t / 1.2)) ** 2
            rustle = (random.random() * 2.0 - 1.0) * math.sin(2 * math.pi * 950 * t) * 0.025
            bgm_buf[pos] += rustle * env

    # 00:08 - 00:13: Tiếng xịt nước hoa sắc nét (psshh*) kết hợp tiếng kim loại va chạm nhẹ (clink*)
    spray_start = int(8.6 * sample_rate)
    spray_dur = int(1.1 * sample_rate)
    for i in range(spray_dur):
        pos = spray_start + i
        if pos < total_samples:
            t = i / sample_rate
            env = (t / 0.08) if t < 0.08 else (1.0 if t < 0.65 else max(0.0, 1.0 - (t - 0.65) / 0.45))
            noise = (random.random() * 2.0 - 1.0)
            spray_sound = (noise * 0.22 + math.sin(2 * math.pi * 4200 * t) * 0.05) * env
            bgm_buf[pos] += spray_sound

    clink_start = int(9.4 * sample_rate)
    clink_dur = int(0.5 * sample_rate)
    for i in range(clink_dur):
        pos = clink_start + i
        if pos < total_samples:
            t = i / sample_rate
            clink = (math.sin(2 * math.pi * 2800 * t) * 0.18 + math.sin(2 * math.pi * 5600 * t) * 0.09) * math.exp(-t * 9.0)
            bgm_buf[pos] += clink

    # 00:13 - 00:17: Âm vực giai điệu dâng trào nhẹ nhàng, tăng kịch tính
    swell_start = int(13.2 * sample_rate)
    swell_dur = int(3.5 * sample_rate)
    for i in range(swell_dur):
        pos = swell_start + i
        if pos < total_samples:
            t = i / sample_rate
            crescendo = (t / 3.5) * 0.07 * math.sin(2 * math.pi * 261.63 * t)
            bgm_buf[pos] += crescendo

    # 00:17 - 00:23: Tiếng khói nhẹ nhàng, âm thanh gỗ ấm áp lan tỏa
    smoke_start = int(17.5 * sample_rate)
    smoke_dur = int(3.5 * sample_rate)
    for i in range(smoke_dur):
        pos = smoke_start + i
        if pos < total_samples:
            t = i / sample_rate
            env = math.sin(math.pi * (t / 3.5)) ** 2
            breath = (random.random() * 2.0 - 1.0) * 0.02 * env
            wood_body = math.sin(2 * math.pi * 320 * t) * 0.025 * env
            bgm_buf[pos] += breath + wood_body

    # 00:23 - 00:28: Tiếng ngân vang trầm của nhạc cụ dây (Strings swell)
    string_start = int(23.0 * sample_rate)
    string_dur = int(4.5 * sample_rate)
    for i in range(string_dur):
        pos = string_start + i
        if pos < total_samples:
            t = i / sample_rate
            strings = (math.sin(2 * math.pi * 110.0 * t) * 0.08 +
                       math.sin(2 * math.pi * 220.0 * t) * 0.05) * math.sin(math.pi * (t / 4.5))
            bgm_buf[pos] += strings

    # 00:28 - 00:32: Nhịp bass kết thúc gọn gàng, vang vọng (End-card)
    end_bass_start = int(28.0 * sample_rate)
    end_bass_dur = int(4.0 * sample_rate)
    for i in range(end_bass_dur):
        pos = end_bass_start + i
        if pos < total_samples:
            t = i / sample_rate
            sub_boom = math.sin(2 * math.pi * (70.0 * math.exp(-t * 0.9) + 36.7) * t) * math.exp(-t * 0.8) * 0.28
            shimmer = (math.sin(2 * math.pi * 1480 * t) * 0.06 + math.sin(2 * math.pi * 2220 * t) * 0.04) * math.exp(-t * 1.2)
            bgm_buf[pos] += sub_boom + shimmer

    # Master Sum
    master_buf = [0.0] * total_samples
    for i in range(total_samples):
        val = vo_buf[i] + bgm_buf[i]
        if val > 0.95:
            val = 0.95 + math.tanh(val - 0.95) * 0.05
        elif val < -0.95:
            val = -0.95 + math.tanh(val + 0.95) * 0.05
        master_buf[i] = val

    out_wav = os.path.join(TMP_DIR, "master_audio_track_32s.wav")
    raw_bytes = array.array('h', [int(max(-1.0, min(1.0, v)) * 32767) for v in master_buf]).tobytes()
    with wave.open(out_wav, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(raw_bytes)

    print(f"✓ Hoàn tất Master Audio 32.0s: {out_wav}")
    return out_wav

def generate_subtitles_32s():
    print("📝 Đang tạo phụ đề ASS với nền mờ bán trong suốt 45-50% Opacity...")
    ass_path = os.path.join(TMP_DIR, "midnight_oud_32s_subtitles.ass")

    # Opacity 45-50%: BackColour=&H80000000& (128/255 = 50% opacity đen mờ)
    header = """[Script Info]
Title: Midnight Oud 32s Master Subtitles
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Sigmar,56,&H00FFFFFF&,&H00FF9100&,&H00000000&,&H80000000&,1,0,0,0,100,100,2,0,3,16,0,2,60,60,250,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

    events = [
        "Dialogue: 0,0:00:00.30,0:00:01.80,Default,,0,0,0,,CÓ PHẢI BẠN ĐANG {\\c&H00FF9100&}TÌM",
        "Dialogue: 0,0:00:01.80,0:00:03.70,Default,,0,0,0,,MÙI HƯƠNG CỦA {\\c&H00FF9100&}QUYỀN LỰC",
        "Dialogue: 0,0:00:04.20,0:00:05.90,Default,,0,0,0,,KHÔNG CẦN ỒN ÀO NHƯNG {\\c&H00FF9100&}KHIẾN",
        "Dialogue: 0,0:00:05.90,0:00:07.80,Default,,0,0,0,,CẢ CĂN PHÒNG PHẢI {\\c&H00FF9100&}NGOÁI NHÌN",
        "Dialogue: 0,0:00:08.30,0:00:10.20,Default,,0,0,0,,ĐẬM ĐÀ NGUYÊN BẢN {\\c&H00FF9100&}CHẮT LỌC",
        "Dialogue: 0,0:00:10.20,0:00:12.60,Default,,0,0,0,,TỪ NHỮNG THÂN {\\c&H00FF9100&}TRẦM TRĂM NĂM",
        "Dialogue: 0,0:00:13.20,0:00:15.00,Default,,0,0,0,,TỪNG NỐT HƯƠNG {\\c&H00FF9100&}BỪNG SÁNG NHƯ MỘT",
        "Dialogue: 0,0:00:15.00,0:00:16.80,Default,,0,0,0,,DẤU ẤN {\\c&H00FF9100&}KHÔNG THỂ PHAI MỜ",
        "Dialogue: 0,0:00:17.30,0:00:19.60,Default,,0,0,0,,BA TẦNG HƯƠNG {\\c&H00FF9100&}CHUYỂN BIẾN TỪ CAM",
        "Dialogue: 0,0:00:19.60,0:00:22.60,Default,,0,0,0,,BERGAMOT ĐẾN TRẦM HƯƠNG VÀ {\\c&H00FF9100&}XẠ HƯƠNG ĐEN",
        "Dialogue: 0,0:00:23.20,0:00:25.40,Default,,0,0,0,,MIDNIGHT OUD MÙI HƯƠNG {\\c&H00FF9100&}KHÔNG CẦN CẤT LỜI",
        "Dialogue: 0,0:00:25.40,0:00:27.70,Default,,0,0,0,,NÓ ĐỊNH VỊ {\\c&H00FF9100&}ĐẲNG CẤP CỦA BẠN",
        "Dialogue: 0,0:00:28.30,0:00:31.50,Default,,0,0,0,,KHÁM PHÁ NGAY TẠI {\\c&H00FF9100&}ĐƯỜNG DẪN PHÍA TRÊN"
    ]

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")

    print(f"✓ Đã lưu file phụ đề ASS 32s: {ass_path}")
    return ass_path

def render_master_video_32s(ass_path, master_audio_wav):
    print("🎬 Đang render từng clip với hiệu ứng chuyển động, unsharp, contrast & 3D LUT Teal & Orange...")
    escaped_lut = LUT_FILE.replace("\\", "/").replace(":", "\\:")
    clip_files = []

    for s in scenes:
        out_clip = os.path.join(TMP_DIR, f"scene_{s['id']}_clip.mp4")
        dur_str = f"{s['clip_dur']:.2f}"

        # Color grading chain: unsharp -> eq (tăng tương phản sâu và độ bão hòa óng ánh) -> 3D LUT
        filter_str = f"{s['motion']},unsharp=3:3:1.2:3:3:0.0,eq=contrast=1.14:brightness=-0.02:saturation=1.20,lut3d='{escaped_lut}'"

        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-vf", filter_str,
            "-c:v", "libx264", "-preset", "fast", "-crf", "18",
            "-pix_fmt", "yuv420p",
            "-t", dur_str,
            out_clip
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"  ✅ Rendered: {s['name']} ({s['clip_dur']}s)")
        clip_files.append(out_clip)

    print("\n✨ Đang hòa trộn 7 phân cảnh bằng chuỗi Cross-Dissolve mềm mại (xfade=0.4s)...")
    # 7 clips:
    # d0=4.4 -> xfade at 4.0 -> len 8.4
    # d1=4.4 -> xfade at 8.0 -> len 13.4
    # d2=5.4 -> xfade at 13.0 -> len 17.4
    # d3=4.4 -> xfade at 17.0 -> len 23.4
    # d4=6.4 -> xfade at 23.0 -> len 28.4
    # d5=5.4 -> xfade at 28.0 -> len 32.0 (clip 6: d6=4.0)
    xfade_filter = (
        "[0:v][1:v]xfade=transition=dissolve:duration=0.4:offset=4.0[v01];"
        "[v01][2:v]xfade=transition=dissolve:duration=0.4:offset=8.0[v02];"
        "[v02][3:v]xfade=transition=dissolve:duration=0.4:offset=13.0[v03];"
        "[v03][4:v]xfade=transition=dissolve:duration=0.4:offset=17.0[v04];"
        "[v04][5:v]xfade=transition=dissolve:duration=0.4:offset=23.0[v05];"
        "[v05][6:v]xfade=transition=dissolve:duration=0.4:offset=28.0[v_dissolved]"
    )

    video_dissolved = os.path.join(TMP_DIR, "video_dissolved_32s.mp4")
    xfade_cmd = ["ffmpeg", "-y"]
    for c in clip_files:
        xfade_cmd.extend(["-i", c])
    xfade_cmd.extend([
        "-filter_complex", xfade_filter,
        "-map", "[v_dissolved]",
        "-c:v", "libx264", "-preset", "fast", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-t", "32.0",
        video_dissolved
    ])
    subprocess.run(xfade_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"✓ Video chuyển cảnh mềm mại đã tạo thành công: {video_dissolved}")

    print("\n👑 Đang in phụ đề Sigmar (Backdrop đen mờ 50% Opacity) & hòa âm Master Audio Track...")
    final_output = os.path.join(EXPORT_DIR, "midnight_oud_tvc_vertical_916_ready.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")
    escaped_fonts = FONTS_DIR.replace("\\", "/").replace(":", "\\:")

    master_cmd = [
        "ffmpeg", "-y",
        "-i", video_dissolved,
        "-i", master_audio_wav,
        "-filter_complex",
        f"[0:v]subtitles='{escaped_ass}':fontsdir='{escaped_fonts}'[v_out]",
        "-map", "[v_out]",
        "-map", "1:a",
        "-c:v", "libx264", "-preset", "medium", "-crf", "17",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "256k",
        "-t", "32.0",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 SIÊU PHẨM 32S HOÀN HẢO ĐÃ XUẤT XƯỞNG: {final_output}")

    # Đồng bộ sang các vị trí phân phối
    master_30s = os.path.join(EXPORT_DIR, "midnight_oud_tvc_30s.mp4")
    root_30s = os.path.join(WORKSPACE, "midnight_oud_tvc_30s.mp4")
    dist_30s = os.path.join(WORKSPACE, "dist", "midnight_oud_tvc_30s.mp4")
    public_30s = os.path.join(WORKSPACE, "public", "midnight_oud_tvc_30s.mp4")
    dist_public_30s = os.path.join(WORKSPACE, "dist", "public", "midnight_oud_tvc_30s.mp4")

    for dest in [master_30s, root_30s, dist_30s, public_30s, dist_public_30s]:
        shutil.copy2(final_output, dest)
        print(f"✓ Đồng bộ: {dest}")

    return final_output

async def main():
    await generate_voiceovers()
    master_audio = build_full_audio_track_32s()
    ass_path = generate_subtitles_32s()
    final_mp4 = render_master_video_32s(ass_path, master_audio)
    print(f"\n✨ TẤT CẢ ĐÃ KHỚP 100% VỚI BẢNG KỊCH BẢN 32 GIÂY: {final_mp4}")

if __name__ == "__main__":
    asyncio.run(main())
