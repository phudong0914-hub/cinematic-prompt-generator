/**
 * remotionBridge.js — Remotion Code-to-Video Framework Bridge
 * ─────────────────────────────────────────────────────────────────────────────
 * Mảnh ghép "Cơ bắp số 3": Dựng video bằng code React/TypeScript,
 * xuất timeline chính xác từng micro-second và từng frame (30fps / 60fps).
 * 
 * Chuyển đổi 157 Motion Craft Recipes (Đạo Diễn Trungvt) sang:
 * - <Sequence> components
 * - spring() animations cho Kinetic Spring Flip, Whip Zoom Punch
 * - interpolate() cho 2.5D Parallax camera drift
 * - Sigmar IN HOA Karaoke Subtitle renderer
 * 
 * Tác giả: Đạo Diễn Trungvt (Cine Prompt Pro Studio OS)
 */

export class RemotionBridge {
  constructor(config = {}) {
    this.fps = config.fps || 30;
    this.aspectRatio = config.aspectRatio || '9:16';
    this.width = this.aspectRatio === '9:16' ? 1080 : 1920;
    this.height = this.aspectRatio === '9:16' ? 1920 : 1080;
  }

  /**
   * Chuyển đổi giây sang frame của Remotion
   */
  secToFrames(seconds) {
    return Math.round(seconds * this.fps);
  }

  /**
   * Tạo Props JSON truyền vào Root Remotion
   */
  generateRemotionCompositionProps({
    title = "Cine_Motion_Video",
    scenes = [],
    audioSrc = "voiceover.mp3",
    bgmSrc = "bgm.mp3"
  } = {}) {
    let currentFrame = 0;
    const sequences = scenes.map((s, idx) => {
      const durationSec = s.durationSec || 4.0;
      const durationInFrames = this.secToFrames(durationSec);
      const fromFrame = currentFrame;
      currentFrame += durationInFrames;

      return {
        id: `seq_${idx + 1}`,
        title: s.name || `Scene ${idx + 1}`,
        from: fromFrame,
        durationInFrames,
        visualPrompt: s.prompt || '',
        motionRecipe: s.motionRecipe || (idx === 0 ? 'rec_whip_zoom_punch' : 'rec_parallax_25d'),
        imageSrc: s.imageSrc || `scene_${idx + 1}.jpg`,
        subtitle: {
          text: s.voiceoverVI || s.script || '',
          color: '#FFFFFF',
          highlightColor: '#10B981', // Emerald green Đạo Diễn Trungvt
          fontFamily: 'Sigmar, Arial Black'
        },
        cardList: s.cardList || []
      };
    });

    const totalDurationInFrames = currentFrame;

    return {
      compositionId: 'CineMainComposition',
      width: this.width,
      height: this.height,
      fps: this.fps,
      durationInFrames: totalDurationInFrames,
      defaultProps: {
        title,
        director: 'Đạo Diễn Trungvt',
        audioSrc,
        bgmSrc,
        sequences
      }
    };
  }

  /**
   * Sinh file config remotion.config.ts
   */
  generateRemotionConfigFile() {
    return `import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setChromiumOpenGlRenderer('angle');
Config.setConcurrency(4);
`;
  }

  /**
   * Tạo câu lệnh render CLI chính xác
   */
  generateRenderCommand(propsJsonPath = 'remotion_props.json', outVideoPath = 'out.mp4') {
    return `npx remotion render src/index.ts CineMainComposition ${outVideoPath} --props=${propsJsonPath} --gl=angle --crf=18`;
  }
}
