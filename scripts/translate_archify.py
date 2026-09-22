import os

base_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"

files = [
    os.path.join(base_dir, "workflow.html"),
    os.path.join(base_dir, "system_architecture.html"),
    os.path.join(base_dir, "public", "workflow.html"),
    os.path.join(base_dir, "public", "system_architecture.html")
]

replacements = [
    ("<title>Cine Prompt Pro Super-Pipeline: Master Brain &amp; Closed-Loop Autonomous Production Diagram</title>",
     "<title>Siêu Quy Trình Cine Prompt Pro: Bộ Não Đạo Diễn &amp; Sơ Đồ Sản Xuất Tự Động Khép Kín</title>"),
    
    # SVG Lane Titles
    ("01 / 1. Creative Brain &amp; Optical Engine (ChatGPT / Gemini / Cine Prompt Pro)",
     "01 / 1. Bộ Não Sáng Tạo &amp; Động Cơ Quang Học (ChatGPT / Gemini / Cine Prompt Pro)"),
    ("02 / 2. PromptAgent Core: Master Orchestration Brain",
     "02 / 2. Lõi Điều Phối PromptAgent: Bộ Não Chỉ Huy Trung Tâm"),
    ("03 / 3. Flow Controller &amp; Tab Commander",
     "03 / 3. Bộ Điều Khiển Luồng &amp; Tự Động Hóa Tab Trình Duyệt"),
    ("04 / 4. Generation Engines: Google Flow, NotebookLM &amp; Visual Studios",
     "04 / 4. Động Cơ Sản Xuất Video: Google Flow, NotebookLM &amp; Visual Studios"),
     
    # SVG Subtitles & Group Headers
    (">Creative Ideation &amp; Optical DP<", ">Ý Tưởng Sáng Tạo &amp; Đạo Diễn Hình Ảnh (DP)<"),
    (">Autonomous Orchestration<", ">Điều Phối Độc Lập Tự Động<"),
    (">Production &amp; Closed-Loop Feedback<", ">Sản Xuất &amp; Phản Hồi Vòng Lặp Khép Kín<"),
    (">Prompt Generators<", ">Bộ Tạo Prompt Điện Ảnh<"),
    (">PromptAgent Hub<", ">Trung Tâm Điều Phối PromptAgent<"),
    (">Tab &amp; Queue Automation<", ">Tự Động Hóa Tab &amp; Hàng Đợi Queue<"),
    (">Multi-Engine Production Studios<", ">Xưởng Sản Xuất Đa Động Cơ Video<"),
    
    # Node Names & Labels
    (">Story &amp; Scene Ideator<", ">Khởi Tạo Ý Tưởng &amp; Cảnh Phim<"),
    (">AI Script Brain<", ">Bộ Não Biên Kịch AI<"),
    (">Optical DP &amp; Attention Vector<", ">Đạo Diễn Quang Học &amp; Vector Tập Trung<"),
    (">Master Brain Controller<", ">Bộ Điều Khiển Trung Tâm Tối Cao<"),
    (">Feedback Loop<", ">Vòng Lặp Phản Hồi Khép Kín<"),
    (">Scene &amp; Asset Continuity Memory<", ">Bộ Nhớ Tính Liên Tục Cảnh &amp; Nhân Vật<"),
    (">Next Scene Logic<", ">Logic Tự Động Tạo Cảnh Tiếp Theo<"),
    (">Flow Commander<", ">Bộ Chỉ Huy Luồng Tự Động<"),
    (">AutoMode &amp; Queue Lock<", ">Chế Độ Tự Động &amp; Khóa Hàng Đợi<"),
    (">Deep Dive &amp; Visual Summary<", ">Nghiên Cứu Sâu &amp; Tóm Tắt Thị Giác<"),
    (">Knowledge Visuals<", ">Kho Tri Thức Hình Ảnh<"),
    
    # Edges & Actions
    (">orchestrate scene queue<", ">điều phối hàng đợi cảnh quay<"),
    (">storyline &amp; draft<", ">cốt truyện &amp; kịch bản phác thảo<"),
    (">optical attention parameters<", ">thông số quang học &amp; góc máy<"),
    (">inject &amp; auto run Veo<", ">nạp prompt &amp; tự chạy Veo<"),
    (">advance sceneIndex<", ">tăng chỉ số cảnh (sceneIndex)<"),
    (">return asset URL &amp; seed<", ">trả về URL video &amp; seed đồng nhất<"),
    (">synthesize visual notes<", ">tổng hợp ghi chú thị giác<"),
    
    # Legend
    (">Legend<", ">Chú Giải Ký Hiệu<"),
    (">User UI<", ">Giao Diện Người Dùng<"),
    (">Agent logic<", ">Logic Tác Tử Tự Động<"),
    (">Policy<", ">Quy Tắc &amp; Chính Sách<"),
    (">Tool action<", ">Hành Động Công Cụ<"),
    (">Cloud service<", ">Dịch Vụ Đám Mây Cloud<"),
    
    # Header display
    ("Cine Prompt Pro Super-Pipeline: Master Brain &amp; Closed-Loop Autonomous Production",
     "Siêu Quy Trình Cine Prompt Pro: Bộ Não Đạo Diễn &amp; Sản Xuất Tự Động Khép Kín"),

    # Story chapter labels
    ('"label":"Master Brain Flow Control"', '"label":"Kiểm Soát Luồng Bộ Não Trung Tâm"'),
    ('"note":"PromptAgent directs and automates video generation in Google Flow."',
     '"note":"PromptAgent trực tiếp chỉ đạo và tự động hóa quá trình sinh video trên Google Flow."'),
     
    ('"label":"Creative Brain \\u0026 Optical DP"', '"label":"Bộ Não Sáng Tạo \\u0026 Đạo Diễn Quang Học"'),
    ('"note":"ChatGPT/Gemini ideation and Cine Prompt Pro Hollywood optical formulas."',
     '"note":"Ý tưởng kịch bản từ ChatGPT/Gemini kết hợp công thức quang học Hollywood của Cine Prompt Pro."'),
     
    ('"label":"Multi-Engine Dispatch"', '"label":"Phân Phối Đa Động Cơ Video"'),
    ('"note":"Attention vector prompt distribution across Google Flow, NotebookLM, and visual engines."',
     '"note":"Phân bổ vector tập trung prompt tới Google Flow, NotebookLM và các xưởng video thị giác."'),
     
    ('"label":"Closed-Loop Multi-Scene Production"', '"label":"Sản Xuất Đa Cảnh Vòng Lặp Khép Kín"'),
    ('"note":"Asset feedback loop triggering subsequent scene generation automatically."',
     '"note":"Vòng lặp phản hồi asset tự động kích hoạt sinh các cảnh phim kế tiếp liền mạch."')
]

for fp in files:
    if not os.path.exists(fp):
        print(f"File not found: {fp}")
        continue
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()
    
    count = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            count += 1
        else:
            print(f"Warning: pattern not found in {os.path.basename(fp)}: {old[:40]}...")
            
    with open(fp, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {fp} with {count}/{len(replacements)} replacements.")
