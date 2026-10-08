import asyncio
import os
import subprocess
import sys
import math
import wave
import struct

sys.stdout.reconfigure(encoding='utf-8')
import edge_tts

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "fresh-coffee-tvc")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_perfect_sync")
os.makedirs(TMP_DIR, exist_ok=True)

# Visual Assets
IMG_ROAST = os.path.join(EXPORT_DIR, "keyframe_roast.jpg")
IMG_POUR = os.path.join(EXPORT_DIR, "keyframe_pour.jpg")
IMG_HERO = os.path.join(EXPORT_DIR, "keyframe_hero.jpg")
IMG_ENJOY = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot5_enjoyment_1791283004167.jpg"
IMG_PLANT = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot1_plantation_1791282962379.jpg"

# 7 Phân cảnh TVC 30s Master hoàn chỉnh
scenes = [
    {
        "id": 1,
        "name": "Hook 3s",
        "img": IMG_ROAST,
        "text": "Có phải bạn đang uống thứ cà phê đã mất hết linh hồn?",
        "subtitle_lines": [
            "CÓ PHẢI BẠN ĐANG UỐNG",
            "CÀ PHÊ MẤT HẾT LINH HỒN?"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='if(lte(on,10),1.0+0.03*on,if(lte(on,90),1.30,max(1.0,1.30-0.03*(on-90))))':d=110:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "B-roll 1 - Rang Mộc",
        "img": IMG_PLANT,
        "text": "Một trăm phần trăm Cầu Đất, rang mộc thủ công giữ trọn tầng hương nguyên bản.",
        "subtitle_lines": [
            "100% CẦU ĐẤT",
            "RANG MỘC THỦ CÔNG NGUYÊN BẢN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.15)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((125-on)/125)*30':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "B-roll 2 - Crema Parallax",
        "img": IMG_POUR,
        "text": "Chắt lọc từng giọt crema vàng óng, sánh đậm tinh tế từng giây.",
        "subtitle_lines": [
            "CHẮT LỌC TỪNG GIỌT CREMA",
            "SÁNH ĐẬM TINH TẾ TỪNG GIÂY"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0016,1.22)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Main Actor - Thức Tỉnh",
        "img": IMG_ENJOY,
        "text": "Mỗi ngụm Fresh Coffee là một sự thức tỉnh giác quan.",
        "subtitle_lines": [
            "MỖI NGỤM FRESH COFFEE",
            "LÀ SỰ THỨC TỈNH GIÁC QUAN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='1.04+0.0008*sin(on/10)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Listicle Cards - 3 Bước Cam Kết",
        "img": IMG_ROAST,
        "text": "Bước một: rang mới trong ngày. Bước hai: giao tận tay khi còn thơm nóng.",
        "subtitle_lines": [
            "RANG MỚI TRONG NGÀY",
            "GIAO TẬN TAY KHI CÒN THƠM NÓNG"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0014,1.18)':d=135:x='iw/2-(iw/zoom/2)-25':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "Hero Shot - Bản Lĩnh",
        "img": IMG_HERO,
        "text": "Fresh Coffee. Cà phê không chỉ để tỉnh táo, đó là bản lĩnh của bạn.",
        "subtitle_lines": [
            "FRESH COFFEE",
            "ĐÓ LÀ BẢN LĨNH CỦA BẠN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.18-0.0015*on,1.02)':d=130:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "Outro Loop - Fade to Black 2s",
        "img": IMG_HERO,
        "text": "Trải nghiệm ngay tại Fresh Coffee chấm vi en... bởi vì...",
        "subtitle_lines": [
            "TRẢI NGHIỆM NGAY TẠI",
            "FRESHCOFFEE.VN"
        ],
        "motion": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,fade=t=out:st=0.6:d=0.6:color=black"
    }
]

async def process_voiceover_and_timestamps():
    print("🎙️ Đang tạo Voiceover & Trích xuất Timestamp chính xác từng từ...")
    voice = "vi-VN-NamMinhNeural"
    total_timeline_sec = 0.0

    for s in scenes:
        audio_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.mp3")
        words_data = []
        comm = edge_tts.Communicate(s["text"], voice, rate="+2%", pitch="-1Hz")
        
        with open(audio_path, "wb") as f_aud:
            async for chunk in comm.stream():
                if chunk["type"] == "audio":
                    f_aud.write(chunk["data"])
                elif chunk["type"] == "WordBoundary":
                    # offset and duration in 100-nanoseconds (1e-7 sec)
                    start_s = chunk["offset"] / 10_000_000.0
                    dur_s = chunk["duration"] / 10_000_000.0
                    words_data.append({
                        "text": chunk["text"],
                        "start": start_s,
                        "end": start_s + dur_s,
                        "duration": dur_s
                    })
        
        # Lấy độ dài file audio chính xác qua ffprobe
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", audio_path
        ]
        res = subprocess.run(probe_cmd, stdout=subprocess.PIPE, text=True)
        aud_duration = float(res.stdout.strip()) if res.stdout.strip() else 3.5
        
        # Thời lượng phân cảnh = thời lượng audio + padding thở tự nhiên (0.4s)
        # Riêng cảnh 7 thêm 1.5s đoạn tối cho nhạc outro
        extra_pad = 1.8 if s["id"] == 7 else 0.4
        scene_duration = aud_duration + extra_pad

        s["audio_path"] = audio_path
        s["words"] = words_data
        s["aud_duration"] = aud_duration
        s["scene_duration"] = scene_duration
        s["start_sec"] = total_timeline_sec
        s["end_sec"] = total_timeline_sec + scene_duration
        total_timeline_sec += scene_duration

        print(f"  ✓ Phân cảnh {s['id']}: '{s['name']}' | Thoại: {aud_duration:.2f}s | Cảnh: {scene_duration:.2f}s | Từ: {len(words_data)}")

    print(f"⏱️ Tổng thời lượng TVC: {total_timeline_sec:.2f} giây\n")
    return total_timeline_sec

def generate_perfect_ass_file():
    print("📝 Đang khởi tạo phụ đề ASS Karaoke khớp từng từ với màu xanh #0091ff...")
    ass_path = os.path.join(TMP_DIR, "synced_karaoke.ass")
    
    # Header ASS chuẩn định dạng 1080x1920
    # PrimaryColour: &H00FFFFFF& (Trắng)
    # SecondaryColour: &H00FF9100& (Xanh dương #0091ff trong BGR ASS)
    header = """[Script Info]
Title: Fresh Coffee Master Karaoke (Signature Đạo Diễn Trungvt)
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,62,&H00FFFFFF&,&H00FF9100&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,4,3,2,60,60,260,1
Style: Accent,Arial,66,&H00FF9100&,&H00FFFFFF&,&H00000000&,&H90000000&,1,0,0,0,100,100,2,0,1,4,3,2,60,60,260,1

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

        # Tạo chuỗi Karaoke \k tag dựa trên words
        if words:
            # Câu chia làm 2 dòng gọn gàng
            mid_idx = len(words) // 2 if len(words) > 4 else len(words)
            line1_words = words[:mid_idx]
            line2_words = words[mid_idx:]

            # Dòng 1
            if line1_words:
                w_start = c_start + line1_words[0]["start"] - 0.15 # Hiện sớm 0.15s
                w_end = c_start + line1_words[-1]["end"] + 0.3
                k_text1 = ""
                for w in line1_words:
                    k_dur = max(10, int(w["duration"] * 100)) # centiseconds
                    clean_w = w["text"].upper().strip()
                    k_text1 += f"{{\\k{k_dur}}}{clean_w} "
                events.append(f"Dialogue: 0,{format_time(w_start)},{format_time(w_end)},Default,,0,0,0,,{k_text1.strip()}")

            # Dòng 2
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
            # Fallback nếu không có words
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

    # Tạo buffer âm thanh SFX tổng thể
    audio_buffer = [0.0] * total_samples

    # 1. Swoosh SFX tại điểm bắt đầu mỗi cảnh
    for s in scenes:
        idx = int(s["start_sec"] * sample_rate)
        # Swoosh nhẹ 0.3s
        swoosh_len = int(0.3 * sample_rate)
        for i in range(min(swoosh_len, total_samples - idx)):
            t = i / sample_rate
            freq = 1100.0 * math.exp(-t * 8.0) + 120.0
            env = math.sin(math.pi * (i / swoosh_len)) ** 2
            val = math.sin(2 * math.pi * freq * t) * env * 0.18
            audio_buffer[idx + i] += val

    # 2. Tiếng lật giấy tại cảnh 5 (thẻ cam kết)
    card_idx = int((scenes[4]["start_sec"] + 0.3) * sample_rate)
    flip_len = int(0.2 * sample_rate)
    for i in range(min(flip_len, total_samples - card_idx)):
        t = i / sample_rate
        env = math.sin(math.pi * (i / flip_len)) ** 3
        rustle = math.sin(2 * math.pi * 2800 * t) * math.sin(2 * math.pi * 340 * t) * env * 0.22
        audio_buffer[card_idx + i] += rustle

    # 3. Hợp âm Outro sâu lắng dâng trào ở cảnh 7 (2s cuối)
    outro_start_sec = scenes[6]["start_sec"] + 0.5
    outro_idx = int(outro_start_sec * sample_rate)
    outro_len = total_samples - outro_idx
    chord_freqs = [146.83, 174.61, 220.00, 261.63, 329.63] # Dm9 chord ấm áp
    for i in range(outro_len):
        t = i / sample_rate
        # Nổi từ từ lên -12dB rồi fade nhẹ
        amp = min(1.0, (t / 1.2) ** 1.5) * 0.42
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
        
        # Render hình ảnh chuyển động kèm đúng audio giọng nói của cảnh đó
        # Tự động pad im lặng sau audio để đúng thời lượng scene_duration
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
    final_output = os.path.join(EXPORT_DIR, "fresh_coffee_tvc_vertical_916_ready.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")

    # Trộn audio voiceover sẵn có trong video với SFX bed
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
    return final_output

async def main():
    await process_voiceover_and_timestamps()
    ass_path = generate_perfect_ass_file()
    sfx_wav = synthesize_rich_audio()
    final_mp4 = render_and_master_final_tvc(ass_path, sfx_wav)
    print(f"\n✨ FILE MASTER ĐÃ SẴN SÀNG: {final_mp4}")

if __name__ == "__main__":
    asyncio.run(main())
