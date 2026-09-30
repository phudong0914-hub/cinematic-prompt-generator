---
name: route-model
description: Automatically evaluates and classifies prompt parameters to select the optimal generative model (Midjourney, Veo 3, Sora 2, Wan 2.5).
argument-hint: "[prompt-or-topic]"
---

# /route-model

Run the atomic model routing engine on the provided prompt or active creative pitch.

## Execution Procedure
1. Extract prompt keywords and contextual attributes (Lens, Lighting, Motion, Timeline, Typography).
2. Invoke `routePromptToOptimalModel()` from `js/aiService.js`.
3. Display the atomic attribute probabilities and the chosen target engine.
4. Auto-configure the output flags and engine directives matching the chosen platform.
