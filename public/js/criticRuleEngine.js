/**
 * criticRuleEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * ADAPTIVE DIRECTOR CRITIC-TO-RULE ENGINE
 * ─────────────────────────────────────────────────────────────────────────────
 * "Every time the Director critiques a shot, turn that critique into an
 *  immutable negative constraint. A master film is created by an AI that has
 *  listened to 100+ critiques and never repeats past failures."
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RULES_FILE = path.join(__dirname, '..', 'data', 'director_critic_rules.json');

/**
 * Load all active critic rules
 */
export function getCriticRules() {
  try {
    if (fs.existsSync(RULES_FILE)) {
      const data = JSON.parse(fs.readFileSync(RULES_FILE, 'utf-8'));
      return data.rules || [];
    }
  } catch (err) {
    console.error('[criticRuleEngine] Failed to read rules file:', err);
  }
  return [];
}

/**
 * Save critic rules back to file
 */
export function saveCriticRules(rules) {
  const payload = {
    version: '2.0.0',
    engine: 'Critic-to-Rule Adaptive Vault',
    updatedAt: new Date().toISOString(),
    rules
  };
  fs.writeFileSync(RULES_FILE, JSON.stringify(payload, null, 2), 'utf-8');
  return payload;
}

/**
 * Transform raw natural language critique into a structured negative constraint
 */
export function parseRawFeedback(rawFeedback) {
  const text = (rawFeedback || '').toLowerCase();
  let category = 'general_aesthetic';
  let severity = 'MEDIUM';
  let negativeConstraint = `Do not repeat: ${rawFeedback}`;
  let enforcedFix = 'Refine optical composition according to director taste';
  const triggers = [];

  // 1. Face obstruction
  if (/che\s*m[ặa]t|khu[ôo]n\s*m[ặa]t|over\s*face|overlap\s*face/i.test(text)) {
    category = 'face_protection';
    severity = 'CRITICAL';
    negativeConstraint = 'Graphic/text overlapping speaker facial zone';
    enforcedFix = 'Shift typography to Outer-Left (X <= 0.32) or Outer-Right (X >= 0.68)';
    triggers.push('che mat', 'face overlap', 'speaker face');
  }
  // 2. AI slop / cheap gradients
  else if (/t[íi]m|neon|gradient|re\s*tien|r[ẻe]\s*ti[ềe]n|ai\s*slop|cyberpunk/i.test(text)) {
    category = 'anti_ai_slop';
    severity = 'HIGH';
    negativeConstraint = 'Generic purple neon gradient or cheap AI aesthetic';
    enforcedFix = 'Apply Moody Mocha, Warm Amber, or Analog 35mm film grading';
    triggers.push('tim neon', 'purple gradient', 'ai slop');
  }
  // 3. App UI Safe Zone
  else if (/n[úu]t\s*b[ấa]m|tiktok|reels|shorts|like|comment|m[ée]p|che\s*m[ấa]t/i.test(text)) {
    category = 'safe_zone_app';
    severity = 'CRITICAL';
    negativeConstraint = 'Placing elements under platform interactive UI buttons';
    enforcedFix = 'Restrict to 9:16 safe action box: X in [0.05..0.80], Y in [0.12..0.72]';
    triggers.push('nut bam', 'safe zone', 'tiktok ui');
  }
  // 4. Stumbles / repeated takes
  else if (/v[ấa]p|l[ặa]p|n[óo]i\s*2\s*l[ầa]n|n[óo]i\s*3\s*l[ầa]n|l[ầa]n\s*cu[ốo]i|stumble/i.test(text)) {
    category = 'rough_cut';
    severity = 'HIGH';
    negativeConstraint = 'Retaining false starts and stumble takes';
    enforcedFix = 'Execute last_take_rule: discard prior attempts and keep only final take';
    triggers.push('noi vap', 'stumble take', 'last take');
  }
  // 5. Audio-visual sync lag
  else if (/tr[ễe]|kh[ôo]ng\s*kh[ớo]p|l[ệe]ch\s*ti[ếe]ng|sync|lag|ch[ậa]m/i.test(text)) {
    category = 'audio_sync';
    severity = 'HIGH';
    negativeConstraint = 'Audio-visual alignment latency exceeding 100ms';
    enforcedFix = 'Align element entrance keyframe exactly with Whisper word timestamp';
    triggers.push('lech tieng', 'audio sync', 'sync lag');
  }
  // 6. Low contrast / blurry / unreadable text / thin font
  else if (/m[ờo]|nh[òo]e|kh[ôo]ng\s*[đd][ọo]c|t[ươu]ng\s*ph[ảa]n|n[ềe]n\s*s[áa]ng|contrast|m[ảa]nh|font|ch[ữu]|nh[ỏo]|b[ée]/i.test(text)) {
    category = 'text_legibility';
    severity = 'MEDIUM';
    negativeConstraint = 'Low contrast ratio or optical blur on typography';
    enforcedFix = 'Apply solid pill badge background or multi-layer dark drop shadow';
    triggers.push('chu mo', 'low contrast', 'unreadable', 'font manh');
  }

  // Extract individual keywords for trigger matching
  const words = text.split(/\s+/).filter(w => w.length > 2);
  triggers.push(...words.slice(0, 5));

  return {
    category,
    severity,
    negativeConstraint,
    enforcedFix,
    triggers: Array.from(new Set(triggers))
  };
}

/**
 * Register a new critique from the Director and convert it into an active rule
 */
export function addCriticRule(rawFeedback) {
  const parsed = parseRawFeedback(rawFeedback);
  const rules = getCriticRules();
  const nextId = `CRIT-${String(rules.length + 1).padStart(3, '0')}`;

  const newRule = {
    id: nextId,
    category: parsed.category,
    severity: parsed.severity,
    rawFeedback: rawFeedback.trim(),
    negativeConstraint: parsed.negativeConstraint,
    enforcedFix: parsed.enforcedFix,
    triggers: parsed.triggers,
    isActive: true,
    createdAt: new Date().toISOString()
  };

  rules.push(newRule);
  saveCriticRules(rules);
  return newRule;
}

/**
 * Scan prompt or storyboard metadata against all active critic rules
 */
export function auditAgainstCriticRules(content) {
  const text = (typeof content === 'string' ? content : JSON.stringify(content)).toLowerCase();
  const rules = getCriticRules().filter(r => r.isActive);
  const violations = [];

  for (const rule of rules) {
    let matched = false;
    // Check triggers
    for (const trigger of rule.triggers) {
      if (text.includes(trigger.toLowerCase())) {
        matched = true;
        break;
      }
    }

    if (matched) {
      violations.push({
        ruleId: rule.id,
        category: rule.category,
        severity: rule.severity,
        rawCritique: rule.rawFeedback,
        negativeConstraint: rule.negativeConstraint,
        enforcedFix: rule.enforcedFix
      });
    }
  }

  return {
    passed: violations.length === 0,
    totalRulesChecked: rules.length,
    violationsCount: violations.length,
    violations
  };
}
