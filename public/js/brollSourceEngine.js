/**
 * brollSourceEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * TRỢ LÝ TÌM NGUỒN TƯ LIỆU B-ROLL TẢI ĐƯỢC NGAY (B-ROLL SOURCE FINDER)
 * Tự động tạo link tìm kiếm Pexels, Pixabay, Mixkit, gom nhóm cảnh tự quay
 * và đặt tên file gợi ý cho CapCut: mocgiay_mota-ngan.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function buildStockLinks(keyword) {
  if (!keyword || typeof keyword !== 'string') return [];
  const slug = keyword.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return [
    `https://www.pexels.com/search/videos/${slug}/`,
    `https://pixabay.com/videos/search/${slug}/`,
    `https://mixkit.co/free-stock-video/${slug}/`
  ];
}

export function buildFileName(sec, shortDesc) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  const timeStr = `${String(m).padStart(2, '0')}${String(s).padStart(2, '0')}`;
  const slugDesc = shortDesc.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${timeStr}_${slugDesc}`;
}

export function generateBrollSourcePlan(cues = []) {
  const items = [];
  const selfShotByLocation = {};

  if (cues && cues.length > 0) {
    let lastSec = 3.0;
    for (let i = 0; i < cues.length; i++) {
      const cue = cues[i];
      if (cue.startSec < 3.0) continue;
      if (cue.startSec - lastSec < 2.5) continue;

      const lower = cue.text.toLowerCase();
      // Kiểm tra có hình ảnh cụ thể (đồ vật, hành động, nơi chốn, số)
      const hasConcreteVisual = /bàn|máy tính|laptop|điện thoại|sổ|viết|ngồi|phòng|tiền|con số|kết quả|khách hàng/i.test(lower);
      if (!hasConcreteVisual && cues.length > 8) continue;

      const isSelfShot = /tôi|mình|bản thân|làm việc|bàn|kinh nghiệm/i.test(lower);
      const timeStr = `00:${String(Math.floor(cue.startSec)).padStart(2, '0')}`;

      if (isSelfShot) {
        const location = lower.includes("bàn") || lower.includes("máy tính") ? "Bàn làm việc" : "Không gian phòng làm việc";
        const shotDesc = "Quay cận đôi bàn tay gõ phím trên laptop hoặc ghi chép sổ tay";
        const filename = buildFileName(cue.startSec, "go-phim-laptop");

        const planItem = {
          timeRange: timeStr,
          spokenText: cue.text,
          type: "Tự quay",
          visualNeed: shotDesc,
          guidanceOrLinks: `Góc máy: Cận tay / Màn hình. Địa điểm: ${location}. Quay 5s bằng điện thoại.`,
          filename,
          location
        };
        items.push(planItem);

        if (!selfShotByLocation[location]) selfShotByLocation[location] = [];
        selfShotByLocation[location].push({ timeRange: timeStr, desc: shotDesc, filename });
      } else {
        const kw1 = "typing-laptop-night";
        const kw2 = "creative-thinking-workspace";
        const links1 = buildStockLinks(kw1);
        const filename = buildFileName(cue.startSec, "stock-y-tuong");

        const planItem = {
          timeRange: timeStr,
          spokenText: cue.text,
          type: "Stock",
          visualNeed: "Cảnh minh họa người làm việc tập trung hoặc không gian sáng tạo",
          guidanceOrLinks: `Từ khoá: \`${kw1}\` | Links:\n- [Pexels](${links1[0]})\n- [Pixabay](${links1[1]})\n- [Mixkit](${links1[2]})`,
          filename
        };
        items.push(planItem);
      }

      lastSec = cue.startSec + 3.0;
      if (items.length >= 10) break;
    }
  }

  // Mẫu mặc định nếu chưa có SRT
  if (items.length === 0) {
    const kw = "typing-laptop-night";
    const links = buildStockLinks(kw);
    items.push(
      {
        timeRange: "00:21",
        spokenText: "Khi bạn bắt tay vào làm việc một mình trên máy tính...",
        type: "Tự quay",
        visualNeed: "Cận cảnh bàn tay gõ phím trên bàn làm việc trong phòng tối",
        guidanceOrLinks: "Góc máy: Cận tay. Địa điểm: Bàn làm việc. Quay điện thoại 5s.",
        filename: "0021_go-phim-laptop",
        location: "Bàn làm việc"
      },
      {
        timeRange: "00:45",
        spokenText: "Khán giả lướt qua hàng trăm video mỗi ngày trên mạng xã hội...",
        type: "Stock",
        visualNeed: "Màn hình điện thoại lướt nhanh newsfeed mạng xã hội",
        guidanceOrLinks: `Từ khoá: \`${kw}\` | Links:\n- [Pexels](${links[0]})\n- [Pixabay](${links[1]})\n- [Mixkit](${links[2]})`,
        filename: "0045_luot-dien-thoai"
      }
    );
    selfShotByLocation["Bàn làm việc"] = [
      { timeRange: "00:21", desc: "Cận cảnh bàn tay gõ phím trên bàn làm việc", filename: "0021_go-phim-laptop" }
    ];
  }

  return { items, selfShotByLocation };
}

export function formatBrollSourceMarkdown(plan) {
  let md = `### 📥 BẢNG TƯ LIỆU B-ROLL TẢI ĐƯỢC NGAY (CÓ LINK SẴN)\n\n`;
  md += `| Mốc giây | Câu đang nói | Loại (tự quay / stock) | Cảnh cần có | Cách quay HOẶC từ khoá + 3 link |\n`;
  md += `| :---: | :--- | :---: | :--- | :--- |\n`;

  plan.items.forEach(it => {
    md += `| ${it.timeRange} | "${it.spokenText}" | **${it.type}** | ${it.visualNeed} | ${it.guidanceOrLinks} |\n`;
  });

  md += `\n### 🏠 1. DANH SÁCH CẢNH TỰ QUAY (GOM THEO ĐỊA ĐIỂM ĐỂ QUAY 1 LƯỢT):\n`;
  for (const [loc, shots] of Object.entries(plan.selfShotByLocation)) {
    md += `\n**📍 Địa điểm: ${loc}**\n`;
    shots.forEach((s, idx) => {
      md += `- [ ] [${s.timeRange}] ${s.desc} ➔ File: \`${s.filename}.mp4\`\n`;
    });
  }

  md += `\n### 🏷️ 2. TÊN FILE GỢI Ý CHO CAPCUT (MẪU: mocgiay_mota-ngan):\n`;
  plan.items.forEach(it => {
    md += `- Mốc ${it.timeRange}: \`${it.filename}.mp4\` (${it.type})\n`;
  });

  return md;
}
