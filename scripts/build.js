import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

console.log('🚀 Running Cine Prompt Pro build pipeline (SECURED v2.1)...');

const targetDirs = [
  path.join(ROOT, 'public'),
  path.join(ROOT, 'dist'),
  path.join(ROOT, 'dist', 'public')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const filesToCopy = [
  'index.html',
  'codeflow.html',
  'favicon.svg',
  'logo.jpg',
  'robots.txt',
  'system_architecture.html',
  'workflow.html'
];

// ⚠️ SECURITY: 'data' folder is NO LONGER copied to dist!
// prompts.json now lives only in api/_brain/data/ (server-side)
const foldersToCopy = [
  'assets',
  'styles'
];

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

targetDirs.forEach(target => {
  filesToCopy.forEach(file => {
    const src = path.join(ROOT, file);
    const dest = path.join(target, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  });

  foldersToCopy.forEach(folder => {
    const src = path.join(ROOT, folder);
    const dest = path.join(target, folder);
    copyFolderSync(src, dest);
  });
});

// ═══════════════════════════════════════════════════════
// 🛡️ SECURITY VERIFICATION
// ═══════════════════════════════════════════════════════

console.log('\n🛡️ Running security verification...');

// 1. Check prompts.json is NOT in dist
const dangerousFiles = [
  'dist/data/prompts.json',
  'dist/data/prompts.enc.json',
  'public/data/prompts.json',
  'public/data/prompts.enc.json',
];

let securityPassed = true;

dangerousFiles.forEach(f => {
  const fullPath = path.join(ROOT, f);
  if (fs.existsSync(fullPath)) {
    console.error(`  ❌ SECURITY BREACH: ${f} found in public output! Deleting...`);
    fs.unlinkSync(fullPath);
    securityPassed = false;
  } else {
    console.log(`  ✅ ${f} — NOT in public output (safe)`);
  }
});

// 2. Check api/_brain exists
const brainDir = path.join(ROOT, 'api', '_brain');
if (fs.existsSync(brainDir)) {
  const brainFiles = fs.readdirSync(brainDir).filter(f => f.endsWith('.js'));
  console.log(`  ✅ api/_brain/ contains ${brainFiles.length} protected modules`);
} else {
  console.error('  ❌ WARNING: api/_brain/ directory not found!');
  securityPassed = false;
}

// 3. Check brain modules NOT in dist/assets
const distAssets = path.join(ROOT, 'dist', 'assets');
if (fs.existsSync(distAssets)) {
  const jsFiles = fs.readdirSync(distAssets).filter(f => f.endsWith('.js'));
  jsFiles.forEach(f => {
    const content = fs.readFileSync(path.join(distAssets, f), 'utf-8');
    const sensitivePatterns = [
      'CINEMATIC_GLOSSARY',
      'CAMERA_RIGS_AND_MOTION',
      'APPENDIX_STYLES',
      'AUTO_TONE_MAP',
      'BANNED_PATTERNS',
    ];
    const found = sensitivePatterns.filter(p => content.includes(p));
    if (found.length > 0) {
      console.error(`  ⚠️ WARNING: ${f} still contains sensitive patterns: ${found.join(', ')}`);
      console.error(`     → You need to rebuild the JS bundle to exclude brain modules!`);
    }
  });
}

console.log(`\n${securityPassed ? '✅' : '⚠️'} Build complete. ${securityPassed ? 'All security checks passed!' : 'Review warnings above.'}`);

