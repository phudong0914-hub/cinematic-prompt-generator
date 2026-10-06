import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import API handlers
import catalogHandler from './api/catalog.js';
import generatePromptHandler from './api/generate-prompt.js';
import glossarySearchHandler from './api/glossary-search.js';
import optimizeModelHandler from './api/optimize-model.js';
import scorePromptHandler from './api/score-prompt.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.srt': 'text/plain; charset=utf-8',
};

function createMockRes(res) {
  return {
    setHeader: (k, v) => res.setHeader(k, v),
    status: (code) => {
      res.statusCode = code;
      return {
        json: (data) => {
          if (!res.getHeader('Content-Type')) {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
          }
          res.end(JSON.stringify(data));
        },
        send: (body) => res.end(body),
        end: () => res.end()
      };
    }
  };
}

const server = http.createServer(async (req, res) => {
  // CORS & Security headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CinePrompt-Session');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // ── 1. API ROUTING ──
  if (pathname.startsWith('/api/')) {
    // Parse JSON body for POST requests
    let body = {};
    if (req.method === 'POST') {
      try {
        const buffers = [];
        for await (const chunk of req) {
          buffers.push(chunk);
        }
        const rawBody = Buffer.concat(buffers).toString();
        if (rawBody) {
          body = JSON.parse(rawBody);
        }
      } catch (err) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
        return;
      }
    }
    req.body = body;
    req.query = Object.fromEntries(url.searchParams);

    const mockRes = createMockRes(res);

    try {
      if (pathname === '/api/catalog') {
        return catalogHandler(req, mockRes);
      }
      if (pathname === '/api/generate-prompt') {
        return generatePromptHandler(req, mockRes);
      }
      if (pathname === '/api/glossary-search') {
        return glossarySearchHandler(req, mockRes);
      }
      if (pathname === '/api/optimize-model') {
        return optimizeModelHandler(req, mockRes);
      }
      if (pathname === '/api/score-prompt') {
        return scorePromptHandler(req, mockRes);
      }

      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: `API endpoint ${pathname} not found` }));
      return;
    } catch (err) {
      console.error('API Error:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal Server Error', detail: err.message }));
      return;
    }
  }

  // ── 2. STATIC FILE ROUTING ──
  let filePath = pathname === '/' ? '/index.html' : pathname;
  let targetPath = path.join(__dirname, decodeURIComponent(filePath));

  // Fallback for /favicon.ico -> favicon.svg
  if (pathname === '/favicon.ico') {
    targetPath = path.join(__dirname, 'favicon.svg');
  }

  fs.stat(targetPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'no-cache');

    const stream = fs.createReadStream(targetPath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Cine Prompt Pro Server running at http://localhost:${PORT}`);
});
