/**
 * POST /api/optimize-model — Re-order prompt for specific AI model
 * ────────────────────────────────────────────────────────────────
 * INPUT:  { prompt, model }
 * OUTPUT: { optimized, modelName, modelInfo }
 */

import { AI_MODELS, reorderPromptByModel, compileProsePrompt } from './_brain/modelOptimizer.js';
import { enforceTokenLimit } from './_brain/guardrails.js';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { prompt = '', model = 'universal', sections = {} } = req.body || {};

    if (!prompt && Object.keys(sections).length === 0) {
      return res.status(400).json({ error: 'Missing prompt or sections' });
    }

    const modelInfo = AI_MODELS[model] || AI_MODELS.universal;

    // Re-order sections by model attention priority
    let optimized;
    if (Object.keys(sections).length > 0) {
      const ordered = reorderPromptByModel(sections, model);
      optimized = compileProsePrompt(ordered) || prompt;
    } else {
      optimized = prompt;
    }

    // Enforce token limit for this model
    const tokenResult = enforceTokenLimit(optimized, model);
    optimized = tokenResult?.text || optimized;

    // Return model names list (safe — no algorithms, just labels)
    const availableModels = Object.entries(AI_MODELS).map(([key, m]) => ({
      id: m.id,
      name: m.name,
      badge: m.badge,
      provider: m.provider,
      type: m.type,
      description: m.description,
    }));

    return res.status(200).json({
      success: true,
      optimized,
      modelName: modelInfo.name,
      modelBadge: modelInfo.badge,
      modelType: modelInfo.type,
      availableModels,
    });

  } catch (err) {
    console.error('[API /optimize-model] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
