/**
 * directorPrivateVault.js — Director's Private Asset Vault ("Thư viện của tôi")
 * ─────────────────────────────────────────────────────────────────────────────
 * Tinh hoa quản lý Tài sản Thương hiệu Độc bản & Kho lưu trữ Cá nhân của Đạo diễn.
 *
 * Triết lý cốt lõi:
 * "Tệp bạn tải lên ở đây chỉ thuộc về tài khoản của bạn và dùng lại được cho mọi video,
 * khác với kho dùng chung của hệ thống."
 *
 * 6 Danh mục tài sản độc quyền:
 * 1. background_images  — Ảnh nền 🔒 (Face Anchors, Keyframe plates, Product heroes)
 * 2. background_videos  — Video nền 🔒 (Motion loops, B-roll plates cá nhân)
 * 3. stickers           — Sticker / Logo (Logo trong suốt, Mã QR phát sáng, Gold seals)
 * 4. effects            — Hiệu ứng (3D LUTs .cube, Overlays, Light leaks, Film grain)
 * 5. audio_tracks       — Nhạc nền & SFX (Brand Sonic bed, Micro-SFX, Voice Clone audio)
 * 6. fonts              — Font chữ thương hiệu (Sigmar, Bodoni, Typography độc quyền)
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Team
 */

export const VAULT_CATEGORIES = {
  background_images: {
    id: 'background_images',
    label: 'Ảnh nền',
    isPrivate: true,
    icon: '🖼️',
    accept: 'image/jpeg,image/png,image/webp,image/avif',
    description: 'Ảnh chân dung diễn viên (Face Anchor), ảnh sản phẩm thật, bối cảnh studio riêng.'
  },
  background_videos: {
    id: 'background_videos',
    label: 'Video nền',
    isPrivate: true,
    icon: '🎬',
    accept: 'video/mp4,video/webm,video/quicktime',
    description: 'Thước phim B-roll thật của tác giả, motion plates, chuyển động khói/nước độc quyền.'
  },
  stickers: {
    id: 'stickers',
    label: 'Sticker',
    isPrivate: false,
    icon: '✨',
    accept: 'image/png,image/svg+xml,image/webp',
    description: 'Logo thương hiệu trong suốt, mã QR thanh toán/bio, huy hiệu mạ vàng, watermark.'
  },
  effects: {
    id: 'effects',
    label: 'Hiệu ứng',
    isPrivate: false,
    icon: '🪄',
    accept: '.cube,image/png,image/jpeg,video/mp4',
    description: 'Bảng màu 3D LUT Hollywood (.cube), hiệu ứng ánh sáng (light leak), hạt phim 35mm.'
  },
  audio_tracks: {
    id: 'audio_tracks',
    label: 'Nhạc nền',
    isPrivate: false,
    icon: '🎵',
    accept: 'audio/mpeg,audio/wav,audio/aac,audio/ogg',
    description: 'Nhạc nền bản quyền riêng (Brand Sonic Bed), micro-sfx, mẫu giọng clone Qwen-Omni.'
  },
  fonts: {
    id: 'fonts',
    label: 'Font',
    isPrivate: false,
    icon: '🔤',
    accept: '.ttf,.otf,.woff,.woff2',
    description: 'Font chữ bản quyền của thương hiệu (Sigmar, Gilroy, Bodoni, display typography).'
  }
};

export class DirectorPrivateVault {
  constructor() {
    this.storageKey = 'cine_director_private_vault_v1';
    this.vault = {
      background_images: [],
      background_videos: [],
      stickers: [],
      effects: [],
      audio_tracks: [],
      fonts: []
    };
    this.activeCategory = 'background_images';
    this.loadFromStorage();
  }

  loadFromStorage() {
    if (typeof localStorage === 'undefined') {
      this.seedDefaultAssets();
      return;
    }
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.vault = {
          background_images: parsed.background_images || [],
          background_videos: parsed.background_videos || [],
          stickers: parsed.stickers || [],
          effects: parsed.effects || [],
          audio_tracks: parsed.audio_tracks || [],
          fonts: parsed.fonts || []
        };
      } else {
        this.seedDefaultAssets();
      }
    } catch (e) {
      console.warn('[DirectorPrivateVault] Storage read warning:', e);
      this.seedDefaultAssets();
    }
  }

  saveToStorage() {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.vault));
    } catch (e) {
      console.warn('[DirectorPrivateVault] Storage write error:', e);
    }
  }

  /**
   * Khởi tạo sẵn tài nguyên mẫu chuẩn Đạo Diễn (Flagship Suite)
   */
  seedDefaultAssets() {
    this.vault.background_images = [
      {
        id: 'VAULT_IMG_001',
        name: 'Midnight Oud Hero Bottle Plate',
        category: 'background_images',
        isPrivate: true,
        previewUrl: '/exports/midnight-oud-tvc/keyframe_bottle_hero.jpg',
        resolution: '1080x1920 (9:16)',
        fileSize: '698 KB',
        tags: ['hero_product', 'black_marble', 'amber_gold'],
        createdAt: new Date().toISOString()
      },
      {
        id: 'VAULT_IMG_002',
        name: 'East Asian Tuxedo Gentleman Anchor',
        category: 'background_images',
        isPrivate: true,
        previewUrl: '/exports/midnight-oud-tvc/keyframe_actor_portrait.jpg',
        resolution: '1080x1920 (9:16)',
        fileSize: '637 KB',
        tags: ['actor_anchor', 'tuxedo', 'high_contrast'],
        createdAt: new Date().toISOString()
      }
    ];

    this.vault.background_videos = [
      {
        id: 'VAULT_VID_001',
        name: 'Ethereal Amber Droplet Motion 4K',
        category: 'background_videos',
        isPrivate: true,
        previewUrl: '/exports/midnight-oud-tvc/midnight_oud_tvc_30s.mp4',
        duration: '32s',
        resolution: '1080x1920',
        fileSize: '41 MB',
        tags: ['macro_drop', 'cross_dissolve', 'master_tvc'],
        createdAt: new Date().toISOString()
      }
    ];

    this.vault.stickers = [
      {
        id: 'VAULT_STK_001',
        name: 'Glowing Gold QR Code — Scan To Explore',
        category: 'stickers',
        isPrivate: false,
        previewUrl: '/exports/midnight-oud-tvc/keyframe_endcard_cta.jpg',
        resolution: '1080x1920',
        fileSize: '638 KB',
        tags: ['cta_endcard', 'qr_code', 'brand_crest'],
        createdAt: new Date().toISOString()
      }
    ];

    this.vault.effects = [
      {
        id: 'VAULT_FX_001',
        name: 'Midnight Oud Teal & Amber 3D LUT',
        category: 'effects',
        isPrivate: false,
        lutPath: 'exports/midnight-oud-tvc/MIDNIGHT_OUD_TEAL_AMBER.cube',
        fileSize: '15 KB',
        tags: ['3d_lut', 'teal_amber', 'hollywood_grading'],
        createdAt: new Date().toISOString()
      }
    ];

    this.vault.audio_tracks = [
      {
        id: 'VAULT_AUD_001',
        name: 'Orchestral Sub-Bass & Ambient Pad Bed',
        category: 'audio_tracks',
        isPrivate: false,
        duration: '32s',
        format: 'WAV 44.1kHz PCM',
        tags: ['sub_bass_36hz', 'strings_swell', 'luxury_perfume'],
        createdAt: new Date().toISOString()
      },
      {
        id: 'VAULT_AUD_002',
        name: 'Qwen-Omni Baritone Voice Clone Master Stem',
        category: 'audio_tracks',
        isPrivate: true,
        duration: '32s',
        format: 'WAV 48kHz PCM Mono',
        tags: ['voice_clone', 'actor_anchor', 'qwen_omni'],
        createdAt: new Date().toISOString()
      }
    ];

    this.vault.fonts = [
      {
        id: 'VAULT_FNT_001',
        name: 'Sigmar Regular (Cinema Headline Standard)',
        category: 'fonts',
        isPrivate: false,
        fontFamily: 'Sigmar',
        fontPath: 'exports/midnight-oud-tvc/fonts/Sigmar-Regular.ttf',
        fileSize: '45 KB',
        tags: ['subtitles', 'karaoke_blue_0091ff', 'bold_uppercase'],
        createdAt: new Date().toISOString()
      }
    ];

    this.saveToStorage();
  }

  /**
   * Lấy danh sách tài sản theo danh mục
   */
  getAssets(category) {
    if (!this.vault[category]) return [];
    return this.vault[category];
  }

  /**
   * Thêm một tài sản mới vào thư viện cá nhân
   */
  addAsset(category, assetData) {
    if (!this.vault[category]) {
      this.vault[category] = [];
    }

    const catMeta = VAULT_CATEGORIES[category] || { isPrivate: false };
    const id = assetData.id || `VAULT_${Date.now().toString(36).toUpperCase()}`;

    const newAsset = {
      id: id,
      name: assetData.name || `Tài nguyên ${this.vault[category].length + 1}`,
      category: category,
      isPrivate: assetData.isPrivate !== undefined ? assetData.isPrivate : catMeta.isPrivate,
      previewUrl: assetData.previewUrl || assetData.base64 || null,
      dataUrl: assetData.dataUrl || null,
      fileSize: assetData.fileSize || 'Tùy chỉnh',
      tags: assetData.tags || [],
      metadata: assetData.metadata || {},
      createdAt: new Date().toISOString()
    };

    this.vault[category].unshift(newAsset);
    this.saveToStorage();
    return newAsset;
  }

  /**
   * Xóa tài sản khỏi thư viện
   */
  removeAsset(category, assetId) {
    if (!this.vault[category]) return false;
    const initialLen = this.vault[category].length;
    this.vault[category] = this.vault[category].filter(a => a.id !== assetId);
    if (this.vault[category].length !== initialLen) {
      this.saveToStorage();
      return true;
    }
    return false;
  }

  /**
   * Lấy tổng quan số lượng tài sản trong kho
   */
  getVaultStats() {
    return {
      background_images: this.vault.background_images.length,
      background_videos: this.vault.background_videos.length,
      stickers: this.vault.stickers.length,
      effects: this.vault.effects.length,
      audio_tracks: this.vault.audio_tracks.length,
      fonts: this.vault.fonts.length,
      total: Object.values(this.vault).reduce((acc, arr) => acc + arr.length, 0)
    };
  }

  /**
   * Xuất gói cấu hình Brand Kit của Đạo diễn để tự động nhúng vào OpenCreator / Pipeline
   */
  exportBrandKitManifest() {
    return {
      vault_version: '1.0.0',
      owner: 'Đạo Diễn Trungvt',
      privacy_mode: 'client_isolated',
      brand_kit: {
        primary_font: this.vault.fonts[0]?.fontFamily || 'Sigmar',
        color_lut: this.vault.effects[0]?.lutPath || 'exports/midnight-oud-tvc/MIDNIGHT_OUD_TEAL_AMBER.cube',
        hero_audio_bed: this.vault.audio_tracks[0]?.name || 'Orchestral Sub-Bass',
        voice_clone_anchor: this.vault.audio_tracks.find(a => a.tags.includes('voice_clone'))?.name || null,
        brand_sticker: this.vault.stickers[0]?.name || 'Glowing Gold QR Code'
      },
      export_timestamp: new Date().toISOString()
    };
  }
}

export const directorPrivateVault = new DirectorPrivateVault();
