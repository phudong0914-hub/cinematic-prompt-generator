---
name: optical-linter
description: Real-time optical syntax validator, parameter coherence checker, and prompt injection sanitizer using Jev System 1 atomic criteria.
argument-hint: "[prompt-text]"
allowed-tools:
  - run_command
  - view_file
  - replace_file_content
context: fork
agent: optical-auditor
---

# 🔍 Optical Linter & Security Sanitizer Skill

Use this skill when modifying prompt linting algorithms, optical verification, or input security.

## Core Verification Rules (System 1 Atomic Matrix)
1. **Optical Physics Integrity (Noul Checks)**
   - Focal Length vs. Shot Framing (`focal_framing_clash`)
   - Lighting Source vs. Time of Day (`noon_chiaroscuro_clash`)
   - Shutter Angle vs. High-Speed FPS (`shutter_fps_clash`)
   - Spatial Clutter vs. Breathing Room (`horror_vacui_clutter`)
   - Micro-texture vs. Grazing Raking Light (`missing_raking_light`)
   - 80/20 Color Harmony vs. Saturated Clashes (`chromatic_chaos`)
2. **Security & Prompt Injection Defense**
   - Direct instruction overrides (`instruction_override`)
   - Delimiter boundary escaping (`delimiter_tampering`)
   - System prompt leaks & credential exfiltration (`credential_leak`)
   - Invisible Zero-Width Unicode characters (`invisible_unicode`)
