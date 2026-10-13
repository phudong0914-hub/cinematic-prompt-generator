/**
 * qwenOmniVoiceEngine.js — Qwen-Omni Cinema Voice Library & Character Vocal Anchor Engine
 * ──────────────────────────────────────────────────────────────────────────────────────────
 * Tinh hoa tích hợp Thư Viện Giọng Nói Qwen-Omni (https://omni.qwen.ai/voice-library)
 * vào Kiến Trúc Điện Ảnh Cine Prompt Pro v3.0 (Studio Director Engine).
 *
 * Chức năng cốt lõi:
 * 1. Catalog Giọng Diễn Viên Điện Ảnh Độc Bản (Baritone Luxury, Warm Narrator, Action Punch, Mystic Whisper)
 * 2. Đài Từ & Cảm Xúc Diễn Xuất (Authoritative, Whispering, Dramatic Tension, Gentle Intimacy)
 * 3. Character Vocal Fingerprint & Anti-Drift Voice Anchor (Khóa vân giọng xuyên suốt bộ phim)
 * 4. Zero-Shot Voice Cloning Bridge (Nhân bản giọng Đạo diễn / KOL từ mẫu 3-10s)
 * 5. Chuẩn Xuất DashScope Omni Multimodal Audio Payload (session.audio.output.voice)
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Team
 */

export const QWEN_OMNI_VOICE_CATALOG = [
  {
    id: 'qwen-baritone-luxury',
    name: 'Nam Thần Quyền Uy (Baritone Luxury)',
    gender: 'male',
    timbre: 'Trầm ấm, đĩnh đạc, dày dặn, uy lực',
    bestFor: 'TVC Nước Hoa, Siêu Xe, Bất Động Sản Hạng Sang, Phim Noir',
    referenceModel: 'Qwen3.8-Omni-Flash-Realtime',
    basePitch: -2,
    recommendedWpm: 120,
    samplePrompt: 'Midnight Oud. Mùi hương không cần cất lời, nó định vị đẳng cấp của bạn.'
  },
  {
    id: 'qwen-warm-narrator',
    name: 'Tina — Người Kể Chuyện Tự Sự (Warm Narrator)',
    gender: 'female',
    timbre: 'Dịu dàng, ấm áp, sâu lắng, giàu tính văn học',
    bestFor: 'Phim Ngắn Nghệ Thuật, Tự Sự Ký Sự, Thương Hiệu Mỹ Phẩm & Chữa Lành',
    referenceModel: 'Tina (Omni Multimodal Default)',
    basePitch: 0,
    recommendedWpm: 128,
    samplePrompt: 'Có những mùi hương chỉ thoảng qua, nhưng lưu lại cả một đời ký ức.'
  },
  {
    id: 'qwen-dynamic-action',
    name: 'Cherry — Năng Lượng Đột Phá (Action Punch)',
    gender: 'female',
    timbre: 'Sắc sảo, dồn dập, tự tin, cuốn hút',
    bestFor: 'Trailer Phim Hành Động, Thể Thao, Tech TVC, Chiến dịch Viral TikTok',
    referenceModel: 'Cherry (Omni Realtime)',
    basePitch: +1,
    recommendedWpm: 145,
    samplePrompt: 'Tốc độ không chỉ là con số — Đó là bản năng định đoạt kẻ dẫn đầu.'
  },
  {
    id: 'qwen-mystic-whisper',
    name: 'Chelsie — Thì Thầm Huyền Bí (Mystic Whisper)',
    gender: 'female',
    timbre: 'Huyền bí, ma mị, gợi cảm, hơi thở nhẹ (high breathiness)',
    bestFor: 'Phim Tâm Lý Ly Kỳ (Psychological Thriller), Thời Trang Haute Couture',
    referenceModel: 'Chelsie (Omni Atmospheric)',
    basePitch: -1,
    recommendedWpm: 115,
    samplePrompt: 'Trong bóng tối của dạ nguyệt, sự thật là thứ duy nhất tỏa hương.'
  },
  {
    id: 'qwen-vintage-classic',
    name: 'Ký Ức Radio 1970s (Vintage Classic)',
    gender: 'male',
    timbre: 'Hoài niệm, trầm rè analog, phát thanh viên điện ảnh cổ điển',
    bestFor: 'Phim Lịch Sử, Retro, Phim Nhựa 35mm, Phong Cách Wes Anderson',
    referenceModel: 'Qwen-Omni-Vintage-Filter',
    basePitch: -3,
    recommendedWpm: 110,
    samplePrompt: 'Sài Gòn năm ấy, những con đường phủ rợp bóng xà cừ và giọt cà phê tí tách rơi.'
  },
  {
    id: 'qwen-director-trungvt',
    name: 'Đạo Diễn Trungvt Signature (Zero-Shot Clone)',
    gender: 'male',
    timbre: 'Trầm vang, nhả chữ đắt giá, dứt khoát, phong thái Đạo diễn trường quay',
    bestFor: 'TVC Độc Bản, Video Masterclass, Kêu Gọi Hành Động (CTA) Chuyển Đổi Cao',
    referenceModel: 'Custom Voice Clone Matrix (10s Anchor)',
    basePitch: -2,
    recommendedWpm: 122,
    samplePrompt: 'Khám phá ngay tại đường dẫn phía trên để định vị đẳng cấp của bạn.'
  }
];

export const QWEN_OMNI_EMOTION_DIRECTIVES = {
  authoritative: {
    label: 'Quyền uy & Điềm tĩnh (Authoritative)',
    promptTag: '[tone: authoritative, pace: deliberate, intensity: subtle_power]',
    pitchMod: -1,
    rateMod: -4,
    breathiness: 0.15
  },
  whispering: {
    label: 'Thì thầm quyến rũ (Intimate Whisper)',
    promptTag: '[tone: whispering, vocal_air: high, closeness: binaural_near]',
    pitchMod: 0,
    rateMod: -8,
    breathiness: 0.85
  },
  dramatic_tension: {
    label: 'Căng thẳng kịch tính (Dramatic Tension)',
    promptTag: '[tone: tense, breathless, urgency: high_stakes]',
    pitchMod: +1,
    rateMod: +6,
    breathiness: 0.40
  },
  inspirational: {
    label: 'Hùng tráng & Truyền cảm hứng (Inspirational Swell)',
    promptTag: '[tone: uplifting, chest_resonance: rich, climax: epic]',
    pitchMod: 0,
    rateMod: 0,
    breathiness: 0.20
  },
  gentle_healing: {
    label: 'Chữa lành & Êm dịu (Gentle Healing)',
    promptTag: '[tone: soothing, warm, acoustic_space: intimate_studio]',
    pitchMod: +1,
    rateMod: -6,
    breathiness: 0.50
  }
};

export class QwenOmniVoiceEngine {
  constructor() {
    this.catalog = QWEN_OMNI_VOICE_CATALOG;
    this.emotions = QWEN_OMNI_EMOTION_DIRECTIVES;
    this.activeVoiceId = 'qwen-baritone-luxury';
  }

  /**
   * Trả về toàn bộ danh mục giọng nói Qwen-Omni
   */
  getVoiceCatalog() {
    return this.catalog;
  }

  /**
   * Lấy chi tiết thông số của một Voice ID
   */
  getVoiceById(id) {
    return this.catalog.find(v => v.id === id) || this.catalog[0];
  }

  /**
   * Tạo Fingerprint giọng nói cho Character Bible trong CharacterOS
   */
  buildCharacterVoiceDNA(voiceId, options = {}) {
    const voice = this.getVoiceById(voiceId);
    const emotionKey = options.emotion || 'authoritative';
    const emotion = this.emotions[emotionKey] || this.emotions.authoritative;

    return {
      vocalEngine: 'Qwen-Omni-Multimodal-V3',
      voiceId: voice.id,
      voiceName: voice.name,
      timbre: voice.timbre,
      referenceModel: voice.referenceModel,
      defaultEmotion: emotionKey,
      emotionTag: emotion.promptTag,
      breathControl: {
        breathiness: emotion.breathiness,
        pauseCadence: options.pauseCadence || 'cinematic_0.5s',
        wpm: options.wpm || voice.recommendedWpm
      },
      zeroShotCloneSource: options.cloneAudioUrl || null,
      antiDriftLock: true,
      updatedAt: new Date().toISOString()
    };
  }

  /**
   * Sinh cấu hình DashScope / Qwen-Omni Session Payload cho từng phân cảnh
   */
  buildOmniSceneAudioPayload(scene, voiceProfile) {
    const voice = this.getVoiceById(voiceProfile?.voiceId || this.activeVoiceId);
    const emotionKey = scene.emotion || voiceProfile?.defaultEmotion || 'authoritative';
    const emotion = this.emotions[emotionKey] || this.emotions.authoritative;

    return {
      protocol: 'dashscope-omni-v2',
      session: {
        audio: {
          output: {
            voice: voice.referenceModel,
            voice_id: voice.id,
            format: 'wav_48k_pcm',
            sample_rate: 48000,
            channel: 1
          }
        }
      },
      directives: {
        script_text: scene.voiceoverVI || scene.text || '',
        english_sub_text: scene.voiceoverEN || '',
        actor_direction: emotion.promptTag,
        pacing_wpm: voiceProfile?.breathControl?.wpm || voice.recommendedWpm,
        breath_envelope: emotion.breathiness,
        audio_ducking_priority: 'primary_actor_voice',
        target_timecode: scene.timecode || '00:00 - 00:04'
      }
    };
  }

  /**
   * Tạo tệp Manifest Tích Hợp Đa Phân Cảnh (Omni Audio Dubbing Pack)
   */
  generateProjectOmniVoiceManifest(scenes = [], characterDNA = null) {
    const voiceProfile = characterDNA?.voiceDNA || this.buildCharacterVoiceDNA('qwen-baritone-luxury');

    return {
      generator: 'Cine Prompt Pro v3.0 (Qwen-Omni Cinema Voice Engine)',
      source_library: 'https://omni.qwen.ai/voice-library',
      character_vocal_anchor: {
        voice_id: voiceProfile.voiceId,
        voice_name: voiceProfile.voiceName,
        timbre: voiceProfile.timbre,
        anti_drift_locked: true
      },
      scene_soundtrack_breakdown: scenes.map((s, idx) => ({
        scene_index: idx + 1,
        timecode: s.timecode || `Scene ${idx + 1}`,
        omni_payload: this.buildOmniSceneAudioPayload(s, voiceProfile)
      }))
    };
  }
}

export const qwenOmniVoiceEngine = new QwenOmniVoiceEngine();
