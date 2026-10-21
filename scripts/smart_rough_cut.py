#!/usr/bin/env python3
"""
smart_rough_cut.py
─────────────────────────────────────────────────────────────────────────────
3 GOLDEN ROUGH-CUT RULES AUTOMATION CLI (Minh Đỗ x Trungvt Master Edition)
─────────────────────────────────────────────────────────────────────────────
Applies:
- Rule 1: Keep Last Take (detect and prune false starts)
- Rule 2: Review Slate (markdown preview before cutting physical files)
- Rule 3: Chronological Integrity (only deletions, strictly no sentence shuffling)
Trims awkward silences (> 0.6s -> 0.25s) and exports cleaned SRT + cut metadata.
"""

import sys
import os
import re
import json

def parse_srt(srt_content):
    blocks = re.split(r'\n\s*\n', srt_content.strip())
    segments = []
    
    def time_to_sec(t_str):
        parts = t_str.strip().replace(',', '.').split(':')
        h = float(parts[0])
        m = float(parts[1])
        s = float(parts[2])
        return h * 3600 + m * 60 + s

    for b in blocks:
        lines = b.strip().split('\n')
        if len(lines) >= 3:
            idx = lines[0].strip()
            time_match = re.search(r'(\d+:\d+:\d+[,\.]\d+)\s*-->\s*(\d+:\d+:\d+[,\.]\d+)', lines[1])
            if time_match:
                start_sec = time_to_sec(time_match.group(1))
                end_sec = time_to_sec(time_match.group(2))
                text = " ".join(lines[2:]).strip()
                segments.append({
                    "id": idx,
                    "start": start_sec,
                    "end": end_sec,
                    "text": text
                })
    return segments

def jaccard_similarity(text1, text2):
    w1 = set(re.findall(r'\w+', text1.lower()))
    w2 = set(re.findall(r'\w+', text2.lower()))
    if not w1 or not w2:
        return 0.0
    return len(w1 & w2) / len(w1 | w2)

def apply_smart_cut(segments, sim_threshold=0.55, max_silence=0.6, target_breathe=0.25):
    decisions = []
    cluster = []
    
    for i, current in enumerate(segments):
        if not cluster:
            cluster.append(current)
            continue
        
        prev = cluster[-1]
        sim = jaccard_similarity(prev['text'], current['text'])
        gap = current['start'] - prev['end']
        
        if sim >= sim_threshold and gap <= 10.0:
            cluster.append(current)
        else:
            if len(cluster) > 1:
                for c_idx in range(len(cluster) - 1):
                    decisions.append({
                        "segment": cluster[c_idx],
                        "action": "CUT",
                        "rule": "RULE_1_LAST_TAKE",
                        "reason": f"Nói lặp/vấp ({len(cluster)} lần) -> Loại bỏ lần {c_idx + 1}"
                    })
                decisions.append({
                    "segment": cluster[-1],
                    "action": "KEEP",
                    "rule": "RULE_1_LAST_TAKE",
                    "reason": "Giữ lại lần nói cuối cùng (Take chuẩn nhất)"
                })
            else:
                decisions.append({
                    "segment": cluster[0],
                    "action": "KEEP",
                    "rule": "NATURAL_PASS",
                    "reason": "Câu phát âm tự nhiên"
                })
            cluster = [current]
            
    if len(cluster) > 1:
        for c_idx in range(len(cluster) - 1):
            decisions.append({
                "segment": cluster[c_idx],
                "action": "CUT",
                "rule": "RULE_1_LAST_TAKE",
                "reason": f"Nói lặp/vấp ({len(cluster)} lần) -> Loại bỏ lần {c_idx + 1}"
            })
        decisions.append({
            "segment": cluster[-1],
            "action": "KEEP",
            "rule": "RULE_1_LAST_TAKE",
            "reason": "Giữ lại lần nói cuối cùng (Take chuẩn nhất)"
        })
    elif len(cluster) == 1:
        decisions.append({
            "segment": cluster[0],
            "action": "KEEP",
            "rule": "NATURAL_PASS",
            "reason": "Câu phát âm tự nhiên"
        })
        
    kept = [d['segment'] for d in decisions if d['action'] == 'KEEP']
    
    # Chronological integrity check
    for k in range(1, len(kept)):
        assert kept[k]['start'] >= kept[k-1]['start'], "Rule 3 violated: Chronological ordering altered!"

    # Timeline calculation & silence trim
    running_offset = 0.0
    timeline = []
    total_saved = 0.0

    for k, seg in enumerate(kept):
        leading_silence = 0.0
        if k > 0:
            prev_seg = kept[k-1]
            actual_gap = seg['start'] - prev_seg['end']
            if actual_gap > max_silence:
                leading_silence = target_breathe
                total_saved += (actual_gap - target_breathe)
            elif actual_gap > 0:
                leading_silence = actual_gap
        
        duration = seg['end'] - seg['start']
        new_start = running_offset + leading_silence
        new_end = new_start + duration
        running_offset = new_end
        
        timeline.append({
            "id": seg['id'],
            "text": seg['text'],
            "original_start": seg['start'],
            "original_end": seg['end'],
            "timeline_start": round(new_start, 3),
            "timeline_end": round(new_end, 3),
            "duration": round(duration, 3)
        })

    cut_duration = sum(d['segment']['end'] - d['segment']['start'] for d in decisions if d['action'] == 'CUT')
    total_saved += cut_duration

    return decisions, timeline, total_saved

def sec_to_srt_time(sec):
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = int(sec % 60)
    ms = int(round((sec - int(sec)) * 1000))
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"

def export_results(decisions, timeline, total_saved, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    # 1. Export Cleaned SRT
    srt_path = os.path.join(output_dir, "rough_cut_cleaned.srt")
    with open(srt_path, "w", encoding="utf-8") as f:
        for idx, item in enumerate(timeline, start=1):
            f.write(f"{idx}\n")
            f.write(f"{sec_to_srt_time(item['timeline_start'])} --> {sec_to_srt_time(item['timeline_end'])}\n")
            f.write(f"{item['text']}\n\n")

    # 2. Export Review Markdown (Rule 2)
    review_path = os.path.join(output_dir, "ROUGH_CUT_REVIEW.md")
    with open(review_path, "w", encoding="utf-8") as f:
        f.write("# 🎬 BẢNG DUYỆT CẮT THÔ CHUẨN 3 LUẬT (Rough-Cut Review Slate)\n\n")
        f.write(f"> **Tổng thời gian tiết kiệm được**: **{total_saved:.1f}s** (triệt tiêu vấp & khoảng lặng thừa)\n\n")
        f.write("| Mốc gốc (s) | Quyết định | Nội dung câu thoại | Lý do & Quy chuẩn |\n")
        f.write("|---|---|---|---|\n")
        for d in decisions:
            time_str = f"{d['segment']['start']:.1f}s - {d['segment']['end']:.1f}s"
            icon = "✅ **GIỮ**" if d['action'] == "KEEP" else "✂️ ~~BỎ~~"
            txt = d['segment']['text'] if d['action'] == "KEEP" else f"~~{d['segment']['text']}~~"
            f.write(f"| {time_str} | {icon} | {txt} | {d['reason']} |\n")
        f.write("\n---\n*Đạo diễn bấm Xác nhận để tự động xuất Timeline CapCut / Remotion.*\n")

    # 3. Export Cut Segments JSON for FFmpeg / CapCut
    json_path = os.path.join(output_dir, "rough_cut_metadata.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump({
            "total_saved_seconds": round(total_saved, 2),
            "final_duration_seconds": round(timeline[-1]['timeline_end'], 2) if timeline else 0,
            "timeline": timeline,
            "decisions": decisions
        }, f, ensure_ascii=False, indent=2)

    print(f"✅ Đã xuất kết quả cắt thô 3 luật:")
    print(f"   - SRT đã làm sạch: {srt_path}")
    print(f"   - Bản duyệt Đạo diễn: {review_path}")
    print(f"   - Metadata JSON: {json_path}")
    print(f"   - Tiết kiệm được: {total_saved:.1f} giây")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Sử dụng: python scripts/smart_rough_cut.py <input.srt> [output_dir]")
        sys.exit(1)
        
    input_file = sys.argv[1]
    out_dir = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(input_file) or "."
    
    with open(input_file, "r", encoding="utf-8") as f:
        content = f.read()
        
    segs = parse_srt(content)
    dec, tl, saved = apply_smart_cut(segs)
    export_results(dec, tl, saved, out_dir)
