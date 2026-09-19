/**
 * smartMergeEngine.js — Hollywood Smart Merge & Auto-Inference Engine
 * ──────────────────────────────────────────────────────────────────
 * Chắt lọc từ CinePrompt.io v2.0:
 * 1. Khử trùng lặp thương hiệu máy quay & color science (tránh "ARRI Alexa ARRI LogC3").
 * 2. Ráp câu máy quay và góc máy tự nhiên theo chuẩn ngôn ngữ điện ảnh.
 * 3. Tự động suy luận tone tâm trạng (Auto-Tone) từ thể loại phim.
 * 4. Tự động suy luận đặc tính ánh sáng (Auto-Lighting) từ nguồn sáng.
 * 5. Hợp nhất cấu trúc trang phục, diện mạo nhân vật và bối cảnh.
 */

/* ── Auto-Tone Dictionary ────────────────────────────────────────── */
export const AUTO_TONE_MAP = {
  genre: {
    action: "energetic, high-stakes, intense atmosphere",
    adventure: "grand, adventurous, awe-inspiring",
    comedy: "bright, upbeat, whimsical",
    crime: "gritty, tense, shadowy, neo-noir undertones",
    drama: "dramatic, deeply emotional, character-driven",
    "film noir": "moody, cynical, high contrast, brooding shadows",
    gothic: "dark, atmospheric, romantic, haunting",
    mystery: "suspenseful, enigmatic, inquisitive",
    "period drama": "stately, authentic, rich historical gravitas",
    "post-apocalyptic": "desolate, weathered, survivalist tension",
    romance: "intimate, tender, warm emotional glow",
    "sci-fi": "futuristic, sleek, visionary, high-tech curiosity",
    thriller: "tense, suspenseful, edge-of-seat claustrophobia",
    horror: "dread-inducing, uncanny, chilling, ominous",
    war: "visceral, chaotic, relentless, gritty realism",
    western: "rugged, sun-baked, dusty, stoic frontier tension"
  },
  commercial_type: {
    "luxury commercial": "sophisticated, aspirational, opulent, whisper-quiet elegance",
    "car commercial": "dynamic, aerodynamic, high-power, precision engineering",
    "beverage commercial": "refreshing, thirst-quenching, crisp, glistening droplets",
    "fashion commercial": "haute couture, sleek, bold aesthetic, rhythmically striking",
    "electronics commercial": "cutting-edge, ultra-clean, minimalist tech perfection",
    "food commercial": "appetizing, mouth-watering, warm golden hour indulgence"
  },
  documentary_style: {
    "true crime": "forensic, tense, investigative, somber",
    "cinéma vérité": "raw, intimate, unvarnished, immediate observation",
    "wildlife": "patient, majestic, pristine natural wonder",
    "historical": "reverent, archival depth, timeless authenticity"
  }
};

/* ── Auto-Lighting Dictionary ────────────────────────────────────── */
export const AUTO_LIGHTING_MAP = {
  daylight: "natural, balanced, soft ambient fill",
  "direct sunlight": "hard, high-contrast, sharp geometric shadows",
  moonlight: "soft, cool blue ambient glow, silvery edge lighting",
  candlelight: "warm, intimate, delicate flickering organic illumination",
  "fire light": "warm, dynamic dancing embers, dramatic amber falloff",
  "fluorescent light": "cool, industrial, sterile, clinical realism",
  "tungsten light": "warm 3200K, rich amber warmth, vintage domestic tone",
  "neon light": "saturated, electric, hyper-stylized colorful reflections",
  "sodium vapor": "harsh amber-yellow, atmospheric urban nighttime grit",
  "window light": "soft, directional, cinematic falloff, natural wrap",
  "volumetric god rays": "dramatic, particulate-dense atmospheric light beams",
  "golden hour": "deep warm amber, low-angle raking light, long cinematic shadows",
  "blue hour": "cool serene indigo, ambient dusk glow, tranquil depth"
};

/**
 * Clean & smart merge camera body with color science log curve.
 * Ví dụ: "ARRI Alexa Mini LF" + "ARRI LogC3" -> "ARRI Alexa Mini LF in LogC3, flat log footage, ungraded"
 */
export function mergeCameraAndColorScience(cameraBody, colorScience) {
  if (!cameraBody && !colorScience) return null;
  if (!colorScience) return cameraBody;
  if (!cameraBody) return colorScience;

  let cleanLog = colorScience.replace(/ flat log.*$/i, '').replace(/ flat.*$/i, '').trim();
  const brands = ['ARRI', 'Sony', 'RED', 'Canon', 'Panasonic', 'Blackmagic', 'Nikon', 'Fujifilm'];

  for (const b of brands) {
    if (cameraBody.toUpperCase().includes(b.toUpperCase()) && cleanLog.toUpperCase().startsWith(b.toUpperCase())) {
      cleanLog = cleanLog.slice(b.length).trim();
      break;
    }
  }

  return `${cameraBody} in ${cleanLog}, flat log footage, ungraded`;
}

/**
 * Clean & smart merge shot type with camera movement.
 * Ví dụ: "Close-up shot" + "tracking" -> "Close-up shot with tracking camera movement"
 * hoặc nếu "static" -> "Close-up shot, locked-off static camera"
 */
export function mergeShotAndMovement(shotType, movement, speed = null) {
  if (!shotType && !movement) return null;
  const speedPrefix = speed && speed !== 'normal' ? `${speed} ` : '';

  if (shotType && movement) {
    const cleanMove = movement.toLowerCase();
    if (cleanMove.includes('static') || cleanMove.includes('locked')) {
      return `${shotType}, locked-off static camera`;
    }
    return `${shotType} with ${speedPrefix}${movement} camera movement`;
  }

  if (movement) {
    const cleanMove = movement.toLowerCase();
    if (cleanMove.includes('static') || cleanMove.includes('locked')) {
      return `locked-off static camera`;
    }
    return `${speedPrefix}${movement} camera movement`;
  }

  return shotType;
}

/**
 * Merge focal length with lens brand.
 * Ví dụ: "35mm prime lens" + "Cooke Anamorphic /i" -> "35mm Cooke Anamorphic /i prime lens"
 */
export function mergeLens(focalLength, lensBrand) {
  if (!focalLength && !lensBrand) return null;
  if (!lensBrand) return focalLength;
  if (!focalLength) return lensBrand;

  const cleanFocal = focalLength.replace(/ prime lens$/i, '').replace(/ lens$/i, '').trim();
  return `${cleanFocal} ${lensBrand} prime lens`;
}

/**
 * Merge lighting style and source.
 * Ví dụ: "Rembrandt lighting" + "window light" -> "Rembrandt lighting with soft directional window light"
 */
export function mergeLighting(style, source) {
  if (!style && !source) return null;
  const inferredSource = source ? (AUTO_LIGHTING_MAP[source.toLowerCase()] ? `${AUTO_LIGHTING_MAP[source.toLowerCase()]} ${source}` : source) : null;

  if (style && inferredSource) {
    const cleanStyle = style.replace(/ lighting$/i, '').replace(/ light$/i, '');
    return `${cleanStyle} lighting featuring ${inferredSource}`;
  }
  if (style) return style;
  return inferredSource ? `Lit by ${inferredSource}` : null;
}

/**
 * Infer atmospheric tone from genre or commercial type.
 */
export function inferAtmosphericTone(genreOrType) {
  if (!genreOrType) return null;
  const key = genreOrType.toLowerCase().trim();

  for (const group of Object.values(AUTO_TONE_MAP)) {
    if (group[key]) return group[key];
  }
  return null;
}

/**
 * Master Smart Merge function to process a collection of cinematic attributes.
 * @param {Object} attributes
 * @returns {Object} cleaned and merged attributes
 */
export function applySmartMerge(attributes = {}) {
  const merged = { ...attributes };

  // 1. Camera & Color Science
  if (attributes.cameraBody || attributes.colorScience) {
    merged.cameraSetup = mergeCameraAndColorScience(attributes.cameraBody, attributes.colorScience);
  }

  // 2. Shot & Movement
  if (attributes.shotType || attributes.cameraMovement) {
    merged.framingAndMotion = mergeShotAndMovement(
      attributes.shotType,
      attributes.cameraMovement,
      attributes.motionSpeed
    );
  }

  // 3. Optics
  if (attributes.focalLength || attributes.lensBrand) {
    merged.optics = mergeLens(attributes.focalLength, attributes.lensBrand);
  }

  // 4. Lighting
  if (attributes.lightingStyle || attributes.lightingSource) {
    merged.lighting = mergeLighting(attributes.lightingStyle, attributes.lightingSource);
  }

  // 5. Tone Inference
  if (attributes.genre && !attributes.inferredTone) {
    merged.inferredTone = inferAtmosphericTone(attributes.genre);
  } else if (attributes.commercialType && !attributes.inferredTone) {
    merged.inferredTone = inferAtmosphericTone(attributes.commercialType);
  }

  return merged;
}
