# 🪙 Token Optimization Rules

## 1. Large File Handling
- The root `index.html` (~336KB) and architecture HTML files (~735KB) are extremely large.
- **NEVER** view or read these files entirely in a single call.
- Always use `grep_search` to pinpoint selectors/IDs first, then use `view_file` with precise `StartLine` and `EndLine` ranges (max 80-120 lines at a time).

## 2. Surgical Edits
- Prefer editing modular files in `js/`, `styles/`, or `data/` instead of inflating `index.html`.
- Use `replace_file_content` with exact chunks instead of rewriting whole files.
- Keep diffs small and focused on the requested feature.

## 3. Communication Efficiency
- Provide concise, actionable summaries to the user.
- Do not repeat entire file contents in chat output; link to files using markdown links.
