/**
 * POST /api/score-prompt — Score a cinematic prompt
 * ─────────────────────────────────────────────────
 * INPUT:  { prompt }
 * OUTPUT: { score: { total, breakdown } }
 */

import { scorePrompt } from './_brain/scorecard.js';
import { sanitizePrompt, countTokens } from './_brain/guardrails.js';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { prompt = '' } = req.body || {};

    if (!prompt || prompt.trim().length < 5) {
      return res.status(400).json({ error: 'Prompt too short (min 5 characters)' });
    }

    // Sanitize first
    const sanitized = sanitizePrompt(prompt);

    // Score
    const score = scorePrompt(sanitized.cleaned || prompt);

    // Token count
    const tokens = countTokens(prompt);

    return res.status(200).json({
      success: true,
      score: score || { total: 0 },
      tokenCount: tokens,
      sanitization: {
        hadIssues: sanitized.issues?.length > 0,
        issueCount: sanitized.issues?.length || 0,
        cleaned: sanitized.cleaned || prompt,
      },
    });

  } catch (err) {
    console.error('[API /score-prompt] Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
