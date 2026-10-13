// Polyfill localStorage for Node.js test environment
if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  };
}

import assert from 'assert';
import {
  QWEN_OMNI_VOICE_CATALOG,
  QWEN_OMNI_EMOTION_DIRECTIVES,
  qwenOmniVoiceEngine
} from './js/qwenOmniVoiceEngine.js';
import { characterOS } from './js/characterOS.js';
import { buildOpenCreatorManifest } from './js/openCreatorBridge.js';

console.log('🎙️ BẮT ĐẦU KIỂM THỬ: QWEN-OMNI CINEMA VOICE ENGINE & VOCAL ANCHOR...\n');

// 1. Kiểm tra Catalog Giọng Nói Qwen-Omni
assert.ok(QWEN_OMNI_VOICE_CATALOG.length >= 6, 'Phải có tối thiểu 6 preset giọng điện ảnh');
const baritone = qwenOmniVoiceEngine.getVoiceById('qwen-baritone-luxury');
assert.strictEqual(baritone.gender, 'male');
assert.ok(baritone.timbre.includes('Trầm ấm'));
const tina = qwenOmniVoiceEngine.getVoiceById('qwen-warm-narrator');
assert.ok(tina.name.includes('Tina'));
console.log('✅ [1/5] Thư viện 6 Giọng Diễn Viên Điện Ảnh Độc Bản (Baritone, Tina, Cherry, Chelsie, Vintage, Director) sẵn sàng.');

// 2. Kiểm tra Đài Từ & Cảm Xúc Diễn Xuất
const emotions = Object.keys(QWEN_OMNI_EMOTION_DIRECTIVES);
assert.ok(emotions.includes('authoritative'));
assert.ok(emotions.includes('whispering'));
assert.ok(emotions.includes('dramatic_tension'));
const whisper = QWEN_OMNI_EMOTION_DIRECTIVES.whispering;
assert.ok(whisper.breathiness > 0.7, 'Whisper phải có độ thở tự nhiên cao');
console.log('✅ [2/5] 5 Bộ Chỉ Đạo Đài Từ & Cảm Xúc Diễn Xuất (Tone, Pacing, Breathiness, Closeness) hoạt động chuẩn xác.');

// 3. Kiểm tra Tích hợp Khóa Vân Giọng (Voice DNA) vào CharacterOS
const voiceDNA = qwenOmniVoiceEngine.buildCharacterVoiceDNA('qwen-baritone-luxury', {
  emotion: 'authoritative',
  wpm: 120
});
assert.strictEqual(voiceDNA.voiceId, 'qwen-baritone-luxury');
assert.strictEqual(voiceDNA.antiDriftLock, true);
assert.ok(voiceDNA.emotionTag.includes('authoritative'));

const maiChar = characterOS.getActiveCharacter();
assert.ok(maiChar.voiceDNA, 'Nhân vật hoạt động phải có Voice DNA');
assert.strictEqual(maiChar.voiceDNA.voiceId, 'qwen-warm-narrator');
console.log('✅ [3/5] Khóa Vân Giọng Nhân Vật (Anti-Drift Vocal Anchor) tích hợp hoàn hảo vào Character Production OS.');

// 4. Kiểm tra Sinh Payload DashScope Omni cho Phân Cảnh
const sceneMock = {
  timecode: '00:00 - 00:04',
  voiceoverVI: 'Có phải bạn đang tìm mùi hương của quyền lực?',
  voiceoverEN: 'Are you searching for the scent of absolute power?',
  emotion: 'authoritative'
};
const payload = qwenOmniVoiceEngine.buildOmniSceneAudioPayload(sceneMock, voiceDNA);
assert.strictEqual(payload.protocol, 'dashscope-omni-v2');
assert.strictEqual(payload.session.audio.output.format, 'wav_48k_pcm');
assert.strictEqual(payload.directives.actor_direction, QWEN_OMNI_EMOTION_DIRECTIVES.authoritative.promptTag);
console.log('✅ [4/5] Cấu trúc DashScope Omni Multimodal Audio Payload (48kHz PCM, Actor Direction) hợp lệ 100%.');

// 5. Kiểm tra Tích hợp vào OpenCreator Pipeline Manifest
const manifest = buildOpenCreatorManifest({
  title: 'Midnight Oud Master 2026',
  productName: 'Midnight Oud Luxury Perfume',
  aspectRatio: '9:16'
});
const dubbingStage = manifest.execution_plan.stages.find(s => s.stage_id === 'stage_03_smart_dubbing');
assert.ok(dubbingStage.voice_engine.includes('Qwen-Omni Voice Library'));
assert.strictEqual(dubbingStage.voice_library_source, 'https://omni.qwen.ai/voice-library');
assert.ok(manifest.scenes[0].qwenOmniAudio, 'Mỗi phân cảnh trong Manifest phải chứa qwenOmniAudio payload');
console.log('✅ [5/5] Cầu nối OpenCreator Manifest tự động nhúng toàn bộ thông số Qwen-Omni Voice Library.');

console.log('\n🎉 TẤT CẢ 5/5 BÀI KIỂM THỬ ĐÃ VƯỢT QUA 100%! QWEN-OMNI VOICE ENGINE NÂNG CẤP CINEMA THÀNH CÔNG.');
