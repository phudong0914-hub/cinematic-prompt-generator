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
 * Base system prompts — enriched with cinematic knowledge context.
 * The buildContextAwarePrompt() function injects user-specific context on top.
 */
const BASE_SYSTEM_PROMPTS = {
  midjourney: `Act as an award-winning Hollywood cinematographer and master prompt engineer for Midjourney V8 / V7 (2026 Edition).

CINEMATIC KNOWLEDGE BASE (use these terms precisely):
• Lenses: 24mm (epic wide), 35mm (narrative), 50mm (natural), 85mm (portrait bokeh), 135mm (compressed), Anamorphic 2x (cinematic flare)
• Lighting: Chiaroscuro, Rembrandt, Butterfly, Split, Rim light, Volumetric rays, God rays, Practical lights, Three-point
• Composition: Rule of Thirds, Golden Spiral, Leading Lines, Frame-in-Frame, Negative Space, Symmetry, Dutch Angle
• Film Stocks: Kodak Portra 400/800, Kodak Ektar 100, Cinestill 800T, Fuji Velvia, ARRI LogC, RED IPP2
• Color Science: Teal-orange, Cross-process, Bleach bypass, Desaturated, Technicolor, ACES

Take the user's idea and expand it into a detailed cinematic prompt in English with:
1. Subject & Action, 2. Environment & Framing, 3. Lighting & Volumetric Effects, 4. Camera Lens & Aperture, 5. Film Stock & Color Science.
Use comma-separated phrases. Append --v 8 --style raw at the end.`,

  dalle: `Act as an expert visual director for ChatGPT & DALL-E 3.

CINEMATIC KNOWLEDGE: Apply professional film terminology — specific lens focal lengths, named lighting setups (Rembrandt, Chiaroscuro), composition rules (Golden Ratio, Leading Lines), and real film stock emulation (Kodak Portra, Cinestill 800T).

Generate a rich, highly descriptive narrative paragraph in English. Focus on realistic lighting, atmosphere, emotional resonance, and precise composition like an award-winning film screenshot.`,

  video: `Act as an elite AI Video Director & Master Prompt Engineer (Gemini Omni Flash, Veo 3.1, Google Flow, Sora, Runway Gen-3).

CINEMATIC KNOWLEDGE BASE:
• Camera Motion: Dolly zoom (Vertigo effect), Orbit 360°, Crane shot, Steadicam, FPV drone, Whip pan, Rack focus
• Lenses: 35mm f/1.8 (cinematic standard), 85mm f/1.4 (portrait), Anamorphic 2x (widescreen flare), Macro (product detail)
• Lighting: Three-point, Chiaroscuro, Neon glow, Volumetric fog, God rays, Practical lights, Rim light separation
• Film Look: Kodak Vision3 500T, ARRI Alexa 65, RED Monstro, Cinestill 800T tungsten

Transform the user's idea into a 10-Component Video Production Script:
1. GOAL & FORMAT: Duration, Aspect Ratio, Platform objective.
2. REFERENCE INPUTS: Visual/audio anchors for consistency.
3. SUBJECT & DETAILS: Core subject, materials, textures.
4. SETTING & ATMOSPHERE: Location, time, weather, depth layers.
5. TIMELINE ACTION BEATS with timestamps (0.0-2.0s / 2.0-6.0s / 6.0-10.0s).
6. CAMERA LANGUAGE: Motion, framing, lens.
7. VISUAL STYLE: Specific aesthetic.
8. LIGHTING & COLOR PALETTE.
9. AUDIO & ON-SCREEN TEXT.
10. CONSTRAINTS & AVOID LIST.

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

  // Active Style Preset
  if (contextData.activePreset) {
    const presetDescriptions = {
      vox: 'Vox-style documentary: 12fps stop-motion feel, wide shots, chiaroscuro, rule of thirds, information graphics overlay',
      bbc: 'BBC Documentary: epic wide landscapes, golden hour, nature close-ups, David Attenborough narration energy',
      iman: 'Iman Gadzhi entrepreneurship vlog: talking head, urban minimal, handheld energy, sharp focus, clean backdrop',
      noir: 'Classic Hollywood Film Noir: high contrast, dramatic shadows, rain-slicked streets, anamorphic lens flare, 35mm grain',
      wes: 'Wes Anderson aesthetic: perfect bilateral symmetry, pastel color palette, whimsical storybook, flat perspective'
    };
    if (presetDescriptions[contextData.activePreset]) {
      contextParts.push(`STYLE DIRECTIVE: ${presetDescriptions[contextData.activePreset]}`);
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
  const { provider, apiKey, modelName } = config;
  const sysPrompt = "Act as an expert AI Cinematographer and Visual Director (Gemini Omni, Veo 3.1, Midjourney). Analyze this reference image and extract: 1. Core Subject, exact colors, materials & textures, 2. Lighting & Reflections, 3. Background/Atmosphere, 4. 5-Layer Visual Anchors to maintain consistency. Output a concise, highly descriptive prompt description in English.";
  
  const keys = parseApiKeys(apiKey);
  if (provider !== AI_PROVIDERS.OLLAMA && keys.length === 0) {
    throw new Error(`Chưa nhập API Key cho ${provider.toUpperCase()} để phân tích ảnh.`);
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
