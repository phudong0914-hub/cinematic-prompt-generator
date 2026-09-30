/**
 * translator.js — Multi-Tier Resilient Translation Engine for Cinematique
 * ───────────────────────────────────────────────────────────────────────
 * Tier 1: Direct Google Translate GTX (Fast client fetch)
 * Tier 2: Free MyMemory Translation API fallback
 * Tier 3: Offline Comprehensive Cinema Glossary & Rule-based Engine
 */

/**
 * Offline English to Vietnamese Cinema Technical Glossary
 */
const CINEMA_GLOSSARY_EN_VI = [
  // Shot Types & Angles
  [/\bExtreme Wide Shot\b/gi, 'Góc toàn cảnh cực rộng (Extreme Wide Shot)'],
  [/\bWide Shot\b/gi, 'Góc toàn cảnh (Wide Shot)'],
  [/\bMedium Shot\b/gi, 'Góc trung cảnh (Medium Shot)'],
  [/\bMedium Close-up\b/gi, 'Góc trung cận cảnh (Medium Close-up)'],
  [/\bClose-up\b/gi, 'Góc cận cảnh (Close-up)'],
  [/\bExtreme Close-up\b/gi, 'Góc đại cận cảnh (Extreme Close-up)'],
  [/\bMacro Close-up\b/gi, 'Góc chụp siêu cận Macro'],
  [/\bOver-the-shoulder shot\b/gi, 'Góc máy qua vai (Over-the-shoulder)'],
  [/\bPoint of view shot\b/gi, 'Góc nhìn thứ nhất (POV)'],
  [/\bBird's Eye View\b/gi, 'Góc nhìn từ trên cao xuống (Bird\'s Eye View)'],
  [/\bTop-down\b/gi, 'Góc quay thẳng từ trên xuống'],
  [/\bLow Angle\b/gi, 'Góc máy từ dưới hất lên (Low Angle)'],
  [/\bHigh Angle\b/gi, 'Góc máy từ trên chúc xuống (High Angle)'],
  [/\bDutch Angle\b/gi, 'Góc nghiêng kịch tính (Dutch Angle)'],
  [/\bEye Level\b/gi, 'Góc máy ngang tầm mắt (Eye Level)'],
  [/\bWorm's-eye view\b/gi, 'Góc nhìn từ sát mặt đất (Worm\'s-eye)'],

  // Camera Movements
  [/\bPan Left\b/gi, ' lia máy sang trái (Pan Left)'],
  [/\bPan Right\b/gi, ' lia máy sang phải (Pan Right)'],
  [/\bTilt Up\b/gi, ' nghiêng máy lên trên (Tilt Up)'],
  [/\bTilt Down\b/gi, ' nghiêng máy xuống dưới (Tilt Down)'],
  [/\bSlow Zoom In\b/gi, ' từ từ phóng to (Slow Zoom In)'],
  [/\bFast Dolly Back\b/gi, ' kéo lùi camera nhanh (Fast Dolly Back)'],
  [/\bOrbit 360°\b/gi, ' quay vòng tròn 360 độ quanh chủ thể'],
  [/\bTracking Shot\b/gi, ' cú máy bám đuổi chuyển động (Tracking Shot)'],
  [/\bCrane Shot Up\b/gi, ' cẩu nâng máy quay lên cao (Crane Up)'],
  [/\bFPV Drone Flythrough\b/gi, ' drone FPV bay lượn xuyên qua không gian'],
  [/\bDolly Zoom Vertigo\b/gi, ' hiệu ứng chóng mặt Vertigo (Dolly Zoom)'],
  [/\bHandheld camera shake\b/gi, ' rung máy cầm tay chân thực (Handheld)'],
  [/\bSteadicam smooth glide\b/gi, ' chuyển động lướt êm ái Steadicam'],
  [/\bSlow motion\b/gi, ' chuyển động chậm (Slow Motion)'],
  [/\bTimelapse\b/gi, ' tua nhanh thời gian (Timelapse)'],
  [/\bHyperlapse\b/gi, ' tua nhanh chuyển dịch không gian (Hyperlapse)'],

  // Lighting
  [/\bChiaroscuro\b/gi, 'tương phản sáng tối mạnh mẽ Chiaroscuro'],
  [/\bRembrandt lighting\b/gi, 'ánh sáng tam giác Rembrandt đặc trưng'],
  [/\bGolden hour\b/gi, 'ánh sáng vàng hoàng hôn rực rỡ (Golden Hour)'],
  [/\bBlue hour\b/gi, 'ánh sáng xanh lam chạng vạng (Blue Hour)'],
  [/\bVolumetric lighting\b/gi, 'luồng tia sáng thể tích (Volumetric Light / God Rays)'],
  [/\bGod rays\b/gi, 'những luồng tia sáng mặt trời chiếu rọi'],
  [/\bRim light\b/gi, 'ánh sáng viền ven tóc và chủ thể (Rim Light)'],
  [/\bBacklight\b/gi, 'ngược sáng nghệ thuật (Backlight)'],
  [/\bNeon noir\b/gi, 'ánh sáng đèn neon cyberpunk ma mị (Neon Noir)'],
  [/\bHigh key\b/gi, 'ánh sáng ngập tràn rực rỡ (High Key)'],
  [/\bLow key\b/gi, 'ánh sáng tối bí ẩn, giàu kịch tính (Low Key)'],
  [/\bHard light\b/gi, 'ánh sáng gắt tạo bóng sắc nét'],
  [/\bSoft diffused light\b/gi, 'ánh sáng khuếch tán mềm mại tự nhiên'],
  [/\bCandlelight glow\b/gi, 'ánh sáng bập bùng ấm cúng của ngọn nến'],
  [/\bBioluminescent glow\b/gi, 'ánh sáng phát quang sinh học kỳ ảo'],

  // Lenses & Optics
  [/\bAnamorphic lens\b/gi, 'ống kính điện ảnh Anamorphic với vệt sáng ngang'],
  [/\bShallow depth of field\b/gi, 'độ sâu trường ảnh nông, xóa phông mịn màng'],
  [/\bBokeh\b/gi, 'hiệu ứng bokeh lung linh'],
  [/\b35mm cinematic lens\b/gi, 'ống kính điện ảnh 35mm tiêu chuẩn'],
  [/\b50mm lens\b/gi, 'ống kính 50mm chân thực'],
  [/\b85mm portrait lens\b/gi, 'ống kính chân dung 85mm xóa phông cao cấp'],
  [/\bWide-angle lens\b/gi, 'ống kính góc rộng'],
  [/\bTelephoto lens\b/gi, 'ống kính tele tầm xa'],
  [/\bChromatic aberration\b/gi, 'quang sai màu nghệ thuật'],
  [/\bFilm grain\b/gi, 'hạt phim cổ điển'],

  // Film Stocks & Cameras
  [/\bARRI Alexa 65\b/gi, 'máy quay Hollywood ARRI Alexa 65'],
  [/\bRED Monstro 8K\b/gi, 'máy quay RED Monstro 8K chuyên nghiệp'],
  [/\bKodak Portra 400\b/gi, 'tông màu phim Kodak Portra 400 ấm áp'],
  [/\bCinestill 800T\b/gi, 'màu phim đêm Cinestill 800T quầng sáng đỏ'],
  [/\bKodak Vision3 500T\b/gi, 'phim nhựa Kodak Vision3 500T'],
  [/\bTeal and orange\b/gi, 'tông màu bom tấn Xanh & Cam (Teal & Orange)'],
  [/\bTechnicolor\b/gi, 'màu sắc rực rỡ Technicolor'],
  [/\bBlack and white\b/gi, 'đen trắng nghệ thuật tương phản cao'],

  // Quality & Render Modifiers
  [/\b8k resolution\b/gi, 'độ phân giải siêu nét 8K'],
  [/\bcinematic masterpiece\b/gi, 'kiệt tác điện ảnh đỉnh cao'],
  [/\bhighly detailed still\b/gi, 'bức ảnh tĩnh chi tiết sắc nét'],
  [/\bphotorealistic\b/gi, 'chân thực như ảnh chụp đời thực'],
  [/\bunreal engine 5 render\b/gi, 'đồ họa 3D Unreal Engine 5 đỉnh cao'],
  [/\boctane render\b/gi, 'chi tiết ánh sáng Octane Render'],
  [/\bmasterpiece\b/gi, 'tác phẩm nghệ thuật đỉnh cao'],
  [/\bcinematic color grading\b/gi, 'chỉnh màu điện ảnh chuyên nghiệp'],
  [/\b24fps cinema motion\b/gi, 'chuyển động khung hình chuẩn điện ảnh 24fps'],
  [/\bAspect Ratio:\b/gi, 'Tỉ lệ khung hình:'],

  // Audio Foley Terms
  [/\bAmbient sound\b/gi, 'Âm thanh môi trường'],
  [/\bFoley sound\b/gi, 'Tiếng động thực tế Foley'],
  [/\bRaindrops hitting window\b/gi, 'tiếng hạt mưa rả rích đập vào cửa kính'],
  [/\bFootsteps on wooden floor\b/gi, 'tiếng bước chân trầm ấm trên sàn gỗ'],
  [/\bCoffee machine steaming\b/gi, 'tiếng máy pha cà phê xì hơi nước'],
  [/\bWhispering wind\b/gi, 'tiếng gió xào xạc'],
  [/\bBinaural 3D audio\b/gi, 'âm thanh vòm không gian 3D Binaural']
];

/**
 * Offline Vietnamese to English Basic Cinema Replacer
 */
const CINEMA_GLOSSARY_VI_EN = [
  [/Góc toàn cảnh/gi, 'Wide Shot'],
  [/Góc cận cảnh/gi, 'Close-up'],
  [/Góc trung cảnh/gi, 'Medium Shot'],
  [/Ánh sáng vàng/gi, 'Golden hour lighting'],
  [/Ánh sáng tương phản/gi, 'Chiaroscuro lighting'],
  [/Độ phân giải 8K/gi, '8k resolution'],
  [/Ống kính điện ảnh/gi, 'Cinematic anamorphic lens'],
  [/Chuyển động chậm/gi, 'Slow motion 60fps'],
  [/Cà phê Sài Gòn/gi, 'Saigon street café with vintage wooden furniture'],
  [/Áo dài/gi, 'elegant Vietnamese white Ao Dai dress'],
  [/Cô gái/gi, 'young Vietnamese woman']
];

/**
 * Perform offline dictionary translation fallback
 * @param {string} text 
 * @param {'vi'|'en'} targetLang 
 * @returns {string}
 */
export function translateOfflineFallback(text, targetLang = 'vi') {
  if (!text) return '';
  let result = text;

  if (targetLang === 'vi') {
    for (const [pattern, replacement] of CINEMA_GLOSSARY_EN_VI) {
      result = result.replace(pattern, replacement);
    }
    // Clean up basic English words commonly in prompts
    result = result
      .replace(/\bwith\b/gi, 'với')
      .replace(/\band\b/gi, 'và')
      .replace(/\bin the\b/gi, 'trong')
      .replace(/\bon the\b/gi, 'trên')
      .replace(/\bwearing\b/gi, 'mặc')
      .replace(/\bstanding\b/gi, 'đang đứng')
      .replace(/\bsitting\b/gi, 'đang ngồi')
      .replace(/\bwalking\b/gi, 'đang bước đi')
      .replace(/\blighting\b/gi, 'ánh sáng')
      .replace(/\bshadows\b/gi, 'bóng đổ')
      .replace(/\bbackground\b/gi, 'hậu cảnh')
      .replace(/\bforeground\b/gi, 'tiền cảnh');
  } else {
    for (const [pattern, replacement] of CINEMA_GLOSSARY_VI_EN) {
      result = result.replace(pattern, replacement);
    }
  }

  return result;
}

/**
 * Translate text using multi-tier fallback mechanism with timeout.
 * 
 * @param {string} text - Text to translate
 * @param {'vi'|'en'} targetLang - Target language ('vi' or 'en')
 * @returns {Promise<string>}
 */
export async function translateCinematicText(text, targetLang = 'vi') {
  if (!text || !text.trim()) return '';

  const cleanText = text.trim();

  // Tier 1: Google Translate GTX API with 3.5s timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const sl = targetLang === 'vi' ? 'en' : 'vi';
    const tl = targetLang;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(cleanText)}`;
    
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data[0]) {
        const translated = data[0].map(item => item[0]).join('');
        if (translated && translated.trim()) {
          return translated;
        }
      }
    }
  } catch (err) {
    console.warn('[Translator] Tier 1 Google GTX failed or timed out:', err?.message);
  }

  // Tier 2: MyMemory API Fallback with 3s timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const langPair = targetLang === 'vi' ? 'en|vi' : 'vi|en';
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanText.substring(0, 500))}&langpair=${langPair}`;
    
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.responseData && data.responseData.translatedText) {
        const translated = data.responseData.translatedText;
        if (translated && !translated.startsWith('MYMEMORY WARNING')) {
          return translated;
        }
      }
    }
  } catch (err) {
    console.warn('[Translator] Tier 2 MyMemory failed:', err?.message);
  }

  // Tier 3: Offline Cinema Glossary & Pattern Replacement Fallback
  return translateOfflineFallback(cleanText, targetLang);
}
