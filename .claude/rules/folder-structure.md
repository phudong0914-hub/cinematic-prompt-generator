# 📂 Folder Structure Guidelines

Strictly maintain the following layout to prevent workspace clutter:

```text
cinematic-prompt-v2/
├── .agents/                 # AI Agent instructions, rules, skills, plans, and references
│   ├── rules/               # Operating rules (token, structure, security, styling)
│   ├── skills/              # Specialized domain knowledge (prompts, optical, pipeline)
│   ├── plans/               # Long-term feature roadmaps & implementation plans
│   └── references/          # Checklists, API schemas, external specifications
├── assets/                  # Static media, icons, and logos
├── data/                    # JSON & JS datasets for camera presets, styles, and models
├── docs/                    # Architecture reports, workflow guides, and audit logs
├── js/                      # Modular application logic (IPO: Input, Process, Output)
│   └── modules/             # Specific components (linter, director, audio, storage)
├── scripts/                 # Build, encryption, and automation utilities
├── styles/                  # Modular CSS (themes, glassmorphism, responsive layout)
├── dist/                    # Production build distribution (generated)
├── index.html               # Main studio entry point
├── package.json             # Project metadata & npm scripts
└── vercel.json              # Vercel deployment configuration & headers
```

## ⛔ Forbidden Actions
- Do **NOT** create scratch scripts, temp JSONs, or test logs in the project root directory.
- Any temporary debug script must be stored in `scripts/maintenance/` or `scratch/`.
- All documentation files (`.md`, `.html` reports) must be placed inside `docs/`.
