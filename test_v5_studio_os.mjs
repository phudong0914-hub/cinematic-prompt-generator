/**
 * test_v5_studio_os.mjs — Comprehensive Unit Tests for Cine Prompt Pro v5.0 Enterprise
 */

import { omniDirectorEngine } from './js/omniDirectorEngine.js';
import { threadViralEngine } from './js/threadViralEngine.js';
import { cinemaMasterEngine } from './js/cinemaMasterEngine.js';
import { compileAllEngines } from './js/promptCompiler2026.js';

console.log('🧪 RUNNING CINE PROMPT PRO v5.0 ENTERPRISE VERIFICATION SUITE...\n');

// 1. Test Omni Director Speech Parser
console.log('1️⃣ Testing Omni Director Speech Parser:');
const testSpeech = 'Cảnh toàn góc thấp phố Sài Gòn mưa đêm, máy Dolly In chậm vào ly cà phê, nhạc Jazz buồn';
const parsed = omniDirectorEngine.parseDirectorSpeech(testSpeech);
console.log('   - Shot Size:', parsed.shotSize);
console.log('   - Camera Angle:', parsed.cameraAngle);
console.log('   - Movement:', parsed.movement);
console.log('   - Lighting:', parsed.lighting);
console.log('   - Audio Ambience:', parsed.audio);
if (parsed.shotSize.includes('Wide') && parsed.cameraAngle.includes('Low') && parsed.movement.includes('Dolly')) {
  console.log('   ✅ Omni Speech Parser: PASSED\n');
} else {
  console.error('   ❌ Omni Speech Parser: FAILED\n');
  process.exit(1);
}

// 2. Test ThreadViral Engine
console.log('2️⃣ Testing ThreadViral Growth Engine:');
const viralHook = threadViralEngine.generateViralHook('pattern_interrupt', 'Cà Phê Sài Gòn');
console.log('   - Viral Hook Pattern:', viralHook.patternName);
console.log('   - Timecode:', viralHook.timecode);
console.log('   - SFX Layer:', viralHook.sfxLayer);

const splitShots = threadViralEngine.splitScriptToMultiShot('Đêm Sài Gòn mưa tầm tã. Người đàn ông đẩy cửa bước vào quán cà phê nhỏ. Anh nhìn ly cà phê phin đang nhỏ từng giọt. Ký ức 20 năm ùa về.');
console.log(`   - Script-to-MultiShot: Split into ${splitShots.length} timed shots.`);
if (viralHook.timecode === '00:00 - 00:03' && splitShots.length >= 3) {
  console.log('   ✅ ThreadViral Growth Engine: PASSED\n');
} else {
  console.error('   ❌ ThreadViral Growth Engine: FAILED\n');
  process.exit(1);
}

// 3. Test 180-Degree Spatial Axis Continuity
console.log('3️⃣ Testing 180-Degree Spatial Axis Continuity:');
const issues = cinemaMasterEngine.validate180DegreeAxis();
console.log(`   - Initial 180° Axis Violations: ${issues.length}`);
cinemaMasterEngine.enforce180AxisAlternation();
const issuesAfter = cinemaMasterEngine.validate180DegreeAxis();
console.log(`   - Post-Alternation 180° Axis Violations: ${issuesAfter.length}`);
if (issuesAfter.length === 0) {
  console.log('   ✅ 180-Degree Spatial Continuity: PASSED\n');
} else {
  console.error('   ❌ 180-Degree Spatial Continuity: FAILED\n');
  process.exit(1);
}

// 4. Test Universal 5-Engine Compiler
console.log('4️⃣ Testing Universal 5-Engine Compiler:');
const outputs = compileAllEngines(cinemaMasterEngine.projectData);
console.log('   - Seedance 2.5 length:', outputs.seedance?.length);
console.log('   - Kling 4.0 length:', outputs.kling?.length);
console.log('   - Gemini Omni / Veo 3.1 length:', outputs.veoOmni?.length);
console.log('   - Runway Gen-4.5 length:', outputs.runway?.length);
console.log('   - Midjourney V8.1 length:', outputs.midjourney?.length);

const hasAllEngines = outputs.seedance && outputs.kling && outputs.veoOmni && outputs.runway && outputs.midjourney && outputs.jsonManifest;
if (hasAllEngines) {
  console.log('   ✅ Universal 5-Engine Compiler: PASSED\n');
} else {
  console.error('   ❌ Universal 5-Engine Compiler: FAILED\n');
  process.exit(1);
}

// 5. Test DaVinci Resolve XML & Call Sheet Exporter
console.log('5️⃣ Testing DaVinci Resolve XML & Hollywood Call Sheet Exporter:');
const xml = cinemaMasterEngine.exportDaVinciXML();
const callSheet = cinemaMasterEngine.generatePrintableCallSheetHTML();
console.log('   - XML Length:', xml.length, 'Contains xmeml:', xml.includes('<xmeml version="5">'));
console.log('   - Call Sheet Length:', callSheet.length, 'Contains Call Sheet:', callSheet.includes('CALL SHEET'));
if (xml.includes('<xmeml version="5">') && callSheet.includes('CALL SHEET')) {
  console.log('   ✅ DaVinci XML & Call Sheet: PASSED\n');
} else {
  console.error('   ❌ DaVinci XML & Call Sheet: FAILED\n');
  process.exit(1);
}

console.log('🏆 ALL 5 CINE PROMPT PRO v5.0 ENTERPRISE MODULES VERIFIED 100%!');
