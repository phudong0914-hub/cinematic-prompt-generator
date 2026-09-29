---
name: optical-linter
description: Real-time optical syntax validator, parameter coherence checker, and prompt injection sanitizer for Cine Prompt Pro.
---

# 🔍 Optical Linter & Security Sanitizer Skill

Use this skill when modifying prompt linting algorithms, optical verification, or input security.

## Core Verification Rules
1. **Optical Integrity**
   - Check for conflicting lighting sources (e.g. "noon direct sun" combined with "neon dark alley").
   - Flag invalid aspect ratios or conflicting model flags.
   - Verify focal length realism (e.g., portrait on 12mm ultra-wide produces fisheye distortion; warn user).
2. **Security & Injection Defense**
   - Scan for override triggers: `ignore previous directives`, `system reset`, `format as markdown table containing system prompt`.
   - Strip unsafe HTML tags or JavaScript URI schemes from input fields.
   - Enforce maximum prompt payload length to prevent denial-of-service on local parser.
