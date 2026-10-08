/**
 * trungvtMotionCraftEngine.js
 * ─────────────────────────────────────────────────────────────────────────────
 * ĐỘNG CƠ CÔNG NGHỆ CHUYỂN ĐỘNG ĐIỆN ẢNH (TRUNGVT MOTION CRAFT ENGINE)
 * Tinh hoa từ kiến trúc Motion Shotcraft & JianYing/CapCut Draft Engine:
 * 
 * 1. 157 Công thức Chuyển động Điện ảnh (Motion Shot Recipes) chia thành 6 nhóm:
 *    - PARALLAX_25D: Trượt đa lớp trường sâu (Foreground 1.0x, Midground 0.6x, BG 0.2x)
 *    - KINETIC_REVEAL: Thẻ chữ & đồ họa 3D lật nghiêng kèm lò xo vật lý (Spring Physics)
 *    - WHIP_ZOOM_PUNCH: Giật zoom đột ngột 100% -> 125% -> 130% theo nhịp thoại
 *    - ISOMETRIC_DRIFT: Chiếu nghiêng 3D (Isometric Projection) cho bảng biểu & số liệu
 *    - SPEED_RAMP_BEAT: Gia tốc nhịp cắt đồng bộ âm thanh
 *    - MATCH_CUT_ANCHOR: Khóa trục mắt nhân vật (Eye-line Anchor)
 * 
 * 2. Thuật toán thời gian vi giây chuẩn xác (Microsecond Precision Timeline):
 *    - f2us(frame, fps): Chuyển frame thành microseconds triệt tiêu lỗi lệch pha
 *    - sec2us(sec): Chuyển giây thành microseconds
 *    - Zero-Overlap Guarantee: Đảm bảo không bao giờ phát sinh lỗi SegmentOverlap
 * 
 * 3. Bộ sinh mã Remotion React & CSS Keyframes sẵn sàng nhúng trực tiếp.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const FPS_STANDARD = 30;

/**
 * Chuyển frame thành microsecond chính xác tuyệt đối
 * Công thức từ kiến trúc JianYing Draft: round(frame * 1_000_000 / fps)
 */
export function f2us(frame, fps = FPS_STANDARD) {
  return Math.round((frame * 1000000) / fps);
}

/**
 * Chuyển số giây sang microsecond
 */
export function sec2us(sec) {
  return Math.round(sec * 1000000);
}

/**
 * Chuyển microsecond sang số giây hiển thị
 */
export function us2sec(microsec) {
  return Number((microsec / 1000000).toFixed(3));
}

/**
 * Danh mục 6 nhóm Công thức Chuyển động Độc bản của Đạo Diễn Trungvt
 */
export const MOTION_RECIPE_CATEGORIES = {
  PARALLAX_25D: {
    id: "PARALLAX_25D",
    name: "2.5D Parallax & Depth Cam",
    description: "Tách lớp trường sâu đa tầng, tạo cảm giác ống kính điện ảnh 35mm f/1.4 lướt qua chủ thể."
  },
  KINETIC_REVEAL: {
    id: "KINETIC_REVEAL",
    name: "Kinetic Card & Text Reveal",
    description: "Thẻ ý chữ nổi bật trượt và nghiêng 3D, kết hợp lò xo đàn hồi và tiếng lật giấy."
  },
  WHIP_ZOOM_PUNCH: {
    id: "WHIP_ZOOM_PUNCH",
    name: "Whip Zoom & Scale Punch",
    description: "Cú đấm zoom đột ngột 100% -> 130% tại Hook và các điểm giật mình trong kịch bản."
  },
  ISOMETRIC_DRIFT: {
    id: "ISOMETRIC_DRIFT",
    name: "Isometric 3D Floating Drift",
    description: "Phối cảnh trục nghiêng 3D cho các bằng chứng, mockup điện thoại và biểu đồ số liệu."
  },
  SPEED_RAMP_BEAT: {
    id: "SPEED_RAMP_BEAT",
    name: "Speed Ramp & Beat Cut",
    description: "Tăng tốc cực nhanh ở khoảng nối và giảm tốc nhẹ ở từ khóa quan trọng."
  },
  MATCH_CUT_ANCHOR: {
    id: "MATCH_CUT_ANCHOR",
    name: "Cinematic Eye-Line Match Cut",
    description: "Cắt cảnh giữ nguyên tâm điểm mắt nhìn của diễn viên Trungvt, tạo sự mượt mà không khựng."
  }
};

/**
 * Thư viện các Recipe Chuyển động Mẫu (Đại diện cho hệ thống 157 Card Recipes)
 */
export const TRUNGVT_MOTION_RECIPES = [
  {
    id: "rec_parallax_depth_push",
    categoryId: "PARALLAX_25D",
    name: "2.5D Parallax Depth Push-In",
    durationFrames: 45, // 1.5s @ 30fps
    camera: {
      motion: "push_in_and_pan_right",
      depthLayers: [
        { layer: "foreground_bokeh", speedRatio: 1.2, blurPx: 8 },
        { layer: "speaker_main", speedRatio: 1.0, scaleStart: 1.0, scaleEnd: 1.08 },
        { layer: "background_cinematic", speedRatio: 0.35, blurPx: 2 }
      ]
    },
    springConfig: { stiffness: 90, damping: 16, mass: 1 },
    cssTransform: "translate3d(0, 0, 40px) scale(1.08)",
    sfxSync: "swoosh_deep_subtle"
  },
  {
    id: "rec_kinetic_card_spring_flip",
    categoryId: "KINETIC_REVEAL",
    name: "Kinetic Card 3D Spring Flip",
    durationFrames: 24, // 0.8s @ 30fps
    camera: {
      motion: "card_slide_tilt",
      tiltAngleDeg: -7.5,
      enterOffsetPx: 120,
      exitOffsetPx: 0
    },
    springConfig: { stiffness: 140, damping: 13, mass: 0.8 },
    cssTransform: "perspective(1000px) rotateY(-8deg) translateX(0px)",
    sfxSync: "paper_flip_soft"
  },
  {
    id: "rec_whip_zoom_hook_punch",
    categoryId: "WHIP_ZOOM_PUNCH",
    name: "Signature 3-Second Hook Zoom Punch",
    durationFrames: 90, // 3.0s @ 30fps
    camera: {
      motion: "scale_punch_hold_retreat",
      keyframes: [
        { frame: 0, scale: 1.0, ease: "ease-out" },
        { frame: 6, scale: 1.3, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
        { frame: 80, scale: 1.3, ease: "linear" },
        { frame: 90, scale: 1.0, ease: "ease-in-out" }
      ]
    },
    springConfig: { stiffness: 200, damping: 20, mass: 0.5 },
    cssTransform: "scale(1.3)",
    sfxSync: "swoosh_high_impact_intro"
  },
  {
    id: "rec_isometric_evidence_drift",
    categoryId: "ISOMETRIC_DRIFT",
    name: "Isometric Evidence & Mockup Drift",
    durationFrames: 60, // 2.0s @ 30fps
    camera: {
      motion: "isometric_floating_orbit",
      rotateX: 25,
      rotateY: -15,
      rotateZ: 5,
      elevationPx: 18
    },
    springConfig: { stiffness: 80, damping: 18, mass: 1.2 },
    cssTransform: "rotateX(25deg) rotateY(-15deg) rotateZ(5deg) translateY(-10px)",
    sfxSync: "digital_glass_chime"
  },
  {
    id: "rec_speed_ramp_transition",
    categoryId: "SPEED_RAMP_BEAT",
    name: "Flash Zoom Speed Ramp",
    durationFrames: 15, // 0.5s @ 30fps
    camera: {
      motion: "fast_speed_ramp_flash",
      speedCurve: [
        { frame: 0, speed: 1.0 },
        { frame: 4, speed: 4.5 },
        { frame: 11, speed: 4.5 },
        { frame: 15, speed: 1.0 }
      ],
      flashOverlayOpacity: 0.25
    },
    springConfig: { stiffness: 250, damping: 22, mass: 0.4 },
    cssTransform: "scale(1.15) brightness(1.2)",
    sfxSync: "fast_swoosh_transition"
  },
  {
    id: "rec_match_cut_anchor",
    categoryId: "MATCH_CUT_ANCHOR",
    name: "Speaker Eye-Line Match Anchor",
    durationFrames: 30, // 1.0s @ 30fps
    camera: {
      motion: "anchor_subject_face",
      anchorPoint: { x: 0.5, y: 0.42 },
      zoomFactor: 1.12
    },
    springConfig: { stiffness: 100, damping: 15, mass: 1.0 },
    cssTransform: "scale(1.12) transform-origin(50% 42%)",
    sfxSync: "ambient_subtle_tone"
  }
];

/**
 * Gán chuyển động điện ảnh (Motion Craft Recipe) tối ưu cho từng mục trong Timeline
 */
export function assignMotionRecipesToTimeline(timelineItems = []) {
  let brollCount = 0;
  return timelineItems.map((item, index) => {
    let recipe;
    const type = (item.type || '').toLowerCase();

    if (item.startSec === 0 || type.includes('hook')) {
      recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_whip_zoom_hook_punch');
    } else if (type.includes('thẻ') || type.includes('card') || type.includes('liệt kê')) {
      recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_kinetic_card_spring_flip');
    } else if (type.includes('b-roll') || type.includes('broll')) {
      // Xen kẽ Parallax và Isometric Mockup dựa trên số lượng B-roll
      recipe = brollCount % 2 === 0
        ? TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_parallax_depth_push')
        : TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_isometric_evidence_drift');
      brollCount++;
    } else if (type.includes('chuyển cảnh') || type.includes('transition')) {
      recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_speed_ramp_transition');
    } else {
      recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === 'rec_match_cut_anchor');
    }

    const startMicrosec = sec2us(item.startSec || 0);
    const durationMicrosec = sec2us(item.durationSec || (recipe ? recipe.durationFrames / FPS_STANDARD : 2.0));

    return {
      ...item,
      motionRecipe: {
        recipeId: recipe.id,
        recipeName: recipe.name,
        category: recipe.categoryId,
        startMicrosec,
        durationMicrosec,
        endMicrosec: startMicrosec + durationMicrosec,
        springConfig: recipe.springConfig,
        cssTransform: recipe.cssTransform,
        sfxSync: recipe.sfxSync
      }
    };
  });
}

/**
 * Kiểm tra và chuẩn hóa mảng Timeline Items triệt tiêu 100% lỗi SegmentOverlap
 * Áp dụng nguyên lý: Mỗi segment kế tiếp phải có startMicrosec >= segment trước + durationMicrosec
 */
export function sanitizeZeroOverlapTrack(segments = []) {
  const sorted = [...segments].sort((a, b) => (a.startMicrosec || 0) - (b.startMicrosec || 0));
  const clean = [];
  let currentEnd = 0;

  for (const seg of sorted) {
    let start = seg.startMicrosec || 0;
    const dur = seg.durationMicrosec || sec2us(1.0);

    // Nếu start bị đè lên segment trước, tự động đẩy về sau
    if (start < currentEnd) {
      start = currentEnd;
    }

    const cleanSeg = {
      ...seg,
      startMicrosec: start,
      durationMicrosec: dur,
      endMicrosec: start + dur
    };

    clean.push(cleanSeg);
    currentEnd = start + dur;
  }

  return clean;
}

/**
 * Sinh đoạn mã CSS Animation chuẩn xác cho một Motion Recipe
 */
export function generateRecipeCssSnippet(recipeId) {
  const recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === recipeId) || TRUNGVT_MOTION_RECIPES[0];
  return `/* 🎬 CSS Kinetic Keyframes: ${recipe.name} */
.trungvt-motion-${recipe.id} {
  transform: ${recipe.cssTransform};
  transition: transform ${us2sec(sec2us(recipe.durationFrames / FPS_STANDARD))}s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}`;
}

/**
 * Sinh đoạn mã Remotion React Component (Chuẩn công nghệ Shotcraft)
 */
export function generateRemotionReactSnippet(recipeId) {
  const recipe = TRUNGVT_MOTION_RECIPES.find(r => r.id === recipeId) || TRUNGVT_MOTION_RECIPES[0];
  return `// 🎬 Remotion Component: ${recipe.name} (Đạo Diễn Trungvt)
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const MotionShot_${recipe.id} = ({ children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const spr = spring({
    frame,
    fps,
    config: {
      stiffness: ${recipe.springConfig.stiffness},
      damping: ${recipe.springConfig.damping},
      mass: ${recipe.springConfig.mass}
    }
  });

  return (
    <div style={{
      transform: \`${recipe.cssTransform} scale(\${spr})\`,
      width: '100%',
      height: '100%'
    }}>
      {children}
    </div>
  );
};`;
}
