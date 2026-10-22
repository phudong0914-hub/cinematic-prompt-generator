/**
 * videoUseAudioEngine.js — 30ms Micro-Crossfade & Audio Anti-Pop De-Clicker
 * ─────────────────────────────────────────────────────────────────────────────
 * Tinh hoa số 1 lấy từ browser-use/video-use (GitHub):
 * - Triệt tiêu 100% tiếng nổ lách tách ("click/pop") khi nhảy cảnh (jump-cut)
 *   hoặc cắt ghép các phân đoạn audio/thoại bằng kỹ thuật 30ms micro-envelope.
 * - Tự động sinh chuỗi filter FFmpeg chuyên dụng (afade, acrossfade).
 * - Làm mềm biên độ sóng âm tại điểm đầu và cuối của từng sample PCM.
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Studio
 */

export class VideoUseAudioEngine {
  constructor(options = {}) {
    this.fadeMs = options.fadeMs || 30; // 30 milliseconds micro-fade
    this.fadeSec = this.fadeMs / 1000.0;
  }

  /**
   * Sinh chuỗi bộ lọc FFmpeg Audio Filter làm mịn điểm đầu và điểm cuối
   * Tránh nổ pop ở bất kỳ vết cắt nào
   */
  buildDeClickerFilter(clipDurationSec = 0) {
    if (clipDurationSec <= this.fadeSec * 2) {
      return '';
    }
    const outStart = Math.max(0, clipDurationSec - this.fadeSec).toFixed(3);
    const fadeDur = this.fadeSec.toFixed(3);
    return `afade=t=in:ss=0:d=${fadeDur}:curve=tri,afade=t=out:st=${outStart}:d=${fadeDur}:curve=tri`;
  }

  /**
   * Sinh bộ lọc nối hai đoạn âm thanh liên tiếp với 30ms crossfade
   */
  buildAcrossfadeFilter(durSec = 0.03) {
    return `acrossfade=d=${durSec}:c1=tri:c2=tri`;
  }

  /**
   * Làm mềm trực tiếp mảng mẫu PCM âm thanh (In-Memory Micro-Ramp)
   * Áp dụng đường dốc tuyến tính (linear ramp) trong 30ms đầu và cuối
   * 
   * @param {Float32Array|Array<number>} samples - Mảng mẫu âm thanh [-1.0, 1.0]
   * @param {number} sampleRate - Tần số lấy mẫu (44100 hoặc 48000 Hz)
   * @returns {Float32Array|Array<number>} Mảng mẫu đã làm mịn
   */
  applyPcmMicroEnvelope(samples, sampleRate = 44100) {
    const fadeSamples = Math.min(Math.floor(this.fadeSec * sampleRate), Math.floor(samples.length / 2));
    if (fadeSamples <= 0) return samples;

    // 1. Fade-In trong 30ms đầu
    for (let i = 0; i < fadeSamples; i++) {
      const factor = i / fadeSamples;
      samples[i] *= factor;
    }

    // 2. Fade-Out trong 30ms cuối
    const total = samples.length;
    for (let i = 0; i < fadeSamples; i++) {
      const idx = total - 1 - i;
      const factor = i / fadeSamples;
      samples[idx] *= factor;
    }

    return samples;
  }
}

export const videoUseAudioEngine = new VideoUseAudioEngine();
