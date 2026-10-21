import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const COLOR_VAULT = path.join(__dirname, '..', 'data', 'director_color_vault.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(COLOR_VAULT)) {
        const data = JSON.parse(fs.readFileSync(COLOR_VAULT, 'utf-8'));
        return res.status(200).json({
          success: true,
          ...data
        });
      }
    } catch (e) {
      return res.status(500).json({ error: 'Failed to read director color vault' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
