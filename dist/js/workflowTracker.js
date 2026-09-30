/**
 * workflowTracker.js — Director Workflow & Audit Log Engine
 * ─────────────────────────────────────────────────────────
 * Tracks production steps (Concept -> Camera -> Optical -> Aspect Ratio -> Model AI -> Audio/SFX)
 * Calculates progress percentage, displays smart "missing steps" suggestions,
 * and maintains a persistent timeline audit log for the current session.
 */

const AUDIT_STORAGE_KEY = 'cine_director_audit_log_v2';
const MAX_LOG_ENTRIES = 40;

class WorkflowTracker {
  constructor() {
    this.steps = {
      concept: false,
      camera: false,
      aspect: true,   // Default 16:9
      optical: false,
      model: false,
      audio: false
    };

    this.stepNames = {
      concept: 'Concept / Kịch bản gốc',
      camera: 'Cỡ cảnh & Góc máy (Studio)',
      aspect: 'Tỉ lệ khung hình (Aspect Ratio)',
      optical: 'Quang học & Nguồn sáng',
      model: 'Model AI đích (Veo/Sora/Wan/MJ)',
      audio: 'Thiết kế Âm thanh / SFX Foley'
    };

    this.logs = this.loadLogs();
  }

  loadLogs() {
    try {
      const data = localStorage.getItem(AUDIT_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveLogs() {
    try {
      localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(this.logs));
    } catch {
      // Ignore quota errors
    }
  }

  /**
   * Record a new action into the audit trail
   */
  logAction(actionName, icon = '⚡', details = '') {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0]; // HH:MM:SS
    const entry = {
      id: Date.now() + Math.random().toString(36).substring(2, 6),
      time: timeStr,
      action: actionName,
      icon,
      details
    };

    this.logs.unshift(entry);
    if (this.logs.length > MAX_LOG_ENTRIES) {
      this.logs = this.logs.slice(0, MAX_LOG_ENTRIES);
    }
    this.saveLogs();
    this.renderLogView();
  }

  clearLogs() {
    this.logs = [];
    this.saveLogs();
    this.renderLogView();
  }

  getLogsText() {
    if (!this.logs.length) return 'Chưa có hoạt động nào.';
    return this.logs
      .map(l => `[${l.time}] ${l.icon} ${l.action}${l.details ? ' — ' + l.details : ''}`)
      .join('\n');
  }

  /**
   * Update the status of a specific step
   */
  setStep(stepKey, isDone, detail = '') {
    if (this.steps[stepKey] !== undefined) {
      this.steps[stepKey] = Boolean(isDone);
      this.updateUI(stepKey, detail);
    }
  }

  /**
   * Re-evaluate overall pipeline completion
   */
  evaluatePipeline() {
    const keys = Object.keys(this.steps);
    const doneCount = keys.filter(k => this.steps[k]).length;
    const percent = Math.round((doneCount / keys.length) * 100);

    const badge = document.getElementById('pipeline-progress-badge');
    const bar = document.getElementById('pipeline-progress-bar');
    const sugg = document.getElementById('pipeline-suggestion');

    if (badge) {
      badge.textContent = `${doneCount}/6 BƯỚC (${percent}%)`;
      if (percent === 100) {
        badge.style.background = 'rgba(34,197,94,0.2)';
        badge.style.borderColor = '#22c55e';
        badge.style.color = '#4ade80';
      } else if (percent >= 50) {
        badge.style.background = 'rgba(234,179,8,0.2)';
        badge.style.borderColor = '#eab308';
        badge.style.color = '#fde047';
      } else {
        badge.style.background = 'rgba(148,163,184,0.15)';
        badge.style.borderColor = '#64748b';
        badge.style.color = '#94a3b8';
      }
    }

    if (bar) {
      bar.style.width = `${percent}%`;
    }

    if (sugg) {
      if (percent === 100) {
        sugg.innerHTML = '🌟 <b>Hoàn hảo 100%!</b> Quy trình đã tối ưu đầy đủ từ góc máy, quang học đến âm thanh. Sẵn sàng kết xuất!';
        sugg.style.background = 'rgba(34,197,94,0.12)';
        sugg.style.borderColor = 'rgba(34,197,94,0.35)';
        sugg.style.color = '#86efac';
      } else {
        const missing = [];
        if (!this.steps.concept) missing.push('Chọn 1 kịch bản hoặc nhập chủ thể');
        if (!this.steps.camera) missing.push('Chọn góc máy / cỡ cảnh tại StudioBinder');
        if (!this.steps.optical) missing.push('Quét & cân chỉnh Optical Integrity');
        if (!this.steps.audio) missing.push('Cấu hình âm thanh / SFX Foley');
        if (!this.steps.model) missing.push('Chọn model đích & sao chép prompt');

        const nextStep = missing[0] || 'Kiểm tra lại các thông số';
        sugg.innerHTML = `💡 <b>Đang thiếu:</b> ${nextStep}. Hoàn tất để đạt chuẩn điện ảnh 100%.`;
        sugg.style.background = 'rgba(56,189,248,0.08)';
        sugg.style.borderColor = 'rgba(56,189,248,0.25)';
        sugg.style.color = '#bae6fd';
      }
    }
  }

  updateUI(changedKey, detail = '') {
    const el = document.querySelector(`.pipeline-step[data-step="${changedKey}"]`);
    if (el) {
      const statusEl = el.querySelector('.pipeline-step-status');
      if (statusEl) {
        if (this.steps[changedKey]) {
          statusEl.innerHTML = `<span style="color:#22c55e;">✓ ${detail || 'Đã hoàn thành'}</span>`;
        } else {
          statusEl.innerHTML = `<span style="color:#64748B;">○ Chưa chọn</span>`;
        }
      }
    }
    this.evaluatePipeline();
  }

  renderLogView() {
    const container = document.getElementById('pipeline-log-container');
    if (!container) return;

    if (!this.logs.length) {
      container.innerHTML = '<div style="color:#64748B; font-style:italic; padding:4px;">Chưa có hoạt động nào trong phiên làm việc.</div>';
      return;
    }

    container.innerHTML = this.logs.map(log => `
      <div style="display:flex; align-items:flex-start; gap:6px; padding:2px 0; border-bottom:1px solid rgba(255,255,255,0.03);">
        <span style="color:#64748B; font-size:0.62rem; flex-shrink:0;">[${log.time}]</span>
        <span style="flex-shrink:0;">${log.icon}</span>
        <span style="color:#e4e4e7; flex:1; word-break:break-word;">
          <b style="color:#facc15;">${log.action}</b>${log.details ? ': <span style="color:#94a3b8;">' + log.details + '</span>' : ''}
        </span>
      </div>
    `).join('');
  }

  initDOMEvents() {
    // Tab switching: Checklist vs Activity Log
    const tabChecklist = document.getElementById('tracker-tab-checklist');
    const tabLog = document.getElementById('tracker-tab-log');
    const viewChecklist = document.getElementById('tracker-view-checklist');
    const viewLog = document.getElementById('tracker-view-log');

    if (tabChecklist && tabLog && viewChecklist && viewLog) {
      tabChecklist.addEventListener('click', () => {
        tabChecklist.classList.add('active');
        tabChecklist.style.background = 'rgba(201,162,39,0.25)';
        tabChecklist.style.borderColor = '#ffd700';
        tabChecklist.style.color = '#ffd700';

        tabLog.classList.remove('active');
        tabLog.style.background = 'transparent';
        tabLog.style.borderColor = 'rgba(255,255,255,0.15)';
        tabLog.style.color = '#94a3b8';

        viewChecklist.style.display = 'block';
        viewLog.style.display = 'none';
      });

      tabLog.addEventListener('click', () => {
        tabLog.classList.add('active');
        tabLog.style.background = 'rgba(201,162,39,0.25)';
        tabLog.style.borderColor = '#ffd700';
        tabLog.style.color = '#ffd700';

        tabChecklist.classList.remove('active');
        tabChecklist.style.background = 'transparent';
        tabChecklist.style.borderColor = 'rgba(255,255,255,0.15)';
        tabChecklist.style.color = '#94a3b8';

        viewChecklist.style.display = 'none';
        viewLog.style.display = 'block';
        this.renderLogView();
      });
    }

    // Clear log button
    const clearBtn = document.getElementById('tracker-clear-log-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearLogs();
      });
    }

    // Copy log button
    const copyBtn = document.getElementById('tracker-copy-log-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = this.getLogsText();
        navigator.clipboard.writeText(text).then(() => {
          const orig = copyBtn.textContent;
          copyBtn.textContent = '✓ Đã chép';
          setTimeout(() => { copyBtn.textContent = orig; }, 1500);
        });
      });
    }

    // Initial render
    this.renderLogView();
    this.evaluatePipeline();
  }
}

export const workflowTracker = new WorkflowTracker();
