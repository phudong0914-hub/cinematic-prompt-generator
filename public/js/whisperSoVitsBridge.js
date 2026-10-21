/**
 * whisperSoVitsBridge.js — GPT-SoVITS & WhisperX Cinema Audio Studio Bridge
 * ─────────────────────────────────────────────────────────────────────────────
 * Mảnh ghép "Cơ bắp số 5": Nâng cấp toàn diện mảng âm thanh điện ảnh:
 * 1. GPT-SoVITS: Voice cloning giọng Đạo Diễn Trungvt & TVC luxury chỉ với 5s audio mẫu.
 * 2. WhisperX: Tách thời gian micro-second từng từ (word-level timestamps).
 * 3. Sinh phụ đề Karaoke .ass viền đen, chữ Sigmar, từ đang đọc đổi màu xanh #10B981.
 * 4. Tự động tính toán Audio Ducking Cues hạ nhạc nền -18dB khi có thoại.
 * 
 * Tác giả: Đạo Diễn Trungvt (Cine Prompt Pro Studio OS)
 */

export const SOVITS_VOICE_PRESETS = {
  director_trungvt: {
    id: 'director_trungvt',
    name: 'Đạo Diễn Trungvt (Master Cinema)',
    ref_audio: 'assets/voices/trungvt_director_ref.wav',
    ref_text: 'Xin chào các bạn, tôi là Đạo Diễn Trungvt.',
    style: 'authoritative_warm',
    pitch: 0,
    speed: 1.0,
    description: 'Giọng nam trầm ấm, điềm tĩnh, chuẩn phong thái đạo diễn điện ảnh.'
  },
  luxury_tvc: {
    id: 'luxury_tvc',
    name: 'Luxury Velvet (Nước hoa & Mỹ phẩm)',
    ref_audio: 'assets/voices/luxury_tvc_ref.wav',
    ref_text: 'Sự quyến rũ không nằm ở lời nói.',
    style: 'sensual_slow',
    pitch: -2,
    speed: 0.9,
    description: 'Giọng trầm lắng, nhấn nhá từng nhịp thở, lý tưởng cho TVC cao cấp.'
  },
  viral_hook: {
    id: 'viral_hook',
    name: 'Viral Energy (TikTok & Reels)',
    ref_audio: 'assets/voices/viral_hook_ref.wav',
    ref_text: 'Đừng lướt qua nếu bạn không muốn bỏ lỡ!',
    style: 'punchy_fast',
    pitch: 1,
    speed: 1.15,
    description: 'Giọng dứt khoát, âm lượng đều, nhịp điệu kích thích tò mò cao độ.'
  }
};

export class WhisperSoVitsBridge {
  constructor(config = {}) {
    this.selectedVoice = config.voicePreset || 'director_trungvt';
    this.duckingDb = config.duckingDb || -18;
    this.duckingFadeMs = config.duckingFadeMs || 250;
  }

  /**
   * Tạo payload yêu cầu tổng hợp giọng nói GPT-SoVITS
   */
  buildSynthesisPayload({
    text = '',
    emotion = 'warm',
    voiceId = null
  } = {}) {
    const preset = SOVITS_VOICE_PRESETS[voiceId || this.selectedVoice] || SOVITS_VOICE_PRESETS.director_trungvt;

    return {
      engine: 'GPT-SoVITS-v2',
      voice_id: preset.id,
      reference_audio: preset.ref_audio,
      reference_prompt_text: preset.ref_text,
      target_text: text,
      emotion_prompt: `[${emotion}]`,
      speed: preset.speed,
      pitch: preset.pitch,
      sample_rate: 32000,
      output_format: 'wav'
    };
  }

  /**
   * Sinh file phụ đề Karaoke .ass chuẩn Sigmar với từ phát âm đổi màu
   */
  generateKaraokeASS(wordCues = []) {
    const header = `[Script Info]
Title: Cine Prompt Pro Karaoke Subtitle
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: SigmarCinema,Sigmar,58,&H00FFFFFF,&H0000FF00,&H00000000,&H80000000,1,0,0,0,100,100,0,0,1,3.5,2.0,2,40,40,240,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;

    const lines = wordCues.map((cue) => {
      const startStr = this.formatAssTime(cue.start);
      const endStr = this.formatAssTime(cue.end);
      // Karaoke timing tag {\k<duration_cs>}
      const kText = cue.words.map(w => `{\\k${Math.round((w.end - w.start) * 100)}}${w.word}`).join(' ');
      return `Dialogue: 0,${startStr},${endStr},SigmarCinema,,0,0,0,,${kText}`;
    });

    return header + lines.join('\n') + '\n';
  }

  /**
   * Tính toán danh sách mốc thời gian Audio Ducking cho nhạc nền
   */
  generateAudioDuckingCues(speechIntervals = []) {
    return speechIntervals.map((interval, idx) => ({
      cueIndex: idx + 1,
      duckStartSec: Math.max(0, interval.start - (this.duckingFadeMs / 1000)),
      speechStartSec: interval.start,
      speechEndSec: interval.end,
      duckEndSec: interval.end + (this.duckingFadeMs / 1000),
      attenuationDb: this.duckingDb,
      fadeMs: this.duckingFadeMs
    }));
  }

  formatAssTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const cs = Math.floor((seconds % 1) * 100);
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  }
}
