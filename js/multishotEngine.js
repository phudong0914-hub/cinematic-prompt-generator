/**
 * multishotEngine.js — Hollywood Multi-Shot Sequence & Character Consistency Engine
 * ─────────────────────────────────────────────────────────────────────────────────
 * Chắt lọc từ CinePrompt.io v2.0:
 * 1. Cho phép Đạo diễn xây dựng kịch bản liên hoàn nhiều phân cảnh: SHOT 1 -> SHOT 2 -> SHOT 3...
 * 2. Tích hợp Character Consistency: gán cố định diễn viên (tên, ngoại hình, phục trang).
 * 3. Hỗ trợ Timecode in/out và các dạng Transition điện ảnh (Cut, Whip Pan, Dissolve, Match Cut).
 * 4. Xuất kịch bản song song: Prose Screenplay (Văn bản kịch bản) và JSON Structured Schema.
 */

import { characterOS } from './characterOS.js';

class MultiShotEngine {
  constructor() {
    this.shots = [
      this.createDefaultShot(1, '00:00', '00:04', 'Wide establishing shot', 'Slow push-in dolly', 'Nhân vật bước vào khung hình, quan sát xung quanh'),
      this.createDefaultShot(2, '00:04', '00:08', 'Close-up shot', 'Static locked-off', 'Gương mặt căng thẳng, ánh mắt nhìn thấy điều bất ngờ')
    ];
    this.globalSettings = {
      projectTitle: 'Cinematic Storyboard Sequence',
      director: 'Đạo Diễn Trung',
      aspectRatio: '16:9',
      fps: '24fps',
      cameraSetup: 'ARRI Alexa Mini LF, Cooke Anamorphic /i Prime',
      colorPalette: 'Teal & Orange cinematic grade, flat log footage',
      lightingTone: 'Chiaroscuro, dramatic low-key lighting with soft window wrap'
    };
    this.activeCharacterId = null;
  }

  createDefaultShot(index, tcIn = '00:00', tcOut = '00:04', shotType = 'Wide establishing shot', movement = 'Slow dolly push-in', action = '') {
    return {
      id: `shot_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      shotNumber: index,
      tcIn,
      tcOut,
      shotType,
      cameraMovement: movement,
      framing: 'Centred subject composition',
      action: action || 'Hành động chính của phân cảnh',
      pacing: 'Measured, suspenseful tempo',
      characterId: null,
      characterName: '',
      dialogueDelivery: 'whispering, intensely',
      dialogueLine: '',
      transition: index > 1 ? 'Cut to' : null,
      directorNotes: ''
    };
  }

  getShots() {
    return this.shots;
  }

  addShot() {
    const nextIndex = this.shots.length + 1;
    const lastShot = this.shots[this.shots.length - 1];
    let tcIn = '00:00';
    let tcOut = '00:04';

    if (lastShot && lastShot.tcOut) {
      tcIn = lastShot.tcOut;
      const parts = tcIn.split(':').map(Number);
      const seconds = (parts[0] || 0) * 60 + (parts[1] || 0) + 4;
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      tcOut = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    const newShot = this.createDefaultShot(nextIndex, tcIn, tcOut);
    this.shots.push(newShot);
    this.renumberShots();
    return newShot;
  }

  removeShot(index) {
    if (this.shots.length <= 1) return false;
    this.shots.splice(index, 1);
    this.renumberShots();
    return true;
  }

  updateShot(index, updates) {
    if (this.shots[index]) {
      this.shots[index] = { ...this.shots[index], ...updates };
      return this.shots[index];
    }
    return null;
  }

  renumberShots() {
    this.shots.forEach((shot, i) => {
      shot.shotNumber = i + 1;
      if (i === 0) shot.transition = null;
      else if (!shot.transition) shot.transition = 'Cut to';
    });
  }

  /**
   * Lấy thông tin nhân vật từ CharacterOS để đảm bảo Character Consistency
   */
  getCharacterAnchor(characterId) {
    if (!characterOS) return null;
    const chars = characterOS.getCharacters ? characterOS.getCharacters() : [];
    return chars.find(c => c.id === characterId) || null;
  }

  /**
   * Biên dịch kịch bản chuỗi thành văn bản Screenplay (Prose)
   */
  compileScreenplayProse() {
    const lines = [];

    // Header & Globals
    lines.push(`SCENE SEQUENCE — ${this.globalSettings.projectTitle.toUpperCase()}`);
    lines.push(`DIRECTOR: ${this.globalSettings.director} | SPECS: ${this.globalSettings.aspectRatio}, ${this.globalSettings.fps}`);
    lines.push(`CAMERA & LOOK: ${this.globalSettings.cameraSetup}. ${this.globalSettings.lightingTone}. ${this.globalSettings.colorPalette}.`);

    // Character Consistency Header
    const activeChars = characterOS ? (characterOS.getCharacters ? characterOS.getCharacters() : []) : [];
    if (activeChars.length > 0) {
      const charDescriptions = activeChars
        .map(c => `"${c.name}" (${c.age || '30s'}, ${c.wardrobe || 'signature costume'}, ${c.faceDetails || 'distinctive look'})`)
        .join('; ');
      lines.push(`CAST CONSISTENCY: ${charDescriptions}.`);
    }

    lines.push(''); // Blank separator

    // Individual Shots
    this.shots.forEach((shot) => {
      if (shot.transition) {
        lines.push(`[TRANSITION: ${shot.transition.toUpperCase()}]`);
      }

      const tc = `(${shot.tcIn} – ${shot.tcOut})`;
      const shotHeader = `SHOT ${shot.shotNumber} ${tc}:`;
      const cam = `${shot.shotType}, ${shot.cameraMovement}, ${shot.framing}`;
      const action = shot.action ? shot.action.trim() : '';

      let shotBody = `${shotHeader} ${cam}. ${action}.`;

      // Character Action & Dialogue
      if (shot.characterName && shot.dialogueLine) {
        const delivery = shot.dialogueDelivery ? ` (${shot.dialogueDelivery})` : '';
        shotBody += `\n[${shot.characterName.toUpperCase()}]${delivery}: "${shot.dialogueLine}"`;
      } else if (shot.dialogueLine) {
        shotBody += `\nDialogue: "${shot.dialogueLine}"`;
      }

      if (shot.directorNotes) {
        shotBody += `\n[Director's Note: ${shot.directorNotes}]`;
      }

      lines.push(shotBody);
    });

    return lines.join('\n\n');
  }

  /**
   * Biên dịch kịch bản thành cấu trúc JSON chuẩn mực
   */
  compileJsonSchema() {
    const activeChars = characterOS ? (characterOS.getCharacters ? characterOS.getCharacters() : []) : [];

    return {
      project: this.globalSettings.projectTitle,
      director: this.globalSettings.director,
      globals: {
        aspectRatio: this.globalSettings.aspectRatio,
        fps: this.globalSettings.fps,
        camera: this.globalSettings.cameraSetup,
        lighting: this.globalSettings.lightingTone,
        palette: this.globalSettings.colorPalette
      },
      cast: activeChars.map(c => ({
        id: c.id,
        name: c.name,
        anchor: c.faceDetails || '',
        wardrobe: c.wardrobe || '',
        age: c.age || ''
      })),
      shots: this.shots.map(s => {
        const obj = {
          shot: s.shotNumber,
          timecode: `${s.tcIn} – ${s.tcOut}`,
          type: s.shotType,
          cameraMovement: s.cameraMovement,
          action: s.action
        };
        if (s.transition) obj.transition = s.transition;
        if (s.characterName && s.dialogueLine) {
          obj.dialogue = {
            character: s.characterName,
            delivery: s.dialogueDelivery,
            line: s.dialogueLine
          };
        }
        if (s.directorNotes) obj.directorNotes = s.directorNotes;
        return obj;
      })
    };
  }
}

export const multishotEngine = new MultiShotEngine();
