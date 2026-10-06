import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"

# 1. Update index.html
index_path = os.path.join(base_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    idx_content = f.read()

idx_content = idx_content.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")
idx_content = idx_content.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
idx_content = idx_content.replace("director@cineprompt.pro", "cinemapromptpro@gmail.com")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(idx_content)
print("[index.html] Updated all email references to cinemapromptpro@gmail.com")

# 2. Update js/authManager.js
auth_mgr_path = os.path.join(base_dir, "js", "authManager.js")
with open(auth_mgr_path, "r", encoding="utf-8") as f:
    am_content = f.read()

# Replace any old email
am_content = am_content.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
am_content = am_content.replace("director@cineprompt.pro", "cinemapromptpro@gmail.com")
am_content = am_content.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")

# Update auto-migration logic in loadFromStorage:
migration_target = """if (this.currentUser && (this.currentUser.role === 'Admin' || this.currentUser.id === 'USR_ADMIN_01' || this.currentUser.email === 'cinemapromptpro@gmail.com' || this.currentUser.email === 'cinemaprompt@gmail.com' || this.currentUser.email === 'director@cineprompt.pro' || this.currentUser.email === 'trungvtco@gmail.com')) {
          this.currentUser.displayName = 'Đạo Diễn Trungvt';
          this.currentUser.email = 'cinemapromptpro@gmail.com';
          this.currentUser.phone = '0836.384.168';
          this.currentUser.accountName = 'trungvt_director_master';
        }"""

if "this.currentUser.id === 'USR_ADMIN_01'" in am_content:
    # Ensure all previous variants get upgraded
    import re
    am_content = re.sub(
        r"if \(this\.currentUser && \(this\.currentUser\.role === 'Admin' \|\| this\.currentUser\.id === 'USR_ADMIN_01'[^)]*\)\) \{[^}]*\}",
        migration_target,
        am_content
    )

with open(auth_mgr_path, "w", encoding="utf-8") as f:
    f.write(am_content)
print("[authManager.js] Updated with auto-migration to cinemapromptpro@gmail.com")

# 3. Update js/authController.js
auth_ctrl_path = os.path.join(base_dir, "js", "authController.js")
with open(auth_ctrl_path, "r", encoding="utf-8") as f:
    ac_content = f.read()

ac_content = ac_content.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
ac_content = ac_content.replace("director@cineprompt.pro", "cinemapromptpro@gmail.com")
ac_content = ac_content.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")

# Ensure isAdmin check checks cinemapromptpro@gmail.com as primary
with open(auth_ctrl_path, "w", encoding="utf-8") as f:
    f.write(ac_content)
print("[authController.js] Updated admin email check to cinemapromptpro@gmail.com")

# 4. Update js/exportManager.js
exp_path = os.path.join(base_dir, "js", "exportManager.js")
with open(exp_path, "r", encoding="utf-8") as f:
    exp_content = f.read()

exp_content = exp_content.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
exp_content = exp_content.replace("director@cineprompt.pro", "cinemapromptpro@gmail.com")
exp_content = exp_content.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")

with open(exp_path, "w", encoding="utf-8") as f:
    f.write(exp_content)
print("[exportManager.js] Updated export signatures to cinemapromptpro@gmail.com")

# 5. Update js/securityShield.js
sec_path = os.path.join(base_dir, "js", "securityShield.js")
with open(sec_path, "r", encoding="utf-8") as f:
    sec_content = f.read()

sec_content = sec_content.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
sec_content = sec_content.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")

with open(sec_path, "w", encoding="utf-8") as f:
    f.write(sec_content)
print("[securityShield.js] Updated console copyright to cinemapromptpro@gmail.com")

# 6. Update assets/*.js bundles
assets_dir = os.path.join(base_dir, "assets")
if os.path.exists(assets_dir):
    for f in os.listdir(assets_dir):
        if f.endswith(".js"):
            ap = os.path.join(assets_dir, f)
            with open(ap, "r", encoding="utf-8") as fl:
                c = fl.read()
            c = c.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
            c = c.replace("director@cineprompt.pro", "cinemapromptpro@gmail.com")
            c = c.replace("trungvtco@gmail.com", "cinemapromptpro@gmail.com")
            with open(ap, "w", encoding="utf-8") as fl:
                fl.write(c)
            print(f"[assets/{f}] Updated bundle")

# 7. Update PROGRESS.md
prog_path = os.path.join(base_dir, "PROGRESS.md")
if os.path.exists(prog_path):
    with open(prog_path, "r", encoding="utf-8") as f:
        prog_c = f.read()
    prog_c = prog_c.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
    with open(prog_path, "w", encoding="utf-8") as f:
        f.write(prog_c)
    print("[PROGRESS.md] Updated references")

# 8. Update scripts/patch_director_contact.py
patch_py = os.path.join(base_dir, "scripts", "patch_director_contact.py")
if os.path.exists(patch_py):
    with open(patch_py, "r", encoding="utf-8") as f:
        py_c = f.read()
    py_c = py_c.replace("cinemaprompt@gmail.com", "cinemapromptpro@gmail.com")
    with open(patch_py, "w", encoding="utf-8") as f:
        f.write(py_c)
    print("[patch_director_contact.py] Updated references")

print("== All files successfully updated to cinemapromptpro@gmail.com ==")
