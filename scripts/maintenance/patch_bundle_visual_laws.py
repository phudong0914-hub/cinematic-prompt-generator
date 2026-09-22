import os

bundle_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\assets\index-BeKU_6gu.js"
with open(bundle_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Linter
linter_needle = """n.aspectRatio==="9:16"&&t.includes("anamorphic horizontal blue streak flare")&&a.push({type:"ASPECT_ANAMORPHIC_OPTIMIZATION",message:"Tối ưu tỷ lệ: Vệt lóe sáng ngang Anamorphic hoạt động tốt nhất trên khung hình rộng 16:9 hoặc 2.39:1 Cinema.",fix:'Chuyển sang "Spherical Cooke S4/i soft portrait bokeh" cho khung dọc 9:16.'});"""

linter_addon = linter_needle + """
(t.includes('cluttered')||t.includes('overcrowded')||t.includes('too many objects'))&&!(t.includes('negative space')||t.includes('breathing room')||t.includes('anti-horror-vacui'))&&i.push({type:'HORROR_VACUI_OVERCROWDING',severity:'MEDIUM',message:'Hội chứng Horror Vacui (Bài 6): Khung hình nhồi nhét quá nhiều chi tiết, phá vỡ nhịp thở.',fix:'Thêm "deliberate expansive negative space, anti-horror-vacui breathing room".'});
(t.includes('skin pore')||t.includes('fabric weave')||t.includes('micro-texture')||t.includes('somatosensory'))&&!(t.includes('raking light')||t.includes('grazing light')||t.includes('cross light'))&&a.push({type:'MISSING_RAKING_LIGHT_TEXTURE',message:'Chất liệu thiếu ánh sáng xiên (Bài 10): Cần ánh sáng quét góc cực thấp 10-20° để kích hoạt vỏ não xúc giác (Somatosensory).',fix:'Thêm "10-20 degree low-angle raking light grazing across tactile micro-textures".'});
(['neon green','vivid purple','bright yellow','saturated cyan','fiery red'].filter(c=>t.includes(c)).length>=3)&&!(t.includes('dominant color')||t.includes('dominant palette')||t.includes('monochromatic'))&&i.push({type:'CHROMATIC_CHAOS_CONFLICT',severity:'MEDIUM',message:'Nhiễu loạn sắc độ (Bài 8): Thiếu quy luật 80% hệ màu chủ đạo dẫn dắt cảm xúc.',fix:'Áp dụng "curated 80% dominant color harmony with calculated complementary chromatic accents".'});
(t.includes('exotic tribe')||t.includes('primitive people')||t.includes('savior helping'))&&i.push({type:'ETHICAL_FRAMING_CONFLICT',severity:'HIGH',message:'Cảnh báo Đạo đức thị giác (Bài 3): Phát hiện dấu hiệu Exoticization hoặc Savior Framing.',fix:'Chuyển sang "authentic human dignity, dignified sovereign presence, eye-level camera stance".'});
"""

if linter_needle in content:
    content = content.replace(linter_needle, linter_addon)
    print("SUCCESS: Linter patched")
else:
    print("WARNING: linter_needle not found")

# 2. Update Image Prompt in displayDualResult
dual_needle = """acter visual anchor: ${d}`),A=Mt(A);const R=window.mjHdMode===!0;A+=", 65mm IMAX format"""
dual_replacement = """acter visual anchor: ${d}`),A=Mt(A);const activeLaws=getActiveVisualLaws();if(activeLaws.length>0){A=injectVisualLawsIntoPrompt(A,activeLaws);}const R=window.mjHdMode===!0;A+=", 65mm IMAX format"""

if dual_needle in content:
    content = content.replace(dual_needle, dual_replacement)
    print("SUCCESS: displayDualResult visual laws injection patched")
else:
    print("WARNING: dual_needle not found")

with open(bundle_path, "w", encoding="utf-8") as f:
    f.write(content)

# Also copy to public/assets/index-BeKU_6gu.js
public_bundle = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2\public\assets\index-BeKU_6gu.js"
with open(public_bundle, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Both bundles updated cleanly!")
