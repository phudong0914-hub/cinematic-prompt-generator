import sys

# Update js/exportManager.js
with open('js/exportManager.js', 'r', encoding='utf-8') as f:
    em = f.read()

target = '''  // Tự động sinh lời thoại thương mại Tiếng Việt sắc bén nếu chưa có
  if (!vo1) vo1 = subj.length > 5 ? `${subj.slice(0, 45)}...` : 'Tương lai không chờ đợi ai...';
  if (!vo2) vo2 = 'Đột phá chi tiết — Chuẩn đẳng cấp điện ảnh.';
  if (!vo3) vo3 = 'Trải nghiệm đỉnh cao — Thổi bùng mọi giác quan.';
  if (!vo4) vo4 = `Khẳng định vị thế cùng ${cleanTitle} | Đạo Diễn Trungvt`;'''

replacement = '''  // Lời Thoại Tiếng Anh (English Commercial Voiceover - Hollywood Standard)
  let en1 = (currentData.voiceoversEN && currentData.voiceoversEN[0]) || '';
  let en2 = (currentData.voiceoversEN && currentData.voiceoversEN[1]) || '';
  let en3 = (currentData.voiceoversEN && currentData.voiceoversEN[2]) || '';
  let en4 = (currentData.voiceoversEN && currentData.voiceoversEN[3]) || '';

  if (scenes && scenes.length >= 4) {
    en1 = scenes[0].voiceoverEN || en1;
    en2 = scenes[1].voiceoverEN || en2;
    en3 = scenes[2].voiceoverEN || en3;
    en4 = scenes[3].voiceoverEN || en4;
  }

  if (!en1) en1 = 'The future waits for no one.';
  if (!en2) en2 = 'Feel the absolute precision in every detail.';
  if (!en3) en3 = `Redefining luxury. Crafted beyond perfection.`;
  if (!en4) en4 = `Step into the next era today | Director Trungvt.`;

  // Tự động sinh lời thoại thương mại Tiếng Việt sắc bén nếu chưa có
  if (!vo1) vo1 = subj.length > 5 ? `${subj.slice(0, 45)}...` : 'Tương lai không chờ đợi ai...';
  if (!vo2) vo2 = 'Đột phá chi tiết — Chuẩn đẳng cấp điện ảnh.';
  if (!vo3) vo3 = 'Trải nghiệm đỉnh cao — Thổi bùng mọi giác quan.';
  if (!vo4) vo4 = `Khẳng định vị thế cùng ${cleanTitle} | Đạo Diễn Trungvt`;

  const isEnMode = (typeof localStorage !== 'undefined' && localStorage.getItem('cine_lang') === 'en');
  const activeSrtLines = isEnMode ? [en1, en2, en3, en4] : [vo1, vo2, vo3, vo4];'''

if target in em:
    em = em.replace(target, replacement, 1)

target_srt = '''  // 2. Compile CapCut .SRT Subtitle File (Khớp chuẩn 100% Lời Thoại Tiếng Việt theo từng giây)
  const srtContent = 
`1
00:00:00,000 --> 00:00:03,000
${vo1}

2
00:00:03,000 --> 00:00:06,000
${vo2}

3
00:00:06,000 --> 00:00:09,000
${vo3}

4
00:00:09,000 --> 00:00:12,000
${vo4}
`;'''

replacement_srt = '''  // 2. Compile CapCut .SRT Subtitle File (Khớp chuẩn 100% Song Ngữ Anh / Việt)
  const srtContent = 
`1
00:00:00,000 --> 00:00:03,000
${activeSrtLines[0]}

2
00:00:03,000 --> 00:00:06,000
${activeSrtLines[1]}

3
00:00:06,000 --> 00:00:09,000
${activeSrtLines[2]}

4
00:00:09,000 --> 00:00:12,000
${activeSrtLines[3]}
`;'''

if target_srt in em:
    em = em.replace(target_srt, replacement_srt, 1)

with open('js/exportManager.js', 'w', encoding='utf-8') as f:
    f.write(em)
print('SUCCESS: Updated js/exportManager.js with Bilingual EN/VI voiceover support')


# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

target_html = '''        // 2. Compile CapCut .SRT Subtitle File (Khớp chuẩn 100% Lời Thoại Tiếng Việt theo từng giây)
        const srtContent = 
`1
00:00:00,000 --> 00:00:03,000
${vo1}

2
00:00:03,000 --> 00:00:06,000
${vo2}

3
00:00:06,000 --> 00:00:09,000
${vo3}

4
00:00:09,000 --> 00:00:12,000
${vo4}
`;'''

replacement_html = '''        // Lời thoại Tiếng Anh (English Voiceover)
        let en1 = '', en2 = '', en3 = '', en4 = '';
        if (adResultText) {
          const enMatches = [...adResultText.matchAll(/\\[EN\\]\\s*\"(.*?)\"/gi)];
          if (enMatches.length >= 1) en1 = enMatches[0][1].trim();
          if (enMatches.length >= 2) en2 = enMatches[1][1].trim();
          if (enMatches.length >= 3) en3 = enMatches[2][1].trim();
          if (enMatches.length >= 4) en4 = enMatches[3][1].trim();
        }
        if (!en1) en1 = 'The future waits for no one.';
        if (!en2) en2 = 'Feel the absolute precision in every detail.';
        if (!en3) en3 = 'Redefining luxury. Crafted beyond perfection.';
        if (!en4) en4 = `Step into the next era today | Director Trungvt.`;

        const isEnMode = (localStorage.getItem('cine_lang') === 'en');
        const activeSubLines = isEnMode ? [en1, en2, en3, en4] : [vo1, vo2, vo3, vo4];

        // 2. Compile CapCut .SRT Subtitle File (Khớp chuẩn 100% Song Ngữ Anh / Việt)
        const srtContent = 
`1
00:00:00,000 --> 00:00:03,000
${activeSubLines[0]}

2
00:00:03,000 --> 00:00:06,000
${activeSubLines[1]}

3
00:00:06,000 --> 00:00:09,000
${activeSubLines[2]}

4
00:00:09,000 --> 00:00:12,000
${activeSubLines[3]}
`;'''

if target_html in html:
    html = html.replace(target_html, replacement_html, 1)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('SUCCESS: Updated index.html with Bilingual EN/VI voiceover support')
