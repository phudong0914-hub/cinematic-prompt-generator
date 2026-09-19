/**
 * security.js — Bảo vệ giao diện chống sao chép thông thường.
 * Chặn phím tắt mở DevTools, view source, save page.
 * Không gây ảnh hưởng tới hiệu năng hoặc khả năng tương tác của app.
 */
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // F12
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+I (DevTools)
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+C (Inspect Element)
  if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
    e.preventDefault();
    return false;
  }
  // Ctrl+U (View Source)
  if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
    e.preventDefault();
    return false;
  }
  // Ctrl+S (Save Page)
  if (e.ctrlKey && !e.shiftKey && !e.altKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
    e.preventDefault();
    return false;
  }
});
