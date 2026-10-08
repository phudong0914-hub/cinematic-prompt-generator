/**
 * POST /api/cinema-studio — Full Cinema Automation Production API
 * ─────────────────────────────────────────────────────────────────────────────
 * INPUT:  { targetAudience, topic, videoDuration, srtOrScript, moodKey }
 * OUTPUT: { success, package: { timeline, subtitles, titles, ducking, capcut, xml, qc } }
 */

import { executeFullCinemaProduction, formatMasterProductionMarkdown } from '../js/cinemaStudioOrchestrator.js';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const params = req.method === 'POST' ? (req.body || {}) : (req.query || {});
    const result = executeFullCinemaProduction(params);
    const markdownReport = formatMasterProductionMarkdown(result);

    return res.status(200).json({
      success: true,
      director: result.director,
      contact: result.contact,
      productionPackage: result,
      markdownReport
    });
  } catch (err) {
    console.error('[API /cinema-studio] Error:', err);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}
