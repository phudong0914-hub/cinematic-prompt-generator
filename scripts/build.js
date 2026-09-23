import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

console.log('🚀 Running Cine Prompt Pro build pipeline...');

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
  'favicon.svg',
  'logo.jpg',
  'robots.txt',
  'system_architecture.html',
  'workflow.html'
];

const foldersToCopy = [
  'assets',
  'data',
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

console.log('✅ Build successfully created dist/, dist/public/, and public/ targets!');
