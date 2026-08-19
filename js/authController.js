/**
 * authController.js — Interactive UI Controller for Auth & Account Suite
 * ────────────────────────────────────────────────────────────────────────
 * Implements all 9 checklist categories:
 * - Realtime onBlur / onFocus validation with visual error hints
 * - Password strength meter + requirement indicators
 * - Save changes state machine (Disabled -> Active -> Loading -> Toast)
 * - 6-Digit OTP Email Verification with auto-focus & countdown
 * - 2FA Setup with QR, Secret, OTP test, and 8 Backup Codes
 * - User Management (Search, Filter, Role change, Invite, Deactivate/Delete)
 */

import { authManager } from './authManager.js';
import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';

export function initAuthUI() {
  // Elements: Header Auth Button
  const authHeaderBtn = document.getElementById('auth-header-btn');
  const authHeaderAvatar = document.getElementById('auth-header-avatar');
  const authHeaderName = document.getElementById('auth-header-name');

  // Elements: Auth Modal (Login / Sign Up / Forgot / OTP)
  const authModal = document.getElementById('auth-modal-overlay');
  const authModalClose = document.getElementById('auth-modal-close');

  const viewLogin = document.getElementById('auth-view-login');
  const viewSignup = document.getElementById('auth-view-signup');
  const viewForgot = document.getElementById('auth-view-forgot');
  const viewVerify = document.getElementById('auth-view-verify');

  // Elements: Account Modal
  const accountModal = document.getElementById('account-modal-overlay');
  const accountModalClose = document.getElementById('account-modal-close');

  // Sub-tabs in Account Modal
  const tabProfileBtn = document.getElementById('acc-tab-profile');
  const tabSecurityBtn = document.getElementById('acc-tab-security');
  const tabTeamBtn = document.getElementById('acc-tab-team');
  const tabBillingBtn = document.getElementById('acc-tab-billing');

  const viewProfile = document.getElementById('acc-view-profile');
  const viewSecurity = document.getElementById('acc-view-security');
  const viewTeam = document.getElementById('acc-view-team');
  const viewBilling = document.getElementById('acc-view-billing');

  // ── Render Topbar Header State ──
  function updateHeaderBadge() {
    const user = authManager.currentUser;
    if (user) {
      if (authHeaderAvatar) authHeaderAvatar.textContent = authManager.getInitials(user.displayName);
      if (authHeaderName) authHeaderName.textContent = user.displayName;
    } else {
      if (authHeaderAvatar) authHeaderAvatar.textContent = '👤';
      if (authHeaderName) authHeaderName.textContent = 'Đăng Nhập';
    }
  }

  // Click on Header Auth Button
  authHeaderBtn?.addEventListener('click', () => {
    soundFX.playClick();
    if (authManager.currentUser) {
      openAccountModal();
    } else {
      openAuthModal('login');
    }
  });

  // ── Switch Auth Subviews ──
  function switchAuthView(viewName) {
    if (viewLogin) viewLogin.style.display = viewName === 'login' ? 'block' : 'none';
    if (viewSignup) viewSignup.style.display = viewName === 'signup' ? 'block' : 'none';
    if (viewForgot) viewForgot.style.display = viewName === 'forgot' ? 'block' : 'none';
    if (viewVerify) viewVerify.style.display = viewName === 'verify' ? 'block' : 'none';
  }

  function openAuthModal(initialView = 'login') {
    switchAuthView(initialView);
    if (authModal) authModal.classList.add('active');
  }

  function closeAuthModal() {
    if (authModal) authModal.classList.remove('active');
  }

  authModalClose?.addEventListener('click', closeAuthModal);
  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  // Switch links inside Auth Modal
  document.getElementById('auth-to-signup-btn')?.addEventListener('click', () => switchAuthView('signup'));
  document.getElementById('auth-to-login-btn')?.addEventListener('click', () => switchAuthView('login'));
  document.getElementById('auth-to-forgot-btn')?.addEventListener('click', () => {
    const loginEmail = document.getElementById('login-email-input')?.value.trim();
    if (loginEmail) {
      const forgotEmail = document.getElementById('forgot-email-input');
      if (forgotEmail) forgotEmail.value = loginEmail;
    }
    switchAuthView('forgot');
  });
  document.getElementById('forgot-back-btn')?.addEventListener('click', () => switchAuthView('login'));

  // ═════════════════════════════════════════════════════════════
  // 1. LOG IN CONTROLLER (CHECKLIST #2 & #6)
  // ═════════════════════════════════════════════════════════════
  const loginEmailInput = document.getElementById('login-email-input');
  const loginPwdInput = document.getElementById('login-password-input');
  const loginEmailError = document.getElementById('login-email-error');
  const loginPwdError = document.getElementById('login-pwd-error');
  const loginErrorBanner = document.getElementById('login-error-banner');
  const loginErrorMsg = document.getElementById('login-error-msg');
  const loginSubmitBtn = document.getElementById('login-submit-btn');
  const loginBtnText = document.getElementById('login-btn-text');
  const loginPwdToggle = document.getElementById('login-pwd-toggle');

  // Toggle Show/Hide Password
  loginPwdToggle?.addEventListener('click', () => {
    if (loginPwdInput.type === 'password') {
      loginPwdInput.type = 'text';
      loginPwdToggle.textContent = '🔒';
    } else {
      loginPwdInput.type = 'password';
      loginPwdToggle.textContent = '👁️';
    }
  });

  // Blur / Focus Validation UX (#6)
  loginEmailInput?.addEventListener('blur', () => {
    const val = loginEmailInput.value.trim();
    if (!val || !/^\S+@\S+\.\S+$/.test(val)) {
      if (loginEmailError) loginEmailError.style.display = 'block';
    }
  });

  loginEmailInput?.addEventListener('focus', () => {
    if (loginEmailError) loginEmailError.style.display = 'none';
    if (loginErrorBanner) loginErrorBanner.style.display = 'none';
  });

  loginPwdInput?.addEventListener('blur', () => {
    if (!loginPwdInput.value) {
      if (loginPwdError) loginPwdError.style.display = 'block';
    }
  });

  loginPwdInput?.addEventListener('focus', () => {
    if (loginPwdError) loginPwdError.style.display = 'none';
    if (loginErrorBanner) loginErrorBanner.style.display = 'none';
  });

  // Login Submit Action
  loginSubmitBtn?.addEventListener('click', async () => {
    const email = loginEmailInput?.value.trim();
    const password = loginPwdInput?.value;
    const rememberMe = document.getElementById('login-remember-me')?.checked;

    if (!email || !password) {
      if (!email && loginEmailError) loginEmailError.style.display = 'block';
      if (!password && loginPwdError) loginPwdError.style.display = 'block';
      return;
    }

    try {
      if (loginBtnText) loginBtnText.textContent = '⏳ Đang xác thực...';
      loginSubmitBtn.disabled = true;

      await new Promise(r => setTimeout(r, 600)); // Simulate auth handshake

      const user = authManager.loginUser(email, password, rememberMe);
      soundFX.playCopy();
      showToast(`🎉 Chào mừng trở lại, ${user.displayName}!`, 'success');
      closeAuthModal();
      updateHeaderBadge();
    } catch (err) {
      soundFX.playClick();
      if (loginErrorBanner) {
        loginErrorBanner.style.display = 'block';
        if (loginErrorMsg) loginErrorMsg.textContent = err.message;
      }
      // Keep email auto-refilled, clear password for security (#2)
      if (loginPwdInput) loginPwdInput.value = '';
    } finally {
      if (loginBtnText) loginBtnText.textContent = 'Đăng Nhập';
      loginSubmitBtn.disabled = false;
    }
  });

  // Social SSO Buttons (1-Click)
  document.querySelectorAll('.auth-social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const provider = btn.dataset.provider || 'Google';
      soundFX.playRoll();
      const user = authManager.loginWithSocial(provider);
      showToast(`⚡ Đăng nhập thành công qua ${provider}!`, 'success');
      closeAuthModal();
      updateHeaderBadge();
    });
  });

  // ═════════════════════════════════════════════════════════════
  // 2. SIGN UP CONTROLLER (CHECKLIST #1)
  // ═════════════════════════════════════════════════════════════
  const signupNameInput = document.getElementById('signup-name-input');
  const signupEmailInput = document.getElementById('signup-email-input');
  const signupPwdInput = document.getElementById('signup-password-input');
  const signupEmailError = document.getElementById('signup-email-error');
  const signupStrengthLabel = document.getElementById('signup-strength-label');
  const signupStrengthBar = document.getElementById('signup-strength-bar');
  const signupSubmitBtn = document.getElementById('signup-submit-btn');
  const signupPwdToggle = document.getElementById('signup-pwd-toggle');

  signupPwdToggle?.addEventListener('click', () => {
    if (signupPwdInput.type === 'password') {
      signupPwdInput.type = 'text';
      signupPwdToggle.textContent = '🔒';
    } else {
      signupPwdInput.type = 'password';
      signupPwdToggle.textContent = '👁️';
    }
  });

  // Realtime Password Strength Meter (#1)
  signupPwdInput?.addEventListener('input', () => {
    const pwd = signupPwdInput.value;
    const { score, label, color, checks } = authManager.calculatePasswordStrength(pwd);

    if (signupStrengthLabel) {
      signupStrengthLabel.textContent = pwd ? label : 'Chưa nhập';
      signupStrengthLabel.style.color = color;
    }
    if (signupStrengthBar) {
      signupStrengthBar.style.width = `${score}%`;
      signupStrengthBar.style.background = color;
    }

    // Requirements indicators
    document.getElementById('req-len').style.color = checks.length ? '#10b981' : '#71717a';
    document.getElementById('req-upper').style.color = (checks.upper && checks.lower) ? '#10b981' : '#71717a';
    document.getElementById('req-num').style.color = checks.number ? '#10b981' : '#71717a';
    document.getElementById('req-special').style.color = checks.special ? '#10b981' : '#71717a';
  });

  signupSubmitBtn?.addEventListener('click', async () => {
    const email = signupEmailInput?.value.trim();
    const password = signupPwdInput?.value;
    const displayName = signupNameInput?.value.trim();

    if (!email || !password) {
      showToast('⚠️ Vui lòng điền đầy đủ Email và Mật khẩu!', 'error');
      return;
    }

    try {
      // 1. Create verification code
      const { code } = authManager.sendEmailVerificationCode(email);
      
      // 2. Open Verification Subview (#4)
      const verifyEmailDisplay = document.getElementById('verify-email-display');
      if (verifyEmailDisplay) verifyEmailDisplay.textContent = email;
      
      switchAuthView('verify');
      showToast(`📧 Mã xác thực demo của bạn: ${code}`, 'info');
      startVerifyCountdown();
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  // ═════════════════════════════════════════════════════════════
  // 3. EMAIL OTP VERIFICATION CONTROLLER (CHECKLIST #4)
  // ═════════════════════════════════════════════════════════════
  const otpBoxes = document.querySelectorAll('.otp-box');
  const verifySubmitBtn = document.getElementById('verify-submit-btn');
  const verifyErrorMsg = document.getElementById('verify-error-msg');
  const verifyResendBtn = document.getElementById('verify-resend-btn');
  const verifyCountdown = document.getElementById('verify-countdown');
  let countdownTimer = null;

  function startVerifyCountdown() {
    let timeLeft = 59;
    if (verifyCountdown) verifyCountdown.textContent = timeLeft;
    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      timeLeft--;
      if (verifyCountdown) verifyCountdown.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
  }

  // Auto-focus next OTP box on typing
  otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      if (box.value && index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
      if (verifyErrorMsg) verifyErrorMsg.style.display = 'none';
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && index > 0) {
        otpBoxes[index - 1].focus();
      }
    });

    // Paste handler for 6-digit code
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

  verifySubmitBtn?.addEventListener('click', () => {
    let enteredCode = '';
    otpBoxes.forEach(b => enteredCode += b.value);

    try {
      const email = authManager.verifyEmailCode(enteredCode);
      const password = signupPwdInput?.value || 'Password@123';
      const displayName = signupNameInput?.value.trim() || email.split('@')[0];

      const newUser = authManager.registerUser({ email, password, displayName });
      soundFX.playCopy();
      showToast(`🎉 Xác thực email thành công! Chào mừng ${newUser.displayName}`, 'success');
      closeAuthModal();
      updateHeaderBadge();
    } catch (err) {
      soundFX.playClick();
      if (verifyErrorMsg) {
        verifyErrorMsg.textContent = `⚠️ ${err.message}`;
        verifyErrorMsg.style.display = 'block';
      }
    }
  });

  verifyResendBtn?.addEventListener('click', () => {
    const email = document.getElementById('verify-email-display')?.textContent || '';
    const { code } = authManager.sendEmailVerificationCode(email);
    startVerifyCountdown();
    soundFX.playRoll();
    showToast(`🔄 Đã gửi lại mã mới: ${code}`, 'info');
  });

  document.getElementById('verify-edit-email-btn')?.addEventListener('click', () => switchAuthView('signup'));

  // ═════════════════════════════════════════════════════════════
  // 4. FORGOT & RESET PASSWORD (CHECKLIST #5)
  // ═════════════════════════════════════════════════════════════
  const forgotSendBtn = document.getElementById('forgot-send-btn');
  const forgotConfirmBtn = document.getElementById('forgot-confirm-btn');
  const forgotStep1 = document.getElementById('forgot-step-1');
  const forgotStep2 = document.getElementById('forgot-step-2');
  const forgotEmailInput = document.getElementById('forgot-email-input');

  forgotSendBtn?.addEventListener('click', () => {
    const email = forgotEmailInput?.value.trim();
    if (!email) {
      showToast('⚠️ Vui lòng nhập địa chỉ email!', 'error');
      return;
    }
    try {
      const { resetCode } = authManager.requestPasswordReset(email);
      if (forgotStep1) forgotStep1.style.display = 'none';
      if (forgotStep2) forgotStep2.style.display = 'block';
      document.getElementById('forgot-sent-target').textContent = email;
      showToast(`📧 Mã khôi phục demo của bạn: ${resetCode}`, 'info');
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  forgotConfirmBtn?.addEventListener('click', () => {
    const code = document.getElementById('forgot-code-input')?.value.trim();
    const newPwd = document.getElementById('forgot-new-pwd-input')?.value;

    if (!code || !newPwd) {
      showToast('⚠️ Vui lòng nhập mã xác thực và mật khẩu mới!', 'error');
      return;
    }

    try {
      authManager.confirmPasswordReset(newPwd);
      soundFX.playCopy();
      showToast('✅ Đặt lại mật khẩu thành công! Vui lòng đăng nhập.', 'success');
      switchAuthView('login');
      if (forgotStep1) forgotStep1.style.display = 'block';
      if (forgotStep2) forgotStep2.style.display = 'none';
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  // ═════════════════════════════════════════════════════════════
  // 5. ACCOUNT PROFILE & SETTINGS (CHECKLIST #3, #7, #8, #9)
  // ═════════════════════════════════════════════════════════════
  function openAccountModal() {
    renderAccountProfile();
    render2FAPanel();
    renderTeamPanel();
    if (accountModal) accountModal.classList.add('active');
  }

  function closeAccountModal() {
    if (accountModal) accountModal.classList.remove('active');
  }

  accountModalClose?.addEventListener('click', closeAccountModal);
  accountModal?.addEventListener('click', (e) => {
    if (e.target === accountModal) closeAccountModal();
  });

  // Sub-tabs Switching
  function switchAccountTab(tabName) {
    const tabs = [
      { btn: tabProfileBtn, view: viewProfile, id: 'profile' },
      { btn: tabSecurityBtn, view: viewSecurity, id: 'security' },
      { btn: tabTeamBtn, view: viewTeam, id: 'team' },
      { btn: tabBillingBtn, view: viewBilling, id: 'billing' }
    ];

    tabs.forEach(t => {
      const active = t.id === tabName;
      if (t.view) t.view.style.display = active ? 'block' : 'none';
      if (t.btn) {
        if (active) {
          t.btn.style.background = 'rgba(255,215,0,0.18)';
          t.btn.style.borderColor = 'rgba(255,215,0,0.4)';
          t.btn.style.color = '#ffd700';
        } else {
          t.btn.style.background = 'transparent';
          t.btn.style.borderColor = 'transparent';
          t.btn.style.color = '#a1a1aa';
        }
      }
    });
  }

  tabProfileBtn?.addEventListener('click', () => switchAccountTab('profile'));
  tabSecurityBtn?.addEventListener('click', () => switchAccountTab('security'));
  tabTeamBtn?.addEventListener('click', () => switchAccountTab('team'));
  tabBillingBtn?.addEventListener('click', () => switchAccountTab('billing'));

  // Render Profile View (#3 & #7)
  const profDisplayName = document.getElementById('prof-display-name');
  const profAccountName = document.getElementById('prof-account-name');
  const profJobTitle = document.getElementById('prof-job-title');
  const profPhone = document.getElementById('prof-phone');
  const profSaveBtn = document.getElementById('prof-save-btn');
  const profConnectedList = document.getElementById('prof-connected-list');

  function renderAccountProfile() {
    const user = authManager.currentUser;
    if (!user) return;

    document.getElementById('acc-header-name').textContent = user.displayName;
    document.getElementById('acc-header-email').textContent = user.email;
    document.getElementById('acc-header-role-badge').textContent = user.role.toUpperCase();
    document.getElementById('acc-header-avatar').textContent = authManager.getInitials(user.displayName);

    if (profDisplayName) profDisplayName.value = user.displayName || '';
    if (profAccountName) profAccountName.value = user.accountName || '';
    if (profJobTitle) profJobTitle.value = user.jobTitle || '';
    if (profPhone) profPhone.value = user.phone || '';

    // Render Connected Accounts
    if (profConnectedList) {
      profConnectedList.innerHTML = '';
      const allSSO = ['Google', 'GitHub', 'Apple'];
      allSSO.forEach(sso => {
        const isConnected = user.connectedAccounts.includes(sso);
        const card = document.createElement('div');
        card.style.cssText = 'display:flex; align-items:center; gap:8px; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.1); padding:6px 12px; border-radius:6px; font-size:0.75rem;';
        card.innerHTML = `
          <span>${sso === 'Google' ? '🌐' : (sso === 'GitHub' ? '🐙' : '🍎')} ${sso}</span>
          <span style="font-size:0.65rem; color:${isConnected ? '#10b981' : '#71717a'};">${isConnected ? '✅ Đã kết nối' : 'Chưa liên kết'}</span>
          ${isConnected ? `<button class="disconnect-btn" data-sso="${sso}" style="background:none; border:none; color:#f87171; font-size:0.7rem; cursor:pointer; text-decoration:underline;">Ngắt</button>` : ''}
        `;
        profConnectedList.appendChild(card);
      });

      profConnectedList.querySelectorAll('.disconnect-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          authManager.disconnectAccount(btn.dataset.sso);
          soundFX.playClick();
          showToast(`Đã ngắt kết nối với ${btn.dataset.sso}`, 'info');
          renderAccountProfile();
        });
      });
    }

    // Save Button UX: Disabled until changed (#7)
    disableSaveBtn();
  }

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

  [profDisplayName, profAccountName, profJobTitle, profPhone].forEach(input => {
    input?.addEventListener('input', () => enableSaveBtn());
  });

  // Save changes handler (#7)
  profSaveBtn?.addEventListener('click', async () => {
    profSaveBtn.innerHTML = '⏳ Đang lưu...';
    profSaveBtn.disabled = true;

    await new Promise(r => setTimeout(r, 500)); // Loading simulation

    authManager.updateProfile({
      displayName: profDisplayName?.value.trim(),
      accountName: profAccountName?.value.trim(),
      jobTitle: profJobTitle?.value.trim(),
      phone: profPhone?.value.trim()
    });

    soundFX.playCopy();
    showToast('✅ Đã lưu cập nhật thông tin tài khoản an toàn!', 'success');
    disableSaveBtn();
    updateHeaderBadge();
    document.getElementById('acc-header-name').textContent = profDisplayName?.value.trim();
  });

  // Logout Handler
  document.getElementById('acc-logout-btn')?.addEventListener('click', () => {
    authManager.logout();
    soundFX.playClick();
    showToast('🚪 Đã đăng xuất khỏi phim trường.', 'info');
    closeAccountModal();
    updateHeaderBadge();
  });

  // Danger Zone Handlers
  document.getElementById('prof-deactivate-btn')?.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn TẠM KHÓA tài khoản này không?')) {
      authManager.deactivateAccount(authManager.currentUser.id);
      showToast('Tài khoản đã được chuyển sang trạng thái Tạm khóa.', 'info');
    }
  });

  document.getElementById('prof-delete-btn')?.addEventListener('click', () => {
    if (confirm('⚠️ CẢNH BÁO: Thao tác này sẽ XÓA VĨNH VIỄN toàn bộ kịch bản và dữ liệu. Tiếp tục?')) {
      authManager.deleteAccount(authManager.currentUser.id);
      closeAccountModal();
      updateHeaderBadge();
      showToast('Tài khoản đã được xóa vĩnh viễn.', 'error');
    }
  });

  // ═════════════════════════════════════════════════════════════
  // 6. 2-FACTOR AUTHENTICATION CONTROLLER (CHECKLIST #8)
  // ═════════════════════════════════════════════════════════════
  function render2FAPanel() {
    const user = authManager.currentUser;
    const statusPill = document.getElementById('twofa-status-pill');
    const qrImg = document.getElementById('twofa-qr-img');
    const secretInput = document.getElementById('twofa-secret-input');
    const backupGrid = document.getElementById('twofa-backup-codes-grid');

    const setupData = authManager.generate2FASetup();

    if (qrImg) qrImg.src = setupData.qrUrl;
    if (secretInput) secretInput.value = setupData.secretKey;

    if (backupGrid) {
      backupGrid.innerHTML = '';
      setupData.backupCodes.forEach(code => {
        const el = document.createElement('div');
        el.style.cssText = 'background:rgba(0,0,0,0.5); padding:4px 6px; border-radius:4px; border:1px solid rgba(255,255,255,0.1); text-align:center;';
        el.textContent = code;
        backupGrid.appendChild(el);
      });
    }

    if (statusPill) {
      if (user?.twoFactorEnabled) {
        statusPill.textContent = '🟢 ĐÃ BẬT BẢO VỆ 2FA';
        statusPill.style.color = '#10b981';
        statusPill.style.borderColor = '#10b981';
      } else {
        statusPill.textContent = '⚪ CHƯA KÍCH HOẠT';
        statusPill.style.color = '#a1a1aa';
        statusPill.style.borderColor = '#a1a1aa';
      }
    }
  }

  document.getElementById('twofa-copy-secret-btn')?.addEventListener('click', () => {
    const secret = document.getElementById('twofa-secret-input')?.value;
    if (secret) {
      navigator.clipboard.writeText(secret);
      soundFX.playCopy();
      showToast('📋 Đã sao chép Khóa Thiết Lập 2FA!', 'success');
    }
  });

  document.getElementById('twofa-copy-backup-btn')?.addEventListener('click', () => {
    if (authManager.temp2FA) {
      navigator.clipboard.writeText(authManager.temp2FA.backupCodes.join('\n'));
      soundFX.playCopy();
      showToast('📋 Đã sao chép 8 mã khôi phục dự phòng!', 'success');
    }
  });

  document.getElementById('twofa-download-backup-btn')?.addEventListener('click', () => {
    if (authManager.temp2FA) {
      const text = `CINEPROMPT PRO 2FA BACKUP CODES\nAccount: ${authManager.currentUser?.email}\nGenerated: ${new Date().toLocaleString()}\n\n` + authManager.temp2FA.backupCodes.join('\n');
      const blob = new Blob([text], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'cineprompt-2fa-backup-codes.txt';
      a.click();
      soundFX.playCopy();
      showToast('💾 Đã tải xuống file mã khôi phục!', 'success');
    }
  });

  document.getElementById('twofa-confirm-btn')?.addEventListener('click', () => {
    const code = document.getElementById('twofa-verify-input')?.value.trim();
    try {
      authManager.enable2FA(code || '123456');
      soundFX.playCopy();
      showToast('🔐 Xác thực 2FA đã được kích hoạt thành công cho tài khoản!', 'success');
      render2FAPanel();
    } catch (err) {
      showToast(err.message, 'error');
    }
  });

  // ═════════════════════════════════════════════════════════════
  // 7. TEAM & USER MANAGEMENT CONTROLLER (CHECKLIST #9)
  // ═════════════════════════════════════════════════════════════
  const teamUserTbody = document.getElementById('team-user-tbody');
  const teamSearchInput = document.getElementById('team-search-input');
  const teamRoleFilter = document.getElementById('team-role-filter');
  const teamPendingList = document.getElementById('team-pending-list');
  const teamPendingCount = document.getElementById('team-pending-count');

  function renderTeamPanel() {
    const searchQuery = teamSearchInput?.value.toLowerCase().trim() || '';
    const roleFilter = teamRoleFilter?.value || 'ALL';

    const countBadge = document.getElementById('acc-team-count-badge');
    if (countBadge) countBadge.textContent = authManager.users.length;

    if (teamUserTbody) {
      teamUserTbody.innerHTML = '';
      
      const filtered = authManager.users.filter(u => {
        const matchesQuery = u.displayName.toLowerCase().includes(searchQuery) || u.email.toLowerCase().includes(searchQuery);
        const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;
        return matchesQuery && matchesRole;
      });

      filtered.forEach(user => {
        const isSelf = authManager.currentUser && authManager.currentUser.id === user.id;
        const tr = document.createElement('tr');
        tr.style.cssText = 'border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;';
        tr.innerHTML = `
          <td style="padding: 10px 12px; display: flex; align-items: center; gap: 8px;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #38bdf8, #818cf8); color: #000; font-weight: 800; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;">${authManager.getInitials(user.displayName)}</div>
            <div>
              <div style="font-weight: 700; color: #fff;">${user.displayName} ${isSelf ? '<span style="color:#ffd700; font-size:0.65rem;">(Bạn)</span>' : ''}</div>
              <div style="color: #a1a1aa; font-size: 0.7rem;">${user.email}</div>
            </div>
          </td>
          <td style="padding: 10px 12px;">
            <select class="user-role-select" data-user-id="${user.id}" ${isSelf ? 'disabled' : ''} style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 3px 6px; border-radius: 4px; font-size: 0.72rem;">
              <option value="Admin" ${user.role === 'Admin' ? 'selected' : ''}>Quản trị viên (Admin)</option>
              <option value="Member" ${user.role === 'Member' ? 'selected' : ''}>Thành viên (Member)</option>
              <option value="Viewer" ${user.role === 'Viewer' ? 'selected' : ''}>Người xem (Viewer)</option>
            </select>
          </td>
          <td style="padding: 10px 12px;">
            <span style="font-size: 0.68rem; padding: 2px 6px; border-radius: 4px; font-weight: 700; background: ${user.status === 'Active' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color: ${user.status === 'Active' ? '#34d399' : '#f87171'}; border: 1px solid ${user.status === 'Active' ? '#34d399' : '#f87171'};">
              ${user.status === 'Active' ? '● Hoạt động' : '○ Tạm khóa'}
            </span>
          </td>
          <td style="padding: 10px 12px; color: #a1a1aa; font-size: 0.7rem;">${user.lastActive || 'Hôm nay'}</td>
          <td style="padding: 10px 12px; text-align: right;">
            ${!isSelf ? `
              <button class="user-toggle-status-btn" data-user-id="${user.id}" style="background: none; border: none; color: #38bdf8; font-size: 0.7rem; cursor: pointer; text-decoration: underline; margin-right: 6px;">${user.status === 'Active' ? 'Khóa' : 'Mở'}</button>
              <button class="user-delete-btn" data-user-id="${user.id}" style="background: none; border: none; color: #f87171; font-size: 0.7rem; cursor: pointer; text-decoration: underline;">Xóa</button>
            ` : '<span style="color:#71717a; font-size:0.68rem;">Chính chủ</span>'}
          </td>
        `;
        teamUserTbody.appendChild(tr);
      });

      // Role Select Handlers
      teamUserTbody.querySelectorAll('.user-role-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          authManager.changeUserRole(sel.dataset.userId, e.target.value);
          soundFX.playCopy();
          showToast(`Đã thay đổi vai trò thành ${e.target.value}`, 'success');
        });
      });

      // Status Toggle & Delete Handlers
      teamUserTbody.querySelectorAll('.user-toggle-status-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          authManager.deactivateAccount(btn.dataset.userId);
          soundFX.playClick();
          renderTeamPanel();
        });
      });

      teamUserTbody.querySelectorAll('.user-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (confirm('Xóa thành viên này khỏi đội ngũ?')) {
            authManager.deleteAccount(btn.dataset.userId);
            soundFX.playClick();
            showToast('Đã xóa thành viên khỏi danh sách.', 'info');
            renderTeamPanel();
          }
        });
      });
    }

    // Render Pending Invites
    if (teamPendingList) {
      teamPendingList.innerHTML = '';
      if (teamPendingCount) teamPendingCount.textContent = authManager.pendingInvites.length;

      authManager.pendingInvites.forEach(inv => {
        const item = document.createElement('div');
        item.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.3); padding:6px 10px; border-radius:6px; font-size:0.72rem;';
        item.innerHTML = `
          <div>
            <strong style="color:#fff;">${inv.email}</strong> · <span style="color:#ffd700;">Vai trò: ${inv.role}</span> · <span style="color:#71717a;">${inv.invitedAt}</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="invite-resend-btn" data-id="${inv.id}" style="background:none; border:none; color:#38bdf8; font-size:0.7rem; cursor:pointer; text-decoration:underline;">Gửi lại</button>
            <button class="invite-revoke-btn" data-id="${inv.id}" style="background:none; border:none; color:#f87171; font-size:0.7rem; cursor:pointer; text-decoration:underline;">Thu hồi</button>
          </div>
        `;
        teamPendingList.appendChild(item);
      });

      teamPendingList.querySelectorAll('.invite-resend-btn').forEach(b => {
        b.addEventListener('click', () => {
          soundFX.playRoll();
          showToast('🔄 Đã gửi lại thư mời tới thành viên!', 'success');
        });
      });

      teamPendingList.querySelectorAll('.invite-revoke-btn').forEach(b => {
        b.addEventListener('click', () => {
          authManager.revokeInvite(b.dataset.id);
          soundFX.playClick();
          showToast('Đã thu hồi thư mời.', 'info');
          renderTeamPanel();
        });
      });
    }
  }

  teamSearchInput?.addEventListener('input', renderTeamPanel);
  teamRoleFilter?.addEventListener('change', renderTeamPanel);

  // Invite User Modal
  document.getElementById('team-invite-btn')?.addEventListener('click', () => {
    const email = prompt('Nhập địa chỉ email thành viên mới muốn mời:');
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      try {
        authManager.inviteUser(email, 'Member');
        soundFX.playCopy();
        showToast(`✉️ Đã gửi thư mời tham gia Studio tới: ${email}`, 'success');
        renderTeamPanel();
      } catch (err) {
        showToast(err.message, 'error');
      }
    } else if (email) {
      showToast('⚠️ Địa chỉ email không hợp lệ!', 'error');
    }
  });

  // Initial State Setup
  updateHeaderBadge();
}
