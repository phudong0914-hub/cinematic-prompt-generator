/**
 * omniDirectorEngine.js — Qwen Omni Live-Director, Real-Time Walkie-Talkie & Vision DNA Extractor
 * Cine Prompt Pro v5.0 Enterprise (Omni + Viral Studio OS)
 * by Đạo Diễn Trungvt
 */

export class OmniDirectorEngine {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.stream = null;
    this.onSceneParsedCallback = null;
    this.initSpeechRecognition();
  }

  /**
   * Khởi tạo Web Speech API cho Bộ đàm đạo diễn (Push-to-Talk)
   */
  initSpeechRecognition() {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'vi-VN';

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (event.results[event.results.length - 1].isFinal) {
          this.parseDirectorSpeech(transcript);
        }
      };

      this.recognition.onerror = (err) => {
        console.warn('Speech recognition error:', err);
        this.isListening = false;
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };
    }
  }

  /**
   * Bắt đầu nghe từ Bộ Đàm Đạo Diễn
   */
  startWalkieTalkie(lang = 'vi-VN', onParsed) {
    if (!this.recognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ Web Speech API. Vui lòng sử dụng Chrome/Edge.');
      return false;
    }
    this.onSceneParsedCallback = onParsed;
    this.recognition.lang = lang;
    try {
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (e) {
      console.warn('Speech start warning:', e);
      return false;
    }
  }

  /**
   * Dừng Bộ Đàm
   */
  stopWalkieTalkie() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  /**
   * Phân tích khẩu lệnh tự nhiên của Đạo Diễn thành các thuộc tính điện ảnh
   * Ví dụ: "Cảnh toàn phố Sài Gòn mưa đêm, máy Dolly In chậm vào ly cà phê, nhạc Jazz buồn"
   */
  parseDirectorSpeech(speechText) {
    const text = speechText.toLowerCase();
    const result = {
      rawText: speechText,
      shotSize: 'Medium Shot (MS)',
      cameraAngle: 'Eye-Level',
      movement: 'Static',
      lighting: 'Golden Hour (3200K)',
      atmosphere: '',
      audio: '',
      action: speechText
    };

    // Phân tích Shot Size
    if (text.includes('cảnh toàn') || text.includes('toàn cảnh') || text.includes('wide')) {
      result.shotSize = 'Wide Establishing Shot (WS)';
    } else if (text.includes('cận cảnh') || text.includes('cận') || text.includes('close up') || text.includes('close-up')) {
      result.shotSize = 'Close-Up (CU)';
    } else if (text.includes('đặc tả') || text.includes('siêu cận') || text.includes('extreme close')) {
      result.shotSize = 'Extreme Close-Up (ECU)';
    } else if (text.includes('trung cảnh') || text.includes('ngang ngực') || text.includes('medium')) {
      result.shotSize = 'Medium Close-Up (MCU)';
    }

    // Phân tích Góc máy
    if (text.includes('từ dưới lên') || text.includes('góc thấp') || text.includes('low angle')) {
      result.cameraAngle = 'Low Angle (Uy quyền & Trọng lực)';
    } else if (text.includes('từ trên xuống') || text.includes('góc cao') || text.includes('high angle')) {
      result.cameraAngle = 'High Angle (Yếu thế & Bao quát)';
    } else if (text.includes('ngang mắt') || text.includes('eye level')) {
      result.cameraAngle = 'Eye-Level (Gần gũi, Đồng cảm)';
    } else if (text.includes('nghiêng') || text.includes('dutch angle')) {
      result.cameraAngle = 'Dutch Angle (Bất an, Kịch tính)';
    }

    // Phân tích Chuyển động
    if (text.includes('dolly in') || text.includes('tiến vào') || text.includes('đẩy vào')) {
      result.movement = 'Slow Push-in Dolly (Tập trung tâm lý)';
    } else if (text.includes('dolly out') || text.includes('lùi ra') || text.includes('kéo ra')) {
      result.movement = 'Dolly Out Reveal (Mở rộng bối cảnh)';
    } else if (text.includes('orbit') || text.includes('lượn quanh') || text.includes('xoay quanh')) {
      result.movement = '360-degree Orbit Arc (Điện ảnh hoành tráng)';
    } else if (text.includes('fpv') || text.includes('bay nhanh') || text.includes('drone')) {
      result.movement = 'Dynamic FPV Drone Dive';
    } else if (text.includes('pan') || text.includes('lia')) {
      result.movement = 'Slow Cinematic Pan';
    }

    // Phân tích Ánh sáng & Bối cảnh
    if (text.includes('mưa đêm') || text.includes('đêm mưa') || text.includes('rain')) {
      result.lighting = 'Night Monsoon Rain (Motivated Neon & Cyan Puddles)';
      result.atmosphere = 'Heavy volumetric rain, water droplets splash on lens, asphalt reflections';
    } else if (text.includes('hoàng hôn') || text.includes('chiều tà') || text.includes('golden hour')) {
      result.lighting = 'Golden Hour (3200K Warm Rim Light)';
      result.atmosphere = 'Warm amber haze, glowing Tyndall rays';
    } else if (text.includes('neon') || text.includes('cyberpunk')) {
      result.lighting = 'Cyberpunk Neon Chiaroscuro (Cyan & Magenta split)';
      result.atmosphere = 'Volumetric smoke, wet ground neon bounce';
    }

    // Phân tích Âm thanh
    if (text.includes('jazz') || text.includes('nhạc buồn')) {
      result.audio = 'Melancholic jazz trumpet with soft vinyl crackle';
    } else if (text.includes('tiếng mưa') || text.includes('sấm')) {
      result.audio = 'Gentle steady rain ambience with distant thunder rumble';
    } else if (text.includes('hành động') || text.includes('dồn dập')) {
      result.audio = 'Hans Zimmer style pulsating low brass braaam, 120 BPM';
    }

    if (this.onSceneParsedCallback) {
      this.onSceneParsedCallback(result);
    }
    return result;
  }

  /**
   * Mở Webcam hoặc Màn hình để soi vật thể / phác thảo trực tiếp
   */
  async openCaptureFeed(videoElement, mode = 'webcam') {
    try {
      if (this.stream) {
        this.stream.getTracks().forEach(t => t.stop());
      }
      if (mode === 'webcam') {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: 'environment' }
        });
      } else {
        this.stream = await navigator.mediaDevices.getDisplayMedia({
          video: { cursor: 'always' }
        });
      }
      videoElement.srcObject = this.stream;
      await videoElement.play();
      return true;
    } catch (err) {
      console.error('Cannot access capture stream:', err);
      return false;
    }
  }

  /**
   * Chụp 1 khung hình từ Live Video sang Data URL và trích xuất Vision DNA
   */
  captureFrameToCanvas(videoElement) {
    if (!videoElement || videoElement.videoWidth === 0) return null;
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

    // Trích xuất Vision DNA vật lý
    const visionDNA = this.extractVisionDNAFromCanvas(ctx, canvas.width, canvas.height);
    return { dataUrl, visionDNA };
  }

  /**
   * Dừng Live Stream
   */
  closeCaptureFeed() {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
  }

  /**
   * Real Vision DNA Extractor: Phân tích pixel, độ sáng, tương phản Chiaroscuro & bảng màu
   */
  extractVisionDNAFromCanvas(ctx, width, height) {
    const sampleWidth = Math.min(width, 200);
    const sampleHeight = Math.min(height, 200);
    const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
    const data = imgData.data;

    let totalR = 0, totalG = 0, totalB = 0;
    let minLum = 255, maxLum = 0;
    let leftLum = 0, rightLum = 0;
    const totalPixels = data.length / 4;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      totalR += r;
      totalG += g;
      totalB += b;
      if (lum < minLum) minLum = lum;
      if (lum > maxLum) maxLum = lum;

      const pixelIndex = i / 4;
      const x = pixelIndex % sampleWidth;
      if (x < sampleWidth / 2) {
        leftLum += lum;
      } else {
        rightLum += lum;
      }
    }

    const avgR = Math.round(totalR / totalPixels);
    const avgG = Math.round(totalG / totalPixels);
    const avgB = Math.round(totalB / totalPixels);
    const contrastRatio = minLum > 0 ? (maxLum / Math.max(minLum, 1)).toFixed(1) : '8.0';

    // Xác định hướng sáng chính (Key Light Azimuth)
    let keyLightDirection = 'Centered Flat Lighting';
    if (leftLum > rightLum * 1.25) {
      keyLightDirection = 'Camera Left (45° Azimuth), high directional rim';
    } else if (rightLum > leftLum * 1.25) {
      keyLightDirection = 'Camera Right (135° Azimuth), dramatic side key';
    } else if (maxLum > 200 && (avgR + avgG + avgB) / 3 < 80) {
      keyLightDirection = 'High-contrast Chiaroscuro Rim Backlight';
    }

    // Xác định nhiệt độ màu
    let colorTempDesc = 'Neutral Balanced 5000K';
    if (avgR > avgB + 30) {
      colorTempDesc = 'Warm Tungsten / Amber 3200K (Rich golden tones)';
    } else if (avgB > avgR + 25) {
      colorTempDesc = 'Cool Daylight / Teal 6500K (Cyberpunk cold tones)';
    }

    return {
      dominantColor: `rgb(${avgR}, ${avgG}, ${avgB})`,
      contrastRatio: `${contrastRatio}:1`,
      keyLightDirection,
      colorTempDesc,
      fabricTexture: 'Fine cinematic micro-contrast, organic filmic texture with tactile specular highlights',
      physicalDescriptor: `Real Vision DNA: Lighting key from ${keyLightDirection}; Contrast ratio ${contrastRatio}:1; Atmosphere ${colorTempDesc}; Tactile micro-details.`
    };
  }

  /**
   * Phân tích một file ảnh tải lên bằng FileReader + Canvas
   */
  async analyzeUploadedImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth || 400;
          canvas.height = img.naturalHeight || 400;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const visionDNA = this.extractVisionDNAFromCanvas(ctx, canvas.width, canvas.height);
          resolve({
            dataUrl: e.target.result,
            fileName: file.name,
            fileSize: (file.size / 1024).toFixed(1) + ' KB',
            visionDNA
          });
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
}

export const omniDirectorEngine = new OmniDirectorEngine();
