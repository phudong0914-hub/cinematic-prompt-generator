import asyncio
import os
import subprocess
import sys
import math
import wave
import array
import shutil

sys.stdout.reconfigure(encoding='utf-8')
import edge_tts

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "midnight-oud-tvc")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_render")
FONTS_DIR = os.path.join(EXPORT_DIR, "fonts")
LUT_FILE = os.path.join(EXPORT_DIR, "MIDNIGHT_OUD_TEAL_AMBER.cube")
os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(FONTS_DIR, exist_ok=True)

# 5 Visual Assets Độc Bản (Không Trùng Lặp Cảnh)
IMG_DROP = os.path.join(EXPORT_DIR, "keyframe_macro_drop.jpg")
IMG_ACTOR = os.path.join(EXPORT_DIR, "keyframe_actor_portrait.jpg")
IMG_MIST = os.path.join(EXPORT_DIR, "keyframe_mist_ritual.jpg")
IMG_STRATA = os.path.join(EXPORT_DIR, "keyframe_ingredients_strata.jpg")
IMG_BOTTLE = os.path.join(EXPORT_DIR, "keyframe_bottle_hero.jpg")

# 7 Phân Cảnh Master Chuẩn 30.0 Giây (30,000,000 µs)
scenes = [
    {
        "id": 1,
        "name": "Hook 3s — Amber Droplet",
        "img": IMG_DROP,
        "text": "Có phải bạn đang tìm mùi hương của quyền lực?",
        "subtitle_lines": [
            "CÓ PHẢI BẠN ĐANG TÌM",
            "MÙI HƯƠNG CỦA QUYỀN LỰC...?"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='if(lte(on,10),1.0+0.03*on,if(lte(on,80),1.30,max(1.0,1.30-0.03*(on-80))))':d=96:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30",
        "fixed_duration": 3.2
    },
    {
        "id": 2,
        "name": "B-roll 1 — Tuxedo In Shadows",
        "img": IMG_ACTOR,
        "text": "Không cần ồn ào... nhưng khiến cả khán phòng phải ngoái nhìn.",
        "subtitle_lines": [
            "KHÔNG CẦN ỒN ÀO...",
            "KHIẾN CẢ KHÁN PHÒNG PHẢI NGOÁI NHÌN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.15)':d=120:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((120-on)/120)*25':s=1080x1920:fps=30",
        "fixed_duration": 4.0
    },
    {
        "id": 3,
        "name": "B-roll 2 — Perfume Mist Ritual",
        "img": IMG_MIST,
        "text": "Đậm đà nguyên bản, chắt lọc từ những thân trầm trăm năm.",
        "subtitle_lines": [
            "ĐẬM ĐÀ NGUYÊN BẢN",
            "CHẮT LỌC TỪ THÂN TRẦM TRĂM NĂM"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0015,1.20)':d=144:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30",
        "fixed_duration": 4.8
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
        "motion": "scale=1400:2488:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='1.10+0.0006*sin(on/10)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)-20':s=1080x1920:fps=30",
        "fixed_duration": 4.5
    },
    {
        "id": 5,
        "name": "Listicle Cards — 3 Nốt Hương Kỳ Ảo",
        "img": IMG_STRATA,
        "text": "Ba tầng hương biến chuyển, từ cam bergamot đến gỗ trầm và xạ hương đen.",
        "subtitle_lines": [
            "BA TẦNG HƯƠNG BIẾN CHUYỂN KỲ ẢO",
            "CAM BERGAMOT • HOA HỒNG • TRẦM HƯƠNG"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.16)':d=180:x='iw/2-(iw/zoom/2)-25':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30",
        "fixed_duration": 6.0
    },
    {
        "id": 6,
        "name": "Hero Shot — Midnight Oud Status",
        "img": IMG_BOTTLE,
        "text": "Midnight Oud. Mùi hương không cần lên tiếng, nó định nghĩa vị thế của bạn.",
        "subtitle_lines": [
            "MIDNIGHT OUD",
            "NÓ ĐỊNH NGHĨA VỊ THẾ CỦA BẠN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.18-0.0015*on,1.02)':d=150:x='iw/2-(iw/zoom/2)':y='ih/2-(iw/zoom/2)':s=1080x1920:fps=30",
        "fixed_duration": 5.0
    },
    {
        "id": 7,
        "name": "Outro Loop — Fade to Black 2.0s Hold",
        "img": IMG_BOTTLE,
        "text": "Khám phá ngay tại link đầu trang... nếu bạn thực sự...",
        "subtitle_lines": [
            "KHÁM PHÁ NGAY TẠI",
            "LINK ĐẦU TRANG"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,fade=t=out:st=0.5:d=0.5:color=black",
        "fixed_duration": 2.5
    }
]

async def process_voiceover_and_timestamps():
    print("🎙️ Đang tạo Voiceover AI tự nhiên & Phân bổ Timestamp vi giây...")
    voice = "vi-VN-NamMinhNeural"
    total_timeline_sec = 0.0

    for s in scenes:
        audio_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.mp3")
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(s["text"], voice, rate="+4%")
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
        aud_duration = float(res.stdout.strip()) if res.stdout.strip() else 3.0

        scene_duration = s["fixed_duration"]
        words_data = []
        raw_words = s["text"].replace("?", "").replace(",", "").replace(".", "").split()
        word_dur = min(aud_duration, scene_duration - 0.3) / max(1, len(raw_words))
        for idx, w in enumerate(raw_words):
            w_st = idx * word_dur
            words_data.append({
                "text": w,
                "start": w_st,
                "end": w_st + word_dur,
                "duration": word_dur
            })

        s["audio_path"] = audio_path
        s["words"] = words_data
        s["aud_duration"] = aud_duration
        s["scene_duration"] = scene_duration
        s["start_sec"] = total_timeline_sec
        s["end_sec"] = total_timeline_sec + scene_duration
        total_timeline_sec += scene_duration

        print(f"  ✓ Cảnh {s['id']}: '{s['name']}' | Khung: {s['start_sec']:.2f}s ➔ {s['end_sec']:.2f}s (Thời lượng: {scene_duration:.2f}s)")

    print(f"\n⏱️ Tổng thời lượng Master TVC: {total_timeline_sec:.2f} giây (Đúng chuẩn 30.0s Cinema!)\n")
    return total_timeline_sec

def generate_perfect_ass_file():
    print("📝 Đang khởi tạo phụ đề ASS chuẩn Font Sigmar IN HOA & Highlight Xanh #0091ff...")
    ass_path = os.path.join(TMP_DIR, "synced_karaoke.ass")
    
    # ASS Header: Fontname Sigmar, PrimaryColour White (&H00FFFFFF&), SecondaryColour Blue #0091ff (&H00FF9100&)
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
Style: Default,Sigmar,56,&H00FFFFFF&,&H00FF9100&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,4.5,3.0,2,60,60,260,1
Style: Accent,Sigmar,62,&H00FF9100&,&H00FFFFFF&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,5.0,3.5,2,60,60,260,1

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
                w_start = c_start + line1_words[0]["start"] - 0.15 # Hiện sớm 0.15s (Tâm lý học chữ nhấn)
                w_end = c_start + line1_words[-1]["end"] + 0.3
                k_text1 = ""
                for w in line1_words:
                    k_dur = max(10, int(w["duration"] * 100))
                    clean_w = w["text"].upper().strip()
                    k_text1 += f"{{\\k{k_dur}}}{clean_w} "
                events.append(f"Dialogue: 0,{format_time(w_start)},{format_time(w_end)},Default,,0,0,0,,{k_text1.strip()}")

            if line2_words:
                w_start = c_start + line2_words[0]["start"] - 0.10
                w_end = min(c_end - 0.1, c_start + line2_words[-1]["end"] + 0.35)
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
    
    print(f"✓ Đã tạo file phụ đề ASS Sigmar: {ass_path}")
    return ass_path

def synthesize_rich_audio():
    print("🎵 Đang tổng hợp âm thanh điện ảnh đa tầng (Sub-bass, Swoosh, Perfume Mist, Outro Chords)...")
    sample_rate = 44100
    total_dur = sum(s["scene_duration"] for s in scenes)
    total_samples = int(total_dur * sample_rate)

    audio_buffer = [0.0] * total_samples

    # 1. Swoosh va đập mạnh tại Hook 0.0s (swoosh impact to nhất video)
    hook_len = int(0.45 * sample_rate)
    for i in range(hook_len):
        t = i / sample_rate
        freq = 1500.0 * math.exp(-t * 8.0) + 90.0
        env = math.sin(math.pi * (i / hook_len)) ** 1.8
        audio_buffer[i] += math.sin(2 * math.pi * freq * t) * env * 0.30

    # 2. Swoosh nhẹ nhàng chuyển cảnh ở các cảnh tiếp theo
    for s in scenes[1:]:
        idx = int(s["start_sec"] * sample_rate)
        swoosh_len = int(0.28 * sample_rate)
        for i in range(min(swoosh_len, total_samples - idx)):
            t = i / sample_rate
            freq = 900.0 * math.exp(-t * 10.0) + 110.0
            env = math.sin(math.pi * (i / swoosh_len)) ** 2
            audio_buffer[idx + i] += math.sin(2 * math.pi * freq * t) * env * 0.14

    # 3. Tiếng xịt nước hoa (Perfume Mist Hisss) tại cảnh 3
    mist_idx = int((scenes[2]["start_sec"] + 0.4) * sample_rate)
    mist_len = int(0.35 * sample_rate)
    for i in range(min(mist_len, total_samples - mist_idx)):
        t = i / sample_rate
        env = math.sin(math.pi * (i / mist_len)) ** 2
        # White noise sweep mô phỏng tia xịt nước hoa mịn
        mist_sound = (math.sin(2 * math.pi * 3800 * t) * 0.5 + math.sin(2 * math.pi * 7200 * t) * 0.5) * env * 0.18
        audio_buffer[mist_idx + i] += mist_sound

    # 4. Tiếng lật giấy tại cảnh 5 (thẻ 3 nốt hương)
    card_idx = int((scenes[4]["start_sec"] + 0.3) * sample_rate)
    flip_len = int(0.25 * sample_rate)
    for i in range(min(flip_len, total_samples - card_idx)):
        t = i / sample_rate
        env = math.sin(math.pi * (i / flip_len)) ** 3
        rustle = math.sin(2 * math.pi * 3200 * t) * math.sin(2 * math.pi * 420 * t) * env * 0.18
        audio_buffer[card_idx + i] += rustle

    # 5. Ambient Sub-Bass Drone huyền bí bao phủ toàn bộ video
    for i in range(total_samples):
        t = i / sample_rate
        drone = (math.sin(2 * math.pi * 55 * t) * 0.04 + 
                 math.sin(2 * math.pi * 110 * t) * 0.03 + 
                 math.sin(2 * math.pi * 164.81 * t) * 0.02)
        audio_buffer[i] += drone

    # 6. Hợp âm Outro sâu lắng dâng trào ở cảnh 7 (2.0s Fade to Black)
    outro_start_sec = scenes[6]["start_sec"] + 0.3
    outro_idx = int(outro_start_sec * sample_rate)
    outro_len = total_samples - outro_idx
    chord_freqs = [130.81, 164.81, 196.00, 246.94, 293.66, 392.00] # Cmaj9 hoàng gia
    for i in range(outro_len):
        t = i / sample_rate
        amp = min(1.0, (t / 1.0) ** 1.5) * 0.45
        if i > outro_len - int(0.3 * sample_rate):
            amp *= (outro_len - i) / (0.3 * sample_rate)
        val = sum(math.sin(2 * math.pi * f * t) for f in chord_freqs) / len(chord_freqs)
        audio_buffer[outro_idx + i] += val * amp

    # Chuyển đổi siêu tốc qua array.array (chưa tới 1 giây!)
    sfx_wav_path = os.path.join(TMP_DIR, "master_sfx_bed.wav")
    raw_data = array.array('h', [int(max(-1.0, min(1.0, v)) * 32767) for v in audio_buffer]).tobytes()
    
    with wave.open(sfx_wav_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(raw_data)

    print(f"✓ Đã tạo master SFX bed siêu tốc: {sfx_wav_path}")
    return sfx_wav_path

def render_and_master_final_tvc(ass_path, sfx_wav_path):
    print("🎬 Đang render video từng phân cảnh với 3D LUT Hollywood & Easing...")
    clip_files = []
    
    escaped_lut = LUT_FILE.replace("\\", "/").replace(":", "\\:")
    
    for s in scenes:
        out_clip = os.path.join(TMP_DIR, f"scene_{s['id']}_clip.mp4")
        dur_str = f"{s['scene_duration']:.2f}"
        
        # Áp dụng chuyển động camera + chỉnh màu 3D LUT
        motion_with_lut = f"{s['motion']},lut3d='{escaped_lut}'"
        
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-i", s["audio_path"],
            "-vf", motion_with_lut,
            "-c:v", "libx264", "-preset", "fast", "-crf", "18",
            "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-t", dur_str,
            out_clip
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"  ✅ Rendered Cảnh {s['id']}: {s['name']} ({dur_str}s)")
        clip_files.append(out_clip)

    print("\n🎞️ Đang ghép nối chuỗi phân cảnh hoàn hảo...")
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

    print("🎨 Đang in chết phụ đề Sigmar Karaoke (#0091ff) & Hòa âm Master Audio...")
    final_output = os.path.join(EXPORT_DIR, "midnight_oud_tvc_vertical_916_ready.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")
    escaped_fonts = FONTS_DIR.replace("\\", "/").replace(":", "\\:")

    # Burn-in phụ đề ASS sử dụng đúng font Sigmar từ fontsdir
    master_cmd = [
        "ffmpeg", "-y",
        "-i", video_concat_raw,
        "-i", sfx_wav_path,
        "-filter_complex", 
        f"[0:v]subtitles='{escaped_ass}':fontsdir='{escaped_fonts}'[v_out];[0:a][1:a]amix=inputs=2:duration=first:dropout_transition=2[a_out]",
        "-map", "[v_out]",
        "-map", "[a_out]",
        "-c:v", "libx264", "-preset", "medium", "-crf", "17",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "256k",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 SIÊU PHẨM HOÀN TẤT! Video 9:16 đồng bộ hoàn hảo:\n{final_output}")

    # Đồng bộ sang các vị trí phân phối
    master_30s = os.path.join(EXPORT_DIR, "midnight_oud_tvc_30s.mp4")
    root_30s = os.path.join(WORKSPACE, "midnight_oud_tvc_30s.mp4")
    dist_30s = os.path.join(WORKSPACE, "dist", "midnight_oud_tvc_30s.mp4")
    public_30s = os.path.join(WORKSPACE, "public", "midnight_oud_tvc_30s.mp4")
    dist_public_30s = os.path.join(WORKSPACE, "dist", "public", "midnight_oud_tvc_30s.mp4")

    for dest in [master_30s, root_30s, dist_30s, public_30s, dist_public_30s]:
        shutil.copy2(final_output, dest)
        print(f"✓ Đồng bộ thành công: {dest}")

    return final_output

async def main():
    await process_voiceover_and_timestamps()
    ass_path = generate_perfect_ass_file()
    sfx_wav = synthesize_rich_audio()
    final_mp4 = render_and_master_final_tvc(ass_path, sfx_wav)
    print(f"\n✨ PHIÊN BẢN HOÀN HẢO ĐÃ SẴN SÀNG: {final_mp4}")

if __name__ == "__main__":
    asyncio.run(main())
