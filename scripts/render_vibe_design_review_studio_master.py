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
TMP_DIR = os.path.join(EXPORT_DIR, "tmp_studio_master")
FONTS_DIR = os.path.join(WORKSPACE, "exports", "midnight-oud-tvc", "fonts")
os.makedirs(TMP_DIR, exist_ok=True)

# 4 Keyframe Assets 9:16
IMG_S1 = os.path.join(EXPORT_DIR, "scene1_hook_linter.jpg")
IMG_S2 = os.path.join(EXPORT_DIR, "scene2_compiler_cards.jpg")
IMG_S3 = os.path.join(EXPORT_DIR, "scene3_vn_typography.jpg")
IMG_S4 = os.path.join(EXPORT_DIR, "scene4_endcard_cta.jpg")

# Bộ từ điển phiên âm song ngữ công nghệ chuẩn phòng thu (Tech Phonetics Lexicon)
TECH_PHONETICS = {
    "slop": "s-lốp",
    "repo": "kho mã nguồn",
    "repos": "các kho mã nguồn",
    "Vibe Design Harness": "Vai-bơ Đì-zai Hác-nịt",
    "teddiesloco": "tét-đi lô-cô",
    "Star": "thả sao",
    "UI": "giao diện U-I",
    "mili-giây": "mi-li-giây"
}

def normalize_tech_text(text: str) -> str:
    res = text
    for k, v in TECH_PHONETICS.items():
        res = res.replace(k, v)
    return res

scenes = [
    {
        "id": 1,
        "name": "Hook 3s - UI Anti-Slop Linter",
        "img": IMG_S1,
        "raw_text": "Bạn mệt mỏi vì giao diện AI toàn lỗi slop và font tiếng Việt vỡ hạt? Đừng bỏ qua repo này!",
        "tts_rate": "+3%",
        "motion_type": "zoom_punch"
    },
    {
        "id": 2,
        "name": "Core Breakdown - 5-Engine Studio Compiler",
        "img": IMG_S2,
        "raw_text": "Vibe Design Harness: Bộ linter UI siêu tốc dưới một mili-giây, cùng compiler tích hợp năm nền tảng AI thị giác hàng đầu.",
        "tts_rate": "+2%",
        "motion_type": "isometric_drift"
    },
    {
        "id": 3,
        "name": "Deep Verdict - CapCut Vietnamese Typography",
        "img": IMG_S3,
        "raw_text": "Đặc biệt: Động cơ CapCut Typography chuẩn hóa một trăm ba mươi tư ký tự tiếng Việt, xuất SVG trong suốt không lỗi dấu.",
        "tts_rate": "+2%",
        "motion_type": "kinetic_glide"
    },
    {
        "id": 4,
        "name": "Infinity Loop CTA - Star Repo GitHub",
        "img": IMG_S4,
        "raw_text": "Khám phá ngay tại GitHub teddiesloco. Star repo hôm nay để nâng tầm sản phẩm của bạn. Và...",
        "tts_rate": "+2%",
        "motion_type": "outro_pulse"
    }
]

VOICE = "vi-VN-NamMinhNeural"
from gtts import gTTS

async def generate_voiceovers():
    print(f"🎙️ Đang sinh Voiceover AI phòng thu (Vietnamese Neural Speech Engine)...")
    for s in scenes:
        s["tts_text"] = normalize_tech_text(s["raw_text"])
        mp3_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.mp3")
        wav_path = os.path.join(TMP_DIR, f"vo_scene_{s['id']}.wav")

        print(f"  → Phân cảnh {s['id']}: \"{s['tts_text']}\"")
        
        # Thử edge-tts trước, nếu mạng chặn 403 thì fallback gTTS kèm chuẩn hóa ngữ âm
        synthesized = False
        try:
            comm = edge_tts.Communicate(s["tts_text"], VOICE, rate=s["tts_rate"], pitch="-1Hz")
            await comm.save(mp3_path)
            synthesized = True
        except Exception as e:
            print(f"    (Edge-TTS connection busy, chuyển sang Vietnamese Speech Engine chuẩn hóa...)")
            tts = gTTS(text=s["tts_text"], lang='vi', slow=False)
            tts.save(mp3_path)
            synthesized = True

        # Chuyển đổi sang PCM WAV 44.1kHz Mono với nhịp điệu tự nhiên (atempo=1.05)
        cmd = [
            "ffmpeg", "-y", "-i", mp3_path,
            "-filter:a", "atempo=1.05",
            "-ar", "44100", "-ac", "1",
            wav_path
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        # Đo độ dài chính xác bằng wave
        with wave.open(wav_path, 'rb') as wf:
            frames = wf.getnframes()
            rate = wf.getframerate()
            s["audio_dur"] = frames / float(rate)
            s["wav_path"] = wav_path

        print(f"  ✓ Phân cảnh {s['id']} hoàn thành: {s['audio_dur']:.2f}s | {wav_path}")

def calculate_dynamic_timeline():
    print("\n⏱️ Tính toán Dynamic Audio Timeline (Anti-Overlap Engine)...")
    SAFE_GAP = 0.40  # Khoảng đệm an toàn giữa các câu thoại (400ms)
    cursor = 0.40    # Bắt đầu câu 1 ở 0.40s (nhường 0.4s đầu cho tiếng laser whoosh)

    for i, s in enumerate(scenes):
        s["vo_start"] = cursor
        s["vo_end"] = cursor + s["audio_dur"]
        # Thời lượng visual của cảnh phải bao phủ trọn vẹn giọng đọc + khoảng thở
        s["clip_dur"] = s["audio_dur"] + SAFE_GAP + 0.30
        print(f"  • Cảnh {s['id']}: Thoại {s['vo_start']:.2f}s -> {s['vo_end']:.2f}s | Visual Clip: {s['clip_dur']:.2f}s")
        cursor = s["vo_end"] + SAFE_GAP

    # Tổng thời lượng video
    total_dur = math.ceil(cursor + 0.8) # Thêm 0.8s outro fade
    print(f"  🎯 Tổng thời lượng Master Timeline chuẩn hóa: {total_dur:.1f}s")
    return total_dur

def synthesize_master_audio(total_dur):
    print(f"\n🎧 Đang hòa âm Master Audio Track ({total_dur:.1f}s) - Dynamic Ducking -24dB...")
    sample_rate = 44100
    total_samples = int(total_dur * sample_rate)

    vo_buf = [0.0] * total_samples

    # 1. Ghép giọng đọc vào timeline (ĐẢM BẢO TUYỆT ĐỐI KHÔNG CHỒNG TIẾNG)
    for s in scenes:
        with wave.open(s["wav_path"], 'rb') as wf:
            frames = wf.readframes(wf.getnframes())
            samples = array.array('h')
            samples.frombytes(frames)

            start_idx = int(s["vo_start"] * sample_rate)
            for k, val in enumerate(samples):
                pos = start_idx + k
                if pos < total_samples:
                    # Chuẩn hóa về float [-1.0, 1.0]
                    vo_buf[pos] = val / 32768.0

    # 2. Tạo nhạc nền Cyber Synthesizer + Ducking
    bgm_buf = [0.0] * total_samples
    sub_freq = 55.0  # Note A1
    pad_freqs = [220.0, 277.18, 329.63] # A major triad

    for idx in range(total_samples):
        t = idx / sample_rate

        # Kiểm tra xem tại vị trí t có tiếng thoại không để né âm (Ducking)
        has_voice = False
        for s in scenes:
            if s["vo_start"] - 0.1 <= t <= s["vo_end"] + 0.2:
                has_voice = True
                break

        # Hệ số âm lượng BGM: Khi có thoại hạ xuống 0.08 (~ -22dB), khi nghỉ đẩy lên 0.22
        duck_vol = 0.07 if has_voice else 0.20

        # Sub-bass + Pad chord
        sub = math.sin(2 * math.pi * sub_freq * t) * 0.12
        pad = sum(math.sin(2 * math.pi * f * t) for f in pad_freqs) * 0.04
        bgm_buf[idx] = (sub + pad) * duck_vol

    # 3. Micro-SFX công nghệ (Laser sweep ở giây 0.2, Snap ở chuyển cảnh)
    for s in scenes:
        sfx_pos = int((s["vo_start"] - 0.2) * sample_rate)
        if sfx_pos >= 0:
            for k in range(int(0.3 * sample_rate)):
                p = sfx_pos + k
                if p < total_samples:
                    st = k / sample_rate
                    f = 2200.0 * math.exp(-st * 12.0) + 300.0
                    bgm_buf[p] += math.sin(2 * math.pi * f * st) * math.exp(-st * 8.0) * 0.12

    # 4. Trộn Voice + BGM & xuất ra Master WAV
    mixed = array.array('h')
    for idx in range(total_samples):
        # Voice chiếm 85% headroom, BGM chiếm 15%
        val = (vo_buf[idx] * 0.90) + (bgm_buf[idx] * 0.80)
        val = max(-1.0, min(1.0, val))
        mixed.append(int(val * 32767.0))

    master_wav = os.path.join(TMP_DIR, "master_audio.wav")
    with wave.open(master_wav, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(mixed.tobytes())

    print(f"  ✓ Master Audio sạch không chồng tiếng: {master_wav}")
    return master_wav

def render_scene_video(s):
    out_clip = os.path.join(TMP_DIR, f"clip_{s['id']}.mp4")
    dur = s["clip_dur"]
    frames = int(dur * 30)

    # Hiệu ứng chuyển động camera 9:16 mượt mà
    if s["motion_type"] == "zoom_punch":
        zp = f"scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0008,1.15)':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    elif s["motion_type"] == "isometric_drift":
        zp = f"scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.12)':d={frames}:x='iw/2-(iw/zoom/2)+((on/{frames})*30)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"
    elif s["motion_type"] == "kinetic_glide":
        zp = f"scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0006,1.12)':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+((on/{frames})*30)':s=1080x1920:fps=30"
    else:
        zp = f"scale=1250:2222:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0005,1.10)':d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30"

    cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", s["img"],
        "-vf", zp,
        "-t", f"{dur:.2f}",
        "-c:v", "libx264", "-preset", "fast", "-pix_fmt", "yuv420p",
        out_clip
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    s["clip_path"] = out_clip
    print(f"  ✓ Video Phân cảnh {s['id']} rendered: {dur:.2f}s")

def assemble_master_video(total_dur, master_wav):
    print("\n🎬 Đang ghép toàn bộ phân cảnh và hòa âm Master Video...")
    # Tạo file concat list
    concat_txt = os.path.join(TMP_DIR, "concat.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for s in scenes:
            clip_esc = s["clip_path"].replace("\\", "/")
            f.write(f"file '{clip_esc}'\n")

    concat_mp4 = os.path.join(TMP_DIR, "video_concat.mp4")
    cmd_concat = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", concat_txt,
        "-c", "copy",
        concat_mp4
    ]
    subprocess.run(cmd_concat, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Ghép Video Concat với Master Audio WAV
    final_output = os.path.join(EXPORT_DIR, "vibe_design_review_studio_master.mp4")
    cmd_final = [
        "ffmpeg", "-y",
        "-i", concat_mp4,
        "-i", master_wav,
        "-c:v", "copy",
        "-c:a", "aac", "-b:a", "192k",
        "-shortest",
        final_output
    ]
    subprocess.run(cmd_final, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"\n🏆 XUẤT BẢN THÀNH CÔNG: {final_output}")
    return final_output

async def main():
    print("=" * 65)
    print("🎬 CINE PROMPT PRO — STUDIO AUDIO MASTER & ANTI-OVERLAP PIPELINE")
    print("=" * 65)
    await generate_voiceovers()
    total_dur = calculate_dynamic_timeline()
    master_wav = synthesize_master_audio(total_dur)

    print("\n🎥 Đang render các phân cảnh 9:16...")
    for s in scenes:
        render_scene_video(s)

    final_mp4 = assemble_master_video(total_dur, master_wav)
    print("\n✨ HOÀN TẤT 100%! Video không còn chồng tiếng, phát âm chuẩn đài truyền hình.")

if __name__ == "__main__":
    asyncio.run(main())
