/**
 * guardrails.js — Content Safety & Quality Control Module
 * ────────────────────────────────────────────────────────
 * 1. NSFW/Policy Filter: Detects & replaces banned keywords
 * 2. Token Limit Guard: Enforces per-platform token limits
 * 3. Quality Gate: Validates prompt has core cinematic components
 */

/* ── 1. NSFW / POLICY FILTER ──────────────────────────────── */

/**
 * Banned keywords that commonly trigger rejection on Midjourney,
 * DALL-E, Runway, Kling, and other platforms.
 * Each entry: { pattern: RegExp, replacement: string, severity: 'block'|'warn' }
 */
const BANNED_PATTERNS = [
  // Violence / Gore
  { pattern: /\b(gore|gory)\b/gi, replacement: 'dramatic', severity: 'warn' },
  { pattern: /\b(blood[- ]?bath|bloodshed)\b/gi, replacement: 'intense scene', severity: 'warn' },
  { pattern: /\b(dismember(?:ed|ment)?)\b/gi, replacement: 'damaged', severity: 'block' },
  { pattern: /\b(mutilat(?:e|ed|ion))\b/gi, replacement: 'weathered', severity: 'block' },
  { pattern: /\b(decapitat(?:e|ed|ion))\b/gi, replacement: 'dramatic action', severity: 'block' },
  { pattern: /\b(torture[ds]?)\b/gi, replacement: 'struggle', severity: 'block' },
  { pattern: /\b(gruesome)\b/gi, replacement: 'intense', severity: 'warn' },

  // NSFW / Sexual
  { pattern: /\b(nude|nudity|naked)\b/gi, replacement: 'elegant', severity: 'block' },
  { pattern: /\b(nsfw)\b/gi, replacement: '', severity: 'block' },
  { pattern: /\b(erotic|erotica)\b/gi, replacement: 'romantic', severity: 'block' },
  { pattern: /\b(seductive|seducing)\b/gi, replacement: 'alluring', severity: 'warn' },
  { pattern: /\b(provocative)\b/gi, replacement: 'striking', severity: 'warn' },
  { pattern: /\b(lingerie)\b/gi, replacement: 'elegant clothing', severity: 'warn' },
  { pattern: /\b(topless|shirtless)\b/gi, replacement: 'casually dressed', severity: 'warn' },
  { pattern: /\b(bikini)\b/gi, replacement: 'swimwear', severity: 'warn' },
  { pattern: /\b(pornograph(?:y|ic))\b/gi, replacement: '', severity: 'block' },
  { pattern: /\b(sexual(?:ly)?|sex(?:ual)?)\b/gi, replacement: 'intimate', severity: 'block' },

  // Drugs / Substance
  { pattern: /\b(cocaine|heroin|meth(?:amphetamine)?)\b/gi, replacement: 'substance', severity: 'block' },
  { pattern: /\b(drug[- ]?deal(?:er|ing)?)\b/gi, replacement: 'transaction', severity: 'block' },
  { pattern: /\b(overdose[ds]?)\b/gi, replacement: 'collapse', severity: 'warn' },
  { pattern: /\b(inject(?:ing|ion)\s+(?:drug|heroin|substance))\b/gi, replacement: 'medical procedure', severity: 'block' },

  // Hate / Extremism
  { pattern: /\b(nazi|swastika)\b/gi, replacement: 'historical symbol', severity: 'block' },
  { pattern: /\b(terrorist|terrorism)\b/gi, replacement: 'conflict', severity: 'block' },
  { pattern: /\b(genocide)\b/gi, replacement: 'historical tragedy', severity: 'block' },
  { pattern: /\b(white\s*supremac(?:y|ist))\b/gi, replacement: '', severity: 'block' },
  { pattern: /\b(ethnic\s*cleansing)\b/gi, replacement: 'displacement', severity: 'block' },

  // Self-harm
  { pattern: /\b(suicide|suicidal)\b/gi, replacement: 'despair', severity: 'block' },
  { pattern: /\b(self[- ]?harm)\b/gi, replacement: 'emotional struggle', severity: 'block' },
  { pattern: /\b(cutting\s+(?:wrist|self))\b/gi, replacement: 'inner turmoil', severity: 'block' },

  // Weapons (context-sensitive — block only gratuitous)
  { pattern: /\b(mass\s*shoot(?:ing|er))\b/gi, replacement: 'crisis', severity: 'block' },
  { pattern: /\b(school\s*shoot(?:ing|er))\b/gi, replacement: 'school crisis', severity: 'block' },
  { pattern: /\b(bomb\s*(?:ing|vest|threat))\b/gi, replacement: 'emergency', severity: 'block' },

  // Child safety
  { pattern: /\b(child\s*(?:abuse|exploit(?:ation)?))\b/gi, replacement: '', severity: 'block' },
  { pattern: /\b(minor\s*(?:in\s*)?(?:sexual|nude|naked))\b/gi, replacement: '', severity: 'block' },
  { pattern: /\b(underage)\b/gi, replacement: 'young', severity: 'block' },

  // Deepfake / Real people
  { pattern: /\b(deepfake)\b/gi, replacement: 'AI-generated', severity: 'warn' },

  // Platform-specific bans (Midjourney)
  { pattern: /\b(realistic\s+child(?:ren)?)\b/gi, replacement: 'young character (illustrated)', severity: 'warn' },
];

/**
 * Sanitizes a prompt by replacing banned keywords with safe alternatives.
 * 
 * @param {string} promptText - The prompt to sanitize
 * @returns {{ sanitized: string, warnings: Array<{original: string, replacement: string, severity: string}>, blocked: boolean }}
 */
export function sanitizePrompt(promptText) {
  if (!promptText) return { sanitized: '', warnings: [], blocked: false };

  let result = promptText;
  const warnings = [];
  let hasBlock = false;

  for (const rule of BANNED_PATTERNS) {
    const matches = result.match(rule.pattern);
    if (matches) {
      for (const match of matches) {
        warnings.push({
          original: match,
          replacement: rule.replacement,
          severity: rule.severity,
        });
        if (rule.severity === 'block') hasBlock = true;
      }
      result = result.replace(rule.pattern, rule.replacement);
    }
  }

  // Clean up double spaces and trailing commas
  result = result.replace(/\s{2,}/g, ' ').replace(/,\s*,/g, ',').replace(/,\s*$/, '').trim();

  return {
    sanitized: result,
    warnings,
    blocked: hasBlock,
  };
}


/* ── 2. TOKEN LIMIT GUARD ──────────────────────────────────── */

/**
 * Platform-specific word/character limits.
 */
const PLATFORM_LIMITS = {
  midjourney:  { maxWords: 450,  maxChars: null, label: 'Midjourney' },
  dalle:       { maxWords: null, maxChars: 4000, label: 'DALL-E 3' },
  runway:      { maxWords: 500,  maxChars: null, label: 'Runway Gen-3' },
  kling:       { maxWords: 300,  maxChars: null, label: 'Kling AI' },
  sora:        { maxWords: 500,  maxChars: null, label: 'Sora' },
  veo:         { maxWords: 500,  maxChars: null, label: 'Veo 3' },
  video:       { maxWords: 600,  maxChars: null, label: 'Video Prompt' },
  notebooklm:  { maxWords: 2000, maxChars: null, label: 'NotebookLM' },
  default:     { maxWords: 600,  maxChars: null, label: 'Default' },
};

/**
 * Counts words and characters in a prompt.
 * @param {string} text
 * @returns {{ words: number, chars: number }}
 */
export function countTokens(text) {
  if (!text) return { words: 0, chars: 0 };
  const trimmed = text.trim();
  return {
    words: trimmed.split(/\s+/).filter(Boolean).length,
    chars: trimmed.length,
  };
}

/**
 * Enforces token limits for a given platform.
 * Truncates at sentence boundaries when possible.
 * 
 * @param {string} text - Prompt text
 * @param {string} [platform='default'] - Target platform key
 * @returns {{ text: string, truncated: boolean, stats: { words: number, chars: number, maxWords: number|null, maxChars: number|null, platform: string } }}
 */
export function enforceTokenLimit(text, platform = 'default') {
  const limits = PLATFORM_LIMITS[platform] || PLATFORM_LIMITS.default;
  const stats = countTokens(text);
  
  let result = text;
  let truncated = false;

  // Word limit
  if (limits.maxWords && stats.words > limits.maxWords) {
    const words = result.split(/\s+/);
    // Try to cut at sentence boundary near the limit
    let cutIdx = limits.maxWords;
    for (let i = limits.maxWords; i > limits.maxWords - 30 && i > 0; i--) {
      if (words[i - 1]?.endsWith('.') || words[i - 1]?.endsWith(',')) {
        cutIdx = i;
        break;
      }
    }
    result = words.slice(0, cutIdx).join(' ');
    truncated = true;
  }

  // Character limit
  if (limits.maxChars && result.length > limits.maxChars) {
    // Try to cut at sentence boundary
    const cutPoint = result.lastIndexOf('.', limits.maxChars);
    if (cutPoint > limits.maxChars * 0.7) {
      result = result.substring(0, cutPoint + 1);
    } else {
      result = result.substring(0, limits.maxChars);
    }
    truncated = true;
  }

  const finalStats = countTokens(result);

  return {
    text: result,
    truncated,
    stats: {
      words: finalStats.words,
      chars: finalStats.chars,
      maxWords: limits.maxWords,
      maxChars: limits.maxChars,
      platform: limits.label,
    },
  };
}

/**
 * Returns limit info for a platform without truncating.
 * @param {string} platform
 * @returns {{ maxWords: number|null, maxChars: number|null, label: string }}
 */
export function getPlatformLimits(platform = 'default') {
  return PLATFORM_LIMITS[platform] || PLATFORM_LIMITS.default;
}


/* ── 3. QUALITY GATE ────────────────────────────────────────── */

/**
 * Core prompt components and their detection keywords.
 */
const QUALITY_COMPONENTS = {
  subject: {
    label: '🎯 Subject',
    keywords: [
      'girl', 'boy', 'woman', 'man', 'person', 'character', 'figure',
      'product', 'object', 'item', 'car', 'building', 'landscape',
      'animal', 'cat', 'dog', 'bird', 'flower', 'food', 'drink',
      'portrait', 'couple', 'group', 'child', 'warrior', 'dancer',
      'detective', 'samurai', 'robot', 'alien', 'monster',
    ],
    defaultFill: '',
  },
  environment: {
    label: '🌆 Environment',
    keywords: [
      'city', 'street', 'forest', 'mountain', 'ocean', 'beach', 'desert',
      'rain', 'snow', 'fog', 'night', 'morning', 'sunset', 'sunrise',
      'café', 'studio', 'office', 'room', 'garden', 'alley', 'rooftop',
      'warehouse', 'temple', 'market', 'village', 'urban', 'rural',
      'underwater', 'space', 'interior', 'exterior', 'background',
      'setting', 'location', 'atmosphere', 'environment', 'scene',
    ],
    defaultFill: ', atmospheric environment',
  },
  lighting: {
    label: '💡 Lighting',
    keywords: [
      'light', 'lighting', 'shadow', 'glow', 'ray', 'beam', 'illuminat',
      'chiaroscuro', 'rim light', 'backlight', 'soft light', 'hard light',
      'golden hour', 'blue hour', 'neon', 'volumetric', 'ambient',
      'dramatic light', 'natural light', 'studio light', 'spotlight',
      'candle', 'fire', 'moonlight', 'sunlight', 'overcast',
      'high key', 'low key', 'silhouette', 'god ray',
    ],
    defaultFill: ', cinematic natural lighting',
  },
  camera: {
    label: '📹 Camera',
    keywords: [
      'camera', 'lens', 'shot', 'angle', 'frame', 'focus', 'bokeh',
      'depth of field', 'aperture', 'f/', 'mm', '35mm', '50mm', '85mm',
      'anamorphic', 'wide angle', 'telephoto', 'macro', 'tilt',
      'close up', 'medium shot', 'wide shot', 'extreme close',
      'overhead', 'bird eye', 'low angle', 'dutch angle',
      'dolly', 'tracking', 'pan', 'orbit', 'crane',
      'ARRI', 'RED', 'Sony', 'Canon', 'Nikon', 'Hasselblad',
    ],
    defaultFill: ', 35mm cinematic lens f/2.8',
  },
};

/**
 * Validates that a prompt contains the core cinematic components.
 * Returns missing components and suggested additions.
 * 
 * @param {string} promptText
 * @returns {{ 
 *   isComplete: boolean, 
 *   score: number,
 *   components: Array<{ key: string, label: string, found: boolean }>,
 *   suggestions: string[],
 *   autoFill: string 
 * }}
 */
export function validatePromptStructure(promptText) {
  const lang = localStorage.getItem("cine_lang") || "vi";

  if (!promptText) {
    return {
      isComplete: false,
      score: 0,
      components: Object.entries(QUALITY_COMPONENTS).map(([key, comp]) => ({
        key,
        label: comp.label,
        found: false,
      })),
      suggestions: [lang === 'vi' ? 'Chưa có nội dung prompt.' : 'No prompt content yet.'],
      autoFill: '',
    };
  }

  const lowerText = promptText.toLowerCase();
  const components = [];
  const suggestions = [];
  let autoFill = '';
  let found = 0;

  for (const [key, comp] of Object.entries(QUALITY_COMPONENTS)) {
    const hasComponent = comp.keywords.some(kw => lowerText.includes(kw.toLowerCase()));
    components.push({ key, label: comp.label, found: hasComponent });

    if (hasComponent) {
      found++;
    } else {
      const cleanName = comp.label.replace(/[^\w\s]/g, '').trim();
      const msg = lang === 'vi'
        ? `Thiếu ${comp.label} — Thêm chi tiết về ${cleanName.toLowerCase()} để prompt chuyên nghiệp hơn.`
        : `Missing ${comp.label} — Add details about ${cleanName.toLowerCase()} to enhance your prompt.`;
      suggestions.push(msg);
      autoFill += comp.defaultFill;
    }
  }

  const totalComponents = Object.keys(QUALITY_COMPONENTS).length;

  return {
    isComplete: found === totalComponents,
    score: Math.round((found / totalComponents) * 100),
    components,
    suggestions,
    autoFill,
  };
}
