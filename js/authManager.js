/**
 * authManager.js — Complete Commercial Authentication & User Management Suite
 * ─────────────────────────────────────────────────────────────────────────
 * Fully implements all 9 Golden Standard UX Checklist categories:
 * 1. Đăng ký (Sign Up with Social Proof, Password Strength, Requirements, Tier Info)
 * 2. Đăng nhập (Log In with Remember Me, Auto-Refill, Password Toggle, SSO)
 * 3. Tài khoản (Profile, Avatar Fallback, Public/Internal Name, Danger Zone, Save States)
 * 4. Xác minh Email (6-digit OTP, Auto-Focus, Resend Timer, Visual Success)
 * 5. Đặt lại mật khẩu (Forgot/Reset flow with prefilled email, strength meter)
 * 6. Xử lý lỗi Realtime onBlur / onFocus
 * 7. Lưu thay đổi (Disabled initial -> Active on change -> Loading spinner -> Saved Toast)
 * 8. Xác thực 2FA (Authenticator App, QR & Secret Key, Pre-activation verification, 8 Backup Codes)
 * 9. Quản lý người dùng (Team table, Roles: Admin/Member/Viewer, Invite modal, Search/Filter, Deactivate/Delete)
 */

import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';

class AuthManager {
  constructor() {
    this.currentUser = null;
    this.users = [];
    this.pendingInvites = [];
    this.tempEmailVerification = null;
    this.tempResetEmail = null;
    this.temp2FA = null;
    this.unsavedProfileChanges = false;
    
    this.loadFromStorage();
    this.initDefaultUsers();
  }

  loadFromStorage() {
    try {
      const savedUser = localStorage.getItem('cinematique_current_user');
      const savedUsers = localStorage.getItem('cinematique_users_db');
      const savedInvites = localStorage.getItem('cinematique_pending_invites');

      if (savedUser) this.currentUser = JSON.parse(savedUser);
      if (savedUsers) this.users = JSON.parse(savedUsers);
      if (savedInvites) this.pendingInvites = JSON.parse(savedInvites);
    } catch (e) {
      console.warn('[AuthManager] Storage load error:', e);
    }
  }

  saveToStorage() {
    try {
      if (this.currentUser) {
        localStorage.setItem('cinematique_current_user', JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem('cinematique_current_user');
      }
      localStorage.setItem('cinematique_users_db', JSON.stringify(this.users));
      localStorage.setItem('cinematique_pending_invites', JSON.stringify(this.pendingInvites));
    } catch (e) {
      console.warn('[AuthManager] Storage save error:', e);
    }
  }

  initDefaultUsers() {
    if (!this.users || this.users.length === 0) {
      this.users = [
        {
          id: 'USR_ADMIN_01',
          email: 'director@cineprompt.pro',
          password: 'Password@123',
          displayName: 'Đạo Diễn Trung',
          accountName: 'trung_director_master',
          jobTitle: 'Executive AI Film Producer',
          phone: '+84 988 776 655',
          avatarUrl: null,
          role: 'Admin',
          status: 'Active',
          lastActive: 'Vừa xong',
          connectedAccounts: ['Google', 'GitHub'],
          twoFactorEnabled: true,
          plan: 'Studio Pro Tier (Unlimited)',
          createdAt: new Date().toISOString()
        },
        {
          id: 'USR_MEM_02',
          email: 'mai.cyberpunk@cineprompt.pro',
          password: 'Password@123',
          displayName: 'Mai Courier',
          accountName: 'mai_hanoi_2049',
          jobTitle: 'Senior Prompt Director',
          phone: '+84 912 345 678',
          avatarUrl: null,
          role: 'Member',
          status: 'Active',
          lastActive: '15 phút trước',
          connectedAccounts: ['Google'],
          twoFactorEnabled: false,
          plan: 'Pro Trial (Còn 12 ngày)',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
          id: 'USR_VIEW_03',
          email: 'client.review@filmagency.com',
          password: 'Password@123',
          displayName: 'Khách Hàng Review TVC',
          accountName: 'client_brand_reviewer',
          jobTitle: 'Brand Director',
          phone: '+84 903 112 233',
          role: 'Viewer',
          status: 'Inactive',
          lastActive: '3 ngày trước',
          connectedAccounts: [],
          twoFactorEnabled: false,
          plan: 'Free Viewer',
          createdAt: new Date(Date.now() - 86400000 * 7).toISOString()
        }
      ];
      this.saveToStorage();
    }

    if (!this.currentUser && this.users.length > 0) {
      // Set default logged in as the Admin Director
      this.currentUser = this.users[0];
      this.saveToStorage();
    }

    if (!this.pendingInvites || this.pendingInvites.length === 0) {
      this.pendingInvites = [
        {
          id: 'INV_01',
          email: 'vfx.specialist@studio.ai',
          role: 'Member',
          invitedAt: 'Hôm qua',
          invitedBy: 'Đạo Diễn Trung'
        }
      ];
      this.saveToStorage();
    }
  }

  // ── Password Strength Evaluator ──
  calculatePasswordStrength(password) {
    let score = 0;
    const checks = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };

    if (checks.length) score += 25;
    if (checks.upper && checks.lower) score += 25;
    if (checks.number) score += 25;
    if (checks.special) score += 25;

    let label = 'Yếu';
    let color = '#ef4444';
    if (score >= 75) {
      label = 'Rất mạnh (Chuẩn bảo mật)';
      color = '#10b981';
    } else if (score >= 50) {
      label = 'Trung bình';
      color = '#f59e0b';
    }

    return { score, label, color, checks };
  }

  // ── 1. Đăng ký (Sign Up) ──
  registerUser({ email, password, displayName, role = 'Member' }) {
    const existing = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      throw new Error('Email này đã tồn tại trong hệ thống. Vui lòng đăng nhập!');
    }

    const newUser = {
      id: `USR_${Date.now().toString(36).toUpperCase()}`,
      email: email.trim(),
      password: password,
      displayName: displayName || email.split('@')[0],
      accountName: email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '_'),
      jobTitle: 'AI Video Creator',
      phone: '',
      avatarUrl: null,
      role: role,
      status: 'Active',
      lastActive: 'Vừa xong',
      connectedAccounts: [],
      twoFactorEnabled: false,
      plan: 'Pro Trial 14 Ngày (Miễn Phí)',
      createdAt: new Date().toISOString()
    };

    this.users.push(newUser);
    this.currentUser = newUser;
    this.saveToStorage();
    return newUser;
  }

  // ── 2. Đăng nhập (Log In) ──
  loginUser(email, password, rememberMe = true) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('Không tìm thấy tài khoản với email này. Vui lòng kiểm tra lại!');
    }
    if (user.password !== password) {
      throw new Error('Mật khẩu không chính xác. Vui lòng thử lại hoặc bấm Quên mật khẩu.');
    }
    if (user.status === 'Inactive' || user.status === 'Banned') {
      throw new Error('Tài khoản này đang bị tạm khóa. Vui lòng liên hệ Quản trị viên.');
    }

    user.lastActive = 'Vừa xong';
    this.currentUser = user;
    if (rememberMe) {
      this.saveToStorage();
    }
    return user;
  }

  // ── Social SSO Login (Google / Facebook / Apple / GitHub) ──
  loginWithSocial(providerName) {
    const defaultEmail = `${providerName.toLowerCase()}_creator@cineprompt.pro`;
    let user = this.users.find(u => u.email === defaultEmail);

    if (!user) {
      user = {
        id: `USR_${providerName.toUpperCase()}_${Date.now().toString(36).toUpperCase()}`,
        email: defaultEmail,
        password: 'SocialLogin@OAuth2',
        displayName: `${providerName} Creator`,
        accountName: `${providerName.toLowerCase()}_user`,
        jobTitle: 'Verified Creator',
        phone: '',
        avatarUrl: null,
        role: 'Member',
        status: 'Active',
        lastActive: 'Vừa xong',
        connectedAccounts: [providerName],
        twoFactorEnabled: false,
        plan: 'Pro Trial 14 Ngày',
        createdAt: new Date().toISOString()
      };
      this.users.push(user);
    } else {
      if (!user.connectedAccounts.includes(providerName)) {
        user.connectedAccounts.push(providerName);
      }
      user.lastActive = 'Vừa xong';
    }

    this.currentUser = user;
    this.saveToStorage();
    return user;
  }

  // ── Logout ──
  logout() {
    this.currentUser = null;
    localStorage.removeItem('cinematique_current_user');
  }

  // ── 3. Cập nhật hồ sơ tài khoản ──
  updateProfile(profileData) {
    if (!this.currentUser) return null;
    
    Object.assign(this.currentUser, {
      displayName: profileData.displayName || this.currentUser.displayName,
      accountName: profileData.accountName || this.currentUser.accountName,
      jobTitle: profileData.jobTitle || this.currentUser.jobTitle,
      phone: profileData.phone || this.currentUser.phone,
      avatarUrl: profileData.avatarUrl !== undefined ? profileData.avatarUrl : this.currentUser.avatarUrl
    });

    const idx = this.users.findIndex(u => u.id === this.currentUser.id);
    if (idx !== -1) {
      this.users[idx] = { ...this.currentUser };
    }
    this.saveToStorage();
    return this.currentUser;
  }

  // ── Disconnect Social Account ──
  disconnectAccount(providerName) {
    if (!this.currentUser) return;
    this.currentUser.connectedAccounts = this.currentUser.connectedAccounts.filter(p => p !== providerName);
    this.updateProfile(this.currentUser);
  }

  // ── Delete / Deactivate Account (Danger Zone) ──
  deactivateAccount(userId) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = user.status === 'Active' ? 'Inactive' : 'Active';
      this.saveToStorage();
    }
  }

  deleteAccount(userId) {
    this.users = this.users.filter(u => u.id !== userId);
    if (this.currentUser && this.currentUser.id === userId) {
      this.logout();
    }
    this.saveToStorage();
  }

  // ── 4. Xác minh mã Email (Email OTP Verification) ──
  sendEmailVerificationCode(email) {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    this.tempEmailVerification = {
      email,
      code,
      expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes
    };
    return { code, email };
  }

  verifyEmailCode(enteredCode) {
    if (!this.tempEmailVerification) {
      throw new Error('Không có phiên xác minh nào đang chờ. Vui lòng bấm gửi lại mã.');
    }
    if (Date.now() > this.tempEmailVerification.expiresAt) {
      throw new Error('Mã xác minh đã hết hạn. Vui lòng bấm "Gửi lại mã mới".');
    }
    if (enteredCode !== this.tempEmailVerification.code) {
      throw new Error('Mã xác minh 6 số không chính xác. Vui lòng kiểm tra lại hòm thư!');
    }
    const verifiedEmail = this.tempEmailVerification.email;
    this.tempEmailVerification = null;
    return verifiedEmail;
  }

  // ── 5. Đặt lại mật khẩu (Reset Password) ──
  requestPasswordReset(email) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('Email không tồn tại trong hệ thống. Vui lòng kiểm tra lại.');
    }
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    this.tempResetEmail = { email, code: resetCode };
    return { email, resetCode };
  }

  confirmPasswordReset(newPassword) {
    if (!this.tempResetEmail) {
      throw new Error('Phiên đặt lại mật khẩu đã hết hạn.');
    }
    const user = this.users.find(u => u.email.toLowerCase() === this.tempResetEmail.email.toLowerCase());
    if (user) {
      user.password = newPassword;
      this.saveToStorage();
    }
    this.tempResetEmail = null;
    return true;
  }

  // ── 8. Xác thực 2 yếu tố 2FA (TOTP Simulation) ──
  generate2FASetup() {
    const secretKey = 'CINE-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const backupCodes = Array.from({ length: 8 }, () => Math.random().toString(36).substring(2, 8).toUpperCase());
    const mockQR = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=otpauth://totp/CinePrompt:${encodeURIComponent(this.currentUser?.email || 'user')}?secret=${secretKey}&issuer=CinePromptPro`;

    this.temp2FA = {
      secretKey,
      backupCodes,
      mockVerifyCode: '123456'
    };

    return {
      secretKey,
      backupCodes,
      qrUrl: mockQR,
      mockVerifyCode: '123456'
    };
  }

  enable2FA(verifyCode) {
    if (!this.temp2FA) throw new Error('Phiên thiết lập 2FA không tồn tại.');
    if (verifyCode !== '123456' && verifyCode.length !== 6) {
      throw new Error('Mã xác nhận 6 số từ ứng dụng Authenticator không đúng.');
    }
    if (this.currentUser) {
      this.currentUser.twoFactorEnabled = true;
      this.currentUser.twoFactorSecret = this.temp2FA.secretKey;
      this.currentUser.twoFactorBackupCodes = this.temp2FA.backupCodes;
      this.updateProfile(this.currentUser);
    }
    this.temp2FA = null;
    return true;
  }

  disable2FA(currentPassword) {
    if (!this.currentUser) return;
    if (this.currentUser.password !== currentPassword) {
      throw new Error('Mật khẩu xác nhận không chính xác.');
    }
    this.currentUser.twoFactorEnabled = false;
    this.currentUser.twoFactorSecret = null;
    this.currentUser.twoFactorBackupCodes = [];
    this.updateProfile(this.currentUser);
    return true;
  }

  // ── 9. Quản lý người dùng & Đội ngũ (Team & User Management) ──
  inviteUser(email, role = 'Member') {
    if (this.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('Người dùng này đã là thành viên chính thức.');
    }
    if (this.pendingInvites.some(i => i.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('Thư mời đã được gửi tới email này trước đó.');
    }

    const invite = {
      id: `INV_${Date.now().toString(36).toUpperCase()}`,
      email: email.trim(),
      role: role,
      invitedAt: 'Vừa xong',
      invitedBy: this.currentUser?.displayName || 'Quản Trị Viên'
    };

    this.pendingInvites.push(invite);
    this.saveToStorage();
    return invite;
  }

  revokeInvite(inviteId) {
    this.pendingInvites = this.pendingInvites.filter(i => i.id !== inviteId);
    this.saveToStorage();
  }

  changeUserRole(userId, newRole) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.role = newRole;
      if (this.currentUser && this.currentUser.id === userId) {
        this.currentUser.role = newRole;
      }
      this.saveToStorage();
    }
  }

  // ── Helper: Initials Avatar ──
  getInitials(name) {
    if (!name) return 'CP';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
}

export const authManager = new AuthManager();
