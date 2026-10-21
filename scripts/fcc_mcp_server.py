#!/usr/bin/env python3
"""
fcc_mcp_server.py
─────────────────────────────────────────────────────────────────────────────
FREE CLAUDE CODE (FCC) MCP SERVER BRIDGE
─────────────────────────────────────────────────────────────────────────────
Implements JSON-RPC 2.0 stdio protocol for Model Context Protocol (MCP).
Exposes tools to AI Agents:
- fcc_generate_completion: Call 61+ free model providers via local FCC gateway
- fcc_list_models: Inspect active models on localhost:8082
- fcc_health_check: Verify FCC gateway health
─────────────────────────────────────────────────────────────────────────────
"""

import sys
import json
import urllib.request
import urllib.error

FCC_BASE_URL = "http://127.0.0.1:8082"

def call_fcc_messages(model, system_prompt, user_prompt, max_tokens=2048):
    url = f"{FCC_BASE_URL}/v1/messages"
    payload = {
        "model": model or "claude-3-5-sonnet-20241022",
        "messages": [{"role": "user", "content": user_prompt}],
        "max_tokens": max_tokens
    }
    if system_prompt:
        payload["system"] = system_prompt

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Content-Type": "application/json",
            "x-api-key": "fcc-local-free",
            "anthropic-version": "2023-06-01"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as resp:
            body = json.loads(resp.read().decode("utf-8"))
            content = body.get("content", [{}])[0].get("text", "")
            return {"success": True, "text": content, "raw": body}
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="ignore")
        return {"success": False, "error": f"HTTP {e.code}: {err_body}"}
    except Exception as e:
        return {"success": False, "error": f"Connection error: {str(e)}"}

def list_fcc_models():
    url = f"{FCC_BASE_URL}/v1/models"
    try:
        with urllib.request.urlopen(url, timeout=5) as resp:
            body = json.loads(resp.read().decode("utf-8"))
            return {"success": True, "models": body.get("data", [])}
    except Exception as e:
        return {"success": False, "error": str(e)}

def health_check():
    try:
        with urllib.request.urlopen(f"{FCC_BASE_URL}", timeout=3) as resp:
            return {"status": "running", "code": resp.status, "admin_url": FCC_BASE_URL}
    except Exception as e:
        return {"status": "stopped", "error": str(e), "admin_url": FCC_BASE_URL}

def handle_json_rpc(request):
    method = request.get("method")
    req_id = request.get("id")

    if method == "initialize":
        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {}
                },
                "serverInfo": {
                    "name": "free-claude-gateway",
                    "version": "2.0.0"
                }
            }
        }

    elif method == "notifications/initialized":
        return None

    elif method == "tools/list":
        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "result": {
                "tools": [
                    {
                        "name": "fcc_generate_completion",
                        "description": "Gọi mô hình AI miễn phí từ 61 nhà cung cấp qua Free Claude Code Gateway (127.0.0.1:8082).",
                        "inputSchema": {
                            "type": "object",
                            "properties": {
                                "user_prompt": {
                                    "type": "string",
                                    "description": "Yêu cầu cần AI xử lý hoặc sinh văn bản"
                                },
                                "system_prompt": {
                                    "type": "string",
                                    "description": "Chỉ thị vai trò hệ thống (tùy chọn)"
                                },
                                "model": {
                                    "type": "string",
                                    "description": "Tên model (ví dụ: claude-3-5-sonnet-20241022, claude-haiku-4-20250514)"
                                }
                            },
                            "required": ["user_prompt"]
                        }
                    },
                    {
                        "name": "fcc_list_models",
                        "description": "Liệt kê danh sách các mô hình AI đang khả dụng trên Free Claude Code gateway.",
                        "inputSchema": {
                            "type": "object",
                            "properties": {}
                        }
                    },
                    {
                        "name": "fcc_health_check",
                        "description": "Kiểm tra trạng thái kết nối tới trạm Free Claude Code Proxy tại cổng 8082.",
                        "inputSchema": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                ]
            }
        }

    elif method == "tools/call":
        params = request.get("params", {})
        tool_name = params.get("name")
        args = params.get("arguments", {})

        if tool_name == "fcc_generate_completion":
            res = call_fcc_messages(
                args.get("model"),
                args.get("system_prompt"),
                args.get("user_prompt")
            )
            text_out = res.get("text") if res.get("success") else f"Lỗi: {res.get('error')}"
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [{"type": "text", "text": text_out}]
                }
            }

        elif tool_name == "fcc_list_models":
            res = list_fcc_models()
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [{"type": "text", "text": json.dumps(res, ensure_ascii=False, indent=2)}]
                }
            }

        elif tool_name == "fcc_health_check":
            res = health_check()
            return {
                "jsonrpc": "2.0",
                "id": req_id,
                "result": {
                    "content": [{"type": "text", "text": json.dumps(res, ensure_ascii=False, indent=2)}]
                }
            }

        return {
            "jsonrpc": "2.0",
            "id": req_id,
            "error": {"code": -32601, "message": f"Unknown tool: {tool_name}"}
        }

    return {
        "jsonrpc": "2.0",
        "id": req_id,
        "error": {"code": -32601, "message": f"Method not supported: {method}"}
    }

def main():
    while True:
        line = sys.stdin.readline()
        if not line:
            break
        line = line.strip()
        if not line:
            continue
        try:
            req = json.loads(line)
            resp = handle_json_rpc(req)
            if resp is not None:
                sys.stdout.write(json.dumps(resp) + "\n")
                sys.stdout.flush()
        except Exception as e:
            sys.stderr.write(f"MCP RPC Error: {e}\n")
            sys.stderr.flush()

if __name__ == "__main__":
    main()
