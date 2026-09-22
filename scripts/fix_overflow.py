import os

base_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"

files = [
    os.path.join(base_dir, "workflow.html"),
    os.path.join(base_dir, "system_architecture.html"),
    os.path.join(base_dir, "public", "workflow.html"),
    os.path.join(base_dir, "public", "system_architecture.html")
]

# Strategy: Revert verbose Vietnamese back to concise Vietnamese that fits
# within the original SVG bounding boxes. Keep technical terms untranslated
# where they serve as proper nouns (PromptAgent, Flow, Veo etc.)

replacements = [
    # ============================================================
    # TITLE — keep it short, 1 line
    # ============================================================
    ("<title>Siêu Quy Trình Cine Prompt Pro: Bộ Não Đạo Diễn &amp; Sơ Đồ Sản Xuất Tự Động Khép Kín</title>",
     "<title>Cine Prompt Pro — Sơ Đồ Quy Trình Sản Xuất Tự Động</title>"),

    # Header display text (the big SVG heading)
    ("Siêu Quy Trình Cine Prompt Pro: Bộ Não Đạo Diễn &amp; Sản Xuất Tự Động Khép Kín",
     "Cine Prompt Pro — Quy Trình Sản Xuất Tự Động"),

    # ============================================================
    # LANE TITLES (01-04) — must fit ~80 chars max
    # ============================================================
    ("01 / 1. Bộ Não Sáng Tạo &amp; Động Cơ Quang Học (ChatGPT / Gemini / Cine Prompt Pro)",
     "01 / 1. Sáng Tạo &amp; Quang Học (ChatGPT / Gemini / Cine Prompt Pro)"),

    ("02 / 2. Lõi Điều Phối PromptAgent: Bộ Não Chỉ Huy Trung Tâm",
     "02 / 2. PromptAgent: Bộ Chỉ Huy Trung Tâm"),

    ("03 / 3. Bộ Điều Khiển Luồng &amp; Tự Động Hóa Tab Trình Duyệt",
     "03 / 3. Điều Khiển Luồng &amp; Tự Động Tab"),

    ("04 / 4. Động Cơ Sản Xuất Video: Google Flow, NotebookLM &amp; Visual Studios",
     "04 / 4. Sản Xuất Video: Google Flow, NotebookLM &amp; Studios"),

    # ============================================================
    # GROUP SUBTITLES (above node clusters) — keep ≤25 chars
    # ============================================================
    (">Ý Tưởng Sáng Tạo &amp; Đạo Diễn Hình Ảnh (DP)<",
     ">Sáng Tạo &amp; Hình Ảnh (DP)<"),

    (">Điều Phối Độc Lập Tự Động<",
     ">Điều Phối Tự Động<"),

    (">Sản Xuất &amp; Phản Hồi Vòng Lặp Khép Kín<",
     ">Sản Xuất &amp; Phản Hồi Khép Kín<"),

    (">Bộ Tạo Prompt Điện Ảnh<",
     ">Tạo Prompt<"),

    (">Trung Tâm Điều Phối PromptAgent<",
     ">PromptAgent Hub<"),

    (">Tự Động Hóa Tab &amp; Hàng Đợi Queue<",
     ">Tự Động Tab &amp; Queue<"),

    (">Xưởng Sản Xuất Đa Động Cơ Video<",
     ">Xưởng Đa Động Cơ Video<"),

    # ============================================================
    # NODE NAMES — must fit inside ~140px wide boxes
    # ============================================================
    (">Khởi Tạo Ý Tưởng &amp; Cảnh Phim<",
     ">Ý Tưởng &amp; Cảnh Phim<"),

    (">Bộ Não Biên Kịch AI<",
     ">Biên Kịch AI<"),

    (">Đạo Diễn Quang Học &amp; Vector Tập Trung<",
     ">Quang Học &amp; Vector<"),

    (">Bộ Điều Khiển Trung Tâm Tối Cao<",
     ">Điều Khiển Trung Tâm<"),

    (">Vòng Lặp Phản Hồi Khép Kín<",
     ">Phản Hồi Khép Kín<"),

    (">Bộ Nhớ Tính Liên Tục Cảnh &amp; Nhân Vật<",
     ">Bộ Nhớ Cảnh &amp; Nhân Vật<"),

    (">Logic Tự Động Tạo Cảnh Tiếp Theo<",
     ">Logic Cảnh Kế Tiếp<"),

    (">Bộ Chỉ Huy Luồng Tự Động<",
     ">Chỉ Huy Luồng<"),

    (">Chế Độ Tự Động &amp; Khóa Hàng Đợi<",
     ">AutoMode &amp; Khóa Queue<"),

    (">Nghiên Cứu Sâu &amp; Tóm Tắt Thị Giác<",
     ">Phân Tích &amp; Tóm Tắt<"),

    (">Kho Tri Thức Hình Ảnh<",
     ">Tri Thức Hình Ảnh<"),

    # ============================================================
    # EDGE LABELS (arrow annotations) — must be very short ≤30 chars
    # ============================================================
    (">điều phối hàng đợi cảnh quay<",
     ">điều phối cảnh quay<"),

    (">cốt truyện &amp; kịch bản phác thảo<",
     ">cốt truyện &amp; phác thảo<"),

    (">thông số quang học &amp; góc máy<",
     ">quang học &amp; góc máy<"),

    (">nạp prompt &amp; tự chạy Veo<",
     ">nạp &amp; chạy Veo<"),

    (">tăng chỉ số cảnh (sceneIndex)<",
     ">tăng sceneIndex<"),

    (">trả về URL video &amp; seed đồng nhất<",
     ">trả URL &amp; seed<"),

    (">tổng hợp ghi chú thị giác<",
     ">tổng hợp ghi chú<"),

    # ============================================================
    # LEGEND — must be very short, ~10 chars each
    # ============================================================
    (">Chú Giải Ký Hiệu<",
     ">Chú Giải<"),

    (">Giao Diện Người Dùng<",
     ">Giao Diện<"),

    (">Logic Tác Tử Tự Động<",
     ">Logic Agent<"),

    (">Quy Tắc &amp; Chính Sách<",
     ">Quy Tắc<"),

    (">Hành Động Công Cụ<",
     ">Công Cụ<"),

    (">Dịch Vụ Đám Mây Cloud<",
     ">Cloud<"),

    # ============================================================
    # CHAPTER LABELS (Story Trail buttons) — keep ≤20 chars
    # ============================================================
    ('"label":"Kiểm Soát Luồng Bộ Não Trung Tâm"',
     '"label":"Bộ Não Trung Tâm"'),

    ('"label":"Bộ Não Sáng Tạo \\u0026 Đạo Diễn Quang Học"',
     '"label":"Sáng Tạo \\u0026 Quang Học"'),

    ('"label":"Phân Phối Đa Động Cơ Video"',
     '"label":"Phân Phối Đa Động Cơ"'),

    ('"label":"Sản Xuất Đa Cảnh Vòng Lặp Khép Kín"',
     '"label":"Sản Xuất Khép Kín"'),

    # ============================================================
    # CARD HEADINGS & DESCRIPTIONS (bottom info cards)
    # ============================================================
    ("<h3>Vai Trò Của Lõi Điều Phối PromptAgent</h3>",
     "<h3>Vai Trò PromptAgent</h3>"),

    ("Bộ Điều Khiển Đa Dự Án: Quản lý trạng thái đa dự án, liên kết tab và chỉ số cảnh (Scene ID) đang hoạt động",
     "Điều Khiển Đa Dự Án: Quản lý trạng thái, liên kết tab và chỉ số cảnh đang hoạt động"),

    ("Chỉ Huy Luồng Tự Động: Tự động chuyển tab, điều tiết độ trễ hàng đợi và thực thi tạo video tự động",
     "Chỉ Huy Luồng: Tự động chuyển tab, điều tiết hàng đợi và thực thi tạo video"),

    ("Điều Phối Đa Động Cơ: Đồng bộ ý tưởng kịch bản ChatGPT với công thức đạo diễn quang học của Cine Prompt Pro",
     "Điều Phối Đa Động Cơ: Đồng bộ ý tưởng ChatGPT với công thức quang học của Cine Prompt Pro"),

    ("<h3>Quy Trình Đa Động Cơ Khép Kín</h3>",
     "<h3>Quy Trình Khép Kín</h3>"),

    ("Cơ chế DataTransfer ảo: Nạp tài nguyên Ảnh sang Video liền mạch trên Google Flow",
     "DataTransfer ảo: Nạp tài nguyên Ảnh → Video liền mạch trên Google Flow"),

    ("Tối ưu Vector Tập Trung: Phân phối chuẩn xác trên Midjourney v8.2, FLUX 2 và NotebookLM",
     "Tối ưu Vector: Phân phối chuẩn xác trên MJ v8.2, FLUX 2 và NotebookLM"),

    ("Vòng lặp phản hồi: Tự động thu thập URL video đã render để tiếp tục sinh cảnh phim tiếp theo",
     "Phản hồi: Tự động thu URL video đã render để sinh cảnh tiếp theo"),
]

for fp in files:
    if not os.path.exists(fp):
        print(f"SKIP (not found): {fp}")
        continue
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()

    count = 0
    missing = []
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            count += 1
        else:
            missing.append(old[:50])

    with open(fp, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[OK] {os.path.basename(fp)}: {count}/{len(replacements)} replaced")
    if missing:
        for m in missing:
            print(f"  MISSING: {m}...")
