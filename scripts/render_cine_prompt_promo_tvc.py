#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
render_cine_prompt_promo_tvc.py
─────────────────────────────────────────────────────────────────────────────
HOLLYWOOD-GRADE VERTICAL PROMO TVC (9:16) CHO CINE PROMPT PRO v2.0
Được sản xuất bởi Studio Engine Đạo Diễn Trungvt (0836.384.168)
Website: https://cine-prompt-pro.vercel.app/
─────────────────────────────────────────────────────────────────────────────
"""

import os
import sys
import subprocess
import math
import array
import wave
from gtts import gTTS

sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
PROMO_DIR = os.path.join(WORKSPACE, "exports", "cine-prompt-pro-promo")
TMP_DIR = os.path.join(PROMO_DIR, "tmp_build")
FONTS_DIR = os.path.join(PROMO_DIR, "fonts")
os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(FONTS_DIR, exist_ok=True)

# 5 Phân Cảnh Master
SCENES = [
    {
        "id": 1,
        "name": "Scene 1: Hook 3s Đánh trúng nỗi đau",
        "img": os.path.join(PROMO_DIR, "keyframe_1_hook.jpg"),
        "text": "Dừng ngay việc mò mẫm viết prompt AI như đánh xổ số! Bạn đang lãng phí hàng giờ vô ích.",
        "caption": "DỪNG VIẾT PROMPT MÒ MẪM! • HÃY LÀM CHỦ ĐIỆN ẢNH",
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.18)':d=165:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "Scene 2: Đạo Diễn Trungvt & Cine Prompt Pro",
        "img": os.path.join(PROMO_DIR, "keyframe_2_director_trungvt_916.jpg"),
        "text": "Khám phá Cine Prompt Pro v2.0 — Hệ điều hành Đạo diễn Số đầu tiên được chuẩn hóa bởi Đạo Diễn Trungvt.",
        "caption": "ĐẠO DIỄN TRUNGVT • CHUẨN HÓA CINE PROMPT PRO",
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.10)':d=175:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "Scene 3: Thẩm định Quang học & Multi-Model",
        "img": os.path.join(PROMO_DIR, "keyframe_3_optics.jpg"),
        "text": "Tự động tính toán khẩu độ, tiêu cự ống kính anamorphic và định tuyến chuẩn xác sang Veo 3, Midjourney v8 và Seedance 2.5.",
        "caption": "OPTICAL LINTER • ĐỊNH TUYẾN VEO 3, MIDJOURNEY, SEEDANCE",
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0010,1.16)':d=180:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((on)/180)*18':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Scene 4: Motion Craft Engine & CapCut Draft",
        "img": os.path.join(PROMO_DIR, "keyframe_4_motion.jpg"),
        "text": "Kho 157 công thức chuyển động độc quyền, tự động xuất timeline CapCut Draft vi giây triệt tiêu 100% lỗi chồng track.",
        "caption": "157 CÔNG THỨC CHUYỂN ĐỘNG • XUẤT TIMELINE 1 CHẠM",
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0009,1.15)':d=175:x='iw/2-(iw/zoom/2)-((on)/175)*20':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Scene 5: Kêu gọi hành động & Link Website",
        "img": os.path.join(PROMO_DIR, "keyframe_5_cta.jpg"),
        "text": "Truy cập ngay cine-prompt-pro.vercel.app để biến mọi ý tưởng thành siêu phẩm điện ảnh triệu view!",
        "caption": "TRUY CẬP NGAY • CINE-PROMPT-PRO.VERCEL.APP",
        "motion": "scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.20)':d=170:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    }
]

def log(msg):
    print(msg)
    sys.stdout.flush()

def get_audio_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        file_path
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
    return float(res.stdout.strip())

def synthesize_all_voiceovers():
    log("🎙️ [1/6] Tổng hợp lồng tiếng tiếng Việt & xử lý EQ Đạo Diễn điện ảnh...")
    for s in SCENES:
        raw_mp3 = os.path.join(TMP_DIR, f"raw_vo_{s['id']}.mp3")
        proc_wav = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.wav")
        
        # 1. Sinh voice bằng gTTS nếu chưa có
        if not os.path.exists(raw_mp3) or os.path.getsize(raw_mp3) == 0:
            tts = gTTS(text=s['text'], lang='vi', slow=False)
            tts.save(raw_mp3)
        
        # 2. Xử lý ấm giọng qua FFmpeg
        cmd_proc = [
            "ffmpeg", "-y",
            "-i", raw_mp3,
            "-af", "atempo=1.06,bass=g=4:f=120,treble=g=2:f=3200,volume=1.3",
            proc_wav
        ]
        subprocess.run(cmd_proc, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        
        dur = get_audio_duration(proc_wav)
        s['vo_file'] = proc_wav
        s['vo_dur'] = dur
        s['dur'] = max(4.8, round(dur + 0.8, 1))
        s['d_frames'] = int(s['dur'] * 30)
        s['motion'] = s['motion'].replace(":d=165:", f":d={s['d_frames']}:").replace(":d=175:", f":d={s['d_frames']}:").replace(":d=180:", f":d={s['d_frames']}:").replace(":d=170:", f":d={s['d_frames']}:")
        log(f"   ✅ Phân cảnh {s['id']}: Thoại {dur:.2f}s ➔ Clip {s['dur']}s ({s['d_frames']} frames)")

def generate_cinematic_bgm(output_path, duration=28.0):
    log(f"🎵 [2/6] Tạo nhạc nền Cinematic Ambient Synthwave ({duration:.1f}s)...")
    sample_rate = 44100
    num_samples = int(sample_rate * duration)
    
    buf = array.array('h')
    for i in range(num_samples):
        t = i / sample_rate
        sub = 0.35 * math.sin(2 * math.pi * 55 * t)
        pad1 = 0.22 * math.sin(2 * math.pi * 110 * t)
        pad2 = 0.18 * math.sin(2 * math.pi * 164.81 * t)
        pad3 = 0.15 * math.sin(2 * math.pi * 220 * t + 0.5)
        pulse_env = (math.sin(2 * math.pi * 2 * t) ** 4)
        pulse = 0.20 * math.sin(2 * math.pi * 82.4 * t) * pulse_env
        fade_in = min(1.0, t / 1.5)
        fade_out = min(1.0, (duration - t) / 2.0)
        vol = fade_in * fade_out * 0.40
        
        sample = (sub + pad1 + pad2 + pad3 + pulse) * vol * 28000
        val = int(max(-32767, min(32767, sample)))
        buf.append(val)
        buf.append(val)
    
    with wave.open(output_path, "w") as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(buf.tobytes())
    log("   ✅ Đã sinh nhạc nền thành công!")

def generate_karaoke_ass(ass_path):
    log("📝 [3/6] Tạo phụ đề ASS Karaoke chữ Sigmar IN HOA viền đen & highlight xanh...")
    
    header = """[Script Info]
Title: Cine Prompt Pro Promo Master
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: HookCaption,Sigmar,50,&H00FFFFFF,&H0010B981,&H00000000,&H90000000,1,0,0,0,100,100,0,0,1,4.0,2.5,2,40,40,260,1
Style: SubtitleKaraoke,Sigmar,44,&H0000FFFF,&H0010B981,&H00000000,&H80000000,1,0,0,0,100,100,0,0,1,3.5,2.0,2,40,40,160,1
Style: BadgeURL,Sigmar,46,&H0000E6FF,&H0010B981,&H00000000,&HA0000000,1,0,0,0,100,100,0,0,1,3.5,2.0,8,40,40,180,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = []
    
    xfade = 0.4
    t_curr = 0.0
    for idx, s in enumerate(SCENES):
        t_start = t_curr
        t_end = t_start + s['dur']
        t_curr = t_end - xfade
        s['start_time'] = t_start
        s['end_time'] = t_end
        
        def fmt(sec):
            m = int(sec // 60)
            sec_rem = sec % 60
            s_int = int(sec_rem)
            cs = int((sec_rem - s_int) * 100)
            return f"0:{m:02d}:{s_int:02d}.{cs:02d}"
        
        events.append(f"Dialogue: 1,{fmt(t_start)},{fmt(t_end)},HookCaption,,0,0,0,,{s['caption']}")
        words = s['text'].split()
        k_words = []
        w_dur = int((s['vo_dur'] / max(1, len(words))) * 100)
        for w in words:
            k_words.append(f"{{\\k{w_dur}}}{w}")
        k_text = " ".join(k_words)
        events.append(f"Dialogue: 0,{fmt(t_start + 0.15)},{fmt(t_start + 0.15 + s['vo_dur'])},SubtitleKaraoke,,0,0,0,,{k_text}")
        
        if s['id'] == 5:
            events.append(f"Dialogue: 2,{fmt(t_start)},{fmt(t_end)},BadgeURL,,0,0,0,,🌐 CINE-PROMPT-PRO.VERCEL.APP")

    with open(ass_path, "w", encoding="utf-8") as f:
        f.write(header + "\n".join(events) + "\n")
    log("   ✅ Đã tạo file ASS Karaoke thành công!")

def render_scene_clip(scene, out_clip_path):
    img = scene['img']
    motion = scene['motion']
    dur = scene['dur']
    
    cmd = [
        "ffmpeg", "-y",
        "-loop", "1",
        "-i", img,
        "-t", str(dur),
        "-vf", motion,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-crf", "19",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        out_clip_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

def stitch_all_scenes(rendered_clips, final_video_path, bgm_path, ass_path):
    log("🎬 [4/6] Ghép nối các phân cảnh bằng chuyển cảnh điện ảnh Crossfade...")
    
    xfade = 0.4
    offsets = []
    accum = 0.0
    for idx in range(len(SCENES) - 1):
        if idx == 0:
            accum = SCENES[0]['dur'] - xfade
        else:
            accum = accum + SCENES[idx]['dur'] - xfade
        offsets.append(round(accum, 2))
    
    inputs = []
    for c in rendered_clips:
        inputs.extend(["-i", c])
    
    filter_complex = (
        f"[0:v][1:v]xfade=transition=fade:duration={xfade}:offset={offsets[0]}[v01];"
        f"[v01][2:v]xfade=transition=fade:duration={xfade}:offset={offsets[1]}[v02];"
        f"[v02][3:v]xfade=transition=fade:duration={xfade}:offset={offsets[2]}[v03];"
        f"[v03][4:v]xfade=transition=fade:duration={xfade}:offset={offsets[3]}[v_raw]"
    )
    
    raw_stitched_video = os.path.join(TMP_DIR, "video_stitched_raw.mp4")
    cmd_stitch = [
        "ffmpeg", "-y"
    ] + inputs + [
        "-filter_complex", filter_complex,
        "-map", "[v_raw]",
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-crf", "19",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        raw_stitched_video
    ]
    subprocess.run(cmd_stitch, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    log("   ✅ Ghép video hoàn tất!")
    
    # 2. Xây dựng Audio Track: Voiceover gộp theo timeline
    log("🎧 [5/6] Mix đa tầng âm thanh (Voiceover + BGM Ducking -16dB)...")
    vo_inputs = []
    vo_filter = []
    for idx, s in enumerate(SCENES):
        vo_inputs.extend(["-i", s['vo_file']])
        delay_ms = int(s['start_time'] * 1000 + 150)
        vo_filter.append(f"[{idx}:a]adelay={delay_ms}|{delay_ms}[a{idx}];")
    
    vo_mix_str = "".join([f"[a{i}]" for i in range(len(SCENES))]) + f"amix=inputs={len(SCENES)}:dropout_transition=0:normalize=0[vo_mix]"
    vo_mixed_path = os.path.join(TMP_DIR, "vo_full_mixed.wav")
    
    cmd_vo = ["ffmpeg", "-y"] + vo_inputs + [
        "-filter_complex", "".join(vo_filter) + vo_mix_str,
        "-map", "[vo_mix]",
        vo_mixed_path
    ]
    subprocess.run(cmd_vo, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    log("   ✅ Mix voiceover hoàn tất!")
    
    # 3. Đốt Subtitle ASS và mix Video + BGM + Voiceover
    log("🔥 [6/6] Đốt phụ đề Sigmar Karaoke & Render bản Master cuối cùng...")
    
    ass_filter_path = ass_path.replace("\\", "/").replace(":", "\\:")
    fonts_dir_path = FONTS_DIR.replace("\\", "/").replace(":", "\\:")
    
    logo_badge_path = os.path.join(PROMO_DIR, "logo_circle_badge.png")
    
    final_cmd = [
        "ffmpeg", "-y",
        "-i", raw_stitched_video,
        "-i", vo_mixed_path,
        "-i", bgm_path,
        "-i", logo_badge_path,
        "-filter_complex",
        f"[0:v]ass='{ass_filter_path}':fontsdir='{fonts_dir_path}'[v_sub];"
        f"[v_sub][3:v]overlay=x=60:y=75[v_out];"
        f"[2:a]volume=0.22[bgm_ducked];"
        f"[1:a][bgm_ducked]amix=inputs=2:duration=first:dropout_transition=0:weights=1.6 0.35[a_out]",
        "-map", "[v_out]",
        "-map", "[a_out]",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "18",
        "-c:a", "aac",
        "-b:a", "192k",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        final_video_path
    ]
    subprocess.run(final_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    log("   ✅ Render Master Video hoàn tất!")

def main():
    log("=" * 70)
    log("🎬 KHỞI ĐỘNG XƯỞNG DỰNG VIDEO QUẢNG CÁO CINE PROMPT PRO v2.0")
    log("🎯 Điểm đích: https://cine-prompt-pro.vercel.app/")
    log("📐 Tỉ lệ khung hình: 9:16 Vertical Video (1080x1920)")
    log("👤 Chỉ đạo sản xuất: Đạo Diễn Trungvt (0836.384.168)")
    log("=" * 70)
    
    # 1. Voiceover
    synthesize_all_voiceovers()
    
    # 2. Subtitles Karaoke ASS
    ass_path = os.path.join(PROMO_DIR, "promo_karaoke_sigmar.ass")
    generate_karaoke_ass(ass_path)
    
    # Tính tổng thời lượng sau khi trừ 4 đoạn xfade 0.4s
    total_dur = sum(s['dur'] for s in SCENES) - (4 * 0.4)
    log(f"\n⏱️ Tổng thời lượng video master: {total_dur:.2f} giây")
    
    # 3. BGM
    bgm_path = os.path.join(TMP_DIR, "cinematic_ambient_synth.wav")
    generate_cinematic_bgm(bgm_path, duration=total_dur + 1.0)
    
    # 4. Render từng Scene Clip
    log("\n🎞️ Render từng phân đoạn video 2.5D Camera Drift...")
    rendered_clips = []
    for s in SCENES:
        clip_path = os.path.join(TMP_DIR, f"clip_scene_{s['id']}.mp4")
        log(f"   ▶️ Render clip #{s['id']}: {s['name']} ({s['dur']}s)...")
        render_scene_clip(s, clip_path)
        rendered_clips.append(clip_path)
        
    # 5. Ghép nối Master
    master_video = os.path.join(PROMO_DIR, "cine_prompt_pro_promo_master_916.mp4")
    stitch_all_scenes(rendered_clips, master_video, bgm_path, ass_path)
    
    log("\n" + "=" * 70)
    log(f"🎉 XUẤT BẢN THÀNH CÔNG SIÊU PHẨM VIDEO QUẢNG CÁO!")
    log(f"📁 Tệp video Master: {master_video}")
    size_mb = os.path.getsize(master_video) / (1024 * 1024)
    log(f"📦 Dung lượng file: {size_mb:.2f} MB")
    log("🚀 Sẵn sàng đăng tải trực tiếp lên TikTok, Facebook Reels, YouTube Shorts!")
    log("=" * 70)

if __name__ == '__main__':
    main()
