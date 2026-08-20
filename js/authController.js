/**
 * authController.js — Passwordless OTP Authentication & Account Controller
 * ────────────────────────────────────────────────────────────────────────
 * Flow: Email → OTP 6 số → (User mới? Nhập tên) → Vào Studio
 * Deploy-ready: Cấu trúc sẵn cho Firebase/Supabase Auth integration
 * Giới hạn: Tối đa 3 thiết bị / tài khoản
 */

import { authManager } from './authManager.js';
import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';

export function initAuthUI() {
  // Elements: Header Auth Button
  const authHeaderBtn = document.getElementById('auth-header-btn');
  const authHeaderAvatar = document.getElementById('auth-header-avatar');
  const authHeaderName = document.getElementById('auth-header-name');

  // Elements: Auth Modal
  const authModal = document.getElementById('auth-modal-overlay');
  const authModalClose = document.getElementById('auth-modal-close');

  const viewEmail = document.getElementById('auth-view-email');
  const viewOtp = document.getElementById('auth-view-otp');
  const viewWelcome = document.getElementById('auth-view-welcome');
  const viewDeviceLimit = document.getElementById('auth-view-device-limit');

  // Elements: Account Modal
  const accountModal = document.getElementById('account-modal-overlay');
  const accountModalClose = document.getElementById('account-modal-close');

  // Sub-tabs in Account Modal (Minimal: Profile & Storage Engine)
  const tabProfileBtn = document.getElementById('acc-tab-profile');
  const tabStorageBtn = document.getElementById('acc-tab-storage');

  const viewProfile = document.getElementById('acc-view-profile');
  const viewStorage = document.getElementById('acc-view-storage');

  // State
  let pendingEmail = '';
  let countdownTimer = null;

  // ── Render Topbar Header State ──
  function updateHeaderBadge() {
    const user = authManager.currentUser;
    if (user) {
      if (authHeaderAvatar) {
        // Show avatar photo in topbar if uploaded
        if (user.avatarUrl) {
          authHeaderAvatar.innerHTML = `<img src="${user.avatarUrl}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
        } else {
          authHeaderAvatar.textContent = authManager.getInitials(user.displayName);
        }
      }
      if (authHeaderName) authHeaderName.textContent = user.displayName;
    } else {
      if (authHeaderAvatar) authHeaderAvatar.textContent = '👤';
      if (authHeaderName) authHeaderName.textContent = 'Đăng Nhập';
    }
  }

  authHeaderBtn?.addEventListener('click', () => {
    soundFX.playClick();
    if (authManager.currentUser) {
      openAccountModal();
    } else {
      openAuthModal();
    }
  });

  // ── Switch Auth Subviews ──
  function switchAuthView(viewName) {
    if (viewEmail) viewEmail.style.display = viewName === 'email' ? 'block' : 'none';
    if (viewOtp) viewOtp.style.display = viewName === 'otp' ? 'block' : 'none';
    if (viewWelcome) viewWelcome.style.display = viewName === 'welcome' ? 'block' : 'none';
    if (viewDeviceLimit) viewDeviceLimit.style.display = viewName === 'device-limit' ? 'block' : 'none';
  }

  function openAuthModal() {
    switchAuthView('email');
    // Reset state
    const emailInput = document.getElementById('auth-email-input');
    if (emailInput) emailInput.value = '';
    const errorBanner = document.getElementById('auth-error-banner');
    if (errorBanner) errorBanner.style.display = 'none';
    const emailError = document.getElementById('auth-email-error');
    if (emailError) emailError.style.display = 'none';

    if (authModal) {
      authModal.classList.add('is-open', 'active');
      document.body.style.overflow = 'hidden';
    }
    // Auto-focus email input
    setTimeout(() => emailInput?.focus(), 200);
  }

  function closeAuthModal() {
    if (authModal) {
      authModal.classList.remove('is-open', 'active');
      document.body.style.overflow = '';
    }
    clearInterval(countdownTimer);
  }

  authModalClose?.addEventListener('click', closeAuthModal);
  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  // ═════════════════════════════════════════════════════════════
  // STEP 1: EMAIL INPUT → SEND OTP
  // ═════════════════════════════════════════════════════════════
  const authEmailInput = document.getElementById('auth-email-input');
  const authEmailError = document.getElementById('auth-email-error');
  const authErrorBanner = document.getElementById('auth-error-banner');
  const authErrorMsg = document.getElementById('auth-error-msg');
  const authSendOtpBtn = document.getElementById('auth-send-otp-btn');
  const authSendBtnText = document.getElementById('auth-send-btn-text');

  authEmailInput?.addEventListener('focus', () => {
    if (authEmailError) authEmailError.style.display = 'none';
    if (authErrorBanner) authErrorBanner.style.display = 'none';
  });

  authEmailInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') authSendOtpBtn?.click();
  });

  authSendOtpBtn?.addEventListener('click', async () => {
    const email = authEmailInput?.value.trim();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      if (authEmailError) authEmailError.style.display = 'block';
      return;
    }

    try {
      if (authSendBtnText) authSendBtnText.textContent = '⏳ Đang gửi mã...';
      authSendOtpBtn.disabled = true;

      await new Promise(r => setTimeout(r, 500)); // Simulate API call

      // Generate OTP (demo mode: show in toast)
      const { code } = authManager.sendEmailVerificationCode(email);
      pendingEmail = email;

      // Switch to OTP view
      const otpEmailDisplay = document.getElementById('otp-email-display');
      if (otpEmailDisplay) otpEmailDisplay.textContent = email;

      switchAuthView('otp');
      startOtpCountdown();

      // Clear OTP boxes
      const otpBoxes = document.querySelectorAll('.otp-box');
      otpBoxes.forEach(b => b.value = '');
      if (otpBoxes[0]) otpBoxes[0].focus();

      soundFX.playRoll();
      showToast(`📧 Mã xác thực demo: ${code} (khi deploy sẽ gửi qua email thật)`, 'info');
    } catch (err) {
      if (authErrorBanner) {
        authErrorBanner.style.display = 'block';
        if (authErrorMsg) authErrorMsg.textContent = err.message;
      }
    } finally {
      if (authSendBtnText) authSendBtnText.textContent = '📩 Gửi Mã Xác Thực';
      authSendOtpBtn.disabled = false;
    }
  });

  // ═════════════════════════════════════════════════════════════
  // STEP 2: OTP VERIFICATION (6-DIGIT)
  // ═════════════════════════════════════════════════════════════
  const otpVerifyBtn = document.getElementById('otp-verify-btn');
  const otpErrorMsg = document.getElementById('otp-error-msg');
  const otpResendBtn = document.getElementById('otp-resend-btn');
  const otpCountdownEl = document.getElementById('otp-countdown');

  function startOtpCountdown() {
    let timeLeft = 59;
    if (otpCountdownEl) otpCountdownEl.textContent = timeLeft;
    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      timeLeft--;
      if (otpCountdownEl) otpCountdownEl.textContent = timeLeft;
      if (timeLeft <= 0) clearInterval(countdownTimer);
    }, 1000);
  }

  // Auto-focus next OTP box on typing
  const otpBoxes = document.querySelectorAll('.otp-box');
  otpBoxes.forEach((box, index) => {
    box.addEventListener('input', () => {
      if (box.value && index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
      if (otpErrorMsg) otpErrorMsg.style.display = 'none';
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && index > 0) {
        otpBoxes[index - 1].focus();
      }
    });

    // Paste handler
    box.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
      if (/^\d{6}$/.test(pasteData)) {
        pasteData.split('').forEach((digit, i) => {
          if (otpBoxes[i]) otpBoxes[i].value = digit;
        });
        otpBoxes[5].focus();
      }
    });
  });

  // Verify OTP
  otpVerifyBtn?.addEventListener('click', async () => {
    let enteredCode = '';
    otpBoxes.forEach(b => enteredCode += b.value);

    if (enteredCode.length < 6) {
      if (otpErrorMsg) {
        otpErrorMsg.textContent = '⚠️ Vui lòng nhập đủ 6 chữ số.';
        otpErrorMsg.style.display = 'block';
      }
      return;
    }

    try {
      otpVerifyBtn.textContent = '⏳ Đang xác thực...';
      otpVerifyBtn.disabled = true;
      await new Promise(r => setTimeout(r, 400));

      authManager.verifyEmailCode(enteredCode);

      // Check if user already exists
      const existingUser = authManager.users.find(u => u.email === pendingEmail);

      if (existingUser) {
        // Existing user: check device limit
        const deviceCount = existingUser.devices?.length || 0;
        const deviceId = getDeviceFingerprint();
        const alreadyRegistered = existingUser.devices?.some(d => d.id === deviceId);

        if (deviceCount >= 3 && !alreadyRegistered) {
          renderDeviceList(existingUser.devices || []);
          switchAuthView('device-limit');
          return;
        }

        // Login existing user
        authManager.loginUserByEmail(pendingEmail, deviceId);
        soundFX.playCopy();
        showToast(`🎉 Chào mừng trở lại, ${existingUser.displayName}!`, 'success');
        closeAuthModal();
        updateHeaderBadge();
      } else {
        // New user: show welcome/name step
        switchAuthView('welcome');
        const nameInput = document.getElementById('welcome-name-input');
        if (nameInput) nameInput.value = '';
        setTimeout(() => nameInput?.focus(), 200);
      }
    } catch (err) {
      soundFX.playClick();
      if (otpErrorMsg) {
        otpErrorMsg.textContent = `⚠️ ${err.message}`;
        otpErrorMsg.style.display = 'block';
      }
      otpBoxes.forEach(b => b.value = '');
      otpBoxes[0]?.focus();
    } finally {
      otpVerifyBtn.textContent = '✅ Xác Nhận & Vào Studio';
      otpVerifyBtn.disabled = false;
    }
  });

  // Change email button
  document.getElementById('otp-change-email-btn')?.addEventListener('click', () => {
    switchAuthView('email');
    authEmailInput?.focus();
  });

  // Resend OTP
  otpResendBtn?.addEventListener('click', () => {
    if (pendingEmail) {
      const { code } = authManager.sendEmailVerificationCode(pendingEmail);
      startOtpCountdown();
      otpBoxes.forEach(b => b.value = '');
      otpBoxes[0]?.focus();
      soundFX.playRoll();
      showToast(`🔄 Đã gửi lại mã mới: ${code}`, 'info');
    }
  });

  // ═════════════════════════════════════════════════════════════
  // STEP 3: WELCOME (NEW USER → SET DISPLAY NAME)
  // ═════════════════════════════════════════════════════════════
  const welcomeStartBtn = document.getElementById('welcome-start-btn');
  const welcomeNameInput = document.getElementById('welcome-name-input');

  welcomeNameInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') welcomeStartBtn?.click();
  });

  welcomeStartBtn?.addEventListener('click', async () => {
    const displayName = welcomeNameInput?.value.trim() || pendingEmail.split('@')[0];
    const deviceId = getDeviceFingerprint();

    welcomeStartBtn.textContent = '⏳ Đang tạo tài khoản...';
    welcomeStartBtn.disabled = true;

    await new Promise(r => setTimeout(r, 400));

    const newUser = authManager.registerUser({
      email: pendingEmail,
      password: 'otp-passwordless',
      displayName: displayName,
      deviceId: deviceId
    });

    soundFX.playCopy();
    showToast(`🎉 Chào mừng ${newUser.displayName} đến với Cinematique!`, 'success');
    closeAuthModal();
    updateHeaderBadge();

    welcomeStartBtn.textContent = '🚀 Bắt Đầu Sáng Tạo';
    welcomeStartBtn.disabled = false;
  });

  // ═════════════════════════════════════════════════════════════
  // DEVICE LIMIT VIEW
  // ═════════════════════════════════════════════════════════════
  function renderDeviceList(devices) {
    const listEl = document.getElementById('device-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    devices.forEach((device, i) => {
      const item = document.createElement('div');
      item.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:10px;';
      item.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.1rem;">${device.type === 'mobile' ? '📱' : '💻'}</span>
          <div>
            <div style="font-size:0.8rem; font-weight:700; color:#fff;">${device.name || `Thiết bị ${i + 1}`}</div>
            <div style="font-size:0.68rem; color:#71717a;">Đăng nhập: ${device.lastLogin || 'Hôm nay'}</div>
          </div>
        </div>
        <div style="width:8px; height:8px; border-radius:50%; background:#10b981; box-shadow:0 0 6px #10b981;"></div>
      `;
      listEl.appendChild(item);
    });
  }

  document.getElementById('device-limit-back-btn')?.addEventListener('click', () => {
    switchAuthView('email');
  });

  // ═════════════════════════════════════════════════════════════
  // DEVICE FINGERPRINT (deploy version uses server-side tracking)
  // ═════════════════════════════════════════════════════════════
  function getDeviceFingerprint() {
    let fp = localStorage.getItem('cinematique_device_id');
    if (!fp) {
      fp = 'device_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 6);
      localStorage.setItem('cinematique_device_id', fp);
    }
    return fp;
  }

  // ═════════════════════════════════════════════════════════════
  // 5. ACCOUNT PROFILE & STORAGE (MINIMAL & DEPLOY-READY)
  // ═════════════════════════════════════════════════════════════
  function openAccountModal() {
    renderAccountProfile();
    renderStoragePanel();
    switchAccountTab('profile');
    if (accountModal) {
      accountModal.classList.add('is-open', 'active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAccountModal() {
    if (accountModal) {
      accountModal.classList.remove('is-open', 'active');
      document.body.style.overflow = '';
    }
  }

  accountModalClose?.addEventListener('click', closeAccountModal);
  accountModal?.addEventListener('click', (e) => {
    if (e.target === accountModal) closeAccountModal();
  });

  // Sub-tabs Switching (Steve Jobs Simplicity: Profile & Storage)
  function switchAccountTab(tabName) {
    const isProfile = tabName === 'profile';
    if (viewProfile) viewProfile.style.display = isProfile ? 'block' : 'none';
    if (viewStorage) viewStorage.style.display = isProfile ? 'none' : 'block';

    if (tabProfileBtn) {
      tabProfileBtn.style.background = isProfile ? 'rgba(255,215,0,0.18)' : 'transparent';
      tabProfileBtn.style.borderColor = isProfile ? 'rgba(255,215,0,0.4)' : 'transparent';
      tabProfileBtn.style.color = isProfile ? '#ffd700' : '#a1a1aa';
    }

    if (tabStorageBtn) {
      tabStorageBtn.style.background = !isProfile ? 'rgba(255,215,0,0.18)' : 'transparent';
      tabStorageBtn.style.borderColor = !isProfile ? 'rgba(255,215,0,0.4)' : 'transparent';
      tabStorageBtn.style.color = !isProfile ? '#ffd700' : '#a1a1aa';
    }

    if (!isProfile) {
      renderStoragePanel();
    }
  }

  tabProfileBtn?.addEventListener('click', () => switchAccountTab('profile'));
  tabStorageBtn?.addEventListener('click', () => switchAccountTab('storage'));

  // ═════════════════════════════════════════════════════════════
  // 1. PROFILE VIEW CONTROLLER
  // ═════════════════════════════════════════════════════════════
  const profDisplayName = document.getElementById('prof-display-name');
  const profAccountName = document.getElementById('prof-account-name');
  const profJobTitle = document.getElementById('prof-job-title');
  const profPhone = document.getElementById('prof-phone');
  const profSaveBtn = document.getElementById('prof-save-btn');

  function renderAccountProfile() {
    const user = authManager.currentUser;
    if (!user) return;

    const headerName = document.getElementById('acc-header-name');
    const headerEmail = document.getElementById('acc-header-email');
    const headerRole = document.getElementById('acc-header-role-badge');
    const avatarInitials = document.getElementById('acc-avatar-initials');
    const avatarImg = document.getElementById('acc-avatar-img');

    if (headerName) headerName.textContent = user.displayName;
    if (headerEmail) headerEmail.textContent = user.email;
    if (headerRole) headerRole.textContent = (user.role || 'Admin').toUpperCase();

    // Avatar: show uploaded photo or fallback to initials
    if (user.avatarUrl && avatarImg) {
      avatarImg.src = user.avatarUrl;
      avatarImg.style.display = 'block';
      if (avatarInitials) avatarInitials.style.display = 'none';
    } else {
      if (avatarImg) avatarImg.style.display = 'none';
      if (avatarInitials) {
        avatarInitials.style.display = '';
        avatarInitials.textContent = authManager.getInitials(user.displayName);
      }
    }

    if (profDisplayName) profDisplayName.value = user.displayName || '';
    if (profAccountName) profAccountName.value = user.accountName || '';
    if (profJobTitle) profJobTitle.value = user.jobTitle || '';
    if (profPhone) profPhone.value = user.phone || '';

    // Email readonly display
    const profEmailDisplay = document.getElementById('prof-email-display');
    if (profEmailDisplay) profEmailDisplay.value = user.email || '';

    disableSaveBtn();
  }

  // ── Avatar Upload Handler ──
  const avatarUploadInput = document.getElementById('avatar-upload-input');
  avatarUploadInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      showToast('⚠️ Ảnh đại diện tối đa 2MB. Vui lòng chọn ảnh nhỏ hơn.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64Url = ev.target.result;

      // Update UI immediately
      const avatarImg = document.getElementById('acc-avatar-img');
      const avatarInitials = document.getElementById('acc-avatar-initials');
      if (avatarImg) {
        avatarImg.src = base64Url;
        avatarImg.style.display = 'block';
      }
      if (avatarInitials) avatarInitials.style.display = 'none';

      // Persist to user data
      authManager.updateProfile({ avatarUrl: base64Url });
      updateHeaderBadge();
      soundFX.playCopy();
      showToast('📸 Đã cập nhật ảnh đại diện thành công!', 'success');
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be re-selected
    e.target.value = '';
  });

  function enableSaveBtn() {
    if (!profSaveBtn) return;
    profSaveBtn.disabled = false;
    profSaveBtn.style.background = 'linear-gradient(135deg, #ffd700, #f59e0b)';
    profSaveBtn.style.color = '#000';
    profSaveBtn.style.cursor = 'pointer';
    profSaveBtn.style.borderColor = '#ffd700';
  }

  function disableSaveBtn() {
    if (!profSaveBtn) return;
    profSaveBtn.disabled = true;
    profSaveBtn.style.background = 'rgba(255,255,255,0.1)';
    profSaveBtn.style.color = '#71717a';
    profSaveBtn.style.cursor = 'not-allowed';
    profSaveBtn.style.borderColor = 'rgba(255,255,255,0.2)';
    profSaveBtn.innerHTML = '💾 Lưu Thay Đổi';
  }

  [profDisplayName, profJobTitle, profPhone].forEach(input => {
    input?.addEventListener('input', () => enableSaveBtn());
  });

  // Save changes handler
  profSaveBtn?.addEventListener('click', async () => {
    profSaveBtn.innerHTML = '⏳ Đang lưu...';
    profSaveBtn.disabled = true;

    await new Promise(r => setTimeout(r, 400));

    const newName = profDisplayName?.value.trim() || 'Creator';
    const autoHandle = newName.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');

    authManager.updateProfile({
      displayName: newName,
      accountName: autoHandle,
      jobTitle: profJobTitle?.value.trim(),
      phone: profPhone?.value.trim()
    });

    soundFX.playCopy();
    showToast('✅ Đã lưu cập nhật thông tin tài khoản thành công!', 'success');
    disableSaveBtn();
    updateHeaderBadge();
    renderAccountProfile();
  });

  // Logout Handler
  document.getElementById('acc-logout-btn')?.addEventListener('click', () => {
    authManager.logout();
    soundFX.playClick();
    showToast('🚪 Đã đăng xuất khỏi phim trường.', 'info');
    closeAccountModal();
    updateHeaderBadge();
  });

  // ═════════════════════════════════════════════════════════════
  // 2. STORAGE & CLOUD BACKUP ENGINE CONTROLLER
  // ═════════════════════════════════════════════════════════════
  function renderStoragePanel() {
    const stats = authManager.getStorageStats();
    
    const favsEl = document.getElementById('storage-stat-favs');
    const projectsEl = document.getElementById('storage-stat-projects');
    const sizeEl = document.getElementById('storage-stat-size');

    if (favsEl) favsEl.textContent = stats.favCount;
    if (projectsEl) projectsEl.textContent = stats.projCount + (stats.historyCount > 0 ? ` (+${stats.historyCount} lịch sử)` : '');
    if (sizeEl) sizeEl.textContent = stats.kbSize;
  }

  // Export JSON Backup
  document.getElementById('storage-export-btn')?.addEventListener('click', () => {
    soundFX.playRoll();
    authManager.exportAllUserData();
    showToast('📤 Đã tạo và tải xuống bản sao lưu toàn bộ dữ liệu (.json)!', 'success');
  });

  // Import JSON Backup
  document.getElementById('storage-import-file')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        authManager.importUserData(text);
        soundFX.playCopy();
        showToast('📥 Đã phục hồi dữ liệu từ bản sao lưu thành công!', 'success');
        renderStoragePanel();
        renderAccountProfile();
        updateHeaderBadge();
      } catch (err) {
        showToast('⚠️ Lỗi khôi phục: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  });

  // Clear Temp Cache
  document.getElementById('storage-clear-cache-btn')?.addEventListener('click', () => {
    if (confirm('Bạn có muốn dọn dẹp bộ nhớ đệm lịch sử prompt tạm thời không? (Dữ liệu yêu thích và kịch bản vẫn được giữ nguyên)')) {
      authManager.clearStorageCache();
      soundFX.playClick();
      showToast('🧹 Đã giải phóng bộ nhớ đệm tạm thời!', 'info');
      renderStoragePanel();
    }
  });

  // Initial State Setup
  updateHeaderBadge();
}

