/**
 * miniRagEngine.js — Client-Side In-Memory BM25 Retrieval-Augmented Generation (RAG)
 * ─────────────────────────────────────────────────────────────────────────────────
 * Inspired by Amit Shekhar's AI Engineering Course (RAG Architecture) & Tencent WeKnora.
 * 
 * 1. Zero-dependency lexical & BM25 indexing over 720+ cinematic glossary terms.
 * 2. Bi-lingual tokenization (Vietnamese & English).
 * 3. Dynamic Top-K relevance retrieval without memory/token bloat.
 * 4. Augments raw user prompts with precise optical & filmmaking terminology.
 */

import { CINEMATIC_GLOSSARY } from './bilingualGlossary.js';

class MiniRAGEngine {
  constructor() {
    this.index = new Map(); // word -> Set of docIds
    this.docLengths = [];
    this.avgDocLength = 0;
    this.k1 = 1.2; // BM25 parameter
    this.b = 0.75; // BM25 parameter
    this.isIndexed = false;
  }

  tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(w => w.length > 1);
  }

  buildIndex() {
    if (this.isIndexed) return;
    const totalDocs = CINEMATIC_GLOSSARY.length;
    let totalLength = 0;

    for (let id = 0; id < totalDocs; id++) {
      const doc = CINEMATIC_GLOSSARY[id];
      const content = `${doc.en || ''} ${doc.vi || ''} ${doc.category || ''} ${doc.desc || ''}`;
      const tokens = this.tokenize(content);
      this.docLengths[id] = tokens.length;
      totalLength += tokens.length;

      const uniqueTokens = new Set(tokens);
      for (const token of uniqueTokens) {
        if (!this.index.has(token)) {
          this.index.set(token, []);
        }
        this.index.get(token).push(id);
      }
    }

    this.avgDocLength = totalLength / (totalDocs || 1);
    this.isIndexed = true;
    console.log(`🧠 [Mini-RAG Engine] Đã lập chỉ mục BM25 thành công cho ${totalDocs} thuật ngữ điện ảnh.`);
  }

  /**
   * Truy vấn Top-K thuật ngữ liên quan nhất bằng thuật toán BM25
   * @param {string} query 
   * @param {number} topK 
   * @returns {Array<{ doc: object, score: number }>}
   */
  retrieve(query, topK = 4) {
    this.buildIndex();
    const queryTokens = this.tokenize(query);
    if (queryTokens.length === 0) return [];

    const totalDocs = CINEMATIC_GLOSSARY.length;
    const scores = new Float32Array(totalDocs);

    for (const token of queryTokens) {
      const postingList = this.index.get(token);
      if (!postingList) continue;

      const df = postingList.length;
      // IDF calculation
      const idf = Math.log((totalDocs - df + 0.5) / (df + 0.5) + 1);

      for (const docId of postingList) {
        const docLen = this.docLengths[docId];
        // Simplified term frequency approximation
        const tf = 1;
        const numerator = tf * (this.k1 + 1);
        const denominator = tf + this.k1 * (1 - this.b + this.b * (docLen / this.avgDocLength));
        scores[docId] += idf * (numerator / denominator);
      }
    }

    const results = [];
    for (let id = 0; id < totalDocs; id++) {
      if (scores[id] > 0.1) {
        results.push({ doc: CINEMATIC_GLOSSARY[id], score: scores[id] });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  /**
   * Tạo đoạn ngữ cảnh RAG bổ sung cho System Prompt
   * @param {string} userIdea 
   * @param {number} topK 
   * @returns {string}
   */
  enrichContext(userIdea, topK = 3) {
    const hits = this.retrieve(userIdea, topK);
    if (hits.length === 0) return '';

    const lines = hits.map(hit => `• ${hit.doc.en} (${hit.doc.vi || ''}): ${hit.doc.desc || 'Cinematic standard'}`);
    return `\n── RETRIEVED CINEMATIC RAG CONTEXT (BM25 Top-${hits.length}) ──\n` + lines.join('\n');
  }
}

export const miniRagEngine = new MiniRAGEngine();
