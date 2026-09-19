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



