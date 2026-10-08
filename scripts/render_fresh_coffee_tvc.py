import asyncio
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Ensure edge-tts is importable
import edge_tts

conv_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\36ab9db7-39d5-4fb2-ba0c-f4a411943730"
workspace_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
output_dir = os.path.join(workspace_dir, "artifacts")
os.makedirs(output_dir, exist_ok=True)

# 1. Source images
img1 = os.path.join(conv_dir, "fresh_coffee_scene1_beans_1791280325564.jpg")
img2 = os.path.join(conv_dir, "fresh_coffee_scene2_espresso_1791280349607.jpg")
img3 = os.path.join(conv_dir, "fresh_coffee_scene3_milk_swirl_1791280378457.jpg")
img4 = os.path.join(conv_dir, "fresh_coffee_scene4_hero_brand_1791280403754.jpg")

# 2. Voiceover texts (4 Acts)
scenes = [
    {
        "id": 1,
        "img": img1,
        "text": "Mỗi sớm mai, tỉnh thức từ hương thơm thuần khiết nhất.",
        "duration": 3.75,
        # Slow cinematic push-in
        "filter": "scale=2400:1350,zoompan=z='min(zoom+0.0018,1.25)':d=113:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=30",
        "title": "SCENE 1: THE HOOK"
    },
    {
        "id": 2,
        "img": img2,
        "text": "Chắt lọc từng giọt đậm vị, sánh quyện tinh hoa.",
        "duration": 3.75,
        # Subtle upward tilt & slow zoom
        "filter": "scale=2400:1350,zoompan=z='min(zoom+0.0015,1.22)':d=113:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((113-on)/113)*45':s=1920x1080:fps=30",
        "title": "SCENE 2: THE CRAFT"
    },
    {
        "id": 3,
        "img": img3,
        "text": "Thổi bùng năng lượng, sảng khoái trọn vẹn từng giác quan!",
        "duration": 3.75,
        # Centered swirl focus
        "filter": "scale=2400:1350,zoompan=z='1.12+0.001*sin(on/15)':d=113:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=30",
        "title": "SCENE 3: THE SENSORY"
    },
    {
        "id": 4,
        "img": img4,
        "text": "Fresh Coffee. Tươi mới mỗi ngày. Bản lĩnh dẫn lối.",
        "duration": 4.0,
        # Smooth pull-back dolly out
        "filter": "scale=2400:1350,zoompan=z='max(1.22-0.0018*on,1.0)':d=120:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=30",
        "title": "SCENE 4: BRAND HERO"
    }
]

async def generate_voiceovers():
    print("🎙️ Generating Vietnamese Voiceovers with Edge Neural TTS...")
    voice = "vi-VN-NamMinhNeural"
    for s in scenes:
        audio_path = os.path.join(output_dir, f"vo_scene_{s['id']}.mp3")
        communicate = edge_tts.Communicate(s["text"], voice, rate="+2%", pitch="-1Hz")
        await communicate.save(audio_path)
        s["audio"] = audio_path
        print(f"  ✓ Voiceover Scene {s['id']}: '{s['text']}' saved.")

def render_scenes():
    rendered_clips = []
    print("\n🎬 Rendering 4 Cinematic Video Scenes with FFmpeg...")
    for s in scenes:
        clip_path = os.path.join(output_dir, f"clip_scene_{s['id']}.mp4")
        # FFmpeg command: Ken Burns camera motion + voiceover audio + high quality H.264
        cmd = [
            "ffmpeg", "-y",
            "-loop", "1", "-i", s["img"],
            "-i", s["audio"],
            "-vf", s["filter"],
            "-c:v", "libx264", "-preset", "medium", "-crf", "18",
            "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-t", str(s["duration"]),
            clip_path
        ]
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if res.returncode != 0:
            print(f"❌ Error rendering clip {s['id']}:", res.stderr[:300])
        else:
            print(f"  ✅ Rendered Clip Scene {s['id']} ({s['duration']}s): {clip_path}")
            rendered_clips.append(clip_path)
    return rendered_clips

def stitch_master_tvc(clips):
    print("\n🎞️ Stitching Master 15s Commercial Video...")
    concat_list_file = os.path.join(output_dir, "concat_list.txt")
    with open(concat_list_file, "w", encoding="utf-8") as f:
        for c in clips:
            clean_path = c.replace("\\", "/")
            f.write(f"file '{clean_path}'\n")

    master_mp4 = os.path.join(output_dir, "fresh_coffee_tvc_15s.mp4")
    # Also copy to public/ so it can be streamed directly via web
    public_mp4 = os.path.join(workspace_dir, "public", "fresh_coffee_tvc_15s.mp4")
    dist_public_mp4 = os.path.join(workspace_dir, "dist", "public", "fresh_coffee_tvc_15s.mp4")
    dist_mp4 = os.path.join(workspace_dir, "dist", "fresh_coffee_tvc_15s.mp4")

    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_list_file,
        "-c", "copy",
        master_mp4
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode == 0:
        print(f"🏆 SUCCESS: Master Commercial Video generated: {master_mp4}")
        import shutil
        shutil.copyfile(master_mp4, public_mp4)
        if os.path.exists(os.path.dirname(dist_public_mp4)):
            shutil.copyfile(master_mp4, dist_public_mp4)
        if os.path.exists(os.path.dirname(dist_mp4)):
            shutil.copyfile(master_mp4, dist_mp4)
        print("✓ Synchronized video to public/fresh_coffee_tvc_15s.mp4 for web playback")
        return master_mp4
    else:
        print("❌ Error concatenating clips:", res.stderr[:300])
        return None

async def main():
    await generate_voiceovers()
    clips = render_scenes()
    if len(clips) == 4:
        stitch_master_tvc(clips)
        print("\n✨ ALL ASSETS GENERATED 100% COMPLETE!")

if __name__ == "__main__":
    asyncio.run(main())
