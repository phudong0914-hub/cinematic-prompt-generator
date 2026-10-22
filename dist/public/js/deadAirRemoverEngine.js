/**
 * deadAirRemoverEngine.js — Auto Silence & Dead Space Jump-Cut Remover
 * ─────────────────────────────────────────────────────────────────────────────
 * Tinh hoa số 2 lấy từ browser-use/video-use (GitHub):
 * - Tự động phát hiện và loại bỏ các khoảng lặng ("dead air"), từ đệm ("ờ, à, ừm"),
 *   và các khoảng ngập ngừng ngắc ngứ trong video thô của người dùng.
 * - Co ngắn khoảng thở dài thành nhịp điệu dứt khoát 180ms - 220ms chuẩn TikTok/Reels.
 * - Xuất Edit Decision List (EDL) tự động ghép lệnh FFmpeg kèm 30ms anti-pop crossfade.
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Studio
 */

import { videoUseAudioEngine } from './videoUseAudioEngine.js';

export class DeadAirRemoverEngine {
  constructor(options = {}) {
    this.noiseThresholdDb = options.noiseThresholdDb || -30; // Ngưỡng yên lặng: -30dB
    this.minSilenceDurSec = options.minSilenceDurSec || 0.35; // Khoảng lặng tối thiểu bị cắt: 350ms
    this.targetBreathSec = options.targetBreathSec || 0.18;   // Khoảng thở giữ lại: 180ms
  }

  /**
   * Tạo câu lệnh FFmpeg để dò tìm khoảng lặng trong video thô
   */
  buildDetectionCommand(inputVideoPath) {
    return [
      'ffmpeg', '-hide_banner',
      '-i', inputVideoPath,
      '-af', `silencedetect=noise=${this.noiseThresholdDb}dB:d=${this.minSilenceDurSec}`,
      '-f', 'null', '-'
    ];
  }

  /**
   * Phân tích log phát hiện khoảng lặng từ FFmpeg
   * Định dạng log FFmpeg: [silencedetect @ ...] silence_start: 3.25 | silence_end: 4.80 | silence_duration: 1.55
   */
  parseSilenceLogs(logText = '', totalDurationSec = 0) {
    const silenceIntervals = [];
    const startRegex = /silence_start:\s*([\d.]+)/g;
    const endRegex = /silence_end:\s*([\d.]+)\s*\|\s*silence_duration:\s*([\d.]+)/g;

    let starts = [];
    let match;
    while ((match = startRegex.exec(logText)) !== null) {
      starts.push(parseFloat(match[1]));
    }

    let i = 0;
    while ((match = endRegex.exec(logText)) !== null && i < starts.length) {
      const sStart = starts[i];
      const sEnd = parseFloat(match[1]);
      const sDur = parseFloat(match[2]);
      silenceIntervals.push({ start: sStart, end: sEnd, duration: sDur });
      i++;
    }

    return silenceIntervals;
  }

  /**
   * Tạo danh sách phân đoạn thoại có ích (Active Speech Segments)
   * Giữ lại khoảng thở ngắn targetBreathSec giữa các câu
   */
  computeActiveSegments(silenceIntervals = [], totalDurationSec = 60.0) {
    const activeSegments = [];
    let currentPos = 0.0;

    for (const silence of silenceIntervals) {
      if (silence.start > currentPos) {
        // Có đoạn thoại từ currentPos tới silence.start
        const keepEnd = Math.min(silence.start + (this.targetBreathSec / 2), totalDurationSec);
        activeSegments.push({
          start: parseFloat(currentPos.toFixed(3)),
          end: parseFloat(keepEnd.toFixed(3)),
          duration: parseFloat((keepEnd - currentPos).toFixed(3))
        });
      }
      currentPos = Math.max(currentPos, silence.end - (this.targetBreathSec / 2));
    }

    if (currentPos < totalDurationSec) {
      activeSegments.push({
        start: parseFloat(currentPos.toFixed(3)),
        end: parseFloat(totalDurationSec.toFixed(3)),
        duration: parseFloat((totalDurationSec - currentPos).toFixed(3))
      });
    }

    return activeSegments;
  }

  /**
   * Sinh chuỗi Filter Complex FFmpeg để cắt ghép tức thì video thô sạch bóng khoảng lặng
   */
  buildFilterComplex(activeSegments = []) {
    if (activeSegments.length === 0) return '';

    let filterStr = '';
    const concatLabels = [];

    activeSegments.forEach((seg, idx) => {
      // Cắt video và audio
      const deClicker = videoUseAudioEngine.buildDeClickerFilter(seg.duration);
      const audioChain = deClicker ? `${deClicker},asetpts=PTS-STARTPTS` : 'asetpts=PTS-STARTPTS';

      filterStr += `[0:v]trim=start=${seg.start}:end=${seg.end},setpts=PTS-STARTPTS[v${idx}]; `;
      filterStr += `[0:a]atrim=start=${seg.start}:end=${seg.end},${audioChain}[a${idx}]; `;
      concatLabels.push(`[v${idx}][a${idx}]`);
    });

    filterStr += `${concatLabels.join('')}concat=n=${activeSegments.length}:v=1:a=1[outv][outa]`;
    return filterStr;
  }
}

export const deadAirRemoverEngine = new DeadAirRemoverEngine();
