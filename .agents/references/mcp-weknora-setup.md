# 🔌 Tencent WeKnora & Knowledge Base MCP Integration Guide

This guide establishes how to connect enterprise knowledge bases (like Tencent WeKnora or local document repositories) into AI Agents (Claude Code, Antigravity IDE) using the **Model Context Protocol (MCP)**.

---

## 1. What is the MCP Bridge?
The **Model Context Protocol (MCP)** is an open standard that allows AI agents to securely query external data sources without polluting the system prompt or token budget.

Instead of pasting large PDFs or book summaries into chat:
1. Documents are ingested into WeKnora or a local vector store.
2. The agent queries the MCP server on demand via tools:
   - `search_cinematic_knowledge(query)`
   - `get_director_technique(director_name)`

---

## 2. Configuration for Antigravity & Claude Code
Add the following to your global MCP config (`mcp_config.json`):

```json
{
  "mcpServers": {
    "weknora-knowledge": {
      "command": "python",
      "args": ["-m", "weknora.mcp_server", "--port", "8000"],
      "env": {
        "WEKNORA_API_KEY": "${WEKNORA_API_KEY}"
      }
    }
  }
}
```

---

## 3. Benefits for Cine Prompt Pro
- **Zero Token Bloat**: Agent reads only the 2-3 most relevant paragraphs when writing complex prompts.
- **Multimodal Ingestion**: Ingests photography manuals, lighting diagrams, and screenplay drafts via OCR.
- **Dynamic Retrieval**: Combines BM25 keywords with vector embeddings for high-precision film terminology.
