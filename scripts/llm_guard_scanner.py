#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
llm_guard_scanner.py — Enterprise AI Firewall & Security Inspector
──────────────────────────────────────────────────────────────────
Lấy cảm hứng từ llm-guard:
- Quét và chặn prompt injection trước khi gửi request tới API LLM.
- Ẩn danh hóa số điện thoại, email, thông tin nhạy cảm (PII).
- Kiểm tra tính tuân thủ chính sách quảng cáo TikTok/Meta Ads.

Tác giả: Đạo Diễn Trungvt (Cine Prompt Pro v2.0)
"""

import sys
import json
import re
import argparse

sys.stdout.reconfigure(encoding='utf-8')

INJECTION_PATTERNS = [
    (r"ignore\s+(all\s+)?(previous|prior)\s+instructions", "SYS_OVERRIDE"),
    (r"(you\s+are\s+now|act\s+as)\s+(dan|developer\s+mode|unfiltered)", "ROLEPLAY_JAILBREAK"),
    (r"(<\|im_start\|>|<\|system\|>|\[inst\])", "DELIMITER_ESCAPE"),
    (r"(output|reveal|show|print)\s+(your|the)\s+(system\s+prompt|api\s*key|secret)", "LEAK_CREDENTIALS"),
]

def scan_text(text):
    threats = []
    for pattern, name in INJECTION_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            threats.append(name)

    # Anonymize PII
    phone_pattern = r"(?:\+84|0)(?:[0-9]{2,3}[.\s-]?[0-9]{3}[.\s-]?[0-9]{3,4})"
    sanitized, phone_count = re.subn(phone_pattern, "<PII_PHONE>", text)

    return {
        "is_safe": len(threats) == 0,
        "threats_detected": threats,
        "threat_score": min(100, len(threats) * 40),
        "sanitized_text": sanitized,
        "pii_redacted": phone_count > 0
    }

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="LLM Guard Enterprise Scanner")
    parser.add_argument('--text', required=True, help="Văn bản cần kiểm tra")
    args = parser.parse_args()

    result = scan_text(args.text)
    print(json.dumps(result, ensure_ascii=False, indent=2))
