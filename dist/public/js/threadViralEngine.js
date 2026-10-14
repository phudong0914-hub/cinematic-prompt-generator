/**
 * threadViralEngine.js — ThreadViral Bento Micro-Tools Dock & Viral Growth OS
 * Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS)
 * by Đạo Diễn Trungvt
 */

export class ThreadViralEngine {
  constructor() {
    this.hookPatterns = [
      {
        id: 'pattern_interrupt',
        name: 'Pattern Interrupt (Phá Vỡ Mô Thức Thị Giác)',
        hookDuration: '00:00 - 00:03',
        cameraStyle: 'Extreme Low-Angle Whip Zoom in to Dutch Tilt',
        lighting: 'High-contrast strobe flash transition into cinematic rim light',
        action: 'Object freezes mid-air while water droplets splatter in reverse micro-detail; subject snaps gaze directly into the camera lens with intense curiosity',
        audioSFX: '[00:00.2] Heavy sub-bass boom (808 drop) + sharp camera shutter click',
        promptCue: '00:00-00:03: Extreme jarring visual punch. Sudden motion snap into razor-sharp focus.'
      },
      {
        id: 'extreme_macro_shock',
        name: 'Extreme Macro Shock (Cận Cảnh Gây Sốc 100mm)',
        hookDuration: '00:00 - 00:03',
        cameraStyle: '100mm Macro Probe Lens skimming millimeters above surface',
        lighting: 'Clinical fiber-optic backlighting highlighting microscopic steam and crystalline reflections',
        action: 'A single microscopic droplet explodes in super slow-motion (960fps) releasing vibrant luminescent ripples',
        audioSFX: '[00:00.5] Hyper-crisp crystalline crack + visceral vacuum suck-back SFX',
        promptCue: '00:00-00:03: 100mm macro probe view, microscopic liquid explosion with hypnotic fluid dynamics.'
      },
      {
        id: 'reverse_motion',
        name: 'Reverse Motion Rewind (Vòng Lặp Chảy Ngược Thời Gian)',
        hookDuration: '00:00 - 00:03',
        cameraStyle: 'Fast backward tracking dolly matching accelerating reverse physics',
        lighting: 'Neon shadows un-dissolving across damp asphalt streets',
        action: 'Shattered glass fragments lift seamlessly off wet pavement and reassemble into a pristine crystal perfume bottle',
        audioSFX: '[00:00.1] Reverse tape rewind whoosh transitioning to a resonant glass ping',
        promptCue: '00:00-00:03: Pure reverse-causality physics. Floating particles collapsing inward.'
      },
      {
        id: 'provocative_question',
        name: 'Provocative Direct Address (Nhìn Thẳng & Đối Đầu)',
        hookDuration: '00:00 - 00:03',
        cameraStyle: 'Tight 85mm Portrait lens, quick 1.2x punch-in jump cut',
        lighting: 'Dramatic single-source Rembrandt key light, deep cyan negative fill',
        action: 'Protagonist leans aggressively toward camera, eye contact unyielding, speaking a piercing rhetorical question',
        audioSFX: '[00:00.0] Instant audio cutoff to pure silence, followed by sharp breath intake',
        promptCue: '00:00-00:03: High-intensity unblinking eye contact, intense screen presence.'
      }
    ];
  }

  /**
   * Tạo 3 Giây Đầu Triệu View theo Pattern đã chọn
   */
  generateViralHook(patternId, customTopic = '') {
    const pattern = this.hookPatterns.find(p => p.id === patternId) || this.hookPatterns[0];
    const topicFormatted = customTopic ? `xoay quanh chủ đề "${customTopic}"` : '';

    return {
      patternId: pattern.id,
      patternName: pattern.name,
      timecode: pattern.hookDuration,
      cameraDirective: pattern.cameraStyle,
      lightingDirective: pattern.lighting,
      actionPhysics: pattern.action + (topicFormatted ? ` (${topicFormatted})` : ''),
      sfxLayer: pattern.audioSFX,
      hookShotSpec: {
        shot_number: 1,
        timecode: '00:00 - 00:03',
        shot_size: 'Extreme Close-Up (ECU) -> Fast Punch-in',
        camera_angle: 'Low Angle Dutch Tilt',
        camera_movement: pattern.cameraStyle,
        action_physics: pattern.action,
        audio_layers: {
          foley_sfx: pattern.audioSFX,
          ambience: 'Silent vacuum tension rising abruptly into rhythm',
          dialogue: null
        }
      }
    };
  }

  /**
   * Giải phẫu & Nhân bản Video Viral từ Transcript hoặc Mô tả
   */
  reverseEngineerViralVideo(inputTranscriptOrDescription) {
    const text = inputTranscriptOrDescription.trim();
    const hasDialogue = text.includes(':') || text.includes('"') || text.length > 80;

    return {
      sourceAnalysis: {
        estimatedPacing: 'Hyper-retention 4-beat rhythm (Average 5.2s per cut)',
        emotionalArc: 'Curiosity Shock -> Tension Build -> Revelation -> Action Trigger'
      },
      shotsBlueprint: [
        {
          shot: 1,
          timecode: '00:00 - 00:04',
          role: 'VIRAL HOOK (Ngăn lướt qua)',
          angle: 'Macro Low Angle with Rapid Push-In',
          action: 'Visual paradox or high-speed motion interrupting scrolling habit',
          lighting: 'Rim-lit neon flare with high specular contrast',
          sfx: 'Sub-bass impact with sharp visual match'
        },
        {
          shot: 2,
          timecode: '00:04 - 00:10',
          role: 'PROBLEM / AGITATE (Chạm nỗi đau hoặc tò mò)',
          angle: 'Medium Close-Up (MCU) OTS Over-The-Shoulder',
          action: 'Character exhibits visible hesitation or struggle under dynamic shadows',
          lighting: 'Moody chiaroscuro, naturalistic key light',
          sfx: 'Rhythmic clock ticking or subtle environmental tension'
        },
        {
          shot: 3,
          timecode: '00:10 - 00:20',
          role: 'HERO REVEAL / CLIMAX (Giải pháp & Đỉnh cao)',
          angle: 'Epic Slow-Motion Orbit around Hero Subject',
          action: 'The product or solution emerges triumphantly with cinematic particle dissipation',
          lighting: 'Radiant 3200K Golden Rim, anamorphic horizontal lens flare',
          sfx: 'Triumphant orchestral swell with crisp product click'
        },
        {
          shot: 4,
          timecode: '00:20 - 00:30',
          role: 'VIRAL CTA & INFINITE LOOP (Kêu gọi & Khóa vòng lặp)',
          angle: 'Eye-Level Direct Lock-off',
          action: 'Final punchline delivered; subtle gesture pointing to bio or looping seamlessly back to 00:00',
          lighting: 'Clean high-key commercial clarity',
          sfx: 'Catchy signature chime fading into seamless loop'
        }
      ]
    };
  }

  /**
   * Tách kịch bản dài thành chuỗi phân cảnh 5s-8s có căn chỉnh góc máy đối lập
   */
  splitScriptToMultiShot(fullScriptText) {
    if (!fullScriptText || fullScriptText.trim().length === 0) {
      return [];
    }

    // Tách câu theo dấu chấm, chấm than, chấm hỏi hoặc ngắt dòng
    const sentences = fullScriptText
      .split(/(?<=[.!?\n])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 5);

    const shots = [];
    const shotConfigs = [
      { size: 'Wide Establishing Shot (WS)', angle: 'Low Angle', movement: 'Slow Push-in Dolly', transition: 'Hard Cut' },
      { size: 'Medium Shot (MS)', angle: 'Eye-Level', movement: 'Subtle Lateral Tracking', transition: 'Match Cut' },
      { size: 'Close-Up (CU)', angle: 'Slight High Angle', movement: 'Rack Focus from Background', transition: 'Hard Cut' },
      { size: 'Extreme Close-Up (ECU)', angle: 'Macro Level', movement: 'Micro Creep In', transition: 'Whip Pan' },
      { size: 'Medium Close-Up (MCU)', angle: 'Over-The-Shoulder (OTS)', movement: 'Handheld organic drift', transition: 'Hard Cut' },
      { size: 'Wide Hero Angle (WS)', angle: 'Low Heroic Angle', movement: 'Elevating Pedestal Up', transition: 'Fade to Black' }
    ];

    let currentSec = 0;
    const maxShots = Math.min(sentences.length, 6);

    for (let i = 0; i < maxShots; i++) {
      const duration = i === 0 ? 4 : 5; // Shot 1 nhanh 4s, các shot sau 5s
      const startSec = currentSec;
      const endSec = Math.min(currentSec + duration, 30);
      const startFormatted = `00:${startSec < 10 ? '0' + startSec : startSec}`;
      const endFormatted = `00:${endSec < 10 ? '0' + endSec : endSec}`;
      const cfg = shotConfigs[i % shotConfigs.length];

      shots.push({
        shot_number: i + 1,
        timecode: `${startFormatted} - ${endFormatted}`,
        shot_size: cfg.size,
        camera_angle: cfg.angle,
        camera_movement: cfg.movement,
        transition_in: cfg.transition,
        sentence: sentences[i],
        action_physics: `Character embodies: "${sentences[i]}", reacting with natural cinematic weight and posture`,
        audio_layers: {
          dialogue: sentences[i],
          foley_sfx: `[${startFormatted}.5] Natural movement sound accompanying the action`,
          ambience: 'Cohesive spatial room tone'
        }
      });

      currentSec = endSec;
      if (currentSec >= 30) break;
    }

    return shots;
  }

  /**
   * Tạo Prompt Ảnh Bìa / Poster Tỷ Lệ Click Cao (High-CTR Thumbnail)
   */
  generateThumbnailPrompt(topic, emotion = 'Shocked Revelation', aspectRatio = '16:9') {
    const emotionDescriptors = {
      'Shocked Revelation': 'wide hyper-expressive eyes, dropped jaw, intense emotional tension, high sweat micro-beads on temple',
      'Quiet Dominance': 'calm ruthless charisma, piercing direct unblinking stare, subtle razor-thin smirk',
      'Urgent Panic': 'motion blurred hair, desperate reaching posture, dramatic side perspiration, heavy cinematic breath',
      'Luxurious Ecstasy': 'tilted head, eyes closed in sublime satisfaction, golden volumetric illumination skimming jawline'
    };

    const emotionDetail = emotionDescriptors[emotion] || emotionDescriptors['Shocked Revelation'];

    return {
      concept: `High-CTR Viral Thumbnail for: "${topic}" (${emotion})`,
      midjourneyV8Prompt: `/imagine prompt: High-retention cinematic YouTube thumbnail of ${topic}, ${emotionDetail}, 3D bold glossy embossed typography space reserved on top-left, shot on ARRI Alexa 65 with Cooke Anamorphic lens, extreme micro-contrast, vibrant split-complementary color scheme (deep teal background, electric amber rim light), intense Dutch angle framing, tactile skin pores and crisp eye reflections --ar ${aspectRatio} --v 8.1 --style raw --s 180`,
      fluxPrompt: `Cinematic YouTube clickbait poster for ${topic}. Subject displaying ${emotionDetail}. Dynamic low-angle perspective, vivid saturated cinema lighting with neon cyan backlighting and sharp amber key light. Professional high-end editorial composition with clean negative space for typography.`
    };
  }
}

export const threadViralEngine = new ThreadViralEngine();
