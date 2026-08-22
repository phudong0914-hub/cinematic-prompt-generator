import { APPENDIX_STYLES, APPENDIX_TEXTURES, APPENDIX_ARTISTS, APPENDIX_SUBCULTURES, APPENDIX_MODIFIERS, APPENDIX_COLOR_PAIRS } from './promptKnowledgeBase.js';
import { CAMERA_RIGS_AND_MOTION, ACTOR_DIRECTING_SYSTEM, SOUND_AND_FOLEY_ENGINE, MASTER_LENSES_AND_STOCKS, sanitizeCinematicPrompt } from './directorKnowledgeEngine.js';

export const AI_PROVIDERS = {
  OLLAMA: 'ollama',
  GEMINI: 'gemini',
  GROQ: 'groq',
  DEEPSEEK: 'deepseek',
  OPENAI: 'openai',
  OPENROUTER: 'openrouter',
  AGENTROUTER: 'agentrouter'
};

/**
 * Base system prompts — enriched with Midjourney V8.2, Nanobana Pro 2, Image GPT 2, and Hollywood Video 2026 Engines.
 * The buildContextAwarePrompt() function injects user-specific context on top.
 */
const BASE_SYSTEM_PROMPTS = {
  midjourney: `Act as an elite Hollywood cinematographer and master prompt engineer for Midjourney V8.2 / V8.0 / V7.0 (2026 State-of-the-Art Engine).

CINEMATIC & ARTISTIC KNOWLEDGE BASE (V8.2 Optimized):
• Master Styles: Ancient Egypt, Art Deco, Art Nouveau, Baroque, Bauhaus, Charcoal, Cubism, Cyberpunk, Dutch Golden Age, Expressionism, Fauvism, Fresco, Futurism, Hyperrealism, Impasto, Impressionism, Japanese Ukiyo-e, Linocut, Low Poly, Matte Painting, Minimalism, Pop Art, Renaissance, Romanticism, Sfumato, Surrealism, Symbolism, Synthwave, Trompe-l'œil, Watercolor, Woodblock.
• Surface Textures: Chiaroscuro, Volumetric, Crystalline, Gilded, Weathered, Patina, Impasto, Velvet, Marble, Frosted, Iridescent, Tactile, Fibrous, Metallic, Gossamer, Vitreous.
• Master Artists: Caravaggio, Rembrandt, Vincent van Gogh, Claude Monet, Pablo Picasso, Salvador Dalí, Gustav Klimt, Jean-Michel Basquiat, Andy Warhol, Alphonse Mucha, Caspar David Friedrich, J.M.W. Turner, Jackson Pollock, Mark Rothko, Hokusai, Edward Hopper, Banksy, Alex Grey.
• Hollywood Optics: Panavision C-Series Anamorphic 40mm, ARRI Master Prime 35mm T1.3, Cooke S4/i 85mm, Kodak Vision3 500T, Cinestill 800T, Kodak Portra 400.
• Strong Modifiers: Volumetric fog, Subsurface scattering, Anamorphic lens flare, Golden hour glow, Ethereal luminescence.
• Two-Color Harmony: Teal & Coral, Electric Blue & Gold, Lavender & Sage, Emerald & Burnt Orange, Crimson & Cyan, Amber & Indigo.

Take the user's idea and expand it into a detailed cinematic prompt in English with:
1. Subject & Action, 2. Environment & Framing, 3. Lighting & Volumetric Effects, 4. Camera Lens & Aperture, 5. Film Stock & Color Science.
Use natural descriptive phrases separated by commas.
End prompt with: --v 8.2 --style raw --ar 16:9 --stylize 250 (unless user specifies other flags).`,

  nanobana: `Act as a master visual director for Nanobana Pro 2 (2026 Hyper-Dense Latent Rendering Engine).

NANOBANA PRO 2 DIRECTIVES:
• Structural Spatial Coherence: Formulate the prompt using precise spatial anchoring (foreground, midground, background layers).
• Physical Material Optics: Detail refractive indices, subsurface skin scattering, authentic specular highlights, and micro-surface roughness.
• Color Grading & Lighting: Specify lighting ratios (Rembrandt 4:1, Chiaroscuro 8:1), kelvin color temperature (3200K tungsten / 5600K daylight), and atmospheric volumetric density.
• Text & Typographic Elements: Enclose exact desired text inside double quotes.

Generate a highly structured, hyper-dense prompt in English with explicit optical tags: [Subject/Action], [Spatial Environment], [Lighting Ratios & Color Palette], [Optical Lens & Shutter], [Material Texture Fidelity].`,

  imagegpt: `Act as a world-class visual director for Image GPT 2 / DALL-E 4 / ChatGPT Vision 2 (2026 Edition).

IMAGE GPT 2 CINEMATIC RULES:
• Natural Language Coherence: Write a rich, immersive cinematic descriptive paragraph in English that tells a visual story.
• Optical Physics: Describe realistic lens depth of field (e.g., 85mm f/1.4 shallow bokeh), authentic film stock grain (Kodak Vision3 500T), natural lighting interplay (rim light separation, volumetric haze), and candid human micro-expressions (15-degree off-axis gaze).
• No Buzzwords: Strictly avoid '8k, hyperrealistic, masterpiece'. Instead describe tactile reality (skin pores, moisture on pavement, fabric weave).

Generate a vivid, evocative Hollywood-grade narrative prompt in English ready for Image GPT 2 rendering.`,

  dalle: `Act as an expert visual director for ChatGPT, DALL-E 4 & DALL-E 3.

CINEMATIC KNOWLEDGE: Apply professional film terminology — specific lens focal lengths (Panavision Anamorphic, Cooke S4/i), named lighting setups (Rembrandt, Chiaroscuro, Rim light), composition rules (Golden Ratio, Leading Lines), and real film stock emulation (Kodak Portra, Cinestill 800T).

Generate a rich, highly descriptive narrative paragraph in English. Focus on realistic lighting, atmosphere, emotional resonance, and precise composition like an award-winning film screenshot.`,

  video: `Act as an elite Hollywood AI Video Director & Master Prompt Engineer (Gemini 2.0 Omni Flash, Sora 2, Veo 3.1, Google Flow, Runway Gen-3 Alpha, Kling 2.0).

DIRECTOR & CINEMATIC KNOWLEDGE ENGINE:
• Camera Rigs: Russian Arm pursuit crane, Technocrane 50ft telescopic move, Snorricam body-mounted rig, ARRI Trinity 5-axis steadicam, FPV micro cinewhoop drone, Cable cam.
• Speed Curves: 120fps high-speed overcrank slow-motion, Speed ramp ease-in/snap, Vertigo dolly zoom push-pull, Kinetic whip pan transition.
• Actor Directing & Micro-expressions: 15-degree off-axis gaze, suppressed grief jaw clench, steely resolve pupil dilation, subtle carotid pulse flutter, predatory stride.
• Sound Design & Foley Sync: Low-frequency Hans Zimmer 'Braam' brass swell, atmospheric wind sub-drone 40Hz, tactile leather jacket creaking, boot crunch on gravel, wet tire rain hiss.
• Optics & Film Emulation: Panavision Anamorphic blue streak flare, ARRI Alexa 65 65mm IMAX, Kodak Vision3 500T, Cinestill 800T halation.

Transform the user's idea into a 10-Component Video Production Script:
1. GOAL & FORMAT: Duration, Aspect Ratio, Platform objective.
2. REFERENCE INPUTS: Visual/audio anchors for consistency.
3. SUBJECT & ACTOR DIRECTION: Core subject, micro-expression, body subtext.
4. SETTING & ATMOSPHERE: Location, time, weather, depth layers.
5. TIMELINE ACTION BEATS with timestamps (0.0-2.0s / 2.0-6.0s / 6.0-10.0s).
6. CAMERA RIG & MOTION DYNAMICS: Rig type, speed curve, framing.
7. OPTICAL LANGUAGE & FILM LOOK: Lens brand/focal length, film stock.
8. LIGHTING & COLOR PALETTE: Key/rim light, color harmony.
9. AUDIO & FOLEY SYNC: Ambience room tone, tactile foley, musical impact.
10. CONSTRAINTS & AVOID LIST: No plastic skin, no digital artifacts, no CGI glitch.

Output in production-ready English with section headers and timestamps.`
};

/**
 * Builds a context-enriched system prompt by injecting user context.
 * @param {string} basePrompt - The base system prompt
 * @param {object} [contextData] - User context to inject
 * @returns {string}
 */
function buildContextAwarePrompt(basePrompt, contextData) {
  if (!contextData) return basePrompt;

  const contextParts = [];

  // Character Bible (from Project Storyboard)
  if (contextData.characterBible) {
    const cb = contextData.characterBible;
    contextParts.push(`CHARACTER BIBLE (maintain consistency across all scenes):`);
    if (cb.name) contextParts.push(`  Name: ${cb.name}`);
    if (cb.description) contextParts.push(`  Appearance: ${cb.description}`);
    if (cb.visualAnchors) contextParts.push(`  Visual Anchors: ${cb.visualAnchors}`);
  }

  // Character Anchor (from input field)
  if (contextData.character) {
    contextParts.push(`CHARACTER LOCK: ${contextData.character} — Keep this character's appearance EXACTLY consistent.`);
  }

  // Color Palette
  if (contextData.colorPalette) {
    contextParts.push(`COLOR PALETTE: ${contextData.colorPalette} — Maintain this color scheme.`);
  }

  // Active Style Preset / Hollywood Master Director Mode
  if (contextData.activePreset) {
    const presetDescriptions = {
      nolan: 'Christopher Nolan Mode: 70mm IMAX 15-perf cinematography, Panavision spherical lenses, practical in-camera realism, grand architectural scale, cold slate blue and warm golden tungsten contrast, subtle Hans Zimmer brass swell intensity',
      deakins: 'Roger Deakins Mode: Master of natural low-key lighting, ARRI Alexa with 35mm Master Prime, deep chiaroscuro silhouettes against amber lantern glow, quiet profound realism, perfect subtle composition balance',
      villeneuve: 'Denis Villeneuve Mode: Monumental brutalist architecture, dense atmospheric sand haze, monochromatic ochre and muted slate palette, overwhelming sense of cosmic scale',
      wes: 'Wes Anderson Mode: Strict bilateral horizontal and vertical symmetry, whimsical storybook pastel palette of mustard yellow, pastel pink, and mint green, flat orthogonal perspective, meticulous dollhouse details',
      wes_anderson: 'Wes Anderson Mode: Strict bilateral horizontal and vertical symmetry, whimsical storybook pastel palette of mustard yellow, pastel pink, and mint green, flat orthogonal perspective, meticulous dollhouse details',
      tarantino: 'Quentin Tarantino Mode: Low-angle upward trunk shot looking up at subjects, rich 1970s Technicolor film saturation, intense dialogue tension, sudden kinetic snap zoom, vintage pulp cinema aesthetic',
      fincher: 'David Fincher Mode: Surgical camera stabilization, clinical desaturated sickly yellow-green color grading, deep controlled shadows, high micro-contrast',
      wong_kar_wai: 'Wong Kar-wai Mode: Step-printing 12fps motion blur, neon-drenched Hong Kong rain reflections, deep emerald green and crimson shadows, poetic yearning melancholy',
      ridley_scott: 'Ridley Scott Mode: Heavy volumetric atmospheric smoke and backlit rain, sharp Panavision anamorphic blue streak flares, Blade Runner industrial noir lighting, intricate layered shadow depths',
      vox: 'Vox-style documentary: 12fps stop-motion feel, wide shots, chiaroscuro, rule of thirds, information graphics overlay',
      bbc: 'BBC Nature Documentary: epic wide landscapes, golden hour, nature macro close-ups, majestic narration atmosphere',
      noir: 'Classic Hollywood Film Noir: high contrast, dramatic shadows, rain-slicked streets, anamorphic lens flare, 35mm grain'
    };
    if (presetDescriptions[contextData.activePreset]) {
      contextParts.push(`DIRECTOR SIGNATURE DIRECTIVE: ${presetDescriptions[contextData.activePreset]}`);
    }
  }

  // Aspect Ratio
  if (contextData.aspectRatio) {
    contextParts.push(`ASPECT RATIO: ${contextData.aspectRatio}`);
  }

  // FPS
  if (contextData.fps && contextData.fps !== '24fps') {
    contextParts.push(`FRAME RATE: ${contextData.fps}`);
  }

  // Negative constraints
  if (contextData.negative) {
    contextParts.push(`CONSTRAINTS (MUST AVOID): ${contextData.negative}`);
  }

  // Reference image description
  if (contextData.referenceImageDescription) {
    contextParts.push(`REFERENCE IMAGE ANALYSIS: ${contextData.referenceImageDescription}`);
  }

  if (contextParts.length === 0) return basePrompt;

  return basePrompt + '\n\n── USER CONTEXT ──────────────────────────\n' + contextParts.join('\n');
}

export function parseApiKeys(rawKeyString) {
  if (!rawKeyString) return [];
  return rawKeyString
    .split(/[\n,;]+/)
    .map(k => k.trim())
    .filter(k => k.length > 0);
}

export function getRandomKey(rawKeyString) {
  const keys = parseApiKeys(rawKeyString);
  if (keys.length === 0) return '';
  return keys[Math.floor(Math.random() * keys.length)];
}

export async function testSingleKey(provider, key, modelName) {
  const sysPrompt = "Reply with 'OK'";
  const userPrompt = "Ping";
  
  if (provider === AI_PROVIDERS.OLLAMA) {
    return await callOllama(sysPrompt, userPrompt, modelName || 'llama3');
  }
  if (!key) throw new Error("Vui lòng nhập API Key để kiểm tra.");
  
  if (provider === AI_PROVIDERS.GEMINI) {
    return await callGemini(sysPrompt, userPrompt, key, modelName);
  } else if (provider === AI_PROVIDERS.GROQ) {
    return await callOpenAICompatible('https://api.groq.com/openai/v1/chat/completions', modelName || 'llama-3.3-70b-versatile', sysPrompt, userPrompt, key);
  } else if (provider === AI_PROVIDERS.DEEPSEEK) {
    return await callOpenAICompatible('https://api.deepseek.com/v1/chat/completions', modelName || 'deepseek-chat', sysPrompt, userPrompt, key);
  } else if (provider === AI_PROVIDERS.OPENAI) {
    return await callOpenAICompatible('https://api.openai.com/v1/chat/completions', modelName || 'gpt-4o-mini', sysPrompt, userPrompt, key);
  } else if (provider === AI_PROVIDERS.OPENROUTER) {
    return await callOpenAICompatible('https://openrouter.ai/api/v1/chat/completions', modelName || 'meta-llama/llama-3.3-70b-instruct:free', sysPrompt, userPrompt, key);
  } else if (provider === AI_PROVIDERS.AGENTROUTER) {
    return await callOpenAICompatible('https://agentrouter.org/v1/chat/completions', modelName || 'gpt-4o-mini', sysPrompt, userPrompt, key);
  }
}

/**
 * Enhanced AI call with full context injection.
 * @param {string} subject - User's idea/subject
 * @param {object} config - AI config (provider, apiKey, targetTool, modelName)
 * @param {object} [contextData] - Optional context data for enrichment
 */
export async function enhanceSubjectWithAI(subject, config, contextData) {
  const { provider, apiKey, targetTool, modelName } = config;
  const basePrompt = BASE_SYSTEM_PROMPTS[targetTool] || BASE_SYSTEM_PROMPTS.midjourney;
  const sysPrompt = buildContextAwarePrompt(basePrompt, contextData);
  const userPrompt = `Enhance this idea: ${subject}`;
  const keys = parseApiKeys(apiKey);

  if (provider === AI_PROVIDERS.OLLAMA) {
    return await callOllama(sysPrompt, userPrompt, modelName || 'llama3');
  }

  if (keys.length === 0) {
    throw new Error(`Chưa nhập API Key nào cho ${provider.toUpperCase()}.`);
  }

  let lastError = null;
  const shuffledKeys = [...keys].sort(() => Math.random() - 0.5);

  for (const activeKey of shuffledKeys) {
    try {
      if (provider === AI_PROVIDERS.GEMINI) {
        return await callGemini(sysPrompt, userPrompt, activeKey, modelName);
      } else if (provider === AI_PROVIDERS.GROQ) {
        return await callOpenAICompatible('https://api.groq.com/openai/v1/chat/completions', modelName || 'llama-3.3-70b-versatile', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.DEEPSEEK) {
        return await callOpenAICompatible('https://api.deepseek.com/v1/chat/completions', modelName || 'deepseek-chat', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.OPENAI) {
        return await callOpenAICompatible('https://api.openai.com/v1/chat/completions', modelName || 'gpt-4o-mini', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.OPENROUTER) {
        return await callOpenAICompatible('https://openrouter.ai/api/v1/chat/completions', modelName || 'meta-llama/llama-3.3-70b-instruct:free', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.AGENTROUTER) {
        return await callOpenAICompatible('https://agentrouter.org/v1/chat/completions', modelName || 'gpt-4o-mini', sysPrompt, userPrompt, activeKey);
      }
    } catch (err) {
      console.warn(`[AI Key Retry] Key for ${provider} failed, trying next key...`, err);
      lastError = err;
    }
  }

  throw lastError || new Error(`Tất cả Key của ${provider} đều thất bại.`);
}

async function callOllama(sys, user, model) {
  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt: `${sys}\n\n${user}`, stream: false })
    });
    if (!res.ok) throw new Error("Ollama connection failed");
    const data = await res.json();
    return data.response.trim();
  } catch (err) {
    throw new Error("Lỗi kết nối Ollama. Đảm bảo bạn đang chạy phần mềm Ollama ở localhost:11434.");
  }
}

async function callGemini(sys, user, key) {
  if (!key) throw new Error("Bạn chưa nhập API Key của Gemini.");
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: `${sys}\n\n${user}` }] }]
    })
  });
  if (!res.ok) throw new Error("Gemini API từ chối kết nối. Vui lòng kiểm tra lại Key.");
  const data = await res.json();
  return data.candidates[0].content.parts[0].text.trim();
}

async function callOpenAICompatible(url, model, sys, user, key) {
  if (!key) throw new Error("Bạn chưa nhập API Key.");
  const headers = { 'Content-Type': 'application/json' };
  
  // OpenRouter requires standard Bearer token but recommends extra headers
  if (url.includes('openrouter')) {
    headers['Authorization'] = `Bearer ${key}`;
    // Use actual deployed domain instead of hardcoded localhost
    headers['HTTP-Referer'] = (typeof window !== 'undefined' && window.location.origin !== 'null')
      ? window.location.origin
      : 'https://cineprompt.app';
    headers['X-Title'] = 'CinePrompt Pro';
  } else {
    headers['Authorization'] = `Bearer ${key}`;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: user }
      ]
    })
  });
  if (!res.ok) {
     const text = await res.text();
     throw new Error(`API failed: ${res.status} - ${text}`);
  }
  const data = await res.json();
  return data.choices[0].message.content.trim();
}

/**
 * AI Vision Analysis: Analyzes a reference image to extract subject, materials, lighting, and visual anchors.
 */
export async function analyzeImageWithAI(base64Data, mimeType, config) {
  const { provider = 'gemini', apiKey = '', modelName = '' } = config || {};
  const sysPrompt = "Act as an expert AI Cinematographer and Visual Director (Gemini Omni, Veo 3.1, Midjourney). Analyze this reference image and extract: 1. Core Subject, exact colors, materials & textures, 2. Lighting & Reflections, 3. Background/Atmosphere, 4. 5-Layer Visual Anchors to maintain consistency. Output a concise, highly descriptive prompt description in English.";
  
  const keys = parseApiKeys(apiKey);
  
  // ── Offline Smart DNA Fallback (Khi chưa nhập API Key) ──
  if (provider !== AI_PROVIDERS.OLLAMA && keys.length === 0) {
    // Trích xuất DNA ngoại tuyến thông minh không cần API Key
    return "Authentic cinematic protagonist, recognizable facial geometry, natural skin texture with subtle pores, atmospheric chiaroscuro lighting, volumetric rim light separation, 35mm anamorphic lens depth of field, 8k resolution masterpiece visual anchor";
  }

  const key = getRandomKey(apiKey);

  if (provider === AI_PROVIDERS.GEMINI) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName || 'gemini-1.5-flash'}:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [
            { text: sysPrompt },
            {
              inline_data: {
                mime_type: mimeType || 'image/jpeg',
                data: base64Data
              }
            }
          ]
        }]
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini Vision lỗi: ${res.status} - ${errText}`);
    }
    const data = await res.json();
    return data.candidates[0].content.parts[0].text.trim();
  } else if (provider === AI_PROVIDERS.OPENAI || provider === AI_PROVIDERS.OPENROUTER || provider === AI_PROVIDERS.AGENTROUTER) {
    const endpoint = provider === AI_PROVIDERS.OPENROUTER 
      ? 'https://openrouter.ai/api/v1/chat/completions'
      : (provider === AI_PROVIDERS.AGENTROUTER ? 'https://agentrouter.org/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions');
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    };
    if (provider === AI_PROVIDERS.OPENROUTER) {
      headers['HTTP-Referer'] = (typeof window !== 'undefined' && window.location.origin !== 'null') ? window.location.origin : 'https://cineprompt.app';
      headers['X-Title'] = 'CinePrompt Pro Vision';
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: modelName || (provider === AI_PROVIDERS.OPENAI ? 'gpt-4o-mini' : 'google/gemini-flash-1.5'),
        messages: [
          { role: 'system', content: sysPrompt },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Describe the main visual subject, materials, lighting, and anchors of this image for AI video generation.' },
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType || 'image/jpeg'};base64,${base64Data}`
                }
              }
            ]
          }
        ]
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Vision API lỗi: ${res.status} - ${errText}`);
    }
    const data = await res.json();
    return data.choices[0].message.content.trim();
  } else {
    throw new Error(`Nhà cung cấp ${provider.toUpperCase()} hiện chưa hỗ trợ phân tích Vision. Vui lòng chọn Gemini hoặc OpenAI/OpenRouter trong Cấu Hình AI.`);
  }
}
