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
    { name: "Laowa 24mm Probe Macro Lens", prompt: "Laowa 24mm Probe macro lens perspective, deep field of view crawling inches along textured surface with immense spatial scale" },
    { name: "iPhone 15 Pro (Authentic UGC)", prompt: "Shot on iPhone 15 Pro, natural everyday lighting, authentic handheld micro-sway, organic shallow depth of field, candid lifestyle photography, zero artificial retouching, warm genuine skin tones" },
    { name: "100mm Macro Studio Commerce", prompt: "100mm macro studio lens, extreme product close-up, pristine commercial-grade softbox lighting, photorealistic premium advertising photography, clean infinite negative space, specular micro-highlights on polished surfaces" }
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

// ── 6. AI AGENT SKILL: CINEMATIC ADVERTISING VIDEO GENERATOR (v1.0) ──
export const CINEMATIC_AD_ARCHITECT = {
  metadata: {
    skillName: "Cinematic Ad Prompt Architect",
    description: "Transforms basic product descriptions and marketing goals into high-end, segment-by-segment cinematic video prompts optimized for advanced AI video generation models (Wan 2.5, Sora 2, DeepMind Veo 3.1, Runway Gen-3, Kling).",
    version: "1.0",
    tags: ["Video Generation", "Marketing", "Prompt Engineering", "Cinematography"]
  },
  narrativeArc: {
    hook: {
      timing: "0-3s",
      name: "The Visual Disruption Hook",
      description: "High-contrast visual shock, macro texture or kinetic camera move that stops scrolling in the first 1.5 seconds."
    },
    problem: {
      timing: "3-6s",
      name: "The Relatable Friction / Context",
      description: "Establishes human vulnerability, everyday struggle, or atmospheric tension before the breakthrough."
    },
    solution: {
      timing: "6-10s",
      name: "The Hero Product Reveal",
      description: "Triumphant lighting shift, golden volumetric god rays, tactile macro details, and fluid dynamics."
    },
    cta: {
      timing: "10-15s",
      name: "The Cinematic Call-to-Action & End Card",
      description: "Clean typography negative space, premium brand aesthetic, confident closure, and uplifting sound."
    }
  },
  styleVibes: {
    minimalist: {
      label: "Minimalist Apple Tech Glow",
      palette: "Matte titanium, studio white, brushed silver, pristine slate gray",
      lighting: "Soft diffuse top lightbox, pristine gradient reflections, micro specular glints",
      lens: "Cooke S4/i 50mm Prime, ultra-clean organic bokeh, neutral edge sharpness",
      bgm: "Clean ambient synth pulse, minimalist piano chords, crisp electronic clicks"
    },
    cyberpunk: {
      label: "Cyberpunk Kinetic Neon",
      palette: "Neon cyan, hot magenta, obsidian black, holographic teal",
      lighting: "Wet asphalt reflections, high-contrast neon rim light, volumetric steam",
      lens: "Panavision C-Series 35mm Anamorphic T1.5, horizontal blue streak flare",
      bgm: "Heavy synthetic bassline, dystopian synthwave sub-bass, metallic whooshes"
    },
    korean_mv: {
      label: "Korean MV Ethereal Glamour",
      palette: "Pastel peach, lavender haze, soft warm gold, pearlescent glow",
      lighting: "High-key beauty lighting, iridescent backlight, dreamy ethereal diffusion",
      lens: "Arri Master Prime 85mm f/1.3, Pro-Mist 1/4 halation, glowing highlights",
      bgm: "Dreamy melodic pop chords, airy vocal reverberations, gentle rhythmic beat"
    },
    luxury_heritage: {
      label: "Vintage Heritage Luxury",
      palette: "Cognac leather, aged brass, deep emerald velvet, warm amber",
      lighting: "Warm tungsten chiaroscuro, dramatic window slant rays, floating dust motes",
      lens: "Vintage Cooke Speed Panchro 40mm, warm organic vignette, 35mm Kodak 500T grain",
      bgm: "Cinematic cello and acoustic strings, grand orchestral warmth, subtle vinyl crackle"
    },
    high_octane: {
      label: "High-Octane Sport Energy",
      palette: "Electric volt yellow, carbon fiber black, athletic racing red",
      lighting: "Harsh direct midday sun, explosive lens flares, dynamic moving shadow cuts",
      lens: "Ultra-wide 16mm Cine Prime, high shutter speed 45-degree angle, razor grit",
      bgm: "Aggressive drum cadence, heartbeat thumps, high-velocity riser drops"
    },
    apple_studio: {
      label: "Apple Studio Minimalist (Táo Khuyết)",
      palette: "Brushed titanium, studio white, frosted matte glass, monochromatic silver-gray",
      lighting: "Soft diffused top lightbox, pristine infinite white cyclorama, subtle specular micro-glints on curved aluminum edges",
      lens: "100mm macro studio lens, extreme product close-up, clean infinite negative space, commercial-grade softbox",
      bgm: "Minimal ambient electronic pulse, airy reverb piano note, crystalline chime, Apple Keynote-style confident silence"
    },
    ugc_authentic: {
      label: "Authentic UGC Lifestyle (Shot on iPhone)",
      palette: "Warm café latte tones, natural morning gold, organic muted earth, soft desaturated greens",
      lighting: "Natural window sunlight filtering through café glass, golden hour side-light, authentic everyday lighting with zero studio artifice",
      lens: "Shot on iPhone 15 Pro, authentic handheld micro-sway, organic shallow depth of field, candid lifestyle, zero retouching",
      bgm: "Lo-fi acoustic guitar chords, ambient café chatter undertone, gentle vinyl warmth crackle, organic folk hum"
    }
  }
};

/**
 * Builds a complete 4-part Cinematic Advertising Script adhering to the AI Agent Skill specification.
 */
export function buildCinematicAdScript({
  productName = "Product",
  targetAudience = "General Audience",
  coreMessage = "Elevate your everyday experience",
  styleVibe = "minimalist",
  duration = 15,
  aspectRatio = "16:9"
}) {
  const vibe = CINEMATIC_AD_ARCHITECT.styleVibes[styleVibe] || CINEMATIC_AD_ARCHITECT.styleVibes.minimalist;
  const is916 = aspectRatio.includes("9:16");
  const aspectText = is916 ? "9:16 (Vertical TikTok / Reels / Shorts)" : "16:9 (Cinematic Widescreen / YouTube)";

  return `**1. Core Visual Concept:**
A high-end cinematic commercial for "${productName}", embodying the ${vibe.label} aesthetic. The visual tone speaks directly to ${targetAudience} by communicating "${coreMessage}". Rendered with ${vibe.lighting} and an opulent color grade of ${vibe.palette}.

**2. Technical Specs:**
- Aspect Ratio: ${aspectText}
- Frame Rate/Motion: 24fps cinematic film look with 120fps high-speed slow-motion moments
- Color Palette: ${vibe.palette}
- Optical Package: ${vibe.lens}

**3. Scene-by-Scene Prompts:**

* **Scene 1 (0-3s): The Visual Disruption Hook**
    * **Prompt:** Extreme macro close-up (ECU) of ${productName}, tactile textures and pristine edges illuminated by ${vibe.lighting}. Subtle airborne dust particles catching golden rim light, shallow depth of field with creamy bokeh, high-end commercial aesthetic.
    * **Camera Motion:** Dynamic rapid push-in slowing gracefully into a locked hero frame.
    * **Text Overlay / Subtitle:** "Thế hệ tiếp theo của ${productName}"

* **Scene 2 (3-6s): The Everyday Context / Tension**
    * **Prompt:** Medium shot of a stylish ${targetAudience} individual in a moody atmospheric environment, cinematic natural lighting with deep shadows. The subject gazes with contemplation, natural skin texture, authentic emotion, cinematic film grain.
    * **Camera Motion:** Slow tracking dolly shot moving right to left with subtle organic handheld breath.
    * **Text Overlay / Subtitle:** "${coreMessage}"

* **Scene 3 (6-10s): The Hero Product Reveal & Solution**
    * **Prompt:** Sweeping low-angle hero shot of ${productName} in full glory. Volumetric light rays slicing through the atmosphere, pristine specular reflections gliding across polished materials, fluid particle dynamics swirling organically in slow motion.
    * **Camera Motion:** 360-degree smooth orbital rotation with anamorphic horizontal lens flare.
    * **Text Overlay / Subtitle:** "Đỉnh Cao Thiết Kế · Đột Phá Trải Nghiệm"

* **Scene 4 (10-15s): The Iconic Call-to-Action & End Card**
    * **Prompt:** Minimalist elegant composition of ${productName} centered in frame with ample negative space. Soft rim lighting, warm vignette, pristine reflection on a black glass pedestal, premium luxury finish.
    * **Camera Motion:** Slow majestic pull-back breathing drift, coming to a gentle rest.
    * **Text Overlay / Subtitle:** "${productName} — Khám phá ngay hôm nay."

**4. Voiceover Narration (Lời Thoại Lồng Tiếng Đồng Bộ):**
* **Scene 1 (0-3s):** [VI] "Tương lai không chờ đợi ai..." | [EN] "The future waits for no one..."
* **Scene 2 (3-6s):** [VI] "${coreMessage}." | [EN] "Experience the difference where others see limitations."
* **Scene 3 (6-10s):** [VI] "Đỉnh cao đột phá cùng ${productName}." | [EN] "Engineered for pure perfection — ${productName}."
* **Scene 4 (10-15s):** [VI] "${productName}. Chạm đến chuẩn mực mới ngay hôm nay." | [EN] "${productName}. Elevate your world today."

**5. Post-Production Notes:**
- **BGM Style:** ${vibe.bgm}.
- **SFX Foley:** Tactile mechanical clicks, high-frequency riser (0-3s), subtle atmospheric sub-bass drop (at 6s reveal), and resonant chime resolution (at 15s end card).`;
}

/**
 * Parses a cinematic ad script markdown into structured scene objects for player simulation and batch relay.
 * @param {string} scriptText
 * @returns {Array<object>}
 */
export function parseCinematicAdScenes(scriptText = "") {
  if (!scriptText) return [];
  const scenes = [];
  const sceneRegex = /\* \*\*Scene (\d+)\s*\((.*?)\):\s*(.*?)\*\*\s*[\r\n]+([\s\S]*?)(?=(\* \*\*Scene \d+|$|\*\*4\.|\*\*5\.))/g;
  let match;

  while ((match = sceneRegex.exec(scriptText)) !== null) {
    const sceneNum = parseInt(match[1], 10);
    const timeRange = match[2].trim();
    const title = match[3].trim();
    const block = match[4];

    const promptMatch = block.match(/\* \*\*Prompt:\*\* (.*?)(?=\n\s*\*|$)/);
    const motionMatch = block.match(/\* \*\*Camera Motion:\*\* (.*?)(?=\n\s*\*|$)/);
    const textMatch = block.match(/\* \*\*Text Overlay \/ Subtitle:\*\* (.*?)(?=\n\s*\*|$)/);

    // Extract start and end seconds from timeRange (e.g. "0-3s" -> start: 0, end: 3)
    const timeMatch = timeRange.match(/(\d+)\s*-\s*(\d+)/);
    const startSec = timeMatch ? parseInt(timeMatch[1], 10) : (sceneNum - 1) * 3;
    const endSec = timeMatch ? parseInt(timeMatch[2], 10) : sceneNum * 3;

    scenes.push({
      sceneNum,
      timeRange,
      startSec,
      endSec,
      title,
      prompt: promptMatch ? promptMatch[1].trim() : '',
      cameraMotion: motionMatch ? motionMatch[1].trim() : 'Cinematic camera movement',
      textOverlay: textMatch ? textMatch[1].replace(/["']/g, '').trim() : ''
    });
  }

  // Extract Voiceovers if present
  const voBlockMatch = scriptText.match(/\*\*4\. Voiceover Narration[\s\S]*?\n([\s\S]*?)(?=\n\*\*5\.|\n\*\*Post|$)/);
  if (voBlockMatch && scenes.length > 0) {
    const voLines = voBlockMatch[1].split('\n');
    scenes.forEach(scene => {
      const line = voLines.find(l => l.includes(`Scene ${scene.sceneNum}`));
      if (line) {
        const viMatch = line.match(/\[VI\]\s*"(.*?)"/);
        const enMatch = line.match(/\[EN\]\s*"(.*?)"/);
        scene.voiceoverVI = viMatch ? viMatch[1] : '';
        scene.voiceoverEN = enMatch ? enMatch[1] : '';
      }
    });
  }

  return scenes;
}

/**
 * Generates production-ready Remotion (React Video) component code for 1-click video rendering.
 * @param {object} options
 * @returns {string}
 */
export function generateRemotionTVCCode({
  productName = "Product",
  scenes = [],
  duration = 15,
  aspectRatio = "16:9",
  styleVibe = "minimalist"
}) {
  const is916 = aspectRatio.includes("9:16");
  const width = is916 ? 1080 : 1920;
  const height = is916 ? 1920 : 1080;
  const fps = 30;
  const totalFrames = duration * fps;

  const defaultScenes = scenes.length > 0 ? scenes : [
    { sceneNum: 1, startSec: 0, endSec: 3, title: "The Visual Disruption Hook", textOverlay: `Thế hệ tiếp theo của ${productName}`, voiceoverVI: "Tương lai không chờ đợi ai..." },
    { sceneNum: 2, startSec: 3, endSec: 6, title: "Everyday Context / Tension", textOverlay: "Đột phá mọi giới hạn", voiceoverVI: "Cảm nhận sự khác biệt đích thực." },
    { sceneNum: 3, startSec: 6, endSec: 10, title: "Hero Product Reveal", textOverlay: "Đỉnh Cao Thiết Kế · Đột Phá Trải Nghiệm", voiceoverVI: `Đỉnh cao công nghệ cùng ${productName}.` },
    { sceneNum: 4, startSec: 10, endSec: 15, title: "Iconic Call To Action", textOverlay: `${productName} — Khám phá ngay hôm nay`, voiceoverVI: "Chạm đến chuẩn mực mới ngay hôm nay." }
  ];

  const sequencesCode = defaultScenes.map(s => {
    const fromFrame = s.startSec * fps;
    const durationInFrames = (s.endSec - s.startSec) * fps;
    return `      {/* Scene ${s.sceneNum}: ${s.title} (${s.startSec}s - ${s.endSec}s) */}
      <Sequence from={${fromFrame}} durationInFrames={${durationInFrames}}>
        <SceneView
          sceneNumber={${s.sceneNum}}
          title="${s.title.replace(/"/g, '\\"')}"
          textOverlay="${(s.textOverlay || '').replace(/"/g, '\\"')}"
          voiceover="${(s.voiceoverVI || '').replace(/"/g, '\\"')}"
          cameraMotion="${(s.cameraMotion || 'Cinematic Motion').replace(/"/g, '\\"')}"
        />
      </Sequence>`;
  }).join('\n\n');

  return `import React from 'react';
import { Composition, Sequence, useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from 'remotion';

/**
 * Cine Prompt Pro - Professional TVC Commercial Composition
 * Product: ${productName}
 * Resolution: ${width}x${height} (${aspectRatio}) | FPS: ${fps} | Duration: ${duration}s (${totalFrames} frames)
 * Style Vibe: ${styleVibe}
 *
 * Generated automatically by Cine Prompt Pro - Studio Engine V2.0
 */

// Scene Component with smooth Hollywood title card & spring animations
const SceneView: React.FC<{
  sceneNumber: number;
  title: string;
  textOverlay: string;
  voiceover: string;
  cameraMotion: string;
}> = ({ sceneNumber, title, textOverlay, voiceover, cameraMotion }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animation for Text Overlay
  const titleEntrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 100 }
  });

  // Slow zoom camera drift simulation (Ken Burns effect)
  const scale = interpolate(frame, [0, 90], [1.0, 1.08], { extrapolateRight: 'clamp' });
  const textOpacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      backgroundColor: '#0a0a0f',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
    }}>
      {/* Background Video / Visual Layer (Placeholder container for Flow/Sora render) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        transform: \`scale(\${scale})\`,
        background: 'radial-gradient(circle at center, #1e1b4b 0%, #09090b 100%)',
        opacity: 0.85,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Placeholder footage indicator */}
        <div style={{
          padding: '12px 24px',
          background: 'rgba(255, 215, 0, 0.08)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          borderRadius: '12px',
          color: '#ffd700',
          fontSize: '${is916 ? '24px' : '20px'}',
          fontWeight: 700,
          textAlign: 'center'
        }}>
          🎬 SCENE {sceneNumber}: {cameraMotion}
          <div style={{ fontSize: '14px', color: '#a1a1aa', marginTop: '6px' }}>
            [Insert Footage from Google Flow: Scene {sceneNumber}]
          </div>
        </div>
      </div>

      {/* Cinematic Lower Third / Subtitle Overlay */}
      {textOverlay && (
        <div style={{
          position: 'absolute',
          bottom: '${is916 ? '15%' : '12%'}',
          left: '5%',
          right: '5%',
          textAlign: 'center',
          opacity: textOpacity,
          transform: \`translateY(\${(1 - titleEntrance) * 20}px)\`
        }}>
          <div style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 215, 0, 0.4)',
            borderRadius: '12px',
            color: '#ffffff',
            fontSize: '${is916 ? '32px' : '36px'}',
            fontWeight: 800,
            letterSpacing: '0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            {textOverlay}
          </div>

          {/* Voiceover Teleprompter Subtext */}
          {voiceover && (
            <div style={{
              marginTop: '10px',
              fontSize: '${is916 ? '20px' : '22px'}',
              color: '#ffd700',
              fontStyle: 'italic',
              textShadow: '0 1px 4px rgba(0,0,0,0.9)'
            }}>
              🎙️ VO: "{voiceover}"
            </div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};

export const CineTVCComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
${sequencesCode}
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CineTVC"
      component={CineTVCComposition}
      durationInFrames={${totalFrames}}
      fps={${fps}}
      width={${width}}
      height={${height}}
      defaultProps={{}}
    />
  );
};
`;
}


// ── 7. 5-LAYER COMMERCIAL PROMPT BUILDER (Kling / Seedance 2.0 / Midjourney / Wan 2.5 Optimized) ──
/**
 * Builds a structured 5-layer commercial prompt optimized for generative AI engines.
 * Layers: [Subject & Action] → [Environment & Lighting] → [Camera & Optics] → [Brand & Typography] → [Engine Parameters]
 * @param {object} config
 * @returns {string}
 */
export function build5LayerCommercialPrompt({
  subject = "A premium product",
  action = "elegantly displayed",
  environment = "a clean minimalist studio",
  lighting = "soft diffused studio softbox lighting",
  cameraLens = "100mm macro studio lens",
  depthOfField = "shallow depth of field with creamy bokeh",
  brandName = "",
  brandPlacement = "",
  aspectRatio = "16:9",
  engine = "midjourney",
  motionScale = ""
} = {}) {
  const brandLine = brandName
    ? `\n[BRAND & TYPOGRAPHY]: The elegant text logo "${brandName}" ${brandPlacement || 'subtly integrated into the scene — embossed, neon backlit, or sleek product branding'}. Premium brand presence without visual clutter.`
    : '';

  const engineParams = {
    midjourney: `--ar ${aspectRatio} --style raw --v 8.2 --stylize 250`,
    wan: `--model wan2.5-t2v --resolution 1080p --ar ${aspectRatio} --fps 24 --motion-bucket 120`,
    kling: `Aspect ratio ${aspectRatio}. ${motionScale ? `Motion scale: ${motionScale}.` : 'Smooth cinematic motion, zero temporal morphing.'}`,
    seedance: `Aspect ratio ${aspectRatio}. Temporal consistency anchor enabled. ${motionScale ? `Motion intensity: ${motionScale}.` : ''}`,
    veo: `--ar ${aspectRatio} --duration 8s --fps 24 --camera smooth_tracking`,
    gemini_flow: `--engine gemini-flash-image --flow-keyframe true --aspect ${aspectRatio}`,
    chatgpt_sunburst: `--model gpt-image-2.5-sunburst --fidelity maximum --preserve-subject true`,
    chatgpt_flare: `--model gpt-image-2.5-flare --latency low --fidelity balanced`
  };

  return `[SUBJECT & CORE ACTION]: ${subject}, ${action}.

[ENVIRONMENT & LIGHTING]: Set in ${environment}. ${lighting}. Rich volumetric atmospheric depth, ample negative space for premium composition.

[CAMERA & OPTICS]: ${cameraLens}, ${depthOfField}. Photorealistic commercial-grade render, tactile material fidelity with micro-surface textures.${brandLine}

[ENGINE PARAMETERS]: ${engineParams[engine] || engineParams.midjourney}`;
}

// ── 8. 19 VISUAL LAWS MASTERY ENGINE (from photography-course-master.vercel.app) ──
/**
 * 19 Chuẩn mực Ngôn ngữ Thị giác & Quang học Điện ảnh thực chiến
 * Chuyển hóa toàn diện từ giáo trình Masterclass 19 bài học sang tham số Prompt quang học.
 */
export const VISUAL_LANGUAGE_MASTERY_19_LAWS = [
  // ── MODULE 1: BẢN CHẤT & MỤC ĐÍCH ──
  {
    id: "sucManh",
    lesson: 1,
    module: "Module 1: Bản Chất & Ý Niệm",
    nameVi: "Sức Mạnh Hình Ảnh & Ý Niệm Thị Giác",
    nameEn: "Visual Intent & Subconscious Impact",
    desc: "Hình ảnh tác động trực tiếp lên hệ thần kinh thị giác và hạch hạnh nhân (amygdala) trước khi vỏ não kịp phân tích ngôn từ. Xác lập cảm xúc chủ đạo tối thượng trước khi khởi tạo.",
    promptSnippet: "deliberate visual intent, intense subconscious emotional resonance, evocative atmospheric depth, haunting visual memory, commanding visceral impact",
    opticalParams: "High visual conviction, motivated key luminance, zero decorative visual noise",
    trap: "Tạo hình vô hồn, chắp vá các từ khóa ngẫu nhiên không có cảm xúc cốt lõi",
    antidote: "Khóa chặt một trạng thái cảm xúc duy nhất (Awe, Solitude, Melancholy, Triumph)"
  },
  {
    id: "mucDich",
    lesson: 2,
    module: "Module 1: Bản Chất & Ý Niệm",
    nameVi: "Mục Đích Nhiếp Ảnh & Lập Trường Thị Giác",
    nameEn: "Photographic Purpose & Stance",
    desc: "Định vị vai trò khung hình: Ghi nhận hiện thực (Documentary), Thuyết phục thương mại (Commercial), Khơi gợi mỹ cảm (Fine-Art), hay Thử nghiệm thị giác (Avant-Garde).",
    promptSnippet: "purpose-driven photographic stance, candid documentary authenticity, uncompromised artistic conviction, naturalistic observation, genuine human intimacy",
    opticalParams: "Authentic ambient motivated lighting, unposed candid geometry, naturalistic sensor response",
    trap: "Hỗn loạn giữa phong cách thương mại bóng bẩy và tư liệu mộc mạc",
    antidote: "Nhất quán thể loại và khoảng cách tiếp cận giữa máy quay và chủ thể"
  },
  {
    id: "bieuTuong",
    lesson: 3,
    module: "Module 1: Bản Chất & Ý Niệm",
    nameVi: "Ngôn Ngữ Biểu Tượng & Đạo Đức Khung Hình",
    nameEn: "Symbolism & Ethical Framing",
    desc: "Giải mã biểu tượng văn hóa đa tầng. Triệt để chống 3 bẫy thị giác rập khuôn: Exoticization (lạ mắt hóa), Single Story (phiến diện), Savior Framing (hạ thấp chủ thể).",
    promptSnippet: "layered cultural symbolism, authentic human dignity, profound metaphorical subtext, nuanced respectful framing, dignified sovereign presence, rich cultural semiotics",
    opticalParams: "Eye-level camera alignment, respectful distance, unexoticized indigenous context",
    trap: "Exoticization (biến văn hóa thành vật trang trí kỳ dị), Savior Framing (định khung cứu thế)",
    antidote: "Trao quyền tự chủ cho nhân vật qua góc máy ngang tầm mắt và bối cảnh sinh hoạt tự nhiên"
  },

  // ── MODULE 2: TỪ VỰNG THỊ GIÁC SƠ KHỞI ──
  {
    id: "duongNet",
    lesson: 4,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Đường Nét Dẫn Hướng (Line & Vectors)",
    nameEn: "Leading Lines & Implied Eye-Vectors",
    desc: "Dẫn dắt mắt người xem qua các đường dẫn (leading lines), đường chéo căng thẳng, đường cong S-curve mềm mại và đường nét ngầm (implied gaze vectors).",
    promptSnippet: "dynamic leading lines guiding viewer eye-path, sweeping S-curve geometric flow, subtle implied eye-line vectors, vanishing point convergence, linear spatial momentum",
    opticalParams: "24mm or 28mm wide prime lens for enhanced perspective converging vectors",
    trap: "Các đường nét lộn xộn chỉ ra ngoài khung hình làm mắt người xem bị văng ra ngoài",
    antidote: "Tập trung mọi đường nét hội tụ chính xác vào điểm neo thị giác (Visual Anchor)"
  },
  {
    id: "hinhKhoi",
    lesson: 5,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Hình Dạng & Thể Tích 3D (Shape & Form)",
    nameEn: "Shape, 3D Form & Volumetric Mass",
    desc: "Chuyển hóa từ hình phẳng 2D (Shape) sang thể tích 3D (Form) nhờ bóng đổ chuyển tiếp mịn màng. Ứng dụng hình tròn (hài hòa), vuông (vững chãi), tam giác (động lực).",
    promptSnippet: "geometric volumetric form, sculpted 3D volume through delicate shadow gradation, triangular dynamic stability, tonal chiaroscuro defining mass and tactile contour",
    opticalParams: "45-degree directional key light with gentle wrap-around fill for volume modeling",
    trap: "Ánh sáng chiếu thẳng trực diện (flat flash) làm dẹt phẳng mọi khối hình học",
    antidote: "Dùng nguồn sáng xiên chếch 45 độ để tạo dải bóng đổ chuyển tiếp tôn vinh khối 3D"
  },
  {
    id: "khongGian",
    lesson: 6,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Khoảng Trống Âm & Chống Horror Vacui (Space)",
    nameEn: "Negative Space & Anti-Horror Vacui",
    desc: "Thiết lập mối quan hệ giữa chủ thể (Positive Space) và khoảng trống (Negative Space). Chữa trị 'bệnh sợ chân không' (Horror Vacui) nhồi nhét chi tiết làm ngạt thở khung hình.",
    promptSnippet: "deliberate expansive negative space, anti-horror-vacui breathing room, poetic spatial minimalism, powerful visual pause, unencumbered subject isolation, elegant spatial silence",
    opticalParams: "Wide open compositional negative space with single sharp isolated subject",
    trap: "Horror Vacui: Nhồi nhét quá nhiều vật thể phụ làm phân tán hoàn toàn điểm nhìn",
    antidote: "Dành tối thiểu 50-70% diện tích cho khoảng trống âm yên tĩnh để mắt người xem được thở"
  },
  {
    id: "anhSang",
    lesson: 7,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Nghệ Thuật Điêu Khắc Ánh Sáng (Light)",
    nameEn: "Directional Light & Shadow Sculpting",
    desc: "Điêu khắc khối, tạo kịch tính và chiều sâu không gian. Nắm vững tỷ lệ sáng tối Key:Fill:Rim, ánh sáng tạo động cơ (motivated light) và bóng tối Chiaroscuro.",
    promptSnippet: "sculptural directional lighting, motivated single-source key light, nuanced chiaroscuro shadow sculpting, luminous rim light separation, gentle fill bounce, cinematic luminous physics",
    opticalParams: "4:1 to 8:1 key-to-fill lighting ratio, motivated window or tungsten illumination",
    trap: "Ánh sáng đều khắp khung hình không có bóng đổ, triệt tiêu tính kịch tính điện ảnh",
    antidote: "Luôn xác định rõ vị trí nguồn sáng thực tế (cửa sổ, ngọn đèn) và duy trì vùng bóng tối có chủ đích"
  },
  {
    id: "mauSac",
    lesson: 8,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Màu Sắc & Quy Luật 80% Hệ Màu Chủ Đạo (Color)",
    nameEn: "Color Harmony & 80% Dominant Palette",
    desc: "Áp dụng bánh xe màu sắc và quy luật 80% hệ màu chủ đạo (Dominant Palette) phối hợp với 20% màu điểm xuyết tương hỗ, khơi gợi trạng thái tâm lý lập tức.",
    promptSnippet: "curated 80% dominant color harmony, disciplined monochromatic undertones with calculated complementary chromatic accents, emotional color psychology, harmonious graded palette",
    opticalParams: "Consistent color temperature (3200K warm vs 5600K cool ambient balance)",
    trap: "Quá nhiều màu bão hòa cao tranh chấp nhau khiến não bộ mệt mỏi",
    antidote: "Chọn 1 gam màu chủ đạo chiếm 80% diện tích khung hình, chỉ dùng màu đối lập ở điểm nhấn"
  },
  {
    id: "tuongPhan",
    lesson: 9,
    module: "Module 2: Từ Vựng Thị Giác Sơ Khởi",
    nameVi: "Tương Phản Đa Tầng (Contrast)",
    nameEn: "Multi-Tier Contrast Dynamics",
    desc: "Tạo lực kéo thị giác cực mạnh thông qua tương phản sắc độ (Tonal: Sáng vs Tối), tương phản nhiệt độ (Nóng vs Lạnh), và tương phản bề mặt (Mịn vs Thô).",
    promptSnippet: "multi-layered tonal contrast, striking chiaroscuro luminance disparity, warm-cool color temperature juxtaposition, deep rich blacks against piercing highlights, visual dramatic tension",
    opticalParams: "High dynamic range sensor curve, deep inky shadow retention with pristine highlight roll-off",
    trap: "Độ tương phản phẳng lì (muddy grey midtones) thiếu điểm sáng nhất và tối nhất",
    antidote: "Cân chỉnh phân bổ ánh sáng sao cho chủ thể nổi bật trên nền tối hoặc ngược lại"
  },

  // ── MODULE 3: CẢM GIÁC VẬT CHẤT & KHÍ QUYỂN ──
  {
    id: "chatLieu",
    lesson: 10,
    module: "Module 3: Cảm Giác Vật Chất",
    nameVi: "Chất Liệu & Ánh Sáng Xiên Raking Light (Texture)",
    nameEn: "Texture, Raking Light & Somatosensory Activation",
    desc: "Kích hoạt vỏ não xúc giác (Somatosensory Cortex) liên kết với hạch hạnh nhân qua nguồn sáng quét góc cực thấp 10–20° (Raking Light) lột tả vi kết cấu bề mặt.",
    promptSnippet: "10-20 degree low-angle raking light grazing across tactile surfaces, somatosensory cortex micro-texture activation, palpable fabric weaves and skin pore fidelity, hyper-detailed tactile relief",
    opticalParams: "Extreme grazing raking cross-light at 15 degrees, macro probe lens or 85mm T1.5 prime",
    trap: "Dùng ánh sáng khuếch tán diện rộng làm biến mất toàn bộ độ nhám, nếp nhăn và kết cấu",
    antidote: "Đặt nguồn sáng song song sát mép bề mặt để tạo các vệt bóng đổ siêu nhỏ sau từng hạt chất liệu"
  },
  {
    id: "kichThuoc",
    lesson: 11,
    module: "Module 3: Cảm Giác Vật Chất",
    nameVi: "Tỷ Lệ & Kích Thước Quyền Lực (Scale)",
    nameEn: "Scale, Proportion & Spatial Monumentality",
    desc: "So sánh kích thước đối chiếu giữa các vật thể (Con người đối lập Kiến trúc khổng lồ / Thiên nhiên vĩ đại) để nhấn mạnh sự nhỏ bé hay vĩ đại, điều khiển cảm giác choáng ngợp.",
    promptSnippet: "epic cinematic scale contrast, diminutive human figure juxtaposed against monumental monolithic architecture, overwhelming sense of scale and spatial grandeur, dwarfed perspective",
    opticalParams: "Ultra-wide 18mm or 21mm lens with deep depth of field, establishing master shot",
    trap: "Khung hình không có vật thể đối chiếu làm mất đi cảm nhận về độ lớn thực tế",
    antidote: "Luôn đặt một yếu tố quen thuộc (hình bóng con người, cánh cửa) để người xem có hệ quy chiếu"
  },
  {
    id: "khongKy",
    lesson: 12,
    module: "Module 3: Cảm Giác Vật Chất",
    nameVi: "Bầu Không Khí Khí Quyển (Atmosphere)",
    nameEn: "Atmosphere & Volumetric Environment",
    desc: "Tổng hòa sương mù thể tích (Volumetric Haze), khói ẩm, mưa đêm phản quang và hạt bụi bắt sáng để tạo nên môi trường cảm xúc điện ảnh đậm đặc có thể chạm thấy được.",
    promptSnippet: "dense volumetric atmosphere, crepuscular light rays piercing through suspension haze, airborne dust motes catching rim luminescence, moody atmospheric condensation, palpable damp air",
    opticalParams: "Backlit atmospheric particulate suspension, subtle Promist 1/4 halation filter",
    trap: "Không khí vô trùng, trong suốt tuyệt đối khiến khung hình trông giống mô hình 3D giả lập",
    antidote: "Thêm các phần tử thể tích lơ lửng (sương mù nhẹ, hơi nước, luồng khói mờ) phản xạ ánh sáng"
  },

  // ── MODULE 4: CẤU TRÚC CÂU CHUYỆN & ĐẠO DIỄN ──
  {
    id: "bocuc",
    lesson: 13,
    module: "Module 4: Cấu Trúc Câu Chuyện",
    nameVi: "Kiến Trúc Bố Cục Chuẩn Mực (Composition)",
    nameEn: "Composition Architecture & Geometric Harmony",
    desc: "Sắp xếp trật tự các vật thể trong khung hình: Tỷ lệ vàng (Fibonacci spiral), 1/3 (Rule of Thirds), Đối xứng trục (Bilateral Symmetry), và Khung trong khung (Frame-in-Frame).",
    promptSnippet: "golden ratio composition, precise Fibonacci spiral layout, dynamic rule of thirds alignment, elegant architectural frame-within-frame, deliberate bilateral symmetry",
    opticalParams: "Calibrated camera grid alignment, centered horizon or 1/3 division lines",
    trap: "Đặt chủ thể ở vị trí lưng chừng vô định, không thuộc điểm mạnh của bất kỳ lưới bố cục nào",
    antidote: "Căn chỉnh mắt chủ thể vào giao điểm 1/3 hoặc áp dụng bố cục đối xứng trục tuyệt đối"
  },
  {
    id: "gocChup",
    lesson: 14,
    module: "Module 4: Cấu Trúc Câu Chuyện",
    nameVi: "Góc Máy & Quyền Lực Tâm Lý (Camera Angle)",
    nameEn: "Camera Angle & Psychological Power Dynamics",
    desc: "Điều khiển tâm lý người xem: Góc thấp (Low-angle: Quyền lực, áp đảo), Ngang mắt (Eye-level: Bình đẳng, đồng cảm), Góc cao (High-angle: Yếu thế, cô đơn), Dutch Angle (Bất an).",
    promptSnippet: "psychological camera angle, authoritative low-angle perspective commanding narrative power, dignified subject stance, towering visual authority, deliberate optical elevation",
    opticalParams: "Worm's eye or low camera height tilted upward 20 degrees, solid tripod ground anchor",
    trap: "Sử dụng góc chụp tiện tay ngang ngực thiếu chủ đích, làm cảnh quay tẻ nhạt",
    antidote: "Mọi góc máy phải phục vụ địa vị quyền lực hoặc trạng thái cảm xúc của nhân vật trong cảnh"
  },
  {
    id: "tieuDiem",
    lesson: 15,
    module: "Module 4: Cấu Trúc Câu Chuyện",
    nameVi: "Tiêu Điểm & Phân Tầng Trường Ảnh (Depth of Field)",
    nameEn: "Focus, Depth of Field & Spatial Layering",
    desc: "Điều phối độ nông sâu trường ảnh: Khẩu lớn T1.2-T1.8 xóa phông cô lập tâm lý vs Khẩu hẹp T8-T11 Deep Focus kể câu chuyện đa tầng (Tiền cảnh - Trung cảnh - Hậu cảnh).",
    promptSnippet: "three-dimensional depth layering, sharp razor focus on primary anchor, silky organic background bokeh, distinct foreground midground background narrative tiers, selective optical depth",
    opticalParams: "Large aperture prime lens wide open at T1.3 or deep focus stopped down to T8",
    trap: "Hậu cảnh bị xóa nhòe hoàn toàn làm mất sạch ngữ cảnh bối cảnh và câu chuyện xung quanh",
    antidote: "Chủ động thiết lập 3 lớp không gian rõ rệt: chi tiết mờ ở tiền cảnh, chủ thể ở trung cảnh, bối cảnh phía sau"
  },

  // ── MODULE 5: HỆ THỐNG VẬN HÀNH & THỐNG NHẤT ──
  {
    id: "nhipDieu",
    lesson: 16,
    module: "Module 5: Hệ Thống Vận Hành",
    nameVi: "Nhịp Điệu Thị Giác (Rhythm & Cadence)",
    nameEn: "Visual Rhythm & Spatial Cadence",
    desc: "Lặp đi lặp lại các yếu tố thị giác có chu kỳ (hàng cột, cửa sổ, nhịp bóng đổ) để tạo nên giai điệu hình ảnh sống động và dòng chảy thời gian tựa như bản nhạc giao hưởng.",
    promptSnippet: "hypnotic visual rhythm, repeating architectural cadence, rhythmic alternating pattern of light and shadow, melodic geometric recurrence, dynamic temporal pulse",
    opticalParams: "Long focal length lens (100mm+) compressing spatial intervals between repeating elements",
    trap: "Sự lặp lại máy móc, đơn điệu không có biến tấu nhịp phách",
    antidote: "Tạo ra sự lặp lại nhịp nhàng nhưng có một điểm phá vỡ nhịp (Syncopation) tại vị trí chủ thể"
  },
  {
    id: "canBang",
    lesson: 17,
    module: "Module 5: Hệ Thống Vận Hành",
    nameVi: "Cân Bằng Tĩnh & Cân Bằng Động (Balance)",
    nameEn: "Static vs. Dynamic Balance Equilibrium",
    desc: "Phân bổ trọng lượng thị giác: Cân bằng đối xứng tạo cảm giác trang nghiêm, tĩnh lặng; Cân bằng bất đối xứng (Dynamic Tension) tạo lực căng ngầm và năng lượng dịch chuyển.",
    promptSnippet: "masterful asymmetric visual balance, dynamic visual weight equilibrium, calculated off-center tension held in perfect suspension, sophisticated compositional counterweight",
    opticalParams: "Carefully calibrated visual mass distribution across frame coordinates",
    trap: "Khung hình bị lệch trọng lượng nghiêm trọng khiến cảnh quay có cảm giác đổ nhào ngoài ý muốn",
    antidote: "Cân bằng một mảng tối lớn ở một bên bằng một đốm sáng nhỏ hoặc màu sắc rực rỡ ở phía đối diện"
  },
  {
    id: "phamCap",
    lesson: 18,
    module: "Module 5: Hệ Thống Vận Hành",
    nameVi: "Phân Cấp Thị Giác 3 Tầng (Visual Hierarchy)",
    nameEn: "3-Tier Visual Hierarchy & Eye-Path Guidance",
    desc: "Thiết lập tuyến đọc ảnh mạch lạc dẫn dắt ánh mắt: Điểm neo số 1 (Anchor - tương phản cao nhất) → Điểm bổ trợ số 2 (Secondary details) → Bối cảnh thứ cấp (Contextual background).",
    promptSnippet: "strict three-tier visual hierarchy, primary high-contrast anchor commanding immediate gaze, secondary supporting narrative elements, softly subdued atmospheric context, unambiguous eye-flow",
    opticalParams: "Graduated luminance and contrast hierarchy routing viewer attention in deliberate sequence",
    trap: "Mọi chi tiết đều sáng chói và sắc nét ngang nhau khiến người xem không biết nhìn vào đâu trước",
    antidote: "Chỉ cho phép duy nhất một điểm có độ tương phản và độ sáng cao nhất trong toàn bộ khung hình"
  },
  {
    id: "tinhThong",
    lesson: 19,
    module: "Module 5: Hệ Thống Vận Hành",
    nameVi: "Tính Thống Nhất Toàn Vẹn Tác Phẩm (Unity)",
    nameEn: "Holistic Cinematic Unity & Gestalt Cohesion",
    desc: "Tổng hợp toàn bộ ngôn ngữ thị giác thành một tác phẩm hoàn chỉnh: Ánh sáng, màu sắc, bố cục, nhịp điệu và chất liệu đều đồng thanh phục vụ cho một linh hồn thông điệp duy nhất.",
    promptSnippet: "consummate artistic unity, holistic cinematic cohesion, every optical element harmonized to a singular emotional core, seamless Gestalt integrity, zero superfluous visual noise",
    opticalParams: "Unified cinema film emulation, harmonious color grading LUT, flawless production design",
    trap: "Râu ông nọ cắm cằm bà kia: Bố cục một đằng, ánh sáng một nẻo, màu sắc không ăn nhập với tâm lý",
    antidote: "Kiểm tra toàn diện: Nếu bỏ bớt bất kỳ chi tiết nào trong khung mà cảm xúc không suy suyển, hãy loại bỏ nó ngay"
  }
];

/**
 * Bộ lọc Đạo đức Thị giác (Ethical Framing & Anti-Tropes) từ Bài học 3 của Khóa học
 */
export const ETHICAL_FRAMING_GUARDRAILS = {
  exoticization: {
    rule: "Anti-Exoticization (Chống Cảnh Lạ Mắt Hóa)",
    violation: "Biến cộng đồng hoặc văn hóa thành vật trang trí lạ mắt chỉ để kích thích sự hiếu kỳ của người ngoài.",
    remedy: "Nhấn mạnh điểm tương đồng nhân bản. Đặt chủ thể trong sinh hoạt đời sống tự nhiên.",
    promptInjection: "authentic human dignity, respectful cultural context, unposed organic daily life"
  },
  singleStory: {
    rule: "Anti-Single Story (Chống Câu Chuyện Phiến Diện)",
    violation: "Dùng một khuôn mẫu dễ dãi để đại diện cho cả một cộng đồng phức tạp.",
    remedy: "Khắc họa đa tầng cảm xúc: lao động, suy tư, niềm vui, sự tự chủ.",
    promptInjection: "nuanced emotional complexity, multifaceted human experience, sovereign interiority"
  },
  saviorFraming: {
    rule: "Anti-Savior Framing (Chống Định Khung Cứu Thế)",
    violation: "Đặt chủ thể vào vị trí thụ động, yếu thế chờ đợi được thương hại hoặc cứu giúp.",
    remedy: "Trao quyền cho chủ thể thông qua góc máy ngang tầm mắt hoặc góc thấp nhẹ.",
    promptInjection: "dignified eye-level camera stance, self-reliant personal agency, commanding quiet dignity"
  }
};

/**
 * Áp dụng một hoặc nhiều quy luật thị giác vào prompt hiện tại
 * @param {string} promptText
 * @param {string[]} lawIds - Danh sách mã quy luật (e.g. ['chatLieu', 'khongGian'])
 * @returns {string} Prompt đã được tiêm các tham số quang học tương ứng
 */
export function injectVisualLawsIntoPrompt(promptText, lawIds = []) {
  if (!lawIds || lawIds.length === 0) return promptText;

  const injections = [];
  for (const id of lawIds) {
    const law = VISUAL_LANGUAGE_MASTERY_19_LAWS.find(l => l.id === id);
    if (law && !promptText.toLowerCase().includes(law.promptSnippet.slice(0, 20).toLowerCase())) {
      injections.push(law.promptSnippet);
    }
  }

  if (injections.length === 0) return promptText;
  return `${promptText}, ${injections.join(", ")}`;
}

/**
 * Đường dẫn tham chiếu trực tiếp đến Khóa Học Ngôn Ngữ Thị Giác
 */
export const PHOTOGRAPHY_MASTER_COURSE_URL = "https://photography-course-master.vercel.app/";

// ── 9. COMMERCIAL PRODUCTION PRESETS (10 Kịch Bản Thương Mại Đỉnh Cao) ──
export const COMMERCIAL_PRODUCTION_PRESETS = [
  {
    id: "comm_flashback",
    title: "1. Kể chuyện & Hồi tưởng (Flashback Story)",
    category: "Story & Cinema",
    aspectRatio: "16:9",
    shotSize: "Medium Close-up",
    angle: "Eye-level",
    movement: "Slow smooth dolly in toward subject",
    lighting: "Soft window light with floating dust particles",
    color: "Muted warm palette with lifted blacks",
    mood: "Nostalgic and melancholic",
    optics: "Shallow depth of field, 35mm film grain, f/1.8",
    fullPrompt: "Medium close-up, eye-level, an elderly Vietnamese woman with silver hair in a faded brown áo bà ba sits by a wooden window, slowly turning the pages of an old photo album, soft window light with dust particles floating in the air, slow dolly in, cinematic, muted warm palette with lifted blacks, nostalgic and melancholic mood, shallow depth of field, 35mm film grain, 16:9",
    rationale: "Dolly in chậm cuốn khán giả vào dòng hồi tưởng; ánh sáng cửa sổ khuếch tán kết hợp lifted blacks tái hiện chất thơ điện ảnh hoài niệm."
  },
  {
    id: "comm_horror",
    title: "2. Kinh dị & Huyền bí Pháp cổ (French Colonial Horror)",
    category: "Mystery & Horror",
    aspectRatio: "2.35:1",
    shotSize: "Low angle, Dutch tilt",
    angle: "Canted / Dutch tilt",
    movement: "Handheld camera with slight shake, slow push in",
    lighting: "Light from a single candle held at chest level",
    color: "Cool desaturated palette with deep pitch shadows",
    mood: "Eerie and ominous suspense",
    optics: "High contrast, ground fog creeping, wide lens",
    fullPrompt: "Low angle, Dutch tilt, a lone figure in a white dress stands at the end of a long corridor in an abandoned French colonial house, ground fog creeping along the floor, light from a single candle held at chest level, handheld camera with slight shake, slow push in, film noir, cool desaturated palette with deep shadows, eerie and ominous mood, high contrast, 2.35:1",
    rationale: "Góc Dutch tilt tạo cảm giác bất an; một nguồn sáng nến duy nhất đẩy tương phản sáng-tối lên cực hạn; máy cầm tay mô phỏng góc nhìn nhân chứng."
  },
  {
    id: "comm_wuxia",
    title: "3. Cổ trang & Tu tiên (Wuxia / Cultivation Fantasy)",
    category: "Fantasy & Epic",
    aspectRatio: "21:9",
    shotSize: "Extreme wide establishing shot",
    angle: "Low horizon, high altitude",
    movement: "Crane shot rising slowly to reveal distant peaks",
    lighting: "Volumetric God rays breaking through morning mist",
    color: "Ethereal golden hues, ink wash painting tones",
    mood: "Majestic and serene awe",
    optics: "Volumetric lighting, sharp panoramic depth, 8K",
    fullPrompt: "Extreme wide establishing shot, low horizon, a young cultivator in flowing white hanfu stands on a cliff edge above a sea of clouds at sunrise, God rays breaking through the mist, crane shot rising slowly to reveal distant mountain peaks, cinematic fantasy art with ink wash painting influence, ethereal golden hues, majestic and serene mood, volumetric lighting, 8K, 21:9",
    rationale: "Cú nâng cẩu (crane up) kết hợp viễn cảnh bao la thu nhỏ con người trước thiên nhiên kỳ vĩ; thẩm mỹ thủy mặc nâng tầm chất tiên hiệp."
  },
  {
    id: "comm_ecommerce_suite",
    title: "4. Thương mại Điện tử 2-Clip (E-Commerce Product Suite)",
    category: "E-Commerce",
    aspectRatio: "1:1",
    shotSize: "Product shot + Macro detail",
    angle: "Eye-level transitioning to Extreme Close-up",
    movement: "Slow 360-degree orbit followed by slow pan across texture",
    lighting: "Studio softbox lighting with subtle rim light and specular highlights",
    color: "Clean high-key look, neutral balanced palette",
    mood: "Calm, premium luxury",
    optics: "100mm macro lens, pristine commercial grade",
    fullPrompt: "Clip 1: Product shot, eye-level, a matte black ceramic coffee mug on a clean light-grey stone surface, softbox studio lighting with subtle rim light, slow 360-degree orbit around the product, photorealistic, clean high-key look, neutral color palette, calm and premium mood, 8K, 1:1.\nClip 2: Extreme close-up, macro angle, the matte black ceramic surface of the same mug, fine speckled texture visible, soft directional light raking across the surface, slow pan right, photorealistic, neutral palette, premium mood, hyperdetailed.",
    rationale: "Cấu trúc 2-clip vàng của quảng cáo: Clip 1 định hình phom dáng sản phẩm 360 độ -> Clip 2 zoom macro thuyết phục về chất liệu cao cấp."
  },
  {
    id: "comm_food",
    title: "5. Ẩm thực Nghệ thuật (Gourmet Food & Steaming Cuisine)",
    category: "Food & Beverage",
    aspectRatio: "9:16",
    shotSize: "Overhead flat lay transitioning to 45-degree angle",
    angle: "Top-down / 45-degree",
    movement: "Slow smooth push in toward steam",
    lighting: "Warm directional window light from the left, backlit steam",
    color: "Warm appetizing palette with rich reds and fresh greens",
    mood: "Cozy, comforting and appetizing",
    optics: "Shallow depth of field, 50mm f/2.0, macro food detail",
    fullPrompt: "Overhead flat lay transitioning to 45-degree angle, a steaming bowl of phở with fresh herbs, lime and chili on a rustic wooden table, warm window light from the left, steam rising visibly, slow push in, food photography style, warm palette with rich reds and greens, cozy and appetizing mood, shallow depth of field, 9:16 vertical",
    rationale: "Ánh sáng ngược làm nổi hạt hơi nước bốc khói nghi ngút; chuyển góc máy từ flat-lay sang 45 độ kích thích giác quan thèm ăn tối đa."
  },
  {
    id: "comm_corporate",
    title: "6. Đào tạo & Chuyên gia (Executive Corporate Talking Head)",
    category: "Corporate & Education",
    aspectRatio: "16:9",
    shotSize: "Medium shot",
    angle: "Eye-level neutral stance",
    movement: "Static locked-off camera with subtle optical zoom",
    lighting: "Two-point softbox key and gentle hair rim light",
    color: "Neutral clean color balance, soft professional tone",
    mood: "Calm, confident and authoritative",
    optics: "85mm portrait prime, soft background bokeh",
    fullPrompt: "Medium shot, eye-level, a professional in a navy blazer speaks to camera in a modern office with soft bokeh background, two-point softbox lighting with gentle rim light, static locked-off camera, clean corporate look, neutral color balance, calm and confident mood, sharp focus on face, 16:9",
    rationale: "Máy cố định triệt tiêu xao nhãng; tiêu cự 85mm tách chủ thể khỏi văn phòng tạo vị thế chuyên gia đáng tin cậy."
  },
  {
    id: "comm_neon_noir",
    title: "7. Phố Đêm Mưa Neon (Neon Noir Rain Street)",
    category: "Cinematic Urban",
    aspectRatio: "2.35:1",
    shotSize: "Low angle, medium shot",
    angle: "Low angle street view",
    movement: "Side tracking shot moving parallel with subject",
    lighting: "Neon signs reflecting on wet asphalt, practical rim light",
    color: "Neon noir aesthetic, teal and magenta palette",
    mood: "Confident, moody and mysterious",
    optics: "35mm anamorphic lens, horizontal flare streaks",
    fullPrompt: "Low angle, medium shot, a man in a black leather jacket walks through a rain-soaked Hanoi street at night, neon signs reflecting on wet asphalt, rim lighting from city lights, side tracking shot, neon noir aesthetic, teal and magenta palette, confident and mysterious mood, anamorphic lens flare, 35mm, 2.35:1",
    rationale: "Mặt đường ướt mưa biến thành tấm gương phản chiếu neon; góc thấp và vệt sáng anamorphic tạo chất điện ảnh Wong Kar-wai & Blade Runner."
  },
  {
    id: "comm_travel_drone",
    title: "8. Du lịch & Thiên nhiên FPV (Travel Landscape FPV Drone)",
    category: "Travel & Nature",
    aspectRatio: "16:9",
    shotSize: "Aerial establishing shot",
    angle: "High aerial drone perspective",
    movement: "FPV drone flying low then soaring crane up",
    lighting: "Golden hour sunlight with long dramatic terrain shadows",
    color: "Vibrant HDR with warm golden ochre and lush emerald greens",
    mood: "Awe, grandeur and breathtaking majesty",
    optics: "Wide panoramic deep focus, hyperfocal sharp horizon",
    fullPrompt: "Aerial establishing shot, FPV drone flying low over terraced rice fields in Mu Cang Chai at golden hour, sun-kissed slopes with long shadows, fast smooth flyover then slow crane up to reveal the valley, cinematic, vibrant HDR with warm golden hues, awe and majestic mood, sharp deep focus, 16:9",
    rationale: "Cú lướt máy FPV từ sát mặt đất hất vút lên trời cao tạo cảm giác bay tự do; sắc vàng hoàng hôn tôn vinh cảnh sắc non sông Việt Nam."
  },
  {
    id: "comm_action",
    title: "9. Hành động & Tốc độ Cao (High-Octane Action & Sports)",
    category: "Action & Sports",
    aspectRatio: "16:9",
    shotSize: "Wide shot cutting to dynamic close-up",
    angle: "Low canted angle",
    movement: "Fast tracking shot with whip pan kinetic transition",
    lighting: "Hard direct sunlight with razor-sharp shadow cuts",
    color: "Teal and orange blockbuster grade",
    mood: "Intense, urgent and adrenaline-fueled",
    optics: "Shutter angle 180 degrees, controlled motion blur, 24mm",
    fullPrompt: "Wide shot cutting to close-up, low angle, a motorbike racer leans hard into a corner on a mountain road, hard midday sunlight with high contrast, fast tracking shot with slight motion blur, cinematic action color grade, teal and orange, intense and urgent mood, shutter angle 180 degrees, 16:9",
    rationale: "Góc máy sát mặt đường khi xe ôm cua tạo lực ly tâm dữ dội; shutter 180 độ giữ độ nhòe chuyển động chuẩn phim hành động Hollywood."
  },
  {
    id: "comm_tiktok_ugc",
    title: "10. Reels & TikTok Chân thực (Authentic Mobile UGC)",
    category: "Social Media UGC",
    aspectRatio: "9:16",
    shotSize: "Eye-level casual framing",
    angle: "Direct eye-level mobile perspective",
    movement: "Handheld with subtle organic micro-shake",
    lighting: "Natural soft kitchen window light",
    color: "Vibrant but un-retouched natural authentic tones",
    mood: "Playful, cheerful and candid",
    optics: "Shot on iPhone 15 Pro, natural mobile lens feel",
    fullPrompt: "9:16 vertical, eye-level, a young woman unboxes a skincare package at a bright kitchen table, natural window light, handheld with slight shake, authentic mobile phone photography style, vibrant but natural colors, playful and cheerful mood, candid feel",
    rationale: "Độ rung cầm tay tự nhiên và ánh sáng phòng đời thường đánh trúng tâm lý tin cậy của khách hàng TikTok/Reels, tăng tỷ lệ chuyển đổi đơn hàng."
  }
];

// ── 10. EMOTION-TO-SHOT DIRECTOR MATRIX (Ma Trận Cảm Xúc -> Kỹ Thuật Đạo Diễn) ──
export const EMOTION_TO_SHOT_MATRIX = {
  melancholic: {
    id: "melancholic",
    emotionVi: "Buồn bã, Cô đơn & Lạc lõng",
    icon: "🌧️",
    shotSize: "High angle, Wide establishing",
    lighting: "Overcast, Blue hour, Lifted blacks",
    movement: "Slow dolly out (Pull back to reveal isolation)",
    palette: "Cool, desaturated, slate blues and grey",
    optics: "35mm film grain, muted contrast, shallow focus",
    recommendedMood: "melancholic, lonely isolation, solemn"
  },
  empowered: {
    id: "empowered",
    emotionVi: "Quyền lực, Uy nghiêm & Hùng tráng",
    icon: "👑",
    shotSize: "Low angle, Hero shot, Worm's-eye view",
    lighting: "Rim lighting from city lights, hard key light",
    movement: "Slow dolly in OR 360-degree orbit",
    palette: "High contrast, gold and deep carbon blacks",
    optics: "ARRI Master Prime, sharp central focal plane",
    recommendedMood: "triumphant, majestic, commanding quiet authority"
  },
  nostalgic: {
    id: "nostalgic",
    emotionVi: "Ấm áp, Hoài niệm & Ký ức",
    icon: "🍂",
    shotSize: "Medium shot, Eye-level",
    lighting: "Golden hour, Dappled light through leaves",
    movement: "Static locked-off OR slow gentle pan",
    palette: "Warm earthy tones, vintage Kodachrome amber",
    optics: "Kodak Portra 400 emulation, soft edge halation",
    recommendedMood: "nostalgic, intimate, serene warmth"
  },
  mysterious_eerie: {
    id: "mysterious_eerie",
    emotionVi: "Bí ẩn, Căng thẳng & Rùng rợn",
    icon: "🕯️",
    shotSize: "Dutch tilt, Low angle",
    lighting: "Low-key chiaroscuro, single candle, under-lighting",
    movement: "Handheld camera with slight shake, slow push-in",
    palette: "Deep shadows, cool desaturated greenish-cyan",
    optics: "Anamorphic horizontal streak flares, ground fog",
    recommendedMood: "eerie, ominous, high psychological suspense"
  },
  majestic_awe: {
    id: "majestic_awe",
    emotionVi: "Kỳ vĩ, Choáng ngợp & Linh thiêng",
    icon: "⛰️",
    shotSize: "Worm's-eye view, Extreme wide shot",
    lighting: "Volumetric God rays, crepuscular beams, rim light",
    movement: "Crane shot rising up, FPV aerial flyover",
    palette: "Vibrant HDR, golden hour hues, deep celestial azure",
    optics: "70mm IMAX 15-perf format, pristine deep focus",
    recommendedMood: "awe, majestic grandeur, spiritual reverie"
  },
  intimate_romantic: {
    id: "intimate_romantic",
    emotionVi: "Thân mật, Lãng mạn & Tình cảm",
    icon: "🌹",
    shotSize: "Close-up, Over-the-shoulder, MCU",
    lighting: "Soft diffuse window light, warm candle glow",
    movement: "Slow smooth dolly in toward subject",
    palette: "Warm pastel, creamy peach, soft rose gold",
    optics: "Cooke S4/i 85mm 'Cooke Look', creamy oval bokeh",
    recommendedMood: "romantic, tender, gentle intimacy"
  },
  intense_urgent: {
    id: "intense_urgent",
    emotionVi: "Hành động, Cấp bách & Nghẹt thở",
    icon: "⚡",
    shotSize: "Eye-level fast framing, Canted angle",
    lighting: "Hard directional sunlight, harsh cast shadows",
    movement: "Fast tracking shot, whip pan, crash zoom",
    palette: "Teal and orange blockbuster grade, saturated",
    optics: "Shutter angle 180 degrees, realistic kinetic blur",
    recommendedMood: "intense, adrenaline-fueled, urgent"
  },
  dreamy_surreal: {
    id: "dreamy_surreal",
    emotionVi: "Mơ màng, Siêu thực & Huyền ảo",
    icon: "✨",
    shotSize: "Floating camera angle, Three-quarter turn",
    lighting: "Backlit with lens flare, soft haze glow",
    movement: "Underwater drift, floating camera slow sway",
    palette: "Dreamy iridescent pastel, lavender and cyan",
    optics: "Black Pro Mist filter, double exposure, bloom halation",
    recommendedMood: "dreamy, ethereal, surreal whimsical"
  }
};

/**
 * Tạo cặp prompt 2-clip liền mạch phục vụ sản phẩm hoặc nhân vật
 */
export function generateTwoClipSequence(subject, style = "cinematic", emotionKey = "empowered") {
  const emotion = EMOTION_TO_SHOT_MATRIX[emotionKey] || EMOTION_TO_SHOT_MATRIX.empowered;
  
  const clip1 = `Clip 1 (Wide Establishing & Movement): Wide establishing shot, ${emotion.shotSize.split(',')[0]}, ${subject}, ${emotion.lighting}, ${emotion.movement}, ${style}, ${emotion.palette}, ${emotion.recommendedMood}, 16:9`;
  
  const clip2 = `Clip 2 (Macro Detail & Texture): Extreme close-up, macro texture focus, detailed surface features of the same ${subject.split(',')[0]}, subtle directional lighting raking across surface, slow smooth pan, matching ${style} aesthetic, ${emotion.palette}, hyperdetailed tactile depth`;

  return {
    clip1,
    clip2,
    directorNotes: "Giữ nguyên mô tả chủ thể, bảng màu và phong cách giữa 2 clip để duy trì tính nhất quán quang học (Visual Continuity)."
  };
}

/**
 * Xuất toàn bộ kiến thức Cine Prompt Pro thành tài liệu AI Skill chuẩn (SKILL.md)
 */
export function exportSkillMarkdown() {
  return `---
name: cine-prompt-pro
description: Siêu trợ lý Đạo diễn & Kỹ thuật viên Quay phim AI (Cine Prompt Pro Master Studio). Tự động kiến tạo prompt video/hình ảnh chuẩn điện ảnh quốc tế, hỗ trợ Wan 2.5, Veo 3/Google Flow, Midjourney v8.2, Kling 2.0, Runway Gen-4 với 19 Định luật Thị giác & Linter quang học.
---

# Cine Prompt Pro — Master Cinematic AI Director Skill

Skill này cung cấp toàn bộ tri thức quang học, góc máy, ánh sáng, bố cục và thang chấm điểm 4 trụ cột để điều hướng AI sinh hình ảnh & video chất lượng điện ảnh Hollywood.

## 1. Công thức Đạo diễn Vàng (The Master Prompt Formula)

\`\`\`
[Shot Size + Camera Angle], [Subject + Physical Identity], [Kinetic Action Beat], [Environment + Atmosphere + Weather], [Master Lighting Setup], [Camera Movement Rig], [Art Style + Film Stock Emulation], [Emotional Mood], [Optical Specs: Focal Length, Aperture, Aspect Ratio]
\`\`\`

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
`;
}
