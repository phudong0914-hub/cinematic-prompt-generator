/**
 * photoRestorationEngine.js — AI Photo Restoration & 4K Facial Enhancer Engine
 * ─────────────────────────────────────────────────────────────────────────────
 * Tinh hoa phục chế & làm nét ảnh tư liệu/chân dung theo chuẩn Machine-Readable JSON
 * Tương thích 100% với Google Gemini 2.0/Flash & ChatGPT-4o/Vision Multimodal.
 * 
 * Đặc tính vượt trội:
 * 1. Triệt tiêu 100% lỗi da nhựa/sáp (Anti-Plastic & Anti-Waxy Skin Guard)
 * 2. Bảo tồn danh tính khuôn mặt & vi vân da thực tế (Visible Pores & Micro-details)
 * 3. Khôi phục tổn hại ảnh cũ: trầy xước, rách, nếp gấp, ố bụi (Damage Infilling)
 * 4. Chuẩn hóa ảnh tham chiếu (Reference Anchor) trước khi đưa vào Veo 3 / Sora / Wan 2.5
 */

export const RESTORATION_PRESETS = {
  face_clarity: {
    id: 'face_clarity',
    nameVi: 'Làm Nét Chân Dung & Vi Vân Da Tự Nhiên',
    descVi: 'Khử mờ nhòe, giữ nguyên 100% nhận diện khuôn mặt, lỗ chân lông chân thực, triệt tiêu da sáp/nhựa.',
    taskType: 'photo_restoration',
    targetQuality: 'high_definition_8k',
    stylePreset: 'photo_realistic',
    damageRepair: {
      actions: ['fill_scratches', 'remove_dust_spots'],
      reconstructionMethod: 'context_aware_infilling',
      textureGoal: 'realistic_material_matching'
    },
    colorGrading: {
      goal: 'restore_natural_vibrancy',
      lighting: 'balance_natural_illumination',
      tone: 'correct_fading_and_discoloration'
    },
    facialEnhancement: {
      priority: 'identity_preservation',
      skinTexture: {
        description: 'smooth_but_textured',
        details: 'visible_pores_and_micro_details',
        avoid: ['plastic_look', 'waxy_skin', 'oversmoothing', 'doll_face']
      },
      features: {
        eyes: 'sharpen_and_clarify',
        structure: 'enhance_natural_definition'
      }
    },
    postProcessing: {
      color: 'auto_contrast',
      fidelityControl: {
        preserveOriginalGeometry: true,
        strictAspectRatio: 'match_input',
        lightingSource: 'maintain_original_direction'
      }
    },
    upscale: {
      enabled: true,
      factor: 4,
      model: 'ESRGAN_4x'
    }
  },

  vintage_archive: {
    id: 'vintage_archive',
    nameVi: 'Phục Chế Ảnh Cũ / Rách / Xước Tư Liệu',
    descVi: 'Vá vết rách, nếp gấp gãy, vết ố bẩn thời gian, tái tạo chi tiết chất liệu ảnh cổ xưa.',
    taskType: 'archival_photo_restoration',
    targetQuality: 'high_definition_8k',
    stylePreset: 'historical_photo_preservation',
    damageRepair: {
      actions: [
        'fill_scratches',
        'repair_tears',
        'fix_creases',
        'remove_dust_spots',
        'repair_missing_corners',
        'eliminate_water_stains'
      ],
      reconstructionMethod: 'context_aware_infilling',
      textureGoal: 'authentic_vintage_paper_and_silver_halide_matching'
    },
    colorGrading: {
      goal: 'restore_period_authentic_color_palette',
      lighting: 'balance_natural_illumination',
      tone: 'neutralize_yellowing_and_fading'
    },
    facialEnhancement: {
      priority: 'identity_preservation',
      skinTexture: {
        description: 'natural_historical_texture',
        details: 'subtle_film_grain_and_pores',
        avoid: ['plastic_look', 'oversmoothing', 'modern_digital_makeup']
      },
      features: {
        eyes: 'sharpen_iris_and_reflections',
        structure: 'enhance_natural_definition'
      }
    },
    postProcessing: {
      color: 'balanced_dynamic_range',
      fidelityControl: {
        preserveOriginalGeometry: true,
        strictAspectRatio: 'match_input'
      }
    },
    upscale: {
      enabled: true,
      factor: 4,
      model: 'RealESRGAN_Historical_4x'
    }
  },

  cinema_anchor: {
    id: 'cinema_anchor',
    nameVi: 'Chuẩn Hóa Anchor Cho AI Video (Veo 3 / Sora 2 / Wan 2.5)',
    descVi: 'Khử rung nhòe trên ảnh chụp điện thoại, cố định góc sáng & hình khối để đưa vào Image-to-Video.',
    taskType: 'cinematic_reference_anchor_enhancement',
    targetQuality: 'masterpiece_cinematic_4k',
    stylePreset: 'cinema_raw_35mm',
    damageRepair: {
      actions: ['remove_compression_artifacts', 'eliminate_motion_blur', 'denoise_low_light'],
      reconstructionMethod: 'photometric_consistency_reconstruction',
      textureGoal: 'cinematic_optical_fidelity'
    },
    colorGrading: {
      goal: 'neutral_director_grade',
      lighting: 'coherent_directional_key_lighting',
      tone: 'film_emulation_kodak_vision3'
    },
    facialEnhancement: {
      priority: 'zero_drift_identity_lock',
      skinTexture: {
        description: 'photorealistic_organic_skin',
        details: 'individual_eyelashes_and_micro_skin_depth',
        avoid: ['plastic_look', 'waxy_skin', 'oversmoothing', 'uncanny_valley']
      },
      features: {
        eyes: 'pinpoint_catchlight_and_pupil_depth',
        structure: 'locked_3d_facial_mesh'
      }
    },
    postProcessing: {
      color: 'recolor_neutral_lut',
      fidelityControl: {
        preserveOriginalGeometry: true,
        strictAspectRatio: 'match_input',
        lightingSource: 'maintain_original_direction'
      }
    },
    upscale: {
      enabled: true,
      factor: 4,
      model: 'Cinematic_Anchor_Enhancer_4x'
    }
  },

  extreme_super_res: {
    id: 'extreme_super_res',
    nameVi: 'Siêu Phóng Đại Nét Căng 8K (Super-Resolution 8x)',
    descVi: 'Tăng kích thước gấp 8 lần, tái cấu trúc từng sợi tóc, sợi vải, chi tiết cận cảnh macro.',
    taskType: 'super_resolution_reconstruction',
    targetQuality: 'ultra_high_definition_8k',
    stylePreset: 'ultra_detailed_macro',
    damageRepair: {
      actions: ['remove_pixelation', 'reconstruct_missing_subpixels', 'edge_clarification'],
      reconstructionMethod: 'deep_generative_prior_upscaling',
      textureGoal: 'microscopic_material_perfection'
    },
    colorGrading: {
      goal: 'expanded_10bit_color_gamut',
      lighting: 'crisp_high_dynamic_range',
      tone: 'accurate_white_balance'
    },
    facialEnhancement: {
      priority: 'identity_preservation',
      skinTexture: {
        description: 'tactile_epidermal_texture',
        details: 'visible_pores_vellus_hair_and_micro_grooves',
        avoid: ['blur', 'aliasing', 'plastic_look', 'haloing']
      },
      features: {
        eyes: 'ultra_sharp_corneal_reflection',
        structure: 'precise_anatomical_contours'
      }
    },
    postProcessing: {
      color: 'hdr_tone_mapping',
      fidelityControl: {
        preserveOriginalGeometry: true,
        strictAspectRatio: 'match_input'
      }
    },
    upscale: {
      enabled: true,
      factor: 8,
      model: 'ESRGAN_8x_UltraSharp'
    }
  }
};

/**
 * Builds the canonical JSON prompt object based on custom or preset settings
 */
export function buildRestorationPayload(options = {}) {
  const presetKey = options.preset || 'face_clarity';
  const base = RESTORATION_PRESETS[presetKey] || RESTORATION_PRESETS.face_clarity;

  const payload = {
    task_meta: {
      task_type: options.taskType || base.taskType,
      target_quality: options.targetQuality || base.targetQuality,
      style_preset: options.stylePreset || base.stylePreset
    },
    restoration_requirements: {
      damage_repair: {
        actions: options.damageActions || base.damageRepair.actions,
        reconstruction_method: base.damageRepair.reconstructionMethod,
        texture_goal: base.damageRepair.textureGoal
      },
      color_grading: {
        goal: base.colorGrading.goal,
        lighting: base.colorGrading.lighting,
        tone: base.colorGrading.tone
      }
    },
    facial_enhancement: {
      priority: options.priority || base.facialEnhancement.priority,
      skin_texture: {
        description: base.facialEnhancement.skinTexture.description,
        details: options.skinDetails || base.facialEnhancement.skinTexture.details,
        avoid: base.facialEnhancement.skinTexture.avoid
      },
      features: {
        eyes: base.facialEnhancement.features.eyes,
        structure: base.facialEnhancement.features.structure
      }
    },
    post_processing: {
      color: base.postProcessing.color,
      fidelity_control: base.postProcessing.fidelityControl
    },
    upscale: {
      enabled: options.upscaleEnabled !== undefined ? options.upscaleEnabled : true,
      factor: options.upscaleFactor || base.upscale.factor,
      model: base.upscale.model
    }
  };

  if (options.additionalInstructions) {
    payload.director_notes = options.additionalInstructions;
  }

  return payload;
}

/**
 * Formats payload as standard clean JSON string
 */
export function formatRestorationJson(options = {}) {
  const payload = buildRestorationPayload(options);
  return JSON.stringify(payload, null, 2);
}

/**
 * Generates conversational multimodal instructions for ChatGPT or Gemini
 */
export function generateChatGptGeminiPrompt(options = {}) {
  const jsonStr = formatRestorationJson(options);
  const promptText = `Please analyze the uploaded image and perform high-fidelity photo restoration and enhancement according to the following strict specifications:

${jsonStr}

Execution Directives:
1. Preserve 100% of the subject's authentic facial identity and features.
2. Maintain realistic human skin texture with natural visible pores; strictly avoid artificial plastic, waxy, or airbrushed smoothing.
3. Repair any tears, scratches, dust, or compression artifacts while respecting original lighting and anatomy.
4. Output the restored image in high-definition photorealistic resolution.`;

  return promptText;
}
