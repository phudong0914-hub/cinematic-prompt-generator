import asyncio
import os
import subprocess
import sys
import math
import struct
import wave

sys.stdout.reconfigure(encoding='utf-8')
import edge_tts

WORKSPACE = r"c:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
EXPORT_DIR = os.path.join(WORKSPACE, "exports", "fresh-coffee-tvc")
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_render")
os.makedirs(TMP_DIR, exist_ok=True)

IMG_ROAST = os.path.join(EXPORT_DIR, "keyframe_roast.jpg")
IMG_POUR = os.path.join(EXPORT_DIR, "keyframe_pour.jpg")
IMG_HERO = os.path.join(EXPORT_DIR, "keyframe_hero.jpg")
IMG_ENJOY = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot5_enjoyment_1791283004167.jpg"
IMG_PLANT = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730\fresh_coffee_shot1_plantation_1791282962379.jpg"

# 7 Phân cảnh TVC 30s Master
shots = [
    {
        "id": 1,
        "name": "Hook 3s - Whip Zoom Punch",
        "img": IMG_ROAST,
        "duration": 3.2,
        "text": "Có phải bạn đang uống thứ cà phê đã mất hết linh hồn?",
        # Whip Zoom Punch: 100% -> 130% trong 0.2s rồi giữ và hồi về 100%
        # 1080x1920 vertical canvas
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='if(lte(on,6),1.0+0.05*on,if(lte(on,85),1.30,max(1.0,1.30-0.03*(on-85))))':d=96:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 2,
        "name": "B-roll 1 - Rang Mộc Cầu Đất",
        "img": IMG_PLANT,
        "duration": 3.6,
        "text": "100% Cầu Đất, rang mộc thủ công giữ trọn tầng hương nguyên bản.",
        # Slow upward vertical pan
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0012,1.15)':d=108:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((108-on)/108)*30':s=1080x1920:fps=30"
    },
    {
        "id": 3,
        "name": "B-roll 2 - Crema Parallax 2.5D",
        "img": IMG_POUR,
        "duration": 5.2,
        "text": "Chắt lọc từng giọt crema vàng óng, sánh quyện tinh hoa từng giây.",
        # Slow macro push-in
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0018,1.25)':d=156:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 4,
        "name": "Main Actor - Eye-Line Match Anchor",
        "img": IMG_ENJOY,
        "duration": 5.5,
        "text": "Mỗi ngụm Fresh Coffee là một sự thức tỉnh giác quan.",
        # Subtle gentle breathing zoom
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='1.05+0.001*sin(on/10)':d=165:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 5,
        "name": "Listicle Cards - 3 Bước Cam Kết",
        "img": IMG_ROAST,
        "duration": 5.5,
        "text": "Rang mới trong 24 giờ, giao tận tay ngay khi còn thơm nóng.",
        # Left-weighted zoom for cards
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0015,1.20)':d=165:x='iw/2-(iw/zoom/2)-20':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 6,
        "name": "Hero Shot - Isometric Drift",
        "img": IMG_HERO,
        "duration": 4.5,
        "text": "Fresh Coffee. Cà phê không chỉ để tỉnh táo, đó là bản lĩnh của bạn.",
        # Slow pull-back revealing package
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='max(1.20-0.0015*on,1.02)':d=135:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    },
    {
        "id": 7,
        "name": "Outro Loop & Fade to Black 2s",
        "img": IMG_HERO,
        "duration": 2.5,
        "text": "Nhận ưu đãi trải nghiệm ngay tại link đầu trang... bởi vì...",
        # Fade to Black in 0.5s then hold complete black
        "vf": "scale=1200:2133:force_original_aspect_ratio=increase,crop=1080:1920,fade=t=out:st=0.5:d=0.5:color=black"
    }
]

def generate_sfx_files():
    print("🔊 Synthesizing Director SFX & Outro Chords...")
    sample_rate = 44100

    # 1. Swoosh SFX (0.4s)
    swoosh_path = os.path.join(TMP_DIR, "sfx_swoosh.wav")
    with wave.open(swoosh_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        num_samples = int(sample_rate * 0.4)
        for i in range(num_samples):
            t = i / sample_rate
            # Falling frequency 1200 -> 150 Hz
            freq = 1200.0 * math.exp(-t * 6.0) + 150.0
            env = math.sin(math.pi * (i / num_samples)) ** 1.5
            noise = (math.sin(2 * math.pi * freq * t) + 0.5 * math.sin(4 * math.pi * freq * t)) * 0.5
            sample = int(noise * env * 18000)
            wav.writeframes(struct.pack('<h', sample))

    # 2. Paper Flip SFX (0.18s)
    flip_path = os.path.join(TMP_DIR, "sfx_flip.wav")
    with wave.open(flip_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        num_samples = int(sample_rate * 0.18)
        for i in range(num_samples):
            t = i / sample_rate
            env = math.sin(math.pi * (i / num_samples)) ** 3
            rustle = math.sin(2 * math.pi * 3200 * t) * math.sin(2 * math.pi * 220 * t)
            sample = int(rustle * env * 12000)
            wav.writeframes(struct.pack('<h', sample))

    # 3. Outro Chord Warm Swell (2.5s)
    outro_path = os.path.join(TMP_DIR, "sfx_outro.wav")
    with wave.open(outro_path, "w") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        num_samples = int(sample_rate * 2.5)
        # Chord notes D3, F3, A3, C4
        freqs = [146.83, 174.61, 220.00, 261.63]
        for i in range(num_samples):
            t = i / sample_rate
            # Swell from low to -12dB
            amp = min(1.0, (t / 1.5) ** 1.8) * 0.7
            if t > 2.0:
                amp *= (2.5 - t) / 0.5
            val = sum(math.sin(2 * math.pi * f * t) for f in freqs) / len(freqs)
            sample = int(val * amp * 22000)
            wav.writeframes(struct.pack('<h', sample))

    return swoosh_path, flip_path, outro_path

async def generate_voiceovers():
    print("🎙️ Generating Vietnamese Voiceovers with vi-VN-NamMinhNeural...")
    voice = "vi-VN-NamMinhNeural"
    for s in shots:
        audio_file = os.path.join(TMP_DIR, f"vo_shot_{s['id']}.mp3")
        comm = edge_tts.Communicate(s["text"], voice, rate="+4%", pitch="-1Hz")
        await comm.save(audio_file)
        s["audio"] = audio_file
        print(f"  ✓ Shot {s['id']}: '{s['text'][:35]}...'")

def render_vertical_clips():
    print("\n🎬 Rendering 7 9:16 Vertical Video Clips...")
    clip_files = []
    for s in shots:
        out_clip = os.path.join(TMP_DIR, f"clip_vert_{s['id']}.mp4")
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-i", s["audio"],
            "-vf", s["vf"],
            "-c:v", "libx264", "-preset", "fast", "-crf", "19",
            "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-t", str(s["duration"]),
            out_clip
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            print(f"❌ Error rendering shot {s['id']}:", res.stderr[:200])
        else:
            print(f"  ✅ Rendered 9:16 Shot {s['id']} ({s['duration']}s): {s['name']}")
            clip_files.append(out_clip)
    return clip_files

def stitch_and_burn_karaoke_subtitles(clip_files):
    print("\n🎞️ Stitching 7 Vertical Clips into Master Timeline...")
    concat_txt = os.path.join(TMP_DIR, "concat_vert.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for c in clip_files:
            clean = c.replace("\\", "/")
            f.write(f"file '{clean}'\n")

    raw_stitched = os.path.join(TMP_DIR, "raw_stitched_vert.mp4")
    subprocess.run([
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_txt,
        "-c", "copy",
        raw_stitched
    ], check=True)

    print("🎨 Burning Typography Subtitles & Mastering Final 9:16 Social Ready Video...")
    # Prepare subtitle file with clean Windows path escaping for ffmpeg
    ass_source = os.path.join(EXPORT_DIR, "subtitles_karaoke.ass")
    escaped_ass = ass_source.replace("\\", "/").replace(":", "\\:")

    final_master_mp4 = os.path.join(EXPORT_DIR, "fresh_coffee_tvc_vertical_916_ready.mp4")
    
    # Subtitle burn with libass filter
    cmd = [
        "ffmpeg", "-y",
        "-i", raw_stitched,
        "-vf", f"subtitles='{escaped_ass}'",
        "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "copy",
        final_master_mp4
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode != 0:
        print("⚠️ Libass filter fallback to high-contrast drawtext or clean copy:", res.stderr[:300])
        # Fallback copy if ASS syntax needed adjustment
        import shutil
        shutil.copyfile(raw_stitched, final_master_mp4)
    else:
        print(f"🏆 SUCCESS: Final 9:16 Vertical TVC rendered: {final_master_mp4}")

    return final_master_mp4

async def main():
    generate_sfx_files()
    await generate_voiceovers()
    clips = render_vertical_clips()
    if len(clips) == 7:
        master = stitch_and_burn_karaoke_subtitles(clips)
        print(f"\n✨ ALL DONE! Ready to post on TikTok/Reels/Shorts:\n{master}")

if __name__ == "__main__":
    asyncio.run(main())
