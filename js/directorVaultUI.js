/**
 * directorVaultUI.js — UI Controller for Director's Private Asset Vault ("Thư viện của tôi")
 * ─────────────────────────────────────────────────────────────────────────────────────────────
 * Quản lý giao diện, tương tác tab, kéo thả tệp, nạp tài sản vào Studio và xuất Brand Kit.
 */

import { directorPrivateVault, VAULT_CATEGORIES } from './directorPrivateVault.js';

class DirectorVaultUI {
  constructor() {
    this.vault = directorPrivateVault;
    this.activeCategory = 'background_images';
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    this.bindEvents();
    this.renderTabs();
    this.renderStats();
    this.renderAssetsGrid();
    this.initialized = true;
  }

  bindEvents() {
    // Toolbar trigger button
    const triggerBtn = document.getElementById('director-vault-btn');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        if (typeof window.openDirectorVaultModal === 'function') {
          window.openDirectorVaultModal();
        }
      });
    }

    // Modal backdrop click to close
    const overlay = document.getElementById('director-vault-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay && typeof window.closeDirectorVaultModal === 'function') {
          window.closeDirectorVaultModal();
        }
      });
    }

    // Close button
    const closeBtn = document.getElementById('director-vault-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (typeof window.closeDirectorVaultModal === 'function') {
          window.closeDirectorVaultModal();
        }
      });
    }

    // Upload Dropzone & File Input
    const dropzone = document.getElementById('director-vault-dropzone');
    const fileInput = document.getElementById('director-vault-file-input');
    const uploadBtn = document.getElementById('director-vault-upload-trigger-btn');

    if (uploadBtn && fileInput) {
      uploadBtn.addEventListener('click', () => fileInput.click());
    }

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
          fileInput.click();
        }
      });

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#ffd700';
        dropzone.style.background = 'rgba(255, 215, 0, 0.08)';
      });

      ['dragleave', 'dragend'].forEach(evt => {
        dropzone.addEventListener(evt, () => {
          dropzone.style.borderColor = 'rgba(255, 215, 0, 0.3)';
          dropzone.style.background = 'rgba(0, 0, 0, 0.3)';
        });
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        dropzone.style.background = 'rgba(0, 0, 0, 0.3)';
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
          this.handleFileUpload(files[0]);
        }
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
          this.handleFileUpload(file);
          fileInput.value = ''; // Reset input
        }
      });
    }

    // Export Brand Kit Manifest
    const exportBtn = document.getElementById('director-vault-export-manifest-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => this.exportManifest());
    }
  }

  renderTabs() {
    const tabsContainer = document.getElementById('director-vault-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    const stats = this.vault.getVaultStats();

    Object.entries(VAULT_CATEGORIES).forEach(([catKey, catMeta]) => {
      const count = stats[catKey] || 0;
      const isActive = catKey === this.activeCategory;
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = `vault-tab-pill ${isActive ? 'vault-tab-pill--active' : ''}`;
      tabBtn.dataset.category = catKey;
      
      const lockIcon = catMeta.isPrivate ? ' 🔒' : '';
      tabBtn.innerHTML = `
        <span class="vault-tab-icon">${catMeta.icon}</span>
        <span class="vault-tab-title">${catMeta.label}${lockIcon}</span>
        <span class="vault-tab-badge">${count}</span>
      `;

      tabBtn.addEventListener('click', () => {
        this.activeCategory = catKey;
        this.renderTabs();
        this.renderStats();
        this.renderAssetsGrid();
        this.updateUploadAcceptType();
      });

      tabsContainer.appendChild(tabBtn);
    });
  }

  updateUploadAcceptType() {
    const fileInput = document.getElementById('director-vault-file-input');
    const uploadHint = document.getElementById('director-vault-upload-hint');
    const catMeta = VAULT_CATEGORIES[this.activeCategory];
    if (fileInput && catMeta) {
      fileInput.accept = catMeta.accept;
    }
    if (uploadHint && catMeta) {
      uploadHint.textContent = `Tải lên ${catMeta.label} (${catMeta.accept.replace(/image\/|video\/|audio\//g, '')}) — ${catMeta.description}`;
    }
  }

  renderStats() {
    const descEl = document.getElementById('director-vault-cat-desc');
    const statsEl = document.getElementById('director-vault-stats-text');
    const catMeta = VAULT_CATEGORIES[this.activeCategory];
    const stats = this.vault.getVaultStats();

    if (descEl && catMeta) {
      descEl.innerHTML = `
        <span style="color:#ffd700; font-weight:700;">${catMeta.icon} ${catMeta.label}${catMeta.isPrivate ? ' (Riêng tư 🔒)' : ''}:</span>
        ${catMeta.description}
      `;
    }

    if (statsEl) {
      statsEl.textContent = `Tổng cộng: ${stats.total} tài sản trong kho riêng của Đạo diễn · Client-Side Isolated`;
    }
  }

  renderAssetsGrid() {
    const gridEl = document.getElementById('director-vault-grid');
    if (!gridEl) return;

    const assets = this.vault.getAssets(this.activeCategory);
    gridEl.innerHTML = '';

    if (assets.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:40px 20px; color:#94a3b8; background:rgba(0,0,0,0.25); border:1px dashed rgba(255,215,0,0.2); border-radius:12px;">
          <div style="font-size:2.5rem; margin-bottom:10px;">📦</div>
          <div style="font-size:0.95rem; font-weight:700; color:#ffd700;">Chưa có tài sản trong danh mục này</div>
          <p style="font-size:0.8rem; margin:6px 0 0; color:#64748b;">Kéo thả tệp hoặc bấm nút Tải Lên ở phía trên để thêm tài nguyên cá nhân của bạn.</p>
        </div>
      `;
      return;
    }

    assets.forEach(asset => {
      const card = document.createElement('div');
      card.className = 'vault-asset-card';
      card.dataset.assetId = asset.id;

      // Card Preview Content based on category
      let previewHTML = '';
      if (this.activeCategory === 'background_images') {
        previewHTML = asset.previewUrl 
          ? `<img src="${asset.previewUrl}" alt="${asset.name}" class="vault-asset-thumb" loading="lazy" onerror="this.src='/logo.jpg';" />`
          : `<div class="vault-asset-placeholder">🖼️</div>`;
      } else if (this.activeCategory === 'background_videos') {
        previewHTML = `
          <div class="vault-video-thumb-wrapper">
            ${asset.previewUrl ? `<video src="${asset.previewUrl}" class="vault-asset-thumb" muted loop playsinline></video>` : ''}
            <div class="vault-video-badge">▶ ${asset.duration || 'Video'}</div>
          </div>
        `;
      } else if (this.activeCategory === 'stickers') {
        previewHTML = `
          <div class="vault-sticker-bg">
            <img src="${asset.previewUrl || '/logo.jpg'}" alt="${asset.name}" class="vault-sticker-thumb" />
          </div>
        `;
      } else if (this.activeCategory === 'effects') {
        previewHTML = `
          <div class="vault-effect-preview">
            <div style="font-size:2rem; margin-bottom:4px;">🪄</div>
            <div style="font-size:0.75rem; font-weight:800; color:#f472b6;">3D LUT .CUBE</div>
          </div>
        `;
      } else if (this.activeCategory === 'audio_tracks') {
        previewHTML = `
          <div class="vault-audio-preview">
            <div style="font-size:2rem; margin-bottom:4px;">🎵</div>
            <div style="font-size:0.75rem; font-weight:800; color:#38bdf8;">${asset.duration || 'Audio'}</div>
          </div>
        `;
      } else if (this.activeCategory === 'fonts') {
        previewHTML = `
          <div class="vault-font-preview">
            <div style="font-size:1.8rem; font-weight:900; color:#ffd700; line-height:1;">Aa</div>
            <div style="font-size:0.72rem; color:#94a3b8; margin-top:4px;">${asset.fontFamily || 'Typography'}</div>
          </div>
        `;
      }

      const privacyBadge = asset.isPrivate 
        ? `<span class="vault-privacy-tag vault-privacy-tag--private">🔒 Riêng tư</span>`
        : `<span class="vault-privacy-tag vault-privacy-tag--public">🌐 Toàn cục</span>`;

      const tagsHTML = (asset.tags || []).map(t => `<span class="vault-asset-tag">#${t}</span>`).join(' ');

      card.innerHTML = `
        <div class="vault-asset-preview-container">
          ${previewHTML}
          <div class="vault-asset-overlay-badge">
            ${privacyBadge}
          </div>
        </div>
        <div class="vault-asset-body">
          <h4 class="vault-asset-name" title="${asset.name}">${asset.name}</h4>
          <div class="vault-asset-meta">
            <span>${asset.resolution || asset.format || asset.fileSize || 'Standard'}</span>
            ${asset.fileSize ? `<span>· ${asset.fileSize}</span>` : ''}
          </div>
          <div class="vault-asset-tags">${tagsHTML}</div>
          <div class="vault-asset-actions">
            <button type="button" class="vault-action-use-btn" title="Nạp tài sản vào Studio">
              🎯 Dùng Ngay
            </button>
            <button type="button" class="vault-action-del-btn" title="Xóa tài sản khỏi kho">
              🗑️
            </button>
          </div>
        </div>
      `;

      // Video preview hover trigger
      const vid = card.querySelector('video');
      if (vid) {
        card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
        card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
      }

      // Action: Use Asset
      const useBtn = card.querySelector('.vault-action-use-btn');
      if (useBtn) {
        useBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.useAssetInStudio(asset);
        });
      }

      // Action: Delete Asset
      const delBtn = card.querySelector('.vault-action-del-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Bạn có chắc muốn xóa tài sản "${asset.name}" khỏi thư viện riêng?`)) {
            this.vault.removeAsset(this.activeCategory, asset.id);
            this.renderTabs();
            this.renderStats();
            this.renderAssetsGrid();
            if (window.showToast) window.showToast('🗑️ Đã xóa tài sản khỏi kho riêng.', 'info');
          }
        });
      }

      gridEl.appendChild(card);
    });
  }

  handleFileUpload(file) {
    const cat = this.activeCategory;
    const catMeta = VAULT_CATEGORIES[cat];
    const reader = new FileReader();

    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const fileSizeKB = Math.round(file.size / 1024);
      const fileSizeStr = fileSizeKB > 1024 ? `${(fileSizeKB / 1024).toFixed(1)} MB` : `${fileSizeKB} KB`;

      const newAsset = {
        name: file.name.replace(/\.[^/.]+$/, ""),
        category: cat,
        isPrivate: catMeta.isPrivate,
        previewUrl: dataUrl,
        dataUrl: dataUrl,
        fileSize: fileSizeStr,
        tags: [cat.replace('background_', ''), 'uploaded_custom'],
        metadata: {
          mimeType: file.type,
          originalName: file.name
        }
      };

      this.vault.addAsset(cat, newAsset);
      this.renderTabs();
      this.renderStats();
      this.renderAssetsGrid();

      if (window.showToast) {
        window.showToast(`✅ Đã thêm "${file.name}" vào ${catMeta.label} riêng tư!`, 'success');
      }
    };

    if (cat === 'background_videos' || file.type.startsWith('video/')) {
      // For large video files in browser demo
      reader.readAsDataURL(file);
    } else if (file.name.endsWith('.cube')) {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }
  }

  useAssetInStudio(asset) {
    const subjectInput = document.getElementById('subject-input');
    const charInput = document.getElementById('character-input');

    if (asset.category === 'background_images') {
      if (charInput) {
        const val = charInput.value.trim();
        const addition = `[FACE_ANCHOR: ${asset.name}] Keyframe Plate Reference: ${asset.previewUrl || asset.id}`;
        charInput.value = val ? `${val}\n${addition}` : addition;
        charInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(charInput);
      }
      if (window.showToast) window.showToast(`🎭 Đã gán "${asset.name}" làm Khóa Nhân Vật!`, 'success');
    } else if (asset.category === 'background_videos') {
      if (subjectInput) {
        const val = subjectInput.value.trim();
        const addition = `[MOTION_PLATE: ${asset.name}] B-roll continuous plate duration ${asset.duration || '32s'}`;
        subjectInput.value = val ? `${val}\n${addition}` : addition;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(subjectInput);
      }
      if (window.showToast) window.showToast(`🎬 Đã nạp Video B-roll vào kịch bản!`, 'success');
    } else if (asset.category === 'stickers') {
      if (subjectInput) {
        const val = subjectInput.value.trim();
        const addition = `[WATERMARK_STICKER: ${asset.name}] Hiển thị logo/mã QR ở góc màn hình`;
        subjectInput.value = val ? `${val}\n${addition}` : addition;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(subjectInput);
      }
      if (window.showToast) window.showToast(`✨ Đã gắn Sticker / QR Code vào kịch bản!`, 'success');
    } else if (asset.category === 'effects') {
      if (subjectInput) {
        const val = subjectInput.value.trim();
        const addition = `[COLOR_GRADE_LUT: ${asset.name}] Áp dụng bảng màu điện ảnh Hollywood 3D LUT`;
        subjectInput.value = val ? `${val}\n${addition}` : addition;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(subjectInput);
      }
      if (window.showToast) window.showToast(`🪄 Đã kích hoạt 3D LUT ${asset.name}!`, 'success');
    } else if (asset.category === 'audio_tracks') {
      if (subjectInput) {
        const val = subjectInput.value.trim();
        const addition = `[AUDIO_DESIGN: ${asset.name}] Nhạc nền Sub-bass & Giọng đọc bản quyền riêng`;
        subjectInput.value = val ? `${val}\n${addition}` : addition;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(subjectInput);
      }
      if (window.showToast) window.showToast(`🎵 Đã đồng bộ Nhạc nền & Giọng đọc vào Timeline!`, 'success');
    } else if (asset.category === 'fonts') {
      if (subjectInput) {
        const val = subjectInput.value.trim();
        const addition = `[BRAND_TYPOGRAPHY: Font ${asset.fontFamily || asset.name}] Subtitle Sigmar In Hoa, Karaoke Blue`;
        subjectInput.value = val ? `${val}\n${addition}` : addition;
        subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof window.autoResizeTextarea === 'function') window.autoResizeTextarea(subjectInput);
      }
      if (window.showToast) window.showToast(`🔤 Đã áp dụng Font chữ ${asset.fontFamily || asset.name}!`, 'success');
    }

    if (typeof window.closeDirectorVaultModal === 'function') {
      window.closeDirectorVaultModal();
    }
  }

  exportManifest() {
    const manifest = this.vault.exportBrandKitManifest();
    const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `director_brand_kit_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (window.showToast) {
      window.showToast('📥 Đã xuất cấu hình Brand Kit JSON thành công!', 'success');
    }
  }
}

export const directorVaultUI = new DirectorVaultUI();
window.directorVaultUI = directorVaultUI;
window.refreshDirectorVaultUI = () => directorVaultUI.init();
