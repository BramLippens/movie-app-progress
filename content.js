// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getLocalStorage") {
    const progress = localStorage.getItem("video-progress"); // Replace 'yourName' with the actual key you use in localStorage.
    sendResponse(progress);
  }
});
