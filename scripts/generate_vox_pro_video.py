import os
import sys
import math
import wave
import struct
import subprocess
from gtts import gTTS

if sys.platform.startswith('win'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

OUTPUT_DIR = os.path.abspath("exports/vox-pro")
os.makedirs(OUTPUT_DIR, exist_ok=True)

IMAGE_PATHS = [
    r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\5df4d190-94dc-4b62-843a-86a6f7a22df2\vox_scene_hook_1791967713454.jpg",
    r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\5df4d190-94dc-4b62-843a-86a6f7a22df2\vox_scene_pipeline_1791967843406.jpg",
    r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\5df4d190-94dc-4b62-843a-86a6f7a22df2\vox_scene_terminal_1791968059315.jpg",
    r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\5df4d190-94dc-4b62-843a-86a6f7a22df2\vox_scene_cta_1791968303538.jpg"
]

SCENES = [
    {
        "id": 1,
        "image": IMAGE_PATHS[0],
        "text": "Dừng tự cắt ghép video phong cách Vox hàng giờ! Đây là repo mã nguồn mở tự động hóa toàn bộ quy trình này.",
        "caption": "DỪNG CẮT GHÉP THỦ CÔNG! • REPO TỰ ĐỘNG HÓA 100%",
        "sfx": "whoosh"
    },
    {
        "id": 2,
        "image": IMAGE_PATHS[1],
        "text": "Chỉ cần một chủ đề: AI tự viết kịch bản, tự cắt dán báo chí, diễn hoạt chuyển động và xuất thẳng file hoàn chỉnh.",
        "caption": "4 BƯỚC KHÉP KÍN: KỊCH BẢN ➔ COLLAGE ➔ DIỄN HOẠT ➔ XUẤT MP4",
        "sfx": "pop"
    },
    {
        "id": 3,
        "image": IMAGE_PATHS[2],
        "text": "Đặc biệt, nó chạy như một Agent Skill ngay trên Claude Code và Cursor, giúp bạn tạo video ngắn triệu view chỉ sau một câu lệnh.",
        "caption": "TÍCH HỢP AGENT SKILL TRÊN CLAUDE CODE & CURSOR",
        "sfx": "click"
    },
    {
        "id": 4,
        "image": IMAGE_PATHS[3],
        "text": "Mã nguồn mở 100% trên GitHub Anil-matcha gạch chéo vox-ai. Hãy thả một Star và lưu lại ngay nhé!",
        "caption": "100% OPEN SOURCE TRÊN GITHUB • THẢ STAR & LƯU LẠI NGAY!",
        "sfx": "chime"
    }
]

# 1. TẠO ÂM THANH SFX VÀ NHẠC NỀN BẰNG PYTHON SỞ TẠI (NO EXTERNAL DEPENDENCIES)
def generate_sfx():
    sample_rate = 44100

    # A. Whoosh sound
    whoosh_path = os.path.join(OUTPUT_DIR, "whoosh.wav")
    with wave.open(whoosh_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        duration = 0.6
        num_samples = int(sample_rate * duration)
        for i in range(num_samples):
            t = i / sample_rate
            env = math.sin(math.pi * (t / duration)) ** 2
            # Frequency sweep
            freq = 150 + 600 * math.sin(math.pi * (t / duration))
            noise = (math.sin(2 * math.pi * freq * t) + (hash(i) % 1000 / 1000.0 - 0.5) * 0.4)
            val = int(noise * env * 14000)
            wav.writeframes(struct.pack("<h", max(-32767, min(32767, val))))

    # B. Pop sound
    pop_path = os.path.join(OUTPUT_DIR, "pop.wav")
    with wave.open(pop_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        duration = 0.25
        num_samples = int(sample_rate * duration)
        for i in range(num_samples):
            t = i / sample_rate
            env = math.exp(-18 * t)
            freq = 450 - 250 * (t / duration)
            val = int(math.sin(2 * math.pi * freq * t) * env * 22000)
            wav.writeframes(struct.pack("<h", max(-32767, min(32767, val))))

    # C. Mechanical Key Click sound
    click_path = os.path.join(OUTPUT_DIR, "click.wav")
    with wave.open(click_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        duration = 0.35
        num_samples = int(sample_rate * duration)
        for i in range(num_samples):
            t = i / sample_rate
            # 3 rapid mini clicks
            env = math.exp(-35 * (t % 0.1)) if (t % 0.1) < 0.08 else 0
            val = int((hash(i) % 1000 / 500.0 - 1.0) * env * 16000)
            wav.writeframes(struct.pack("<h", max(-32767, min(32767, val))))

    # D. Golden Chime sound
    chime_path = os.path.join(OUTPUT_DIR, "chime.wav")
    with wave.open(chime_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        duration = 1.2
        num_samples = int(sample_rate * duration)
        for i in range(num_samples):
            t = i / sample_rate
            env = math.exp(-3.5 * t)
            # Harmonic chord (E5, G#5, B5, E6)
            s = (math.sin(2 * math.pi * 659.25 * t) +
                 math.sin(2 * math.pi * 830.61 * t) * 0.8 +
                 math.sin(2 * math.pi * 987.77 * t) * 0.7 +
                 math.sin(2 * math.pi * 1318.5 * t) * 0.5)
            val = int(s * env * 8000)
            wav.writeframes(struct.pack("<h", max(-32767, min(32767, val))))

    # E. Background Lo-Fi Music (Warm Rhodes + Soft Kick & Vinyl texture, 60s)
    bgm_path = os.path.join(OUTPUT_DIR, "bgm.wav")
    with wave.open(bgm_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        total_duration = 55.0
        num_samples = int(sample_rate * total_duration)
        bpm = 85.0
        beat_dur = 60.0 / bpm
        
        # Chord roots: D, G, C, A
        chords = [
            [293.66, 349.23, 440.0, 523.25], # Dm7
            [196.00, 246.94, 293.66, 349.23], # G7
            [261.63, 329.63, 392.0, 493.88], # Cmaj7
            [220.00, 261.63, 329.63, 392.0]  # Am7
        ]
        
        for i in range(num_samples):
            t = i / sample_rate
            beat_idx = int(t / beat_dur)
            bar_idx = (beat_idx // 4) % len(chords)
            chord = chords[bar_idx]
            t_in_bar = (t % (beat_dur * 4))
            
            # Electric piano chord
            chord_env = math.exp(-0.8 * (t % beat_dur)) * 0.4 + 0.2
            chord_val = sum(math.sin(2 * math.pi * freq * t) for freq in chord) * chord_env
            
            # Bassline
            bass_freq = chord[0] / 2.0
            bass_val = math.sin(2 * math.pi * bass_freq * t) * 0.6
            
            # Kick on beat 1 & 3
            beat_sub = (t % beat_dur)
            kick_val = 0
            if (beat_idx % 2 == 0) and beat_sub < 0.18:
                kick_env = math.exp(-25 * beat_sub)
                kick_freq = 110 - 60 * (beat_sub / 0.18)
                kick_val = math.sin(2 * math.pi * kick_freq * beat_sub) * kick_env * 1.2
            
            # Soft vinyl warmth
            vinyl = (hash(i) % 100 / 100.0 - 0.5) * 0.04
            
            total = (chord_val * 0.35 + bass_val * 0.3 + kick_val * 0.4 + vinyl) * 12000
            wav.writeframes(struct.pack("<h", max(-32767, min(32767, int(total)))))
            
    print("✅ Đã tổng hợp thành công toàn bộ thư viện SFX & Nhạc nền Lo-Fi!")
    return {
        "whoosh": whoosh_path,
        "pop": pop_path,
        "click": click_path,
        "chime": chime_path,
        "bgm": bgm_path
    }

# 2. SINH GIỌNG ĐỌC AI & SPEEDUP (ATEMPO) ĐỂ TĂNG NHỊP ĐIỆU CUỐN HÚT
def generate_speech():
    print("🎙️ Đang sinh giọng đọc AI...")
    for scene in SCENES:
        raw_audio = os.path.join(OUTPUT_DIR, f"voice_raw_{scene['id']}.mp3")
        fast_audio = os.path.join(OUTPUT_DIR, f"voice_fast_{scene['id']}.mp3")
        
        tts = gTTS(text=scene["text"], lang="vi", slow=False)
        tts.save(raw_audio)
        
        # Tăng tốc độ 12% để đạt nhịp điệu ngắn hiện đại
        cmd = [
            "ffmpeg", "-y", "-i", raw_audio,
            "-filter:a", "atempo=1.12",
            "-vn", fast_audio
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        scene["audio"] = fast_audio
        
        # Lấy thời lượng chính xác bằng ffprobe
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", fast_audio
        ]
        dur = float(subprocess.check_output(probe_cmd).strip())
        scene["duration"] = dur + 0.6 # Thêm padding 0.6s cho chuyển cảnh
        print(f"  • Cảnh {scene['id']}: {scene['duration']:.2f}s")

# 3. TẠO FILE PHỤ ĐỀ KINETIC ASS CHUẨN ĐẠO DIỄN
def generate_subtitles():
    ass_path = os.path.join(OUTPUT_DIR, "captions.ass")
    header = """[Script Info]
Title: Vox Repo Review Pro
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: VoxTitle,Arial,52,&H0000FFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,1,0,3,10,0,2,40,40,280,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = []
    current_time = 0.0
    for scene in SCENES:
        start_sec = current_time + 0.2
        end_sec = current_time + scene["duration"] - 0.2
        
        def fmt(t):
            h = int(t // 3600)
            m = int((t % 3600) // 60)
            s = int(t % 60)
            cs = int((t - int(t)) * 100)
            return f"{h}:{m:02d}:{s:02d}.{cs:02d}"
            
        events.append(f"Dialogue: 0,{fmt(start_sec)},{fmt(end_sec)},VoxTitle,,0,0,0,,{{\\fad(200,200)}}{scene['caption']}")
        current_time += scene["duration"]
        
    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")
    print(f"✅ Đã tạo file phụ đề Kinetic ASS: {ass_path}")
    return ass_path

# 4. RENDER TỪNG PHÂN CẢNH VỚI KEN BURNS ZOOM & MIX ÂM THANH ĐA TẦNG (VOICE + SFX)
def render_scenes(sfx_dict):
    scene_clips = []
    for scene in SCENES:
        out_clip = os.path.join(OUTPUT_DIR, f"pro_clip_{scene['id']}.mp4")
        sfx_file = sfx_dict[scene["sfx"]]
        dur = scene["duration"]
        
        # Mix giọng nói + tiếng hiệu ứng SFX ở đầu cảnh
        mixed_audio = os.path.join(OUTPUT_DIR, f"pro_audio_{scene['id']}.wav")
        audio_mix_cmd = [
            "ffmpeg", "-y",
            "-i", scene["audio"],
            "-i", sfx_file,
            "-filter_complex",
            "[1:a]volume=0.8[sfx];[0:a]volume=1.0[voice];[voice][sfx]amix=inputs=2:duration=first:dropout_transition=2[aout]",
            "-map", "[aout]",
            mixed_audio
        ]
        subprocess.run(audio_mix_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        
        # Ken Burns zoompan tạo chuyển động cinema trên poster Vox
        frames = int(dur * 25)
        zoom_filter = f"scale=1080:1920,zoompan=z='min(zoom+0.0006,1.07)':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920"
        
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", scene["image"],
            "-i", mixed_audio,
            "-c:v", "libx264", "-tune", "stillimage",
            "-c:a", "aac", "-b:a", "192k",
            "-pix_fmt", "yuv420p",
            "-vf", zoom_filter,
            "-t", str(dur),
            out_clip
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        scene_clips.append(out_clip)
        print(f"  🎬 Render Cảnh Pro {scene['id']} ({dur:.1f}s) hoàn tất!")
        
    return scene_clips

# 5. GHÉP FINAL VỚI NHẠC NỀN LO-FI DUCKING VÀ BURN-IN SUBTITLE KINETIC
def finalize_video(scene_clips, sfx_dict, ass_file):
    print("🎞️ Đang ghép Final Master với Nhạc nền Lo-Fi và Phụ đề...")
    concat_txt = os.path.join(OUTPUT_DIR, "pro_concat.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for c in scene_clips:
            f.write(f"file '{c.replace(chr(92), '/')}'\n")
            
    temp_stitched = os.path.join(OUTPUT_DIR, "temp_stitched.mp4")
    subprocess.run([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", concat_txt, "-c", "copy", temp_stitched
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    
    # Lấy tổng thời lượng
    probe_cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", temp_stitched
    ]
    total_dur = float(subprocess.check_output(probe_cmd).strip())
    
    final_pro_video = os.path.join(OUTPUT_DIR, "vox_ai_review_pro_master.mp4")
    
    # Burn-in phụ đề ASS + Lồng nhạc nền Lo-fi Ducking (-18dB)
    # Filter ass path needs escaped colon and backslashes for ffmpeg
    escaped_ass = ass_file.replace("\\", "/").replace(":", "\\:")
    
    final_cmd = [
        "ffmpeg", "-y",
        "-i", temp_stitched,
        "-i", sfx_dict["bgm"],
        "-filter_complex",
        f"[0:v]subtitles='{escaped_ass}'[vsub];"
        f"[1:a]volume=0.15[bgm];[0:a]volume=1.0[speech];[speech][bgm]amix=inputs=2:duration=first:dropout_transition=2[aout]",
        "-map", "[vsub]",
        "-map", "[aout]",
        "-c:v", "libx264", "-crf", "20", "-preset", "medium",
        "-c:a", "aac", "-b:a", "256k",
        "-t", str(total_dur),
        final_pro_video
    ]
    subprocess.run(final_cmd, check=True)
    print(f"\n🎉 XUẤT BẢN THÀNH CÔNG VIDEO PRO MASTER: {final_pro_video}")
    
    # Đồng bộ sang public & dist
    public_target = os.path.abspath("public/vox_ai_review_pro.mp4")
    dist_target = os.path.abspath("dist/vox_ai_review_pro.mp4")
    subprocess.run(["ffmpeg", "-y", "-i", final_pro_video, "-c", "copy", public_target], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
    subprocess.run(["ffmpeg", "-y", "-i", final_pro_video, "-c", "copy", dist_target], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
    print(f"  🌐 Đã đồng bộ sang Web: {public_target}")
    return final_pro_video

if __name__ == "__main__":
    sfx = generate_sfx()
    generate_speech()
    ass = generate_subtitles()
    clips = render_scenes(sfx)
    finalize_video(clips, sfx, ass)
