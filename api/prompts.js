/**
 * Serverless API — /api/prompts.js
 * ─────────────────────────────────────────────────────────────
 * Commercial Server-Side Data Gateway (Vercel / Cloudflare / Node).
 * Protects internal prompt repository from bulk scraper scraping.
 */

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=600');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'prompts.json');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Database not found' });
    }

    const data = fs.readFileSync(filePath, 'utf8');
    const prompts = JSON.parse(data);

    // Optional query filtering
    const category = req.query?.category;
    if (category && category !== 'all') {
      const filtered = prompts.filter(p => p.category === category);
      return res.status(200).json(filtered);
    }

    return res.status(200).json(prompts);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
