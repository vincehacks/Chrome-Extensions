// Created by: Vince Chang

// Handle if a message is sent here during runtime to highlight the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "showPageAction") { // this comes from content.js
    // Retrieves all the tabs and can specify the options
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
    });
  }
})

