/**
 * safeZoneAuditor.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PLATFORM SAFE ZONE & FACIAL INVARIANCE AUDITOR
 * ─────────────────────────────────────────────────────────────────────────────
 * Enforces strict geometric boundaries to ensure:
 * 1. 9:16 (TikTok, Reels, Shorts): Text never overlaps interactive app buttons
 * 2. 16:9 (YouTube, Cinema TVC): Graphics never cover the speaker's face
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SAFE_ZONE_SPECS = {
  '9:16': {
    name: 'Mobile Vertical (TikTok / Reels / Shorts)',
    safeBox: {
      minX: 0.05,
      maxX: 0.80,
      minY: 0.12,
      maxY: 0.72
    },
    dangerZones: [
      { name: 'Top App Header', box: { minX: 0.0, maxX: 1.0, minY: 0.0, maxY: 0.12 } },
      { name: 'Right Interaction Rail (Like/Share/Comment)', box: { minX: 0.82, maxX: 1.0, minY: 0.38, maxY: 1.0 } },
      { name: 'Bottom Caption & Audio Marquee', box: { minX: 0.0, maxX: 1.0, minY: 0.74, maxY: 1.0 } }
    ]
  },
  '16:9': {
    name: 'Widescreen Landscape (YouTube / Cinema TVC)',
    safeBox: {
      minX: 0.05,
      maxX: 0.95,
      minY: 0.08,
      maxY: 0.92
    },
    defaultFaceBox: {
      minX: 0.35,
      maxX: 0.65,
      minY: 0.15,
      maxY: 0.65
    },
    recommendedGraphicZones: [
      { name: 'Left Column Third', box: { minX: 0.08, maxX: 0.32, minY: 0.20, maxY: 0.80 } },
      { name: 'Right Column Third', box: { minX: 0.68, maxX: 0.92, minY: 0.20, maxY: 0.80 } },
      { name: 'Lower-Third Subtitle', box: { minX: 0.15, maxX: 0.85, minY: 0.82, maxY: 0.92 } }
    ]
  }
};

/**
 * Check if two 2D boxes intersect
 */
function boxesIntersect(b1, b2) {
  return !(
    b1.maxX <= b2.minX ||
    b1.minX >= b2.maxX ||
    b1.maxY <= b2.minY ||
    b1.minY >= b2.maxY
  );
}

/**
 * Calculate overlap percentage
 */
function computeIntersectionArea(b1, b2) {
  const xOverlap = Math.max(0, Math.min(b1.maxX, b2.maxX) - Math.max(b1.minX, b2.minX));
  const yOverlap = Math.max(0, Math.min(b1.maxY, b2.maxY) - Math.max(b1.minY, b2.minY));
  return xOverlap * yOverlap;
}

/**
 * Audit an element (text, badge, card, sticker) against safe zones and facial constraints
 */
export function auditElementPosition({
  aspectRatio = '9:16',
  element = { id: 'elem_1', text: '', box: { minX: 0.5, maxX: 0.9, minY: 0.5, maxY: 0.6 } },
  faceBox = null
}) {
  const spec = SAFE_ZONE_SPECS[aspectRatio] || SAFE_ZONE_SPECS['9:16'];
  const violations = [];
  let autoCorrectedBox = { ...element.box };

  if (aspectRatio === '9:16') {
    // 1. Check Danger Zones in 9:16
    for (const danger of spec.dangerZones) {
      if (boxesIntersect(element.box, danger.box)) {
        violations.push({
          type: 'APP_UI_COLLISION',
          dangerZone: danger.name,
          message: `Phần tử "${element.text || element.id}" bị đè vào ${danger.name} của App (TikTok/Reels).`,
          enforcedFix: `Dời tọa độ về vùng an toàn Safe Action Box: X in [${spec.safeBox.minX}..${spec.safeBox.maxX}], Y in [${spec.safeBox.minY}..${spec.safeBox.maxY}].`
        });
      }
    }

    // Auto-correction for 9:16: clamp into safeBox
    const width = element.box.maxX - element.box.minX;
    const height = element.box.maxY - element.box.minY;

    if (autoCorrectedBox.maxX > spec.safeBox.maxX) {
      autoCorrectedBox.maxX = spec.safeBox.maxX;
      autoCorrectedBox.minX = Math.max(spec.safeBox.minX, autoCorrectedBox.maxX - width);
    }
    if (autoCorrectedBox.minX < spec.safeBox.minX) {
      autoCorrectedBox.minX = spec.safeBox.minX;
      autoCorrectedBox.maxX = Math.min(spec.safeBox.maxX, autoCorrectedBox.minX + width);
    }
    if (autoCorrectedBox.maxY > spec.safeBox.maxY) {
      autoCorrectedBox.maxY = spec.safeBox.maxY;
      autoCorrectedBox.minY = Math.max(spec.safeBox.minY, autoCorrectedBox.maxY - height);
    }
    if (autoCorrectedBox.minY < spec.safeBox.minY) {
      autoCorrectedBox.minY = spec.safeBox.minY;
      autoCorrectedBox.maxY = Math.min(spec.safeBox.maxY, autoCorrectedBox.minY + height);
    }
  } else if (aspectRatio === '16:9') {
    // 2. Check Facial Invariance in 16:9
    const activeFace = faceBox || spec.defaultFaceBox;
    if (boxesIntersect(element.box, activeFace)) {
      violations.push({
        type: 'FACE_OCCLUSION',
        message: `Phần tử "${element.text || element.id}" che khuất khuôn mặt diễn viên/người nói.`,
        enforcedFix: 'Đẩy đồ họa sang Cột 1/3 bên trái (X <= 0.32) hoặc Cột 1/3 bên phải (X >= 0.68).'
      });

      // Auto-correct: shift to left column or right column
      const elemCenterX = (element.box.minX + element.box.maxX) / 2;
      const width = element.box.maxX - element.box.minX;

      if (elemCenterX < 0.5) {
        // Shift left
        autoCorrectedBox.maxX = 0.32;
        autoCorrectedBox.minX = Math.max(0.08, 0.32 - width);
      } else {
        // Shift right
        autoCorrectedBox.minX = 0.68;
        autoCorrectedBox.maxX = Math.min(0.92, 0.68 + width);
      }
    }
  }

  return {
    elementId: element.id,
    aspectRatio,
    passed: violations.length === 0,
    originalBox: element.box,
    autoCorrectedBox,
    violations
  };
}

/**
 * Batch audit a full storyboard or timeline layer list
 */
export function auditTimelineSafeZones({ aspectRatio = '9:16', elements = [], faceBox = null }) {
  const results = elements.map(elem => auditElementPosition({ aspectRatio, element: elem, faceBox }));
  const totalViolations = results.reduce((acc, r) => acc + r.violations.length, 0);

  return {
    aspectRatio,
    totalElements: elements.length,
    passed: totalViolations === 0,
    totalViolations,
    elements: results,
    safeZoneBox: SAFE_ZONE_SPECS[aspectRatio]?.safeBox
  };
}
