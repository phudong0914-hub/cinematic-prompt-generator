/**
 * Serverless API — /api/generate-storyboard.js
 * ─────────────────────────────────────────────────────────────
 * Commercial Server-Side Storyboard & Identity Lock Engine.
 * Generates 4-scene narrative chain securely in the cloud.
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { storyPremise = 'Hà Nội 2049', characterName = 'Mai', characterId = 'VN_MAI_2049' } = req.body || {};

    const charAnchor = `[CHARACTER IDENTITY LOCK: ${characterId} - ${characterName}, oval facial structure, dark almond eyes, 24 years old, wearing techwear silk áo dài]`;

    const scenes = [
      {
        sceneId: 'SCENE_01',
        title: 'Cảnh 1: Mở Màn · Phố Cổ Mưa Đêm (Establishing & Push Past)',
        shotType: 'Wide Establishing Shot & Push Past',
        imagePrompt: `Wide establishing shot, ${characterName} ${charAnchor} standing on a rain-slicked ancient Hanoi balcony, glowing neon holographic lanterns, shot on ARRI Alexa 65 35mm anamorphic lens, Wong Kar-wai neon-noir color palette, 8k resolution --ar 16:9 --style raw`,
        videoPrompt: `Generate a 10-second cinematic video. Scene 1: Wide establishing shot of ${characterName} ${charAnchor} overlooking futuristic wet Hanoi streets. Camera Motion: push past. Movement: move camera forward past hanging wet neon lanterns. Speed: smooth cinematic glide. Framing: let wet lanterns blur in foreground while ${characterName} and cityscape reveal. End: arrive at balanced wide shot. Frame Rate: 24fps, Aspect Ratio: 16:9`
      },
      {
        sceneId: 'SCENE_02',
        title: 'Cảnh 2: Trung Cảnh · Nhận Diện & Bước Đi Tâm Trạng (Performance & Dolly In)',
        shotType: 'Medium Close-Up & Dolly In',
        imagePrompt: `Medium close-up shot, ${characterName} ${charAnchor}, sharp eye gaze into camera, authentic skin texture with raindrops, shallow depth of field, chiaroscuro side lighting with warm neon rim, 8k resolution --ar 16:9 --style raw`,
        videoPrompt: `Generate a 10-second cinematic video. Scene 2: Medium close-up of ${characterName} ${charAnchor} walking in rain market. Camera Motion: slow dolly in. Movement: move camera physically forward toward ${characterName}. Speed: smooth controlled push. Framing: keep facial expression centered with intense eye contact. End: settle into tight emotional portrait. Frame Rate: 24fps, Aspect Ratio: 16:9`
      },
      {
        sceneId: 'SCENE_03',
        title: 'Cảnh 3: Đột Phá Cao Trào · Chuyển Động Gắt (Climax & Whip Pan Action)',
        shotType: 'Dynamic Action Hero Shot & Whip Pan Right',
        imagePrompt: `Dynamic action hero shot, ${characterName} ${charAnchor} leaping onto glowing futuristic hover-bike, high-contrast neon strobe lighting, motion blur on limbs, 8k resolution --ar 16:9 --style raw`,
        videoPrompt: `Generate a 10-second cinematic video. Scene 3: ${characterName} ${charAnchor} leaps onto glowing futuristic hover-bike. Camera Motion: whip pan right. Movement: rotate rapidly from starting profile toward accelerating hover-bike. Speed: fast snap with brief motion blur. Framing: land squarely on ${characterName} throttling bike. End: settle into sharp dynamic tracking frame. Frame Rate: 24fps, Aspect Ratio: 16:9`
      },
      {
        sceneId: 'SCENE_04',
        title: 'Cảnh 4: Kết Thúc & Dư Âm Sông Hồng (Resolution & Dolly Out Pull Back)',
        shotType: 'Extreme Close-Up to Dolly-Out Pull Back',
        imagePrompt: `Cinematic resolution shot, ${characterName} ${charAnchor} speeding across Long Bien steel bridge, red tail-lights reflecting on Red River, fading ambient twilight, 8k resolution --ar 16:9 --style raw`,
        videoPrompt: `Generate a 10-second cinematic video. Scene 4: ${characterName} ${charAnchor} speeds across Long Bien futuristic bridge looking back toward horizon. Camera Motion: smooth dolly out. Movement: move camera physically backward and upward away from bridge. Speed: smooth controlled retreat. Framing: keep silhouette centered as cityscape envelopes frame. End: finish on expansive wide outro composition. Frame Rate: 24fps, Aspect Ratio: 16:9`
      }
    ];

    return res.status(200).json({ success: true, storyPremise, scenes });
  } catch (error) {
    return res.status(500).json({ error: 'Generation Failed' });
  }
}
