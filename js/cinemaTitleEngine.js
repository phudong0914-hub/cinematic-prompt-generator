/**
 * cinemaTitleEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * BỘ TẠO TIÊU ĐỀ VIRAL & BẢN THIẾT KẾ THUMBNAIL ĐIỆN ẢNH (CINEMA TITLE SUITE)
 * Tạo bộ 3 tiêu đề chuẩn tâm lý học mạng xã hội và khung hướng dẫn thiết kế
 * ảnh thu nhỏ (Thumbnail) giữ CTR > 12%.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export function generateCinemaTitleSuite({ topic = "Tạo ra ngách", targetAudience = "người làm video một mình" } = {}) {
  const cleanTopic = topic.trim();
  const cleanAudience = targetAudience.trim();

  const titles = [
    {
      category: "1. Tiêu Đề Tò Mò & Đảo Ngược Tư Duy (Curiosity Hook)",
      title: `Sự Thật Lạnh Lùng Về ${cleanTopic} Mà 99% Người Làm Video Bỏ Qua!`,
      ctrScore: "95/100",
      psychology: "Tạo sự kích thích hiếu kỳ và nỗi sợ bỏ lỡ thông tin nội bộ (FOMO)."
    },
    {
      category: "2. Tiêu Đề Đánh Trúng Nỗi Đau & Giải Pháp Tức Thì (Pain Relief)",
      title: `Đừng Làm Video Nữa Nếu ${cleanAudience} Chưa Biết Cách ${cleanTopic}!`,
      ctrScore: "92/100",
      psychology: "Đánh thẳng vào rào cản bức bối của đối tượng mục tiêu, buộc họ phải dừng lại xem."
    },
    {
      category: "3. Tiêu Đề Chuẩn SEO Thuật Toán & Tìm Kiếm Cao (Search Intent)",
      title: `Quy Trình ${cleanTopic} Đỉnh Cao Cho ${cleanAudience} (Chốt Sau 14 Bản Thử)`,
      ctrScore: "88/100",
      psychology: "Tối ưu từ khóa tìm kiếm trên TikTok / YouTube Shorts, khẳng định uy tín đã qua thử nghiệm."
    }
  ];

  const thumbnailBlueprint = {
    composition: "Gương mặt Đạo Diễn Trungvt chiếm 45% khung hình bên trái, ánh mắt nhìn thẳng camera với biểu cảm kiên định/tò mò.",
    lighting: "Rembrandt Lighting kết hợp Rim Light xanh dương #0091ff viền quanh vai và tóc để tách chủ thể khỏi nền.",
    textOverlay: {
      maxWords: "3 từ khóa hạt nhân",
      suggestedWords: `${cleanTopic.toUpperCase()} ĐỘC BẢN`,
      font: "Sigmar / Montserrat Black IN HOA",
      colorScheme: "Chữ vàng neon (#FFE600) hoặc trắng tinh khôi viền bóng đen dày",
      placement: "Đặt ở 1/3 khung hình bên phải phía trên, tránh góc dưới bên phải (nơi hiển thị thời lượng video)."
    },
    background: "Bối cảnh phòng làm việc mờ ảo (Creamy Bokeh f/1.4), các đốm sáng mờ tạo chiều sâu không gian điện ảnh.",
    colorGrade: "Teal & Orange Hollywood (Màu da người cam ấm, hậu cảnh xanh lục lam dịu nhẹ)."
  };

  return {
    topic: cleanTopic,
    targetAudience: cleanAudience,
    titles,
    thumbnailBlueprint
  };
}

export function formatCinemaTitleMarkdown(suite) {
  let md = `### 🎬 BỘ TIÊU ĐỀ VIRAL & BẢN THIẾT KẾ THUMBNAIL (SIGNATURE ĐẠO DIỄN TRUNGVT)\n`;
  md += `**Chủ đề**: *${suite.topic}* | **Khán giả mục tiêu**: *${suite.targetAudience}*\n\n`;

  md += `#### 📌 1. BỘ 3 TIÊU ĐỀ VIRAL ĐA MỤC TIÊU:\n`;
  suite.titles.forEach(t => {
    md += `- **${t.category}** (Dự báo CTR: ${t.ctrScore}):\n  👉 **"${t.title}"**\n  *(Tâm lý học: ${t.psychology})*\n\n`;
  });

  md += `#### 🖼️ 2. BẢN THIẾT KẾ THUMBNAIL TRIỆU VIEW (CTR > 12%):\n`;
  md += `- **Bố cục khung hình**: ${suite.thumbnailBlueprint.composition}\n`;
  md += `- **Ánh sáng**: ${suite.thumbnailBlueprint.lighting}\n`;
  md += `- **Chữ trên Thumbnail**: **"${suite.thumbnailBlueprint.textOverlay.suggestedWords}"** (${suite.thumbnailBlueprint.textOverlay.placement})\n`;
  md += `- **Hậu cảnh & Màu sắc**: ${suite.thumbnailBlueprint.background} | *Bảng màu: ${suite.thumbnailBlueprint.colorGrade}*\n`;

  return md;
}
