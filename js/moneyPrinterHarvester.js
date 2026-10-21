/**
 * moneyPrinterHarvester.js — MoneyPrinterTurbo Asset Harvester & Stitcher Bridge
 * ─────────────────────────────────────────────────────────────────────────────
 * Mảnh ghép "Cơ bắp số 2": Tự động thu thập tư liệu B-roll (Pexels, Pixabay)
 * dựa trên keyword phân cảnh của Đạo Diễn Trungvt và tự động dựng rough-cut.
 * 
 * Lấy cảm hứng từ MoneyPrinterTurbo:
 * 1. Keyword extraction & Stock Video Harvesting
 * 2. Automated timeline stitching với MoviePy / FFmpeg headless
 * 3. Tự động áp dụng Audio Ducking & Karaoke burning
 * 
 * Tác giả: Đạo Diễn Trungvt (Cine Prompt Pro Studio OS)
 */

export class MoneyPrinterHarvester {
  constructor(config = {}) {
    this.stockProviders = ['pexels', 'pixabay', 'mixkit'];
    this.aspectRatio = config.aspectRatio || '9:16';
    this.targetDuration = config.targetDuration || 30;
    this.orientation = this.aspectRatio === '9:16' ? 'portrait' : 'landscape';
  }

  /**
   * Trích xuất danh sách query tìm kiếm stock video theo phân cảnh
   */
  generateHarvestPlan(scenes = []) {
    return scenes.map((scene, index) => {
      const sceneTitle = scene.name || `Phân cảnh ${index + 1}`;
      const keywords = scene.brollKeywords || this.extractKeywordsFromPrompt(scene.prompt || scene.script || '');
      
      const primaryQuery = keywords.slice(0, 2).join(' ') || 'cinematic luxury';
      const fallbackQuery = 'cinematic commercial lighting abstract 4k';

      return {
        sceneIndex: index + 1,
        sceneTitle,
        durationSec: scene.durationSec || 4.0,
        primaryQuery,
        fallbackQuery,
        orientation: this.orientation,
        harvestUrls: {
          pexels: `https://www.pexels.com/search/videos/${encodeURIComponent(primaryQuery)}/?orientation=${this.orientation}`,
          pixabay: `https://pixabay.com/videos/search/${encodeURIComponent(primaryQuery)}/`,
          mixkit: `https://mixkit.co/free-stock-video/${encodeURIComponent(primaryQuery.replace(/\s+/g, '-'))}/`
        },
        localAssetFilename: `broll_scene_${String(index + 1).padStart(2, '0')}.mp4`
      };
    });
  }

  /**
   * Bóc tách từ khóa trực quan từ prompt
   */
  extractKeywordsFromPrompt(prompt = '') {
    const clean = prompt.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const stopWords = new Set(['the', 'and', 'with', 'for', 'shot', 'ultra', '4k', '8k', 'ar', '16', '9']);
    const tokens = clean.split(/\s+/).filter(w => w.length > 3 && !stopWords.has(w));
    return tokens.slice(0, 4);
  }

  /**
   * Tạo payload điều khiển cho Python Stitcher (MoneyPrinter Turbo Engine)
   */
  buildStitcherManifest({
    title = "Turbo_Short_Video",
    scenes = [],
    bgmTrack = "assets/bgm/cinematic_luxury_ambient.mp3",
    voiceoverTrack = "exports/voiceover.mp3",
    subtitleFile = "exports/subtitles_karaoke.ass",
    outputPath = "exports/turbo_final_master.mp4"
  } = {}) {
    const harvestPlan = this.generateHarvestPlan(scenes);

    return {
      project_name: title,
      generator: "MoneyPrinterTurbo-CinePrompt-Bridge",
      aspect_ratio: this.aspectRatio,
      width: this.aspectRatio === '9:16' ? 1080 : 1920,
      height: this.aspectRatio === '9:16' ? 1920 : 1080,
      fps: 30,
      audio: {
        voiceover_path: voiceoverTrack,
        bgm_path: bgmTrack,
        bgm_volume_normal: 0.35,
        bgm_volume_ducked: 0.10,
        ducking_fade_sec: 0.25
      },
      subtitles: {
        ass_path: subtitleFile,
        burn_in: true
      },
      output_video_path: outputPath,
      clips: harvestPlan.map((h, i) => ({
        index: i + 1,
        title: h.sceneTitle,
        target_duration: h.durationSec,
        query: h.primaryQuery,
        asset_file: h.localAssetFilename,
        transition: i === 0 ? 'none' : 'flash_zoom'
      }))
    };
  }
}
