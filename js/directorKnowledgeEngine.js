/**
 * directorKnowledgeEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * HOLLYWOOD DIRECTOR & CINEMATOGRAPHY KNOWLEDGE ENGINE (v3.0 Production Ready)
 * ─────────────────────────────────────────────────────────────────────────────
 * Module mở rộng chuyên biệt chứa các chuẩn mực kỹ thuật điện ảnh cao cấp:
 * 1. Camera Rigs & Motion Dynamics (Cẩu quay, Tay máy, Con quay, Tốc độ khung hình)
 * 2. Actor Directing & Micro-expressions (Chỉ đạo diễn xuất & Vi biểu cảm ánh mắt)
 * 3. Cinematic Sound Design & Foley Sync (Âm thanh hiện trường, Foley, Nhạc nền AI)
 * 4. Master Lenses & Film Stocks (Ống kính Hollywood & Giả lập phim nhựa)
 * 5. Anti-Noise Guardrails (Bộ lọc tự động loại bỏ từ khóa rác gây ảo giác AI)
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── 1. CAMERA RIGS & ADVANCED MOTION DYNAMICS ──
export const CAMERA_RIGS_AND_MOTION = {
  rigs: [
    {
      name: "Russian Arm / Pursuit Crane",
      vi: "Tay máy cần cẩu Russian Arm gắn trên nóc xe rượt đuổi tốc độ cao",
      prompt: "Russian Arm pursuit vehicle camera rig, high-speed dynamic tracking shot, sweeping low-angle to high-angle transition, rock-steady stabilization"
    },
    {
      name: "Technocrane 50ft",
      vi: "Cẩu cơ học Technocrane tầm xa vươn qua đám đông và chướng ngại vật",
      prompt: "Technocrane 50ft telescopic camera move, sweeping majestic crane down from wide architectural master shot into tight dramatic close-up"
    },
    {
      name: "Snorricam Body Rig",
      vi: "Giá máy Snorricam gắn trực tiếp vào ngực diễn viên tạo cảm giác hoảng loạn/say xỉn",
      prompt: "Snorricam body-mounted rig, camera locked to actor's chest, background violently shifting while subject remains centered, psychological tension"
    },
    {
      name: "Trinity Steadicam 360",
      vi: "Thiết bị Steadicam Trinity hạ sát mặt đất rồi lượn 360 độ lên ngang tầm mắt",
      prompt: "ARRI Trinity 5-axis stabilized fluid camera glide, seamless tilt from ground level boots rising to eye-level portrait in continuous fluid take"
    },
    {
      name: "FPV Micro Drone Cinematic Fly-Through",
      vi: "Flycam FPV siêu nhỏ luồn lách qua khe hẹp, nội thất và cửa sổ",
      prompt: "FPV micro cinewhoop drone one-shot, swooping through narrow architectural interior, soaring seamlessly out through open window into expansive landscape"
    },
    {
      name: "Cable Cam / 3D Wirecam",
      vi: "Camera trượt cáp tốc độ cao trên không trung",
      prompt: "High-velocity cable cam aerial glide, perfectly smooth overhead traversal across expansive stadium or forest canopy"
    },
    {
      name: "Ronin 4D 4-Axis Z-Axis Arm",
      vi: "Tay cầm chống rung 4 trục triệt tiêu hoàn toàn bước chân khi chạy",
      prompt: "DJI Ronin 4D 4-axis gimbal tracking shot, zero vertical stepping bounce, ultra-smooth handheld pacing running alongside subject"
    }
  ],

  speedCurves: [
    {
      name: "120fps Cinematic Overcrank",
      vi: "Quay chậm 120fps chuẩn điện ảnh (từng giọt mưa, bụi tàn thuốc lơ lửng)",
      prompt: "120fps high-speed phantom overcrank slow-motion, suspended airborne particles, hyper-smooth fluid temporal dilation"
    },
    {
      name: "Speed Ramp (Ease-in / Snap Out)",
      vi: "Tăng tốc đột ngột rồi khóa chậm kịch tính",
      prompt: "Dramatic speed ramping, ultra-fast motion blur burst slowing down abruptly into razor-sharp crystal-clear impact frame"
    },
    {
      name: "Vertigo Dolly Zoom (Push-Pull)",
      vi: "Hiệu ứng Vertigo: Máy tiến vào đồng thời phóng to tiêu cự",
      prompt: "Zolly / Vertigo effect, camera dolly push-in while simultaneous optical zoom-out, warping background perspective while subject size remains constant"
    },
    {
      name: "Whip Pan Snap Transition",
      vi: "Quất máy lia cực nhanh tạo vệt nhòe chuyển cảnh",
      prompt: "Kinetic whip pan transition, high-velocity rotational motion blur snapping instantly onto secondary subject"
    }
  ]
};

// ── 2. ACTOR DIRECTING & MICRO-EXPRESSIONS ──
export const ACTOR_DIRECTING_SYSTEM = {
  microExpressions: [
    {
      state: "Kìm Nén Bi Thương (Suppressed Grief)",
      prompt: "Micro-expression of suppressed grief: subtle jaw clench, slight quivering of lower lip, 15-degree off-axis downward gaze, glassy eyes with a single unshed tear catching rim light"
    },
    {
      state: "Quyết Tâm Thép & Tập Trung Cao Độ (Steely Resolve)",
      prompt: "Steely determination micro-expression: intense focused ocular fixation, dilated pupils, tightened brow brow ridge, steady unblinking gaze with subtle nostril flare"
    },
    {
      state: "Sốc & Vỡ Mộng Tột Cùng (Existential Shock)",
      prompt: "Numb existential shock: thousand-yard stare, parted dry lips, subtle pulse visibly fluttering in neck carotid artery, shallow suppressed breathing"
    },
    {
      state: "Nguy Hiểm & Toan Tính Ngầm (Calculating Menace)",
      prompt: "Subtle calculating menace: faint asymmetric smirk twitch, tilted head angle, cold penetrating direct-to-lens eye contact, unreadable calm body posture"
    },
    {
      state: "Thăng Hoa & Chiêm Nghiệm (Sublime Awe)",
      prompt: "Sublime awe and wonder: dilated reflective pupils mirroring ambient golden luminescence, relaxed facial musculature, slow reverent upward tilt of head"
    }
  ],

  bodySubtext: [
    "Tense rigid shoulders with hands subtly clenched behind back",
    "Casual nonchalant slouch masking high nervous alertness",
    "Protective closed posture with arms crossed tightly across chest",
    "Slow measured predatory stride with completely silent footfall"
  ]
};

// ── 3. CINEMATIC SOUND DESIGN & FOLEY (For Sora, Veo 3.1, Runway) ──
export const SOUND_AND_FOLEY_ENGINE = {
  ambience: [
    "Distant howling wind through canyon pine trees, subtle atmospheric sub-drone 40Hz",
    "Heavy rain patter on corrugated tin roof with muffled city siren reverberation",
    "Cavernous echoing cathedral room tone with subtle distant water drips",
    "Humming fluorescent sodium vapor light ballast, vintage tape hiss noise floor"
  ],
  foleyTextures: [
    "Crisp tactile leather jacket creaking with each arm movement, heavy boots crushing dry autumn leaves",
    "Metallic chamber click of precision mechanical bolt sliding into place, tactile brass shell casing clatter",
    "Delicate wet tire hiss on rainy asphalt, muffled engine purr idling in shadows",
    "Soft rustle of silk fabric, slow audible intake of breath in dead silence"
  ],
  musicImpacts: [
    "Low-frequency Hans Zimmer 'Braam' brass horn swell fading into solitary cello motif",
    "Rising dissonant violin tremolo creating unbearable psychological suspense",
    "Minimalist pulsating 80s analog synthesizer bassline with heavy tape saturation",
    "Sudden deafening audio drop-to-silence highlighting solo heartbeat thump"
  ]
};

// ── 4. MASTER LENSES & FILM EMULATIONS ──
export const MASTER_LENSES_AND_STOCKS = {
  lenses: [
    { name: "Panavision C-Series Anamorphic 40mm", prompt: "Panavision C-Series Anamorphic lens, characteristic oval horizontal blue streak flare, organic barrel distortion at edges, shallow cinematic depth of field" },
    { name: "ARRI Master Prime 35mm T1.3", prompt: "ARRI Master Prime 35mm lens shot wide open at T1.3, surgical sharpness at focal center, creamy creamy bokeh falloff, zero chromatic aberration" },
    { name: "Cooke S4/i 85mm 'Cooke Look'", prompt: "Cooke S4/i 85mm portrait prime, legendary warm flattering skin tones, gentle natural contrast transition, silky smooth optical round bokeh" },
    { name: "Angenieux Optimo 24-290mm Zoom", prompt: "Angenieux Optimo cinema zoom, classic 1970s slow optical push-in, rich vintage saturation" },
    { name: "Laowa 24mm Probe Macro Lens", prompt: "Laowa 24mm Probe macro lens perspective, deep field of view crawling inches along textured surface with immense spatial scale" }
  ],
  filmStocks: [
    { name: "Kodak Vision3 500T 5219", prompt: "Shot on Kodak Vision3 500T 35mm film, rich shadow latitude, gorgeous golden skin warmth under tungsten key light, subtle organic grain structure" },
    { name: "Cinestill 800T Tungsten", prompt: "Cinestill 800T film emulation, iconic red/orange halation glow surrounding practical neon streetlights, moody cyan-shifted shadows" },
    { name: "Kodak Portra 400 Medium Format", prompt: "Kodak Portra 400 120mm medium format photograph, soft pastel tonal curve, true-to-life skin rendition, fine scanning grain" },
    { name: "Technicolor 3-Strip (1950s Era)", prompt: "Vintage Technicolor 3-strip color saturation, vivid hyper-rich primary reds and emerald greens, dramatic high-contrast golden age Hollywood glamour" }
  ]
};

// ── 4B. STEVE JOBS' HOLLYWOOD DIRECTOR MASTER SIGNATURE MODES ──
export const LEGENDARY_DIRECTORS_PRESETS = [
  {
    id: "nolan",
    name: "Christopher Nolan (IMAX Grandeur)",
    desc: "70mm IMAX 15-perf, thực tế vật lý (practical effects), góc quay hoành tráng, âm hưởng kèn Hans Zimmer",
    prompt: "Directed by Christopher Nolan, 70mm IMAX 15-perf cinematography, Panavision spherical lenses, practical in-camera realism, grand architectural scale, cold slate blue and warm golden tungsten contrast, subtle Hans Zimmer brass swell intensity"
  },
  {
    id: "deakins",
    name: "Roger Deakins (Master of Natural Light)",
    desc: "Bậc thầy ánh sáng tự nhiên, hình bóng ngược sáng (silhouette) đầy cảm xúc, 35mm Arri Master Prime",
    prompt: "Cinematography by Roger Deakins, master of natural low-key lighting, ARRI Alexa with 35mm Master Prime, deep chiaroscuro silhouettes against amber lantern glow, quiet profound realism, perfect subtle composition balance"
  },
  {
    id: "villeneuve",
    name: "Denis Villeneuve (Monolithic Brutalism)",
    desc: "Kiến trúc khổng lồ siêu thực, khói bụi khí quyển, bảng màu cát cháy & xám trầm, tỷ lệ khung hình áp đảo",
    prompt: "Directed by Denis Villeneuve, cinematography by Greig Fraser, monumental brutalist architecture, dense atmospheric sand haze, monochromatic ochre and muted slate palette, overwhelming sense of cosmic scale"
  },
  {
    id: "wes_anderson",
    name: "Wes Anderson (Bilateral Symmetry)",
    desc: "Đối xứng trục hoàn hảo 100%, bảng màu pastel truyện cổ tích (vàng mù tạt, hồng phấn, xanh mint), góc phẳng 90°",
    prompt: "Directed by Wes Anderson, strict bilateral horizontal and vertical symmetry, whimsical storybook pastel palette of mustard yellow, pastel pink, and mint green, flat orthogonal perspective, meticulous dollhouse details"
  },
  {
    id: "tarantino",
    name: "Quentin Tarantino (Vintage Grindhouse)",
    desc: "Góc quay từ cốp xe nhìn lên (trunk shot), màu Technicolor rực lửa thập niên 70, nhát quất máy lia nhanh, căng thẳng ngầm",
    prompt: "Directed by Quentin Tarantino, low-angle upward trunk shot looking up at subjects, rich 1970s Technicolor film saturation, intense dialogue tension, sudden kinetic snap zoom, vintage pulp cinema aesthetic"
  },
  {
    id: "fincher",
    name: "David Fincher (Clinical Precision)",
    desc: "Chuyển động máy mượt mà tuyệt đối, màu xanh lá - vàng lạnh (sickly yellow-green), độ tương phản vi mô cao",
    prompt: "Directed by David Fincher, cinematography by Jeff Cronenweth, surgical camera stabilization, clinical desaturated sickly yellow-green color grading, deep controlled shadows, high micro-contrast"
  },
  {
    id: "wong_kar_wai",
    name: "Wong Kar-wai (Neon Melancholy)",
    desc: "Kỹ thuật Step-printing 12fps nhòe chuyển động, mưa đêm phản chiếu đèn neon Hong Kong, điếu thuốc khói lượn",
    prompt: "Directed by Wong Kar-wai, cinematography by Christopher Doyle, step-printing 12fps motion blur, neon-drenched Hong Kong rain reflections, deep emerald green and crimson shadows, poetic yearning melancholy"
  },
  {
    id: "ridley_scott",
    name: "Ridley Scott (Atmospheric Noir)",
    desc: "Khói bụi khí quyển dày đặc, ngược sáng qua quạt trần, vệt sáng anamorphic xanh dương, công nghiệp tương lai",
    prompt: "Directed by Ridley Scott, heavy volumetric atmospheric smoke and backlit rain, sharp Panavision anamorphic blue streak flares, Blade Runner industrial noir lighting, intricate layered shadow depths"
  }
];

// ── 4C. L.E.N.S PROMPT FRAMEWORK (StudioBinder Industry Standard) ──
export const LENS_FRAMEWORK = {
  name: "L.E.N.S Framework",
  components: {
    L: "Lighting: Named lighting setup, ratio (4:1/8:1), key/fill/rim, color temperature",
    E: "Environment: World building, architectural geometry, atmospheric haze, weather depth",
    N: "Narrative & Actor: Micro-expressions, subtext body language, active kinetic beat",
    S: "Shot & Optics: Camera rig, speed curve, focal length, film stock emulation"
  }
};

// ── 4D. STUDIOBINDER LIGHTING RATIOS ──
export const LIGHTING_SETUPS_STUDIOBINDER = [
  { name: "Rembrandt Lighting (4:1 Key/Fill)", prompt: "Classic Rembrandt lighting, subtle triangular highlight on the shadow cheek, dramatic painterly depth" },
  { name: "Chiaroscuro Tenebrism (8:1 High-Contrast)", prompt: "Caravaggio-style chiaroscuro tenebrism, extreme 8:1 contrast ratio, subject emerging from deep pitch-black shadows" },
  { name: "Butterfly / Paramount Glamour", prompt: "Paramount butterfly lighting, symmetrical subtle shadow directly under nose, sculpted high cheekbones" },
  { name: "Split Noir Lighting (Side Key)", prompt: "Harsh split noir lighting, exact half of the face plunged in razor-sharp shadow, intense psychological duality" },
  { name: "Volumetric God Rays (Crepuscular Beams)", prompt: "Dramatic volumetric god rays streaming through dusty stained glass window, illuminated suspended airborne particles" }
];

// ── 5. ANTI-NOISE SANITIZER (Eliminates AI Fluff & Hallucination Words) ──
export const NOISE_FILTER_DICTIONARY = [
  { bad: /\b(8k|16k|ultra hd|4k resolution)\b/gi, good: "65mm IMAX format, fine grain resolution" },
  { bad: /\b(photorealistic|hyperrealistic|hyper-realistic)\b/gi, good: "subsurface scattering, realistic skin pores, tactile optical fidelity" },
  { bad: /\b(trending on artstation|masterpiece|award winning)\b/gi, good: "cinematography by Roger Deakins, Hoyte van Hoytema framing" },
  { bad: /\b(unreal engine 5|octane render)\b/gi, good: "shot on ARRI Alexa 65 with Panavision Anamorphic prime" },
  { bad: /\b(super detailed|insanely detailed)\b/gi, good: "intricate micro-textures, weathered material fidelity" }
];

/**
 * Cleans an input prompt by replacing legacy buzzwords with professional cinematic descriptors.
 * @param {string} promptText
 * @returns {string}
 */
export function sanitizeCinematicPrompt(promptText) {
  if (!promptText) return "";
  let cleaned = promptText;
  NOISE_FILTER_DICTIONARY.forEach(({ bad, good }) => {
    cleaned = cleaned.replace(bad, good);
  });
  return cleaned;
}

/**
 * Generates an end-to-end Master Hollywood Video Prompt
 */
export function buildMasterHollywoodVideoPrompt({
  concept,
  rig = "Trinity Steadicam 360",
  speedCurve = "120fps Cinematic Overcrank",
  microExpression = "Kìm Nén Bi Thương (Suppressed Grief)",
  lens = "Panavision C-Series Anamorphic 40mm",
  filmStock = "Kodak Vision3 500T 5219",
  soundAmbience = 0
}) {
  const selectedRig = CAMERA_RIGS_AND_MOTION.rigs.find(r => r.name === rig) || CAMERA_RIGS_AND_MOTION.rigs[0];
  const selectedSpeed = CAMERA_RIGS_AND_MOTION.speedCurves.find(s => s.name === speedCurve) || CAMERA_RIGS_AND_MOTION.speedCurves[0];
  const selectedExpression = ACTOR_DIRECTING_SYSTEM.microExpressions.find(e => e.state === microExpression) || ACTOR_DIRECTING_SYSTEM.microExpressions[0];
  const selectedLens = MASTER_LENSES_AND_STOCKS.lenses.find(l => l.name === lens) || MASTER_LENSES_AND_STOCKS.lenses[0];
  const selectedStock = MASTER_LENSES_AND_STOCKS.filmStocks.find(s => s.name === filmStock) || MASTER_LENSES_AND_STOCKS.filmStocks[0];
  const selectedSound = SOUND_AND_FOLEY_ENGINE.ambience[soundAmbience % SOUND_AND_FOLEY_ENGINE.ambience.length];

  return `[SCENE DIRECTIVE: HOLLYWOOD 10-COMPONENT SCRIPT]
1. SCENE CONCEPT: ${concept}
2. CAMERA RIG & MOTION: ${selectedRig.prompt}. Motion Speed: ${selectedSpeed.prompt}.
3. OPTICAL LANGUAGE: ${selectedLens.prompt}. Film Stock Emulation: ${selectedStock.prompt}.
4. ACTOR DIRECTION & SUBTEXT: ${selectedExpression.prompt}.
5. LIGHTING SETUP: High-contrast Chiaroscuro key, subtle volumetric atmospheric haze, rim light separation.
6. AUDIO & FOLEY SYNC: ${selectedSound}.
7. NEGATIVE RESTRICTIONS: No digital over-sharpening, no plastic smooth skin, no CGI cartoon artifacts. --ar 16:9 --style raw --v 8.2`;
}


