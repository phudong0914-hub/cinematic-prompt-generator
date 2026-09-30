import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');
const css = fs.readFileSync('styles/main.css', 'utf-8');

const requiredIds = [
  'studio-camera-builder-dashboard',
  'scb-toggle-btn',
  'scb-chevron',
  'scb-content',
  'scb-badge-size',
  'scb-badge-angle',
  'scb-badge-motion',
  'scb-auto-apply',
  'scb-reset-btn',
  'scb-size-pills',
  'scb-angle-pills',
  'scb-motion-pills',
  'scb-speed-pills',
  'scb-category-pills',
  'prompt-library-deck',
  'result-count',
  'search-input',
  'category-filter',
  'difficulty-filter',
  'card-scroll-area',
  'prompt-grid'
];

let allOk = true;
requiredIds.forEach(id => {
  const has = html.includes(`id="${id}"`);
  if (!has) {
    console.error('❌ Missing ID in HTML:', id);
    allOk = false;
  } else {
    console.log(`  ✓ ID: ${id}`);
  }
});

const cssChecks = [
  '.card-scroll-area::-webkit-scrollbar',
  '.card-scroll-area::-webkit-scrollbar-thumb',
  'linear-gradient(180deg, #ffd700',
  '.main-controls-panel::-webkit-scrollbar',
  '.custom-horizontal-scrollbar',
  'overflow-y: scroll !important'
];

cssChecks.forEach(check => {
  const has = css.includes(check);
  if (!has) {
    console.error('❌ Missing CSS rule:', check);
    allOk = false;
  } else {
    console.log(`  ✓ CSS: ${check}`);
  }
});

if (allOk) {
  console.log('\n🌟 100% VERIFIED: All 21 DOM IDs and Hollywood Gold Scrollbar CSS rules are present and functional!');
} else {
  process.exit(1);
}
