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
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_hollywood")
os.makedirs(TMP_DIR, exist_ok=True)

IMG_ROAST = os.path.join(EXPORT_DIR, "keyframe_roast.jpg")
IMG_POUR = os.path.join(EXPORT_DIR, "keyframe_pour.jpg")
IMG_HERO = os.path.join(EXPORT_DIR, "keyframe_hero.jpg")
IMG_ENJOY = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot5_enjoyment_1791283004167.jpg"
IMG_PLANT = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot1_plantation_1791282962379.jpg"

scenes = [
    {
        "id": 1,
        "name": "Hook 3s",
        "img": IMG_ROAST,
        "text": "Có phải bạn đang uống thứ cà phê đã mất hết linh hồn?",
        "lines": [
            ["CÓ", "PHẢI", "BẠN", "ĐANG", "UỐNG"],
            ["CÀ", "PHÊ", "MẤT", "HẾT", "LINH", "HỒN?"]
        ],
        # Whip Zoom Punch: 100% -> 130% trong 0.2s rồi giữ
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='if(lte(on,8),1.0+0.035*on,if(lte(on,90),1.28,max(1.0,1.28-0.02*(on-90))))':d=110:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "B-roll 1 - Rang Mộc",
        "img": IMG_PLANT,
        "text": "Một trăm phần trăm Cầu Đất, rang mộc thủ công giữ trọn tầng hương nguyên bản.",
        "lines": [
            ["100%", "CẦU", "ĐẤT"],
            ["RANG", "MỘC", "THỦ", "CÔNG", "NGUYÊN", "BẢN"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.15)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((125-on)/125)*30':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "B-roll 2 - Crema Parallax",
        "img": IMG_POUR,
        "text": "Chắt lọc từng giọt crema vàng óng, sánh quyện tinh hoa từng giây.",
        "lines": [
            ["CHẮT", "LỌC", "TỪNG", "GIỌT", "CREMA"],
            ["SÁNH", "ĐẬM", "TINH", "TẾ", "TỪNG", "GIÂY"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0016,1.22)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Main Actor - Thức Tỉnh",
        "img": IMG_ENJOY,
        "text": "Mỗi ngụm Fresh Coffee là một sự thức tỉnh giác quan.",
        "lines": [
            ["MỖI", "NGỤM", "FRESH", "COFFEE"],
            ["LÀ", "SỰ", "THỨC", "TỈNH", "GIÁC", "QUAN"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='1.04+0.0008*sin(on/10)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Listicle Cards - 3 Bước Cam Kết",
        "img": IMG_ROAST,
        "text": "Bước một: rang mới trong ngày. Bước hai: giao tận tay khi còn thơm nóng.",
        "lines": [
            ["BƯỚC", "1:", "RANG", "MỚI", "TRONG", "NGÀY"],
            ["BƯỚC", "2:", "GIAO", "KHI", "CÒN", "THƠM", "NÓNG"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0014,1.18)':d=135:x='iw/2-(iw/zoom/2)-20':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "Hero Shot - Bản Lĩnh",
        "img": IMG_HERO,
        "text": "Fresh Coffee. Cà phê không chỉ để tỉnh táo, đó là bản lĩnh của bạn.",
        "lines": [
            ["FRESH", "COFFEE"],
            ["ĐÓ", "LÀ", "BẢN", "LĨNH", "CỦA", "BẠN"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.18-0.0015*on,1.02)':d=130:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "Outro Loop - Fade to Black 2s",
        "img": IMG_HERO,
        "text": "Trải nghiệm ngay tại Fresh Coffee chấm vi en... bởi vì...",
        "lines": [
            ["TRẢI", "NGHIỆM", "NGAY", "TẠI"],
            ["FRESHCOFFEE.VN"]
        ],
        "base_vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,fade=t=out:st=0.8:d=0.6:color=black"
    }
]

def prepare_voiceovers():
    print("🎙️ Đang nạp Voiceover có sẵn & Đo đạc thời lượng từng phân cảnh...")
    timeline_cursor = 0.0

    for s in scenes:
        audio_path = os.path.join(WORKSPACE, "exports", "fresh-coffee-tvc", "tmp_perfect_sync", f"vo_scene_{s['id']}.mp3")
        
        # Đo độ dài thực
        probe_cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", audio_path
        ]
        res = subprocess.run(probe_cmd, stdout=subprocess.PIPE, text=True)
        aud_duration = float(res.stdout.strip()) if res.stdout.strip() else 3.5

        # Đệm thở đầu 0.25s, đệm đuôi 0.4s (cảnh 7 đệm 2.0s cho outro music)
        lead_pad = 0.25
        tail_pad = 2.0 if s["id"] == 7 else 0.45
        scene_duration = lead_pad + aud_duration + tail_pad

        padded_audio = os.path.join(TMP_DIR, f"voice_padded_{s['id']}.wav")
        pad_cmd = [
            "ffmpeg", "-y",
            "-i", audio_path,
            "-af", f"adelay={int(lead_pad * 1000)}|{int(lead_pad * 1000)},apad=pad_dur={tail_pad}",
            "-t", f"{scene_duration:.2f}",
            padded_audio
        ]
        subprocess.run(pad_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        s["audio_padded"] = padded_audio
        s["aud_duration"] = aud_duration
        s["lead_pad"] = lead_pad
        s["scene_duration"] = scene_duration
        s["start_sec"] = timeline_cursor
        s["end_sec"] = timeline_cursor + scene_duration
        timeline_cursor += scene_duration

        print(f"  ✓ Cảnh {s['id']}: '{s['name']}' | Thoại: {aud_duration:.2f}s | Cảnh: {scene_duration:.2f}s")

    print(f"⏱️ Tổng thời lượng TVC: {timeline_cursor:.2f}s\n")
    return timeline_cursor

def build_karaoke_ass():
    print("📝 Đang tạo phụ đề Karaoke Sigmar với độ chính xác tuyệt đối...")
    ass_path = os.path.join(TMP_DIR, "hollywood_karaoke.ass")
    
    header = """[Script Info]
Title: Fresh Coffee Hollywood Karaoke (Signature Đạo Diễn Trungvt)
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: SignatureMain,Arial,64,&H00FFFFFF&,&H00FF9100&,&H00000000&,&HA0000000&,1,0,0,0,100,100,2,0,1,4.5,3.0,2,60,60,280,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = []

    def sec_to_ass(t):
        h = int(t // 3600)
        m = int((t % 3600) // 60)
        s = t % 60
        return f"{h}:{m:02d}:{s:05.2f}"

    for s in scenes:
        c_start = s["start_sec"]
        lead = s["lead_pad"]
        aud_dur = s["aud_duration"]
        lines = s["lines"]

        # Tổng số từ trong câu
        all_words = [w for l in lines for w in l]
        total_words = len(all_words)
        # Thời gian trung bình mỗi từ (centiseconds)
        k_per_word = int((aud_dur / max(1, total_words)) * 100)

        # Thoại bắt đầu tại: c_start + lead
        # Phụ đề xuất hiện sớm hơn thoại 0.15s
        sub_appear = max(0.0, c_start + lead - 0.15)
        sub_disappear = c_start + lead + aud_dur + 0.35

        # Dựng karaoke cho 2 dòng
        line1_k = " ".join([f"{{\\k{k_per_word}}}{w}" for w in lines[0]])
        line2_k = " ".join([f"{{\\k{k_per_word}}}{w}" for w in lines[1]]) if len(lines) > 1 else ""

        full_k = f"{line1_k} \\N {line2_k}" if line2_k else line1_k
        events.append(f"Dialogue: 0,{sec_to_ass(sub_appear)},{sec_to_ass(sub_disappear)},SignatureMain,,0,0,0,,{full_k}")

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")

    print(f"✓ Đã tạo phụ đề Karaoke ASS chuẩn xác: {ass_path}")
    return ass_path

def build_hollywood_sfx():
    print("🎵 Đang hòa âm SFX Bed điện ảnh (Swoosh, Paper Flip, Outro Chord)...")
    sample_rate = 44100
    total_dur = sum(s["scene_duration"] for s in scenes)
    total_samples = int(total_dur * sample_rate)
    buf = [0.0] * total_samples

    # 1. Flash Zoom Swoosh SFX tại đầu mỗi cảnh
    for i, s in enumerate(scenes):
        idx = int(s["start_sec"] * sample_rate)
        # Swoosh nhẹ 0.28s
        sw_len = int(0.28 * sample_rate)
        for j in range(min(sw_len, total_samples - idx)):
            t = j / sample_rate
            freq = 1200.0 * math.exp(-t * 9.0) + 140.0
            env = (math.sin(math.pi * (j / sw_len))) ** 2
            val = math.sin(2 * math.pi * freq * t) * env * 0.16
            buf[idx + j] += val

    # 2. Paper flip SFX tại Cảnh 5
    card_idx = int((scenes[4]["start_sec"] + scenes[4]["lead_pad"] + 0.1) * sample_rate)
    card_len = int(0.18 * sample_rate)
    for j in range(min(card_len, total_samples - card_idx)):
        t = j / sample_rate
        env = (math.sin(math.pi * (j / card_len))) ** 3
        rustle = math.sin(2 * math.pi * 3200 * t) * math.sin(2 * math.pi * 260 * t) * env * 0.20
        buf[card_idx + j] += rustle

    # 3. Outro Chord dâng trào ở Cảnh 7
    outro_idx = int((scenes[6]["start_sec"] + 0.6) * sample_rate)
    outro_len = total_samples - outro_idx
    chord = [146.83, 174.61, 220.00, 261.63, 329.63]
    for j in range(outro_len):
        t = j / sample_rate
        amp = min(1.0, (t / 1.5) ** 1.6) * 0.40
        if j > outro_len - int(0.5 * sample_rate):
            amp *= (outro_len - j) / (0.5 * sample_rate)
        val = sum(math.sin(2 * math.pi * f * t) for f in chord) / len(chord)
        buf[outro_idx + j] += val * amp

    sfx_path = os.path.join(TMP_DIR, "hollywood_sfx.wav")
    with wave.open(sfx_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        for v in buf:
            sample = int(max(-1.0, min(1.0, v)) * 32767)
            wav.writeframes(struct.pack('<h', sample))

    print(f"✓ Đã tạo master SFX bed: {sfx_path}")
    return sfx_path

def render_hollywood_master(ass_path, sfx_path):
    print("🎬 Đang render 7 phân cảnh với Flash Zoom & Chuyển động điện ảnh...")
    clips = []
    num_scenes = len(scenes)

    for i, s in enumerate(scenes):
        clip_out = os.path.join(TMP_DIR, f"hollywood_clip_{s['id']}.mp4")
        dur_str = f"{s['scene_duration']:.2f}"
        
        # Thêm Flash Zoom (Fade in trắng 0.18s ở đầu cảnh, Fade out trắng 0.18s ở cuối cảnh)
        # Trừ cảnh 1 không fade in trắng đầu, trừ cảnh 7 fade out đen
        filters = [s["base_vf"]]
        
        if i > 0:
            # Flash in trắng mượt
            filters.append("fade=t=in:st=0:d=0.18:color=white")
        
        if i < num_scenes - 1:
            # Flash out trắng mượt trước khi sang cảnh mới
            end_f = s["scene_duration"] - 0.18
            filters.append(f"fade=t=out:st={end_f:.2f}:d=0.18:color=white")
            
        vf_chain = ",".join(filters)

        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-i", s["audio_padded"],
            "-vf", vf_chain,
            "-c:v", "libx264", "-preset", "fast", "-crf", "18",
            "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-t", dur_str,
            clip_out
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"  ✅ Clip {s['id']}: {s['name']} ({dur_str}s)")
        clips.append(clip_out)

    print("\n🎞️ Đang ghép nối liên hoàn các phân cảnh...")
    concat_txt = os.path.join(TMP_DIR, "concat_hw.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for c in clips:
            clean = c.replace("\\", "/")
            f.write(f"file '{clean}'\n")

    stitched_video = os.path.join(TMP_DIR, "hw_stitched.mp4")
    subprocess.run([
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_txt,
        "-c", "copy",
        stitched_video
    ], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    print("🎨 Đang hoàn thiện Master: Burn Phụ Đề Sigmar Xanh & Hòa Âm SFX...")
    final_output = os.path.join(EXPORT_DIR, "fresh_coffee_tvc_vertical_916_ready.mp4")
    escaped_ass = ass_path.replace("\\", "/").replace(":", "\\:")

    master_cmd = [
        "ffmpeg", "-y",
        "-i", stitched_video,
        "-i", sfx_path,
        "-filter_complex",
        f"[0:v]subtitles='{escaped_ass}'[v_out];[0:a][1:a]amix=inputs=2:duration=first:dropout_transition=2[a_out]",
        "-map", "[v_out]",
        "-map", "[a_out]",
        "-c:v", "libx264", "-preset", "medium", "-crf", "17",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "256k",
        final_output
    ]
    subprocess.run(master_cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 ĐÃ XUẤT BẢN THÀNH CÔNG TVC HOÀN CHỈNH:\n{final_output}")
    return final_output

def main():
    prepare_voiceovers()
    ass_file = build_karaoke_ass()
    sfx_file = build_hollywood_sfx()
    render_hollywood_master(ass_file, sfx_file)

if __name__ == "__main__":
    main()
