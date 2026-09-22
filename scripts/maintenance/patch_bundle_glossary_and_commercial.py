import json
import os

bundle_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\assets\index-BeKU_6gu.js"
public_bundle_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\public\assets\index-BeKU_6gu.js"
terms_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\scratch\terms.json"

with open(terms_path, "r", encoding="utf-8") as f:
    terms = json.load(f)

# Commercial Presets JSON
comm_presets = [
  {
    "id": "comm_flashback",
    "title": "1. Kể chuyện & Hồi tưởng (Flashback Story)",
    "prompt": "Medium close-up, eye-level, an elderly Vietnamese woman with silver hair in a faded brown áo bà ba sits by a wooden window, slowly turning the pages of an old photo album, soft window light with dust particles floating in the air, slow dolly in, cinematic, muted warm palette with lifted blacks, nostalgic and melancholic mood, shallow depth of field, 35mm film grain, 16:9",
    "rationale": "Dolly in chậm cuốn khán giả vào dòng hồi tưởng; ánh sáng cửa sổ khuếch tán kết hợp lifted blacks tái hiện chất thơ hoài niệm."
  },
  {
    "id": "comm_horror",
    "title": "2. Kinh dị & Huyền bí Pháp cổ (French Colonial Horror)",
    "prompt": "Low angle, Dutch tilt, a lone figure in a white dress stands at the end of a long corridor in an abandoned French colonial house, ground fog creeping along the floor, light from a single candle held at chest level, handheld camera with slight shake, slow push in, film noir, cool desaturated palette with deep shadows, eerie and ominous mood, high contrast, 2.35:1",
    "rationale": "Góc Dutch tilt tạo bất ổn; ngọn nến đơn lẻ đẩy tương phản tối đa; camera cầm tay mô phỏng góc nhìn nhân chứng."
  },
  {
    "id": "comm_wuxia",
    "title": "3. Cổ trang & Tu tiên (Wuxia / Cultivation Fantasy)",
    "prompt": "Extreme wide establishing shot, low horizon, a young cultivator in flowing white hanfu stands on a cliff edge above a sea of clouds at sunrise, God rays breaking through the mist, crane shot rising slowly to reveal distant mountain peaks, cinematic fantasy art with ink wash painting influence, ethereal golden hues, majestic and serene mood, volumetric lighting, 8K, 21:9",
    "rationale": "Cú nâng crane shot kết hợp viễn cảnh thu nhỏ con người trước thiên nhiên kỳ vĩ; phong vị thủy mặc nâng tầm chất tiên hiệp."
  },
  {
    "id": "comm_ecommerce_suite",
    "title": "4. Thương mại Điện tử 2-Clip (E-Commerce Product Suite)",
    "prompt": "Clip 1: Product shot, eye-level, a matte black ceramic coffee mug on a clean light-grey stone surface, softbox studio lighting with subtle rim light, slow 360-degree orbit around the product, photorealistic, clean high-key look, neutral color palette, calm and premium mood, 8K, 1:1.\nClip 2: Extreme close-up, macro angle, the matte black ceramic surface of the same mug, fine speckled texture visible, soft directional light raking across the surface, slow pan right, photorealistic, neutral palette, premium mood, hyperdetailed.",
    "rationale": "Cấu trúc 2-clip vàng của quảng cáo: Clip 1 tổng thể 360 độ -> Clip 2 zoom macro thuyết phục về chất liệu."
  },
  {
    "id": "comm_food",
    "title": "5. Ẩm thực Nghệ thuật (Gourmet Food & Steaming Cuisine)",
    "prompt": "Overhead flat lay transitioning to 45-degree angle, a steaming bowl of phở with fresh herbs, lime and chili on a rustic wooden table, warm window light from the left, steam rising visibly, slow push in, food photography style, warm palette with rich reds and greens, cozy and appetizing mood, shallow depth of field, 9:16 vertical",
    "rationale": "Ánh sáng ngược làm nổi hạt hơi nước bốc khói; chuyển góc flat-lay sang 45 độ kích thích vị giác tối đa."
  },
  {
    "id": "comm_corporate",
    "title": "6. Đào tạo & Chuyên gia (Executive Corporate Talking Head)",
    "prompt": "Medium shot, eye-level, a professional in a navy blazer speaks to camera in a modern office with soft bokeh background, two-point softbox lighting with gentle rim light, static locked-off camera, clean corporate look, neutral color balance, calm and confident mood, sharp focus on face, 16:9",
    "rationale": "Máy cố định triệt tiêu xao nhãng; tiêu cự 85mm tách chủ thể tạo vị thế chuyên gia tin cậy."
  },
  {
    "id": "comm_neon_noir",
    "title": "7. Phố Đêm Mưa Neon (Neon Noir Rain Street)",
    "prompt": "Low angle, medium shot, a man in a black leather jacket walks through a rain-soaked Hanoi street at night, neon signs reflecting on wet asphalt, rim lighting from city lights, side tracking shot, neon noir aesthetic, teal and magenta palette, confident and mysterious mood, anamorphic lens flare, 35mm, 2.35:1",
    "rationale": "Mặt đường ướt mưa phản chiếu ánh sáng neon rực rỡ; góc thấp và vệt sáng anamorphic tạo chất điện ảnh Vương Gia Vệ."
  },
  {
    "id": "comm_travel_drone",
    "title": "8. Du lịch & Thiên nhiên FPV (Travel Landscape FPV Drone)",
    "prompt": "Aerial establishing shot, FPV drone flying low over terraced rice fields in Mu Cang Chai at golden hour, sun-kissed slopes with long shadows, fast smooth flyover then slow crane up to reveal the valley, cinematic, vibrant HDR with warm golden hues, awe and majestic mood, sharp deep focus, 16:9",
    "rationale": "Cú lướt máy FPV từ sát thảm lúa hất vút lên trời cao tạo cảm giác bay tự do; sắc vàng hoàng hôn tôn vinh cảnh sắc Việt Nam."
  },
  {
    "id": "comm_action",
    "title": "9. Hành động & Tốc độ Cao (High-Octane Action & Sports)",
    "prompt": "Wide shot cutting to close-up, low angle, a motorbike racer leans hard into a corner on a mountain road, hard midday sunlight with high contrast, fast tracking shot with slight motion blur, cinematic action color grade, teal and orange, intense and urgent mood, shutter angle 180 degrees, 16:9",
    "rationale": "Góc máy thấp sát mặt đường khi xe ôm cua tạo lực ly tâm; shutter 180 độ giữ độ nhòe chuyển động chuẩn Hollywood."
  },
  {
    "id": "comm_tiktok_ugc",
    "title": "10. Reels & TikTok Chân thực (Authentic Mobile UGC)",
    "prompt": "9:16 vertical, eye-level, a young woman unboxes a skincare package at a bright kitchen table, natural window light, handheld with slight shake, authentic mobile phone photography style, vibrant but natural colors, playful and cheerful mood, candid feel",
    "rationale": "Độ rung cầm tay tự nhiên và ánh sáng phòng đời thường đánh trúng tâm lý tin cậy của khách hàng TikTok/Reels."
  }
]

# Emotion-to-Shot Matrix JSON
emotion_matrix = {
  "melancholic": {
    "emotionVi": "Buồn bã, Cô đơn & Lạc lõng",
    "snippet": "High angle, wide establishing, overcast blue hour, lifted blacks, slow dolly out to reveal isolation, cool desaturated slate grey, melancholic lonely mood, 35mm grain"
  },
  "empowered": {
    "emotionVi": "Quyền lực, Uy nghiêm & Hùng tráng",
    "snippet": "Low angle hero shot, worm's-eye view, rim lighting, hard key light, slow dolly in, high contrast carbon black and gold, commanding quiet authority, sharp ARRI optics"
  },
  "nostalgic": {
    "emotionVi": "Ấm áp, Hoài niệm & Ký ức",
    "snippet": "Medium shot, eye-level, golden hour, dappled light through leaves, slow gentle pan, warm vintage Kodachrome amber, Kodak Portra 400 emulation, serene warmth"
  },
  "mysterious_eerie": {
    "emotionVi": "Bí ẩn, Căng thẳng & Rùng rợn",
    "snippet": "Dutch tilt, low angle, low-key chiaroscuro, single candle under-lighting, handheld camera with slight shake, deep pitch shadows, cool greenish-cyan, eerie high suspense"
  },
  "majestic_awe": {
    "emotionVi": "Kỳ vĩ, Choáng ngợp & Linh thiêng",
    "snippet": "Worm's-eye view, extreme wide shot, volumetric God rays, crepuscular beams, crane shot rising up, vibrant HDR golden azure, 70mm IMAX format, awe-inspiring majesty"
  },
  "intimate_romantic": {
    "emotionVi": "Thân mật, Lãng mạn & Tình cảm",
    "snippet": "Close-up over-the-shoulder, soft diffuse window light, warm candle glow, slow smooth dolly in, warm creamy pastel, Cooke S4/i 85mm oval bokeh, tender intimacy"
  },
  "intense_urgent": {
    "emotionVi": "Hành động, Cấp bách & Nghẹt thở",
    "snippet": "Eye-level fast framing, canted angle, hard directional sunlight, harsh cast shadows, fast tracking shot, whip pan, teal and orange, shutter angle 180 degrees, adrenaline rush"
  },
  "dreamy_surreal": {
    "emotionVi": "Mơ màng, Siêu thực & Huyền ảo",
    "snippet": "Floating camera angle, backlit with anamorphic lens flare, soft haze glow, floating camera drift, dreamy iridescent pastel, Black Pro Mist filter, ethereal surrealism"
  }
}

skill_markdown_text = """---
name: cine-prompt-pro
description: Siêu trợ lý Đạo diễn & Kỹ thuật viên Quay phim AI (Cine Prompt Pro Master Studio). Tự động kiến tạo prompt video/hình ảnh chuẩn điện ảnh quốc tế, hỗ trợ Wan 2.5, Veo 3/Google Flow, Midjourney v8.2, Kling 2.0, Runway Gen-4 với 19 Định luật Thị giác & Linter quang học.
---

# Cine Prompt Pro — Master Cinematic AI Director Skill

Skill này cung cấp toàn bộ tri thức quang học, góc máy, ánh sáng, bố cục và thang chấm điểm 4 trụ cột để điều hướng AI sinh hình ảnh & video chất lượng điện ảnh Hollywood.

## 1. Công thức Đạo diễn Vàng (The Master Prompt Formula)

```
[Shot Size + Camera Angle], [Subject + Physical Identity], [Kinetic Action Beat], [Environment + Atmosphere + Weather], [Master Lighting Setup], [Camera Movement Rig], [Art Style + Film Stock Emulation], [Emotional Mood], [Optical Specs: Focal Length, Aperture, Aspect Ratio]
```

## 2. Thang Chấm Điểm 4 Trụ Cột Đạo Diễn (4-Pillar Critique HUD)
1. **Bố Cục (Composition - 25đ)**: Kiểm tra Tỷ lệ vàng, Điểm tựa mắt, Leading lines, Negative space.
2. **Ánh Sáng (Lighting - 25đ)**: Tỷ lệ tương phản key/fill (4:1 hoặc 8:1), Hướng sáng vật lý, Rim light.
3. **Màu Sắc (Color Harmony - 25đ)**: Phối màu 60-30-10, Teal & Orange, Nhiệt độ màu Kelvin chuẩn xác.
4. **Chất Liệu & Quang Học (Texture & Optics - 25đ)**: Độ sâu trường ảnh DOF, Tiêu cự ống kính, Subsurface scattering.

## 3. Checklist Linter Quang Học (Optical Physics Guardrails)
- [ ] Không kết hợp góc siêu rộng (<16mm) với khẩu độ xóa phông cực đại (f/1.2).
- [ ] Không kết hợp bối cảnh đêm khuya với ánh sáng Golden Hour / Direct Midday Sun.
- [ ] Mỗi clip video 5-10 giây chỉ chứa tối đa 1 chuyển động camera chính và 1 hành động hạt nhân.
- [ ] Nhân vật xuyên suốt các cảnh phải khóa các dấu ấn nhận diện: trang phục, nếp tóc, phụ kiện.

Được trích xuất từ hệ sinh thái Cine Prompt Pro Studio: https://cine-prompt-pro.vercel.app/
"""

js_addon = f"""
/* ── BILINGUAL GLOSSARY & 10 COMMERCIAL PRESETS CONTROLLER (CINE PROMPT PRO) ── */
(function() {{
  const GLOSSARY = {json.dumps(terms, ensure_ascii=False)};
  const COMM_PRESETS = {json.dumps(comm_presets, ensure_ascii=False)};
  const EMOTIONS = {json.dumps(emotion_matrix, ensure_ascii=False)};
  const SKILL_MD = {json.dumps(skill_markdown_text, ensure_ascii=False)};

  function showToast(msg, icon = '✨') {{
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed; bottom:24px; right:24px; background:rgba(15,17,26,0.95); border:1.5px solid #ffd700; color:#fff; padding:10px 18px; border-radius:10px; font-size:0.82rem; font-weight:700; z-index:9999999; display:flex; align-items:center; gap:8px; box-shadow:0 8px 30px rgba(0,0,0,0.7); backdrop-filter:blur(10px); transition:all 0.3s;';
    toast.innerHTML = `<span>${{icon}}</span> <span>${{msg}}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {{
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 350);
    }}, 3000);
  }}

  function initGlossaryModal() {{
    const modal = document.getElementById('bilingual-glossary-modal');
    const openBtn = document.getElementById('glossary-modal-btn');
    const closeBtn = document.getElementById('glossary-close-btn');
    const doneBtn = document.getElementById('glossary-modal-done-btn');
    const searchInput = document.getElementById('glossary-search-input');
    const container = document.getElementById('glossary-results-container');
    const statsText = document.getElementById('glossary-stats-text');
    const catPills = document.querySelectorAll('.glossary-cat-btn');

    if (!modal || !openBtn) return;

    let currentCategory = 'all';
    let searchQuery = '';

    function removeAccents(str) {{
      return str ? str.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D') : '';
    }}

    function renderTerms() {{
      if (!container) return;
      container.innerHTML = '';
      const q = searchQuery.trim().toLowerCase();
      const qNo = removeAccents(q);

      const filtered = GLOSSARY.filter(item => {{
        if (currentCategory !== 'all' && item.category !== currentCategory) return false;
        if (!q) return true;
        const enMatch = item.en.toLowerCase().includes(q);
        const viMatch = item.vi.toLowerCase().includes(q) || removeAccents(item.vi.toLowerCase()).includes(qNo);
        const usageMatch = item.usage && (item.usage.toLowerCase().includes(q) || removeAccents(item.usage.toLowerCase()).includes(qNo));
        return enMatch || viMatch || usageMatch;
      }});

      if (statsText) statsText.textContent = `Đang hiển thị ${{filtered.length}} / ${{GLOSSARY.length}} thuật ngữ`;

      if (filtered.length === 0) {{
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:#64748b; font-size:0.85rem;">Không tìm thấy thuật ngữ phù hợp với từ khóa "${{searchQuery}}"</div>`;
        return;
      }}

      // Limit rendering to first 120 for instant performance
      const slice = filtered.slice(0, 120);
      slice.forEach(item => {{
        const card = document.createElement('div');
        card.style.cssText = 'background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:10px 12px; display:flex; flex-direction:column; justify-content:space-between; gap:6px; transition:border 0.2s;';
        card.onmouseover = () => card.style.borderColor = 'rgba(56,189,248,0.4)';
        card.onmouseout = () => card.style.borderColor = 'rgba(255,255,255,0.08)';

        card.innerHTML = `
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">
              <strong style="color:#38bdf8; font-size:0.80rem; font-family:'JetBrains Mono',monospace;">${{item.en}}</strong>
              <span style="font-size:0.62rem; color:#ffd700; background:rgba(255,215,0,0.1); padding:1px 5px; border-radius:4px; white-space:nowrap;">${{item.subCategory ? item.subCategory.slice(0, 18) : 'Cinema'}}</span>
            </div>
            <div style="color:#e2e8f0; font-size:0.75rem; line-height:1.4; margin-bottom:4px;">${{item.vi}}</div>
            ${{item.usage ? `<div style="color:#94a3b8; font-size:0.68rem; font-style:italic;">💡 ${{item.usage}}</div>` : ''}}
          </div>
          <div style="display:flex; justify-content:flex-end; margin-top:4px;">
            <button class="glossary-insert-btn" style="background:linear-gradient(135deg, rgba(56,189,248,0.25), rgba(168,85,247,0.25)); border:1px solid #38bdf8; color:#7dd3fc; font-size:0.68rem; font-weight:700; padding:3px 10px; border-radius:5px; cursor:pointer; transition:all 0.2s;">
              + Chèn Vào Prompt
            </button>
          </div>
        `;

        const btn = card.querySelector('.glossary-insert-btn');
        btn.addEventListener('click', () => {{
          const subjectEl = document.getElementById('subject-input');
          if (subjectEl) {{
            const currentVal = subjectEl.value.trim();
            subjectEl.value = currentVal ? `${{currentVal}}, ${{item.en}}` : item.en;
            subjectEl.dispatchEvent(new Event('input', {{ bubbles: true }}));
            showToast(`Đã chèn: ${{item.en}}`, '🎬');
          }}
        }});

        container.appendChild(card);
      }});
    }}

    openBtn.addEventListener('click', () => {{
      modal.style.display = 'flex';
      renderTerms();
      setTimeout(() => searchInput && searchInput.focus(), 100);
    }});

    const closeHandler = () => modal.style.display = 'none';
    if (closeBtn) closeBtn.addEventListener('click', closeHandler);
    if (doneBtn) doneBtn.addEventListener('click', closeHandler);
    modal.addEventListener('click', (e) => {{ if (e.target === modal) closeHandler(); }});

    if (searchInput) {{
      let timer = null;
      searchInput.addEventListener('input', (e) => {{
        clearTimeout(timer);
        timer = setTimeout(() => {{
          searchQuery = e.target.value;
          renderTerms();
        }}, 180);
      }});
    }}

    catPills.forEach(pill => {{
      pill.addEventListener('click', () => {{
        catPills.forEach(p => {{
          p.classList.remove('active');
          p.style.background = 'rgba(255,255,255,0.06)';
          p.style.color = '#cbd5e1';
          p.style.border = '1px solid rgba(255,255,255,0.12)';
        }});
        pill.classList.add('active');
        pill.style.background = '#38bdf8';
        pill.style.color = '#000';
        pill.style.border = 'none';
        currentCategory = pill.dataset.cat || 'all';
        renderTerms();
      }});
    }});
  }}

  function initSkillExportModal() {{
    const modal = document.getElementById('skill-export-modal');
    const openBtn = document.getElementById('skill-export-btn');
    const closeBtn = document.getElementById('skill-export-close-btn');
    const copyBtn = document.getElementById('skill-export-copy-btn');
    const downloadBtn = document.getElementById('skill-export-download-btn');
    const textarea = document.getElementById('skill-export-textarea');

    if (!modal || !openBtn) return;

    openBtn.addEventListener('click', () => {{
      if (textarea) textarea.value = SKILL_MD;
      modal.style.display = 'flex';
    }});

    const closeHandler = () => modal.style.display = 'none';
    if (closeBtn) closeBtn.addEventListener('click', closeHandler);
    modal.addEventListener('click', (e) => {{ if (e.target === modal) closeHandler(); }});

    if (copyBtn) {{
      copyBtn.addEventListener('click', () => {{
        if (textarea) {{
          navigator.clipboard.writeText(textarea.value).then(() => {{
            showToast('Đã sao chép SKILL.md vào Clipboard!', '📋');
          }});
        }}
      }});
    }}

    if (downloadBtn) {{
      downloadBtn.addEventListener('click', () => {{
        const blob = new Blob([SKILL_MD], {{ type: 'text/markdown;charset=utf-8;' }});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'SKILL.md';
        link.click();
        URL.revokeObjectURL(url);
        showToast('Đã tải xuống tệp SKILL.md thành công!', '💾');
      }});
    }}
  }}

  function initCommercialPresets() {{
    document.querySelectorAll('.commercial-pill').forEach(btn => {{
      btn.addEventListener('click', () => {{
        const commId = btn.dataset.commId;
        const preset = COMM_PRESETS.find(p => p.id === commId);
        if (!preset) return;

        // Highlight active commercial pill
        document.querySelectorAll('.commercial-pill').forEach(b => {{
          b.classList.toggle('style-pill--active', b === btn);
          b.style.borderColor = b === btn ? '#ffd700' : 'rgba(255,255,255,0.12)';
          b.style.background = b === btn ? 'linear-gradient(135deg, rgba(255,215,0,0.35), rgba(245,158,11,0.25))' : '';
        }});

        const subjectEl = document.getElementById('subject-input');
        if (subjectEl) {{
          subjectEl.value = preset.prompt;
          subjectEl.dispatchEvent(new Event('input', {{ bubbles: true }}));
        }}

        showToast(`Kích hoạt: ${{preset.title}}`, '🔥');
      }});
    }});
  }}

  function initEmotionMatrix() {{
    document.querySelectorAll('.emotion-pill').forEach(btn => {{
      btn.addEventListener('click', () => {{
        const emotionKey = btn.dataset.emotion;
        const item = EMOTIONS[emotionKey];
        if (!item) return;

        document.querySelectorAll('.emotion-pill').forEach(b => {{
          const isActive = b === btn;
          b.style.background = isActive ? 'linear-gradient(135deg, rgba(192,132,252,0.35), rgba(56,189,248,0.25))' : 'rgba(255,255,255,0.06)';
          b.style.borderColor = isActive ? '#c084fc' : 'rgba(255,255,255,0.15)';
          b.style.color = isActive ? '#fff' : '#cbd5e1';
          b.style.fontWeight = isActive ? '800' : '700';
          b.style.boxShadow = isActive ? '0 0 10px rgba(192,132,252,0.4)' : 'none';
        }});

        const subjectEl = document.getElementById('subject-input');
        if (subjectEl) {{
          const cur = subjectEl.value.trim();
          subjectEl.value = cur ? `${{cur}}, ${{item.snippet}}` : item.snippet;
          subjectEl.dispatchEvent(new Event('input', {{ bubbles: true }}));
        }}

        showToast(`Đạo diễn Cảm xúc: ${{item.emotionVi}}`, '🎭');
      }});
    }});
  }}

  document.addEventListener('keydown', (e) => {{
    if (e.key === 'Escape') {{
      const gModal = document.getElementById('bilingual-glossary-modal');
      const sModal = document.getElementById('skill-export-modal');
      if (gModal && gModal.style.display === 'flex') gModal.style.display = 'none';
      if (sModal && sModal.style.display === 'flex') sModal.style.display = 'none';
    }}
  }});

  if (document.readyState === 'loading') {{
    document.addEventListener('DOMContentLoaded', () => {{
      initGlossaryModal();
      initSkillExportModal();
      initCommercialPresets();
      initEmotionMatrix();
    }});
  }} else {{
    initGlossaryModal();
    initSkillExportModal();
    initCommercialPresets();
    initEmotionMatrix();
  }}
}})();
"""

# Append to assets/index-BeKU_6gu.js
with open(bundle_path, "r", encoding="utf-8") as f:
    bundle_content = f.read()

# Check if already patched to avoid duplicate appending
if "BILINGUAL GLOSSARY & 10 COMMERCIAL PRESETS CONTROLLER" not in bundle_content:
    bundle_content += "\n" + js_addon
    with open(bundle_path, "w", encoding="utf-8") as f:
        f.write(bundle_content)
    print("SUCCESS: Patched assets/index-BeKU_6gu.js")
else:
    print("ALREADY PATCHED: assets/index-BeKU_6gu.js")

# Copy to public/assets/index-BeKU_6gu.js
with open(public_bundle_path, "w", encoding="utf-8") as f:
    f.write(bundle_content)
print("SUCCESS: Patched public/assets/index-BeKU_6gu.js")
