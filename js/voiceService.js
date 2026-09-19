/**
 * voiceService.js — Speech-to-Text Voice Dictation Engine
 * ────────────────────────────────────────────────────────
 * Transcribes spoken voice into text in real-time using native Web Speech API.
 */

import { soundFX } from './soundFX.js';
import { showToast } from './toast.js';

export class VoiceDictationEngine {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.targetTextarea = null;
    this.voiceBtn = null;
    this.voiceIcon = null;
    this.voiceLabel = null;
    this.onUpdateCallback = null;

    this.initRecognition();
  }

  initRecognition() {
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
    this.recognition.maxAlternatives = 1;

    // Detect system language or default to Vietnamese
    const currentLang = localStorage.getItem('cine_lang') || localStorage.getItem('cinematique_lang') || 'vi';
    this.recognition.lang = currentLang === 'en' ? 'en-US' : 'vi-VN';

    this.recognition.onstart = () => {
      this.isListening = true;
      this.updateUI(true);
      soundFX.playRoll();
      const lang = localStorage.getItem('cine_lang') || 'vi';
      showToast(lang === 'vi' ? '🎙️ Đang lắng nghe giọng nói... Hãy nói ý tưởng của bạn!' : '🎙️ Listening... Speak your prompt idea!', 'info', 2500);
    };

    this.recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      if (this.targetTextarea) {
        const currentVal = this.initialText ? this.initialText.trim() + ' ' : '';
        const combined = currentVal + (finalTranscript || interimTranscript);
        this.targetTextarea.value = combined;
        
        if (this.onUpdateCallback) {
          this.onUpdateCallback(this.targetTextarea);
        }
      }
    };

    this.recognition.onerror = (event) => {
      console.warn('[Voice Dictation Error]', event.error);
      this.stop();
      const lang = localStorage.getItem('cine_lang') || 'vi';
      if (event.error === 'not-allowed') {
        showToast(lang === 'vi' ? '⚠️ Bạn chưa cấp quyền truy cập Microphone cho trình duyệt.' : '⚠️ Microphone permission not granted.', 'warning', 4000);
      } else if (event.error !== 'no-speech') {
        showToast(lang === 'vi' ? `⚠️ Nhận diện giọng nói gián đoạn (${event.error})` : `⚠️ Voice recognition error (${event.error})`, 'warning', 3000);
      }
    };

    this.recognition.onend = () => {
      if (this.isListening) {
        this.isListening = false;
        this.updateUI(false);
        soundFX.playCopy();
        const lang = localStorage.getItem('cine_lang') || 'vi';
        showToast(lang === 'vi' ? '✨ Đã hoàn tất nhập liệu giọng nói!' : '✨ Voice input complete!', 'success', 2500);
      }
    };
  }

  bind(btnId, textareaId, onUpdate) {
    this.voiceBtn = document.getElementById(btnId);
    this.targetTextarea = document.getElementById(textareaId);
    this.voiceIcon = document.getElementById('voice-icon');
    this.voiceLabel = document.getElementById('voice-label');
    this.onUpdateCallback = onUpdate;

    if (!this.voiceBtn) return;

    this.voiceBtn.addEventListener('click', () => {
      const lang = localStorage.getItem('cine_lang') || 'vi';
      if (!this.supported) {
        showToast(lang === 'vi' ? 'Trình duyệt không hỗ trợ Web Speech API. Hãy dùng Chrome hoặc Edge.' : 'Browser does not support Web Speech API. Please use Chrome or Edge.', 'warning', 4000);
        return;
      }

      if (this.isListening) {
        this.stop();
      } else {
        this.start();
      }
    });

    // Update language when language changes
    window.addEventListener('languageChanged', (e) => {
      if (this.recognition) {
        const lang = e.detail || localStorage.getItem('cine_lang') || 'vi';
        this.recognition.lang = lang === 'en' ? 'en-US' : 'vi-VN';
      }
    });
  }

  start() {
    if (!this.supported || !this.recognition) return;
    this.initialText = this.targetTextarea ? this.targetTextarea.value : '';
    try {
      this.recognition.start();
    } catch (e) {
      console.warn('Speech recognition already started:', e);
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
    this.isListening = false;
    this.updateUI(false);
  }

  updateUI(listening) {
    if (!this.voiceBtn) return;
    if (listening) {
      this.voiceBtn.style.background = 'rgba(239, 68, 68, 0.25)';
      this.voiceBtn.style.borderColor = '#f87171';
      this.voiceBtn.style.color = '#f87171';
      this.voiceBtn.style.boxShadow = '0 0 14px rgba(239, 68, 68, 0.5)';
      if (this.voiceLabel) this.voiceLabel.textContent = 'Đang nghe...';
      if (this.voiceIcon) this.voiceIcon.textContent = '🔴';
    } else {
      this.voiceBtn.style.background = 'rgba(56, 189, 248, 0.15)';
      this.voiceBtn.style.borderColor = 'rgba(56, 189, 248, 0.35)';
      this.voiceBtn.style.color = '#38bdf8';
      this.voiceBtn.style.boxShadow = 'none';
      if (this.voiceLabel) this.voiceLabel.textContent = 'Nói';
      if (this.voiceIcon) this.voiceIcon.textContent = '🎙️';
    }
  }
}

export const voiceEngine = new VoiceDictationEngine();
