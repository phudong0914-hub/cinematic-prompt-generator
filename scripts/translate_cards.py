import os

base_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"

files = [
    os.path.join(base_dir, "workflow.html"),
    os.path.join(base_dir, "system_architecture.html"),
    os.path.join(base_dir, "public", "workflow.html"),
    os.path.join(base_dir, "public", "system_architecture.html")
]

card_replacements = [
    ("<h3>PromptAgent Master Brain Roles</h3>", "<h3>Vai Trò Của Lõi Điều Phối PromptAgent</h3>"),
    ("Master Project Controller: manages multi-project states, tab links, and active scene IDs",
     "Bộ Điều Khiển Đa Dự Án: Quản lý trạng thái đa dự án, liên kết tab và chỉ số cảnh (Scene ID) đang hoạt động"),
    ("Autonomous Flow Commander: focuses tabs, throttles queue delays, and executes auto generation",
     "Chỉ Huy Luồng Tự Động: Tự động chuyển tab, điều tiết độ trễ hàng đợi và thực thi tạo video tự động"),
    ("Multi-Engine Orchestrator: synchronizes ChatGPT ideation with Cine Prompt Pro DP formulas",
     "Điều Phối Đa Động Cơ: Đồng bộ ý tưởng kịch bản ChatGPT với công thức đạo diễn quang học của Cine Prompt Pro"),
    ("<h3>Closed-Loop Multi-Engine Pipeline</h3>", "<h3>Quy Trình Đa Động Cơ Khép Kín</h3>"),
    ("Synthetic DataTransfer for seamless Image-to-Video asset ingestion in Google Flow",
     "Cơ chế DataTransfer ảo: Nạp tài nguyên Ảnh sang Video liền mạch trên Google Flow"),
    ("Attention Vector optimization across Midjourney v8.2, FLUX 2, and NotebookLM Visuals",
     "Tối ưu Vector Tập Trung: Phân phối chuẩn xác trên Midjourney v8.2, FLUX 2 và NotebookLM"),
    ("Feedback loop captures rendered asset URLs to feed subsequent scene generation automatically",
     "Vòng lặp phản hồi: Tự động thu thập URL video đã render để tiếp tục sinh cảnh phim tiếp theo")
]

for fp in files:
    if not os.path.exists(fp):
        continue
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()
    for old, new in card_replacements:
        content = content.replace(old, new)
    with open(fp, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Card translations applied to {fp}")
