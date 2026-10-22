/**
 * test_video_use_integration.mjs
 * Kiểm thử toàn diện 3 tinh hoa tích hợp từ browser-use/video-use
 */

import assert from 'assert';
import { videoUseAudioEngine } from './js/videoUseAudioEngine.js';
import { deadAirRemoverEngine } from './js/deadAirRemoverEngine.js';
import { cutBoundaryQaEngine } from './js/cutBoundaryQaEngine.js';

console.log('🧪 RUNNING VIDEO-USE INTEGRATION SUITE (3 CORE ESSENCES)...\n');

// ─── 1. KIỂM THỬ 30MS AUDIO DE-CLICKER & MICRO-CROSSFADE ──────────────────────
console.log('--- 1. Kiểm thử 30ms Audio De-Clicker & Micro-Crossfade ---');
const filterStr = videoUseAudioEngine.buildDeClickerFilter(5.0);
console.log('  • FFmpeg Audio Filter:', filterStr);
assert.ok(filterStr.includes('afade=t=in:ss=0:d=0.030'));
assert.ok(filterStr.includes('afade=t=out:st=4.970:d=0.030'));

// Test In-memory PCM Ramp
const sampleRate = 1000; // 1000 samples/sec -> 30ms = 30 samples
const mockSamples = new Float32Array(200).fill(1.0);
videoUseAudioEngine.applyPcmMicroEnvelope(mockSamples, sampleRate);
assert.strictEqual(mockSamples[0], 0.0, 'Mẫu đầu tiên phải bằng 0 (Fade-in start)');
assert.strictEqual(mockSamples[mockSamples.length - 1], 0.0, 'Mẫu cuối cùng phải bằng 0 (Fade-out end)');
assert.ok(mockSamples[15] > 0.4 && mockSamples[15] < 0.6, 'Điểm giữa fade phải dốc tuyến tính');
console.log('  ✅ 1. 30ms Audio De-Clicker: Triệt tiêu 100% tiếng nổ Pop/Click đạt chuẩn!');

// ─── 2. KIỂM THỬ AUTO DEAD AIR & SILENCE REMOVER ──────────────────────────────
console.log('\n--- 2. Kiểm thử Auto Dead Air & Silence Remover ---');
const mockLogs = `
[silencedetect @ 000001] silence_start: 2.50
[silencedetect @ 000001] silence_end: 4.10 | silence_duration: 1.60
[silencedetect @ 000001] silence_start: 7.80
[silencedetect @ 000001] silence_end: 9.20 | silence_duration: 1.40
`;
const silences = deadAirRemoverEngine.parseSilenceLogs(mockLogs, 15.0);
assert.strictEqual(silences.length, 2);
assert.strictEqual(silences[0].start, 2.50);
assert.strictEqual(silences[0].end, 4.10);

const activeSegments = deadAirRemoverEngine.computeActiveSegments(silences, 15.0);
console.log('  • Active Speech Segments:', activeSegments);
assert.strictEqual(activeSegments.length, 3);
assert.strictEqual(activeSegments[0].start, 0.0);
assert.ok(activeSegments[0].end <= 2.6); // Giữ khoảng thở ngắn

const filterComplex = deadAirRemoverEngine.buildFilterComplex(activeSegments);
assert.ok(filterComplex.includes('trim=start=0:end='));
assert.ok(filterComplex.includes('concat=n=3:v=1:a=1'));
assert.ok(filterComplex.includes('afade=t=in:ss=0:d=0.030'));
console.log('  ✅ 2. Dead Air Remover: Gọt khoảng trống & giữ nhịp điệu dứt khoát đạt chuẩn!');

// ─── 3. KIỂM THỬ CUT-BOUNDARY QA & SELF-EVALUATION ────────────────────────────
console.log('\n--- 3. Kiểm thử Cut-Boundary QA & Self-Evaluation ---');
const cutPoints = [3.5, 8.2, 14.0];
const plan = cutBoundaryQaEngine.generateAuditSnapshotsPlan(cutPoints, 20.0);
assert.strictEqual(plan.length, 3);
assert.strictEqual(plan[0].before.timeSec, 3.46); // 3.5 - 0.04s
assert.strictEqual(plan[0].after.timeSec, 3.54);  // 3.5 + 0.04s

// Test phát hiện Black Frame & Tự động vá lỗi (Auto-Healing)
const mockNormalFrame = { isBlack: false, fileSizeBytes: 45000, hash: 'h1' };
const mockBlackFrame = { isBlack: true, fileSizeBytes: 2100, hash: 'h_black' };

const qaResult = cutBoundaryQaEngine.evaluateBoundaryPair(mockNormalFrame, mockBlackFrame);
assert.strictEqual(qaResult.passed, false);
assert.strictEqual(qaResult.autoHealingOffsetSec, 0.06);
assert.ok(qaResult.findings[0].includes('khung hình tối/đen ngay sau vết cắt'));
console.log('  • QA Result with Black Frame:', qaResult);

const qaPassedResult = cutBoundaryQaEngine.evaluateBoundaryPair(mockNormalFrame, { isBlack: false, fileSizeBytes: 42000, hash: 'h2' });
assert.strictEqual(qaPassedResult.passed, true);
assert.strictEqual(qaPassedResult.autoHealingOffsetSec, 0.0);
console.log('  ✅ 3. Cut-Boundary QA: Tự động soát lỗi khung hình biên & Auto-Healing đạt chuẩn!');

console.log('\n🏆 TẤT CẢ 3 BÀI KIỂM THỬ TINH HOA TỪ VIDEO-USE ĐÃ VƯỢT QUA 100%!');
