export const AI_PROVIDERS = {
  OLLAMA: 'ollama',
  GEMINI: 'gemini',
  DEEPSEEK: 'deepseek',
  OPENAI: 'openai',
  OPENROUTER: 'openrouter',
  AGENTROUTER: 'agentrouter'
};

const SYSTEM_PROMPTS = {
  midjourney: "You are an expert Midjourney prompt engineer. Take the user's short idea (which may be in Vietnamese) and expand it into a highly detailed, cinematic prompt in English. Use a comma-separated list of keywords. Focus on subject, action, lighting, camera angle, and atmosphere. Do not write full sentences. Append --ar 16:9 at the end.",
  dalle: "You are an expert prompt engineer for ChatGPT/DALL-E 3. Take the user's short idea (which may be in Vietnamese) and expand it into a highly detailed, descriptive paragraph in English. Focus on the subject, setting, lighting, and mood. Ensure it reads like a rich, continuous story.",
  video: "You are an expert prompt engineer for AI video generators like Sora, Runway, or Kling. Take the user's short idea (which may be in Vietnamese) and expand it into a detailed cinematic prompt in English. Focus heavily on camera movement (pan, tilt, tracking), physics, motion, and lighting changes over time. Use comma-separated phrases."
};

export async function enhanceSubjectWithAI(subject, config) {
  const { provider, apiKey, targetTool, modelName } = config;
  const sysPrompt = SYSTEM_PROMPTS[targetTool] || SYSTEM_PROMPTS.midjourney;
  const userPrompt = `Enhance this idea: ${subject}`;

  if (provider === AI_PROVIDERS.OLLAMA) {
    return await callOllama(sysPrompt, userPrompt, modelName || 'llama3');
  } else if (provider === AI_PROVIDERS.GEMINI) {
    return await callGemini(sysPrompt, userPrompt, apiKey);
  } else if (provider === AI_PROVIDERS.DEEPSEEK) {
    return await callOpenAICompatible('https://api.deepseek.com/v1/chat/completions', 'deepseek-chat', sysPrompt, userPrompt, apiKey);
  } else if (provider === AI_PROVIDERS.OPENAI) {
    return await callOpenAICompatible('https://api.openai.com/v1/chat/completions', 'gpt-4o-mini', sysPrompt, userPrompt, apiKey);
  } else if (provider === AI_PROVIDERS.OPENROUTER) {
    return await callOpenAICompatible('https://openrouter.ai/api/v1/chat/completions', modelName || 'meta-llama/llama-3-8b-instruct:free', sysPrompt, userPrompt, apiKey);
  } else if (provider === AI_PROVIDERS.AGENTROUTER) {
    return await callOpenAICompatible('https://agentrouter.org/v1/chat/completions', modelName || 'gpt-4o-mini', sysPrompt, userPrompt, apiKey);
  }
  throw new Error("Unknown AI Provider");
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
