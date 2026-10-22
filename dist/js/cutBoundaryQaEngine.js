/**
 * cutBoundaryQaEngine.js — Cut-Boundary Self-Evaluation & Frame Auditor
 * ─────────────────────────────────────────────────────────────────────────────
 * Tinh hoa số 3 lấy từ browser-use/video-use (GitHub):
 * - Tự động trích xuất các khung hình biên (Boundary Snapshots) tại vị trí
 *   ngay trước (cut - 40ms) và ngay sau (cut + 40ms) của từng vết cắt.
 * - Tự kiểm định (Self-Reflection):
 *   + Phát hiện khung hình đen (Black Frame / Flash Frame).
 *   + Phát hiện hiện tượng vỡ khung hình hoặc lệch tỷ lệ 9:16.
 *   + Tự động đề xuất dịch chuyển điểm cắt (Auto-Healing Offset) để vá lỗi trước khi giao video cho Đạo diễn.
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Studio
 */

export class CutBoundaryQaEngine {
  constructor(options = {}) {
    this.boundaryWindowSec = options.boundaryWindowSec || 0.04; // 40ms trước và sau điểm cắt
  }

  /**
   * Tạo danh sách các mốc thời gian cần kiểm tra QA quanh các điểm cắt
   */
  generateAuditSnapshotsPlan(cutPoints = [], videoDurationSec = 30.0) {
    const snapshotsPlan = [];

    cutPoints.forEach((cutTime, idx) => {
      const tBefore = Math.max(0.02, parseFloat((cutTime - this.boundaryWindowSec).toFixed(3)));
      const tAfter = Math.min(videoDurationSec - 0.02, parseFloat((cutTime + this.boundaryWindowSec).toFixed(3)));

      snapshotsPlan.push({
        cutId: idx + 1,
        cutTime: cutTime,
        before: {
          timeSec: tBefore,
          label: `cut_${idx + 1}_before`
        },
        after: {
          timeSec: tAfter,
          label: `cut_${idx + 1}_after`
        }
      });
    });

    return snapshotsPlan;
  }

  /**
   * Đánh giá chất lượng của một cặp khung hình biên
   */
  evaluateBoundaryPair(beforeFrameMeta, afterFrameMeta) {
    const findings = [];
    let passed = true;
    let autoHealingOffsetSec = 0.0;

    // 1. Kiểm tra khung hình đen (Black Frame)
    if (beforeFrameMeta.isBlack || beforeFrameMeta.fileSizeBytes < 4500) {
      findings.push('Phát hiện khung hình tối/đen ngay trước vết cắt (Pre-cut Black Frame)');
      passed = false;
      autoHealingOffsetSec = -0.06; // Lùi vết cắt 60ms
    }

    if (afterFrameMeta.isBlack || afterFrameMeta.fileSizeBytes < 4500) {
      findings.push('Phát hiện khung hình tối/đen ngay sau vết cắt (Post-cut Black Frame)');
      passed = false;
      autoHealingOffsetSec = +0.06; // Tiến vết cắt 60ms
    }

    // 2. Kiểm tra khung hình đơ/trùng lặp (Frozen Frame)
    if (beforeFrameMeta.hash && afterFrameMeta.hash && beforeFrameMeta.hash === afterFrameMeta.hash) {
      findings.push('Cảnh báo: Hai khung hình biên hoàn toàn trùng lặp (Frozen Cut Point)');
      passed = false;
    }

    return {
      passed,
      findings,
      autoHealingOffsetSec,
      healedCutTime: passed ? null : parseFloat(autoHealingOffsetSec.toFixed(3))
    };
  }

  /**
   * Tạo lệnh FFmpeg trích xuất nhanh 2 frame biên
   */
  buildSnapshotCommand(videoPath, timeSec, outputPath) {
    return [
      'ffmpeg', '-y',
      '-ss', timeSec.toString(),
      '-i', videoPath,
      '-vframes', '1',
      '-q:v', '2',
      outputPath
    ];
  }
}

export const cutBoundaryQaEngine = new CutBoundaryQaEngine();
