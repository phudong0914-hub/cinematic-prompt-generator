/**
 * POST /api/glossary-search — Search cinematic glossary (server-side)
 * ──────────────────────────────────────────────────────────────────
 * INPUT:  { query, category, limit }
 * OUTPUT: { results: [{ en, vi, category, subCategory }] }
 *
 * Returns matching glossary entries but NEVER the full database.
 * Max 20 results per request to prevent data scraping.
 */

import { CINEMATIC_GLOSSARY, GLOSSARY_CATEGORIES, searchGlossary, getTermsByCategory } from './_brain/bilingualGlossary.js';

const MAX_RESULTS = 20;

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { query = '', category = 'all', limit = MAX_RESULTS } = req.body || {};

    // Enforce maximum result count (anti-scraping)
    const safeLimit = Math.min(Math.max(1, parseInt(limit) || MAX_RESULTS), MAX_RESULTS);

    let results;

    if (query && query.trim().length > 0) {
      // Search mode: use keyword search
      results = searchGlossary(query.trim());
    } else if (category && category !== 'all') {
      // Browse mode: filter by category
      results = getTermsByCategory(category);
    } else {
      // Default: return first N entries (not the full database!)
      results = CINEMATIC_GLOSSARY.slice(0, safeLimit);
    }

    // Always cap results
    results = (results || []).slice(0, safeLimit);

    // Strip any internal fields before sending
    const safeResults = results.map(item => ({
      en: item.en,
      vi: item.vi,
      category: item.category,
      subCategory: item.subCategory,
      usage: item.usage || '',
    }));

    return res.status(200).json({
      success: true,
      total: safeResults.length,
      totalAvailable: CINEMATIC_GLOSSARY.length,
      categories: GLOSSARY_CATEGORIES,
      results: safeResults,
    });

  } catch (err) {
    console.error('[API /glossary-search] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
