/**
 * harness_check.mjs — WalkingLabs Harness Engineering Verification Suite
 * Verifies all 5 subsystems: Instruction, Tools, Environment, State, Feedback.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

console.log('🛡️ [HARNESS CHECK] Đang kiểm tra 5 hệ thống con Harness Engineering...\n');

let passCount = 0;
let totalChecks = 5;

// 1. INSTRUCTION SUBSYSTEM
console.log('1️⃣ [INSTRUCTION] Kiểm tra hướng dẫn & kỷ luật...');
const agentsMd = path.join(ROOT, 'AGENTS.md');
const claudeMd = path.join(ROOT, 'CLAUDE.md');
const rulesDir = path.join(ROOT, '.agents', 'rules');
if (fs.existsSync(agentsMd) && fs.existsSync(claudeMd) && fs.existsSync(rulesDir) && fs.readdirSync(rulesDir).length >= 5) {
  console.log(`   ✅ ĐẠT: Đã tìm thấy AGENTS.md, CLAUDE.md và ${fs.readdirSync(rulesDir).length} quy tắc kỷ luật.`);
  passCount++;
} else {
  console.error('   ❌ LỖI: Thiếu file chỉ dẫn hoặc thư mục .agents/rules chưa đủ quy tắc.');
}

// 2. TOOLS SUBSYSTEM
console.log('2️⃣ [TOOLS] Kiểm tra bộ lệnh commands/ và kỹ năng skills/...');
const commandsDir = path.join(ROOT, '.agents', 'commands');
const skillsDir = path.join(ROOT, '.agents', 'skills');
if (fs.existsSync(commandsDir) && fs.existsSync(skillsDir) && fs.readdirSync(skillsDir).length >= 3) {
  console.log(`   ✅ ĐẠT: Đã tìm thấy ${fs.readdirSync(commandsDir).length} lệnh commands và ${fs.readdirSync(skillsDir).length} skills chuyên môn.`);
  passCount++;
} else {
  console.error('   ❌ LỖI: Thư mục commands hoặc skills chưa hoàn chỉnh.');
}

// 3. ENVIRONMENT SUBSYSTEM
console.log('3️⃣ [ENVIRONMENT] Kiểm tra môi trường runtime & headers...');
const packageJson = path.join(ROOT, 'package.json');
const vercelJson = path.join(ROOT, 'vercel.json');
if (fs.existsSync(packageJson) && fs.existsSync(vercelJson)) {
  const vercel = JSON.parse(fs.readFileSync(vercelJson, 'utf-8'));
  const hasHeaders = vercel.headers && vercel.headers.length > 0;
  if (hasHeaders) {
    console.log('   ✅ ĐẠT: Môi trường build và Security Headers Vercel đã sẵn sàng.');
    passCount++;
  } else {
    console.error('   ❌ LỖI: vercel.json thiếu cấu hình security headers.');
  }
} else {
  console.error('   ❌ LỖI: Thiếu package.json hoặc vercel.json.');
}

// 4. STATE SUBSYSTEM
console.log('4️⃣ [STATE] Kiểm tra bộ nhớ liên tục (Session Continuity)...');
const progressMd = path.join(ROOT, 'PROGRESS.md');
if (fs.existsSync(progressMd)) {
  const progressContent = fs.readFileSync(progressMd, 'utf-8');
  if (progressContent.includes('Trạng Thái Hiện Tại') && progressContent.includes('Hạng Mục Đã Hoàn Thành')) {
    console.log('   ✅ ĐẠT: File PROGRESS.md đang duy trì trạng thái liên tục.');
    passCount++;
  } else {
    console.error('   ❌ LỖI: PROGRESS.md thiếu các trường bắt buộc.');
  }
} else {
  console.error('   ❌ LỖI: Không tìm thấy file PROGRESS.md.');
}

// 5. FEEDBACK SUBSYSTEM
console.log('5️⃣ [FEEDBACK] Kiểm tra vòng lặp tự xác thực (Self-Healing Loop)...');
const hookFile = path.join(ROOT, '.agents', 'hooks', 'pipeline-verify.mjs');
if (fs.existsSync(hookFile)) {
  console.log('   ✅ ĐẠT: Hook tự động xác thực pipeline-verify.mjs đã sẵn sàng.');
  passCount++;
} else {
  console.error('   ❌ LỖI: Không tìm thấy hook tự xác thực.');
}

// TỔNG KẾT
console.log('\n──────────────────────────────────────────────────────────');
console.log(`📊 ĐIỂM SỐ HARNESS: ${passCount}/${totalChecks} (${Math.round(passCount / totalChecks * 100)}%)`);
if (passCount === totalChecks) {
  console.log('🏆 KẾT LUẬN: ĐẠT 100% TIÊU CHUẨN HARNESS ENGINEERING CỦA WALKINGLABS!');
  process.exit(0);
} else {
  console.error('⚠️ KẾT LUẬN: Cần hoàn thiện thêm các điểm lỗi phía trên.');
  process.exit(1);
}
