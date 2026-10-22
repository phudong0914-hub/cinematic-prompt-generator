#!/usr/bin/env python3
"""
video_use_audio_smoother.py
─────────────────────────────────────────────────────────────────────────────
Tinh hoa tích hợp từ repo browser-use/video-use:
1. 30ms Micro-Crossfade (Anti-Pop/Click Audio Smoothing).
2. Auto Silence & Dead Space Remover (Cắt khoảng lặng & từ đệm).
3. Cut-Boundary QA (Tự động kiểm tra frame tại vết cắt).
─────────────────────────────────────────────────────────────────────────────
"""

import sys
import os
import subprocess
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

def apply_30ms_declicker(input_audio, output_audio, duration_sec=None):
    """Áp dụng 30ms afade in & out chống nổ pop âm thanh"""
    if duration_sec is None:
        cmd_dur = [
            "ffprobe", "-v", "error",
            "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1",
            input_audio
        ]
        res = subprocess.run(cmd_dur, stdout=subprocess.PIPE, text=True, check=True)
        duration_sec = float(res.stdout.strip())

    fade_dur = 0.03
    out_start = max(0.0, duration_sec - fade_dur)
    afade_filter = f"afade=t=in:ss=0:d={fade_dur},afade=t=out:st={out_start:.3f}:d={fade_dur}"

    cmd = [
        "ffmpeg", "-y",
        "-i", input_audio,
        "-af", afade_filter,
        "-c:a", "pcm_s16le",
        output_audio
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return output_audio

def detect_and_remove_dead_air(input_video, output_video, noise_db=-30, min_silence=0.35, keep_breath=0.18):
    """Tự động phát hiện và gọt sạch khoảng lặng trong video thô"""
    print(f"🔍 Đang quét khoảng lặng (Dead Air < {noise_db}dB, duration > {min_silence}s)...")
    cmd_detect = [
        "ffmpeg", "-hide_banner",
        "-i", input_video,
        "-af", f"silencedetect=noise={noise_db}dB:d={min_silence}",
        "-f", "null", "-"
    ]
    res = subprocess.run(cmd_detect, stderr=subprocess.PIPE, text=True)
    logs = res.stderr

    start_times = [float(x) for x in re.findall(r"silence_start:\s*([\d.]+)", logs)]
    end_matches = re.findall(r"silence_end:\s*([\d.]+)\s*\|\s*silence_duration:\s*([\d.]+)", logs)
    
    silences = []
    for i, (end_t, dur) in enumerate(end_matches):
        if i < len(start_times):
            silences.append((start_times[i], float(end_t)))

    print(f"  ✓ Phát hiện {len(silences)} khoảng lặng/ngập ngừng.")
    if not silences:
        print("  ✓ Video không có khoảng lặng dư thừa, giữ nguyên bản.")
        return input_video

    # Lấy tổng thời lượng video
    cmd_dur = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        input_video
    ]
    total_dur = float(subprocess.run(cmd_dur, stdout=subprocess.PIPE, text=True, check=True).stdout.strip())

    # Tính các đoạn thoại cần giữ (Active Speech)
    active_segments = []
    curr = 0.0
    for s_start, s_end in silences:
        if s_start > curr:
            keep_end = min(s_start + (keep_breath / 2), total_dur)
            active_segments.append((curr, keep_end))
        curr = max(curr, s_end - (keep_breath / 2))
    if curr < total_dur:
        active_segments.append((curr, total_dur))

    # Xây dựng filter_complex cắt ghép kèm 30ms de-clicker
    filter_parts = []
    concat_inputs = []
    for idx, (st, en) in enumerate(active_segments):
        dur = en - st
        fade_out = max(0.0, dur - 0.03)
        afade = f"afade=t=in:ss=0:d=0.03,afade=t=out:st={fade_out:.3f}:d=0.03,asetpts=PTS-STARTPTS"
        
        filter_parts.append(f"[0:v]trim=start={st:.3f}:end={en:.3f},setpts=PTS-STARTPTS[v{idx}]")
        filter_parts.append(f"[0:a]atrim=start={st:.3f}:end={en:.3f},{afade}[a{idx}]")
        concat_inputs.append(f"[v{idx}][a{idx}]")

    concat_cmd = "".join(concat_inputs) + f"concat=n={len(active_segments)}:v=1:a=1[outv][outa]"
    full_filter = ";".join(filter_parts) + ";" + concat_cmd

    cmd_render = [
        "ffmpeg", "-y",
        "-i", input_video,
        "-filter_complex", full_filter,
        "-map", "[outv]", "-map", "[outa]",
        "-c:v", "libx264", "-preset", "fast",
        "-c:a", "aac", "-b:a", "192k",
        output_video
    ]
    print(f"🎬 Đang render video sạch khoảng lặng ({len(active_segments)} phân đoạn nối mượt)...")
    subprocess.run(cmd_render, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(f"🏆 Xuất bản video đã gọt dead air thành công: {output_video}")
    return output_video

def audit_cut_boundaries(video_path, cut_times, output_dir="tmp_boundary_qa"):
    """Tự động kiểm tra chất lượng tại các điểm cắt (Cut Boundary QA)"""
    os.makedirs(output_dir, exist_ok=True)
    report = {"passed": True, "inspections": []}

    for idx, cut_t in enumerate(cut_times):
        t_before = max(0.02, cut_t - 0.04)
        t_after = cut_t + 0.04

        frame_before = os.path.join(output_dir, f"cut_{idx+1}_before.jpg")
        frame_after = os.path.join(output_dir, f"cut_{idx+1}_after.jpg")

        for t, f_path in [(t_before, frame_before), (t_after, frame_after)]:
            cmd = ["ffmpeg", "-y", "-ss", f"{t:.3f}", "-i", video_path, "-vframes", "1", "-q:v", "2", f_path]
            subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        sz_before = os.path.getsize(frame_before) if os.path.exists(frame_before) else 0
        sz_after = os.path.getsize(frame_after) if os.path.exists(frame_after) else 0

        is_black_before = sz_before < 4500
        is_black_after = sz_after < 4500

        item = {
            "cut_id": idx + 1,
            "cut_time": cut_t,
            "before_black": is_black_before,
            "after_black": is_black_after,
            "passed": not (is_black_before or is_black_after)
        }
        if not item["passed"]:
            report["passed"] = False
        report["inspections"].append(item)

    return report

if __name__ == "__main__":
    print("🎬 Video-Use Audio & Boundary QA Engine (Cine Prompt Pro Studio)")
    print("Sẵn sàng thực thi 30ms Micro-Fade, Dead Air Remover, và Boundary QA.")
