/**
 * urlToVideoReview.js — URL to Video Review & Intro Studio Engine
 * ──────────────────────────────────────────────────────────────────────────
 * Tinh hoa chuyển đổi URL (Video Link hoặc GitHub/GitLab Repo Link) thành
 * kịch bản review, storyboard điện ảnh, giọng đọc AI và timeline dựng phim hoàn chỉnh.
 * 
 * Kiến trúc:
 * 1. URL Intelligence & Platform Detection (YouTube, TikTok, Facebook, GitHub, GitLab)
 * 2. Repo Blueprint Extractor (Tư duy oss-blueprint: Tech stack, killer features, pain-point)
 * 3. Video Competitor Ingestion (yt-dlp + Whisper CLI commands + viral structure)
 * 4. 4-Stage Director Review Script (Hook 3s, 2.5D Parallax Breakdown, Deep Evaluation, Loop CTA)
 * 5. Production Export Engine (Bilingual SRT, CapCut Draft markers, OpenCreator Manifest, Vault)
 * 
 * Chuẩn Đạo Diễn Trungvt · Cine Prompt Pro v2.5 / v3.0
 */

import { qwenOmniVoiceEngine } from './qwenOmniVoiceEngine.js';
import { buildOpenCreatorManifest, generateBilingualSRT } from './openCreatorBridge.js';

export const URL_TYPES = {
  YOUTUBE_VIDEO: 'youtube_video',
  YOUTUBE_SHORTS: 'youtube_shorts',
  TIKTOK_VIDEO: 'tiktok_video',
  FACEBOOK_REEL: 'facebook_reel',
  GITHUB_REPO: 'github_repo',
  GITLAB_REPO: 'gitlab_repo',
  GENERIC_WEB: 'generic_web'
};

export const REVIEW_STYLES = {
  DIRECTOR_PREMIUM: {
    id: 'director_premium',
    name: 'Đạo Diễn Điện Ảnh (Luxury & Cinematic)',
    tone: 'Sâu lắng, quyền lực, nhấn mạnh tính thẩm mỹ và chuẩn mực chi tiết',
    wpm: 130,
    voiceId: 'baritone-master',
    bgmType: 'Cinematic Orchestral Ambient'
  },
  TECH_EXPERT: {
    id: 'tech_expert',
    name: 'Chuyên Gia Công Nghệ (Sharp & Insightful)',
    tone: 'Sắc bén, logic, tập trung vào kiến trúc, benchmark và tính năng sát thủ',
    wpm: 145,
    voiceId: 'quân-analyst',
    bgmType: 'Modern Cyber Glitch / Tech Synth'
  },
  VIRAL_CREATOR: {
    id: 'viral_creator',
    name: 'Nhà Sáng Tạo Viral (Hooking & Dynamic)',
    tone: 'Năng lượng cao, nhịp nhanh, cuốn hút từ giây đầu tiên, ngôn từ chuyển đổi mạnh',
    wpm: 155,
    voiceId: 'tina-anchor',
    bgmType: 'Upbeat Lo-Fi / High Energy Bass'
  },
  TVC_COMMERCIAL: {
    id: 'tvc_commercial',
    name: 'TVC Quảng Cáo & Giới Thiệu Thương Hiệu',
    tone: 'Trang trọng, thuyết phục, khẳng định vị thế và kêu gọi hành động quyết đoán',
    wpm: 135,
    voiceId: 'vũ-authority',
    bgmType: 'Inspiring Corporate Piano & Bass'
  }
};

/**
 * 1. Phân loại loại URL
 */
export function detectUrlType(urlStr = '') {
  if (!urlStr || typeof urlStr !== 'string') return URL_TYPES.GENERIC_WEB;
  const url = urlStr.trim().toLowerCase();

  if (url.includes('github.com/')) return URL_TYPES.GITHUB_REPO;
  if (url.includes('gitlab.com/')) return URL_TYPES.GITLAB_REPO;
  if (url.includes('youtube.com/shorts/') || url.includes('/shorts/')) return URL_TYPES.YOUTUBE_SHORTS;
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) return URL_TYPES.YOUTUBE_VIDEO;
  if (url.includes('tiktok.com/')) return URL_TYPES.TIKTOK_VIDEO;
  if (url.includes('facebook.com/reel') || url.includes('fb.watch')) return URL_TYPES.FACEBOOK_REEL;

  return URL_TYPES.GENERIC_WEB;
}

/**
 * 2. Trích xuất Metadata cơ bản từ URL
 */
export function parseUrlMetadata(urlStr = '') {
  const type = detectUrlType(urlStr);
  const raw = (urlStr || '').trim();

  const meta = {
    url: raw,
    type: type,
    isRepo: type === URL_TYPES.GITHUB_REPO || type === URL_TYPES.GITLAB_REPO,
    isVideo: [URL_TYPES.YOUTUBE_VIDEO, URL_TYPES.YOUTUBE_SHORTS, URL_TYPES.TIKTOK_VIDEO, URL_TYPES.FACEBOOK_REEL].includes(type),
    identifier: '',
    owner: '',
    repoName: '',
    cleanTitle: ''
  };

  try {
    if (meta.isRepo) {
      // Ví dụ: https://github.com/phudong0914-hub/cinematic-prompt-generator
      const cleanPath = raw.replace(/^https?:\/\/[^/]+\//, '').replace(/\.git$/, '').split('?')[0];
      const parts = cleanPath.split('/').filter(Boolean);
      meta.owner = parts[0] || 'developer';
      meta.repoName = parts[1] || 'cinema-repo';
      meta.identifier = `${meta.owner}/${meta.repoName}`;
      meta.cleanTitle = meta.repoName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    } else if (meta.isVideo) {
      if (type === URL_TYPES.YOUTUBE_VIDEO || type === URL_TYPES.YOUTUBE_SHORTS) {
        let videoId = '';
        if (raw.includes('youtu.be/')) {
          videoId = raw.split('youtu.be/')[1]?.split('?')[0] || '';
        } else if (raw.includes('/shorts/')) {
          videoId = raw.split('/shorts/')[1]?.split('?')[0] || '';
        } else if (raw.includes('v=')) {
          videoId = new URL(raw).searchParams.get('v') || '';
        }
        meta.identifier = videoId || 'youtube_stream';
        meta.cleanTitle = `Video Review [${meta.identifier.slice(0, 8)}]`;
      } else if (type === URL_TYPES.TIKTOK_VIDEO) {
        meta.identifier = raw.split('/video/')[1]?.split('?')[0] || 'tiktok_clip';
        meta.cleanTitle = `TikTok Viral Review [${meta.identifier.slice(0, 8)}]`;
      } else {
        meta.identifier = 'social_video';
        meta.cleanTitle = 'Video Social Review';
      }
    } else {
      meta.identifier = 'web_source';
      meta.cleanTitle = 'Web Product Review';
    }
  } catch (err) {
    meta.identifier = 'source';
    meta.cleanTitle = 'Project Source';
  }

  return meta;
}

/**
 * 3. Bóc tách dữ liệu tri thức từ Repo hoặc Video
 */
export async function extractSourceIntelligence(urlStr = '', options = {}) {
  const meta = parseUrlMetadata(urlStr);
  const style = REVIEW_STYLES[options.styleKey] || REVIEW_STYLES.DIRECTOR_PREMIUM;
  const duration = options.duration || 30; // 15, 30, 60s

  let intel = {
    meta,
    title: meta.cleanTitle || 'Sản Phẩm Đột Phá',
    subtitle: '',
    painPoint: '',
    killerFeatures: [],
    verdict: '',
    targetAudience: '',
    tags: []
  };

  if (meta.isRepo) {
    // Repo Mode — Áp dụng tư duy oss-blueprint
    let readmeText = '';
    
    // Thử fetch public README nếu môi trường trình duyệt / mạng cho phép
    if (meta.type === URL_TYPES.GITHUB_REPO && typeof fetch !== 'undefined') {
      try {
        const apiUrl = `https://raw.githubusercontent.com/${meta.owner}/${meta.repoName}/main/README.md`;
        const res = await fetch(apiUrl, { method: 'GET' });
        if (res.ok) {
          readmeText = await res.text();
        }
      } catch (e) {
        // Fallback gracefully nếu không kết nối được
      }
    }

    const hasPromptKeywords = (meta.repoName + readmeText).toLowerCase().includes('prompt') || (meta.repoName + readmeText).toLowerCase().includes('cinema');
    const hasAiKeywords = (meta.repoName + readmeText).toLowerCase().includes('ai') || (meta.repoName + readmeText).toLowerCase().includes('model');

    intel.title = `${meta.cleanTitle}`;
    intel.subtitle = hasPromptKeywords
      ? 'Cỗ Máy Đạo Diễn Điện Ảnh & Tự Động Hóa Sáng Tạo'
      : (hasAiKeywords ? 'Kiến Trúc AI Đột Phá Cho Nhà Phát Triển Hiện Đại' : 'Giải Pháp Mã Nguồn Mở Tối Ưu Hiệu Năng');
    
    intel.painPoint = hasPromptKeywords
      ? 'Bạn mất hàng giờ chỉnh từng câu lệnh prompt nhưng video AI vẫn giả tạo và thiếu cảm xúc điện ảnh?'
      : 'Việc tích hợp phức tạp và tiêu tốn hàng tuần lễ để dựng xong một hệ thống xử lý hoàn chỉnh?';

    intel.killerFeatures = [
      {
        name: 'Kiến Trúc IPO 3 Cột Chuẩn Mực',
        desc: 'Tách bạch Đầu vào (Director Controls) - Xử lý (Atomic Engine) - Xuất bản (Multi-platform Export)',
        visualCue: 'Sơ đồ luồng dữ liệu 3 cột phát sáng neon neon cyan & amber'
      },
      {
        name: 'Động Cơ Chuyển Động Vi Giây (f2us)',
        desc: 'Khớp mốc thời gian CapCut & Remotion không một khung hình lệch (Zero Segment Overlap)',
        visualCue: 'Timeline CapCut phóng to với các keyframe chuẩn xác đến từng microsecond'
      },
      {
        name: 'Kho Bảo Mật Độc Bản (Director Vault)',
        desc: 'Lưu trữ tài sản âm thanh, font, video bí mật trên trình duyệt với tiêu chuẩn Zero-Leak',
        visualCue: 'Két sắt vàng kim 3D bung mở kho tài nguyên độc quyền của Đạo Diễn'
      }
    ];

    intel.verdict = 'Một kiến trúc đỉnh cao xứng đáng được đưa vào pipeline sản xuất của mọi studio và kỹ sư sáng tạo!';
    intel.targetAudience = 'Nhà làm phim AI, Đạo diễn, Content Creator và Kỹ sư phần mềm';
    intel.tags = ['#OpenSource', '#GitHub', '#AIStudio', '#TechReview', '#ĐạoDiễnTrungvt'];

  } else {
    // Video Mode — Áp dụng tư duy Viral Analyzer & Competitor Ingestion
    intel.title = `${meta.cleanTitle}`;
    intel.subtitle = 'Bóc Tách Nghệ Thuật Kể Chuyện & Kỹ Thuật Đạo Diễn Đỉnh Cao';
    intel.painPoint = 'Tại sao những video triệu view lại giữ chân khán giả từng giây mà video của bạn người ta lướt qua sau 2 giây?';
    
    intel.killerFeatures = [
      {
        name: 'Hook 3 Giây Bắt Thóp Tâm Lý',
        desc: 'Mở màn với hình ảnh cận cảnh giàu tính biểu tượng kết hợp câu hỏi đánh trúng khao khát',
        visualCue: 'Góc máy Macro cực đại với ánh sáng hổ phách và khói mờ huyền ảo'
      },
      {
        name: 'Nhịp Cắt & Đổi Khung Dưới 3 Giây',
        desc: 'Luật nhịp điệu khắt khe: Không khung hình nào đứng yên quá 3s, xen kẽ B-roll thực tế',
        visualCue: 'Hiệu ứng Whip Pan chuyển cảnh nhanh kèm tia lóe sáng điện ảnh'
      },
      {
        name: 'Kêu Gọi Hành Động Khép Vòng (Infinity Loop)',
        desc: 'Đưa người xem trở lại câu mở đầu một cách tự nhiên, nhân đôi số lượt xem lặp lại',
        visualCue: 'Màn hình mờ dần về đen rồi lập tức kết nối nhịp nhàng về giây 00:00'
      }
    ];

    intel.verdict = 'Nắm vững công thức này, bạn hoàn toàn có thể nhân bản bất kỳ định dạng triệu view nào!';
    intel.targetAudience = 'Nhà sáng tạo nội dung TikTok, Reels, Shorts và đạo diễn TVC';
    intel.tags = ['#VideoReview', '#ViralHooks', '#CinematicTVC', '#CapCutMaster', '#ĐạoDiễnTrungvt'];
  }

  return intel;
}

/**
 * 4. Sinh Kịch Bản Phân Cảnh Review Chuẩn Đạo Diễn (4 Scenes)
 */
export function buildDirectorReviewStoryboard(intelligence, options = {}) {
  const { meta, title, painPoint, killerFeatures, verdict, tags } = intelligence;
  const style = REVIEW_STYLES[options.styleKey] || REVIEW_STYLES.DIRECTOR_PREMIUM;
  const duration = Number(options.duration) || 30;
  const isRepo = meta.isRepo;

  // Tính toán thời lượng từng phân cảnh theo tỷ lệ vàng (Hook 15%, Core 40%, Climax 30%, CTA 15%)
  const hookDuration = Math.max(3, Math.round(duration * 0.15));
  const coreDuration = Math.round(duration * 0.40);
  const climaxDuration = Math.round(duration * 0.30);
  const ctaDuration = Math.max(3, duration - hookDuration - coreDuration - climaxDuration);

  const t1 = `00:00 - 00:${String(hookDuration).padStart(2, '0')}`;
  const t2 = `00:${String(hookDuration).padStart(2, '0')} - 00:${String(hookDuration + coreDuration).padStart(2, '0')}`;
  const t3 = `00:${String(hookDuration + coreDuration).padStart(2, '0')} - 00:${String(duration - ctaDuration).padStart(2, '0')}`;
  const t4 = `00:${String(duration - ctaDuration).padStart(2, '0')} - 00:${String(duration).padStart(2, '0')}`;

  const scenes = [
    {
      sceneIndex: 1,
      name: 'Màn 1: Cú Đấm Mở Đầu (The 3-Second Viral Hook)',
      timecode: t1,
      duration: hookDuration,
      visualPrompt: isRepo
        ? `Cinematic extreme close-up macro of glowing cybernetic server interface with golden amber data streams, atmospheric anamorphic lens flare, dark luxury aesthetic, 24fps --ar 9:16 --v 6.1`
        : `Cinematic macro shot of deep amber liquid droplet suspended over dark rose, moody teal reflections, soft drifting vapor, anamorphic streak flare --ar 9:16 --v 6.1`,
      motionCraft: 'Whip Zoom Punch (100% -> 130% -> 100% Keyframe Scale)',
      cameraAngle: 'Extreme Macro Close-up, Dutch Tilt 5°',
      lighting: 'Chiaroscuro Amber Rim Light + Moody Teal Fill',
      voiceoverVI: isRepo
        ? `Có phải bạn đang tìm kiếm giải pháp đỉnh cao để thống trị dự án tiếp theo? Đừng lướt qua repo này!`
        : `Có phải bạn tự hỏi điều gì tạo nên sức hút của những thước phim triệu view? Bí mật nằm ngay đây!`,
      voiceoverEN: isRepo
        ? `Are you searching for the ultimate breakthrough for your next project? Do not miss this repo!`
        : `Ever wondered what makes a cinematic viral masterpiece truly unforgettable? The secret starts now!`,
      subtitleEmphasis: isRepo ? 'ĐỪNG BỎ LỠ REPO NÀY' : 'BÍ MẬT TRIỆU VIEW',
      sfx: 'Sub-bass whoosh boom + subtle digital glitch click',
      brollSuggestion: isRepo ? 'Cảnh gõ phím cơ công nghệ ban đêm / màn hình code chuyển động' : 'Cảnh quay cận giọt nước hoặc biểu cảm người xem sửng sốt',
      tts: { emotion: 'intriguing_hook', pacingWpm: style.wpm }
    },
    {
      sceneIndex: 2,
      name: 'Màn 2: Bóc Tách Tính Năng & Sức Mạnh Cốt Lõi (The Core Breakdown)',
      timecode: t2,
      duration: coreDuration,
      visualPrompt: isRepo
        ? `Three-dimensional floating glass cards displaying holographic code architecture, golden circuit lines, sleek matte black background, studio lighting, unreal engine 5 render --ar 9:16`
        : `Dynamic split screen fast-paced editing showing behind-the-scenes camera movement and color grading wheel, high-end studio gear, amber and slate lighting --ar 9:16`,
      motionCraft: '2.5D Parallax Kinetic Spring Flip (Card Offset 0.3s)',
      cameraAngle: 'Medium Shot with Orbiting Camera Drift',
      lighting: 'Volumetric Soft Studio Overhead Light',
      voiceoverVI: isRepo
        ? `Khám phá ${title}: Tích hợp ${killerFeatures[0]?.name || 'kiến trúc đột phá'}, ${killerFeatures[1]?.name || 'tối ưu vi giây'}, mang lại hiệu suất vượt bậc.`
        : `Xem cách họ phối hợp nhịp cắt dưới 3 giây, góc máy cận cảnh chi tiết và hệ thống âm thanh micro-sfx đẩy cảm xúc lên tột cùng.`,
      voiceoverEN: isRepo
        ? `Discover ${title}: Powered by ${killerFeatures[0]?.name || 'atomic architecture'}, built for effortless precision.`
        : `Observe the strict 3-second pacing rule, macro textures, and layered soundscapes that evoke instant emotion.`,
      subtitleEmphasis: isRepo ? 'HIỆU SUẤT ĐỈNH CAO' : 'NHỊP ĐIỆU HOÀN HẢO',
      sfx: 'Soft paper swoosh flip + UI tick notifications',
      brollSuggestion: isRepo ? 'Thẻ liệt kê 3 tính năng xuất hiện trượt từ dưới lên kèm bóng đổ mờ' : 'Minh họa góc máy quay phim điện ảnh ARRI Alexa',
      tts: { emotion: 'focused_confidence', pacingWpm: style.wpm }
    },
    {
      sceneIndex: 3,
      name: 'Màn 3: Trải Nghiệm Thực Tế & Thẩm Định Chuyên Gia (The Deep Verdict)',
      timecode: t3,
      duration: climaxDuration,
      visualPrompt: isRepo
        ? `Hero tech product mockup floating gracefully in dark studio space, subtle golden particle fog, clean reflection on glossy pedestal, high-fashion tech aesthetic --ar 9:16`
        : `Cinematic portrait of East Asian director in tailored black tuxedo, confident gaze, chiaroscuro Rembrandt lighting, filmic grain, 35mm lens --ar 9:16`,
      motionCraft: 'Isometric Slow Drift with Subtle Focus Pull',
      cameraAngle: 'Low-angle Hero Portrait / Showcase',
      lighting: 'High-contrast Golden Amber Key Light',
      voiceoverVI: isRepo
        ? `${verdict} Từ mã nguồn tới trải nghiệm thực thi đều đạt chuẩn mực cao nhất của giới chuyên nghiệp.`
        : `${verdict} Đây chính là tiêu chuẩn mà mọi đạo diễn và nhà sáng tạo đều khao khát vươn tới.`,
      voiceoverEN: isRepo
        ? `${title} sets a new benchmark in modern development. Pure mastery in every line.`
        : `This is the undisputed signature of cinematic luxury that commands immediate respect.`,
      subtitleEmphasis: isRepo ? 'CHUẨN MỰC CHUYÊN NGHIỆP' : 'ĐẲNG CẤP ĐIỆN ẢNH',
      sfx: 'Deep warm cello riser + subtle cinematic cloth rustle',
      brollSuggestion: isRepo ? 'Đồ thị benchmark hiệu năng hoặc màn hình thành phẩm chạy mượt' : 'Góc nghiêng nhân vật quyền lực mỉm cười tự tin',
      tts: { emotion: 'authoritative_climax', pacingWpm: style.wpm }
    },
    {
      sceneIndex: 4,
      name: 'Màn 4: Kêu Gọi Hành Động & Vòng Lặp Vô Tận (CTA & Infinity Loop)',
      timecode: t4,
      duration: ctaDuration,
      visualPrompt: isRepo
        ? `Minimalist luxury end-card with gold metallic QR code and GitHub octocat emblem on black brushed titanium, glowing button "Star Repo", elegant fade out --ar 9:16`
        : `Luxury perfume bottle / product end-card with elegant gold typography, glowing amber rim, pristine black marble background, official seal --ar 9:16`,
      motionCraft: 'Fade to Black at -1.5s, Outro Music Swell, Seamless Loop to 00:00',
      cameraAngle: 'Straight-on Graphic Center Frame',
      lighting: 'Accent Spotlight on Call-To-Action Element',
      voiceoverVI: isRepo
        ? `Khám phá ngay tại link đầu trang. Star repo ủng hộ tác giả và trải nghiệm ngay hôm nay!`
        : `Khám phá ngay tại link đầu trang. Đẳng cấp nằm trong tay bạn. Và...`,
      voiceoverEN: isRepo
        ? `Explore now at the bio link. Star the repo on GitHub and elevate your stack today!`
        : `Explore now at the link in bio. The signature of power is yours. And...`,
      subtitleEmphasis: isRepo ? 'KHÁM PHÁ NGAY LINK ĐẦU TRANG' : 'TRẢI NGHIỆM NGAY TẠI BIO',
      sfx: 'Outro brass chord swell + crisp logo chime + 1.5s silence before loop',
      brollSuggestion: isRepo ? 'Khung End-Card có QR Code, nút Star GitHub và tên Đạo Diễn Trungvt' : 'End-card thương hiệu với mã QR và logo chính thức',
      tts: { emotion: 'resolute_call_to_action', pacingWpm: style.wpm }
    }
  ];

  return {
    title: `Review: ${title}`,
    productOrProject: title,
    style: style,
    durationTotal: duration,
    scenes: scenes,
    tags: tags,
    director: 'Đạo Diễn Trungvt',
    meta: meta
  };
}

/**
 * 5. Xuất Gói Dựng Phim Đầy Đủ (Production Master Package)
 */
export function generateReviewProductionPackage(storyboard) {
  const { title, productOrProject, style, durationTotal, scenes, meta } = storyboard;

  // 1. OpenCreator Manifest
  const openCreatorManifest = buildOpenCreatorManifest({
    title: title,
    productName: productOrProject,
    aspectRatio: '9:16',
    duration: durationTotal,
    scenes: scenes.map(s => ({
      sceneIndex: s.sceneIndex,
      timecode: s.timecode,
      name: s.name,
      prompt: s.visualPrompt,
      voiceoverVI: s.voiceoverVI,
      voiceoverEN: s.voiceoverEN,
      tts: s.tts
    }))
  });

  // 2. Bilingual SRT
  const bilingualSrt = generateBilingualSRT(scenes.map((s, idx) => {
    const startSec = idx === 0 ? 0 : scenes.slice(0, idx).reduce((acc, curr) => acc + curr.duration, 0);
    const endSec = startSec + s.duration;
    return {
      start: `00:00:${String(startSec).padStart(2, '0')},000`,
      end: `00:00:${String(endSec).padStart(2, '0')},000`,
      vi: s.voiceoverVI,
      en: s.voiceoverEN
    };
  }));

  // 3. CapCut EDL / Microsecond Timeline (f2us format)
  let currentTimeUs = 0;
  const capcutTimeline = {
    project_name: title,
    canvas_ratio: '9:16',
    fps: 30,
    time_scale: 1000000, // 1s = 1,000,000 us
    tracks: [
      {
        type: 'video_shots',
        segments: scenes.map(s => {
          const durationUs = s.duration * 1000000;
          const seg = {
            scene: s.name,
            target_in: currentTimeUs,
            target_out: currentTimeUs + durationUs,
            duration: durationUs,
            visual_prompt: s.visualPrompt,
            motion: s.motionCraft
          };
          currentTimeUs += durationUs;
          return seg;
        })
      },
      {
        type: 'audio_voiceover',
        voice_engine: 'Qwen-Omni Voice Library',
        voice_id: style.voiceId,
        segments: scenes.map(s => ({
          scene: s.name,
          text: s.voiceoverVI,
          emotion: s.tts.emotion,
          wpm: s.tts.pacingWpm
        }))
      },
      {
        type: 'subtitles_sigmar',
        font: 'Sigmar',
        style: 'UPPERCASE_BOLD_HIGHLIGHT',
        segments: scenes.map(s => ({
          timecode: s.timecode,
          emphasis_text: s.subtitleEmphasis,
          full_text: s.voiceoverVI
        }))
      }
    ]
  };

  // 4. CLI Ingestion Script
  const cliScript = meta.isVideo
    ? `# 🤖 TẢI VIDEO & TRÍCH XUẤT AUDIO BẰNG YT-DLP & WHISPER
yt-dlp -x --audio-format wav --audio-quality 0 -o "source_audio.%(ext)s" "${meta.url}"
whisper "source_audio.wav" --model medium --language vi --output_format srt
`
    : `# 🤖 TẢI & PHÂN TÍCH REPO GITHUB BẰNG GIT & OSS-BLUEPRINT
git clone --depth 1 "${meta.url}" "repo_source"
cd "repo_source"
# Kiểm tra giấy phép & cấu trúc:
cat README.md | head -n 50
`;

  return {
    storyboard,
    openCreatorManifest,
    bilingualSrt,
    capcutTimeline,
    cliScript,
    summaryMarkdown: generateReviewMarkdownDocumentation(storyboard)
  };
}

/**
 * 6. Tạo Tài Liệu Đạo Diễn Markdown Chi Tiết
 */
export function generateReviewMarkdownDocumentation(storyboard) {
  const { title, productOrProject, style, durationTotal, scenes, tags, director } = storyboard;

  return `# 🎬 BẢN THIẾT KẾ SẢN XUẤT VIDEO REVIEW & GIỚI THIỆU HOÀN CHỈNH
> **Dự án**: ${title}  
> **Phong cách**: ${style.name} (${style.tone})  
> **Thời lượng**: ${durationTotal} Giây · Tỷ lệ: 9:16 (Dọc) · 24fps  
> **Đạo diễn**: ${director} · Chuẩn Cine Prompt Pro v2.5 / v3.0  
> **Hashtags**: ${tags.join(' ')}

---

## ⏱️ PHÂN BỔ TIMELINE & BẢNG PHÂN CẢNH CHI TIẾT

${scenes.map(s => `### 📍 ${s.name} (${s.timecode} · ${s.duration}s)
- **Góc máy & Chuyển động**: ${s.cameraAngle} | ${s.motionCraft}
- **Ánh sáng (Lighting)**: ${s.lighting}
- **Lời bình (Voiceover - VI)**: "${s.voiceoverVI}"
- **Lời bình (Voiceover - EN)**: "${s.voiceoverEN}"
- **Chữ nhấn màn hình (Font Sigmar)**: **${s.subtitleEmphasis}**
- **Hiệu ứng âm thanh (SFX)**: ${s.sfx}
- **Tư liệu B-roll đề xuất**: ${s.brollSuggestion}
- **Prompt sinh hình ảnh/video**:
\`\`\`text
${s.visualPrompt}
\`\`\`
`).join('\n---\n\n')}

---

## 🎙️ THÔNG SỐ ÂM THANH & LỒNG TIẾNG (QWEN-OMNI VOICE)
- **Giọng đọc đề xuất**: ${style.voiceId} (Nhịp độ: ${style.wpm} WPM)
- **Nhạc nền (BGM)**: ${style.bgmType} (Hạ âm lượng -18dB khi có giọng nói)
- **Hiệu ứng chuyển cảnh**: Duy nhất 1 kiểu Flash Zoom nhẹ + Swoosh khi mở cảnh mới.
- **Vòng lặp Seamless**: Hạ sáng Fade to Black ở -1.5s cuối, nối về giây 00:00 mượt mà.

---
*Xuất bản tự động bởi Cine Prompt Pro Studio Engine — Bản quyền Đạo Diễn Trungvt.*
`;
}
