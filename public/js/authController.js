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
  // Elements: Header Auth Button & Hollywood Director Slate
  const authHeaderBtn = document.getElementById('auth-header-btn');
  const authHeaderAvatar = document.getElementById('auth-header-avatar');
  const authHeaderName = document.getElementById('auth-header-name');
  const authHeaderRole = document.getElementById('auth-header-role');
  const authHeaderJob = document.getElementById('auth-header-job');

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

  // Sub-tabs in Account Modal (Profile, Storage & CMS Admin)
  const tabProfileBtn = document.getElementById('acc-tab-profile');
  const tabStorageBtn = document.getElementById('acc-tab-storage');
  const tabCmsBtn = document.getElementById('acc-tab-cms');

  const viewProfile = document.getElementById('acc-view-profile');
  const viewStorage = document.getElementById('acc-view-storage');
  const viewCms = document.getElementById('acc-view-cms');

  // State
  let pendingEmail = '';
  let countdownTimer = null;

  // ── Render Topbar Header State (Hollywood Master Director) ──
  function updateHeaderBadge() {
    const user = authManager.currentUser;
    const roleEl = document.getElementById('auth-header-role');
    const jobEl = document.getElementById('auth-header-job');

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
      if (roleEl) roleEl.textContent = user.role === 'Admin' ? '🎬 HOLLYWOOD DIRECTOR' : '🎬 FILM DIRECTOR';
      if (jobEl) jobEl.textContent = user.jobTitle || 'Executive AI Film Director';
    } else {
      if (authHeaderAvatar) authHeaderAvatar.textContent = '🎬';
      if (authHeaderName) authHeaderName.textContent = 'Đăng Nhập';
      if (roleEl) roleEl.textContent = 'GUEST ACCESS';
      if (jobEl) jobEl.textContent = 'Chạm để kết nối';
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

  authHeaderBtn?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      authHeaderBtn.click();
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

  // Sub-tabs Switching (Profile, Storage & CMS Admin)
  function switchAccountTab(tabName) {
    const isProfile = tabName === 'profile';
    const isStorage = tabName === 'storage';
    const isCms = tabName === 'cms';

    if (viewProfile) viewProfile.style.display = isProfile ? 'block' : 'none';
    if (viewStorage) viewStorage.style.display = isStorage ? 'block' : 'none';
    if (viewCms) viewCms.style.display = isCms ? 'block' : 'none';

    const setTabStyle = (btn, active) => {
      if (!btn) return;
      btn.style.background = active ? 'rgba(255,215,0,0.18)' : 'transparent';
      btn.style.borderColor = active ? 'rgba(255,215,0,0.4)' : 'transparent';
      btn.style.color = active ? '#ffd700' : '#a1a1aa';
    };

    setTabStyle(tabProfileBtn, isProfile);
    setTabStyle(tabStorageBtn, isStorage);
    setTabStyle(tabCmsBtn, isCms);

    if (isStorage) renderStoragePanel();
    if (isCms) renderCMSPanel();
  }

  tabProfileBtn?.addEventListener('click', () => switchAccountTab('profile'));
  tabStorageBtn?.addEventListener('click', () => switchAccountTab('storage'));
  tabCmsBtn?.addEventListener('click', () => switchAccountTab('cms'));

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

  // ═════════════════════════════════════════════════════════════
  // 3. CMS ADMIN USER MANAGEMENT CONTROLLER
  // ═════════════════════════════════════════════════════════════
  const cmsSearchInput = document.getElementById('cms-search-input');
  const cmsFilterStatus = document.getElementById('cms-filter-status');
  const cmsFilterRole = document.getElementById('cms-filter-role');
  const cmsTableBody = document.getElementById('cms-user-table-body');
  const cmsEmptyState = document.getElementById('cms-empty-state');

  function renderCMSPanel() {
    const users = authManager.users || [];

    // 1. Update stats
    const totalUsers = users.length;
    const activeUsers = users.filter(u => u.status === 'Active').length;
    const inactiveUsers = users.filter(u => u.status !== 'Active').length;
    const adminUsers = users.filter(u => u.role === 'Admin').length;

    const statTotal = document.getElementById('cms-stat-total');
    const statActive = document.getElementById('cms-stat-active');
    const statInactive = document.getElementById('cms-stat-inactive');
    const statAdmins = document.getElementById('cms-stat-admins');

    if (statTotal) statTotal.textContent = totalUsers;
    if (statActive) statActive.textContent = activeUsers;
    if (statInactive) statInactive.textContent = inactiveUsers;
    if (statAdmins) statAdmins.textContent = adminUsers;

    // 2. Filter users
    const query = cmsSearchInput?.value.toLowerCase().trim() || '';
    const statusFilter = cmsFilterStatus?.value || 'all';
    const roleFilter = cmsFilterRole?.value || 'all';

    const filtered = users.filter(u => {
      const matchQuery = !query || 
        (u.displayName && u.displayName.toLowerCase().includes(query)) || 
        (u.email && u.email.toLowerCase().includes(query)) ||
        (u.jobTitle && u.jobTitle.toLowerCase().includes(query));

      const matchStatus = statusFilter === 'all' || u.status === statusFilter;
      const matchRole = roleFilter === 'all' || u.role === roleFilter;

      return matchQuery && matchStatus && matchRole;
    });

    // 3. Render table
    if (!cmsTableBody) return;
    cmsTableBody.innerHTML = '';

    if (filtered.length === 0) {
      if (cmsEmptyState) cmsEmptyState.style.display = 'block';
      return;
    }

    if (cmsEmptyState) cmsEmptyState.style.display = 'none';

    filtered.forEach(u => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
      tr.style.transition = 'background 0.15s';
      tr.onmouseenter = () => tr.style.background = 'rgba(255,255,255,0.03)';
      tr.onmouseleave = () => tr.style.background = 'transparent';

      const isActive = u.status === 'Active';
      const isAdmin = u.role === 'Admin';
      const isCurrent = authManager.currentUser && authManager.currentUser.id === u.id;
      const deviceCount = u.devices ? u.devices.length : 0;
      const createdDate = u.createdAt ? new Date(u.createdAt).toLocaleDateString('vi-VN') : 'Mặc định';

      const statusBadge = isActive
        ? `<span style="background: rgba(16,185,129,0.15); color: #10b981; border: 1px solid rgba(16,185,129,0.3); padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.7rem;">Active</span>`
        : `<span style="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.7rem;">Inactive</span>`;

      const roleBadge = isAdmin
        ? `<span style="background: rgba(234,179,8,0.15); color: #facc15; border: 1px solid rgba(234,179,8,0.35); padding: 2px 8px; border-radius: 6px; font-weight: 700; font-size: 0.7rem;">👑 Admin</span>`
        : `<span style="background: rgba(56,189,248,0.12); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 2px 8px; border-radius: 6px; font-weight: 600; font-size: 0.7rem;">${u.role || 'Member'}</span>`;

      const avatarHtml = u.avatarUrl
        ? `<img src="${u.avatarUrl}" style="width: 26px; height: 26px; border-radius: 50%; object-fit: cover; border: 1.5px solid #ffd700;" />`
        : `<div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; font-weight: 800;">${authManager.getInitials(u.displayName)}</div>`;

      tr.innerHTML = `
        <td style="padding: 10px 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            ${avatarHtml}
            <div style="min-width: 0;">
              <div style="font-weight: 700; color: #fff; display: flex; align-items: center; gap: 5px; white-space: nowrap;">
                <span>${u.displayName || 'Unnamed'}</span>
                ${isCurrent ? '<span style="font-size: 0.6rem; font-weight: 800; color: #ffd700; background: rgba(255,215,0,0.15); padding: 1px 5px; border-radius: 4px; border: 1px solid rgba(255,215,0,0.3);">(Bạn)</span>' : ''}
              </div>
              <div style="font-size: 0.68rem; color: #a1a1aa; white-space: nowrap;">${u.jobTitle || 'AI Creator'}</div>
            </div>
          </div>
        </td>
        <td style="padding: 10px 12px; color: #bae6fd; font-family: monospace; font-size: 0.74rem;">
          ${u.email}
        </td>
        <td style="padding: 10px 8px; text-align: center;">
          ${roleBadge}
        </td>
        <td style="padding: 10px 8px; text-align: center;">
          ${statusBadge}
        </td>
        <td style="padding: 10px 8px; text-align: center; color: #a1a1aa; font-size: 0.72rem;">
          <span style="color: ${deviceCount >= 3 ? '#f87171' : '#34d399'}; font-weight: 700;">${deviceCount}</span>/3
        </td>
        <td style="padding: 10px 8px; color: #71717a; font-size: 0.72rem;">
          ${createdDate}
        </td>
        <td style="padding: 10px 12px; text-align: center;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 6px;">
            <!-- Active / Deactivate Toggle Button -->
            <button class="cms-btn-toggle" data-id="${u.id}" title="${isActive ? 'Khóa tài khoản' : 'Kích hoạt tài khoản'}" style="background: ${isActive ? 'rgba(239,68,68,0.12)' : 'rgba(16,185,129,0.15)'}; border: 1px solid ${isActive ? 'rgba(239,68,68,0.3)' : 'rgba(16,185,129,0.35)'}; color: ${isActive ? '#f87171' : '#34d399'}; padding: 4px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; cursor: pointer; transition: all 0.15s;">
              ${isActive ? '⛔ Khóa' : '⚡ Kích hoạt'}
            </button>

            <!-- Role Toggle Button -->
            <button class="cms-btn-role" data-id="${u.id}" title="Đổi quyền Admin / Member" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #e4e4e7; padding: 4px 8px; border-radius: 6px; font-size: 0.7rem; cursor: pointer;">
              👑 Role
            </button>

            <!-- Delete Button (Only for non-current users) -->
            ${!isCurrent ? `
              <button class="cms-btn-delete" data-id="${u.id}" data-name="${u.displayName}" title="Xóa tài khoản vĩnh viễn" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2); color: #f87171; padding: 4px 6px; border-radius: 6px; font-size: 0.7rem; cursor: pointer;">
                🗑️
              </button>
            ` : ''}
          </div>
        </td>
      `;

      cmsTableBody.appendChild(tr);
    });

    // Delegate Actions
    cmsTableBody.querySelectorAll('.cms-btn-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = btn.dataset.id;
        const targetUser = authManager.users.find(u => u.id === uid);
        if (!targetUser) return;
        const newStatus = targetUser.status === 'Active' ? 'Inactive' : 'Active';
        authManager.setUserStatus(uid, newStatus);
        soundFX.playClick();
        showToast(`Đã ${newStatus === 'Active' ? 'kích hoạt ⚡' : 'tạm khóa ⛔'} tài khoản ${targetUser.displayName}!`, 'info');
        renderCMSPanel();
      });
    });

    cmsTableBody.querySelectorAll('.cms-btn-role').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = btn.dataset.id;
        const targetUser = authManager.users.find(u => u.id === uid);
        if (!targetUser) return;
        const newRole = targetUser.role === 'Admin' ? 'Member' : 'Admin';
        authManager.setUserRole(uid, newRole);
        soundFX.playRoll();
        showToast(`Đã đổi quyền của ${targetUser.displayName} thành ${newRole}!`, 'success');
        renderCMSPanel();
        renderAccountProfile();
      });
    });

    cmsTableBody.querySelectorAll('.cms-btn-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = btn.dataset.id;
        const uname = btn.dataset.name || 'Người dùng';
        if (confirm(`⚠️ Bạn có chắc chắn muốn xóa vĩnh viễn tài khoản "${uname}" không? Hành động này không thể hoàn tác.`)) {
          authManager.deleteAccount(uid);
          soundFX.playClick();
          showToast(`🗑️ Đã xóa tài khoản ${uname} khỏi hệ thống!`, 'info');
          renderCMSPanel();
        }
      });
    });
  }

  // Bind CMS search & filter listeners
  cmsSearchInput?.addEventListener('input', renderCMSPanel);
  cmsFilterStatus?.addEventListener('change', renderCMSPanel);
  cmsFilterRole?.addEventListener('change', renderCMSPanel);

  // Initial State Setup
  updateHeaderBadge();
}

