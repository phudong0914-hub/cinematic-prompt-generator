/**
 * openCreatorBridge.js — OpenCreator / KrillinAI Automation Pipeline Bridge
 * ─────────────────────────────────────────────────────────────────────────
 * Tinh hoa kết nối Cine Prompt Pro v2.0 (Studio Director Brain)
 * với OpenCreator / KrillinAI (Local Video Automation & Multilingual Execution Engine).
 * 
 * Tính năng chính:
 * 1. OpenCreator Pipeline Manifest (JSON chuẩn Skill krillinai-pipeline & krillinai-cli)
 * 2. Smart Dubbing & TTS Emotion Directives (Nhịp WPM, độ sâu giọng đạo diễn, audio ducking)
 * 3. Bilingual Subtitles Generator (Phụ đề Song ngữ Việt - Anh chuẩn màn ảnh quốc tế)
 * 4. Competitor Video Ingestion Helper (yt-dlp & Whisper CLI extraction)
 */

export const OPENCREATOR_SKILLS = {
  pipeline: 'krillinai-pipeline',
  subtitle: 'krillinai-subtitle',
  tts: 'krillinai-tts',
  renderHorizontal: 'krillinai-render-horizontal',
  renderVertical: 'krillinai-render-vertical',
  cover: 'krillinai-cover',
  cli: 'krillinai-cli'
};

/**
 * Builds standard OpenCreator Execution Manifest for automated rendering
 */
export function buildOpenCreatorManifest(data = {}) {
  const {
    title = 'CinePrompt_Project',
    productName = 'Hero Product',
    aspectRatio = '16:9',
    duration = 15,
    scenes = [],
    director = 'Đạo Diễn Trungvt',
    contact = '0836.384.168 · cinemapromptpro@gmail.com'
  } = data;

  const isVertical = aspectRatio === '9:16';
  const renderSkill = isVertical ? OPENCREATOR_SKILLS.renderVertical : OPENCREATOR_SKILLS.renderHorizontal;

  const defaultScenes = [
    {
      sceneIndex: 1,
      timecode: '00:00 - 00:03',
      name: 'Scene 1: Visual Hook',
      prompt: 'Cinematic wide establishing shot, volumetric rim lighting, 24fps --ar ' + aspectRatio,
      voiceoverVI: 'Tương lai không chờ đợi một ai...',
      voiceoverEN: 'The future waits for no one...',
      tts: { emotion: 'intriguing', pacingWpm: 125 }
    },
    {
      sceneIndex: 2,
      timecode: '00:03 - 00:06',
      name: 'Scene 2: Tension & Detail',
      prompt: 'Medium close-up shot, chiaroscuro side lighting, anamorphic bokeh --ar ' + aspectRatio,
      voiceoverVI: 'Đột phá chi tiết — Chuẩn đẳng cấp điện ảnh.',
      voiceoverEN: 'Feel the absolute precision in every detail.',
      tts: { emotion: 'focused_confidence', pacingWpm: 135 }
    },
    {
      sceneIndex: 3,
      timecode: '00:06 - 00:09',
      name: 'Scene 3: Hero Climax',
      prompt: 'Dynamic action hero shot, whip pan motion, high contrast neon reflections --ar ' + aspectRatio,
      voiceoverVI: 'Trải nghiệm đỉnh cao — Thổi bùng mọi giác quan.',
      voiceoverEN: 'Redefining luxury. Crafted beyond perfection.',
      tts: { emotion: 'impactful_energy', pacingWpm: 145 }
    },
    {
      sceneIndex: 4,
      timecode: '00:09 - 00:15',
      name: 'Scene 4: Resolution & CTA',
      prompt: 'Expansive wide crane up retreat, sunset twilight horizon, memorable silhouette --ar ' + aspectRatio,
      voiceoverVI: `Khẳng định vị thế cùng ${productName} | ${director}`,
      voiceoverEN: `Step into the next era today with ${productName} | Director Trungvt`,
      tts: { emotion: 'inspirational_authority', pacingWpm: 130 }
    }
  ];

  const activeScenes = (scenes && scenes.length >= 4) ? scenes.map((s, idx) => ({
    sceneIndex: idx + 1,
    timecode: s.timecode || `${String(idx * 3).padStart(2, '0')}:00 - ${String((idx + 1) * 3).padStart(2, '0')}:00`,
    name: s.name || s.title || `Scene ${idx + 1}`,
    prompt: s.prompt || s.videoPrompt || 'Cinematic masterpiece 24fps',
    voiceoverVI: s.voiceoverVI || s.voiceover || `Phân cảnh ${idx + 1}`,
    voiceoverEN: s.voiceoverEN || `Scene ${idx + 1} voiceover narrative`,
    tts: { emotion: s.emotion || 'confident', pacingWpm: s.wpm || 135 }
  })) : defaultScenes;

  const manifest = {
    $schema: 'https://opencreator.krillinai.com/schemas/pipeline-v2.json',
    project_metadata: {
      project_name: title,
      product: productName,
      director: director,
      contact: contact,
      created_with: 'Cine Prompt Pro v2.0 (Studio Engine)',
      export_version: '2.5.0',
      timestamp: new Date().toISOString()
    },
    execution_plan: {
      engine: 'opencreator-runtime',
      stages: [
        {
          stage_id: 'stage_01_ingest',
          skill: OPENCREATOR_SKILLS.cli,
          action: 'validate_assets_and_environment'
        },
        {
          stage_id: 'stage_02_video_gen',
          skill: OPENCREATOR_SKILLS.pipeline,
          model_targets: ['Google Veo 3', 'Sora 2', 'Wan 2.5'],
          aspect_ratio: aspectRatio,
          fps: 24,
          resolution: '1080p'
        },
        {
          stage_id: 'stage_03_smart_dubbing',
          skill: OPENCREATOR_SKILLS.tts,
          enabled: true,
          voice_engine: 'OpenCreator Smart Dubbing (Edge TTS / Whisper Context)',
          voice_profile: 'Director Deep Cinematic Baritone',
          ducking_background_music_db: -18,
          languages: ['vi-VN', 'en-US']
        },
        {
          stage_id: 'stage_04_bilingual_subtitles',
          skill: OPENCREATOR_SKILLS.subtitle,
          enabled: true,
          layout: 'stacked_bilingual',
          primary_language: 'vi',
          secondary_language: 'en',
          style: {
            font_family: 'Inter / Sigmar',
            primary_color: '#FFFFFF',
            secondary_color: '#38BDF8',
            outline_color: '#000000',
            outline_width: 2
          }
        },
        {
          stage_id: 'stage_05_final_render',
          skill: renderSkill,
          aspect_ratio: aspectRatio,
          output_format: 'mp4',
          codec: 'h264'
        }
      ]
    },
    scenes: activeScenes
  };

  return manifest;
}

/**
 * Generates Bilingual Subtitles (.SRT format with Vietnamese on top, English below)
 */
export function generateBilingualSRT(scenes = []) {
  if (!scenes || !scenes.length) {
    scenes = [
      { start: '00:00:00,000', end: '00:00:03,000', vi: 'Tương lai không chờ đợi một ai...', en: 'The future waits for no one...' },
      { start: '00:00:03,000', end: '00:00:06,000', vi: 'Đột phá chi tiết — Chuẩn đẳng cấp điện ảnh.', en: 'Feel the absolute precision in every detail.' },
      { start: '00:00:06,000', end: '00:00:09,000', vi: 'Trải nghiệm đỉnh cao — Thổi bùng mọi giác quan.', en: 'Redefining luxury. Crafted beyond perfection.' },
      { start: '00:00:09,000', end: '00:00:15,000', vi: 'Khẳng định vị thế cùng chúng tôi | Đạo Diễn Trungvt', en: 'Step into the next era today | Director Trungvt' }
    ];
  }

  let srt = '';
  scenes.forEach((s, idx) => {
    const num = idx + 1;
    const start = s.start || `00:00:${String(idx * 3).padStart(2, '0')},000`;
    const end = s.end || `00:00:${String((idx + 1) * 3).padStart(2, '0')},000`;
    const viText = s.vi || s.voiceoverVI || '';
    const enText = s.en || s.voiceoverEN || '';

    srt += `${num}\n${start} --> ${end}\n${viText}\n${enText}\n\n`;
  });

  return srt.trim() + '\n';
}

/**
 * Generates CLI commands for yt-dlp & Whisper audio extraction from competitor video
 */
export function generateCompetitorExtractionCommands(videoUrl = 'https://www.youtube.com/watch?v=EXAMPLE') {
  return `# ════════════════════════════════════════════════════════════════
# 🤖 OPENCREATOR / KRILLINAI COMPETITOR VIDEO INGESTION SCRIPT
# Tự động tải video, tách âm thanh chất lượng cao và bóc transcript
# ════════════════════════════════════════════════════════════════

# 1. Tải Video & Tách Audio WAV bằng yt-dlp:
yt-dlp -x --audio-format wav --audio-quality 0 -o "competitor_audio.%(ext)s" "${videoUrl}"

# 2. Bóc Tách Phụ Đề / Transcript Bằng Whisper AI:
whisper "competitor_audio.wav" --model medium --language vi --output_format srt

# 3. Lệnh Tải Video MP4 Gốc Độ Nét Cao Nhất:
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "competitor_video.%(ext)s" "${videoUrl}"
`;
}
