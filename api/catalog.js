/**
 * GET /api/catalog — Returns prompt catalog (SAFE metadata only)
 * ──────────────────────────────────────────────────────────────
 * Returns: id, name, definition, category, difficulty, mood, image, whenToUse
 * Does NOT return: promptTemplate, videoPrompt, bestPractices, commonMistakes
 *
 * This is the ONLY way the client can see what prompts are available.
 * The actual prompt content is NEVER sent until generate-prompt is called.
 */

import { getPromptCatalog, getCategories } from './_brain/prompts.js';

export default function handler(req, res) {
  // Security headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const catalog = getPromptCatalog();
    const categories = getCategories();

    return res.status(200).json({
      success: true,
      total: catalog.length,
      categories,
      prompts: catalog,
    });
  } catch (err) {
    console.error('[API /catalog] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
