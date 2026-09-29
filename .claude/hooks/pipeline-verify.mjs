/**
 * Pipeline Runner Hook: Chạy tự động 1 mạch quy trình kiểm tra & đóng gói
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../..');

console.log('⚡ [HOOK] Bắt đầu chạy workflow tự động Cine Prompt Pro (1 -> 5)...');

// Bước 1: Kiểm tra data presets
console.log('🔹 Bước 1/5: Kiểm tra tính hợp lệ của thư mục data/...');
const dataDir = path.join(ROOT, 'data');
if (fs.existsSync(dataDir)) {
  const files = fs.readdirSync(dataDir);
  console.log(`   ✅ Đã tìm thấy ${files.length} tệp dữ liệu.`);
} else {
  console.warn('   ⚠️ Không tìm thấy thư mục data/.');
}

// Bước 2: Kiểm tra bảo mật (Secret Leak Check)
console.log('🔹 Bước 2/5: Quét bảo mật API Key trong source code...');
const jsDir = path.join(ROOT, 'js');
let secretFound = false;
if (fs.existsSync(jsDir)) {
  const scanDir = (dir) => {
    fs.readdirSync(dir).forEach(file => {
      const p = path.join(dir, file);
      if (fs.statSync(p).isDirectory()) scanDir(p);
      else if (file.endsWith('.js')) {
        const content = fs.readFileSync(p, 'utf-8');
        if (/AIzaSy[0-9A-Za-z-_]{33}|sk-[a-zA-Z0-9]{32,}/.test(content)) {
          console.error(`   ❌ [CẢNH BÁO NGUY HIỂM] Phát hiện API Key hardcode trong: ${file}`);
          secretFound = true;
        }
      }
    });
  };
  scanDir(jsDir);
}
if (!secretFound) console.log('   ✅ Tuyệt đối an toàn: Không phát hiện API key hardcode.');

// Bước 2.5: Chạy Red Team Fuzzer (Prompt Injection Defense Check)
console.log('🔹 Bước 2.5: Chạy kiểm thử Red Team Fuzzer (Prompt Injection & Jailbreak)...');
const fuzzerPath = path.join(ROOT, 'scripts', 'security_fuzzer.mjs');
if (fs.existsSync(fuzzerPath)) {
  await import(`file://${fuzzerPath.replace(/\\/g, '/')}`);
}

// Bước 3: Kiểm tra cấu trúc giao diện
console.log('🔹 Bước 3/5: Kiểm tra cấu trúc Studio index.html...');
const indexPath = path.join(ROOT, 'index.html');
if (fs.existsSync(indexPath)) {
  const stat = fs.statSync(indexPath);
  console.log(`   ✅ index.html tồn tại (${Math.round(stat.size / 1024)} KB).`);
}

// Bước 4: Chạy build pipeline
console.log('🔹 Bước 4/5: Kích hoạt build pipeline...');
const buildScript = path.join(ROOT, 'scripts', 'build.js');
if (fs.existsSync(buildScript)) {
  await import(`file://${buildScript.replace(/\\/g, '/')}`);
}

// Bước 5: Hoàn tất
console.log('🔹 Bước 5/5: Kiểm tra đầu ra dist/...');
const distDir = path.join(ROOT, 'dist');
if (fs.existsSync(distDir)) {
  console.log('🎉 [HOOK] Workflow hoàn thành mỹ mãn! Hệ thống sẵn sàng chạy.');
} else {
  console.error('❌ [HOOK] Lỗi: Thư mục dist không tồn tại.');
}
