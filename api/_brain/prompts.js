/**
 * _brain/prompts.js — Protected Prompts Database Loader
 * ─────────────────────────────────────────────────────
 * SERVER-SIDE ONLY. This file is NEVER sent to the browser.
 * Loads and indexes the 415 cinematic prompt templates.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let _allPrompts = null;
let _indexById = null;
let _indexByCategory = null;

function ensureLoaded() {
  if (_allPrompts) return;
  const raw = fs.readFileSync(path.join(__dirname, 'data', 'prompts.json'), 'utf-8');
  _allPrompts = JSON.parse(raw);
  _indexById = new Map(_allPrompts.map(p => [p.id, p]));
  _indexByCategory = {};
  for (const p of _allPrompts) {
    if (!_indexByCategory[p.category]) _indexByCategory[p.category] = [];
    _indexByCategory[p.category].push(p);
  }
}

/** Returns SAFE metadata only (no promptTemplate, no videoPrompt) */
export function getPromptCatalog() {
  ensureLoaded();
  return _allPrompts.map(p => ({
    id: p.id,
    name: p.name,
    definition: p.definition,
    category: p.category,
    difficulty: p.difficulty,
    mood: p.mood,
    image: p.image,
    whenToUse: p.whenToUse,
  }));
}

/** Returns categories list */
export function getCategories() {
  ensureLoaded();
  return [...new Set(_allPrompts.map(p => p.category))].sort();
}

/** Returns a FULL prompt by ID (only called server-side during generation) */
export function getPromptById(id) {
  ensureLoaded();
  return _indexById.get(id) || null;
}

/** Returns full prompts filtered by category */
export function getPromptsByCategory(cat) {
  ensureLoaded();
  if (!cat || cat === 'all') return _allPrompts;
  return _indexByCategory[cat] || [];
}

/** Director's Cut: random combo (server-side only) */
export function getRandomCombo() {
  ensureLoaded();
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const camera = pick(_indexByCategory['camera'] || []);
  const lighting = pick(_indexByCategory['lighting'] || []);
  const composition = pick(_indexByCategory['composition'] || []);
  let vfx = pick(_indexByCategory['vfx'] || []) || pick(_indexByCategory['videostyles'] || []);

  if (!camera || !lighting || !composition) return null;

  const vfxTemplate = vfx ? `. ${vfx.promptTemplate}` : '';
  const vfxName = vfx ? ` + ${vfx.name}` : '';

  const combined = {
    id: `combo-${camera.id}--${lighting.id}--${composition.id}${vfx ? '--' + vfx.id : ''}`,
    name: `${camera.name} + ${lighting.name} + ${composition.name}${vfxName}`,
    category: 'combo',
    difficulty: camera.difficulty,
    mood: camera.mood,
    promptTemplate: `${camera.promptTemplate}. ${lighting.promptTemplate}. ${composition.promptTemplate}${vfxTemplate}`,
  };

  return { camera, lighting, composition, vfx, combined };
}
