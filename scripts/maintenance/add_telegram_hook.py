import os

app_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-generator\artifacts\cinematique\js\app.js"

with open(app_path, "r", encoding="utf-8") as f:
    app_content = f.read()

# Add the form listener inside the init() function
listener_code = """
    // Telegram / Google Apps Script Lead Form Hook
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.addEventListener('submit', function(e) {
        // Lấy URL Web App (Sẽ do bạn điền vào đây sau khi tạo Apps Script)
        const appsScriptUrl = "YOUR_GOOGLE_WEB_APP_URL";
        const emailInput = this.querySelector('input[name="fields[email]"]');
        
        if (emailInput && emailInput.value && appsScriptUrl.includes("script.google.com")) {
          // Bắn ngầm dữ liệu sang Google Apps Script
          fetch(appsScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput.value })
          }).catch(err => console.error("Lỗi khi gửi báo cáo Telegram:", err));
        }
        
        // Không e.preventDefault() để form vẫn tiếp tục submit sang MailerLite bình thường
      });
    }
"""

if "lead-form" not in app_content:
    # Insert it right before the // Modal: close button
    app_content = app_content.replace("// Modal: close button", listener_code + "\n    // Modal: close button")
    
    with open(app_path, "w", encoding="utf-8") as f:
        f.write(app_content)
        
print("Updated app.js to include Telegram Hook.")
