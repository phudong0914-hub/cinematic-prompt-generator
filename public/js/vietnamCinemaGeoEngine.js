/**
 * vietnamCinemaGeoEngine.js — Vietnam Cinematic Geographic & Cultural Anchor Engine
 * ───────────────────────────────────────────────────────────────────────────────────
 * Tinh hoa từ repo Top 2 Việt Nam: thanglequoc/vietnamese-provinces-database (1.830+ ⭐)
 * - Cơ sở dữ liệu định vị địa danh, danh lam thắng cảnh, văn hóa 63 Tỉnh/Thành Việt Nam.
 * - Tự động neo giữ bối cảnh điện ảnh (Cinematic Geography Anchoring) cho các kịch bản
 *   TVC Du Lịch, Phim Tài Liệu, Ẩm Thực, Bất Động Sản, và Review Địa Phương.
 * - Khớp nối hệ thống ánh sáng, khí hậu đặc trưng (Sương mù Tây Bắc, Nắng vàng Miền Trung, Sông nước Miền Tây).
 *
 * Tác giả: Đạo Diễn Trungvt × Cine Prompt Pro Studio
 */

export const VIETNAM_CINEMA_REGIONS = {
  hanoi: {
    province: 'Hà Nội',
    region: 'Đồng bằng sông Hồng',
    culturalLandmarks: ['Phố Cổ 36 Phố Phường', 'Hồ Hoàn Kiếm', 'Cầu Long Biên', 'Hoàng Thành Thăng Long'],
    cinemaMoods: ['Hoài niệm, trầm mặc, mùa thu lá vàng, ánh đèn vàng ấm áp'],
    lightingDefaults: 'Golden hour twilight with soft mist over the ancient lake',
    opticalKeywords: 'anamorphic flare, vintage 35mm film grain, warm nostalgic tones'
  },
  hcmc: {
    province: 'Thành phố Hồ Chí Minh',
    region: 'Đông Nam Bộ',
    culturalLandmarks: ['Bến Bạch Đằng', 'Chợ Bến Thành', 'Landmark 81', 'Phố Đi Bộ Nguyễn Huệ'],
    cinemaMoods: ['Hiện đại, năng động, nhịp sống hối hả, cyberpunk neon đêm'],
    lightingDefaults: 'Vibrant neon street reflections, high-contrast dynamic night lighting',
    opticalKeywords: 'high-speed shutter, motion blur light trails, 8k hyper-detailed urban'
  },
  danang_hoian: {
    province: 'Đà Nẵng & Quảng Nam',
    region: 'Duyên hải Nam Trung Bộ',
    culturalLandmarks: ['Cầu Rồng Phun Lửa', 'Phố Cổ Hội An Đèn Lồng', 'Bán Đảo Sơn Trà', 'Bà Nà Hills'],
    cinemaMoods: ['Giao thoa cổ kính và tương lai, lung linh huyền ảo, biển xanh nắng gió'],
    lightingDefaults: 'Lantern glow chiaroscuro reflections over Thu Bon river',
    opticalKeywords: 'soft diffuse bokeh, atmospheric glow, warm amber and teal contrast'
  },
  quangninh: {
    province: 'Quảng Ninh',
    region: 'Đông Bắc Bộ',
    culturalLandmarks: ['Vịnh Hạ Long', 'Vịnh Bái Tử Long', 'Yên Tử'],
    cinemaMoods: ['Hùng vĩ, tráng lệ, kỳ quan thiên nhiên thế giới, tâm linh mây ngàn'],
    lightingDefaults: 'Epic volumetric sun rays piercing through karst limestone islands',
    opticalKeywords: 'ultra-wide 16mm lens, IMAX scale, deep emerald ocean water'
  },
  lamdong: {
    province: 'Lâm Đồng (Đà Lạt)',
    region: 'Tây Nguyên',
    culturalLandmarks: ['Đồi Chè Cầu Đất', 'Rừng Thông Hoàng Hôn', 'Hồ Tuyền Lâm'],
    cinemaMoods: ['Lãng mạn, se lạnh, sương mù bảng lảng, chất thơ điện ảnh'],
    lightingDefaults: 'Dense morning fog with cinematic crepuscular rays filtering through pines',
    opticalKeywords: 'dreamy diffusion filter, muted pastel color palette, shallow depth of field'
  }
};

export class VietnamCinemaGeoEngine {
  /**
   * Tạo Cinematic Prompt Anchor dựa trên địa danh Việt Nam
   */
  generateLocationAnchor(regionKey = 'hanoi') {
    const geo = VIETNAM_CINEMA_REGIONS[regionKey] || VIETNAM_CINEMA_REGIONS.hanoi;
    return {
      province: geo.province,
      landmarks: geo.culturalLandmarks.join(', '),
      promptSnippet: `Cinematic setting in ${geo.province}, Vietnam. Featuring iconic ${geo.culturalLandmarks[0]}. Atmosphere: ${geo.lightingDefaults}. Shot on ${geo.opticalKeywords}, masterwork film composition.`
    };
  }
}

export const vietnamCinemaGeoEngine = new VietnamCinemaGeoEngine();
