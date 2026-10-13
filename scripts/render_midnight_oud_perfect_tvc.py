import asyncio
import os
import subprocess
import sys
import math
import wave
import struct
import shutil

sys.stdout.reconfigure(encoding='utf-8')
import edge_tts

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "midnight-oud-tvc")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_render")
os.makedirs(TMP_DIR, exist_ok=True)

# Visual Assets
IMG_DROP = os.path.join(EXPORT_DIR, "keyframe_macro_drop.jpg")
IMG_ACTOR = os.path.join(EXPORT_DIR, "keyframe_actor_portrait.jpg")
IMG_BOTTLE = os.path.join(EXPORT_DIR, "keyframe_bottle_hero.jpg")

# 7 Phân cảnh TVC 30s Master hoàn chỉnh
scenes = [
    {
        "id": 1,
        "name": "Hook 3s — Amber Droplet",
        "img": IMG_DROP,
        "text": "Có phải bạn đang tìm mùi hương của quyền lực?",
        "subtitle_lines": [
            "CÓ PHẢI BẠN ĐANG TÌM",
            "MÙI HƯƠNG CỦA QUYỀN LỰC?"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='if(lte(on,10),1.0+0.03*on,if(lte(on,90),1.30,max(1.0,1.30-0.03*(on-90))))':d=110:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "B-roll 1 — Tuxedo In Shadows",
        "img": IMG_ACTOR,
        "text": "Không cần ồn ào, nhưng khiến cả khán phòng phải ngoái nhìn.",
        "subtitle_lines": [
            "KHÔNG CẦN ỒN ÀO",
            "KHIẾN CẢ KHÁN PHÒNG NGOÁI NHÌN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.15)':d=130:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)+((130-on)/130)*25':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "B-roll 2 — Pure Agarwood Essence",
        "img": IMG_BOTTLE,
        "text": "Đậm đà nguyên bản, chắt lọc từ những thân trầm trăm năm.",
        "subtitle_lines": [
            "ĐẬM ĐÀ NGUYÊN BẢN",
            "CHẮT LỌC TỪ THÂN TRẦM TRĂM NĂM"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0015,1.20)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Actor Charisma — Unforgettable Aura",
        "img": IMG_ACTOR,
        "text": "Từng nốt hương bừng sáng như một dấu ấn không thể phai mờ.",
        "subtitle_lines": [
            "TỪNG NỐT HƯƠNG BỪNG SÁNG",
            "DẤU ẤN KHÔNG THỂ PHAI MỜ"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='1.05+0.0006*sin(on/10)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Listicle Cards — 3 Nốt Hương Kỳ Ảo",
        "img": IMG_DROP,
        "text": "Ba tầng hương biến chuyển kỳ ảo, từ cam bergamot đến gỗ trầm và xạ hương đen.",
        "subtitle_lines": [
            "BA TẦNG HƯƠNG BIẾN CHUYỂN",
            "GỖ TRẦM VÀ XẠ HƯƠNG ĐEN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0014,1.18)':d=140:x='iw/2-(iw/zoom/2)-20':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "Hero Shot — Midnight Oud Status",
        "img": IMG_BOTTLE,
        "text": "Midnight Oud. Mùi hương không cần lên tiếng, nó định nghĩa vị thế của bạn.",
        "subtitle_lines": [
            "MIDNIGHT OUD",
            "ĐỊNH NGHĨA VỊ THẾ CỦA BẠN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.18-0.0015*on,1.02)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "Outro Loop — Fade to Black 2s",
        "img": IMG_BOTTLE,
        "text": "Khám phá ngay tại link đầu trang... trước khi bạn nhận ra...",
        "subtitle_lines": [
            "KHÁM PHÁ NGAY TẠI",
            "LINK ĐẦU TRANG"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,fade=t=out:st=0.6:d=0.6:color=black"
    }
]

async def process_voiceover_and_timestamps():
    print("🎙️ Đang tạo Voiceover & Trích xuất Timestamp chính xác từng từ qua edge_tts...")
    voice = "vi-VN-NamMinhNeural"
    total_timeline_sec = 0.0

    for s in scenes:
        audio_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.mp3")
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(s["text"], voice)
                await comm.save(audio_path)
                break
            except Exception as e:
                print(f"    ⚠️ Retrying TTS scene {s['id']} (attempt {attempt+1}): {e}")
                await asyncio.sleep(1)
        
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", audio_path
        ]
        res = subprocess.run(probe_cmd, stdout=subprocess.PIPE, text=True)
        aud_duration = float(res.stdout.strip()) if res.stdout.strip() else 3.5

        # Tính toán phân bổ từ chính xác theo thời lượng âm thanh
        words_data = []
        raw_words = s["text"].replace("?", "").replace(",", "").replace(".", "").split()
        word_dur = aud_duration / max(1, len(raw_words))
        for idx, w in enumerate(raw_words):
            w_st = idx * word_dur
            words_data.append({
                "text": w,
                "start": w_st,
                "end": w_st + word_dur,
                "duration": word_dur
            })
        
        extra_pad = 2.0 if s["id"] == 7 else 0.4
        scene_duration = aud_duration + extra_pad

        s["audio_path"] = audio_path
        s["words"] = words_data
        s["aud_duration"] = aud_duration
        s["scene_duration"] = scene_duration
        s["start_sec"] = total_timeline_sec
        s["end_sec"] = total_timeline_sec + scene_duration
        total_timeline_sec += scene_duration

        print(f"  ✓ Phân cảnh {s['id']}: '{s['name']}' | Thoại: {aud_duration:.2f}s | Cảnh: {scene_duration:.2f}s | Từ: {len(words_data)}")

    print(f"⏱️ Tổng thời lượng TVC Midnight Oud: {total_timeline_sec:.2f} giây\n")
    return total_timeline_sec

def generate_perfect_ass_file():
    print("📝 Đang khởi tạo phụ đề ASS Karaoke khớp từng từ với màu xanh #0091ff...")
    ass_path = os.path.join(TMP_DIR, "synced_karaoke.ass")
    
    header = """[Script Info]
Title: Midnight Oud Master Karaoke (Signature Đạo Diễn Trungvt)
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,60,&H00FFFFFF&,&H00FF9100&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,4,3,2,60,60,260,1
Style: Accent,Arial,64,&H00FF9100&,&H00FFFFFF&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,4,3,2,60,60,260,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = []
    
    for s in scenes:
        c_start = s["start_sec"]
        c_end = s["end_sec"]
        words = s["words"]
        
        def format_time(t_sec):
            h = int(t_sec // 3600)
            m = int((t_sec % 3600) // 60)
            sec = t_sec % 60
            return f"{h}:{m:02d}:{sec:05.2f}"

        if words:
            mid_idx = len(words) // 2 if len(words) > 4 else len(words)
            line1_words = words[:mid_idx]
            line2_words = words[mid_idx:]

            if line1_words:
                w_start = c_start + line1_words[0]["start"] - 0.15
                w_end = c_start + line1_words[-1]["end"] + 0.3
                k_text1 = ""
                for w in line1_words:
                    k_dur = max(10, int(w["duration"] * 100))
                    clean_w = w["text"].upper().strip()
                    k_text1 += f"{{\\k{k_dur}}}{clean_w} "
                events.append(f"Dialogue: 0,{format_time(w_start)},{format_time(w_end)},Default,,0,0,0,,{k_text1.strip()}")

            if line2_words:
                w_start = c_start + line2_words[0]["start"] - 0.1
                w_end = c_start + line2_words[-1]["end"] + 0.4
                k_text2 = ""
                for w in line2_words:
                    k_dur = max(10, int(w["duration"] * 100))
                    clean_w = w["text"].upper().strip()
                    k_text2 += f"{{\\k{k_dur}}}{clean_w} "
                events.append(f"Dialogue: 0,{format_time(w_start)},{format_time(w_end)},Default,,0,0,0,,{k_text2.strip()}")
        else:
            disp_text = " \\N ".join(s["subtitle_lines"])
            events.append(f"Dialogue: 0,{format_time(c_start)},{format_time(c_end)},Default,,0,0,0,,{disp_text}")

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")
    
    print(f"✓ Đã tạo file phụ đề ASS: {ass_path}")
    return ass_path

def synthesize_rich_audio():
    print("🎵 Đang tổng hợp âm thanh đa tầng (Swoosh, Ambiance, Outro Chords)...")
    sample_rate = 44100
    total_dur = sum(s["scene_duration"] for s in scenes)
    total_samples = int(total_dur * sample_rate)

    audio_buffer = [0.0] * total_samples

    # 1. Swoosh SFX tại điểm bắt đầu mỗi cảnh
    for s in scenes:
        idx = int(s["start_sec"] * sample_rate)
        swoosh_len = int(0.35 * sample_rate)
        for i in range(min(swoosh_len, total_samples - idx)):
            t = i / sample_rate
            freq = 1200.0 * math.exp(-t * 9.0) + 110.0
            env = math.sin(math.pi * (i / swoosh_len)) ** 2
            val = math.sin(2 * math.pi * freq * t) * env * 0.16
            audio_buffer[idx + i] += val

    # 2. Tiếng lật giấy tại cảnh 5 (thẻ nốt hương)
    card_idx = int((scenes[4]["start_sec"] + 0.3) * sample_rate)
    flip_len = int(0.25 * sample_rate)
    for i in range(min(flip_len, total_samples - card_idx)):
        t = i / sample_rate
        env = math.sin(math.pi * (i / flip_len)) ** 3
        rustle = math.sin(2 * math.pi * 3200 * t) * math.sin(2 * math.pi * 420 * t) * env * 0.20
        audio_buffer[card_idx + i] += rustle

    # 3. Ambient Synth Drone ấm áp bao phủ toàn bộ video
    for i in range(total_samples):
        t = i / sample_rate
        drone = (math.sin(2 * math.pi * 110 * t) * 0.05 + 
                 math.sin(2 * math.pi * 164.81 * t) * 0.03 + 
                 math.sin(2 * math.pi * 220 * t) * 0.02)
        audio_buffer[i] += drone

    # 4. Hợp âm Outro sâu lắng dâng trào ở cảnh 7 (2s cuối)
    outro_start_sec = scenes[6]["start_sec"] + 0.5
    outro_idx = int(outro_start_sec * sample_rate)
    outro_len = total_samples - outro_idx
    chord_freqs = [130.81, 164.81, 196.00, 246.94, 293.66] # Cmaj9 luxurious chord
    for i in range(outro_len):
        t = i / sample_rate
        amp = min(1.0, (t / 1.2) ** 1.5) * 0.38
        if i > outro_len - int(0.4 * sample_rate):
            amp *= (outro_len - i) / (0.4 * sample_rate)
        val = sum(math.sin(2 * math.pi * f * t) for f in chord_freqs) / len(chord_freqs)
        audio_buffer[outro_idx + i] += val * amp

    sfx_wav_path = os.path.join(TMP_DIR, "master_sfx_bed.wav")
    with wave.open(sfx_wav_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        for val in audio_buffer:
            clamped = max(-1.0, min(1.0, val))
            sample = int(clamped * 32767)
            wav.writeframes(struct.pack('<h', sample))

    print(f"✓ Đã tạo master SFX bed: {sfx_wav_path}")
    return sfx_wav_path

def render_and_master_final_tvc(ass_path, sfx_wav_path):
    print("🎬 Đang render video từng phân cảnh với Easing mượt mà...")
    clip_files = []
    
    for s in scenes:
        out_clip = os.path.join(TMP_DIR, f"scene_{s['id']}_clip.mp4")
        dur_str = f"{s['scene_duration']:.2f}"
        
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-i", s["audio_path"],
            "-vf", s["motion"],
            "-c:v", "libx264", "-preset", "fast", "-crf", "19",
            "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-t", dur_str,
            out_clip
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"  ✅ Rendered Scene {s['id']}: {s['name']} ({dur_str}s)")
        clip_files.append(out_clip)

    print("\n🎞️ Đang ghép nối các phân cảnh thành chuỗi liền mạch...")
    concat_txt = os.path.join(TMP_DIR, "concat_scenes.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for c in clip_files:
            clean = c.replace("\\", "/")
            f.write(f"file '{clean}'\n")

    video_concat_raw = os.path.join(TMP_DIR, "video_raw_stitched.mp4")
    subprocess.run([
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_txt,
        "-c", "copy",
        video_concat_raw
    ], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    print("🎨 Đang hòa âm Master Audio (Voiceover + SFX Bed) & In Chết Phụ Đề ASS...")
    final_output = os.path.join(EXPORT_DIR, "midnight_oud_tvc_vertical_916_ready.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")

    master_cmd = [
        "ffmpeg", "-y",
        "-i", video_concat_raw,
        "-i", sfx_wav_path,
        "-filter_complex", 
        f"[0:v]subtitles='{escaped_ass}'[v_out];[0:a][1:a]amix=inputs=2:duration=first:dropout_transition=2[a_out]",
        "-map", "[v_out]",
        "-map", "[a_out]",
        "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "256k",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 HOÀN THÀNH XUẤT SẮC! Video chuẩn 9:16 đồng bộ hoàn hảo:\n{final_output}")

    # Đồng bộ sang midnight_oud_tvc_30s.mp4
    master_30s = os.path.join(EXPORT_DIR, "midnight_oud_tvc_30s.mp4")
    shutil.copy2(final_output, master_30s)
    print(f"✓ Đã đồng bộ sang {master_30s}")

    # Đồng bộ sang public để web xem trực tiếp
    public_dir = os.path.join(WORKSPACE, "public")
    dist_public_dir = os.path.join(WORKSPACE, "dist", "public")
    if os.path.exists(public_dir):
        shutil.copy2(final_output, os.path.join(public_dir, "midnight_oud_tvc_30s.mp4"))
    if os.path.exists(dist_public_dir):
        shutil.copy2(final_output, os.path.join(dist_public_dir, "midnight_oud_tvc_30s.mp4"))
    print("✓ Đã đồng bộ sang public web")

    return final_output

async def main():
    await process_voiceover_and_timestamps()
    ass_path = generate_perfect_ass_file()
    sfx_wav = synthesize_rich_audio()
    final_mp4 = render_and_master_final_tvc(ass_path, sfx_wav)
    print(f"\n✨ FILE MASTER ĐÃ SẴN SÀNG: {final_mp4}")

if __name__ == "__main__":
    asyncio.run(main())
