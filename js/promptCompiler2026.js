/**
 * promptCompiler2026.js — Studio Multi-Engine Compiler (October 2026 Standard)
 * Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS)
 * by Đạo Diễn Trungvt
 */

export function cleanTagSoup(text = '') {
  if (!text) return '';
  const junkPatterns = [
    /\b(8k|4k|uhd|hyperrealistic|hyper-realistic|hyper realistic|photorealistic|photo-realistic)\b/gi,
    /\b(masterpiece|best quality|ultra-detailed|insanely detailed|high resolution)\b/gi,
    /\b(unreal engine|unreal engine 5|octane render|trending on artstation|cgsociety|v-ray)\b/gi,
    /\b(award winning|cinematic lighting masterpiece|wallpaper)\b/gi
  ];
  let cleaned = text;
  junkPatterns.forEach(pat => {
    cleaned = cleaned.replace(pat, '');
  });
  return cleaned
    .replace(/,\s*,+/g, ',')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/^,\s*|,\s*$/g, '');
}

/**
 * 1. SEEDANCE 2.5 COMPILER (ByteDance 2026)
 * Format: 1080p 10-bit | 24-30s | Multi-Shot Timeline | References Matrix | Vietnamese Lip-sync
 */
export function compileSeedancePrompt(data = {}) {
  const duration = data.duration || '30s';
  const ar = data.aspectRatio || '21:9';
  const references = data.references || [
    { tag: '@Char_1', desc: 'Nam chính phong trần, áo măng tô xám ướt mưa, 45 tuổi' },
    { tag: '@Prop_1', desc: 'Phin cà phê nhôm cổ điển trên ly thủy tinh sữa đặc' },
    { tag: '@Env_1', desc: 'Quán cà phê vỉa hè Sài Gòn mưa đêm, đèn neon hắt bóng ướt' },
    { tag: '@Audio_1', desc: 'Tiếng mưa rào nhiệt đới và điệu Jazz saxophone trầm buồn' }
  ];

  const shots = data.shots && data.shots.length > 0 ? data.shots : [
    {
      timecode: '00:00 - 00:06',
      name: 'SHOT 1: Wide Establishing Shot, Low Angle, Slow Push-in Dolly',
      desc: 'Góc phố Sài Gòn mưa đêm, phản chiếu ánh đèn neon. @Char_1 bước vào từ cánh trái khung hình hướng về phía quán cà phê.'
    },
    {
      timecode: '00:06 - 00:15',
      name: 'SHOT 2: Extreme Close-Up to MCU, Eye-Level, Rack Focus',
      desc: 'Cận cảnh @Prop_1 nhỏ giọt cà phê xuống ly. Tại 00:11, chuyển nét mượt sang ánh mắt của @Char_1.'
    },
    {
      timecode: '00:15 - 00:23',
      name: 'SHOT 3: Over-The-Shoulder Reverse, Eye-Level (180° Compliant)',
      desc: 'Cảnh cắt ngược vai. @Char_2 mỉm cười đặt cốc nước ấm cạnh @Prop_1, hướng nhìn khớp tuyệt đối với Shot 2.'
    },
    {
      timecode: '00:23 - 00:30',
      name: 'SHOT 4: Macro Hero Shot, Low Angle Orbit',
      desc: 'Máy quay lượn vòng 360 độ quanh @Prop_1, khói bốc lên lung linh dưới ánh đèn đường, kết thúc lắng đọng.'
    }
  ];

  const dialogueLines = data.dialogues || [
    { speaker: '@Char_1', timecode: '00:10 - 00:14.5', text: 'Có những thứ đi qua giông bão... mới giữ được vị nguyên bản.' },
    { speaker: '@Char_2', timecode: '00:18 - 00:22.0', text: 'Cà phê hôm nay vẫn đậm như hai mươi năm trước anh nhé.' }
  ];

  const refLines = references.map(r => `- ${r.tag}: ${r.desc}`).join('\n');
  const shotLines = shots.map(s => `- [${s.timecode} | ${s.name}]: ${s.desc}`).join('\n');
  const dialogueBlock = dialogueLines.map(d => `- [${d.timecode} | ${d.speaker}]: "${d.text}" (Vietnamese Lip-Sync Native)`).join('\n');

  return `[FORMAT: 1080p 10-bit | DURATION: ${duration} | AR: ${ar}]
[REFERENCES]
${refLines}

[MULTI-SHOT TIMELINE]
${shotLines}

[DIALOGUE & LIP-SYNC]
${dialogueBlock}`;
}

/**
 * 2. KLING 4.0 / 3.0 TURBO COMPILER (Kuaishou 2026)
 * Up to 6 Shots Storyboard, 10 Keyframe Pins & Master Continuity Lock
 */
export function compileKlingPrompt(data = {}) {
  const masterLock = data.masterLock || 'ARRI Alexa 65 Large Format, Cooke Anamorphic /i Special Flare, Kodak Vision3 500T LUT, 180° Axis Eyeline Preserved.';
  const shots = data.shots || [
    {
      num: 1,
      kfPin: 'KF-01 (Start 00:00) & KF-02 (00:06)',
      transition: 'FADE IN',
      optics: '28mm Anamorphic T2.0, Low Angle slow push-in',
      action: 'Rain streaks splash on trench coat of @Char_1 entering sidewalk cafe',
      audio: 'Heavy leather boots in puddle, distant scooter horn'
    },
    {
      num: 2,
      kfPin: 'KF-03 (00:06) & KF-04 (00:11)',
      transition: 'HARD CUT ON ACTION',
      optics: '85mm Anamorphic T1.4, Extreme Close-Up with Rack Focus',
      action: 'Drop of dark coffee drips from @Prop_1; focus shifts smoothly to eyes of @Char_1',
      audio: 'Resonant liquid droplet drop sound, ceramic cup clink'
    },
    {
      num: 3,
      kfPin: 'KF-05 (00:15) & KF-06 (00:20)',
      transition: 'MATCH CUT ON EYELINE',
      optics: '50mm Anamorphic T1.8, Reverse Over-the-Shoulder',
      action: '@Char_2 places warm water cup on Screen Right looking Screen Left (180° Match)',
      audio: 'Soft jazz trumpet swell, gentle whisper dialogue'
    },
    {
      num: 4,
      kfPin: 'KF-07 (00:23) & KF-08 (End 00:30)',
      transition: 'WHIP PAN ORBIT',
      optics: '100mm Macro T1.4, 360-degree Orbit Arc',
      action: 'Macro swirl of condensed milk and coffee steam in Tyndall light rays',
      audio: 'Resonant spoon stirring rhythm, cozy rain ambience fading out'
    }
  ];

  const shotBlocks = shots.map(s => `[SHOT ${s.num} - ${s.transition}]
Keyframe Pinning: ${s.kfPin}
Camera & Optics: ${s.optics}
Physical Action: ${s.action}
Native Audio Track: [NATIVE AUDIO] ${s.audio}`).join('\n\n');

  return `[MASTER CONTINUITY LOCK]
${masterLock}

${shotBlocks}`;
}

/**
 * 3. GEMINI OMNI FLASH 1.1 & VEO 3.1 COMPILER (Google DeepMind 2026)
 * Continuous 24fps physical prose paragraph + Synchronized Native Audio Layer
 */
export function compileGeminiOmniVeoPrompt(data = {}) {
  const sceneProse = data.sceneProse || 'A cinematic 24fps sequence filmed on ARRI Alexa 65 Large Format with Cooke Anamorphic /i lenses at T1.4. The scene opens in a rain-drenched Saigon night alley where warm 3200K tungsten streetlamps cast glistening cyan and amber reflections across wet asphalt puddles. The camera executes a slow, deliberate forward tracking dolly toward a sidewalk cafe table where a vintage aluminum coffee phin rests on a thick glass. Physical raindrops realistically splash off the damp charcoal trench coat of a 45-year-old Vietnamese protagonist with salt-and-pepper stubble. As he sits down, the optical focus pulls with surgical precision from the dark falling coffee droplet into his reflective eyes. Spatial continuity is strictly preserved across the 180-degree axis as an opposite reverse angle reveals the delicate barista smiling softly under motivated neon glow.';
  const audioProse = data.audioProse || 'Synchronized Native Audio: Atmospheric steady tropical monsoon rain on zinc eaves, distant vintage scooter engines reverberating off narrow alley walls, tactile acoustic resonance of leather boots stepping in water puddles, sharp metallic click of a Zippo lighter, followed by a melancholic solo tenor saxophone and traditional Vietnamese Đàn Tranh chords softly emerging at 65 BPM. Dialogue lip-sync delivered in deep, quiet Vietnamese timbre: "Có những thứ đi qua giông bão... mới giữ được vị nguyên bản."';

  return `${sceneProse}\n\n${audioProse}`;
}

/**
 * 4. RUNWAY GEN-4.5 COMPILER (RunwayML 2026)
 * Pure Cause-and-Effect Sequenced Physical Motion (Stripped of static image junk in Image-to-Video)
 */
export function compileRunwayPrompt(data = {}, mode = 'image_to_video') {
  if (mode === 'image_to_video' || mode === 'img2vid') {
    const motionSequence = data.motionOnly || 'First, the camera executes a slow, deliberate push-in tracking movement toward the protagonist. Next, heavy raindrops splash realistically across the fabric of the coat while steam rises in delicate volumetric swirls from the coffee glass. Then, at 4 seconds, focus smoothly shifts from the foreground phin to the character\'s eyes as his gaze turns slightly toward the camera. Finally, a gentle hand gesture settles onto the wooden table surface with natural physical weight and inertia.';
    return `[RUNWAY GEN-4.5 - IMAGE-TO-VIDEO PURE MOTION DIRECTIVE]
${motionSequence}`;
  }

  const textToVid = data.textToVid || 'Wide 21:9 cinematic frame. In a rain-soaked Saigon street at night, warm neon reflections shimmer across wet pavement. First, the camera dollies forward in low-angle tracking. Next, the subject in a charcoal coat walks smoothly toward a rustic sidewalk table and sits down. Finally, the lens racks focus onto a steaming aluminum coffee phin while background rain cascades continuously.';
  return `[RUNWAY GEN-4.5 - TEXT-TO-VIDEO DIRECTIVE]
${textToVid}`;
}

/**
 * 5. MIDJOURNEY V8.1 / FLUX.2 COMPILER
 * Clean Native 2K Keyframes with --ar 21:9 --v 8.1 --style raw --s 150
 */
export function compileMidjourneyPrompt(data = {}) {
  const baseIdea = data.prompt || 'A cinematic wide establishing shot of a rainy Saigon sidewalk cafe at night, warm tungsten streetlamp rim lighting contrasting against deep cyan shadows, Vietnamese man in damp charcoal trench coat seated at rustic wooden table, vintage aluminum coffee phin dripping in crisp macro detail, shot on ARRI Alexa 65 Large Format with Cooke Anamorphic lens, organic Kodak Vision3 500T 35mm film grain, subtle horizontal streak flare, rich tactile skin textures';
  const cleaned = cleanTagSoup(baseIdea);
  const ar = data.ar || '21:9';
  const stylize = data.stylize || '150';

  return `${cleaned} --ar ${ar} --v 8.1 --style raw --s ${stylize}`;
}

/**
 * MASTER COMPILER: Tự động dịch toàn bộ Project Data v5.0 sang 5 nền tảng
 */
export function compileAllEngines(projectData = {}) {
  const meta = projectData.project_metadata || {};
  const vault = projectData.global_bible_vault || {};
  const optics = vault.master_optics_and_lighting || {};
  const timeline = projectData.multi_shot_timeline || [];
  const ar = meta.aspect_ratio || '21:9';

  // 1. Build Seedance 2.5
  const seedanceRefs = [
    { tag: '@Char_1', desc: vault.char_1?.visual_dna || 'Nam chính phong trần' },
    { tag: '@Prop_1', desc: vault.prop_1?.visual_dna || 'Phin cà phê nhôm' },
    { tag: '@Env_1', desc: vault.env_1?.visual_dna || 'Quán cà phê Sài Gòn mưa đêm' },
    { tag: '@Audio_1', desc: vault.audio_1?.description || 'Tiếng mưa và nhạc Jazz' }
  ];
  if (vault.char_2) {
    seedanceRefs.splice(1, 0, { tag: '@Char_2', desc: vault.char_2.visual_dna });
  }

  const seedanceShots = timeline.map(s => ({
    timecode: s.timecode,
    name: `SHOT ${s.shot_number}: ${s.shot_size}, ${s.camera_angle}, ${s.camera_movement}`,
    desc: `${s.spatial_blocking}. ${s.action_physics}. SFX: ${s.audio_layers?.foley_sfx || 'Natural room sound'}.`
  }));

  const dialogues = [];
  timeline.forEach(s => {
    if (s.audio_layers?.dialogue) {
      dialogues.push({
        speaker: s.audio_layers.dialogue.speaker,
        timecode: s.audio_layers.dialogue.timecode || s.timecode,
        text: s.audio_layers.dialogue.text
      });
    }
  });

  const seedance = compileSeedancePrompt({
    duration: '30s',
    aspectRatio: ar,
    references: seedanceRefs,
    shots: seedanceShots,
    dialogues
  });

  // 2. Build Kling 4.0
  const klingShots = timeline.map((s, idx) => ({
    num: s.shot_number,
    kfPin: `KF-${idx * 2 + 1} (${s.timecode.split(' - ')[0]}) & KF-${idx * 2 + 2} (${s.timecode.split(' - ')[1]})`,
    transition: s.transition_in || 'HARD CUT',
    optics: `${s.focal_length || optics.focal_length || '35mm'}, ${s.camera_angle}, ${s.camera_movement}`,
    action: `${s.spatial_blocking} — ${s.action_physics}`,
    audio: `${s.audio_layers?.foley_sfx || ''} ${s.audio_layers?.dialogue ? `| Dialogue: "${s.audio_layers.dialogue.text}"` : ''}`
  }));

  const kling = compileKlingPrompt({
    masterLock: `${optics.camera_body || 'ARRI Alexa 65'}, ${optics.lens_package || 'Cooke Anamorphic /i'}, ${optics.color_lut || 'Kodak Vision3 500T'}, 180-Degree Spatial Axis Compliant.`,
    shots: klingShots
  });

  // 3. Build Gemini Omni / Veo 3.1
  const timelineProse = timeline.map(s => `In shot ${s.shot_number} (${s.timecode}), using a ${s.shot_size} from a ${s.camera_angle}, the camera performs a ${s.camera_movement}. ${s.action_physics}`).join(' Then, ');
  const veoOmni = compileGeminiOmniVeoPrompt({
    sceneProse: `Filmed on ${optics.camera_body || 'ARRI Alexa 65'} with ${optics.lens_package || 'Cooke Anamorphic /i'} at ${optics.t_stop || 'T1.4'}. Lighting rig consists of ${optics.lighting_rig?.key_light?.desc || 'dramatic key light'} with ${optics.lighting_rig?.volumetrics || 'volumetric atmosphere'}. ${timelineProse}. Continuous photorealistic physical fluid and textile dynamics.`,
    audioProse: `Synchronized Native Audio: ${vault.audio_1?.description || 'Atmospheric rain and ambient jazz'}. Dynamic Foley: ${timeline.map(s => s.audio_layers?.foley_sfx).filter(Boolean).join('; ')}. Dialogue performance in native Vietnamese.`
  });

  // 4. Build Runway Gen-4.5
  const runwayMode = meta.runway_mode || 'image_to_video';
  const runwayT2V = compileRunwayPrompt({
    textToVid: `Widescreen ${ar}. ${timelineProse}. Master camera optics: ${optics.camera_body} with ${optics.lens_package}. Volumetric cinema lighting.`
  }, 'text_to_video');

  const runwayI2V = compileRunwayPrompt({
    motionOnly: `First, the camera initiates a ${timeline[0]?.camera_movement || 'slow push-in tracking'}. Next, natural environmental movement unfolds: ${timeline[0]?.action_physics || 'droplets and cloth move with gravity'}. Then, smooth transition occurs into the secondary action, concluding with stable character posture.`
  }, 'image_to_video');

  const runway = runwayMode === 'image_to_video' ? runwayI2V : runwayT2V;

  // 5. Build Midjourney V8.1
  const mjKeyframes = timeline.map((s, idx) => {
    return `// KEYFRAME ${idx + 1} (${s.timecode})\n` + compileMidjourneyPrompt({
      prompt: `${s.shot_size} of ${s.spatial_blocking}, ${s.action_physics}, shot on ${optics.camera_body || 'ARRI Alexa 65'} with ${optics.lens_package || 'Cooke Anamorphic /i'}, ${optics.color_lut || 'Kodak Vision3 500T'}, volumetric cinema lighting`,
      ar: ar,
      stylize: '150'
    });
  }).join('\n\n');

  // Manifest JSON v5.0
  const jsonManifest = {
    project_metadata: {
      project_name: meta.project_name || 'CinePrompt_Project',
      director: meta.director || 'Đạo Diễn Trungvt',
      engine: 'Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS)',
      aspect_ratio: ar,
      fps: '24fps',
      color_depth: '10-bit'
    },
    compiled_engines: {
      seedance_2_5: seedance,
      kling_4_0: kling,
      gemini_omni_veo_3_1: veoOmni,
      runway_gen_4_5: runway,
      midjourney_v8_1_keyframes: mjKeyframes
    }
  };

  return {
    seedance,
    kling,
    veoOmni,
    runway,
    midjourney: mjKeyframes,
    jsonManifest
  };
}
