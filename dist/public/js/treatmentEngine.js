/**
 * treatmentEngine.js — Director Treatment & Story Architecture Engine
 * ─────────────────────────────────────────────────────────────────────────────
 * Inspired by Lemo-Opuscar DIRECTOR.md & Adapted for Đạo Diễn Trungvt Studio Engine.
 * 
 * CORE DIRECTING METHODOLOGY:
 * 1. Take the Brief: Duration (15–60s), Aspect (16:9 / 9:16 / 21:9), Sound target (-14 LUFS).
 * 2. Benchmark First: What to Learn (grammar, rhythm, tone) vs What NOT to Take (clichés, logos).
 * 3. 3 Candidate Structures: Propose 3 narrative options, select the best with director rationale.
 * 4. Story Core: Logline + 3-Act Arc (Setup → The Turn → Resonant Ending).
 * 5. The Native Move: One medium-specific signature technique at the emotional climax.
 * 6. Shot List & Motivation: Framing, Camera Move, Duration, and Director "WHY".
 * 7. Sound Design & Cue Map: Ambience bed, Foley event cues, Score curve, -14 LUFS mix.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const NARRATIVE_STRUCTURES = [
  {
    id: "journey_transformation",
    name: "Hành Trình Chuyển Hóa (Journey & Transformation)",
    concept: "Nhân vật/chủ thể đối mặt thách thức -> nỗ lực bứt phá -> biến đổi hoàn toàn ở cao trào.",
    bestFor: "Thương hiệu cá nhân, sản phẩm đột phá, câu chuyện truyền cảm hứng",
    act1: "Thế giới thực tại & điểm nghẽn (Setup)",
    act2: "Hành động vượt ngưỡng & thử thách (The Turn)",
    act3: "Trạng thái mới vượt trội & dư âm (New Normal)"
  },
  {
    id: "before_after_contrast",
    name: "Tương Phản Trước / Sau (High-Contrast Duality)",
    concept: "Cực điểm đau đầu / ma sát -> Điểm chuyển giao bất ngờ -> Trải nghiệm thăng hoa nhẹ nhàng.",
    bestFor: "TVC sản phẩm tiêu dùng, giải pháp công nghệ, dịch vụ cao cấp",
    act1: "Ma sát & bất tiện thực tế (Friction State)",
    act2: "Khoảnh khắc khai sáng / sản phẩm xuất hiện (The Catalyst)",
    act3: "Sự thanh thoát & thỏa mãn tuyệt đối (Elevated State)"
  },
  {
    id: "countdown_escalation",
    name: "Leo Thang Nhịp Độ & Bùng Nổ (Countdown Escalation)",
    concept: "Áp lực thời gian đếm ngược dồn dập -> Nhịp cắt tăng dần -> Cú nổ giải tỏa ngoạn mục.",
    bestFor: "Trailer điện ảnh, TVC thể thao, sự kiện ra mắt, đồ uống tăng lực",
    act1: "Nhịp thở căng thẳng & mục tiêu tối thượng (Ticking Clock)",
    act2: "Nhịp cắt gia tốc & xung đột tột độ (Kinetic Climax)",
    act3: "Khoảnh khắc tĩnh lặng sau cú nổ (The Reverberation)"
  },
  {
    id: "listicle_mindset_twist",
    name: "Liệt Kê 3 Bước Đảo Ngược Tư Duy (3-Beat Mindset Shift)",
    concept: "Khơi gợi tò mò -> 2 bước nền tảng vững chắc -> Bước 3 đảo ngược toàn bộ giả định ban đầu.",
    bestFor: "Video ngắn viral (Reels/TikTok/Shorts), giáo dục, tư vấn chuyên gia",
    act1: "Vấn đề ai cũng nghĩ mình biết (The Premise)",
    act2: "Thực tế phản trực giác (The Hidden Truth)",
    act3: "Cú chốt tư duy đảo ngược (The Mindset Twist)"
  },
  {
    id: "seamless_infinity_loop",
    name: "Vòng Lặp Vô Tận Điện Ảnh (Seamless Infinity Loop)",
    concept: "Mở đầu bằng câu hỏi/hình ảnh thị giác -> Phát triển cao trào -> Câu kết nối hoàn hảo về giây 00:00.",
    bestFor: "Video ngắn giữ chân 100% thời lượng xem lặp, nghệ thuật thị giác",
    act1: "Cú móc thị giác & âm thanh giật mình (The Hook)",
    act2: "Hành trình mở ra tầng nghĩa mới (The Expansion)",
    act3: "Khóa vòng lặp trở về điểm xuất phát (The Infinite Seam)"
  }
];

export const NATIVE_MOVES_CATALOG = [
  {
    id: "anamorphic_streak_bloom",
    name: "Anamorphic Optical Streak & Flare Bloom",
    description: "Vệt sáng Anamorphic hổ phách lóe ngang khung hình, chuyển từ mờ ảo sang nét căng siêu thực.",
    medium: "Cinematic Film / Commercial"
  },
  {
    id: "whip_zoom_macro_punch",
    name: "Whip-Zoom Punch to Macro Texture",
    description: "Cú giật zoom tốc độ cao đâm thẳng từ toàn cảnh vào chi tiết giọt nước / vi mạch / vân da.",
    medium: "High-Energy Commercial / Product Reveal"
  },
  {
    id: "match_cut_kinetic_rotation",
    name: "Kinetic Motion Match Cut",
    description: "Khớp chuyển động xoay 180° của vật thể để chuyển bối cảnh không một vết cắt nhận biết được.",
    medium: "Dynamic Editing / Fashion / Automotive"
  },
  {
    id: "canvas_ink_bleed_dissolve",
    name: "Procedural Ink Bleed & Negative Space Wipe",
    description: "Vết mực hữu cơ loang dần trên nền đen, nuốt chửng khung hình và nở ra cảnh tiếp theo.",
    medium: "Art House / Procedural Code / Title Sequence"
  },
  {
    id: "isometric_drift_snap",
    name: "2.5D Isometric Drift to Typography Snap",
    description: "Lớp hình ảnh trôi đa tầng parallax rồi khóa cứng vào lưới typographic typography sắc lẹm.",
    medium: "Tech TVC / Motion Graphics / Trungvt Signature"
  }
];

/**
 * Generate director benchmark analysis
 */
export function generateBenchmark({ topic = "", style = "Cinematic Commercial" } = {}) {
  const cleanTopic = topic.trim() || "Thương hiệu & Sản phẩm cao cấp";
  return {
    referenceBenchmark: `Chuẩn mực điện ảnh tham chiếu cho ${cleanTopic} (${style})`,
    whatToLearn: [
      "Ngữ pháp góc máy (Camera Grammar): Góc máy có chủ đích, dùng tiêu cự phù hợp để tạo độ nén không gian tự nhiên.",
      "Nhịp điệu dựng (Rhythm & Pacing): Cắt theo nhịp thở cảm xúc, không cắt vụn vặt; tôn trọng thời gian lưu ảnh võng mạc.",
      "Bố cục ánh sáng (Chiaroscuro & Strata): Tách biệt rõ Foreground / Midground / Background bằng ánh sáng tương phản.",
      "Âm thanh đa tầng (Sound Hierarchy): Foley chân thực trong từng va chạm vật lý kết hợp nhạc nền ducking chuẩn -14 LUFS."
    ],
    whatNotToTake: [
      "Tránh các biểu tượng sáo mòn (clichés): không dùng hiệu ứng logo 3D quay tròn nhàm chán.",
      "Không lạm dụng chuyển cảnh lố lăng: từ chối các hiệu ứng chuyển cảnh giật lag làm xao nhãng thông điệp.",
      "Không dùng âm nhạc generic văn phòng: tránh nhạc nền thang âm vui tươi rẻ tiền thiếu bản sắc.",
      "Không nhồi nhét chữ che mặt nhân vật: luôn tuân thủ Safe Zone 9:16 và 16:9."
    ]
  };
}

/**
 * Build a complete Treatment Specification
 * @param {Object} options
 * @returns {Object} Director Treatment Object
 */
export function buildDirectorTreatment({
  title = "Dự Án Điện Ảnh Đỉnh Cao",
  topic = "Cà phê pha phin truyền thống phong cách Noir",
  director = "Đạo Diễn Trungvt",
  style = "Film Noir Commercial 1990s",
  durationSec = 30,
  aspectRatio = "16:9",
  fps = 24,
  language = "vi",
  targetAudience = "Khán giả yêu nghệ thuật & phong cách sống tinh tế",
  structureId = "before_after_contrast",
  nativeMoveId = "whip_zoom_macro_punch"
} = {}) {
  // 1. Select Narrative Structure
  const selectedStructure = NARRATIVE_STRUCTURES.find(s => s.id === structureId) || NARRATIVE_STRUCTURES[1];
  const candidateStructures = NARRATIVE_STRUCTURES.slice(0, 3).map(s => ({
    id: s.id,
    name: s.name,
    concept: s.concept,
    isSelected: s.id === selectedStructure.id
  }));

  // 2. Select Native Move
  const selectedNativeMove = NATIVE_MOVES_CATALOG.find(m => m.id === nativeMoveId) || NATIVE_MOVES_CATALOG[1];

  // 3. Generate Benchmark
  const benchmark = generateBenchmark({ topic, style });

  // 4. Logline & 3-Act Arc
  const logline = `Trong một không gian đậm chất ${style}, câu chuyện khám phá bản chất của "${topic}" thông qua hành trình thị giác và xúc giác, đạt đến đỉnh điểm với hiệu ứng ${selectedNativeMove.name} trước khi kết thúc bằng dư âm khó quên.`;

  const threeActArc = {
    act1: {
      name: "Hồi 1: Thiết Lập (Setup)",
      timing: `00:00.0 - 00:${String(Math.round(durationSec * 0.25)).padStart(2, '0')}.0`,
      focus: selectedStructure.act1,
      description: `Mở ra thế giới quan với ánh sáng đặc trưng, giới thiệu chủ thể trong nhịp điệu tĩnh lặng nhưng gợi mở tò mò.`
    },
    act2: {
      name: "Hồi 2: Bước Ngoặt (The Turn & Escalation)",
      timing: `00:${String(Math.round(durationSec * 0.25)).padStart(2, '0')}.0 - 00:${String(Math.round(durationSec * 0.75)).padStart(2, '0')}.0`,
      focus: selectedStructure.act2,
      description: `Xung lực tăng dần, ma sát được đẩy lên đỉnh điểm, chuẩn bị cho cú chuyển dịch bản chất.`
    },
    act3: {
      name: "Hồi 3: Cao Trào & Dư Âm (Climax & Resolution)",
      timing: `00:${String(Math.round(durationSec * 0.75)).padStart(2, '0')}.0 - 00:${String(durationSec).padStart(2, '0')}.0`,
      focus: selectedStructure.act3,
      description: `Kích hoạt Native Move "${selectedNativeMove.name}", chốt lại thông điệp đắt giá và để lại dư ba sâu lắng.`
    }
  };

  // 5. Shot List with Director Motivation ("Why")
  const shotCount = Math.max(3, Math.round(durationSec / 5));
  const shotList = [];
  const framings = ["Extreme Wide Shot", "Medium Close-up", "Macro Insert", "Low Angle Hero", "Close-up Focus Pull", "Wide Horizon"];
  const moves = ["Slow Dolly In", "Static Locked-off", "Whip Pan to Right", "Steadicam Tracking", "Crane Pedestal Down", "Orbital Arc"];

  for (let i = 1; i <= shotCount; i++) {
    const isFirst = i === 1;
    const isClimax = i === Math.round(shotCount * 0.8);
    const isLast = i === shotCount;

    const shotDuration = Number((durationSec / shotCount).toFixed(1));
    const startSec = Number(((i - 1) * shotDuration).toFixed(1));
    const endSec = Number((i * shotDuration).toFixed(1));

    let shotFraming = framings[(i - 1) % framings.length];
    let shotMove = moves[(i - 1) % moves.length];
    let motivation = "";

    if (isFirst) {
      shotFraming = "Wide Establishing to Medium";
      shotMove = "Slow Atmospheric Push-In";
      motivation = "Thiết lập bầu không khí, móc chặt ánh nhìn người xem trong 3 giây đầu tiên.";
    } else if (isClimax) {
      shotFraming = "Macro Extreme Close-Up";
      shotMove = selectedNativeMove.name;
      motivation = `Đỉnh điểm xúc cảm: Kích hoạt Native Move "${selectedNativeMove.name}" tạo ấn tượng võng mạc sâu sắc.`;
    } else if (isLast) {
      shotFraming = "Medium Wide Hero Lock";
      shotMove = "Subtle Drift to Stillness";
      motivation = "Khóa chặt thông điệp thương hiệu, để lại khoảng lặng lắng đọng trước khi Fade to Black.";
    } else {
      motivation = `Dẫn dắt chuyển động thị giác tự nhiên, kết nối nhịp nhàng giữa Hồi trước và Hồi sau.`;
    }

    shotList.push({
      shotIndex: i,
      timeRange: `${startSec}s - ${endSec}s`,
      durationSec: shotDuration,
      framing: shotFraming,
      cameraMove: shotMove,
      action: `Cảnh ${i}: Khám phá chi tiết ${topic} dưới góc nhìn ${style}.`,
      directorWhy: motivation
    });
  }

  // 6. Sound Design Table & Cue Map
  const soundDesign = {
    masterLoudness: "-14 LUFS (EBU R128 Cinema Standard)",
    duckingCurve: "Voice Active: -18dB Music Ducking, Attack 40ms, Release 280ms",
    ambienceBed: `Lớp nền âm thanh không gian ${style} (analog room tone, subtle environmental hum, tape warmth).`,
    keyFoleyCues: [
      { time: "00:00.2", event: "Tiếng rít kim đĩa than / tiếng thở không gian mở màn" },
      { time: `00:${String(Math.round(durationSec * 0.4)).padStart(2, '0')}.5`, event: "Tiếng va chạm vật lý xúc giác (tiếng rót, tiếng chạm kim loại, tiếng bước chân)" },
      { time: `00:${String(Math.round(durationSec * 0.78)).padStart(2, '0')}.0`, event: `Cú nổ âm thanh đi kèm Native Move: Sub-bass drop + whoosh tần số cao` },
      { time: `00:${String(durationSec - 1.5).padStart(2, '0')}.0`, event: "Reverb tail ngân vang vào khoảng lặng Fade to Black" }
    ],
    scoreState: [
      { section: "Hồi 1", instrumentation: "Dải bass mỏng, nhịp điệu thưa, tạo không gian cho giọng đọc" },
      { section: "Hồi 2", instrumentation: "Bổ sung dàn dây hoặc synthesizer arpeggio leo thang năng lượng" },
      { section: "Hồi 3", instrumentation: "Dàn hợp xướng/full harmonic climax rồi dứt khoát về nốt pedal ngân dài" }
    ]
  };

  return {
    metadata: {
      title,
      topic,
      director,
      style,
      durationSec,
      aspectRatio,
      fps,
      language,
      targetAudience,
      generatedAt: new Date().toISOString()
    },
    candidateStructures,
    selectedStructure,
    benchmark,
    logline,
    threeActArc,
    nativeMove: selectedNativeMove,
    shotList,
    soundDesign
  };
}

/**
 * Format the treatment as an authoritative Markdown document (TREATMENT.md)
 */
export function formatTreatmentMarkdown(treatment) {
  const m = treatment.metadata;
  let md = `# 🎬 DIRECTOR TREATMENT SPECIFICATION: ${m.title.toUpperCase()}\n\n`;
  md += `> **Đạo Diễn**: ${m.director}  \n`;
  md += `> **Chủ Đề**: ${m.topic}  \n`;
  md += `> **Phong Cách**: ${m.style} | **Tỉ Lệ**: ${m.aspectRatio} | **Thời Lượng**: ${m.durationSec}s | **FPS**: ${m.fps}fps  \n`;
  md += `> **Tiêu Chuẩn Âm Thanh**: ${treatment.soundDesign.masterLoudness}  \n\n`;

  md += `---\n\n`;
  md += `## 1. CÁC PHƯƠNG ÁN CẤU TRÚC TỰ SỰ (3 CANDIDATE STRUCTURES)\n\n`;
  treatment.candidateStructures.forEach((c, idx) => {
    md += `### ${idx + 1}. ${c.name} ${c.isSelected ? '⭐ **[ĐÃ CHỌN]**' : ''}\n`;
    md += `- **Ý niệm**: ${c.concept}\n\n`;
  });
  md += `**Lý do chọn phương án "${treatment.selectedStructure.name}"**:\n`;
  md += `Phương án này tối ưu hóa cảm xúc người xem cho chủ đề "${m.topic}", tạo ra bước ngoặt thuyết phục và tôn vinh phong cách ${m.style}.\n\n`;

  md += `---\n\n`;
  md += `## 2. CHUẨN MỰC ĐIỆN ẢNH THAM CHIẾU (BENCHMARK FIRST)\n\n`;
  md += `### 💡 Điểm Cần Học Hỏi (What to Learn):\n`;
  treatment.benchmark.whatToLearn.forEach(item => {
    md += `- ✅ ${item}\n`;
  });
  md += `\n### 🚫 Điểm Tuyệt Đối Tránh (What NOT to Take):\n`;
  treatment.benchmark.whatNotToTake.forEach(item => {
    md += `- ❌ ${item}\n`;
  });

  md += `\n---\n\n`;
  md += `## 3. LOGLINE & CẤU TRÚC 3 HỒI (THE 3-ACT ARC)\n\n`;
  md += `**Logline**:\n> *"${treatment.logline}"*\n\n`;
  md += `| Hồi | Mốc Giây | Trọng Tâm | Mô Tả Ý Đồ Đạo Diễn |\n`;
  md += `| :--- | :---: | :--- | :--- |\n`;
  md += `| **${treatment.threeActArc.act1.name}** | ${treatment.threeActArc.act1.timing} | ${treatment.threeActArc.act1.focus} | ${treatment.threeActArc.act1.description} |\n`;
  md += `| **${treatment.threeActArc.act2.name}** | ${treatment.threeActArc.act2.timing} | ${treatment.threeActArc.act2.focus} | ${treatment.threeActArc.act2.description} |\n`;
  md += `| **${treatment.threeActArc.act3.name}** | ${treatment.threeActArc.act3.timing} | ${treatment.threeActArc.act3.focus} | ${treatment.threeActArc.act3.description} |\n\n`;

  md += `---\n\n`;
  md += `## 4. CHIÊU THỨC BẢN ĐỊA ĐẶC TRƯNG (THE NATIVE MOVE)\n\n`;
  md += `- **Chiêu thức**: **${treatment.nativeMove.name}**\n`;
  md += `- **Môi trường phù hợp**: ${treatment.nativeMove.medium}\n`;
  md += `- **Mô tả thị giác**: ${treatment.nativeMove.description}\n`;
  md += `- **Vị trí kích hoạt**: Đặt chính xác tại cao trào Hồi 3 nhằm tạo cú hích võng mạc không thể xóa nhòa.\n\n`;

  md += `---\n\n`;
  md += `## 5. BẢNG PHÂN CẢNH VÀ ĐỘNG CƠ ĐẠO DIỄN (SHOT LIST & "WHY")\n\n`;
  md += `| # | Thời lượng | Cỡ cảnh (Framing) | Chuyển động máy (Camera Move) | Hành động chính | Động cơ đạo diễn ("WHY") |\n`;
  md += `| :-: | :---: | :--- | :--- | :--- | :--- |\n`;
  treatment.shotList.forEach(s => {
    md += `| **${s.shotIndex}** | ${s.timeRange} | ${s.framing} | ${s.cameraMove} | ${s.action} | *${s.directorWhy}* |\n`;
  });

  md += `\n---\n\n`;
  md += `## 6. THIẾT KẾ ÂM THANH & BẢN ĐỒ CUE (SOUND DESIGN & CUE MAP)\n\n`;
  md += `- **Chuẩn âm lượng**: ${treatment.soundDesign.masterLoudness}\n`;
  md += `- **Đường cong Ducking**: ${treatment.soundDesign.duckingCurve}\n`;
  md += `- **Lớp âm thanh nền (Ambience Bed)**: ${treatment.soundDesign.ambienceBed}\n\n`;

  md += `### 🎧 Mốc Foley Chính (Key Foley Cues):\n`;
  treatment.soundDesign.keyFoleyCues.forEach(f => {
    md += `- **[${f.time}]**: ${f.event}\n`;
  });

  md += `\n### 🎼 Diễn Tiến Nhạc Nền (Score Progression):\n`;
  treatment.soundDesign.scoreState.forEach(sc => {
    md += `- **${sc.section}**: ${sc.instrumentation}\n`;
  });

  return md;
}
