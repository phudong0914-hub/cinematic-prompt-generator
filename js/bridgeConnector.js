/**
 * bridgeConnector.js — PromptAgent Flow Bridge Pro Integration for Cine Prompt Pro
 * ───────────────────────────────────────────────────────────────────────────────
 * Intercepts incoming prompts from PromptAgent Chrome Extension (ChatGPT / Gemini)
 * and enables 1-Click dispatching of final 4K prompts to Google Flow / Gemini / ChatGPT.
 */

class FlowBridgeConnector {
  constructor() {
    this.isExtensionAvailable = false;
    this.initListeners();
  }

  initListeners() {
    // 1. Listen for window messages from Chrome Extension Content Script
    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "PROMPT_AGENT_DELIVER") {
        this.handleIncomingDelivery(event.data.payload);
      }
    });

    // 2. Listen for Chrome extension runtime messages if running in context
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
      this.isExtensionAvailable = true;
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "PROMPT_AGENT_DELIVER") {
          this.handleIncomingDelivery(message.payload);
          sendResponse({ ok: true, source: "cinematique" });
        }
      });
    }

    console.log("⚡ [FlowBridgeConnector] Initialized and listening for PromptAgent Bridge.");
  }

  /**
   * Handles incoming prompt delivered from ChatGPT or Gemini via Extension
   */
  handleIncomingDelivery(payload) {
    if (!payload) return;
    const promptText = payload.prompt || payload.raw || "";
    const subjectInput = document.getElementById("subject-input");

    if (subjectInput && promptText) {
      subjectInput.value = `[BRIDGE FROM ${payload.source.toUpperCase()}]: ${promptText}`;
      subjectInput.focus();
      subjectInput.dispatchEvent(new Event("input", { bubbles: true }));

      // Trigger AI Enhancement automatically
      const enhanceBtn = document.getElementById("ai-enhance-btn");
      if (enhanceBtn) {
        enhanceBtn.click();
      }

      if (window.showToast) {
        window.showToast(`⚡ Đã nhận Prompt từ ${payload.source.toUpperCase()} qua Flow Bridge!`, "info");
      }
    }
  }

  /**
   * Relays final generated 4K Prompt to Google Flow, Gemini, or ChatGPT via Extension
   * @param {'flow' | 'gemini' | 'chatgpt' | 'flow+gemini'} target 
   * @param {string} promptText 
   * @param {string} negativePrompt 
   */
  dispatchToFlow(target = "flow", promptText = "", negativePrompt = "") {
    const payload = {
      version: 1,
      source: "cinematique",
      mediaType: "video",
      prompt: promptText || document.getElementById("final-prompt-display")?.textContent || "",
      negativePrompt: negativePrompt || document.getElementById("negative-input")?.value || "",
      parameters: {
        aspectRatio: document.getElementById("aspect-ratio")?.value || "--ar 16:9",
        directorEngine: "Veo 3.1 / Sora 4K",
      },
      sceneIndex: "1",
      assetUrl: "",
      raw: promptText,
    };

    // Post message for extension content script to catch & relay
    window.postMessage({
      type: "PROMPT_AGENT_RELAY",
      target: target,
      payload: payload,
    }, "*");

    // If extension runtime available directly
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage({
        type: "PROMPT_AGENT_RELAY",
        target: target,
        payload: payload,
      }, (response) => {
        if (response && response.ok) {
          if (window.showToast) window.showToast(`🚀 Đã chuyển Prompt sang ${target.toUpperCase()} qua Flow Bridge!`, "success");
        }
      });
    } else {
      if (window.showToast) window.showToast(`🚀 Đã gửi lệnh Relay sang ${target.toUpperCase()}!`, "success");
    }
  }
}

export const flowBridge = new FlowBridgeConnector();
window.flowBridge = flowBridge;
