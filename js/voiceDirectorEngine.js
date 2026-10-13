/**
 * voiceDirectorEngine.js — Advanced Voice Director with Cinema NLP Parser
 * ──────────────────────────────────────────────────────────────────────────
 * Upgrades basic voice dictation to intelligent cinematic speech parsing.
 * Detects camera angles, moods, shot types, lighting keywords from spoken
 * Vietnamese/English and auto-fills Studio Engine parameters.
 *
 * Tech: Web Speech API + On-device processing + Cinema NLP tokenizer
 * By Đạo Diễn Trungvt — Cine Prompt Pro v3.0
 */

import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';

// ─── Cinema NLP Taxonomy ─────────────────────────────────────────────────────

const CINEMA_TAXONOMY = {
  shotSize: {
    label: 'Cỡ cảnh',
    keywords: {
      'extreme_closeup': ['extreme close-up', 'extreme closeup', 'eccu', 'macro', 'cận cực', 'siêu cận', 'cực cận'],
      'closeup': ['close-up', 'closeup', 'cu', 'cận cảnh', 'cận mặt', 'cận'],
      'medium_closeup': ['medium close-up', 'mcu', 'cận trung', 'nửa người trên'],
      'medium': ['medium shot', 'ms', 'trung cảnh', 'ngang ngực', 'ngang hông'],
      'medium_wide': ['medium wide', 'mws', 'trung toàn'],
      'wide': ['wide shot', 'ws', 'full shot', 'toàn cảnh', 'toàn thân'],
      'extreme_wide': ['extreme wide', 'ews', 'establishing', 'viễn cảnh', 'siêu rộng', 'bao quát']
    }
  },
  cameraAngle: {
    label: 'Góc máy',
    keywords: {
      'high_angle': ['high angle', 'bird eye', 'góc cao', 'nhìn xuống', 'từ trên', 'chim bay', 'bird\'s eye'],
      'low_angle': ['low angle', 'worm eye', 'góc thấp', 'nhìn lên', 'từ dưới', 'sâu bọ'],
      'eye_level': ['eye level', 'ngang tầm mắt', 'ngang mắt'],
      'dutch_angle': ['dutch angle', 'tilt', 'nghiêng', 'xiên', 'dutch tilt'],
      'overhead': ['overhead', 'top-down', 'nhìn từ đỉnh', 'từ trên xuống', 'trên đỉnh đầu'],
      'pov': ['pov', 'point of view', 'góc nhìn chủ quan', 'chủ quan']
    }
  },
  cameraMotion: {
    label: 'Chuyển động máy',
    keywords: {
      'dolly_in': ['dolly in', 'dolly zoom', 'tiến vào', 'đẩy vào', 'dolly'],
      'dolly_out': ['dolly out', 'pull back', 'lùi ra', 'kéo ra'],
      'pan_left': ['pan left', 'lia trái', 'quay trái'],
      'pan_right': ['pan right', 'lia phải', 'quay phải'],
      'tilt_up': ['tilt up', 'ngửa lên', 'nghiêng lên'],
      'tilt_down': ['tilt down', 'cúi xuống', 'nghiêng xuống'],
      'tracking': ['tracking', 'follow', 'theo dõi', 'bám sát', 'đi theo'],
      'crane': ['crane', 'jib', 'cần cẩu', 'nâng lên'],
      'steadicam': ['steadicam', 'gimbal', 'ổn định', 'trôi mượt'],
      'handheld': ['handheld', 'cầm tay', 'rung tay', 'run and gun'],
      'whip_pan': ['whip pan', 'whip zoom', 'lia nhanh', 'quay nhanh'],
      'rack_focus': ['rack focus', 'chuyển nét', 'đổi nét', 'lấy nét chuyển']
    }
  },
  mood: {
    label: 'Tâm trạng',
    keywords: {
      'dramatic': ['dramatic', 'kịch tính', 'căng thẳng', 'intense', 'dữ dội'],
      'romantic': ['romantic', 'lãng mạn', 'tình cảm', 'ngọt ngào', 'yêu đương'],
      'mysterious': ['mysterious', 'bí ẩn', 'huyền bí', 'enigmatic'],
      'melancholic': ['melancholic', 'buồn', 'u sầu', 'tĩnh lặng', 'cô đơn', 'nostalgia'],
      'epic': ['epic', 'hoành tráng', 'hùng tráng', 'vĩ đại', 'grandiose'],
      'horror': ['horror', 'kinh dị', 'rùng rợn', 'sợ hãi', 'creepy'],
      'comedy': ['comedy', 'hài', 'vui vẻ', 'tươi sáng', 'bright', 'fun'],
      'noir': ['noir', 'neo-noir', 'tối tăm', 'bóng đêm', 'dark', 'moody'],
      'dreamy': ['dreamy', 'mơ màng', 'phiêu', 'ethereal', 'surreal'],
      'energetic': ['energetic', 'năng lượng', 'sôi động', 'mạnh mẽ', 'powerful']
    }
  },
  lighting: {
    label: 'Ánh sáng',
    keywords: {
      'golden_hour': ['golden hour', 'giờ vàng', 'nắng chiều', 'hoàng hôn', 'sunset'],
      'blue_hour': ['blue hour', 'giờ xanh', 'chạng vạng', 'twilight'],
      'chiaroscuro': ['chiaroscuro', 'sáng tối', 'ánh sáng kịch tính', 'contrast mạnh'],
      'neon': ['neon', 'neon light', 'ánh đèn neon', 'cyberpunk'],
      'natural': ['natural light', 'ánh sáng tự nhiên', 'ban ngày', 'daylight'],
      'backlit': ['backlit', 'backlight', 'ngược sáng', 'silhouette'],
      'candlelight': ['candlelight', 'ánh nến', 'intimate'],
      'moonlight': ['moonlight', 'ánh trăng', 'trăng sáng'],
      'studio': ['studio light', 'ánh đèn studio', 'ba điểm sáng', 'three-point'],
      'volumetric': ['volumetric', 'god rays', 'tia sáng', 'ánh sáng thể tích', 'crepuscular']
    }
  },
  filmStyle: {
    label: 'Phong cách phim',
    keywords: {
      'cinematic': ['cinematic', 'điện ảnh', 'phim ảnh', 'movie quality'],
      'documentary': ['documentary', 'tài liệu', 'phóng sự'],
      'anime': ['anime', 'hoạt hình', 'manga style', 'animation'],
      'vintage': ['vintage', 'retro', 'cổ điển', 'thập niên', 'phim cũ'],
      'cyberpunk': ['cyberpunk', 'sci-fi', 'viễn tưởng', 'future', 'tương lai'],
      'minimalist': ['minimalist', 'tối giản', 'clean', 'sạch sẽ'],
      'wes_anderson': ['wes anderson', 'symmetrical', 'đối xứng', 'pastel'],
      'tarantino': ['tarantino', 'grindhouse', 'trunk shot'],
      'kubrick': ['kubrick', 'one-point perspective', 'đối xứng trung tâm'],
      'nolan': ['nolan', 'imax', 'epic scale', 'thực tế quy mô lớn']
    }
  }
};

// ─── Voice Director Engine Class ─────────────────────────────────────────────

export class VoiceDirectorEngine {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.supported = false;
    this.currentTranscript = '';
    this.finalTranscript = '';
    this.interimTranscript = '';
    this.parsedAttributes = {};
    this.rawSubject = '';
    this.callbacks = {};
    this.history = [];
    this.autoDetectLang = true;

    this._initRecognition();
  }

  // ── Initialize Web Speech API ──
  _initRecognition() {
    if (typeof window === 'undefined') return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      this.supported = false;
      return;
    }

    this.supported = true;
    this.recognition = new SpeechRec();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 3;

    // Default to Vietnamese
    const storedLang = localStorage.getItem('cine_lang') || 'vi';
    this.recognition.lang = storedLang === 'en' ? 'en-US' : 'vi-VN';

    // On-device processing (2025+ Chrome feature)
    if ('processLocally' in this.recognition) {
      this.recognition.processLocally = true;
    }

    // ── Event Handlers ──
    this.recognition.onstart = () => {
      this.isListening = true;
      this._emit('start');
      soundFX.playRoll();
    };

    this.recognition.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript + ' ';
        } else {
          interim += transcript;
        }
      }

      this.interimTranscript = interim;
      if (final) {
        this.finalTranscript += final;
      }
      this.currentTranscript = this.finalTranscript + this.interimTranscript;

      // Auto-detect language from content
      if (this.autoDetectLang && this.currentTranscript.length > 10) {
        this._autoDetectLanguage(this.currentTranscript);
      }

      // Real-time NLP parsing
      const parsed = this.parseTranscript(this.currentTranscript);
      this.parsedAttributes = parsed.attributes;
      this.rawSubject = parsed.subject;

      this._emit('result', {
        full: this.currentTranscript,
        interim: this.interimTranscript,
        final: this.finalTranscript,
        parsed: parsed,
        confidence: event.results[event.results.length - 1]?.[0]?.confidence || 0
      });
    };

    this.recognition.onerror = (event) => {
      console.warn('[VoiceDirector Error]', event.error);
      this._emit('error', event.error);
      if (event.error !== 'no-speech') {
        this.stop();
      }
    };

    this.recognition.onend = () => {
      const wasListening = this.isListening;
      this.isListening = false;
      if (wasListening) {
        // Save to history
        if (this.currentTranscript.trim()) {
          this.history.push({
            timestamp: Date.now(),
            transcript: this.currentTranscript.trim(),
            parsed: { ...this.parsedAttributes },
            subject: this.rawSubject
          });
          // Keep last 20 entries
          if (this.history.length > 20) this.history.shift();
        }
        this._emit('end', {
          transcript: this.currentTranscript,
          parsed: this.parsedAttributes,
          subject: this.rawSubject
        });
        soundFX.playCopy();
      }
    };

    // Listen for language change events
    window.addEventListener('languageChanged', (e) => {
      if (this.recognition) {
        const lang = e.detail || localStorage.getItem('cine_lang') || 'vi';
        this.recognition.lang = lang === 'en' ? 'en-US' : 'vi-VN';
      }
    });
  }

  // ── Auto-detect Vietnamese vs English ──
  _autoDetectLanguage(text) {
    const viMarkers = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/gi;
    const viCount = (text.match(viMarkers) || []).length;
    const isVietnamese = viCount > 2 || text.length < 20;

    const targetLang = isVietnamese ? 'vi-VN' : 'en-US';
    if (this.recognition.lang !== targetLang) {
      // Note: Can't change lang mid-session in most browsers, but track for display
      this._detectedLang = isVietnamese ? 'vi' : 'en';
    }
  }

  // ── NLP Cinema Parser ──
  parseTranscript(text) {
    if (!text || !text.trim()) {
      return { attributes: {}, subject: '', detectedTerms: [] };
    }

    const normalized = text.toLowerCase().trim();
    const attributes = {};
    const detectedTerms = [];
    const consumedSpans = []; // Track which parts of text are cinema terms

    // Scan each taxonomy category
    for (const [category, config] of Object.entries(CINEMA_TAXONOMY)) {
      for (const [value, keywords] of Object.entries(config.keywords)) {
        for (const keyword of keywords) {
          const idx = normalized.indexOf(keyword.toLowerCase());
          if (idx !== -1) {
            // Prioritize longer matches and first occurrence
            if (!attributes[category] || keyword.length > (attributes[category]._matchLen || 0)) {
              attributes[category] = {
                value,
                label: config.label,
                matchedKeyword: keyword,
                _matchLen: keyword.length
              };
              detectedTerms.push({ category, value, keyword, position: idx });
              consumedSpans.push([idx, idx + keyword.length]);
            }
          }
        }
      }
    }

    // Extract subject = everything NOT a cinema term
    let subject = normalized;
    // Sort consumed spans by position descending so we can remove from end first
    consumedSpans.sort((a, b) => b[0] - a[0]);
    for (const [start, end] of consumedSpans) {
      subject = subject.substring(0, start) + subject.substring(end);
    }
    // Clean up: remove excess whitespace, commas, and common filler words
    subject = subject
      .replace(/\b(cảnh|shot|angle|góc|máy|quay|kiểu|pha|mood|style|phong cách|ánh sáng|light)\b/gi, '')
      .replace(/[,;]+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();

    // Clean up _matchLen from output
    for (const key of Object.keys(attributes)) {
      delete attributes[key]._matchLen;
    }

    return { attributes, subject, detectedTerms };
  }

  // ── Start listening ──
  start() {
    if (!this.supported || !this.recognition) {
      showToast('Trình duyệt không hỗ trợ Voice Director. Hãy dùng Chrome hoặc Edge.', 'warning', 4000);
      return;
    }
    // Reset state
    this.currentTranscript = '';
    this.finalTranscript = '';
    this.interimTranscript = '';
    this.parsedAttributes = {};
    this.rawSubject = '';
    this._detectedLang = null;

    try {
      this.recognition.start();
    } catch (e) {
      console.warn('Voice Director already started:', e);
    }
  }

  // ── Stop listening ──
  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
    this.isListening = false;
  }

  // ── Toggle ──
  toggle() {
    if (this.isListening) {
      this.stop();
    } else {
      this.start();
    }
  }

  // ── Event emitter ──
  on(event, callback) {
    if (!this.callbacks[event]) this.callbacks[event] = [];
    this.callbacks[event].push(callback);
    return this; // chainable
  }

  off(event, callback) {
    if (!this.callbacks[event]) return;
    this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback);
  }

  _emit(event, data) {
    if (this.callbacks[event]) {
      for (const cb of this.callbacks[event]) {
        try { cb(data); } catch (e) { console.error('[VoiceDirector event error]', e); }
      }
    }
  }

  // ── Get formatted results for Studio Engine ──
  getStudioParams() {
    const attrs = this.parsedAttributes;
    return {
      shotSize: attrs.shotSize?.value || '',
      shotAngle: attrs.cameraAngle?.value || '',
      cameraMotion: attrs.cameraMotion?.value || '',
      mood: attrs.mood?.value || '',
      lighting: attrs.lighting?.value || '',
      filmStyle: attrs.filmStyle?.value || '',
      subject: this.rawSubject || this.currentTranscript
    };
  }

  // ── Get history ──
  getHistory() {
    return [...this.history];
  }

  // ── Clear history ──
  clearHistory() {
    this.history = [];
  }
}

// ─── Singleton Export ────────────────────────────────────────────────────────

export const voiceDirector = new VoiceDirectorEngine();
