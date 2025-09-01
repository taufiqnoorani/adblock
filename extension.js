chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    try {
      const url = new URL(details.url);
      const domain = url.hostname.replace("www.", "");

      if (domain === "linkedin.com") {
        runLinkedinScript(details.tabId);
      }
    } catch (err) {
      console.error("Error parsing URL:", err);
    }
  }
});

function runLinkedinScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["linkedin.js"]
  });
}