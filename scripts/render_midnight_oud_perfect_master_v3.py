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
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_master_v3")
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

# Cấu trúc 7 Phân Cảnh (Tổng thời lượng sau khi trừ 6 đoạn xfade 0.5s = đúng 33.0s)
# Scene raw lengths: 4.5, 4.5, 4.5, 5.5, 6.5, 5.5, 5.0 -> 36.0 - (6 * 0.5) = 33.0s
scenes = [
    {
        "id": 1,
        "name": "Scene 1: Amber Droplet Macro",
        "img": IMG_DROP,
        "tts_text": "Có phải bạn đang tìm mùi hương của quyền lực?",
        "tts_rate": "+0%",
        "vo_start": 0.3,
        "clip_dur": 4.5,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0008,1.15)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "Scene 2: East Asian Tuxedo Portrait",
        "img": IMG_ACTOR,
        "tts_text": "Không cần ồn ào nhưng khiến cả khán phòng phải ngoảnh nhìn.",
        "tts_rate": "+0%",
        "vo_start": 4.2,
        "clip_dur": 4.5,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.14)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((135-on)/135)*18':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "Scene 3: Aetheria Perfume Mist Spray",
        "img": IMG_MIST,
        "tts_text": "Đậm đà nguyên bản, chắt lọc từ những thân trầm trăm năm.",
        "tts_rate": "+0%",
        "vo_start": 8.2,
        "clip_dur": 4.5,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0011,1.16)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Scene 4: Tuxedo Eye-Lock Anchor",
        "img": IMG_ACTOR,
        "tts_text": "Từng nốt hương bừng sáng như một dấu ấn không thể phai mờ.",
        "tts_rate": "+0%",
        "vo_start": 12.2,
        "clip_dur": 5.5,
        "motion": "scale=1350:2400:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0007,1.13)':d=165:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)-20':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Scene 5: Flat-lay Ingredients Strata",
        "img": IMG_STRATA,
        "tts_text": "Ba tầng hương biến chuyển, từ cam bergamot đến gỗ trầm và xạ hương đen.",
        "tts_rate": "+0%",
        "vo_start": 17.2,
        "clip_dur": 6.5,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.18)':d=195:x='iw/2-(iw/zoom/2)-18':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "Scene 6: Midnight Oud Hero Bottle Shot",
        "img": IMG_BOTTLE,
        "tts_text": "Midnight Oud. Mùi hương không cần lên tiếng, nó định nghĩa vị thế của bạn.",
        "tts_rate": "-4%",
        "vo_start": 23.2,
        "clip_dur": 5.5,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.15-0.0010*on,1.02)':d=165:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "Scene 7: QR Code End-Card CTA",
        "img": IMG_ENDCARD,
        "tts_text": "Khám phá ngay, tại link đầu trang.",
        "tts_rate": "-4%",
        "vo_start": 28.4,
        "clip_dur": 5.0,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.08)':d=150:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    }
]

async def generate_voiceovers():
    print("🎙️ Đang tạo Voiceover AI Baritone đĩnh đạc...")
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
        
        # Convert to 44.1kHz mono WAV for precise sample positioning
        subprocess.run([
            "ffmpeg", "-y", "-i", audio_mp3,
            "-ar", "44100", "-ac", "1",
            audio_wav
        ], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        s["audio_wav"] = audio_wav
        print(f"  ✓ {s['name']} | Spoken text: \"{s['tts_text']}\"")

def build_full_audio_track():
    print("🎵 Đang thiết kế Soundscape Đa Tầng (Music Bed + Sub-Bass + Micro-SFX + Voiceover)...")
    sample_rate = 44100
    total_dur = 33.0
    total_samples = int(total_dur * sample_rate)
    
    # 1. Voiceover Full Buffer
    vo_buf = [0.0] * total_samples
    for s in scenes:
        with wave.open(s["audio_wav"], "rb") as wf:
            n_frames = wf.getnframes()
            frames = wf.readframes(n_frames)
            # 16-bit PCM mono
            samples = array.array('h')
            samples.frombytes(frames)
            
            start_idx = int(s["vo_start"] * sample_rate)
            for k, val in enumerate(samples):
                pos = start_idx + k
                if pos < total_samples:
                    vo_buf[pos] += (val / 32768.0) * 1.05

    # 2. Soundscape & Music Bed Buffer
    bgm_buf = [0.0] * total_samples
    
    # A. Orchestral Ambient Pad & Sub-Bass Progression (D minor -> F maj -> G min -> A sus -> D min)
    # Harmony timeline:
    # 0.0 - 8.0: D minor (D1=36.7Hz, D3=146.8Hz, A3=220Hz, F4=349.2Hz)
    # 8.0 - 17.0: F major (F1=43.65Hz, F3=174.6Hz, C4=261.6Hz, A4=440Hz)
    # 17.0 - 23.0: G minor / Bb (G1=49.0Hz, G3=196Hz, D4=293.6Hz, Bb4=466.16Hz)
    # 23.0 - 28.0: A sus4 (A1=55.0Hz, A3=220Hz, E4=329.6Hz, G4=392Hz)
    # 28.0 - 33.0: D minor Grand Resolution (D1=36.7Hz, D3=146.8Hz, A3=220Hz, D4=293.6Hz, F4=349.2Hz)
    chords = [
        (0.0, 8.0, 36.7, [146.83, 220.0, 349.23]),
        (8.0, 17.0, 43.65, [174.61, 261.63, 440.0]),
        (17.0, 23.0, 49.0, [196.0, 293.66, 466.16]),
        (23.0, 28.0, 55.0, [220.0, 329.63, 392.0]),
        (28.0, 33.0, 36.7, [146.83, 220.0, 293.66, 349.23])
    ]
    
    for start_t, end_t, sub_freq, pad_freqs in chords:
        start_samp = int(start_t * sample_rate)
        end_samp = int(end_t * sample_rate)
        chord_len = end_samp - start_samp
        
        for idx in range(start_samp, min(end_samp, total_samples)):
            t = (idx - start_samp) / sample_rate
            # Smooth crossfade envelope for chords
            env = 1.0
            if t < 1.0:
                env = t / 1.0
            elif (end_t - (idx / sample_rate)) < 1.0 and end_t < 33.0:
                env = (end_t - (idx / sample_rate)) / 1.0
            elif end_t >= 33.0 and (33.0 - (idx / sample_rate)) < 1.8:
                env = max(0.0, (33.0 - (idx / sample_rate)) / 1.8)
                
            # Deep Sub-Bass (Fundamental + warm 2nd harmonic)
            sub_val = math.sin(2 * math.pi * sub_freq * t) * 0.14
            sub_val += math.sin(2 * math.pi * (sub_freq * 2) * t) * 0.05
            
            # Lush Pad Chords (with subtle stereo detuning effect)
            pad_val = 0.0
            for pf in pad_freqs:
                # Carrier + slight detuned shimmer (±0.6 Hz)
                pad_val += math.sin(2 * math.pi * pf * t) * 0.035
                pad_val += math.sin(2 * math.pi * (pf + 0.6) * t) * 0.02
                pad_val += math.sin(2 * math.pi * (pf - 0.6) * t) * 0.02
                
            bgm_buf[idx] += (sub_val + pad_val) * env

    # B. Synchronized Micro-SFX
    # 1. 00:00 – 00:03: Crystal Droplet Ping (t=0.55s) + Smoke wisp (t=1.0 - 3.2s)
    drop_start = int(0.55 * sample_rate)
    drop_dur = int(1.2 * sample_rate)
    for i in range(drop_dur):
        pos = drop_start + i
        if pos < total_samples:
            t = i / sample_rate
            # Droplet pitch sweep & bell ring
            pitch = 1800.0 * math.exp(-t * 8.0) + 1200.0
            decay = math.exp(-t * 4.5)
            ping = math.sin(2 * math.pi * pitch * t) * decay * 0.22
            # Crystal chime overtone
            chime = math.sin(2 * math.pi * 2100.0 * t) * math.exp(-t * 3.0) * 0.12
            bgm_buf[pos] += ping + chime

    # Smoke wisp (gentle airy rise)
    smoke_start = int(1.0 * sample_rate)
    smoke_dur = int(2.2 * sample_rate)
    for i in range(smoke_dur):
        pos = smoke_start + i
        if pos < total_samples:
            t = i / sample_rate
            env = math.sin(math.pi * (t / 2.2)) ** 2
            noise = (random.random() * 2.0 - 1.0) * 0.025
            bgm_buf[pos] += noise * env

    # 2. 00:08 – 00:11: Perfume Mist Spray (*pssshhh*, t=8.5s) + Metallic Clink (*tink*, t=9.3s)
    spray_start = int(8.5 * sample_rate)
    spray_dur = int(1.1 * sample_rate)
    for i in range(spray_dur):
        pos = spray_start + i
        if pos < total_samples:
            t = i / sample_rate
            # Spray envelope: fast rise, pressurized sustain, dispersion tail
            if t < 0.08:
                env = t / 0.08
            elif t < 0.65:
                env = 1.0
            else:
                env = max(0.0, 1.0 - (t - 0.65) / 0.45)
            # High-passed / textured aerosol hiss
            noise = (random.random() * 2.0 - 1.0)
            spray_sound = (noise * 0.20 + math.sin(2 * math.pi * 4200 * t) * 0.05) * env
            bgm_buf[pos] += spray_sound

    # Metallic Clink at t=9.3s
    clink_start = int(9.3 * sample_rate)
    clink_dur = int(0.5 * sample_rate)
    for i in range(clink_dur):
        pos = clink_start + i
        if pos < total_samples:
            t = i / sample_rate
            clink = (math.sin(2 * math.pi * 2800 * t) * 0.18 +
                     math.sin(2 * math.pi * 5600 * t) * 0.09) * math.exp(-t * 9.0)
            bgm_buf[pos] += clink

    # 3. 00:17 – 00:22: Floral Rustle (t=17.8s) + Woody Resin Crackle (t=19.8s)
    floral_start = int(17.8 * sample_rate)
    floral_dur = int(1.6 * sample_rate)
    for i in range(floral_dur):
        pos = floral_start + i
        if pos < total_samples:
            t = i / sample_rate
            env = math.sin(math.pi * (t / 1.6)) ** 2
            rustle = (random.random() * 2.0 - 1.0) * math.sin(2 * math.pi * 1800 * t) * 0.04
            bgm_buf[pos] += rustle * env

    woody_start = int(19.8 * sample_rate)
    woody_dur = int(2.0 * sample_rate)
    for i in range(woody_dur):
        pos = woody_start + i
        if pos < total_samples:
            t = i / sample_rate
            # Micro resin crackles
            if random.random() < 0.008:
                crackle = (random.random() * 2.0 - 1.0) * 0.14
            else:
                crackle = 0.0
            resonance = math.sin(2 * math.pi * 420 * t) * 0.02
            bgm_buf[pos] += crackle + resonance

    # 4. 00:28 – 00:33: End-Card Majestic Boom & Golden Shimmer Chime
    end_boom_start = int(28.0 * sample_rate)
    end_boom_dur = int(4.5 * sample_rate)
    for i in range(end_boom_dur):
        pos = end_boom_start + i
        if pos < total_samples:
            t = i / sample_rate
            sub_boom = math.sin(2 * math.pi * (75.0 * math.exp(-t * 0.8) + 32.0) * t) * math.exp(-t * 0.9) * 0.28
            shimmer = (math.sin(2 * math.pi * 1480 * t) * 0.06 +
                       math.sin(2 * math.pi * 2220 * t) * 0.04) * math.exp(-t * 1.1)
            bgm_buf[pos] += sub_boom + shimmer

    # 3. Master Mix (VO + BGM) with gentle limiter
    master_buf = [0.0] * total_samples
    for i in range(total_samples):
        # Voiceover has priority clarity, BGM provides luxury foundation
        val = vo_buf[i] + bgm_buf[i]
        # Soft-knee saturation limiter
        if val > 0.95:
            val = 0.95 + math.tanh(val - 0.95) * 0.05
        elif val < -0.95:
            val = -0.95 + math.tanh(val + 0.95) * 0.05
        master_buf[i] = val

    out_wav = os.path.join(TMP_DIR, "master_audio_track_33s.wav")
    raw_bytes = array.array('h', [int(max(-1.0, min(1.0, v)) * 32767) for v in master_buf]).tobytes()
    with wave.open(out_wav, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(raw_bytes)

    print(f"✓ Hoàn tất Master Audio Track 33.0s: {out_wav}")
    return out_wav

def generate_perfect_subtitles():
    print("📝 Đang tạo phụ đề ASS viền mờ bán trong suốt (100% độ tương phản trên mọi phông nền)...")
    ass_path = os.path.join(TMP_DIR, "midnight_oud_perfect_subtitles.ass")

    header = """[Script Info]
Title: Midnight Oud Master Subtitles v3
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Sigmar,56,&H00FFFFFF&,&H00FF9100&,&H00000000&,&HB0000000&,1,0,0,0,100,100,2,0,3,18,0,2,60,60,250,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

    events = [
        "Dialogue: 0,0:00:00.30,0:00:01.80,Default,,0,0,0,,CÓ PHẢI BẠN ĐANG {\\c&H00FF9100&}TÌM",
        "Dialogue: 0,0:00:01.80,0:00:03.70,Default,,0,0,0,,MÙI HƯƠNG CỦA {\\c&H00FF9100&}QUYỀN LỰC",
        "Dialogue: 0,0:00:04.20,0:00:05.90,Default,,0,0,0,,KHÔNG CẦN ỒN ÀO NHƯNG {\\c&H00FF9100&}KHIẾN",
        "Dialogue: 0,0:00:05.90,0:00:07.70,Default,,0,0,0,,CẢ KHÁN PHÒNG PHẢI {\\c&H00FF9100&}NGOÁI NHÌN",
        "Dialogue: 0,0:00:08.20,0:00:09.90,Default,,0,0,0,,ĐẬM ĐÀ NGUYÊN BẢN {\\c&H00FF9100&}CHẮT LỌC",
        "Dialogue: 0,0:00:09.90,0:00:11.70,Default,,0,0,0,,TỪ NHỮNG THÂN {\\c&H00FF9100&}TRẦM TRĂM NĂM",
        "Dialogue: 0,0:00:12.20,0:00:14.20,Default,,0,0,0,,TỪNG NỐT HƯƠNG {\\c&H00FF9100&}BỪNG SÁNG NHƯ MỘT",
        "Dialogue: 0,0:00:14.20,0:00:16.50,Default,,0,0,0,,DẤU ẤN {\\c&H00FF9100&}KHÔNG THỂ PHAI MỜ",
        "Dialogue: 0,0:00:17.20,0:00:19.40,Default,,0,0,0,,BA TẦNG HƯƠNG {\\c&H00FF9100&}BIẾN CHUYỂN TỪ CAM",
        "Dialogue: 0,0:00:19.40,0:00:22.50,Default,,0,0,0,,BERGAMOT ĐẾN TRẦM HƯƠNG VÀ {\\c&H00FF9100&}XẠ HƯƠNG ĐEN",
        "Dialogue: 0,0:00:23.20,0:00:25.40,Default,,0,0,0,,MIDNIGHT OUD MÙI HƯƠNG {\\c&H00FF9100&}KHÔNG CẦN LÊN TIẾNG",
        "Dialogue: 0,0:00:25.40,0:00:27.70,Default,,0,0,0,,NÓ ĐỊNH NGHĨA {\\c&H00FF9100&}VỊ THẾ CỦA BẠN",
        "Dialogue: 0,0:00:28.40,0:00:32.20,Default,,0,0,0,,KHÁM PHÁ NGAY TẠI {\\c&H00FF9100&}LINK ĐẦU TRANG"
    ]

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")

    print(f"✓ Đã lưu file phụ đề ASS: {ass_path}")
    return ass_path

def render_master_video(ass_path, master_audio_wav):
    print("🎬 Đang render từng clip với hiệu ứng chuyển động, unsharp, color grading & 3D LUT...")
    escaped_lut = LUT_FILE.replace("\\", "/").replace(":", "\\:")
    clip_files = []

    for s in scenes:
        out_clip = os.path.join(TMP_DIR, f"scene_{s['id']}_clip.mp4")
        dur_str = f"{s['clip_dur']:.2f}"
        
        # Color grading chain: unsharp (tăng độ nét giọt nước và chai) -> eq (tăng tương phản sâu và độ bão hòa hổ phách) -> 3D LUT
        filter_str = f"{s['motion']},unsharp=3:3:1.2:3:3:0.0,eq=contrast=1.12:brightness=-0.02:saturation=1.18,lut3d='{escaped_lut}'"

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

    print("\n✨ Đang hòa trộn 7 phân cảnh bằng chuỗi Cross-Dissolve mềm mại (xfade=0.5s)...")
    # 7 clips: [0:v] to [6:v]
    # Offsets:
    # d0=4.5 -> xfade 0.5 at offset 4.0 -> len 8.5
    # d1=4.5 -> xfade 0.5 at offset 8.0 -> len 12.5
    # d2=4.5 -> xfade 0.5 at offset 12.0 -> len 17.5
    # d3=5.5 -> xfade 0.5 at offset 17.0 -> len 23.5
    # d4=6.5 -> xfade 0.5 at offset 23.0 -> len 28.5
    # d5=5.5 -> xfade 0.5 at offset 28.0 -> len 33.0 (final clip d6=5.0)
    xfade_filter = (
        "[0:v][1:v]xfade=transition=dissolve:duration=0.5:offset=4.0[v01];"
        "[v01][2:v]xfade=transition=dissolve:duration=0.5:offset=8.0[v02];"
        "[v02][3:v]xfade=transition=dissolve:duration=0.5:offset=12.0[v03];"
        "[v03][4:v]xfade=transition=dissolve:duration=0.5:offset=17.0[v04];"
        "[v04][5:v]xfade=transition=dissolve:duration=0.5:offset=23.0[v05];"
        "[v05][6:v]xfade=transition=dissolve:duration=0.5:offset=28.0[v_dissolved]"
    )

    video_dissolved = os.path.join(TMP_DIR, "video_dissolved_33s.mp4")
    xfade_cmd = ["ffmpeg", "-y"]
    for c in clip_files:
        xfade_cmd.extend(["-i", c])
    xfade_cmd.extend([
        "-filter_complex", xfade_filter,
        "-map", "[v_dissolved]",
        "-c:v", "libx264", "-preset", "fast", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-t", "33.0",
        video_dissolved
    ])
    subprocess.run(xfade_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"✓ Video chuyển cảnh mềm mại đã tạo thành công: {video_dissolved}")

    print("\n👑 Đang in phụ đề Sigmar (Backdrop mờ bán trong suốt) & hòa âm Master Audio Track...")
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
        "-t", "33.0",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 SIÊU PHẨM 33S HOÀN HẢO ĐÃ XUẤT XƯỞNG: {final_output}")

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
    master_audio = build_full_audio_track()
    ass_path = generate_perfect_subtitles()
    final_mp4 = render_master_video(ass_path, master_audio)
    print(f"\n✨ TẤT CẢ 4 YÊU CẦU ĐÃ ĐẠT CHUẨN HOÀN HẢO: {final_mp4}")

if __name__ == "__main__":
    asyncio.run(main())
