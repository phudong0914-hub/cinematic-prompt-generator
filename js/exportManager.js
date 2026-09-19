/**
 * exportManager.js — One-Click Production Export Module (Version 2.0)
 * ────────────────────────────────────────────────────────────────
 * Exports production-ready Shotlist in CSV (Excel compatible) and PDF printable formats.
 */

/**
 * Downloads a CSV file with UTF-8 BOM encoding for perfect Excel compatibility.
 * @param {Array<Object>} items 
 * @param {string} filename 
 */
export function exportToCSV(items, filename = 'Production_Shotlist.csv') {
  const lang = localStorage.getItem('cine_lang') || 'vi';

  if (!items || !items.length) {
    alert(lang === 'vi' ? 'Chưa có dữ liệu Prompt để xuất CSV.' : 'No prompt data available to export CSV.');
    return;
  }

  const headersVI = ['STT', 'Tên Thẻ / Phân Cảnh', 'Chủ Đề', 'Nhân Vật', 'Prompt Hình Ảnh (Midjourney)', 'Prompt Video (Runway/Sora)', 'Chỉ Thị NotebookLM'];
  const headersEN = ['No.', 'Card / Scene Name', 'Subject', 'Character', 'Image Prompt (Midjourney)', 'Video Prompt (Runway/Sora)', 'NotebookLM Directives'];
  const headers = lang === 'vi' ? headersVI : headersEN;
  
  let csvContent = '\uFEFF'; // UTF-8 BOM
  csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(',') + '\n';

  items.forEach((item, idx) => {
    const row = [
      idx + 1,
      item.title || item.name || `Shot ${idx + 1}`,
      item.subject || '',
      item.character || '',
      item.imagePrompt || '',
      item.videoPrompt || '',
      item.notebooklmPrompt || ''
    ];
    csvContent += row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generates a Hollywood-style printable PDF Shotlist.
 * @param {Object} currentData 
 */
export function exportToPDF(currentData) {
  const { title, subject, character, imagePrompt, videoPrompt, notebooklmPrompt } = currentData;
  const lang = localStorage.getItem('cine_lang') || 'vi';

  if (!title && !imagePrompt) {
    alert(lang === 'vi' ? 'Vui lòng chọn một thẻ hoặc bấm Director\'s Cut trước khi xuất PDF.' : 'Please select a card or click Director\'s Cut before exporting PDF.');
    return;
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert(lang === 'vi' ? 'Vui lòng cho phép popup trên trình duyệt để mở file PDF.' : 'Please allow browser popups to view the PDF file.');
    return;
  }

  const isEn = lang === 'en';
  const html = `
<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'vi'}">
<head>
  <meta charset="UTF-8">
  <title>${isEn ? 'CINEMATIC SHOTLIST' : 'KỊCH BẢN PHÂN CẢNH ĐIỆN ẢNH'} - ${title || 'PRODUCTION SHOTLIST'}</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 30px; color: #1a1a1a; background: #fff; }
    .header { border-bottom: 3px solid #c9a227; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
    .title { font-size: 24px; font-weight: bold; color: #1a1a1a; text-transform: uppercase; margin: 0; }
    .subtitle { font-size: 13px; color: #666; margin-top: 4px; }
    .meta-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 15px; margin-bottom: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
    .meta-item { display: flex; gap: 8px; }
    .meta-label { font-weight: bold; color: #495057; }
    .section-title { font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; padding: 6px 12px; background: #1a1a1a; color: #ffd700; border-radius: 4px; margin-top: 20px; margin-bottom: 10px; }
    .prompt-card { background: #fafafa; border-left: 4px solid #c9a227; padding: 12px 15px; font-family: monospace; font-size: 12px; line-height: 1.6; white-space: pre-wrap; margin-bottom: 15px; }
    .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #dee2e6; text-align: center; font-size: 11px; color: #868e96; }
    @media print { body { margin: 15mm; } button { display: none; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 class="title">🎬 CINE PROMPT PRO v2.0 - HOLLYWOOD SHOTLIST</h1>
      <div class="subtitle">${isEn ? 'Cinematic Storyboard & Director Technical Specs' : 'Kịch Bản Phân Cảnh & Thông Số Kỹ Thuật Đạo Diễn'}</div>
    </div>
    <button onclick="window.print()" style="padding: 8px 16px; background: #c9a227; color: #000; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;">📄 ${isEn ? 'Print / Save PDF' : 'In / Lưu dạng PDF'}</button>
  </div>

  <div class="meta-box">
    <div class="meta-item"><span class="meta-label">${isEn ? 'STYLE / TECHNIQUE:' : 'PHONG CÁCH / KỸ THUẬT:'}</span> <span>${title || '—'}</span></div>
    <div class="meta-item"><span class="meta-label">${isEn ? 'PROJECT SUBJECT:' : 'CHỦ ĐỀ DỰ ÁN:'}</span> <span>${subject || (isEn ? 'Not specified' : 'Chưa nhập')}</span></div>
    <div class="meta-item"><span class="meta-label">${isEn ? 'LOCKED CHARACTER:' : 'NHÂN VẬT CỐ ĐỊNH:'}</span> <span>${character || 'Default'}</span></div>
    <div class="meta-item"><span class="meta-label">${isEn ? 'DATE:' : 'NGÀY XUẤT:'}</span> <span>${new Date().toLocaleDateString(isEn ? 'en-US' : 'vi-VN')}</span></div>
  </div>

  <div class="section-title">📸 ${isEn ? 'IMAGE PROMPT (MIDJOURNEY / CONCEPT ART)' : 'PROMPT HÌNH ẢNH (MIDJOURNEY / CONCEPT ART)'}</div>
  <div class="prompt-card">${imagePrompt || '—'}</div>

  <div class="section-title">🎥 ${isEn ? 'VIDEO PROMPT (RUNWAY GEN-3 / SORA / KLING AI)' : 'PROMPT VIDEO (RUNWAY GEN-3 / SORA / KLING AI)'}</div>
  <div class="prompt-card">${videoPrompt || '—'}</div>

  <div class="section-title">📓 ${isEn ? 'NOTEBOOKLM DIRECTIVES (OVERVIEW & CHAT)' : 'CHỈ THỊ ĐẠO DIỄN NOTEBOOKLM (OVERVIEW & CHAT)'}</div>
  <div class="prompt-card">${notebooklmPrompt || '—'}</div>

  <div class="footer">
    ${isEn ? 'Exported from Cine Prompt Pro v2.0 • Designed by Mr. Trungvt' : 'Xuất từ Cine Prompt Pro v2.0 • Được thiết kế bởi Mr. Trungvt (Zalo: 08.36.384.168)'}
  </div>
</body>
</html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}

/**
 * 1-Click Production Package Export: Exports a comprehensive text bundle containing
 * all prompts, character anchors, motion parameters, and NotebookLM directives.
 * Perfect for feeding directly to AI Agents (like Kim & Hola).
 * 
 * @param {Object} currentData 
 */
export function exportToPackage(currentData) {
  const { title, subject, character, imagePrompt, videoPrompt, notebooklmPrompt } = currentData;
  const lang = localStorage.getItem('cine_lang') || 'vi';

  if (!title && !imagePrompt) {
    alert(lang === 'vi' ? 'Vui lòng chọn một thẻ hoặc bấm Director\'s Cut trước khi xuất Gói Production Package.' : 'Please select a card or click Director\'s Cut before exporting Production Package.');
    return;
  }

  const isEn = lang === 'en';
  const dateStr = new Date().toLocaleString(isEn ? 'en-US' : 'vi-VN');
  const packageContent = 
`================================================================================
🎬 CINE PROMPT PRO v2.0 — 1-CLICK PRODUCTION PACKAGE FOR AI AGENT (KIM & HOLA)
================================================================================
${isEn ? 'EXPORT DATE:' : 'NGÀY XUẤT:'} ${dateStr}
${isEn ? 'STYLE / TECHNIQUE:' : 'PHONG CÁCH / KỸ THUẬT:'} ${title || 'Default'}
${isEn ? 'PROJECT SUBJECT:' : 'CHỦ ĐỀ DỰ ÁN:'} ${subject || 'Not specified'}
${isEn ? 'LOCKED CHARACTER:' : 'NHÂN VẬT CỐ ĐỊNH:'} ${character || 'Default'}

--------------------------------------------------------------------------------
[STEP 1]: ${isEn ? 'STILL IMAGE PROMPT (MIDJOURNEY V6/V8 & GOOGLE FLOW)' : 'PROMPT HÌNH ẢNH TĨNH (MIDJOURNEY V6/V8 & GOOGLE FLOW)'}
--------------------------------------------------------------------------------
${imagePrompt || 'No image prompt generated'}

--------------------------------------------------------------------------------
[STEP 2]: ${isEn ? 'AI VIDEO MOTION PROMPT (RUNWAY GEN-3 / KLING AI / SORA)' : 'PROMPT CHUYỂN ĐỘNG VIDEO AI (RUNWAY GEN-3 / KLING AI / SORA)'}
--------------------------------------------------------------------------------
${videoPrompt || 'No video prompt generated'}

--------------------------------------------------------------------------------
[STEP 3]: ${isEn ? 'NOTEBOOKLM DIRECTIVES (SCRIPT & OVERVIEW)' : 'CHỈ THỊ ĐẠO DIỄN NOTEBOOKLM (SCRIPT & OVERVIEW)'}
--------------------------------------------------------------------------------
${notebooklmPrompt || 'No NotebookLM script generated'}

================================================================================
END OF PRODUCTION PACKAGE — DEPLOY TO REMOTION / HYPERFRAME
================================================================================`;

  const blob = new Blob([packageContent], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Production_Package_${(title || 'Shot').replace(/[^a-zA-Z0-9]/g, '_')}.txt`);
  document.body.appendChild(link);
  link.click();
}

/**
 * Xuất Gói TVC Commercial Đa Cảnh (Google Flow & Runway/Sora Ready)
 * Được tối ưu hóa chuyên sâu theo thuật toán của các nền tảng video AI:
 * Tách sẵn từng phân cảnh độc lập (Scene 1-4) với câu lệnh sạch, không lẫn tag rác,
 * đồng thời có kịch bản Master Storyboard dành cho Chatbot/Gemini của Flow.
 *
 * @param {Object} data { productName, coreMessage, scenes, scriptText, styleVibe, duration, aspectRatio }
 */
export function exportTVCFlowPackage({
  productName = "Product",
  coreMessage = "Message",
  scenes = [],
  scriptText = "",
  styleVibe = "minimalist",
  duration = 15,
  aspectRatio = "16:9"
}) {
  const isEn = (localStorage.getItem('cine_lang') || 'vi') === 'en';
  const dateStr = new Date().toLocaleString(isEn ? 'en-US' : 'vi-VN');

  let scenesFormatted = '';
  if (scenes && scenes.length > 0) {
    scenesFormatted = scenes.map(s => `================================================================================
🎬 SCENE ${s.sceneNum}: ${s.title.toUpperCase()} [Timecode: ${s.timeRange || `${s.startSec}-${s.endSec}s`}]
================================================================================
🎯 FLOW / VEO / SORA READY PROMPT (Copy dòng này dán thẳng vào ô Video Prompt của Flow):
${s.prompt}

🎥 CAMERA TRAJECTORY:
${s.cameraMotion}

🔤 LOWER-THIRD SUBTITLE / END CARD:
"${s.textOverlay || ''}"

🎙️ VOICEOVER NARRATION (LỜI THOẠI LỒNG TIẾNG):
- Tiếng Việt: "${s.voiceoverVI || ''}"
- English:    "${s.voiceoverEN || ''}"
`).join('\n\n');
  } else {
    scenesFormatted = scriptText || 'No detailed scene prompts generated.';
  }

  const packageContent = 
`================================================================================
🎬 CINE PROMPT PRO v2.0 — GOOGLE FLOW & SORA COMMERCIAL PRODUCTION PACKAGE
================================================================================
THỜI GIAN XUẤT   : ${dateStr}
SẢN PHẨM / BRIEF : ${productName}
THÔNG ĐIỆP CỐT LÕI: ${coreMessage}
PHONG CÁCH THẨM MỸ: ${styleVibe}
THỜI LƯỢNG       : ${duration}s (Chuẩn TVC 4 Hồi: Hook -> Tension -> Reveal -> CTA)
TỶ LỆ KHUNG HÌNH : ${aspectRatio}

--------------------------------------------------------------------------------
💡 HƯỚNG DẪN DÀNH CHO NGƯỜI DÙNG THỦ CÔNG (KHÔNG CẦN CÀI CHROME EXTENSION):
--------------------------------------------------------------------------------
1. Mở Google Flow (labs.google/fx/tools/flow).
2. Tạo 4 Node Video (hoặc 4 lượt tạo) tương ứng với 4 Phân Cảnh bên dưới.
3. Chỉ cần copy đúng đoạn văn dưới mục "FLOW / VEO / SORA READY PROMPT" của từng cảnh
   và dán thẳng vào ô Prompt của Flow. AI sẽ render chính xác 100% không bị lẫn chữ rác!
4. Nếu Flow có node Gemini / Chat Storyboard: Hãy copy toàn bộ phần [MASTER STORYBOARD]
   ở cuối tài liệu này để AI của Flow tự phân tích nhánh video.

${scenesFormatted}

================================================================================
📋 MASTER STORYBOARD SCRIPT (DÀNH CHO CHATBOT / GEMINI FLOW ORCHESTRATOR)
================================================================================
${scriptText}

================================================================================
⚛️ HƯỚNG DẪN DỰNG VIDEO BẰNG CODE (REMOTION / MP4 PIPELINE):
================================================================================
Toàn bộ 4 phân cảnh trên đã được chuẩn hóa frame rate 24fps/30fps và mốc thời gian 
0-3s, 3-6s, 6-10s, 10-15s. Sau khi tải video từ Flow về, bạn có thể ghép ngay bằng 
Remotion component hoặc bất kỳ trình biên tập video nào.
================================================================================`;

  const blob = new Blob([packageContent], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Flow_TVC_Package_${productName.replace(/[^a-zA-Z0-9]/g, '_')}_${duration}s.txt`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

