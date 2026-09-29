# 🏷️ Naming Conventions

## 1. JavaScript Files & Code
- File names: `kebab-case.js` or `camelCase.js` (consistent with surrounding modules).
- Functions & variables: `camelCase` (e.g., `generatePromptMatrix()`, `activeDirectorPreset`).
- Classes & Factory Singletons: `PascalCase` (e.g., `OpticalLinterEngine`, `PromptBridge`).
- Constants & Enums: `UPPER_SNAKE_CASE` (e.g., `SUPPORTED_ASPECT_RATIOS`, `DEFAULT_FPS`).

## 2. CSS & UI Styling
- Class naming: BEM or scoped studio format:
  - Studio containers: `studio-slate`, `director-card`, `control-panel`
  - Elements: `director-card__header`, `studio-slate__output`
  - Modifiers / States: `is-active`, `has-warning`, `is-locked`

## 3. Data & Prompt Variables
- Prompt placeholders: `{SUBJECT}`, `{LIGHTING_SETUP}`, `{CAMERA_LENS}`, `{COLOR_PALETTE}`.
- Style presets: Clean lowercase slugs (e.g., `nolan-imax`, `deakins-light`, `villeneuve-dune`).
