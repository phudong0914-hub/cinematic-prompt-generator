export const AI_PROVIDERS = {
  OLLAMA: 'ollama',
  GEMINI: 'gemini',
  DEEPSEEK: 'deepseek',
  OPENAI: 'openai',
  OPENROUTER: 'openrouter',
  AGENTROUTER: 'agentrouter'
};

const SYSTEM_PROMPTS = {
  midjourney: "Act as an award-winning Hollywood cinematographer and master prompt engineer for Midjourney v6/v8. Take the user's short idea (which may be in Vietnamese or English) and expand it into an extremely high-end, detailed cinematic prompt in English. Structure the prompt into: 1. Subject & Action, 2. Environment & Framing, 3. Lighting & Volumetric Rays, 4. Camera Lens (e.g., 35mm, ARRI Alexa 65, anamorphic bokeh), 5. Film Stock & Color Science. Use clear comma-separated phrases. Append --ar 16:9 --style raw at the end.",
  
  dalle: "Act as an expert visual director for ChatGPT & DALL-E 3. Take the user's short idea and generate a rich, highly descriptive narrative paragraph in English. Focus on realistic lighting, atmosphere, deep emotional resonance, and precise composition like an award-winning film screenshot.",
  
  video: `Act as an award-winning AI Video Director (NotebookLM, Sora, Veo 3, Runway Gen-3, Kling). Transform the user's idea into a 4-Layer Master Video Script & Prompt:

[SYSTEM & QUALITY]: 4K Ultra HD, HDR10, cinematic 16:9 ratio, 24fps, photorealistic consistency.
[SCENE 1 - HOOK]: Dynamic establishing shot, sweeping lens motion, rich volumetric lighting.
[SCENE 2 - MEDIUM]: Fluid camera movement (pan/dolly/tracking), natural depth of field, detailed subject interaction.
[SCENE 3 - CLOSE-UP]: Intimate detail shot, subtle facial micro-expressions, anamorphic bokeh, film grain.
[AUDIO & NARRATION]: Native natural Vietnamese voiceover, subtle atmospheric ambient sound design, epic orchestral background music with audio ducking.

Provide a comprehensive, continuous cinematic video prompt in English with explicit camera direction.`
};

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

export async function enhanceSubjectWithAI(subject, config) {
  const { provider, apiKey, targetTool, modelName } = config;
  const sysPrompt = SYSTEM_PROMPTS[targetTool] || SYSTEM_PROMPTS.midjourney;
  const userPrompt = `Enhance this idea: ${subject}`;
  const keys = parseApiKeys(apiKey);

  if (provider === AI_PROVIDERS.OLLAMA) {
    return await callOllama(sysPrompt, userPrompt, modelName || 'llama3');
  }

  if (keys.length === 0) {
    throw new Error(`Chưa nhập API Key nào cho ${provider.toUpperCase()}.`);
  }

  // Multi-key retry loop for the same provider
  let lastError = null;
  const shuffledKeys = [...keys].sort(() => Math.random() - 0.5);

  for (const activeKey of shuffledKeys) {
    try {
      if (provider === AI_PROVIDERS.GEMINI) {
        return await callGemini(sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.DEEPSEEK) {
        return await callOpenAICompatible('https://api.deepseek.com/v1/chat/completions', 'deepseek-chat', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.OPENAI) {
        return await callOpenAICompatible('https://api.openai.com/v1/chat/completions', 'gpt-4o-mini', sysPrompt, userPrompt, activeKey);
      } else if (provider === AI_PROVIDERS.OPENROUTER) {
        return await callOpenAICompatible('https://openrouter.ai/api/v1/chat/completions', modelName || 'meta-llama/llama-3-8b-instruct:free', sysPrompt, userPrompt, activeKey);
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
    headers['HTTP-Referer'] = 'http://localhost:5173/';
    headers['X-Title'] = 'Cinematique';
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
