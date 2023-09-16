// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  console.log("ola");
  chrome.tabs.sendMessage(
    tabs[0].id,
    { action: "getLocalStorage" },
    function (response) {
      const parsedData = JSON.parse(response);
      console.log(parsedData);
      document.getElementById("name").innerHTML = response.name;
    }
  );
});
