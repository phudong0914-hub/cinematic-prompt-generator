"""
apply_phase5_security.py
────────────────────────
Applies Phase 5 security client integration:
1. Connects catalog loading to /api/catalog
2. Connects prompt generation to /api/generate-prompt
3. Connects Director's Cut random combos to server API
4. Syncs the secure bundle to all asset directories
"""

import os
import re

ROOT = r"C:\Users\Trungvt\.gemini\antigravity-ide\scratch\cinematic-prompt-v2"
BUNDLE_PATH = os.path.join(ROOT, "assets", "index-BeKU_6gu.js")

with open(BUNDLE_PATH, "r", encoding="utf-8") as f:
    code = f.read()

print("Original bundle size:", len(code), "bytes")

# 1. Update zn() to fetch from /api/catalog
OLD_ZN = 'async function zn(){const e=(typeof import.meta<"u"&&"/"||"/").replace(/\\/$/,"")+"/data/prompts.json",n=await fetch(e);if(!n.ok)throw new Error(`Failed to load prompts: ${n.status} ${n.statusText}`);return Oe=await n.json(),Oe}'

NEW_ZN = '''let _genTimer = null;
async function fetchSecurePrompt(promptId, cb) {
  if (!promptId) return;
  try {
    const res = await fetch('/api/generate-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CinePrompt-Session': 'cps_' + Date.now().toString(36)
      },
      body: JSON.stringify({
        promptId: promptId,
        subject: typeof ve === 'function' ? ve() : '',
        characterLock: typeof Ee === 'function' ? Ee() : '',
        aspectRatio: typeof _e === 'function' ? _e() : '--ar 16:9',
        motionTags: typeof Mo === 'function' ? Mo() : []
      })
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        if (typeof le !== 'undefined') le = data.imagePrompt;
        const g = document.getElementById("result-text-image");
        const p = document.getElementById("result-text-video");
        if (g && data.imagePrompt) {
          g.textContent = data.imagePrompt;
          g.classList.remove("result-placeholder");
        }
        if (p && data.videoPrompt) {
          p.textContent = data.videoPrompt;
          p.classList.remove("result-placeholder");
        }
        if (data.score && typeof Fo === 'function') {
          Fo(data.score);
        }
        const mImg = document.getElementById("modal-prompt-template");
        const mVid = document.getElementById("modal-video-template");
        if (mImg) mImg.textContent = data.imagePrompt;
        if (mVid) mVid.textContent = data.videoPrompt;
        const ddP = document.getElementById("dd-prompt-text");
        if (ddP) ddP.textContent = data.imagePrompt;
        if (cb) cb(data);
      }
    }
  } catch (err) {
    console.warn("Secure prompt gen warning:", err);
  }
}
async function zn(){
  try {
    const r = await fetch('/api/catalog');
    if (r.ok) {
      const d = await r.json();
      Oe = d.prompts || d;
      return Oe;
    }
  } catch (err) {
    console.warn("API catalog fetch warning:", err);
  }
  const e = (typeof import.meta < "u" && "/" || "/").replace(/\\/$/, "") + "/data/prompts.json";
  try {
    const n = await fetch(e);
    if (n.ok) {
      Oe = await n.json();
      return Oe;
    }
  } catch (e2) {}
  return Oe || [];
}'''

if OLD_ZN in code:
    code = code.replace(OLD_ZN, NEW_ZN)
    print("SUCCESS: Replaced zn() with secure API catalog loader")
else:
    print("WARNING: OLD_ZN not found directly, checking regex...")
    pattern = r'async function zn\(\)\{.*?return Oe=await n\.json\(\),Oe\}'
    if re.search(pattern, code):
        code = re.sub(pattern, NEW_ZN, code)
        print("SUCCESS: Replaced zn() via regex")
    else:
        print("ERROR: Could not locate zn()")

# 2. Update fn(o) to use fetchSecurePrompt
OLD_FN = 'function fn(o){S.playClick(),le=o.promptTemplate,ne=o.name,nt=o.definition??"",Ie(o.id),D();const e=document.querySelector(`.card[data-id="${o.id}"]`);if(e&&e.dataset.fromModalSelect==="true"){delete e.dataset.fromModalSelect;return}$o(o.name,nt,o)}'

NEW_FN = '''function fn(o){
  S.playClick();
  window._activePromptId = o.id;
  le = o.promptTemplate || (o.name + ' cinematic shot');
  ne = o.name;
  nt = o.definition ?? "";
  Ie(o.id);
  D();
  fetchSecurePrompt(o.id, function(data) {
    if (data.bestPractices) o.bestPractices = data.bestPractices;
    if (data.commonMistakes) o.commonMistakes = data.commonMistakes;
  });
  const e = document.querySelector(`.card[data-id="${o.id}"]`);
  if (e && e.dataset.fromModalSelect === "true") {
    delete e.dataset.fromModalSelect;
    return;
  }
  $o(o.name, nt, o);
}'''

if OLD_FN in code:
    code = code.replace(OLD_FN, NEW_FN)
    print("SUCCESS: Replaced fn(o) with secure API prompt caller")
else:
    print("WARNING: OLD_FN not found directly, checking regex...")
    fn_pattern = r'function fn\(o\)\{S\.playClick\(\),le=o\.promptTemplate.*?\$o\(o\.name,nt,o\)\}'
    if re.search(fn_pattern, code):
        code = re.sub(fn_pattern, NEW_FN, code)
        print("SUCCESS: Replaced fn(o) via regex")
    else:
        print("ERROR: Could not locate fn(o)")

# 3. Update D() to trigger debounced fetchSecurePrompt when input changes
OLD_D_START = 'function D(){if(!le)return;'
NEW_D_START = '''function D(){
  if(!le && !window._activePromptId) return;
  if(window._activePromptId){
    clearTimeout(_genTimer);
    _genTimer = setTimeout(function(){ fetchSecurePrompt(window._activePromptId); }, 250);
  }
  if(!le) return;'''

if OLD_D_START in code:
    code = code.replace(OLD_D_START, NEW_D_START, 1)
    print("SUCCESS: Added debounced secure prompt fetcher to D()")
else:
    print("WARNING: Could not locate function D(){if(!le)return;")

# 4. Update Qt() (Director's Cut) to use /api/generate-prompt with isRandomCombo: true
OLD_QT = 'function Qt(){S.playRoll(),hn();const o=Jn();o&&(le=o.combined.promptTemplate,ne=`DIRECTOR\'S CUT: ${o.combined.name}`,Ie(null),D())}'
NEW_QT = '''async function Qt(){
  S.playRoll();
  hn();
  try {
    const res = await fetch('/api/generate-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CinePrompt-Session': 'cps_' + Date.now().toString(36)
      },
      body: JSON.stringify({
        isRandomCombo: true,
        subject: typeof ve === 'function' ? ve() : '',
        characterLock: typeof Ee === 'function' ? Ee() : '',
        aspectRatio: typeof _e === 'function' ? _e() : '--ar 16:9',
        motionTags: typeof Mo === 'function' ? Mo() : []
      })
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success) {
        le = data.imagePrompt;
        ne = `DIRECTOR\'S CUT: ${data.title}`;
        window._activePromptId = null;
        Ie(null);
        D();
        const g = document.getElementById("result-text-image");
        const p = document.getElementById("result-text-video");
        if (g && data.imagePrompt) {
          g.textContent = data.imagePrompt;
          g.classList.remove("result-placeholder");
        }
        if (p && data.videoPrompt) {
          p.textContent = data.videoPrompt;
          p.classList.remove("result-placeholder");
        }
        if (data.score && typeof Fo === 'function') {
          Fo(data.score);
        }
        return;
      }
    }
  } catch (err) {
    console.warn("Random combo API warning:", err);
  }
  const o = Jn();
  o && (le = o.combined.promptTemplate, ne = `DIRECTOR\'S CUT: ${o.combined.name}`, Ie(null), D());
}'''

if OLD_QT in code:
    code = code.replace(OLD_QT, NEW_QT)
    print("SUCCESS: Replaced Qt() with secure server-side combo generator")
else:
    print("WARNING: Could not locate Qt() directly")

# Save updated bundle
with open(BUNDLE_PATH, "w", encoding="utf-8") as f:
    f.write(code)
print("Updated assets/index-BeKU_6gu.js successfully! New size:", len(code), "bytes")

# Sync to public/assets and dist/assets
targets = [
    os.path.join(ROOT, "public", "assets", "index-BeKU_6gu.js"),
    os.path.join(ROOT, "dist", "assets", "index-BeKU_6gu.js"),
    os.path.join(ROOT, "dist", "public", "assets", "index-BeKU_6gu.js"),
]

for target in targets:
    target_dir = os.path.dirname(target)
    if os.path.exists(target_dir):
        with open(target, "w", encoding="utf-8") as f:
            f.write(code)
        print(f"Synced to {target}")

print("ALL TARGETS SYNCHRONIZED SUCCESSFULLY!")
