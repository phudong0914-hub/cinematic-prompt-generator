/**
 * cinematicColorLab.js — AI Cinematic Color Lab Engine
 * ────────────────────────────────────────────────────────
 * Text-to-LUT cinematic color grading engine using WebGL shaders.
 * Generates 3D LUT from natural language, applies real-time preview
 * via GPU-accelerated fragment shaders, and exports .cube files.
 *
 * Tech: WebGL 2.0 + 3D Texture (33×33×33 RGB Cube) + AI Color Science
 * By Đạo Diễn Trungvt — Cine Prompt Pro v3.0
 */

import { showToast } from './toast.js';

// ─── Film Stock Presets ──────────────────────────────────────────────────────

const FILM_STOCK_PRESETS = {
  kodak_vision3_250d: {
    name: 'Kodak Vision3 250D',
    description: 'Vàng ấm, da tự nhiên — Dune, Oppenheimer',
    icon: '🎞️',
    color: '#f59e0b',
    shadows: { r: 0.03, g: 0.01, b: -0.02 },
    midtones: { r: 0.06, g: 0.03, b: -0.01 },
    highlights: { r: 0.08, g: 0.05, b: 0.0 },
    saturation: 1.12,
    contrast: 1.08,
    temperature: 6200,
    grain: 0.015,
    halation: 0.02
  },
  fuji_eterna_500t: {
    name: 'Fuji Eterna 500T',
    description: 'Xanh lạnh, đêm sâu — Drive, Blade Runner 2049',
    icon: '🌃',
    color: '#38bdf8',
    shadows: { r: -0.03, g: 0.0, b: 0.06 },
    midtones: { r: -0.02, g: 0.01, b: 0.04 },
    highlights: { r: 0.0, g: 0.02, b: 0.03 },
    saturation: 0.92,
    contrast: 1.15,
    temperature: 3800,
    grain: 0.025,
    halation: 0.01
  },
  kodak_5219_500t: {
    name: 'Kodak 5219 500T',
    description: 'Magenta nhẹ, cinematic — The Batman, Joker',
    icon: '🦇',
    color: '#c084fc',
    shadows: { r: 0.02, g: -0.02, b: 0.04 },
    midtones: { r: 0.03, g: -0.01, b: 0.02 },
    highlights: { r: 0.04, g: 0.0, b: 0.01 },
    saturation: 0.95,
    contrast: 1.2,
    temperature: 4200,
    grain: 0.02,
    halation: 0.03
  },
  arri_logc_rec709: {
    name: 'ARRI LogC → Rec.709',
    description: 'Trung tính, broadcast — TV Series chuẩn',
    icon: '📺',
    color: '#6ee7b7',
    shadows: { r: 0.0, g: 0.0, b: 0.0 },
    midtones: { r: 0.01, g: 0.01, b: 0.0 },
    highlights: { r: 0.0, g: 0.0, b: -0.01 },
    saturation: 1.05,
    contrast: 1.1,
    temperature: 5600,
    grain: 0.005,
    halation: 0.0
  },
  aces_ap0_srgb: {
    name: 'ACES AP0 → sRGB',
    description: 'Wide gamut, HDR ready — Marvel Phase 5+',
    icon: '🦸',
    color: '#f472b6',
    shadows: { r: -0.01, g: 0.0, b: 0.01 },
    midtones: { r: 0.02, g: 0.01, b: 0.0 },
    highlights: { r: 0.03, g: 0.02, b: -0.01 },
    saturation: 1.08,
    contrast: 1.05,
    temperature: 5500,
    grain: 0.008,
    halation: 0.01
  },
  noir_classic: {
    name: 'Classic Film Noir',
    description: 'Đen trắng tương phản — The Third Man, Sin City',
    icon: '🎩',
    color: '#94a3b8',
    shadows: { r: -0.08, g: -0.08, b: -0.06 },
    midtones: { r: -0.02, g: -0.02, b: -0.01 },
    highlights: { r: 0.1, g: 0.1, b: 0.08 },
    saturation: 0.0,
    contrast: 1.45,
    temperature: 5000,
    grain: 0.04,
    halation: 0.02
  },
  teal_orange: {
    name: 'Teal & Orange',
    description: 'Hollywood blockbuster look — Transformers, Mad Max',
    icon: '🔥',
    color: '#fb923c',
    shadows: { r: -0.04, g: 0.02, b: 0.08 },
    midtones: { r: 0.0, g: 0.0, b: 0.0 },
    highlights: { r: 0.1, g: 0.05, b: -0.04 },
    saturation: 1.25,
    contrast: 1.18,
    temperature: 5200,
    grain: 0.01,
    halation: 0.015
  },
  pastel_anderson: {
    name: 'Wes Anderson Pastel',
    description: 'Pastel đối xứng — Grand Budapest, Moonrise Kingdom',
    icon: '🏨',
    color: '#fda4af',
    shadows: { r: 0.02, g: 0.01, b: 0.03 },
    midtones: { r: 0.05, g: 0.03, b: 0.04 },
    highlights: { r: 0.08, g: 0.06, b: 0.05 },
    saturation: 0.85,
    contrast: 0.9,
    temperature: 6000,
    grain: 0.012,
    halation: 0.008
  },
  vietnamese_golden: {
    name: 'Sài Gòn Vàng Ấm',
    description: 'Nắng Sài Gòn, vàng ấm hoài niệm — Phim Việt mới',
    icon: '🏍️',
    color: '#fbbf24',
    shadows: { r: 0.04, g: 0.02, b: -0.03 },
    midtones: { r: 0.07, g: 0.04, b: -0.02 },
    highlights: { r: 0.1, g: 0.06, b: 0.01 },
    saturation: 1.15,
    contrast: 1.05,
    temperature: 6500,
    grain: 0.02,
    halation: 0.025
  },
  cyberpunk_neon: {
    name: 'Cyberpunk Neon',
    description: 'Neon tím xanh, tương lai — Cyberpunk 2077, Ghost in Shell',
    icon: '🌆',
    color: '#a855f7',
    shadows: { r: 0.02, g: -0.03, b: 0.08 },
    midtones: { r: 0.04, g: -0.02, b: 0.06 },
    highlights: { r: 0.06, g: 0.0, b: 0.04 },
    saturation: 1.3,
    contrast: 1.25,
    temperature: 4000,
    grain: 0.008,
    halation: 0.035
  }
};

// ─── Prompt-to-LUT Color Keyword Map ─────────────────────────────────────────

const COLOR_KEYWORDS = {
  temperature: {
    'ấm': 6500, 'warm': 6500, 'nóng': 7000, 'hot': 7000,
    'lạnh': 3800, 'cold': 3800, 'cool': 4200, 'mát': 4500,
    'trung tính': 5500, 'neutral': 5500, 'daylight': 5600
  },
  tint: {
    'teal': { r: -0.04, g: 0.02, b: 0.06 },
    'xanh lá': { r: -0.02, g: 0.05, b: -0.01 },
    'xanh dương': { r: -0.03, g: 0.0, b: 0.06 },
    'blue': { r: -0.03, g: 0.0, b: 0.06 },
    'vàng': { r: 0.06, g: 0.04, b: -0.03 },
    'yellow': { r: 0.06, g: 0.04, b: -0.03 },
    'cam': { r: 0.08, g: 0.03, b: -0.04 },
    'orange': { r: 0.08, g: 0.03, b: -0.04 },
    'hồng': { r: 0.05, g: -0.01, b: 0.02 },
    'pink': { r: 0.05, g: -0.01, b: 0.02 },
    'magenta': { r: 0.04, g: -0.03, b: 0.05 },
    'tím': { r: 0.03, g: -0.03, b: 0.06 },
    'purple': { r: 0.03, g: -0.03, b: 0.06 },
    'đỏ': { r: 0.08, g: -0.02, b: -0.02 },
    'red': { r: 0.08, g: -0.02, b: -0.02 },
    'amber': { r: 0.07, g: 0.04, b: -0.02 },
    'gold': { r: 0.06, g: 0.04, b: -0.01 },
    'sepia': { r: 0.06, g: 0.03, b: -0.04 },
  },
  mood: {
    'tối': { contrast: 1.3, saturation: 0.85 },
    'dark': { contrast: 1.3, saturation: 0.85 },
    'sáng': { contrast: 0.9, saturation: 1.1 },
    'bright': { contrast: 0.9, saturation: 1.1 },
    'mờ': { contrast: 0.85, saturation: 0.75 },
    'faded': { contrast: 0.85, saturation: 0.75 },
    'sặc sỡ': { contrast: 1.1, saturation: 1.35 },
    'vivid': { contrast: 1.1, saturation: 1.35 },
    'nhẹ nhàng': { contrast: 0.95, saturation: 0.9 },
    'soft': { contrast: 0.95, saturation: 0.9 },
    'mạnh': { contrast: 1.25, saturation: 1.2 },
    'bold': { contrast: 1.25, saturation: 1.2 },
    'cinematic': { contrast: 1.15, saturation: 1.05 },
    'điện ảnh': { contrast: 1.15, saturation: 1.05 }
  }
};

// ─── 3D LUT Generator ────────────────────────────────────────────────────────

const LUT_SIZE = 33;

function generateLUTData(preset) {
  const data = new Float32Array(LUT_SIZE * LUT_SIZE * LUT_SIZE * 4);
  let idx = 0;

  for (let b = 0; b < LUT_SIZE; b++) {
    for (let g = 0; g < LUT_SIZE; g++) {
      for (let r = 0; r < LUT_SIZE; r++) {
        let R = r / (LUT_SIZE - 1);
        let G = g / (LUT_SIZE - 1);
        let B = b / (LUT_SIZE - 1);

        // 1. Apply contrast (S-curve)
        const contrast = preset.contrast || 1.0;
        R = _applySCurve(R, contrast);
        G = _applySCurve(G, contrast);
        B = _applySCurve(B, contrast);

        // 2. Apply color shifts per zone
        const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
        const shadows = preset.shadows || { r: 0, g: 0, b: 0 };
        const midtones = preset.midtones || { r: 0, g: 0, b: 0 };
        const highlights = preset.highlights || { r: 0, g: 0, b: 0 };

        // Shadow zone (lum < 0.3)
        const shadowWeight = Math.max(0, 1 - luminance / 0.3);
        // Midtone zone (0.2 < lum < 0.7)
        const midWeight = 1 - Math.abs(luminance - 0.45) / 0.45;
        // Highlight zone (lum > 0.6)
        const highWeight = Math.max(0, (luminance - 0.6) / 0.4);

        R += shadows.r * shadowWeight + midtones.r * midWeight + highlights.r * highWeight;
        G += shadows.g * shadowWeight + midtones.g * midWeight + highlights.g * highWeight;
        B += shadows.b * shadowWeight + midtones.b * midWeight + highlights.b * highWeight;

        // 3. Apply saturation
        const sat = preset.saturation || 1.0;
        const gray = 0.2126 * R + 0.7152 * G + 0.0722 * B;
        R = gray + sat * (R - gray);
        G = gray + sat * (G - gray);
        B = gray + sat * (B - gray);

        // 4. Temperature shift (approximate)
        const temp = preset.temperature || 5500;
        if (temp > 5500) {
          const warmShift = (temp - 5500) / 5000 * 0.03;
          R += warmShift;
          B -= warmShift * 0.5;
        } else if (temp < 5500) {
          const coolShift = (5500 - temp) / 5000 * 0.03;
          B += coolShift;
          R -= coolShift * 0.5;
        }

        // Clamp
        data[idx++] = Math.max(0, Math.min(1, R));
        data[idx++] = Math.max(0, Math.min(1, G));
        data[idx++] = Math.max(0, Math.min(1, B));
        data[idx++] = 1.0;
      }
    }
  }

  return data;
}

function _applySCurve(x, intensity) {
  if (intensity === 1.0) return x;
  // Soft S-curve using sigmoid-like function
  const mid = 0.5;
  const k = (intensity - 1.0) * 4;
  return mid + (x - mid) * (1 + k * (1 - Math.abs(2 * x - 1)));
}

// ─── Export .cube file ───────────────────────────────────────────────────────

function exportCubeFile(lutData, name) {
  let cubeContent = `# Cinema Color Lab — ${name}\n`;
  cubeContent += `# Generated by Cine Prompt Pro v3.0\n`;
  cubeContent += `# By Đạo Diễn Trungvt\n`;
  cubeContent += `TITLE "${name}"\n`;
  cubeContent += `LUT_3D_SIZE ${LUT_SIZE}\n`;
  cubeContent += `DOMAIN_MIN 0.0 0.0 0.0\n`;
  cubeContent += `DOMAIN_MAX 1.0 1.0 1.0\n\n`;

  let idx = 0;
  for (let b = 0; b < LUT_SIZE; b++) {
    for (let g = 0; g < LUT_SIZE; g++) {
      for (let r = 0; r < LUT_SIZE; r++) {
        const R = lutData[idx].toFixed(6);
        const G = lutData[idx + 1].toFixed(6);
        const B = lutData[idx + 2].toFixed(6);
        cubeContent += `${R} ${G} ${B}\n`;
        idx += 4;
      }
    }
  }

  return cubeContent;
}

// ─── Prompt to LUT Preset Parser ─────────────────────────────────────────────

function promptToPreset(promptText) {
  const text = promptText.toLowerCase().trim();

  // Check if it matches a named film stock
  for (const [key, preset] of Object.entries(FILM_STOCK_PRESETS)) {
    const nameWords = preset.name.toLowerCase().split(/\s+/);
    if (nameWords.every(word => text.includes(word))) {
      return { ...preset, _source: 'film_stock', _key: key };
    }
  }

  // Build custom preset from keywords
  const custom = {
    name: 'Custom AI Grade',
    description: promptText,
    icon: '🎨',
    color: '#ffd700',
    shadows: { r: 0, g: 0, b: 0 },
    midtones: { r: 0, g: 0, b: 0 },
    highlights: { r: 0, g: 0, b: 0 },
    saturation: 1.0,
    contrast: 1.0,
    temperature: 5500,
    grain: 0.01,
    halation: 0.01,
    _source: 'prompt'
  };

  // Parse temperature keywords
  for (const [keyword, temp] of Object.entries(COLOR_KEYWORDS.temperature)) {
    if (text.includes(keyword)) {
      custom.temperature = temp;
      break;
    }
  }

  // Parse tint/color keywords
  let tintCount = 0;
  const tints = [];
  for (const [keyword, tint] of Object.entries(COLOR_KEYWORDS.tint)) {
    if (text.includes(keyword)) {
      tints.push({ keyword, tint });
      tintCount++;
    }
  }

  // Apply tints — shadows get first tint, highlights get second, midtones blend
  if (tints.length >= 2) {
    // Split-tone: first tint → shadows, second → highlights
    custom.shadows = { ...tints[0].tint };
    custom.highlights = { ...tints[1].tint };
    custom.midtones = {
      r: (tints[0].tint.r + tints[1].tint.r) * 0.3,
      g: (tints[0].tint.g + tints[1].tint.g) * 0.3,
      b: (tints[0].tint.b + tints[1].tint.b) * 0.3
    };
  } else if (tints.length === 1) {
    const t = tints[0].tint;
    custom.shadows = { r: t.r * 0.8, g: t.g * 0.8, b: t.b * 0.8 };
    custom.midtones = { r: t.r * 0.5, g: t.g * 0.5, b: t.b * 0.5 };
    custom.highlights = { r: t.r * 0.3, g: t.g * 0.3, b: t.b * 0.3 };
  }

  // Parse mood keywords
  for (const [keyword, moodParams] of Object.entries(COLOR_KEYWORDS.mood)) {
    if (text.includes(keyword)) {
      custom.contrast = moodParams.contrast;
      custom.saturation = moodParams.saturation;
      break;
    }
  }

  return custom;
}

// ─── WebGL Preview Renderer ──────────────────────────────────────────────────

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_image;
  uniform sampler2D u_lut;
  uniform float u_lutSize;
  uniform float u_intensity;
  uniform float u_grain;
  uniform float u_vignette;
  uniform float u_time;

  // Film grain noise
  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  vec3 applyLUT(vec3 color) {
    float maxIdx = u_lutSize - 1.0;

    float r = color.r * maxIdx;
    float g = color.g * maxIdx;
    float b = color.b * maxIdx;

    // Simple 2D texture LUT lookup (packed as strip)
    float bFloor = floor(b);
    float bCeil = ceil(b);
    float bFrac = b - bFloor;

    // Calculate UV for 2D strip layout
    float sliceWidth = 1.0 / u_lutSize;
    
    vec2 uv1 = vec2(
      (bFloor * u_lutSize + r) / (u_lutSize * u_lutSize),
      g / maxIdx
    );
    vec2 uv2 = vec2(
      (bCeil * u_lutSize + r) / (u_lutSize * u_lutSize),
      g / maxIdx
    );

    vec3 color1 = texture2D(u_lut, uv1).rgb;
    vec3 color2 = texture2D(u_lut, uv2).rgb;

    return mix(color1, color2, bFrac);
  }

  void main() {
    vec4 original = texture2D(u_image, v_texCoord);
    vec3 graded = applyLUT(original.rgb);

    // Mix with intensity
    vec3 result = mix(original.rgb, graded, u_intensity);

    // Film grain
    if (u_grain > 0.0) {
      float noise = (rand(v_texCoord + vec2(u_time * 0.01, 0.0)) - 0.5) * u_grain;
      result += vec3(noise);
    }

    // Vignette
    if (u_vignette > 0.0) {
      vec2 center = v_texCoord - 0.5;
      float dist = length(center) * 1.414;
      float vig = 1.0 - smoothstep(0.5, 1.2, dist) * u_vignette;
      result *= vig;
    }

    gl_FragColor = vec4(clamp(result, 0.0, 1.0), original.a);
  }
`;

// ─── Main Color Lab Engine ───────────────────────────────────────────────────

export class CinematicColorLab {
  constructor() {
    this.canvas = null;
    this.gl = null;
    this.program = null;
    this.currentPreset = null;
    this.currentLUT = null;
    this.imageTexture = null;
    this.lutTexture = null;
    this.intensity = 1.0;
    this.grain = 0.01;
    this.vignette = 0.3;
    this.presets = FILM_STOCK_PRESETS;
    this._animFrame = null;
    this._sourceImage = null;
  }

  // ── Get all presets ──
  getPresets() {
    return { ...FILM_STOCK_PRESETS };
  }

  // ── Generate LUT from preset ──
  generateLUT(preset) {
    this.currentPreset = preset;
    this.currentLUT = generateLUTData(preset);
    return this.currentLUT;
  }

  // ── Generate LUT from text prompt ──
  generateFromPrompt(promptText) {
    const preset = promptToPreset(promptText);
    return {
      preset,
      lut: this.generateLUT(preset)
    };
  }

  // ── Generate LUT from named film stock ──
  generateFromStock(stockKey) {
    const preset = FILM_STOCK_PRESETS[stockKey];
    if (!preset) return null;
    return {
      preset,
      lut: this.generateLUT(preset)
    };
  }

  // ── Initialize WebGL canvas ──
  initCanvas(canvasElement) {
    this.canvas = canvasElement;
    this.gl = canvasElement.getContext('webgl', {
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
      antialias: true
    });

    if (!this.gl) {
      console.warn('[ColorLab] WebGL not available, falling back to 2D');
      return false;
    }

    this._compileProgram();
    return true;
  }

  _compileProgram() {
    const gl = this.gl;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error('[ColorLab] Fragment shader error:', gl.getShaderInfoLog(fs));
    }

    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    gl.useProgram(this.program);

    // Setup geometry (fullscreen quad)
    const positions = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]);
    const texCoords = new Float32Array([
      0, 1, 1, 1, 0, 0,
      0, 0, 1, 1, 1, 0
    ]);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(this.program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const texBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    const texLoc = gl.getAttribLocation(this.program, 'a_texCoord');
    gl.enableVertexAttribArray(texLoc);
    gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 0, 0);
  }

  // ── Load image for preview ──
  loadImage(imgElement) {
    if (!this.gl) return;
    const gl = this.gl;

    this._sourceImage = imgElement;

    // Set canvas size to match image aspect ratio
    const maxW = Math.min(imgElement.naturalWidth || imgElement.width, 800);
    const ratio = (imgElement.naturalHeight || imgElement.height) / (imgElement.naturalWidth || imgElement.width);
    this.canvas.width = maxW;
    this.canvas.height = Math.round(maxW * ratio);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    // Upload image texture
    if (this.imageTexture) gl.deleteTexture(this.imageTexture);
    this.imageTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.imageTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgElement);
  }

  // ── Upload LUT as 2D strip texture ──
  _uploadLUT(lutData) {
    if (!this.gl) return;
    const gl = this.gl;

    // Pack 3D LUT into a 2D strip: (LUT_SIZE * LUT_SIZE) x LUT_SIZE
    const stripWidth = LUT_SIZE * LUT_SIZE;
    const stripHeight = LUT_SIZE;
    const pixels = new Uint8Array(stripWidth * stripHeight * 4);

    let srcIdx = 0;
    for (let b = 0; b < LUT_SIZE; b++) {
      for (let g = 0; g < LUT_SIZE; g++) {
        for (let r = 0; r < LUT_SIZE; r++) {
          const dstIdx = ((g * stripWidth) + (b * LUT_SIZE + r)) * 4;
          pixels[dstIdx] = Math.round(lutData[srcIdx] * 255);
          pixels[dstIdx + 1] = Math.round(lutData[srcIdx + 1] * 255);
          pixels[dstIdx + 2] = Math.round(lutData[srcIdx + 2] * 255);
          pixels[dstIdx + 3] = 255;
          srcIdx += 4;
        }
      }
    }

    if (this.lutTexture) gl.deleteTexture(this.lutTexture);
    this.lutTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.lutTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, stripWidth, stripHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  }

  // ── Render frame ──
  render() {
    if (!this.gl || !this.program || !this.imageTexture || !this.currentLUT) return;
    const gl = this.gl;

    this._uploadLUT(this.currentLUT);

    gl.useProgram(this.program);

    // Set uniforms
    gl.uniform1i(gl.getUniformLocation(this.program, 'u_image'), 0);
    gl.uniform1i(gl.getUniformLocation(this.program, 'u_lut'), 1);
    gl.uniform1f(gl.getUniformLocation(this.program, 'u_lutSize'), LUT_SIZE);
    gl.uniform1f(gl.getUniformLocation(this.program, 'u_intensity'), this.intensity);
    gl.uniform1f(gl.getUniformLocation(this.program, 'u_grain'), this.currentPreset?.grain || this.grain);
    gl.uniform1f(gl.getUniformLocation(this.program, 'u_vignette'), this.vignette);
    gl.uniform1f(gl.getUniformLocation(this.program, 'u_time'), performance.now() * 0.001);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.imageTexture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.lutTexture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  // ── Export .cube file ──
  exportCube(name) {
    if (!this.currentLUT) {
      showToast('Chưa có LUT nào được tạo. Hãy chọn Film Stock hoặc nhập Prompt.', 'warning');
      return null;
    }
    const cubeName = name || this.currentPreset?.name || 'CinePromptPro_Custom';
    const cubeContent = exportCubeFile(this.currentLUT, cubeName);

    // Trigger download
    const blob = new Blob([cubeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cubeName.replace(/\s+/g, '_')}.cube`;
    a.click();
    URL.revokeObjectURL(url);

    showToast(`📥 Đã tải ${a.download} — Dùng trong Premiere / Resolve / CapCut!`, 'success', 4000);
    return cubeContent;
  }

  // ── Export canvas as PNG ──
  exportPreviewImage() {
    if (!this.canvas) return;
    const url = this.canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `CineColorLab_Preview_${Date.now()}.png`;
    a.click();
    showToast('📸 Đã tải ảnh preview color grade!', 'success');
  }

  // ── Render preview palette (no WebGL, CSS-only) ──
  renderPaletteCSS(preset) {
    if (!preset) return '';

    const s = preset.shadows || {};
    const m = preset.midtones || {};
    const h = preset.highlights || {};

    const shadowColor = `rgb(${Math.round((0.15 + (s.r || 0)) * 255)}, ${Math.round((0.15 + (s.g || 0)) * 255)}, ${Math.round((0.15 + (s.b || 0)) * 255)})`;
    const midColor = `rgb(${Math.round((0.5 + (m.r || 0)) * 255)}, ${Math.round((0.5 + (m.g || 0)) * 255)}, ${Math.round((0.5 + (m.b || 0)) * 255)})`;
    const highColor = `rgb(${Math.round((0.85 + (h.r || 0)) * 255)}, ${Math.round((0.85 + (h.g || 0)) * 255)}, ${Math.round((0.85 + (h.b || 0)) * 255)})`;

    return `linear-gradient(90deg, ${shadowColor} 0%, ${midColor} 50%, ${highColor} 100%)`;
  }

  // ── Cleanup ──
  destroy() {
    if (this._animFrame) cancelAnimationFrame(this._animFrame);
    if (this.gl) {
      if (this.imageTexture) this.gl.deleteTexture(this.imageTexture);
      if (this.lutTexture) this.gl.deleteTexture(this.lutTexture);
    }
  }
}

// ─── Singleton Export ────────────────────────────────────────────────────────

export const colorLab = new CinematicColorLab();
