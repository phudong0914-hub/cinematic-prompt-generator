import { applyRoughCutRules } from '../js/roughCutEngine.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { segments = [], options = {} } = req.body || {};
    if (!Array.isArray(segments) || segments.length === 0) {
      return res.status(400).json({ error: 'segments must be a non-empty array' });
    }

    try {
      const result = applyRoughCutRules(segments, options);
      return res.status(200).json({
        success: true,
        ...result
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
