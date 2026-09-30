import fs from 'fs';
const content = fs.readFileSync('assets/index-BeKU_6gu.js', 'utf8');
const start = content.indexOf('async function en()');
const end = content.indexOf('await zn()');
fs.writeFileSync('scripts/extracted_en.js', content.substring(start, end + 30));
console.log('Saved extracted_en.js');
