import json
import os

os.makedirs('generated_campaign/youtube_long_videos', exist_ok=True)
os.makedirs('generated_campaign/tiktok_short_videos', exist_ok=True)
os.makedirs('generated_campaign/notebooklm_prompts', exist_ok=True)

with open('public/data/prompts.json', 'r', encoding='utf-8') as f:
    prompts = json.load(f)

# Group by category
categories = {}
for p in prompts:
    cat = p.get('category', 'general')
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(p)

# 1. Generate TikTok/Shorts scripts for all 175+ techniques
print(f"Generating scripts for {len(prompts)} techniques...")
for i, p in enumerate(prompts, 1):
    short_file = f"generated_campaign/tiktok_short_videos/Short_{i:03d}_{p['id']}.md"
    with open(short_file, 'w', encoding='utf-8') as f:
        f.write(f"# 📱 KỊCH BẢN VIDEO NGẮN #{i:03d}: {p['name'].upper()}\n\n")
        f.write(f"- **Phân loại:** {p.get('category', '').upper()}\n")
        f.write(f"- **Độ khó:** {p.get('difficulty', '')}\n")
        f.write(f"- **Tâm trạng:** {p.get('mood', '')}\n\n")
        f.write("---\n\n")
        f.write("### 🎬 KỊCH BẢN THỜI LƯỢNG 30 GIÂY (TIKTOK / SHORTS / REELS):\n")
        f.write(f"1. **0s - 3s (VIRAL HOOK):** \"Bạn có biết bí mật tạo nên góc quay {p['name']} như phim Hollywood không?\"\n")
        f.write(f"2. **3s - 15s (GIẢI THÍCH):** \"{p.get('definition', '')}\"\n")
        f.write(f"3. **15s - 25s (PROMPT MẪU):** Dán đoạn prompt dưới đây vào Midjourney / Sora / NotebookLM:\n\n")
        f.write(f"```text\n{p.get('promptTemplate', '')}\n```\n\n")
        f.write("4. **25s - 30s (CALL TO ACTION CHỐT ĐƠN):**\n")
        f.write("> \"Không cần mất thời gian tra cứu, truy cập ngay Cine Prompt Pro để chọn 1-Click hơn 175+ kỹ thuật điện ảnh miễn phí ngay hôm nay! Link ở phần Bio!\"\n")

# 2. Generate YouTube Long Masterclasses for categories
for cat, items in categories.items():
    long_file = f"generated_campaign/youtube_long_videos/Masterclass_{cat}.md"
    with open(long_file, 'w', encoding='utf-8') as f:
        f.write(f"# 🎬 KỊCH BẢN YOUTUBE MASTERCLASS: HỌC PHẦN {cat.upper()}\n")
        f.write(f"Tổng hợp {len(items)} Kỹ thuật Điện ảnh chuyên sâu.\n\n---\n\n")
        f.write("## 📝 KỊCH BẢN CHI TIẾT TỰ ĐỘNG:\n\n")
        for idx, item in enumerate(items, 1):
            f.write(f"### Phần {idx}: {item['name']}\n")
            f.write(f"- **Định nghĩa:** {item.get('definition', '')}\n")
            f.write(f"- **Mẹo Hollywood:** {item.get('bestPractices', '')}\n")
            f.write(f"- **Prompt mẫu:** `{item.get('promptTemplate', '')}`\n\n")
        f.write("---\n\n")
        f.write("### 🎯 LỜI KẾT & CHỐT ĐƠN VỚI CINE PROMPT PRO:\n")
        f.write("> \"Cảm ơn bạn đã xem hết bài học. Để tự động hóa toàn bộ 175+ kỹ thuật này mà không cần ghi nhớ, hãy truy cập Cine Prompt Pro trải nghiệm miễn phí 100%!\"\n")

# 3. Generate All-in-One NotebookLM Prompts
notebook_file = "generated_campaign/notebooklm_prompts/Master_NotebookLM_Instructions.txt"
with open(notebook_file, 'w', encoding='utf-8') as f:
    f.write("""Act as an award-winning Hollywood Film Director and Senior AI Video Strategist.
Transform all loaded sources and documents into a world-class cinematic video overview.

[1. NARRATIVE & SCENE STRUCTURE]:
- SCENE 1 (HOOK): Dynamic opening establishing shot with sweeping camera movement and rich volumetric lighting.
- SCENE 2 (EXPLANATION): Medium tracking shots and realistic B-roll explaining core concepts with clarity.
- SCENE 3 (EMOTION & DETAIL): Intimate close-ups, shallow depth of field, anamorphic bokeh, and emotional depth.
- QUALITY: Render in 4K Ultra HD, HDR10, 24fps cinematic 16:9 aspect ratio.

[2. AUDIO & VOICE OVER]:
- Use a warm, confident, highly expressive native Vietnamese voiceover for all narration and subtitles.
- Include subtle ambient sound effects (Foley) and an epic cinematic soundtrack with audio ducking.

[3. MANDATORY CALL TO ACTION]:
At the very end of the video presentation, conclude with this exact statement in Vietnamese:
'Bạn thấy kỹ thuật quay điện ảnh này có ấn tượng không? Hãy truy cập ngay Cine Prompt Pro để trải nghiệm 1-Click tạo prompt điện ảnh hoàn toàn miễn phí! Đường link ở phần Mô tả nhé!'
""")

print("Successfully generated full campaign files in generated_campaign/!")
