/**
 * i18n.js — Comprehensive Bilingual Localization Engine (Vietnamese & English)
 * ─────────────────────────────────────────────────────────────────────────────
 * Provides instantaneous UI switching, reactive CustomEvents, and data-i18n mapping.
 */

export const translations = {
  vi: {
    // Top Bar & Brand
    "guide": "📖 Guide",
    "btn-tour": "🎯 Tour",
    "btn-tour-title": "Bắt Đầu Tour Hướng Dẫn 3 Bước",
    "btn-guide": "📖 Guide",
    "btn-projects": "🎬 Dự Án",
    "btn-history": "🕒 Lịch Sử",
    "btn-ai-settings": "⚙️ Key AI",
    "btn-char-os": "🎭 Char V4",
    "btn-sfx-title": "Bật/Tắt Âm Thanh Tương Tác",
    "theme-label": "Giao diện",
    "lang-label": "Ngôn ngữ",

    // Studio Engine & Camera Movements
    "scb-tag": "STUDIO ENGINE · PROMPT BUILDER",
    "scb-title": "StudioBinder™ Shots & AI Camera Movements",
    "scb-preset-label": "⚡ PHIM TRƯỜNG 1-TOUCH:",
    "scb-size-title": "📐 1. CỠ CẢNH (SHOT SIZES) · StudioBinder Standard",
    "scb-size-sub": "Xác định khoảng cách từ ống kính đến chủ thể",
    "scb-angle-title": "🎥 2. GÓC MÁY (CAMERA ANGLES) · Psychological Impact",
    "scb-angle-sub": "Tạo tâm lý quyền lực, ngỡ ngàng hoặc hồi hộp",
    "scb-motion-title": "🔄 3. CHUYỂN ĐỘNG CAMERA AI (AI MOTIONS) · AICameraMovements.com",
    "scb-motion-sub": "Điều hướng chuyển động ống kính cho Veo 2 / Sora / Kling",
    "scb-speed-title": "⚡ Tốc Độ / Cường Độ Chuyển Động:",
    "scb-auto-apply": "Tự động ghép vào Prompt",
    "scb-reset": "↺ Đặt Lại",

    // Search & Filters
    "search-label": "Tìm kiếm Prompts",
    "search-placeholder": "Tìm phong cách, từ khóa (Ctrl + K)...",
    "category-label": "Danh mục",
    "cat-all": "Tất cả Danh mục",
    "cat-fav": "⭐️ Yêu thích",
    "cat-history": "📜 Lịch sử (30 Gần Nhất)",
    "diff-label": "Cấp Độ",
    "diff-all": "Mọi cấp độ",
    "diff-basic": "Cơ bản",
    "diff-inter": "Trung bình",
    "diff-adv": "Nâng cao",
    "loading": "Đang tải prompts…",
    "hint": "Nhấn vào thẻ hoặc Director's Cut để tạo prompt",

    // Platform Quick Filters
    "filter-all": "🌐 Tất Cả (414+)",
    "filter-camera": "🎥 Góc Máy & Lens",
    "filter-lighting": "💡 Ánh Sáng",
    "filter-composition": "📐 Bố Cục",
    "filter-color": "🎨 Tông Màu & Film",
    "filter-gear": "⚙️ Thiết Bị & Ống Kính",
    "filter-food": "🍔 Ẩm Thực TVC",
    "filter-vietnam": "🇻🇳 100 Prompt VN",
    "filter-travel": "✈️ Du Lịch & Resort",
    "filter-audio": "🔊 Foley Âm Thanh",
    "filter-omni": "⚡ Gemini Omni",
    "filter-videostyles": "🎬 Kịch Bản Video AI",
    "filter-fav": "❤️ Yêu Thích",

    // Left Sidebar: Subject & Character
    "subject-label": "🎯 1. Ý tưởng Chủ đề",
    "subject-placeholder": "VD: Một cô gái áo sơ mi trắng ngồi trong quán cà phê mưa Sài Gòn / Lon cà phê sữa đá trên bàn gỗ...",
    "char-label": "👤 2. Khóa Nhân Vật (5 Móc Neo)",
    "char-sub": "(Face & Visual Anchor)",
    "char-placeholder": "VD: Elena, 25t, tóc ngắn ngang vai, áo sơ mi trắng oversize, nốt ruồi dưới mắt trái...",
    "preset-vn-girl": "+ 👩 Cô gái VN",
    "preset-cyberpunk": "+ 👨 Cyberpunk",
    "preset-mentor": "+ 🧓 Mentor",
    "preset-anime": "+ 👧 Anime Lead",
    "btn-voice": "Nói",
    "btn-voice-listening": "Đang nghe...",
    "btn-clear": "✕ Xóa",

    // Left Sidebar: Reference Image Upload
    "ref-label": "📸 3. Ảnh Tham Chiếu (Reference Image)",
    "ref-status": "Image-to-Video Hook",
    "ref-drop-title": "Kéo thả hoặc bấm để tải ảnh sản phẩm / nhân vật",
    "ref-drop-sub": "Hỗ trợ PNG, JPG, WEBP (Tối đa 10MB)",
    "ref-btn-analyze": "✨ AI Phân Tích Ảnh",
    "ref-btn-remove": "🗑️ Gỡ",

    // Left Sidebar: Negative Prompt
    "neg-label": "🛡️ 4. Negative Prompt (Bộ Khử Lỗi)",
    "neg-placeholder": "VD: ugly, deformed, bad anatomy, noisy...",
    "neg-preset-clean": "⚡ Khử Sạch 100%",
    "neg-preset-real": "🎬 Phim Thực Tế",
    "neg-preset-portrait": "👩 Chân Dung Đẹp",
    "neg-basic": "1. KHỬ LỖI NHÂN VẬT & BÀN TAY",
    "neg-cgi": "2. KHỬ LỖI CGI & 3D GIẢ",
    "neg-quality": "3. KHỬ LỖI MỜ / CHỮ / RÁC FRAME",
    "neg-style": "KHỬ PHONG CÁCH ẢO (ÉP TẢ THỰC)",

    // Left Sidebar: Aspect Ratio
    "ar-label": "4. Tỷ lệ Khung Hình",
    "ar-cine": "Điện ảnh 2.35:1",
    "ar-wide": "Toàn cảnh 16:9",
    "ar-vert": "Dọc 9:16",
    "ar-sq": "Vuông 1:1",

    // Production Pipeline Tracker
    "pipeline-header": "⚡ PRODUCTION PIPELINE (QUY TRÌNH SẢN XUẤT VIDEO AI)",
    "pipeline-status": "Step 1/4: Prompt Ready",
    "p-step-1-name": "Khởi Tạo Kịch Bản",
    "p-step-1-tool": "CinePrompt Engine",
    "p-step-2-name": "Tạo Ảnh Tĩnh",
    "p-step-2-tool": "Google Flow / Midjourney",
    "p-step-3-name": "Tạo Chuyển Động",
    "p-step-3-tool": "Runway / Kling / Sora",
    "p-step-4-name": "Dựng & Ghép Phim",
    "p-step-4-tool": "Remotion / CapCut",

    // Top Creative Actions
    "btn-director": "DIRECTOR'S CUT (PHỐI NGẪU NHIÊN)",
    "btn-enhance": "✨ AI Nâng Cấp Ý Tưởng",
    "btn-builder": "🎛️ Công Cụ Ghép Thủ Công",
    "btn-export-fav-title": "Lưu / Xuất Yêu Thích",

    // Output Sidebar
    "gen-prompt-title": "🌟 PROMPT ĐÃ TẠO",
    "btn-save-project": "📌 +Cảnh",
    "btn-export-package": "📦 Package",
    "btn-export-pdf": "📄 PDF",
    "btn-export-csv": "📊 Excel",
    "img-prompt": "📸 PROMPT HÌNH ẢNH",
    "vid-prompt": "🎥 PROMPT VIDEO",
    "notebooklm-prompt": "📓 PROMPT NOTEBOOKLM",
    "notebooklm-sublabel": "(Overview & Chat Directives)",
    "audio-prompt": "🔊 PROMPT ÂM THANH / SFX",
    "btn-translate": "🇻🇳 Dịch",
    "btn-copy": "Sao chép",
    "btn-copied": "Đã chép!",
    "btn-copy-chat": "💬 1. Chat",
    "btn-copy-overview": "🎬 2. Overview",
    "placeholder-res": "Chọn một thẻ hoặc nhấn Director's Cut để tạo.",
    "motion-label": "Chuyển động:",

    // Scorecard Widget
    "scorecard-title": "📊 Điểm Chất Lượng Prompt",
    "score-subject": "🎯 Chủ Thể",
    "score-lighting": "💡 Ánh Sáng",
    "score-camera": "📹 Camera & Lens",
    "score-composition": "📐 Bố Cục",
    "score-filmstock": "🎞️ Film Stock & Màu",
    "grade-s": "Chuẩn Hollywood",
    "grade-a": "Xuất Sắc",
    "grade-b": "Tốt",
    "grade-c": "Trung Bình",
    "grade-d": "Cần Cải Thiện",
    "scorecard-empty": "Nhập ý tưởng và tạo prompt để xem điểm chất lượng.",

    // Modals & Deep Dive
    "modal-assign-btn": "Giao Prompt này vào Bảng",
    "modal-fav-btn": "⭐️ Thêm vào Yêu thích",
    "deep-dive-btn": "Chuyên sâu",
    "dd-def-title": "📖 ĐỊNH NGHĨA KỸ THUẬT GỐC",
    "dd-when-title": "🎯 KHI NÀO NÊN DÙNG",
    "dd-best-title": "✅ THỰC HÀNH TỐT NHẤT",
    "dd-mistakes-title": "⚠️ LỖI THƯỜNG GẶP",
    "dd-action-apply": "Áp dụng Kỹ thuật này",
    "dd-btn-translate": "Dịch",
    "dd-btn-translating": "Đang dịch...",
    "dd-btn-translated": "Đã dịch",
    "dd-btn-translate-err": "Lỗi dịch",

    // FAQ Section
    "faq-title": "❓ Câu hỏi thường gặp (FAQ)",
    "faq-q1": "Cine Prompt Pro là gì?",
    "faq-a1": "Cine Prompt Pro là công cụ chuyên nghiệp do Mr. Trungvt (Zalo: 08.36.384.168) sáng tạo, giúp bạn tạo ra các prompt mang tính điện ảnh cao cho các công cụ AI như Midjourney, ChatGPT image 2, Nano banana Pro và Runway.",
    "faq-q2": "Sự khác biệt giữa Zoom và Dolly là gì?",
    "faq-a2": "<strong>Zoom:</strong> Ống kính thay đổi tiêu cự để phóng to/thu nhỏ trong khi máy quay đứng yên.<br><strong>Dolly:</strong> Toàn bộ máy quay di chuyển vật lý về phía trước/sau.",
    "faq-q3": "Tính năng AI Nâng Cấp hoạt động như thế nào?",
    "faq-a3": "AI Nâng Cấp sử dụng các mô hình ngôn ngữ lớn để mở rộng ý tưởng cơ bản thành mô tả cảnh chi tiết.",
    "faq-q4": "Khi nào nên dùng 'Chép cho Overview' và 'Chép cho Chat'?",
    "faq-a4": "<strong>Chép cho Overview:</strong> Dán vào ô 'Chủ đề tùy chỉnh' khi dùng Video Overview.<br><strong>Chép cho Chat:</strong> Dán vào khung Chat để lập kịch bản phân cảnh.",

    // VIP Newsletter
    "vip-title": "✨ Nhận Bộ Prompt VIP Miễn Phí",
    "vip-quote": '"Ý tưởng là tài nguyên khan hiếm duy nhất trong kỷ nguyên sinh tạo vô hạn."',
    "vip-sub": "Đăng ký nhận bản tin hàng tuần để nhận những kiến thức hữu ích.",
    "vip-placeholder": "Nhập email của bạn...",
    "vip-btn": "Đăng Ký Ngay",
    "vip-success": "🎉 Cảm ơn bạn! Vui lòng kiểm tra hộp thư đến.",

    // Onboarding Tour
    "tour-step-badge": "HƯỚNG DẪN BẮT ĐẦU",
    "tour-step-1-title": "🎯 Bước 1: Khởi Tạo Ý Tưởng & Ảnh Tham Chiếu",
    "tour-step-1-desc": "Nhập mô tả chủ đề, khóa 5 móc neo nhân vật hoặc kéo thả ảnh sản phẩm (Reference Image) vào đây để AI Vision phân tích.",
    "tour-step-2-title": "🎬 Bước 2: Chọn Thẻ Kỹ Thuật & Đạo Diễn",
    "tour-step-2-desc": "Chọn các góc máy, setup ánh sáng của Roger Deakins/Wong Kar-wai, hoặc bấm \"DIRECTOR'S CUT\" để phối ngẫu nhiên 7 tầng điện ảnh.",
    "tour-step-3-title": "⚡ Bước 3: Nhận Trọn Bộ Prompt 3-Trong-1",
    "tour-step-3-desc": "Lấy ngay Prompt Ảnh Midjourney 8K, Prompt Video Veo/Sora 10s có timeline, và Kịch bản âm thanh Foley ASMR!",
    "tour-btn-skip": "Bỏ qua",
    "tour-btn-prev": "◀ Quay lại",
    "tour-btn-next": "Tiếp tục ➔",
    "tour-btn-start": "🎉 Bắt Đầu Sáng Tạo!",
  },

  en: {
    // Top Bar & Brand
    "guide": "📖 Guide",
    "btn-tour": "🎯 Tour",
    "btn-tour-title": "Start 3-Step Guided Tour",
    "btn-guide": "📖 Guide",
    "btn-projects": "🎬 Projects",
    "btn-history": "🕒 History",
    "btn-ai-settings": "⚙️ Key AI",
    "btn-char-os": "🎭 Char V4",
    "btn-sfx-title": "Toggle Interactive Sound FX",
    "theme-label": "Theme",
    "lang-label": "Language",

    // Studio Engine & Camera Movements
    "scb-tag": "STUDIO ENGINE · PROMPT BUILDER",
    "scb-title": "StudioBinder™ Shots & AI Camera Movements",
    "scb-preset-label": "⚡ 1-TOUCH HOLLYWOOD PRESETS:",
    "scb-size-title": "📐 1. SHOT SIZES · StudioBinder Standard",
    "scb-size-sub": "Establishes lens distance to subject",
    "scb-angle-title": "🎥 2. CAMERA ANGLES · Psychological Impact",
    "scb-angle-sub": "Creates power dynamics, mystery, or drama",
    "scb-motion-title": "🔄 3. AI CAMERA MOTIONS · AICameraMovements.com",
    "scb-motion-sub": "Camera trajectory directives for Veo 2 / Sora / Kling",
    "scb-speed-title": "⚡ Motion Speed / Intensity:",
    "scb-auto-apply": "Auto-Apply to Prompt",
    "scb-reset": "↺ Reset",

    // Search & Filters
    "search-label": "Search Prompts",
    "search-placeholder": "Search styles, keywords (Ctrl + K)...",
    "category-label": "Category",
    "cat-all": "All Categories",
    "cat-fav": "⭐️ Favorites",
    "cat-history": "📜 History (Last 30)",
    "diff-label": "Difficulty",
    "diff-all": "All Levels",
    "diff-basic": "Basic",
    "diff-inter": "Intermediate",
    "diff-adv": "Advanced",
    "loading": "Loading prompts…",
    "hint": "Click any card or hit Director's Cut to generate prompts",

    // Platform Quick Filters
    "filter-all": "🌐 All (414+)",
    "filter-camera": "🎥 Camera & Shots",
    "filter-lighting": "💡 Cinematic Lighting",
    "filter-composition": "📐 Composition",
    "filter-color": "🎨 Color & Film Stock",
    "filter-gear": "⚙️ Equipment & Lenses",
    "filter-food": "🍔 Food TVC",
    "filter-vietnam": "🇻🇳 100 VN Prompts",
    "filter-travel": "✈️ Travel & Resort",
    "filter-audio": "🔊 Audio & Foley",
    "filter-omni": "⚡ Gemini Omni",
    "filter-videostyles": "🎬 AI Video Scripts",
    "filter-fav": "❤️ Favorites",

    // Left Sidebar: Subject & Character
    "subject-label": "🎯 1. Subject Idea",
    "subject-placeholder": "e.g., A girl in a white oversized shirt sitting in a cozy rainy coffee shop / An iced coffee glass on wood table...",
    "char-label": "👤 2. Character Lock (5 Anchors)",
    "char-sub": "(Face & Visual Anchor)",
    "char-placeholder": "e.g., Elena, 25yo, shoulder-length black hair, gray eyes, oversized white shirt...",
    "preset-vn-girl": "+ 👩 VN Girl",
    "preset-cyberpunk": "+ 👨 Cyberpunk",
    "preset-mentor": "+ 🧓 Mentor",
    "preset-anime": "+ 👧 Anime Lead",
    "btn-voice": "Voice",
    "btn-voice-listening": "Listening...",
    "btn-clear": "✕ Clear",

    // Left Sidebar: Reference Image Upload
    "ref-label": "📸 3. Reference Image Upload",
    "ref-status": "Image-to-Video Hook",
    "ref-drop-title": "Drag & drop or click to upload product / character image",
    "ref-drop-sub": "Supports PNG, JPG, WEBP (Max 10MB)",
    "ref-btn-analyze": "✨ AI Vision Analyze",
    "ref-btn-remove": "🗑️ Remove",

    // Left Sidebar: Negative Prompt
    "neg-label": "🛡️ 4. Negative Prompt",
    "neg-placeholder": "e.g. ugly, deformed, bad anatomy, noisy...",
    "neg-preset-clean": "⚡ 100% Clean",
    "neg-preset-real": "🎬 Cinematic Real",
    "neg-preset-portrait": "👩 Perfect Portrait",
    "neg-basic": "1. CHARACTER & HAND DEFECTS",
    "neg-cgi": "2. CGI & FAKE 3D DEFECTS",
    "neg-quality": "3. BLUR, TEXT & FRAME ARTIFACTS",
    "neg-style": "REMOVE VIRTUAL STYLE (FORCE REALISM)",

    // Left Sidebar: Aspect Ratio
    "ar-label": "4. Aspect Ratio",
    "ar-cine": "Cinematic 2.35:1",
    "ar-wide": "Widescreen 16:9",
    "ar-vert": "Vertical 9:16",
    "ar-sq": "Square 1:1",

    // Production Pipeline Tracker
    "pipeline-header": "⚡ PRODUCTION PIPELINE (AI VIDEO WORKFLOW)",
    "pipeline-status": "Step 1/4: Prompt Ready",
    "p-step-1-name": "Prompt Idealization",
    "p-step-1-tool": "CinePrompt Engine",
    "p-step-2-name": "Asset Generation",
    "p-step-2-tool": "Google Flow / Midjourney",
    "p-step-3-name": "Video Motion",
    "p-step-3-tool": "Runway / Kling / Sora",
    "p-step-4-name": "Final Assembly",
    "p-step-4-tool": "Remotion / CapCut",

    // Top Creative Actions
    "btn-director": "DIRECTOR'S CUT (RANDOM COMBO)",
    "btn-enhance": "✨ AI Enhance Idea",
    "btn-builder": "🎛️ Manual Prompt Builder",
    "btn-export-fav-title": "Save / Export Favorites",

    // Output Sidebar
    "gen-prompt-title": "🌟 GENERATED PROMPTS",
    "btn-save-project": "📌 +Scene",
    "btn-export-package": "📦 Package",
    "btn-export-pdf": "📄 PDF",
    "btn-export-csv": "📊 Excel",
    "img-prompt": "📸 IMAGE PROMPT",
    "vid-prompt": "🎥 VIDEO PROMPT",
    "notebooklm-prompt": "📓 NOTEBOOKLM PROMPT",
    "notebooklm-sublabel": "(Overview & Chat Directives)",
    "audio-prompt": "🔊 AUDIO & SFX PROMPT",
    "btn-translate": "🌐 Translate",
    "btn-copy": "Copy",
    "btn-copied": "Copied!",
    "btn-copy-chat": "💬 1. Copy Chat",
    "btn-copy-overview": "🎬 2. Copy Overview",
    "placeholder-res": "Select a card or click Director's Cut to generate.",
    "motion-label": "Motion:",

    // Scorecard Widget
    "scorecard-title": "📊 Prompt Quality Score",
    "score-subject": "🎯 Subject",
    "score-lighting": "💡 Lighting",
    "score-camera": "📹 Camera & Lens",
    "score-composition": "📐 Composition",
    "score-filmstock": "🎞️ Film Stock & Color",
    "grade-s": "Hollywood Standard",
    "grade-a": "Excellent",
    "grade-b": "Good",
    "grade-c": "Average",
    "grade-d": "Needs Improvement",
    "scorecard-empty": "Enter an idea and generate prompts to view quality score.",

    // Modals & Deep Dive
    "modal-assign-btn": "Apply this Prompt to Canvas",
    "modal-fav-btn": "⭐️ Add to Favorites",
    "deep-dive-btn": "Deep Dive",
    "dd-def-title": "📖 TECHNICAL DEFINITION",
    "dd-when-title": "🎯 WHEN TO USE",
    "dd-best-title": "✅ BEST PRACTICES",
    "dd-mistakes-title": "⚠️ COMMON MISTAKES",
    "dd-action-apply": "Apply this Technique",
    "dd-btn-translate": "Translate",
    "dd-btn-translating": "Translating...",
    "dd-btn-translated": "Translated",
    "dd-btn-translate-err": "Translation Error",

    // FAQ Section
    "faq-title": "❓ Frequently Asked Questions (FAQ)",
    "faq-q1": "What is Cine Prompt Pro?",
    "faq-a1": "Cine Prompt Pro is a professional tool created by Mr. Trungvt (Phone: 08.36.384.168) that helps you generate highly cinematic prompts for Midjourney, ChatGPT, and Runway.",
    "faq-q2": "Difference between Zoom and Dolly?",
    "faq-a2": "<strong>Zoom:</strong> Lens changes focal length.<br><strong>Dolly:</strong> Entire camera physically moves.",
    "faq-q3": "How does AI Enhance work?",
    "faq-a3": "AI Enhance expands your raw subject idea into an atmospheric scene description before applying cinema techniques.",
    "faq-q4": "When to use 'Copy for Overview' vs 'Copy for Chat'?",
    "faq-a4": "<strong>Copy for Overview:</strong> Paste into Custom Topic for Video Overview.<br><strong>Copy for Chat:</strong> Paste into Chat to generate a 4-column shotlist.",

    // VIP Newsletter
    "vip-title": "✨ Get Free VIP Prompt Kit",
    "vip-quote": '"Intention is the only scarce resource in the age of infinite generation."',
    "vip-sub": "Subscribe to our weekly newsletter.",
    "vip-placeholder": "Enter your email...",
    "vip-btn": "Subscribe Now",
    "vip-success": "🎉 Thank you! Please check your inbox.",

    // Onboarding Tour
    "tour-step-badge": "GETTING STARTED GUIDE",
    "tour-step-1-title": "🎯 Step 1: Idea & Reference Image",
    "tour-step-1-desc": "Type your subject idea, lock 5 character anchors, or drag & drop a reference product image for AI Vision analysis.",
    "tour-step-2-title": "🎬 Step 2: Choose Technique Cards & Director",
    "tour-step-2-desc": "Select camera angles, lighting setups from Roger Deakins / Wong Kar-wai, or click \"DIRECTOR'S CUT\" for a 7-layer cinema combo.",
    "tour-step-3-title": "⚡ Step 3: Get 3-in-1 Production Bundle",
    "tour-step-3-desc": "Instantly get 8K Midjourney Image Prompts, 10s Veo/Sora Video Prompts with timeline, and Foley ASMR audio scripts!",
    "tour-btn-skip": "Skip",
    "tour-btn-prev": "◀ Back",
    "tour-btn-next": "Next ➔",
    "tour-btn-start": "🎉 Start Creating!",
  }
};

let currentLang = localStorage.getItem("cine_lang") || "vi";
let currentTheme = localStorage.getItem("cine_theme") || "dark";

export function getCurrentLang() {
  return currentLang;
}

export function t(key, fallback = '') {
  if (translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  if (translations.en && translations.en[key]) {
    return translations.en[key];
  }
  return fallback || key;
}

export function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("cine_lang", lang);
  
  const langText = document.querySelector("#lang-toggle-btn .lang-text");
  if (langText) {
    langText.textContent = lang === "vi" ? "VI" : "EN";
  }

  // Update HTML content for tags with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const value = translations[lang] && translations[lang][key];
    if (value && typeof value === 'string') {
      el.innerHTML = value.replace(/<script[\s\S]*?<\/script>/gi, '')
                          .replace(/on\w+\s*=/gi, '');
    }
  });

  // Update text & placeholders
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      const translated = translations[lang][key];
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translated;
      } else if (el.tagName === "OPTION") {
        el.textContent = translated;
      } else {
        const span = el.querySelector('.btn-label, .copy-label, .panel-label-text, .lang-text, .pill-name');
        if (span) {
          span.textContent = translated;
        } else {
          let updated = false;
          el.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
              child.textContent = translated;
              updated = true;
            }
          });
          if (!updated && el.childNodes.length <= 1) {
            el.textContent = translated;
          }
        }
      }
    }
  });

  // Update titles/tooltips with data-i18n-title
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("title", translations[lang][key]);
    }
  });
}

export function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("cine_theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  
  const iconMoon = document.querySelector("#theme-toggle-btn .icon-moon");
  const iconSun = document.querySelector("#theme-toggle-btn .icon-sun");
  
  if (iconMoon && iconSun) {
    if (theme === "dark") {
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
    } else {
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    }
  }
}

export function toggleLanguage() {
  const newLang = currentLang === "vi" ? "en" : "vi";
  applyLanguage(newLang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
}

export function toggleTheme() {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);
  
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
});

// Global window exposure
if (typeof window !== 'undefined') {
  window.translations = translations;
  window.currentLang = currentLang;
  window.t = t;
  window.getCurrentLang = getCurrentLang;
  window.toggleLanguage = toggleLanguage;
  window.toggleTheme = toggleTheme;
  window.applyLanguage = applyLanguage;
}
