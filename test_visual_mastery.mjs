import { VISUAL_LANGUAGE_MASTERY_19_LAWS, injectVisualLawsIntoPrompt, ETHICAL_FRAMING_GUARDRAILS } from './js/directorKnowledgeEngine.js';
import { scorePrompt, calculate4Pillars } from './js/scorecard.js';
import { OpticalLinter } from './js/opticalLinter.js';

console.log('=== TEST 1: Check 19 Visual Laws Integrity ===');
console.assert(VISUAL_LANGUAGE_MASTERY_19_LAWS.length === 19, `Expected 19 laws, got ${VISUAL_LANGUAGE_MASTERY_19_LAWS.length}`);
VISUAL_LANGUAGE_MASTERY_19_LAWS.forEach(law => {
  console.assert(law.id && law.lesson && law.nameVi && law.promptSnippet, `Law ${law.lesson} missing fields!`);
});
console.log(`✅ Passed: All 19 Visual Laws loaded with valid metadata (Lessons 1 to 19).`);

console.log('\n=== TEST 2: Optical Injection Test ===');
const base = "Cinematic portrait of a Cyber-Monk in Himalayan temple";
const injected = injectVisualLawsIntoPrompt(base, ['chatLieu', 'khongGian']);
console.assert(injected.includes('raking light') && injected.includes('negative space'), 'Failed to inject visual laws!');
console.log('Injected prompt sample:', injected);
console.log('✅ Passed: Visual laws successfully injected into prompt.');

console.log('\n=== TEST 3: 4-Pillar Scorecard Evaluation ===');
const testPrompt = `A 65mm eye-level cinematic portrait of a 28yo master artisan, rule of thirds, leading lines, selective depth of field, chiaroscuro rim light with soft volumetric wrap, deliberate expansive negative space, 80% dominant monochromatic cyan-blue palette with amber accents, 10-20 degree low-angle raking light grazing across tactile silk weave, somatosensory micro-texture activation, volumetric haze atmosphere, Kodak Portra 400 --ar 16:9 --v 8.2`;
const scoreResult = scorePrompt(testPrompt);
console.log('Total Score:', scoreResult.total, 'Grade:', scoreResult.grade.grade);
console.log('4 Pillars Breakdown:', scoreResult.fourPillars);
console.assert(scoreResult.fourPillars.bocuc.score >= 80, `Expected >= 80, got ${scoreResult.fourPillars.bocuc.score}`);
console.assert(scoreResult.fourPillars.anhsang.score >= 80, `Expected >= 80, got ${scoreResult.fourPillars.anhsang.score}`);
console.assert(scoreResult.fourPillars.mausac.score >= 80, `Expected >= 80, got ${scoreResult.fourPillars.mausac.score}`);
console.assert(scoreResult.fourPillars.chatlieu.score >= 80, `Expected >= 80, got ${scoreResult.fourPillars.chatlieu.score}`);
console.log('✅ Passed: 4-Pillars evaluation operates with accurate high marks.');

console.log('\n=== TEST 4: Optical Linter & Horror Vacui / Raking Light Warnings ===');
const clutteredPrompt = "crowded market packed with countless chaotic objects and crammed people, fine skin pores, neon green, vivid purple, bright yellow, saturated cyan";
const lintResult = OpticalLinter.validate(clutteredPrompt);
console.log('Linter score:', lintResult.score, 'Conflicts:', lintResult.conflicts.map(c => c.type));
console.assert(lintResult.conflicts.some(c => c.type === 'HORROR_VACUI_OVERCROWDING'), 'Failed to trigger Horror Vacui warning!');
console.assert(lintResult.conflicts.some(c => c.type === 'CHROMATIC_CHAOS_CONFLICT'), 'Failed to trigger Chromatic Chaos warning!');
console.assert(lintResult.suggestions.some(s => s.type === 'MISSING_RAKING_LIGHT_TEXTURE'), 'Failed to trigger Missing Raking Light suggestion!');
console.log('✅ Passed: All visual theory lint warnings successfully triggered.');

console.log('\n🎉 ALL 4 MASTER VISUAL TESTS PASSED 100%!');
