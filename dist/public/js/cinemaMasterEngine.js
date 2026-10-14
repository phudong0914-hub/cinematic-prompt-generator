/**
 * cinemaMasterEngine.js — Master Cinema Enterprise Engine (v5.0 Enterprise)
 * ─────────────────────────────────────────────────────────────────────────────
 * TÁI ĐỊNH HÌNH KIẾN TRÚC THEO "BÀN ĐẠO DIỄN 5 TẦNG" (5 DEPARTMENTS):
 * 1. Tổ Đạo Diễn & Biên Kịch: Script-to-Storyboard & Spatial Continuity (180° Axis Lock).
 * 2. Tổ Thiết Kế Mỹ Thuật & Phục Trang: 4-Slot Multi-Asset Bible Vault (@Char, @Prop, @Env, @Audio) & Keyframe Pinning.
 * 3. Tổ Quay Phim & Ánh Sáng: True DP Optical Rig & 2D Interactive Lighting Radar.
 * 4. Tổ Quay Máy & Chuyển Động: 30s Micro-Timeline Sequencer (1 to 6 shots) & 10-Keyframe Pinning.
 * 5. Tổ Âm Thanh & Dựng Phim: 3-Track Cinema Sound Mixer, 11-Language Lip-Sync & NLE OpenTimelineIO/XML Export.
 */

import { compileAllEngines } from './promptCompiler2026.js';
import { geminiArgonEngine } from './geminiArgonEngine.js';

export const CAMERA_BODIES = [
  { id: 'arri_alexa_65', name: 'ARRI Alexa 65 (Large Format IMAX)', sensor: '65mm Open Gate', iso: 800, dynamicRange: '14+ Stops', look: 'Organic, creamy skin tones, zero digital sharpness' },
  { id: 'imax_70mm_film', name: 'IMAX 70mm 15-Perf Film', sensor: '70mm Chemical Emulsion', iso: 500, dynamicRange: 'Photochemical Grain', look: 'Nolan-grade organic silver-halide grain and infinite optical depth' },
  { id: 'red_vraptor_vv', name: 'RED V-Raptor 8K VV', sensor: 'VistaVision 35.4mm', iso: 800, dynamicRange: '17+ Stops', look: 'Hyper-crisp micro-contrast, clinical commercial precision' },
  { id: 'sony_venice_2', name: 'Sony Venice 2 (Dual Base ISO 8.6K Full Frame)', sensor: '36x24mm Full Frame', iso: 3200, dynamicRange: '16 Stops', look: 'Ultra-clean low light fidelity, velvety shadows, modern cinematic punch' },
  { id: 'bolex_16mm', name: 'Bolex H16 16mm Vintage Grain', sensor: 'Super 16mm Gate', iso: 400, dynamicRange: '10 Stops Vintage', look: 'Gritty indie warmth, gate weave, organic chromatic halation' }
];

export const LENS_PACKAGES = [
  { id: 'cooke_anamorphic', name: 'Cooke Anamorphic /i Special Flare', type: '2x Anamorphic', bokeh: 'Oval cinematic bokeh', flare: 'Warm amber streak', look: 'The Cooke Look®: warm, gentle skin, painterly falloff' },
  { id: 'panavision_primo', name: 'Panavision Primo 70 Spherical', type: 'Large Format Spherical', bokeh: 'Circular neutral bokeh', flare: 'Neutral anti-reflective', look: 'High MTF resolution, zero chromatic distortion, blockbuster standard' },
  { id: 'helios_44_2', name: 'Helios 44-2 58mm f/2 (Vintage Swirly)', type: 'Vintage Swirly', bokeh: 'Swirly vortex optical aberration', flare: 'Dreamy iridescent flare', look: 'Hypnotic edge swirl, nostalgic romantic portrait compression' },
  { id: 'arri_master_prime', name: 'ARRI Zeiss Master Prime T1.3', type: 'High-Speed Cine Prime', bokeh: 'Buttery round bokeh', flare: 'Controlled crisp flare', look: 'Razor-sharp wide-open optical transmission with subtle contrast' }
];

export class CinemaMasterEngine {
  constructor() {
    this.storageKey = 'cine_prompt_v5_state';
    this.projectData = this.loadPersistedState() || this.getDefaultState();
    this.recompileAll();
  }

  getDefaultState() {
    return {
      project_metadata: {
        project_name: "TVC_Cafe_SaiGon_1990s",
        director: "Đạo Diễn Trungvt",
        hotline: "0836.384.168",
        engine_version: "CinePrompt Pro v5.0 Enterprise",
        orchestrator_model: "gemini-4-argon",
        aspect_ratio: "21:9",
        frame_rate: "24fps",
        color_depth: "10-bit",
        mode: "master_director", // 'fast_viral' | 'master_director'
        lang: "vi", // 'vi' | 'en'
        runway_mode: "image_to_video" // 'text_to_video' | 'image_to_video'
      },
      global_bible_vault: {
        char_1: {
          id: "@Char_1",
          name: "Người Đàn Ông Từng Trải",
          visual_dna: "Vietnamese male, 45 years old, chiseled jawline, salt-and-pepper stubble, wearing a damp charcoal trench coat",
          reference_images: ["vault/char1_front.png", "vault/char1_profile.png"],
          voice_profile: { language: "vi-VN", timbre: "deep baritone, raspy, calm" },
          keyframe_pin: "start" // 'start' | 'middle' | 'end'
        },
        char_2: {
          id: "@Char_2",
          name: "Cô Gái Quán Cà Phê",
          visual_dna: "Vietnamese female, 28 years old, classic vintage bob hair, delicate porcelain features, linen cream áo dài",
          reference_images: ["vault/char2_front.png"],
          voice_profile: { language: "vi-VN", timbre: "soft, nostalgic, whispering" },
          keyframe_pin: "middle"
        },
        prop_1: {
          id: "@Prop_1",
          name: "Phin Cà Phê Nhôm Cổ Điển",
          visual_dna: "Vintage scratched aluminum Vietnamese coffee phin resting on a thick clear glass with condensed milk at the bottom",
          reference_images: ["vault/phin_cafe.png"],
          keyframe_pin: "start"
        },
        env_1: {
          id: "@Env_1",
          name: "Quán Cà Phê Vỉa Hè Mưa Đêm Sài Gòn",
          visual_dna: "Damp vintage wooden porch under neon streetlamp, rain ripples on asphalt puddles, warm tungsten interior glow",
          reference_images: ["vault/env_saigon_night.png"],
          keyframe_pin: "middle"
        },
        audio_1: {
          id: "@Audio_1",
          name: "Tiếng Mưa & Đàn Tranh Cổ Điển",
          description: "Steady Saigon monsoon rain with melancholic traditional Đàn Tranh chords, 65 BPM"
        },
        master_optics_and_lighting: {
          camera_body: "ARRI Alexa 65",
          lens_package: "Cooke Anamorphic /i Special Flare",
          focal_length: "35mm",
          t_stop: "T1.4",
          color_lut: "Kodak Vision3 500T 5219 (Warm tungsten highlights, rich cyan-teal shadows)",
          lighting_rig: {
            key_light: { angle: 45, type: "Warm 3200K Tungsten", distance: "Medium", desc: "Key light from 45° camera left" },
            fill_light: { angle: 135, type: "Negative Fill (8:1 ratio)", distance: "Close", desc: "Negative fill on camera right" },
            rim_light: { angle: 225, type: "Cool Rainy Neon 5600K", distance: "Far", desc: "Edge separation along shoulders" },
            practical_light: { angle: 315, type: "Streetlamp in Frame", distance: "Background", desc: "Motivated streetlamp bokeh" },
            volumetrics: "Heavy monsoon rain, volumetric Tyndall steam rising, subtle halation"
          },
          axis_180_lock: true
        }
      },
      multi_shot_timeline: [
        {
          shot_number: 1,
          timecode: "00:00 - 00:06",
          shot_size: "Wide Establishing Shot (WS)",
          camera_angle: "Low Angle (Psychological gravitas)",
          focal_length: "28mm Anamorphic, T2.0",
          camera_movement: "Slow push-in dolly combined with subtle pedestal up",
          transition_in: "Fade from Black",
          spatial_blocking: "@Char_1 enters from Screen Left, walking toward the sidewalk cafe table on Screen Right (Screen Left looking Right)",
          action_physics: "Raindrops splash realistically off the shoulders of @Char_1's trench coat; neon lights ripple across wet asphalt puddles",
          audio_layers: {
            foley_sfx: "[00:01] Heavy leather boots stepping into water puddle; [00:05] Umbrella closing shut",
            ambience: "Steady Saigon night rain, distant motorbike horn echoing",
            dialogue: null
          }
        },
        {
          shot_number: 2,
          timecode: "00:06 - 00:15",
          transition_in: "Hard Cut on Action (as @Char_1 sits down)",
          shot_size: "Extreme Close-Up (ECU) -> Medium Close-Up (MCU)",
          camera_angle: "Eye-Level (Intimate connection)",
          focal_length: "85mm Anamorphic, T1.4 (Ultra-shallow DOF)",
          camera_movement: "Static lock-off with precision Rack Focus at 00:11",
          spatial_blocking: "@Prop_1 in foreground right; @Char_1 in background left looking Screen Right (180° Axis Preserved)",
          action_physics: "At 00:08, a single dark drop of coffee falls from @Prop_1 into the glass in crisp macro detail. At 00:11, focus pulls smoothly from @Prop_1 to @Char_1's eyes",
          audio_layers: {
            foley_sfx: "[00:08.5] Distinct resonant 'drop' sound of coffee hitting glass; gentle ceramic clink",
            ambience: "Soft vinyl crackle and slow melancholic jazz trumpet fading in",
            dialogue: {
              speaker: "@Char_1",
              timecode: "00:10 - 00:14.5",
              language: "vi-VN",
              delivery: "Slow, nostalgic, quiet intensity",
              text: "Có những thứ đi qua giông bão... mới giữ được vị nguyên bản."
            }
          }
        },
        {
          shot_number: 3,
          timecode: "00:15 - 00:23",
          transition_in: "Match Cut on Eyes",
          shot_size: "Medium Close-Up (Over-The-Shoulder reverse)",
          camera_angle: "Eye-Level (180° Compliant)",
          focal_length: "50mm Anamorphic, T1.8",
          camera_movement: "Subtle handheld breathing organic drift",
          spatial_blocking: "@Char_2 positioned on Screen Right looking Screen Left (Flawless Eyeline Match with Shot 2)",
          action_physics: "@Char_2 gently places a cup of warm water next to @Prop_1, warm smile emerging, eyes reflecting ambient streetlamp",
          audio_layers: {
            foley_sfx: "[00:17] Delicate glass sliding against rustic wooden table surface",
            ambience: "Warm acoustic jazz swell, rain rhythm softens under roof eave",
            dialogue: {
              speaker: "@Char_2",
              timecode: "00:18 - 00:22",
              language: "vi-VN",
              delivery: "Gentle, welcoming whisper",
              text: "Cà phê hôm nay vẫn đậm như hai mươi năm trước anh nhé."
            }
          }
        },
        {
          shot_number: 4,
          timecode: "00:23 - 00:30",
          transition_in: "Whip Pan to Product Hero Angle",
          shot_size: "Macro Hero Shot (CU)",
          camera_angle: "Low Angle Heroic",
          focal_length: "100mm Macro, T1.4",
          camera_movement: "Gentle 360-degree Orbit Arc around @Prop_1",
          spatial_blocking: "@Prop_1 centered with golden condensation drops glistening under streetlamp",
          action_physics: "Steam rises gracefully in volumetric Tyndall rays; final stir reveals golden swirls of milk and dark roasted coffee",
          audio_layers: {
            foley_sfx: "[00:25] Metal spoon stirring resonant swirling glass rhythm",
            ambience: "Rich saxophone resolution note, rain fading into cozy street atmosphere",
            dialogue: {
              speaker: "@Char_1",
              timecode: "00:26 - 00:29",
              language: "vi-VN",
              delivery: "Deep, resonant closing tagline",
              text: "Cà Phê Sài Gòn — Vị đắng thời gian, vị ngọt ký ức."
            }
          }
        }
      ],
      compiled_outputs: {}
    };
  }

  loadPersistedState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(this.storageKey);
        if (saved) return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Cannot load persisted state:', e);
    }
    return null;
  }

  saveState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(this.projectData));
      }
    } catch (e) {
      console.warn('Cannot persist state:', e);
    }
  }

  /* ─────────────────────────────────────────────────────────────
   * 1. 180-DEGREE SPATIAL CONTINUITY & EYELINE INVERSION
   * ───────────────────────────────────────────────────────────── */
  validate180DegreeAxis() {
    const timeline = this.projectData.multi_shot_timeline;
    const issues = [];

    for (let i = 0; i < timeline.length - 1; i++) {
      const shotA = timeline[i];
      const shotB = timeline[i + 1];

      const aHasChar1 = shotA.spatial_blocking?.includes('@Char_1');
      const bHasChar2 = shotB.spatial_blocking?.includes('@Char_2');

      if (aHasChar1 && bHasChar2 && this.projectData.global_bible_vault.master_optics_and_lighting.axis_180_lock) {
        const aLookingRight = shotA.spatial_blocking.toLowerCase().includes('looking right');
        const bLookingRight = shotB.spatial_blocking.toLowerCase().includes('looking right');

        if (aLookingRight && bLookingRight) {
          issues.push({
            type: '180_AXIS_VIOLATION',
            shots: [shotA.shot_number, shotB.shot_number],
            message: `⚠️ Lỗi Vượt Trục 180 Độ giữa Shot ${shotA.shot_number} và Shot ${shotB.shot_number}: Cả hai nhân vật đều đang nhìn sang PHẢI (Screen Right). Cần đổi Shot ${shotB.shot_number} sang nhìn sang TRÁI (Screen Left looking Right -> Screen Right looking Left) để khớp eyeline match.`,
            autoFix: () => {
              shotB.spatial_blocking = shotB.spatial_blocking.replace(/looking right/gi, 'looking Screen Left');
              this.recompileAll();
            }
          });
        }
      }
    }
    return issues;
  }

  /**
   * Tự động đảo trục Eyeline đối với các cảnh đối thoại nếu bật 180° Lock
   */
  enforce180AxisAlternation() {
    if (!this.projectData.global_bible_vault.master_optics_and_lighting.axis_180_lock) return;
    const timeline = this.projectData.multi_shot_timeline;
    let lastCharLooking = 'right';

    timeline.forEach((shot, idx) => {
      if (shot.spatial_blocking && (shot.spatial_blocking.includes('@Char_1') || shot.spatial_blocking.includes('@Char_2'))) {
        if (idx > 0) {
          const currentLooking = lastCharLooking === 'right' ? 'left' : 'right';
          if (currentLooking === 'left') {
            shot.spatial_blocking = shot.spatial_blocking.replace(/Screen Left looking Right/gi, 'Screen Right looking Left');
          } else {
            shot.spatial_blocking = shot.spatial_blocking.replace(/Screen Right looking Left/gi, 'Screen Left looking Right');
          }
          lastCharLooking = currentLooking;
        }
      }
    });
    this.recompileAll();
  }

  /* ─────────────────────────────────────────────────────────────
   * 2. TỔ 3: OPTICAL & LIGHTING RIG CONTROLS
   * ───────────────────────────────────────────────────────────── */
  setCameraBody(cameraBodyId) {
    const found = CAMERA_BODIES.find(c => c.id === cameraBodyId);
    if (found) {
      this.projectData.global_bible_vault.master_optics_and_lighting.camera_body = found.name;
      this.recompileAll();
    }
  }

  setLensPackage(lensId) {
    const found = LENS_PACKAGES.find(l => l.id === lensId);
    if (found) {
      this.projectData.global_bible_vault.master_optics_and_lighting.lens_package = found.name;
      this.recompileAll();
    }
  }

  setFocalLengthAndTStop(focalLength, tStop) {
    this.projectData.global_bible_vault.master_optics_and_lighting.focal_length = focalLength;
    this.projectData.global_bible_vault.master_optics_and_lighting.t_stop = tStop;
    this.recompileAll();
  }

  updateLightingAngle(lightRole, angle) {
    const rig = this.projectData.global_bible_vault.master_optics_and_lighting.lighting_rig;
    if (rig[lightRole]) {
      rig[lightRole].angle = angle;
      if (lightRole === 'key_light') {
        if (angle >= 30 && angle <= 60) rig[lightRole].desc = "Classic Rembrandt 45° Key Light with natural nose shadow triangle";
        else if (angle > 60 && angle <= 110) rig[lightRole].desc = "Dramatic 90° Split Lighting Chiaroscuro (Half face in deep shadow)";
        else if (angle > 110 && angle <= 160) rig[lightRole].desc = "Moody Rim-Key kicker from behind";
        else rig[lightRole].desc = `Directional Key Light at ${angle}° azimuth`;
      }
      this.recompileAll();
    }
  }

  /* ─────────────────────────────────────────────────────────────
   * 3. TỔ 4: MULTI-SHOT TIMELINE MANAGEMENT
   * ───────────────────────────────────────────────────────────── */
  addShot(shotData = null) {
    const timeline = this.projectData.multi_shot_timeline;
    if (timeline.length >= 6) {
      alert('Đã đạt giới hạn tối đa 6 phân cảnh (chuẩn 30s Seedance 2.5 & Kling 4.0).');
      return;
    }
    const nextNum = timeline.length + 1;
    const startSec = timeline.length * 5;
    const endSec = Math.min(startSec + 6, 30);
    const startStr = `00:${startSec < 10 ? '0' + startSec : startSec}`;
    const endStr = `00:${endSec < 10 ? '0' + endSec : endSec}`;

    const newShot = shotData || {
      shot_number: nextNum,
      timecode: `${startStr} - ${endStr}`,
      shot_size: "Medium Close-Up (MCU)",
      camera_angle: "Eye-Level",
      focal_length: "50mm, T1.8",
      camera_movement: "Slow forward tracking push",
      transition_in: "Hard Cut",
      spatial_blocking: `@Char_1 centered looking Screen ${nextNum % 2 === 0 ? 'Left' : 'Right'}`,
      action_physics: "Character performs deliberate action with realistic physical inertia",
      audio_layers: {
        foley_sfx: `[${startStr}.5] Subtle Foley sound corresponding to movement`,
        ambience: "Continuous atmospheric room tone",
        dialogue: null
      }
    };

    timeline.push(newShot);
    this.recompileAll();
  }

  removeShot(shotIndex) {
    const timeline = this.projectData.multi_shot_timeline;
    if (timeline.length <= 1) {
      alert('Phải giữ tối thiểu 1 phân cảnh.');
      return;
    }
    timeline.splice(shotIndex, 1);
    timeline.forEach((s, i) => s.shot_number = i + 1);
    this.recompileAll();
  }

  updateShot(shotIndex, updatedFields) {
    const shot = this.projectData.multi_shot_timeline[shotIndex];
    if (shot) {
      Object.assign(shot, updatedFields);
      this.recompileAll();
    }
  }

  /* ─────────────────────────────────────────────────────────────
   * 4. TỔ 5: NATIVE AUDIO MIXER & LIP-SYNC
   * ───────────────────────────────────────────────────────────── */
  updateShotDialogue(shotIndex, text, speaker = '@Char_1', delivery = 'Slow, quiet intensity', lang = 'vi-VN') {
    const shot = this.projectData.multi_shot_timeline[shotIndex];
    if (shot) {
      if (!shot.audio_layers) shot.audio_layers = {};
      if (!text || text.trim() === '') {
        shot.audio_layers.dialogue = null;
      } else {
        shot.audio_layers.dialogue = {
          speaker,
          timecode: shot.timecode,
          language: lang,
          delivery,
          text
        };
      }
      this.recompileAll();
    }
  }

  updateShotFoley(shotIndex, foleyText) {
    const shot = this.projectData.multi_shot_timeline[shotIndex];
    if (shot) {
      if (!shot.audio_layers) shot.audio_layers = {};
      shot.audio_layers.foley_sfx = foleyText;
      this.recompileAll();
    }
  }

  /* ─────────────────────────────────────────────────────────────
   * 5. MASTER RECOMPILE & NLE EXPORTS
   * ───────────────────────────────────────────────────────────── */
  recompileAll() {
    this.projectData.compiled_outputs = compileAllEngines(this.projectData);
    this.saveState();
  }

  /**
   * Xuất DaVinci Resolve / Final Cut Pro XML
   */
  exportDaVinciXML() {
    const timeline = this.projectData.multi_shot_timeline;
    const projName = this.projectData.project_metadata.project_name || 'CinePrompt_Export';
    const fps = 24;

    let tracksXml = '';
    let recordIn = 0;

    timeline.forEach((shot, index) => {
      const durationFrames = 120; // 5 seconds @ 24fps
      const recordOut = recordIn + durationFrames;

      tracksXml += `
        <clipitem id="clipitem-${index + 1}">
          <name>Shot_${shot.shot_number}_${shot.shot_size.replace(/[^a-zA-Z0-9]/g, '_')}</name>
          <duration>${durationFrames}</duration>
          <rate><timebase>${fps}</timebase></rate>
          <start>${recordIn}</start>
          <end>${recordOut}</end>
          <in>0</in>
          <out>${durationFrames}</out>
          <comments>
            <master_prompt>${(shot.action_physics || '').replace(/[<>&"']/g, '')}</master_prompt>
            <camera_optics>${shot.focal_length || ''} | ${shot.camera_movement || ''}</camera_optics>
          </comments>
        </clipitem>`;

      recordIn = recordOut;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xmeml>
<xmeml version="5">
  <sequence id="seq-1">
    <name>${projName}_DirectorSequence</name>
    <duration>${recordIn}</duration>
    <rate><timebase>${fps}</timebase><ntsc>FALSE</ntsc></rate>
    <media>
      <video>
        <format>
          <samplecharacteristics>
            <width>3840</width>
            <height>1620</height>
            <pixelaspectratio>square</pixelaspectratio>
            <rate><timebase>${fps}</timebase></rate>
          </samplecharacteristics>
        </format>
        <track>
          ${tracksXml}
        </track>
      </video>
    </media>
  </sequence>
</xmeml>`;
  }

  /**
   * Xuất Printable Hollywood Call Sheet & Storyboard HTML
   */
  generatePrintableCallSheetHTML() {
    const meta = this.projectData.project_metadata;
    const optics = this.projectData.global_bible_vault.master_optics_and_lighting;
    const timeline = this.projectData.multi_shot_timeline;

    let shotRows = timeline.map(shot => `
      <tr style="border-bottom: 1px solid #333;">
        <td style="padding: 12px; font-weight: 800; color: #f59e0b; text-align: center;">SHOT ${shot.shot_number}<br><span style="font-size: 0.75rem; color: #888;">${shot.timecode}</span></td>
        <td style="padding: 12px; color: #fff;">
          <strong>${shot.shot_size}</strong> — <em>${shot.camera_angle}</em><br>
          <span style="color: #4ade80; font-size: 0.8rem;">Optics: ${shot.focal_length} | Motion: ${shot.camera_movement}</span>
        </td>
        <td style="padding: 12px; color: #ccc; font-size: 0.85rem;">${shot.action_physics}</td>
        <td style="padding: 12px; color: #93c5fd; font-size: 0.8rem;">
          ${shot.audio_layers?.dialogue ? `<strong>Thoại:</strong> "${shot.audio_layers.dialogue.text}" (${shot.audio_layers.dialogue.speaker})<br>` : ''}
          ${shot.audio_layers?.foley_sfx ? `<strong>SFX:</strong> ${shot.audio_layers.foley_sfx}<br>` : ''}
          ${shot.audio_layers?.ambience ? `<strong>Ambience:</strong> ${shot.audio_layers.ambience}` : ''}
        </td>
      </tr>
    `).join('');

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CALL SHEET & STORYBOARD — ${meta.project_name}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0b0c10; color: #f4f4f5; margin: 0; padding: 30px; }
    .header { border-bottom: 3px solid #f59e0b; padding-bottom: 20px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: flex-end; }
    h1 { margin: 0; font-size: 1.8rem; color: #fff; letter-spacing: 0.05em; }
    .meta { font-size: 0.85rem; color: #a1a1aa; line-height: 1.6; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; background: #14161d; border-radius: 8px; overflow: hidden; }
    th { background: #1f232e; color: #f59e0b; padding: 12px; text-align: left; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #27272a; font-size: 0.75rem; color: #71717a; text-align: center; }
    @media print {
      body { background: #fff; color: #000; }
      table { background: #fff; border: 1px solid #ccc; }
      th { background: #eee; color: #000; }
      tr { border-bottom: 1px solid #ddd !important; }
      td { color: #000 !important; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>🎬 PRODUCTION CALL SHEET & SHOT LIST</h1>
      <div style="font-size: 1.1rem; color: #f59e0b; font-weight: 700; margin-top: 5px;">${meta.project_name}</div>
    </div>
    <div class="meta" style="text-align: right;">
      <strong>Đạo Diễn:</strong> ${meta.director} | <strong>Hotline/Zalo:</strong> ${meta.hotline}<br>
      <strong>Camera:</strong> ${optics.camera_body} | <strong>Lens:</strong> ${optics.lens_package}<br>
      <strong>Format:</strong> ${meta.aspect_ratio} 24fps 10-bit | <strong>LUT:</strong> ${optics.color_lut}
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 12%; text-align: center;">Cảnh & Thời Gian</th>
        <th style="width: 25%;">Quy Cách Khung Hình & Quang Học</th>
        <th style="width: 35%;">Hành Động Nhân Vật & Vật Lý</th>
        <th style="width: 28%;">Lớp Âm Thanh & Thoại Đồng Bộ</th>
      </tr>
    </thead>
    <tbody>
      ${shotRows}
    </tbody>
  </table>

  <div class="footer">
    Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS) • Master Director Workstation by Đạo Diễn Trungvt (0836.384.168)
  </div>
  <script>
    window.onload = () => { window.print(); };
  </script>
</body>
</html>`;
  }
}

export const cinemaMasterEngine = new CinemaMasterEngine();
