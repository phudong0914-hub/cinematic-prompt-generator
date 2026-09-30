/**
 * POST /api/generate-prompt — Generate final prompt from user input
 * ─────────────────────────────────────────────────────────────────
 * INPUT:  { promptId, subject, characterLock, model, aspectRatio, motionTags }
 * OUTPUT: { imagePrompt, videoPrompt, score, title }
 *
 * The client NEVER sees the raw template — only the final composed result.
 * All brain logic (merge, optimize, sanitize, score) runs server-side.
 */

import { getPromptById, getRandomCombo } from './_brain/prompts.js';
import { sanitizeCinematicPrompt } from './_brain/directorKnowledgeEngine.js';
import { reorderPromptByModel, compileProsePrompt } from './_brain/modelOptimizer.js';
import { sanitizePrompt, enforceTokenLimit } from './_brain/guardrails.js';
import { scorePrompt } from './_brain/scorecard.js';
import { applySmartMerge } from './_brain/smartMergeEngine.js';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const {
      promptId,
      subject = '',
      characterLock = '',
      model = 'universal',
      aspectRatio = '16:9',
      motionTags = [],
      isRandomCombo = false,
    } = req.body || {};

    // ── 1. Get prompt template (server-side only) ──
    let promptData;
    if (isRandomCombo) {
      const combo = getRandomCombo();
      if (!combo) {
        return res.status(404).json({ error: 'Could not generate random combo' });
      }
      promptData = combo.combined;
    } else {
      if (!promptId) {
        return res.status(400).json({ error: 'Missing promptId' });
      }
      promptData = getPromptById(promptId);
      if (!promptData) {
        return res.status(404).json({ error: 'Prompt not found' });
      }
    }

    // ── 2. Compose image prompt ──
    let imagePrompt = promptData.promptTemplate || '';

    // Inject subject
    if (subject) {
      imagePrompt = `${subject}, ${imagePrompt}`;
    }

    // Inject character lock
    if (characterLock) {
      imagePrompt = `${imagePrompt}, ${characterLock}`;
    }

    // Inject motion tags
    if (motionTags.length > 0) {
      imagePrompt = `${imagePrompt}, ${motionTags.join(', ')}`;
    }

    // ── 3. Apply brain algorithms (all server-side) ──
    // Sanitize (remove NSFW, anti-noise)
    const sanitized = sanitizePrompt(imagePrompt);
    imagePrompt = sanitized.cleaned || imagePrompt;

    // Apply smart merge (deduplicate camera brands, color science)
    const mergeResult = applySmartMerge({
      camera: imagePrompt,
      subject,
    });
    if (mergeResult && mergeResult.combined) {
      imagePrompt = mergeResult.combined;
    }

    // Apply cinematic sanitization (director knowledge engine)
    imagePrompt = sanitizeCinematicPrompt(imagePrompt);

    // Optimize for specific AI model
    const ordered = reorderPromptByModel(
      { SUBJECT: subject, CINEMATOGRAPHY: imagePrompt },
      model
    );
    if (ordered && ordered.length > 0) {
      const prose = compileProsePrompt(ordered);
      if (prose) imagePrompt = prose;
    }

    // Enforce token limits
    const tokenResult = enforceTokenLimit(imagePrompt, model);
    imagePrompt = tokenResult?.text || imagePrompt;

    // ── 4. Compose video prompt ──
    let videoPrompt = promptData.videoPrompt || '';
    if (subject && videoPrompt) {
      videoPrompt = videoPrompt.replace(/\[subject\]/gi, subject);
    }

    // ── 5. Score the prompt ──
    const score = scorePrompt(imagePrompt);

    // ── 6. Return result (ONLY the final composed prompt, NOT the template) ──
    return res.status(200).json({
      success: true,
      title: promptData.name,
      definition: promptData.definition,
      category: promptData.category,
      imagePrompt,
      videoPrompt,
      score: score || { total: 0 },
      bestPractices: promptData.bestPractices || '',
      commonMistakes: promptData.commonMistakes || [],
      // NOTE: promptTemplate is NEVER returned to the client
    });

  } catch (err) {
    console.error('[API /generate-prompt] Error:', err);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}
