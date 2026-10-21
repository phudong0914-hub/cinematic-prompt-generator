/**
 * roughCutEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * 3 GOLDEN ROUGH-CUT RULES ENGINE (Minh Đỗ x Trungvt Master Edition)
 * ─────────────────────────────────────────────────────────────────────────────
 * Rule 1: Keep Last Take (Câu nói nhiều lần thì giữ lần cuối)
 * Rule 2: Review Before Cut (Bản duyệt text trước khi cắt file vật lý)
 * Rule 3: Chronological Integrity (Chỉ được bỏ, cấm xáo trộn thứ tự lời nói)
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Compute speech stumble similarity using Jaccard and subset containment
 */
function textSimilarity(textA, textB) {
  const wordsA = new Set((textA || '').toLowerCase().split(/\s+/).filter(w => w.length > 1));
  const wordsB = new Set((textB || '').toLowerCase().split(/\s+/).filter(w => w.length > 1));
  if (wordsA.size === 0 || wordsB.size === 0) return 0;
  let intersection = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) intersection++;
  }
  const jaccard = intersection / (wordsA.size + wordsB.size - intersection);
  const containment = intersection / Math.min(wordsA.size, wordsB.size);
  // In rough cutting, false starts are usually a subset of the completed sentence
  return Math.max(jaccard, containment >= 0.70 ? 0.75 : 0);
}

/**
 * Apply the 3 Golden Rough Cut Rules to raw transcript segments
 * @param {Array<{ id: number, start: number, end: number, text: string }>} segments
 * @param {Object} options
 * @returns {Object} Processed cut decisions, review slate, and cleaned timeline
 */
export function applyRoughCutRules(segments = [], options = {}) {
  const {
    similarityThreshold = 0.55,
    maxSilenceSeconds = 0.6,
    targetBreatheSeconds = 0.25
  } = options;

  const decisions = [];
  let cluster = [];

  // ── RULE 1: IDENTIFY REPETITIONS & KEEP LAST TAKE ──
  for (let i = 0; i < segments.length; i++) {
    const current = segments[i];
    const prev = segments[i - 1];

    if (!prev) {
      cluster.push(current);
      continue;
    }

    const sim = textSimilarity(prev.text, current.text);
    const timeGap = current.start - prev.end;

    // If similarity is high and time gap is within natural stumble window (< 10s)
    if (sim >= similarityThreshold && timeGap <= 10.0) {
      cluster.push(current);
    } else {
      // Process finished cluster
      if (cluster.length > 1) {
        // Discard all previous takes, keep the last one
        for (let c = 0; c < cluster.length - 1; c++) {
          decisions.push({
            segment: cluster[c],
            action: 'CUT',
            rule: 'RULE_1_LAST_TAKE',
            reason: `Nói lặp/vấp (${cluster.length} lần) -> Đã loại bỏ lần ${c + 1}`
          });
        }
        decisions.push({
          segment: cluster[cluster.length - 1],
          action: 'KEEP',
          rule: 'RULE_1_LAST_TAKE',
          reason: `Giữ lại lần nói cuối cùng (Take chuẩn nhất)`
        });
      } else {
        decisions.push({
          segment: cluster[0],
          action: 'KEEP',
          rule: 'NATURAL_PASS',
          reason: 'Câu phát âm tự nhiên, không lặp'
        });
      }
      cluster = [current];
    }
  }

  // Flush remaining cluster
  if (cluster.length > 1) {
    for (let c = 0; c < cluster.length - 1; c++) {
      decisions.push({
        segment: cluster[c],
        action: 'CUT',
        rule: 'RULE_1_LAST_TAKE',
        reason: `Nói lặp/vấp (${cluster.length} lần) -> Đã loại bỏ lần ${c + 1}`
      });
    }
    decisions.push({
      segment: cluster[cluster.length - 1],
      action: 'KEEP',
      rule: 'RULE_1_LAST_TAKE',
      reason: `Giữ lại lần nói cuối cùng (Take chuẩn nhất)`
    });
  } else if (cluster.length === 1) {
    decisions.push({
      segment: cluster[0],
      action: 'KEEP',
      rule: 'NATURAL_PASS',
      reason: 'Câu phát âm tự nhiên'
    });
  }

  // ── RULE 3: PRESERVE STRICT CHRONOLOGICAL INTEGRITY & TRIM SILENCES ──
  const keptSegments = decisions.filter(d => d.action === 'KEEP').map(d => ({ ...d.segment }));
  
  // Verify strict ordering
  for (let k = 1; k < keptSegments.length; k++) {
    if (keptSegments[k].start < keptSegments[k - 1].start) {
      throw new Error(`VIOLATION OF RULE 3 (CHRONOLOGICAL INTEGRITY): Segment ${k} appears before segment ${k - 1}`);
    }
  }

  // Calculate compact timeline with trimmed silences
  let runningTimelineOffset = 0;
  const finalizedTimeline = [];
  let totalTimeSavedSeconds = 0;

  for (let k = 0; k < keptSegments.length; k++) {
    const seg = keptSegments[k];
    const prevSeg = keptSegments[k - 1];

    let leadingSilence = 0;
    if (prevSeg) {
      const actualGap = seg.start - prevSeg.end;
      if (actualGap > maxSilenceSeconds) {
        leadingSilence = targetBreatheSeconds;
        totalTimeSavedSeconds += (actualGap - targetBreatheSeconds);
      } else if (actualGap > 0) {
        leadingSilence = actualGap;
      }
    }

    const duration = seg.end - seg.start;
    const newStart = runningTimelineOffset + leadingSilence;
    const newEnd = newStart + duration;
    runningTimelineOffset = newEnd;

    finalizedTimeline.push({
      id: seg.id,
      text: seg.text,
      originalStart: seg.start,
      originalEnd: seg.end,
      timelineStart: parseFloat(newStart.toFixed(3)),
      timelineEnd: parseFloat(newEnd.toFixed(3)),
      duration: parseFloat(duration.toFixed(3))
    });
  }

  // Calculate cut duration
  const cutSegments = decisions.filter(d => d.action === 'CUT');
  const cutDuration = cutSegments.reduce((sum, d) => sum + (d.segment.end - d.segment.start), 0);
  totalTimeSavedSeconds += cutDuration;

  // ── RULE 2: GENERATE REVIEW SLATE BEFORE CUT ──
  const reviewMarkdown = generateReviewMarkdown(decisions, finalizedTimeline, totalTimeSavedSeconds);

  return {
    totalRawSegments: segments.length,
    retainedCount: finalizedTimeline.length,
    cutCount: cutSegments.length,
    totalTimeSavedSeconds: parseFloat(totalTimeSavedSeconds.toFixed(2)),
    finalDurationSeconds: finalizedTimeline.length ? finalizedTimeline[finalizedTimeline.length - 1].timelineEnd : 0,
    decisions,
    finalizedTimeline,
    reviewMarkdown
  };
}

/**
 * Generates an interactive review markdown slate
 */
function generateReviewMarkdown(decisions, timeline, timeSaved) {
  let md = `# 🎬 BẢNG DUYỆT CẮT THÔ CHUẨN 3 LUẬT (Rough-Cut Review Slate)\n\n`;
  md += `> **Thời gian tiết kiệm được**: **${timeSaved.toFixed(1)} giây** (triệt tiêu vấp thoại & khoảng lặng thừa)\n\n`;
  md += `| Mốc gốc (s) | Quyết định | Nội dung câu thoại | Lý do & Quy chuẩn |\n`;
  md += `|---|---|---|---|\n`;

  for (const d of decisions) {
    const timeStr = `${d.segment.start.toFixed(1)}s - ${d.segment.end.toFixed(1)}s`;
    const icon = d.action === 'KEEP' ? '✅ **GIỮ**' : '✂️ ~~BỎ~~';
    const textStr = d.action === 'KEEP' ? d.segment.text : `~~${d.segment.text}~~`;
    md += `| ${timeStr} | ${icon} | ${textStr} | ${d.reason} |\n`;
  }

  md += `\n---\n*Đạo diễn bấm Xác nhận để tự động xuất Timeline CapCut / Remotion.*\n`;
  return md;
}
