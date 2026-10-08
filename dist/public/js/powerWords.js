/**
 * powerWords.js
 * ─────────────────────────────────────────────────────────────────────────────
 * BỘ TỪ NGỮ SỨC MẠNH & MẪU CÂU HOOK CHUYỂN ĐỔI CAO (WORDS THAT SELL ENGINE)
 * Tuyển tập 1000+ từ ngữ và câu hỏi khơi gợi thu hút khán giả đa nền tảng
 * Dành cho: Video Hook (TikTok, Reels, Shorts), Kịch bản TVC, Call To Action,
 * Giới thiệu sản phẩm & Tăng tỷ lệ chuyển đổi (Richard Bayan Framework).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const POWER_WORD_CATEGORIES = {
  discount_urgency: {
    id: "discount_urgency",
    labelVi: "Khuyến Mãi, Tiết Kiệm & Khẩn Cấp (Urgency & Scarcity)",
    icon: "🔥",
    description: "Tạo cảm giác gấp gáp, quà tặng miễn phí, giảm thiểu rủi ro mua hàng và kích hoạt hành động ngay lập tức."
  },
  curiosity_announcement: {
    id: "curiosity_announcement",
    labelVi: "Mới Lạ, Tò Mò & Tin Nóng (Curiosity & News)",
    icon: "⚡",
    description: "Kích hoạt bản năng tò mò, khám phá bí mật, thông báo độc quyền và tin sốt dẻo."
  },
  hook_questions_openers: {
    id: "hook_questions_openers",
    labelVi: "Câu Hỏi Khơi Gợi & Mẫu Mở Đầu (Hook Openers & Retainers)",
    icon: "🎯",
    description: "Giữ chân khán giả trong 3 giây đầu tiên của video, đánh trúng nỗi đau và kích hoạt trí tưởng tượng."
  },
  authority_prestige_proof: {
    id: "authority_prestige_proof",
    labelVi: "Quyền Uy, Đẳng Cấp & Chứng Thực (Authority & Proof)",
    icon: "🏆",
    description: "Khẳng định vị thế chuyên gia, bảo chứng chất lượng, thành tựu đỉnh cao và sự an tâm tuyệt đối."
  },
  effortless_frictionless: {
    id: "effortless_frictionless",
    labelVi: "Đơn Giản, Dễ Dàng & Xóa Rào Cản (Effortless & Frictionless)",
    icon: "✨",
    description: "Hạ thấp ngưỡng hành động, cam kết không rắc rối, phù hợp cho người mới bắt đầu."
  },
  growth_transformation: {
    id: "growth_transformation",
    labelVi: "Bứt Phá, Cảm Xúc & Kích Hoạt Giác Quan (Scale & Sensory)",
    icon: "🚀",
    description: "Khuấy động cảm xúc, phóng đại quy mô tăng trưởng, đánh thức mọi giác quan của người xem."
  }
};

export const POWER_WORDS_DATABASE = [
  // ── 1. KHUYẾN MÃI, TIẾT KIỆM & KHẨN CẤP (DISCOUNT, URGENCY & SCARCITY) ──
  { phrase: "MIỄN PHÍ !", category: "discount_urgency", tag: "free", context: "Tiêu đề, nút CTA hoặc sticker nổi bật" },
  { phrase: "Quà tặng miễn phí!", category: "discount_urgency", tag: "gift", context: "Quà tặng đính kèm khi đăng ký hoặc mua sắm" },
  { phrase: "Tiết kiệm", category: "discount_urgency", tag: "save", context: "Nhấn mạnh lợi ích kinh tế cho khách hàng" },
  { phrase: "Quà tặng ưu đãi", category: "discount_urgency", tag: "bonus", context: "Ưu đãi bổ sung gia tăng giá trị nhận được" },
  { phrase: "Dùng thử không rủi ro", category: "discount_urgency", tag: "risk-free", context: "Xóa tan nỗi sợ mua nhầm của người xem" },
  { phrase: "Ưu đãi trong thời gian có hạn", category: "discount_urgency", tag: "urgency", context: "Giới hạn thời gian kích thích chốt đơn" },
  { phrase: "Ưu đãi làm quen", category: "discount_urgency", tag: "introductory", context: "Khách hàng mới trải nghiệm lần đầu" },
  { phrase: "Chỉ trong thời gian giới hạn", category: "discount_urgency", tag: "urgency", context: "Tạo áp lực thời gian sắp kết thúc" },
  { phrase: "Ưu đãi độc quyền", category: "discount_urgency", tag: "exclusive", context: "Cảm giác đặc quyền cho người theo dõi" },
  { phrase: "Cơ hội cuối cùng!", category: "discount_urgency", tag: "scarcity", context: "Nhắc nhở giờ chót trước khi đóng ưu đãi" },
  { phrase: "Giảm giá bùng nổ!", category: "discount_urgency", tag: "sale", context: "Chiến dịch siêu sale hoặc flash sale" },
  { phrase: "Giảm giá đặc biệt", category: "discount_urgency", tag: "sale", context: "Dành riêng cho sự kiện hoặc đối tượng cụ thể" },
  { phrase: "Gói cuối cùng", category: "discount_urgency", tag: "scarcity", context: "Số lượng tồn kho hoặc suất đăng ký còn lại" },
  { phrase: "Giảm giá sập sàn! Như trên TV", category: "discount_urgency", tag: "sale", context: "Nhịp quảng cáo đại chúng quen thuộc, uy tín" },
  { phrase: "Quay lại do nhu cầu đám đông", category: "discount_urgency", tag: "social-proof", context: "Chứng minh sản phẩm từng cháy hàng" },
  { phrase: "Tiết kiệm... % trên...", category: "discount_urgency", tag: "percentage", context: "Con số cụ thể minh bạch mức giảm" },
  { phrase: "Giá thấp nhất từ trước đến nay", category: "discount_urgency", tag: "best-price", context: "Đỉnh điểm ưu đãi không thể bỏ lỡ" },
  { phrase: "Chiết khấu mùa xuân", category: "discount_urgency", tag: "seasonal", context: "Chương trình theo mùa hoặc lễ tết" },
  { phrase: "Chiết khấu chỉ dành cho thành viên", category: "discount_urgency", tag: "membership", context: "Tạo cảm giác được đối xử VIP" },
  { phrase: "Chiết khấu đặc biệt Tiết kiệm ... $ kèm theo", category: "discount_urgency", tag: "bundled", context: "Nhận tiền tiết kiệm cụ thể trực tiếp" },
  { phrase: "Đại hạ giá", category: "discount_urgency", tag: "megasale", context: "Đợt xả kho hoặc khai trương quy mô lớn" },
  { phrase: "Món hời", category: "discount_urgency", tag: "bargain", context: "Giá trị nhận được vượt trội so với số tiền bỏ ra" },
  { phrase: "Của bạn MIỄN PHÍ! Hoàn toàn miễn phí", category: "discount_urgency", tag: "free", context: "Xác nhận không phát sinh bất kỳ phụ phí nào" },
  { phrase: "Không tốn tiền!", category: "discount_urgency", tag: "free", context: "Đơn giản, trực diện, không rào cản tài chính" },
  { phrase: "Tải xuống miễn phí", category: "discount_urgency", tag: "digital-free", context: "CTA cho tài liệu số, preset hoặc file mẫu" },
  { phrase: "Mua một tặng một", category: "discount_urgency", tag: "bogo", context: "Ưu đãi nhân đôi kích thích ra quyết định" },
  { phrase: "Chúng tôi đang có chương trình tặng...", category: "discount_urgency", tag: "giveaway", context: "Lời mời tham gia nhận quà thân thiện" },
  { phrase: "Nó là của bạn", category: "discount_urgency", tag: "ownership", context: "Trao quyền sở hữu tinh thần cho người xem" },
  { phrase: "Đó là món quà chúng tôi dành cho bạn", category: "discount_urgency", tag: "appreciation", context: "Tri ân chân thành, tạo thiện cảm" },
  { phrase: "Nó là của bạn, hãy đặt mua ngay bây giờ", category: "discount_urgency", tag: "cta-direct", context: "Kêu gọi hành động trực tiếp, dứt khoát" },
  { phrase: "Bạn cũng sẽ nhận được... miễn phí", category: "discount_urgency", tag: "bonus-stack", context: "Hiệu ứng chồng quà tặng (bonus stacking)" },
  { phrase: "Hãy giữ nó như một món quà của tôi", category: "discount_urgency", tag: "generosity", context: "Phong thái hào phóng của người bán hàng" },
  { phrase: "Tôi sẽ trả tiền món đồ này!", category: "discount_urgency", tag: "bold-guarantee", context: "Cam kết mạnh mẽ khiến người mua ngỡ ngàng" },
  { phrase: "Bao gồm, không tốn thêm chi phí", category: "discount_urgency", tag: "all-inclusive", context: "Minh bạch trọn gói, không chi phí ẩn" },
  { phrase: "$... giá trị hoàn toàn miễn phí!", category: "discount_urgency", tag: "value-anchor", context: "Định giá quà tặng cụ thể để thấy rõ món hời" },
  { phrase: "Nó là của bạn miễn phí, vì bạn đã đồng ý...", category: "discount_urgency", tag: "reciprocity", context: "Quy luật đáp ứng sau khi khách hàng thực hiện một bước nhỏ" },
  { phrase: "Hãy nhận... miễn phí của bạn", category: "discount_urgency", tag: "claim", context: "Thúc giục nhận quyền lợi ngay" },
  { phrase: "Hãy nhận nó - nó là của bạn!", category: "discount_urgency", tag: "claim", context: "Khích lệ mạnh mẽ, ngắn gọn" },
  { phrase: "Quà tặng cho người mua sớm", category: "discount_urgency", tag: "early-bird", context: "Thưởng cho người ra quyết định nhanh nhất" },
  { phrase: "Tiết kiệm CỰC KỲ", category: "discount_urgency", tag: "huge-savings", context: "Nhấn mạnh quy mô tiết kiệm khổng lồ" },
  { phrase: "Tiết kiệm LỚN trên...", category: "discount_urgency", tag: "huge-savings", context: "Điểm nhấn cho danh mục hàng hóa giá trị cao" },
  { phrase: "Dùng thử 30 ngày", category: "discount_urgency", tag: "trial", context: "Khoảng thời gian an toàn đủ để cảm nhận giá trị" },
  { phrase: "Hủy bất cứ lúc nào", category: "discount_urgency", tag: "no-commitment", context: "Tháo gỡ cảm giác bị ràng buộc hợp đồng" },
  { phrase: "Bảo trì miễn phí", category: "discount_urgency", tag: "free-maintenance", context: "Chăm sóc trọn đời, an tâm sử dụng" },
  { phrase: "Đặt hàng", category: "discount_urgency", tag: "action", context: "Hành động mua sắm rõ ràng" },
  { phrase: "Nhanh tay", category: "discount_urgency", tag: "speed", context: "Kích hoạt nhịp độ khẩn trương" },
  { phrase: "Hôm nay", category: "discount_urgency", tag: "today", context: "Khóa thời gian hành động trong ngày" },
  { phrase: "Ngay lập tức", category: "discount_urgency", tag: "instant", context: "Sự phản hồi tức thì, không chờ đợi" },
  { phrase: "... của bạn sắp hết hạn", category: "discount_urgency", tag: "expiration", context: "Báo động sự mất mát (Fear of Missing Out)" },

  // ── 2. MỚI LẠ, TÒ MÒ & TIN NÓNG (CURIOSITY & ANNOUNCEMENTS) ──
  { phrase: "MỚI!", category: "curiosity_announcement", tag: "new", context: "Đập vào mắt đầu tiên, thu hút chú ý tức thì" },
  { phrase: "Mới nhất", category: "curiosity_announcement", tag: "latest", context: "Phiên bản cập nhật cao nhất thị trường" },
  { phrase: "Ưu đãi mới", category: "curiosity_announcement", tag: "new-offer", context: "Cơ hội mới chưa từng công bố trước đây" },
  { phrase: "Giới thiệu...", category: "curiosity_announcement", tag: "intro", context: "Màn ra mắt long trọng của sản phẩm/tính năng" },
  { phrase: "Thông báo...", category: "curiosity_announcement", tag: "announcement", context: "Thông điệp chính thức có sức nặng" },
  { phrase: "Tin tốt!", category: "curiosity_announcement", tag: "good-news", context: "Đưa ra giải pháp giải tỏa nỗi lo âu" },
  { phrase: "Bật mí...", category: "curiosity_announcement", tag: "reveal", context: "Hé lộ thông tin nội bộ ít người biết" },
  { phrase: "Xem trước đặc biệt về...", category: "curiosity_announcement", tag: "sneak-peek", context: "Cho xem trước hậu trường hoặc trailer" },
  { phrase: "Quyền truy cập ưu tiên", category: "curiosity_announcement", tag: "priority-access", context: "Đặc quyền đi trước một bước so với số đông" },
  { phrase: "Cập nhật quan trọng", category: "curiosity_announcement", tag: "update", context: "Thông báo mang tính bước ngoặt" },
  { phrase: "Bí mật", category: "curiosity_announcement", tag: "secret", context: "Từ khóa kinh điển thôi miên trí tò mò" },
  { phrase: "Độc quyền", category: "curiosity_announcement", tag: "exclusive", context: "Chỉ duy nhất ở đây mới có" },
  { phrase: "Hấp dẫn", category: "curiosity_announcement", tag: "attractive", context: "Gợi mở sức hút khó cưỡng" },
  { phrase: "Ly kỳ", category: "curiosity_announcement", tag: "thrilling", context: "Dẫn dắt câu chuyện kịch tính như phim điện ảnh" },
  { phrase: "Nóng sốt", category: "curiosity_announcement", tag: "trending", context: "Bắt kịp xu hướng đang được bàn tán" },
  { phrase: "Choáng váng", category: "curiosity_announcement", tag: "stunning", context: "Hiệu ứng bất ngờ vượt ngoài dự liệu" },
  { phrase: "Gây sốc", category: "curiosity_announcement", tag: "shocking", context: "Phá vỡ niềm tin cũ của khán giả" },
  { phrase: "Đầy ngạc nhiên", category: "curiosity_announcement", tag: "surprising", context: "Tạo cảm xúc kinh ngạc thú vị" },
  { phrase: "Hoành tráng", category: "curiosity_announcement", tag: "epic", context: "Quy mô đồ sộ, góc quay điện ảnh vĩ mô" },
  { phrase: "Kích thích", category: "curiosity_announcement", tag: "stimulating", context: "Khơi dậy mong muốn trải nghiệm" },
  { phrase: "Trong khu vực", category: "curiosity_announcement", tag: "in-the-zone", context: "Trạng thái tập trung cao độ, đắm chìm" },
  { phrase: "Khám phá...", category: "curiosity_announcement", tag: "discover", context: "Kêu gọi bước vào cuộc phiêu lưu tri thức" },
  { phrase: "Phát hiện ...", category: "curiosity_announcement", tag: "uncover", context: "Tìm ra giải pháp bất ngờ cho vấn đề hóc búa" },
  { phrase: "Bây giờ, lần đầu tiên...", category: "curiosity_announcement", tag: "first-time", context: "Cột mốc lịch sử chưa từng xảy ra trước đó" },

  // ── 3. CÂU HỎI KHƠI GỢI & MẪU MỞ ĐẦU (HOOK OPENERS & QUESTIONS) ──
  { phrase: "Hãy tưởng tượng cuộc sống mà không có...", category: "hook_questions_openers", tag: "imagine-pain", context: "Mở đầu video: Vẽ ra viễn cảnh nếu loại bỏ được phiền toái hiện tại" },
  { phrase: "Có phải đã đến lúc bạn...?", category: "hook_questions_openers", tag: "time-to-act", context: "Thức tỉnh hành động đã trì hoãn quá lâu" },
  { phrase: "Lần cuối bạn ... là khi nào?", category: "hook_questions_openers", tag: "nostalgia-check", context: "Đánh thức cảm xúc hoài niệm hoặc thói quen bị lãng quên" },
  { phrase: "Bạn có biết rằng...?", category: "hook_questions_openers", tag: "did-you-know", context: "Mở đầu sự thật gây kinh ngạc để giữ chân 3s đầu" },
  { phrase: "Có phải bạn vẫn...?", category: "hook_questions_openers", tag: "pain-callout", context: "Chỉ thẳng vào sai lầm người xem vẫn đang lặp lại" },
  { phrase: "Bạn có tò mò về...?", category: "hook_questions_openers", tag: "curious", context: "Kích hoạt mong muốn tìm hiểu chi tiết hơn" },
  { phrase: "Bạn có sẵn sàng cho...?", category: "hook_questions_openers", tag: "readiness", context: "Chuẩn bị tâm thế đón nhận bước đột phá mới" },
  { phrase: "Ai có thể nói không với...?", category: "hook_questions_openers", tag: "irresistible", context: "Khẳng định sức hấp dẫn hiển nhiên của giải pháp" },
  { phrase: "Điều này đã bao giờ xảy ra với bạn?", category: "hook_questions_openers", tag: "relatable", context: "Tạo cảm giác đồng cảm tức thì giữa khán giả và nội dung" },
  { phrase: "Kết quả là...", category: "hook_questions_openers", tag: "payoff", context: "Chuyển ý dẫn chứng số liệu hoặc thành quả ấn tượng" },
  { phrase: "Tin hay không...", category: "hook_questions_openers", tag: "believe-it-or-not", context: "Giới thiệu một sự thật tưởng chừng không tưởng" },
  { phrase: "... vẫn không đủ", category: "hook_questions_openers", tag: "not-enough", context: "Chỉ ra giới hạn của các cách làm thông thường" },
  { phrase: "Đi sâu vào...", category: "hook_questions_openers", tag: "deep-dive", context: "Lời mời phân tích chi tiết cốt lõi vấn đề" },
  { phrase: "Tham gia...", category: "hook_questions_openers", tag: "join-in", context: "Kêu gọi hòa mình vào cộng đồng người tiên phong" },
  { phrase: "Hãy tưởng tượng... May mắn thay...", category: "hook_questions_openers", tag: "story-turn", context: "Cấu trúc chuyển cảnh từ khó khăn sang cơ hội thuận lợi" },
  { phrase: "Hãy để tôi giải thích... Tối đa hóa... của bạn", category: "hook_questions_openers", tag: "guide-hook", context: "Vị thế người thầy/chuyên gia hướng dẫn cách tối ưu" },
  { phrase: "Một lời mời đặc biệt", category: "hook_questions_openers", tag: "special-invitation", context: "Đưa ra thông điệp riêng tư và trân trọng" },
  { phrase: "Lời mời cá nhân", category: "hook_questions_openers", tag: "personal-invite", context: "Cảm giác 1-1 không mang tính thương mại đại trà" },
  { phrase: "Một tin nhắn cá nhân từ...", category: "hook_questions_openers", tag: "personal-message", context: "Tăng tính chân thực và sự kết nối giữa người nói và khán giả" },
  { phrase: "Một sự thật lạnh lùng", category: "hook_questions_openers", tag: "cold-truth", context: "Thẳng thắn nhìn vào thực tế nghiệt ngã để thay đổi" },
  { phrase: "... không bao giờ bỏ cuộc", category: "hook_questions_openers", tag: "grit", context: "Truyền cảm hứng kiên trì và bản lĩnh thép" },
  { phrase: "Lối tắt của bạn để...", category: "hook_questions_openers", tag: "shortcut", context: "Tiết kiệm năm tháng mò mẫm bằng quy trình đã đúc kết" },
  { phrase: "... với sự tự tin", category: "hook_questions_openers", tag: "confidence", context: "Đem lại tâm thế vững vàng khi thực thi" },
  { phrase: "Dành một phút để...", category: "hook_questions_openers", tag: "micro-commit", context: "Chỉ xin một khoảnh khắc ngắn để thay đổi góc nhìn" },
  { phrase: "Bạn đã được chọn", category: "hook_questions_openers", tag: "chosen", context: "Khơi gợi lòng tự hào và trách nhiệm cá nhân" },

  // ── 4. QUYỀN UY, ĐẲNG CẤP & CHỨNG THỰC (AUTHORITY & PROOF) ──
  { phrase: "... Như một nhà chuyên nghiệp", category: "authority_prestige_proof", tag: "pro-standard", context: "Nâng chuẩn chất lượng lên mức nhà nghề" },
  { phrase: "... Như một chuyên gia", category: "authority_prestige_proof", tag: "expert-level", context: "Hành động và ra quyết định chuẩn xác như chuyên gia" },
  { phrase: "Giành được", category: "authority_prestige_proof", tag: "achieved", context: "Chiến thắng đầy thuyết phục sau nỗ lực" },
  { phrase: "Giá trị", category: "authority_prestige_proof", tag: "value", context: "Định vị bản chất sâu sắc của sản phẩm/nội dung" },
  { phrase: "Vô hạn", category: "authority_prestige_proof", tag: "limitless", context: "Không có giới hạn về tiềm năng hay khả năng mở rộng" },
  { phrase: "Thượng hạng", category: "authority_prestige_proof", tag: "premium", context: "Chất lượng cao cấp nhất phân khúc" },
  { phrase: "Trọn vẹn", category: "authority_prestige_proof", tag: "complete", context: "Đầy đủ mọi khía cạnh, không thiếu sót" },
  { phrase: "CỘNG THÊM", category: "authority_prestige_proof", tag: "bonus-plus", context: "Nhấn mạnh giá trị gia tăng liên tục" },
  { phrase: "Tổng cộng", category: "authority_prestige_proof", tag: "total-sum", context: "Tổng hòa toàn bộ lợi ích đem lại" },
  { phrase: "Tuyệt đối", category: "authority_prestige_proof", tag: "absolute", context: "Sự chắc chắn và tiêu chuẩn không khoan nhượng" },
  { phrase: "Tốt nhất", category: "authority_prestige_proof", tag: "the-best", context: "Vị trí quán quân không thể thay thế" },
  { phrase: "Bán chạy nhất", category: "authority_prestige_proof", tag: "bestseller", context: "Hiệu ứng bầy đàn chứng minh độ yêu thích" },
  { phrase: "Xếp hạng cao nhất", category: "authority_prestige_proof", tag: "top-rated", context: "Điểm số đánh giá trung thực từ cộng đồng" },
  { phrase: "Nổi tiếng", category: "authority_prestige_proof", tag: "famous", context: "Thương hiệu và nhân vật được đông đảo biết đến" },
  { phrase: "Nguyên mẫu", category: "authority_prestige_proof", tag: "original", context: "Bản gốc chuẩn mực, khởi nguồn của xu hướng" },
  { phrase: "Chính hãng", category: "authority_prestige_proof", tag: "authentic", context: "Nguồn gốc rõ ràng, loại bỏ hàng nhái kém chất lượng" },
  { phrase: "Đã chứng minh", category: "authority_prestige_proof", tag: "proven", context: "Được kiểm chứng qua số liệu và thực tiễn" },
  { phrase: "Đã thử nghiệm", category: "authority_prestige_proof", tag: "tested", context: "Vượt qua các bài test khắc nghiệt nhất" },
  { phrase: "An toàn", category: "authority_prestige_proof", tag: "safe", context: "Bảo đảm bình an, không rủi ro tiềm ẩn" },
  { phrase: "Luôn luôn", category: "authority_prestige_proof", tag: "always", context: "Sự kiên định và độ tin cậy theo thời gian" },
  { phrase: "Giải quyết", category: "authority_prestige_proof", tag: "solve", context: "Xử lý triệt để tận gốc vấn đề nan giải" },
  { phrase: "Kinh ngạc", category: "authority_prestige_proof", tag: "astonishing", context: "Kết quả khiến người xung quanh phải trầm trồ" },
  { phrase: "Quý giá", category: "authority_prestige_proof", tag: "precious", context: "Tài sản và bài học có giá trị bền vững lâu dài" },
  { phrase: "Bảo đảm", category: "authority_prestige_proof", tag: "guaranteed", context: "Lời hứa chắc nịch của thương hiệu" },
  { phrase: "Đoạt giải thưởng", category: "authority_prestige_proof", tag: "award-winning", context: "Được hội đồng chuyên môn vinh danh chính thức" },
  { phrase: "Thiên tài", category: "authority_prestige_proof", tag: "genius", context: "Giải pháp thông minh xuất chúng vượt thời đại" },
  { phrase: "Tinh tế", category: "authority_prestige_proof", tag: "exquisite", context: "Độ hoàn thiện tinh xảo từng milimet" },
  { phrase: "Tỉ mỉ", category: "authority_prestige_proof", tag: "meticulous", context: "Chăm chút đến từng chi tiết nhỏ nhất" },
  { phrase: "Xuất sắc", category: "authority_prestige_proof", tag: "excellent", context: "Vượt xa kỳ vọng thông thường" },
  { phrase: "Kỳ diệu", category: "authority_prestige_proof", tag: "miraculous", context: "Tạo nên sự biến đổi kỳ diệu trong đời sống" },
  { phrase: "Có một không hai", category: "authority_prestige_proof", tag: "unique", context: "Tính độc bản, không thể sao chép" },
  { phrase: "Phép màu của...", category: "authority_prestige_proof", tag: "magic-of", context: "Khắc họa vẻ đẹp diệu kỳ của công nghệ/nghệ thuật" },
  { phrase: "Được tôn trọng", category: "authority_prestige_proof", tag: "respected", context: "Khẳng định uy tín trong mắt đồng nghiệp và xã hội" },
  { phrase: "Được kính mến", category: "authority_prestige_proof", tag: "admired", context: "Nhận được sự trân trọng và ngưỡng mộ chân thành" },
  { phrase: "Được hoan nghênh", category: "authority_prestige_proof", tag: "acclaimed", context: "Được đón nhận nồng nhiệt ngay khi ra mắt" },
  { phrase: "Được theo đuổi", category: "authority_prestige_proof", tag: "sought-after", context: "Món đồ/kỹ năng mà ai cũng khao khát sở hữu" },
  { phrase: "Phải-có", category: "authority_prestige_proof", tag: "must-have", context: "Trang bị thiết yếu không thể thiếu trong balo" },
  { phrase: "Cứng như đá", category: "authority_prestige_proof", tag: "rock-solid", context: "Độ bền bỉ, kiên cố không thể lung lay" },
  { phrase: "Liền mạch", category: "authority_prestige_proof", tag: "seamless", context: "Trải nghiệm mượt mà không chút gián đoạn" },
  { phrase: "Không thể phá vỡ", category: "authority_prestige_proof", tag: "unbreakable", context: "Chắc chắn tuyệt đối trước mọi thử thách" },
  { phrase: "Không thể ngăn cản", category: "authority_prestige_proof", tag: "unstoppable", context: "Đà tiến triển dũng mãnh tiến về phía trước" },
  { phrase: "... về mặt pháp lý!", category: "authority_prestige_proof", tag: "legally-sound", context: "Hợp pháp và an toàn 100% trước luật pháp" },
  { phrase: "... duy nhất... bạn sẽ cần!", category: "authority_prestige_proof", tag: "the-only-one", context: "Giải pháp toàn diện chấm dứt việc tìm kiếm lung tung" },

  // ── 5. ĐƠN GIẢN, DỄ DÀNG & XÓA RÀO CẢN (EFFORTLESS & EASY) ──
  { phrase: "Không rắc rối", category: "effortless_frictionless", tag: "hassle-free", context: "Tránh xa mọi thủ tục rườm rà phiền phức" },
  { phrase: "Không đau đầu", category: "effortless_frictionless", tag: "no-headache", context: "Bỏ qua các bước kỹ thuật phức tạp khó hiểu" },
  { phrase: "Không đổ mồ hôi", category: "effortless_frictionless", tag: "no-sweat", context: "Hoàn thành công việc nhẹ nhàng thảnh thơi" },
  { phrase: "Thuận buồm xuôi gió", category: "effortless_frictionless", tag: "smooth-sailing", context: "Mọi việc diễn ra suôn sẻ từ đầu đến cuối" },
  { phrase: "Dễ như ăn bánh", category: "effortless_frictionless", tag: "piece-of-cake", context: "Thao tác trực quan ai cũng làm được ngay" },
  { phrase: "Ngay cả khi bạn là người mới", category: "effortless_frictionless", tag: "beginner-friendly", context: "Xóa tan nỗi e ngại thiếu kinh nghiệm nền tảng" },
  { phrase: "Tiết kiệm thời gian", category: "effortless_frictionless", tag: "save-time", context: "Rút ngắn hàng giờ thao tác thủ công lặp lại" },
  { phrase: "Một khuôn mẫu cho tất cả Vào bất kỳ dịp nào", category: "effortless_frictionless", tag: "all-in-one-template", context: "Áp dụng linh hoạt cho mọi kịch bản và sự kiện" },
  { phrase: "Với tốc độ của bạn", category: "effortless_frictionless", tag: "at-your-pace", context: "Tự chủ tiến độ học tập và thực hành" },
  { phrase: "Thật nhanh chóng!", category: "effortless_frictionless", tag: "fast", context: "Nhìn thấy kết quả hiển hiện trong chớp mắt" },
  { phrase: "Đó là điều chắc chắn!", category: "effortless_frictionless", tag: "guarantee-certain", context: "Khẳng định độ tin cậy không thể nghi ngờ" },
  { phrase: "Không thể dễ dàng hơn", category: "effortless_frictionless", tag: "easiest", context: "Đơn giản hóa tối đa không thể tối giản hơn" },
  { phrase: "Chưa bao giờ dễ dàng hơn để...", category: "effortless_frictionless", tag: "never-easier", context: "Nhờ công nghệ mới mà việc trước đây khó nay hóa dễ" },
  { phrase: "Không mất chút thời gian nào", category: "effortless_frictionless", tag: "instant-time", context: "Triển khai thần tốc không hao phí công sức" },
  { phrase: "Rất đơn giản!", category: "effortless_frictionless", tag: "very-simple", context: "Tối giản quy trình rõ ràng rành mạch" },
  { phrase: "Không tốn công sức", category: "effortless_frictionless", tag: "effortless", context: "Đạt kết quả tối ưu mà không phải kiệt sức" },
  { phrase: "Trực giác", category: "effortless_frictionless", tag: "intuitive", context: "Giao diện và cách dùng tự nhiên, dễ nắm bắt" },
  { phrase: "Dễ hiểu", category: "effortless_frictionless", tag: "understandable", context: "Ngôn từ trong sáng, mạch lạc, không dùng thuật ngữ đao to búa lớn" },
  { phrase: "Rất dễ dàng", category: "effortless_frictionless", tag: "very-easy", context: "Tự tin bắt tay vào thực hiện ngay lập tức" },
  { phrase: "Dễ làm theo", category: "effortless_frictionless", tag: "easy-to-follow", context: "Hướng dẫn có lộ trình rõ ràng, cầm tay chỉ việc" },
  { phrase: "Đơn giản đến kinh ngạc", category: "effortless_frictionless", tag: "amazingly-simple", context: "Bất ngờ vì giải pháp quá đỗi tinh gọn" },
  { phrase: "Tuyệt vời cho người mới bắt đầu", category: "effortless_frictionless", tag: "starter-choice", context: "Điểm khởi đầu hoàn hảo nhất cho người nhập môn" },
  { phrase: "Bạn không cần phải là một chuyên gia", category: "effortless_frictionless", tag: "no-expert-needed", context: "Đập tan ảo tưởng phải có bằng cấp hay chuyên môn cao" },
  { phrase: "Trong nháy mắt", category: "effortless_frictionless", tag: "in-a-flash", context: "Thời gian phản hồi tính bằng tích tắc" },
  { phrase: "Không phức tạp", category: "effortless_frictionless", tag: "uncomplicated", context: "Bỏ qua các mắt xích rườm rà không cần thiết" },
  { phrase: "Từng bước", category: "effortless_frictionless", tag: "step-by-step", context: "Quy trình tuần tự chắc chắn không lo lạc lối" },
  { phrase: "Thân thiện với người dùng", category: "effortless_frictionless", tag: "user-friendly", context: "Trải nghiệm mượt mà, phục vụ con người chu đáo" },
  { phrase: "An toàn và đơn giản", category: "effortless_frictionless", tag: "safe-simple", context: "Sự kết hợp hoàn hảo giữa độ an toàn và tính giản tiện" },
  { phrase: "Trò trẻ con", category: "effortless_frictionless", tag: "childs-play", context: "Mức độ dễ dàng đến mức trẻ nhỏ cũng thao tác được" },
  { phrase: "Con đường dễ dàng", category: "effortless_frictionless", tag: "easy-path", context: "Lựa chọn lộ trình thông minh thay vì húc đầu vào đá" },
  { phrase: "Linh hoạt", category: "effortless_frictionless", tag: "flexible", context: "Thích ứng tùy biến theo mọi hoàn cảnh cụ thể" },
  { phrase: "Tự động", category: "effortless_frictionless", tag: "automated", context: "Hệ thống tự vận hành không cần con người can thiệp" },
  { phrase: "Trực tiếp cho bạn", category: "effortless_frictionless", tag: "direct-to-you", context: "Chuyển giao tận tay không qua trung gian" },
  { phrase: "Sẵn sàng", category: "effortless_frictionless", tag: "ready", context: "Tư thế sẵn sàng kích hoạt bất cứ lúc nào" },
  { phrase: "Đi đến mọi nơi", category: "effortless_frictionless", tag: "go-anywhere", context: "Tính di động linh hoạt trên mọi thiết bị và nền tảng" },
  { phrase: "Với sự riêng tư như ở nhà bạn Sẵn sàng sử dụng", category: "effortless_frictionless", tag: "private-ready", context: "Bảo mật riêng tư tuyệt đối, mở ra là dùng ngay" },
  { phrase: "Giao tận nơi", category: "effortless_frictionless", tag: "delivered", context: "Tiện ích tối đa chuyển đến ngay ngưỡng cửa" },

  // ── 6. BỨT PHÁ, CẢM XÚC & KÍCH HOẠT GIÁC QUAN (SCALE & SENSORY) ──
  { phrase: "Bội nhân...", category: "growth_transformation", tag: "multiplier", context: "Khuếch đại sức mạnh và hiệu quả lên nhiều lần" },
  { phrase: "Mở rộng...", category: "growth_transformation", tag: "expand", context: "Mở rộng biên giới thị trường và tầm ảnh hưởng" },
  { phrase: "Tăng cường...", category: "growth_transformation", tag: "enhance", context: "Gia cố nội lực và sức mạnh cốt lõi" },
  { phrase: "Phát triển...", category: "growth_transformation", tag: "grow", context: "Tăng trưởng bền vững theo cấp số nhân" },
  { phrase: "Tối đa hóa... của bạn", category: "growth_transformation", tag: "maximize", context: "Khai thác triệt để 100% tiềm năng tiềm ẩn" },
  { phrase: "Cú ăn điểm", category: "growth_transformation", tag: "slam-dunk", context: "Đòn đánh quyết định mang lại chiến thắng giòn giã" },
  { phrase: "Ngoại hạng", category: "growth_transformation", tag: "premier-league", context: "Đẳng cấp vượt trội đứng trên đối thủ một bậc" },
  { phrase: "Khuấy động cảm xúc", category: "growth_transformation", tag: "stir-emotions", context: "Chạm sâu vào trái tim người xem phim/video" },
  { phrase: "Kích thích các giác quan của bạn", category: "growth_transformation", tag: "sensory-overload", context: "Đánh thức thị giác, thính giác và cảm giác xúc giác" },
  { phrase: "Trải nghiệm...", category: "growth_transformation", tag: "experience", context: "Hành trình trải nghiệm thực tế sống động" },
  { phrase: "Cảm nhận năng lượng...", category: "growth_transformation", tag: "feel-energy", context: "Rung động điện ảnh truyền cảm hứng mạnh mẽ" },
  { phrase: "Lợi thế", category: "growth_transformation", tag: "advantage", context: "Vũ khí bí mật mang lại ưu thế cạnh tranh vượt trội" },
  { phrase: "Tân tiến", category: "growth_transformation", tag: "cutting-edge", context: "Công nghệ tiên phong dẫn đầu thị trường" },
  { phrase: "Tăng sức mạnh cho... Tăng tốc...", category: "growth_transformation", tag: "boost-accelerate", context: "Tăng tốc độ về đích lên gấp nhiều lần" },
  { phrase: "Bước đột phá lớn", category: "growth_transformation", tag: "breakthrough", context: "Bước nhảy vọt lịch sử làm thay đổi cục diện" },
  { phrase: "Ngay tức thì...", category: "growth_transformation", tag: "instantaneous", context: "Hiệu quả diễn ra ngay trong giây lát" },
  { phrase: "Tăng trưởng...", category: "growth_transformation", tag: "growth-surge", context: "Đà bứt phá doanh số và chỉ số tương tác" },
  { phrase: "Xây dựng ...", category: "growth_transformation", tag: "build-up", context: "Kiến tạo nền móng vững chắc cho tương lai" }
];

/**
 * Thống kê bộ từ khóa sức mạnh
 */
export const POWER_WORDS_STATS = {
  total: POWER_WORDS_DATABASE.length,
  categoriesCount: Object.keys(POWER_WORD_CATEGORIES).length,
  framework: "Richard Bayan — Words That Sell & High-Converting Social Hooks"
};

/**
 * Lọc danh sách từ ngữ theo danh mục
 */
export function getPowerWordsByCategory(categoryKey) {
  if (!categoryKey || categoryKey === 'all') {
    return POWER_WORDS_DATABASE;
  }
  return POWER_WORDS_DATABASE.filter(item => item.category === categoryKey);
}

/**
 * Tìm kiếm từ khóa theo chuỗi ký tự (hỗ trợ tiếng Việt có dấu và không dấu)
 */
export function searchPowerWords(keyword) {
  if (!keyword || typeof keyword !== 'string') return [];
  
  const normalize = (str) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd');
  };

  const normQuery = normalize(keyword.trim());
  
  return POWER_WORDS_DATABASE.filter(item => {
    const normPhrase = normalize(item.phrase);
    const normContext = normalize(item.context || '');
    const normTag = normalize(item.tag || '');
    return normPhrase.includes(normQuery) || normContext.includes(normQuery) || normTag.includes(normQuery);
  });
}

/**
 * Tự động tạo câu Hook video (TikTok, Reels, Shorts, TVC) dựa trên chủ đề và phong cách
 * @param {Object} options
 * @param {string} options.topic - Chủ đề video (ví dụ: "làm video AI", "sở hữu phim điện ảnh triệu view")
 * @param {string} options.style - "question", "urgency", "secret", "effortless", "transformation"
 * @param {string} options.targetAudience - Đối tượng người xem (ví dụ: "nhà sáng tạo nội dung", "người mới bắt đầu")
 */
export function generateVideoHook({ topic = "sáng tạo video", style = "question", targetAudience = "bạn" } = {}) {
  const cleanTopic = topic.trim();
  
  const hookTemplates = {
    question: [
      `Có phải đã đến lúc ${targetAudience} ngừng loay hoay với ${cleanTopic}?`,
      `Bạn có biết rằng 90% người làm ${cleanTopic} đang bỏ qua bước đột phá này?`,
      `Lần cuối ${targetAudience} cảm nhận được phép màu của ${cleanTopic} là khi nào?`,
      `Điều này đã bao giờ xảy ra với bạn khi bắt tay vào ${cleanTopic}?`
    ],
    urgency: [
      `Cơ hội cuối cùng để ${targetAudience} làm chủ ${cleanTopic} với ưu đãi độc quyền hôm nay!`,
      `Đừng bỏ lỡ: Lối tắt của bạn để đột phá ${cleanTopic} ngay lập tức trước khi cơ hội khép lại.`,
      `Tin tốt! Bí mật làm chủ ${cleanTopic} chỉ trong thời gian giới hạn!`
    ],
    secret: [
      `Bật mí lối tắt của bạn để chinh phục ${cleanTopic} như một chuyên gia!`,
      `Một sự thật lạnh lùng về ${cleanTopic} mà chưa ai từng giải thích cho bạn...`,
      `Khám phá bí mật có một không hai giúp tối đa hóa tiềm năng ${cleanTopic} của bạn!`
    ],
    effortless: [
      `Tự động hóa ${cleanTopic} trong nháy mắt — Dễ như ăn bánh ngay cả khi bạn là người mới!`,
      `Không rắc rối, không đau đầu: Hướng dẫn từng bước làm chủ ${cleanTopic} rất đơn giản!`,
      `Chưa bao giờ dễ dàng hơn để làm ${cleanTopic} với trải nghiệm liền mạch và an toàn!`
    ],
    transformation: [
      `Hãy tưởng tượng cuộc sống mà không có rào cản khi ${cleanTopic} — Bây giờ, lần đầu tiên bạn nắm giữ lợi thế ngoại hạng!`,
      `Bội nhân kết quả và kích thích các giác quan của khán giả qua ${cleanTopic} đoạt giải thưởng!`,
      `Khuấy động cảm xúc người xem: Bước đột phá lớn nâng tầm ${cleanTopic} lên chuẩn điện ảnh!`
    ]
  };

  const selectedList = hookTemplates[style] || hookTemplates.question;
  const randomIndex = Math.floor(Math.random() * selectedList.length);
  const selectedHook = selectedList[randomIndex];

  return {
    hook: selectedHook,
    style,
    topic: cleanTopic,
    formula: "Richard Bayan Words That Sell Hook Formula",
    callToAction: "Hãy nhận ngay hôm nay — Nó là của bạn miễn phí!"
  };
}
