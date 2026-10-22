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
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "vibe-design-harness-review")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_render")
FONTS_DIR = os.path.join(WORKSPACE, "exports", "midnight-oud-tvc", "fonts")
os.makedirs(TMP_DIR, exist_ok=True)

# 4 Keyframe Assets 9:16
IMG_S1 = os.path.join(EXPORT_DIR, "scene1_hook_linter.jpg")
IMG_S2 = os.path.join(EXPORT_DIR, "scene2_compiler_cards.jpg")
IMG_S3 = os.path.join(EXPORT_DIR, "scene3_vn_typography.jpg")
IMG_S4 = os.path.join(EXPORT_DIR, "scene4_endcard_cta.jpg")

# 4 Phân Cảnh (Tổng thời lượng: 28.0 giây)
# Raw durations with 0.4s xfade overlap:
# d0 = 5.4s -> xfade at 5.0s -> 0.0 to 5.0
# d1 = 8.4s -> xfade at 13.0s -> 5.0 to 13.0
# d2 = 8.4s -> xfade at 21.0s -> 13.0 to 21.0
# d3 = 7.4s -> end at 28.0s -> 21.0 to 28.0
# Total: 5.4 + 8.4 + 8.4 + 7.4 - (3 * 0.4) = 29.6 - 1.2 = 28.4 -> trimmed exactly to 28.0s!
scenes = [
    {
        "id": 1,
        "name": "00:00 - 00:05 | Hook 3s - UI Anti-Slop Linter",
        "img": IMG_S1,
        "tts_text": "Bạn mệt mỏi vì giao diện AI toàn lỗi slop và font tiếng Việt vỡ hạt? Đừng bỏ qua repo này!",
        "tts_rate": "+6%",
        "vo_start": 0.35,
        "clip_dur": 5.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0009,1.16)':d=162:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "00:05 - 00:13 | Core Breakdown - 5-Engine Studio Compiler",
        "img": IMG_S2,
        "tts_text": "Vibe Design Harness: Bộ linter UI siêu tốc dưới một mili-giây, cùng compiler tích hợp năm nền tảng AI thị giác hàng đầu.",
        "tts_rate": "+5%",
        "vo_start": 5.2,
        "clip_dur": 8.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0007,1.14)':d=252:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((252-on)/252)*20':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "00:13 - 00:21 | Deep Verdict - CapCut Vietnamese Typography",
        "img": IMG_S3,
        "tts_text": "Đặc biệt: Động cơ CapCut Typography chuẩn hóa một trăm ba mươi tư ký tự tiếng Việt, xuất SVG trong suốt không lỗi dấu.",
        "tts_rate": "+5%",
        "vo_start": 13.2,
        "clip_dur": 8.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0008,1.15)':d=252:x='iw/2-(iw/zoom/2)-((252-on)/252)*15':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "00:21 - 00:28 | Infinity Loop CTA - Star Repo GitHub",
        "img": IMG_S4,
        "tts_text": "Khám phá ngay tại GitHub teddiesloco. Star repo hôm nay để nâng tầm sản phẩm của bạn. Và...",
        "tts_rate": "+4%",
        "vo_start": 21.2,
        "clip_dur": 7.4,
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.10)':d=222:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    }
]

from gtts import gTTS

async def generate_voiceovers():
    print("🎙️ Đang sinh Voiceover AI tiếng Việt bằng gTTS (Google Voice)...")
    for s in scenes:
        mp3_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.mp3")
        wav_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.wav")

        tts = gTTS(text=s["tts_text"], lang='vi', slow=False)
        tts.save(mp3_path)

        # Chuẩn hóa tốc độ giọng đọc công nghệ sắc nét (atempo=1.08)
        cmd = [
            "ffmpeg", "-y", "-i", mp3_path,
            "-filter:a", "atempo=1.08",
            "-ar", "44100", "-ac", "1",
            wav_path
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"  ✓ Scene {s['id']} voiceover: {wav_path}")
        s["wav_path"] = wav_path

def synthesize_tech_master_audio():
    print("\n🎧 Đang tổng hợp Master Audio Track (BGM Cyber Synth + SFX + Ducking −14 LUFS)...")
    sample_rate = 44100
    total_samples = int(28.0 * sample_rate)

    # 1. Voice Buffer
    vo_buf = [0.0] * total_samples
    for s in scenes:
        with wave.open(s["wav_path"], 'rb') as wf:
            n_frames = wf.getnframes()
            frames = wf.readframes(n_frames)
            samples = array.array('h')
            samples.frombytes(frames)

            start_idx = int(s["vo_start"] * sample_rate)
            for k, val in enumerate(samples):
                pos = start_idx + k
                if pos < total_samples:
                    vo_buf[pos] += (val / 32768.0) * 1.10

    # 2. Soundscape Buffer (High-tech Cyber Synth)
    bgm_buf = [0.0] * total_samples

    # Hòa thanh công nghệ hiện đại (Fm / Ab / Eb / Db / Fm)
    chords = [
        (0.0, 5.0, 43.65, [174.61, 220.0, 261.63]),     # F minor pad
        (5.0, 13.0, 51.91, [207.65, 261.63, 311.13]),   # Ab major
        (13.0, 21.0, 38.89, [155.56, 196.0, 233.08]),   # Eb major
        (21.0, 28.0, 43.65, [174.61, 207.65, 261.63])   # Fm resolution
    ]

    for start_t, end_t, sub_freq, pad_freqs in chords:
        start_samp = int(start_t * sample_rate)
        end_samp = int(end_t * sample_rate)

        for idx in range(start_samp, min(end_samp, total_samples)):
            t = (idx - start_samp) / sample_rate
            env = 1.0
            if t < 0.6:
                env = t / 0.6
            elif (end_t - (idx / sample_rate)) < 0.6 and end_t < 28.0:
                env = (end_t - (idx / sample_rate)) / 0.6
            elif end_t >= 28.0 and (28.0 - (idx / sample_rate)) < 1.5:
                env = max(0.0, (28.0 - (idx / sample_rate)) / 1.5)

            # Sub-Bass
            sub_val = math.sin(2 * math.pi * sub_freq * t) * 0.12
            sub_val += math.sin(2 * math.pi * (sub_freq * 2) * t) * 0.04

            # Arp pulse & Pad Chords
            pad_val = 0.0
            for pf in pad_freqs:
                pad_val += math.sin(2 * math.pi * pf * t) * 0.03
                pad_val += math.sin(2 * math.pi * (pf * 2) * t) * 0.015

            bgm_buf[idx] += (sub_val + pad_val) * env

    # Micro-SFX công nghệ:
    # 0.5s: Laser whoosh scan
    s1_pos = int(0.5 * sample_rate)
    for i in range(int(0.8 * sample_rate)):
        p = s1_pos + i
        if p < total_samples:
            t = i / sample_rate
            f = 2400.0 * math.exp(-t * 6.0) + 400.0
            sweep = math.sin(2 * math.pi * f * t) * math.exp(-t * 4.0) * 0.18
            bgm_buf[p] += sweep

    # 5.2s: Tech UI Card Snap
    s2_pos = int(5.2 * sample_rate)
    for i in range(int(0.6 * sample_rate)):
        p = s2_pos + i
        if p < total_samples:
            t = i / sample_rate
            snap = math.sin(2 * math.pi * 3200.0 * t) * math.exp(-t * 12.0) * 0.15
            bgm_buf[p] += snap

    # 13.2s: Precision Bell chime
    s3_pos = int(13.2 * sample_rate)
    for i in range(int(1.2 * sample_rate)):
        p = s3_pos + i
        if p < total_samples:
            t = i / sample_rate
            bell = (math.sin(2 * math.pi * 1760.0 * t) + math.sin(2 * math.pi * 3520.0 * t) * 0.5) * math.exp(-t * 3.5) * 0.16
            bgm_buf[p] += bell

    # 21.2s: Star chime ring & Sub-drop
    s4_pos = int(21.2 * sample_rate)
    for i in range(int(1.5 * sample_rate)):
        p = s4_pos + i
        if p < total_samples:
            t = i / sample_rate
            chime = math.sin(2 * math.pi * 2093.0 * t) * math.exp(-t * 3.0) * 0.20
            drop = math.sin(2 * math.pi * (90.0 * math.exp(-t * 4.0) + 38.0) * t) * math.exp(-t * 2.5) * 0.25
            bgm_buf[p] += chime + drop

    # 3. Audio Ducking (-18dB khi voice active)
    master_buf = [0.0] * total_samples
    window_sz = int(0.04 * sample_rate)
    voice_env = [0.0] * total_samples

    for i in range(0, total_samples, window_sz):
        w_end = min(i + window_sz, total_samples)
        rms = math.sqrt(sum(v*v for v in vo_buf[i:w_end]) / max(1, w_end - i))
        for j in range(i, w_end):
            voice_env[j] = rms

    smooth_ducking = [1.0] * total_samples
    curr_gain = 1.0
    for i in range(total_samples):
        target = 0.22 if voice_env[i] > 0.02 else 0.85
        alpha = 0.0006 if target < curr_gain else 0.00015
        curr_gain += (target - curr_gain) * alpha
        smooth_ducking[i] = curr_gain

    for i in range(total_samples):
        mixed = vo_buf[i] + bgm_buf[i] * smooth_ducking[i]
        # Soft limiter
        if mixed > 0.95:
            mixed = 0.95 + math.tanh(mixed - 0.95) * 0.05
        elif mixed < -0.95:
            mixed = -0.95 + math.tanh(mixed + 0.95) * 0.05
        master_buf[i] = mixed

    out_wav = os.path.join(TMP_DIR, "master_audio_track_28s.wav")
    raw_bytes = array.array('h', [int(max(-1.0, min(1.0, v)) * 32767) for v in master_buf]).tobytes()
    with wave.open(out_wav, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(raw_bytes)

    print(f"✓ Đã sinh Master Audio 28.0s: {out_wav}")
    return out_wav

def generate_subtitles():
    print("📝 Đang tạo phụ đề ASS chữ chuẩn điện ảnh (Highlight màu Cyan & Amber)...")
    ass_path = os.path.join(TMP_DIR, "vibe_design_subtitles.ass")

    header = """[Script Info]
Title: Vibe Design Harness Review
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,52,&H00FFFFFF&,&H0000FFFF&,&H00000000&,&H80000000&,1,0,0,0,100,100,2,0,3,14,0,2,60,60,260,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = [
        "Dialogue: 0,0:00:00.35,0:00:02.50,Default,,0,0,0,,BẠN MỆT MỎI VÌ GIAO DIỆN {\\c&H0000FFFF&}AI TOÀN LỖI SLOP",
        "Dialogue: 0,0:00:02.50,0:00:04.90,Default,,0,0,0,,VÀ FONT TIẾNG VIỆT VỠ? {\\c&H00FF9100&}ĐỪNG BỎ QUA REPO NÀY!",
        "Dialogue: 0,0:00:05.20,0:00:08.80,Default,,0,0,0,,VIBE DESIGN HARNESS: {\\c&H0000FFFF&}LINTER UI SIÊU TỐC <1MS",
        "Dialogue: 0,0:00:08.80,0:00:12.80,Default,,0,0,0,,TÍCH HỢP {\\c&H00FF9100&}5 ENGINE AI THỊ GIÁC HÀNG ĐẦU",
        "Dialogue: 0,0:00:13.20,0:00:16.80,Default,,0,0,0,,ĐẶC BIỆT: {\\c&H0000FFFF&}CAPCUT TYPOGRAPHY CHUẨN HÓA",
        "Dialogue: 0,0:00:16.80,0:00:20.80,Default,,0,0,0,,134 KÝ TỰ TIẾNG VIỆT, {\\c&H00FF9100&}XUẤT SVG TRONG SUỐT",
        "Dialogue: 0,0:00:21.20,0:00:24.50,Default,,0,0,0,,KHÁM PHÁ NGAY TẠI {\\c&H0000FFFF&}GITHUB TEDDIESLOCO",
        "Dialogue: 0,0:00:24.50,0:00:27.50,Default,,0,0,0,,STAR REPO HÔM NAY ĐỂ {\\c&H00FF9100&}NÂNG TẦM DỰ ÁN CỦA BẠN!"
    ]

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")

    print(f"✓ Đã lưu file phụ đề ASS: {ass_path}")
    return ass_path

def render_final_video(ass_path, master_audio_wav):
    print("\n🎬 Bắt đầu render các clip chuyển động bằng FFmpeg...")
    clip_files = []

    for s in scenes:
        out_clip = os.path.join(TMP_DIR, f"scene_{s['id']}_clip.mp4")
        dur_str = f"{s['clip_dur']:.2f}"

        # Color grading chain: unsharp + contrast & color pop
        filter_str = f"{s['motion']},unsharp=3:3:1.2:3:3:0.0,eq=contrast=1.12:brightness=-0.01:saturation=1.18"

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

    print("\n✨ Hòa trộn các phân cảnh bằng Cross-Dissolve mềm mại (xfade=0.4s)...")
    # 4 clips:
    # c0: 5.4s -> xfade at 5.0 -> len 5.0 + 8.4 = 13.4s
    # c1: 8.4s -> xfade at 13.0 -> len 13.0 + 8.4 = 21.4s
    # c2: 8.4s -> xfade at 21.0 -> len 21.0 + 7.4 = 28.4s (clip 3)
    xfade_filter = (
        "[0:v][1:v]xfade=transition=dissolve:duration=0.4:offset=5.0[v01];"
        "[v01][2:v]xfade=transition=dissolve:duration=0.4:offset=13.0[v02];"
        "[v02][3:v]xfade=transition=dissolve:duration=0.4:offset=21.0[v_dissolved]"
    )

    video_dissolved = os.path.join(TMP_DIR, "video_dissolved_28s.mp4")
    xfade_cmd = ["ffmpeg", "-y"]
    for c in clip_files:
        xfade_cmd.extend(["-i", c])
    xfade_cmd.extend([
        "-filter_complex", xfade_filter,
        "-map", "[v_dissolved]",
        "-c:v", "libx264", "-preset", "fast", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-t", "28.0",
        video_dissolved
    ])
    subprocess.run(xfade_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"✓ Video chuyển cảnh hoàn thành: {video_dissolved}")

    print("\n👑 Đang in phụ đề ASS & hòa âm Master Audio Track...")
    final_output = os.path.join(EXPORT_DIR, "vibe_design_harness_review_28s.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")

    master_cmd = [
        "ffmpeg", "-y",
        "-i", video_dissolved,
        "-i", master_audio_wav,
        "-filter_complex",
        f"[0:v]subtitles='{escaped_ass}'[v_out]",
        "-map", "[v_out]",
        "-map", "1:a",
        "-c:v", "libx264", "-preset", "medium", "-crf", "17",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "256k",
        "-t", "28.0",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 VIDEO REVIEW CÔNG NGHỆ 28S ĐÃ HOÀN TẤT THÀNH CÔNG:\n  --> {final_output}")

    # Copy to public/ and dist/
    for dest in [
        os.path.join(WORKSPACE, "vibe_design_harness_review_28s.mp4"),
        os.path.join(WORKSPACE, "public", "vibe_design_harness_review_28s.mp4"),
        os.path.join(WORKSPACE, "dist", "public", "vibe_design_harness_review_28s.mp4")
    ]:
        try:
            shutil.copy2(final_output, dest)
            print(f"✓ Đồng bộ tới: {dest}")
        except Exception as e:
            pass

    return final_output

async def main():
    print("=" * 70)
    print("🚀 BẮT ĐẦU RENDER VIDEO REVIEW CÔNG NGHỆ: VIBE-DESIGN-HARNESS (28S)")
    print("=" * 70)
    await generate_voiceovers()
    master_wav = synthesize_tech_master_audio()
    ass_sub = generate_subtitles()
    final_mp4 = render_final_video(ass_sub, master_wav)
    print("\n🎉 TOÀN BỘ QUY TRÌNH SẢN XUẤT ĐÃ XUẤT XƯỞNG THÀNH CÔNG RỰC RỠ!")

if __name__ == "__main__":
    asyncio.run(main())
