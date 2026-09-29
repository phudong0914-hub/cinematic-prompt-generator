# 🎨 Studio Engine Design System

Cine Prompt Pro v2.0 adheres to a Hollywood Studio aesthetic with extreme polish.

## 1. Color Palette Tokens
- **Backgrounds**: Deep Obsidian (`#0b0e14`), Studio Slate (`#121722`), Elevated Panel (`#0f141d`).
- **Accents**: 
  - Hollywood Gold: `#ffd700` / `#ffb020` (highlights, badges, director titles)
  - Cyber Cyan: `#00e5ff` / `#38bdf8` (flow bridges, active tabs, glows)
  - Film Amber: `#f59e0b` (warning, optical alerts)
  - Emerald Safe: `#10b981` (clean optical integrity, live badges)
- **Borders & Lines**: Hairline glass edges (`rgba(255, 255, 255, 0.08)`).

## 2. Typography
- Display / Headers: Playfair Display / Inter with crisp tracking.
- Prompt & Code: JetBrains Mono / SF Mono for slates and technical outputs.

## 3. UI Micro-interactions
- Active buttons must have subtle hover glow and scale transitions (`transform: translateY(-1px)`).
- Modal backdrops must use `backdrop-filter: blur(12px)`.
- Respect responsive 3-column IPO (Input -> Process -> Output) layout.
