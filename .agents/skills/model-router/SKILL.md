---
name: model-router
description: Atomic classification and probability routing between Midjourney v8, Veo 3, Sora 2, and Wan 2.5 based on optical and motion attributes.
argument-hint: "[promptText]"
allowed-tools:
  - run_command
  - view_file
context: fork
agent: model-router-agent
---

# 🎯 Model Router Skill

Use this skill when analyzing prompt features to automatically determine the most suitable AI video/image generator.

## Key Primitives (Jev System 1)
- **Noul (Evaluators)**:
  - `hasTimeline`: Detection of duration/beat markers
  - `hasCameraRigMotion`: Detection of Russian Arm, Technocrane, FPV
  - `hasKineticAction`: Detection of explosions, crashes, high-velocity movement
  - `hasExactText`: Detection of quoted text and logo typography
  - `hasSpatialLayering`: Detection of 3-layer strata (Foreground, Midground, Depth)
  - `hasPainterlyStyle`: Detection of classical artists and tactile media
  - `hasStillPhotoFlags`: Detection of `--ar`, `--v 8`, `--style raw`
- **Choice (Routing Decision)**:
  - `midjourney`: For static high-fidelity photography & master artwork
  - `veo`: For spatial keyframes, typography in quotes, and anchor stills
  - `sora`: For multi-beat physics simulation, kinetic pacing, and audio-visual sync
  - `wan`: For open-source DiT continuous natural language video
