import re
import json

html_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\index.html"
i18n_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\js\i18n.js"

# 1. Update HTML
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

replacements = {
    '<h2>❓ Frequently Asked Questions (FAQ)</h2>': '<h2 data-i18n="faq-title">❓ Frequently Asked Questions (FAQ)</h2>',
    'What is Cine Prompt Pro? <svg': '<span data-i18n="faq-q1">What is Cine Prompt Pro?</span> <svg',
    '<div class="faq-answer"><p>Cine Prompt Pro is a professional tool': '<div class="faq-answer"><p data-i18n-html="faq-a1">Cine Prompt Pro is a professional tool',
    'What is the difference between Zoom and Dolly? <svg': '<span data-i18n="faq-q2">What is the difference between Zoom and Dolly?</span> <svg',
    '<div class="faq-answer"><p><strong>Zoom:</strong> The lens changes focal length': '<div class="faq-answer"><p data-i18n-html="faq-a2"><strong>Zoom:</strong> The lens changes focal length',
    'How does the AI Enhance feature work? <svg': '<span data-i18n="faq-q3">How does the AI Enhance feature work?</span> <svg',
    '<div class="faq-answer"><p>AI Enhance uses large language models': '<div class="faq-answer"><p data-i18n-html="faq-a3">AI Enhance uses large language models',
    
    '<h2>✨ Get the Free VIP Prompt Kit</h2>': '<h2 data-i18n="vip-title">✨ Get the Free VIP Prompt Kit</h2>',
    '<p style="margin-bottom: 12px;">"Intention is the only scarce resource in the age of infinite generation."</p>': '<p style="margin-bottom: 12px;" data-i18n="vip-quote">"Intention is the only scarce resource in the age of infinite generation."</p>',
    '<p style="font-style: italic; color: rgba(255, 255, 255, 0.75); font-size: 0.95em;">Subscribe to our weekly newsletter for useful insights on world-building. You can unsubscribe at any time.</p>': '<p style="font-style: italic; color: rgba(255, 255, 255, 0.75); font-size: 0.95em;" data-i18n="vip-sub">Subscribe to our weekly newsletter for useful insights on world-building. You can unsubscribe at any time.</p>',
    
    'placeholder="Enter your email..." required': 'placeholder="Enter your email..." data-i18n="vip-placeholder" required',
    '<button type="submit" class="translate-btn primary" style="padding: 12px 24px;">Subscribe Now</button>': '<button type="submit" class="translate-btn primary" style="padding: 12px 24px;" data-i18n="vip-btn">Subscribe Now</button>',
    'id="lead-success" style="display: none; padding: 16px; background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34,197,94,0.4); border-radius: 8px; color: #4ade80; text-align: center; margin-top: 10px;">\n                🎉 Thank you! Please check your inbox for your gift.': 'id="lead-success" style="display: none; padding: 16px; background: rgba(34, 197, 94, 0.15); border: 1px solid rgba(34,197,94,0.4); border-radius: 8px; color: #4ade80; text-align: center; margin-top: 10px;" data-i18n="vip-success">\n                🎉 Thank you! Please check your inbox for your gift.'
}

for old, new_ in replacements.items():
    html = html.replace(old, new_)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)


# 2. Update i18n.js
with open(i18n_path, "r", encoding="utf-8") as f:
    i18n = f.read()

# I will add the logic for data-i18n-html first
i18n_html_logic = """
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
"""

if "data-i18n-html" not in i18n:
    i18n = i18n.replace('document.querySelectorAll("[data-i18n]").forEach(el => {', i18n_html_logic + '\n  document.querySelectorAll("[data-i18n]").forEach(el => {')

vi_add = """,
    "faq-title": "❓ Câu hỏi thường gặp (FAQ)",
    "faq-q1": "Cine Prompt Pro là gì?",
    "faq-a1": "Cine Prompt Pro là công cụ chuyên nghiệp do Mr. Trungvt (Zalo: 08.36.384.168) sáng tạo, giúp bạn tạo ra các prompt mang tính điện ảnh cao cho các công cụ AI như Midjourney, ChatGPT image 2, Nano banana Pro và Runway. Nó tổng hợp các góc máy, kỹ thuật ánh sáng và kỹ xảo Hollywood ngoài đời thực.",
    "faq-q2": "Sự khác biệt giữa Zoom và Dolly là gì?",
    "faq-a2": "<strong>Zoom:</strong> Ống kính thay đổi tiêu cự để phóng to/thu nhỏ trong khi máy quay đứng yên. Phối cảnh không thay đổi.<br><strong>Dolly:</strong> Toàn bộ máy quay di chuyển vật lý về phía trước/sau. Phối cảnh thay đổi, tạo ra cảm giác đa chiều về không không gian.",
    "faq-q3": "Tính năng AI Nâng Cấp hoạt động như thế nào?",
    "faq-a3": "AI Nâng Cấp sử dụng các mô hình ngôn ngữ lớn (như ChatGPT, Gemini) để mở rộng ý tưởng cơ bản của bạn thành các mô tả cảnh chi tiết, giàu không khí với chiều sâu về màu sắc và bối cảnh trước khi áp dụng các kỹ thuật điện ảnh.",
    "vip-title": "✨ Nhận Bộ Prompt VIP Miễn Phí",
    "vip-quote": '"Ý tưởng là tài nguyên khan hiếm duy nhất trong kỷ nguyên sinh tạo vô hạn."',
    "vip-sub": "Đăng ký nhận bản tin hàng tuần của chúng tôi để có những kiến thức hữu ích về xây dựng thế giới. Bạn có thể hủy đăng ký bất cứ lúc nào.",
    "vip-placeholder": "Nhập email của bạn...",
    "vip-btn": "Đăng Ký Ngay",
    "vip-success": "🎉 Cảm ơn bạn! Vui lòng kiểm tra hộp thư đến để nhận quà."
"""

en_add = """,
    "faq-title": "❓ Frequently Asked Questions (FAQ)",
    "faq-q1": "What is Cine Prompt Pro?",
    "faq-a1": "Cine Prompt Pro is a professional tool created by Mr. Trungvt (Phone: 08.36.384.168) that helps you generate highly cinematic prompts for AI tools like Midjourney, ChatGPT image 2, Nano banana Pro, and Runway. It synthesizes real-world Hollywood camera angles, lighting techniques, and VFX.",
    "faq-q2": "What is the difference between Zoom and Dolly?",
    "faq-a2": "<strong>Zoom:</strong> The lens changes focal length to zoom in/out while the camera remains stationary. The perspective does not change.<br><strong>Dolly:</strong> The entire camera physically moves forward/backward. The perspective changes, creating a multidimensional sense of space.",
    "faq-q3": "How does the AI Enhance feature work?",
    "faq-a3": "AI Enhance uses large language models (like ChatGPT, Gemini) to expand your basic ideas into detailed, atmospheric scene descriptions with depth in color and setting before applying cinematic techniques.",
    "vip-title": "✨ Get the Free VIP Prompt Kit",
    "vip-quote": '"Intention is the only scarce resource in the age of infinite generation."',
    "vip-sub": "Subscribe to our weekly newsletter for useful insights on world-building. You can unsubscribe at any time.",
    "vip-placeholder": "Enter your email...",
    "vip-btn": "Subscribe Now",
    "vip-success": "🎉 Thank you! Please check your inbox for your gift."
"""

# append to vi block
if '"faq-title"' not in i18n:
    i18n = i18n.replace('"neg-style": "KHỬ PHONG CÁCH ẢO (ÉP TẢ THỰC)"\n  },', '"neg-style": "KHỬ PHONG CÁCH ẢO (ÉP TẢ THỰC)"' + vi_add + '\n  },')
    i18n = i18n.replace('"neg-style": "REMOVE VIRTUAL STYLE (FORCE REALISM)"\n  }', '"neg-style": "REMOVE VIRTUAL STYLE (FORCE REALISM)"' + en_add + '\n  }')

with open(i18n_path, "w", encoding="utf-8") as f:
    f.write(i18n)

print("Updated FAQ and Newsletter translations.")
