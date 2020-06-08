// Created by: Vince Chang

// Send a message to the eventPage.js to highlight the icon when it hits this
// URL https://developer.chrome.com/* which is specified in manifest.json
chrome.runtime.sendMessage({ todo: "showPageAction" })

// Listen to the message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "changeColor") { // From popup.js
    var addColor = '#' + request.clickedColor; // Creating the hex color
    $('.api').css('color', addColor); // class api is what devloper.chrome.com uses
  }
})