/**
 * POST /api/power-words — Search and browse power words and hook formulas
 * ────────────────────────────────────────────────────────────────────────
 * INPUT:  { query, category, limit, generateHook: { topic, style } }
 * OUTPUT: { results, categories, stats, generatedHook }
 */

import {
  POWER_WORDS_DATABASE,
  POWER_WORD_CATEGORIES,
  POWER_WORDS_STATS,
  getPowerWordsByCategory,
  searchPowerWords,
  generateVideoHook
} from './_brain/powerWords.js';

const MAX_RESULTS = 30;

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET or POST.' });
  }

  try {
    const params = req.method === 'POST' ? (req.body || {}) : (req.query || {});
    const { query = '', category = 'all', limit = MAX_RESULTS, hookOptions } = params;

    const safeLimit = Math.min(Math.max(1, parseInt(limit) || MAX_RESULTS), 100);

    let results = [];
    if (query && query.trim().length > 0) {
      results = searchPowerWords(query.trim());
    } else if (category && category !== 'all') {
      results = getPowerWordsByCategory(category);
    } else {
      results = POWER_WORDS_DATABASE;
    }

    results = (results || []).slice(0, safeLimit);

    let generatedHook = null;
    if (hookOptions && hookOptions.topic) {
      generatedHook = generateVideoHook(hookOptions);
    }

    return res.status(200).json({
      success: true,
      total: results.length,
      totalAvailable: POWER_WORDS_DATABASE.length,
      stats: POWER_WORDS_STATS,
      categories: POWER_WORD_CATEGORIES,
      results,
      generatedHook
    });
  } catch (err) {
    console.error('[API /power-words] Error:', err);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}
