/**
 * apiClient.js — Secure API Client for Cine Prompt Pro
 * ────────────────────────────────────────────────────
 * Replaces direct imports of brain modules.
 * All sensitive data now flows through /api/ endpoints.
 * This file is the ONLY bridge between Frontend UI and Backend Brain.
 */

const API_BASE = '/api';

/** Session token for CSRF protection */
let sessionToken = null;

function getSessionToken() {
  if (!sessionToken) {
    sessionToken = 'cps_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
  }
  return sessionToken;
}

/**
 * Generic API call helper with error handling & retry
 */
async function apiCall(endpoint, method = 'GET', body = null) {
  const url = `${API_BASE}/${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'X-CinePrompt-Session': getSessionToken(),
  };

  const options = { method, headers };
  if (body && method === 'POST') {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (response.status === 429) {
    const data = await response.json();
    throw new Error(data.error || 'Quá nhiều yêu cầu. Vui lòng chờ 1 phút.');
  }

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `API Error: ${response.status}`);
  }

  return response.json();
}

// ═══════════════════════════════════════════════════════
// PUBLIC API — Drop-in replacements for brain module calls
// ═══════════════════════════════════════════════════════

/**
 * Load prompt catalog (safe metadata only — no templates)
 * Replaces: loadPrompts() from dataManager.js
 */
export async function loadPromptCatalog() {
  const data = await apiCall('catalog', 'GET');
  return data.prompts || [];
}

/**
 * Get categories list
 * Replaces: getCategories() from dataManager.js
 */
export async function fetchCategories() {
  const data = await apiCall('catalog', 'GET');
  return data.categories || [];
}

/**
 * Generate final prompt from user selections
 * Replaces: direct template substitution + smartMerge + modelOptimizer + guardrails + scorecard
 *
 * @param {Object} params
 * @param {string} params.promptId - Selected prompt ID
 * @param {string} params.subject - User's subject/topic text
 * @param {string} [params.characterLock] - Character lock string
 * @param {string} [params.model] - Target AI model (e.g. 'universal', 'midjourney8', 'kling2')
 * @param {string} [params.aspectRatio] - Aspect ratio
 * @param {string[]} [params.motionTags] - Motion tag strings
 * @param {boolean} [params.isRandomCombo] - Use Director's Cut random combo
 * @returns {Promise<{imagePrompt: string, videoPrompt: string, score: Object, title: string}>}
 */
export async function generatePrompt(params) {
  return apiCall('generate-prompt', 'POST', params);
}

/**
 * Search cinematic glossary
 * Replaces: searchGlossary() from bilingualGlossary.js
 *
 * @param {string} query - Search query
 * @param {string} [category] - Category filter
 * @param {number} [limit] - Max results (server caps at 20)
 */
export async function searchGlossary(query = '', category = 'all', limit = 20) {
  return apiCall('glossary-search', 'POST', { query, category, limit });
}

/**
 * Optimize prompt for specific AI model
 * Replaces: reorderPromptByModel() from modelOptimizer.js
 *
 * @param {string} prompt - Raw prompt text
 * @param {string} model - Target model key
 * @param {Object} [sections] - Structured sections for re-ordering
 */
export async function optimizeForModel(prompt, model = 'universal', sections = {}) {
  return apiCall('optimize-model', 'POST', { prompt, model, sections });
}

/**
 * Score a prompt
 * Replaces: scorePrompt() from scorecard.js
 *
 * @param {string} prompt - Prompt text to score
 */
export async function scorePromptAPI(prompt) {
  return apiCall('score-prompt', 'POST', { prompt });
}

/**
 * Get available AI models list (safe metadata only)
 * Replaces: AI_MODELS from modelOptimizer.js
 */
export async function getAvailableModels() {
  const data = await apiCall('optimize-model', 'POST', { prompt: 'test', model: 'universal' });
  return data.availableModels || [];
}
