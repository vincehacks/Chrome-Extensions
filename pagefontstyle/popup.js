// Created by: Vince Chang

$(function () {
  // Get the value the user chose
  var color = $('#fontColor').val();

  // Execute this to the color they choose
  $('#fontColor').on("change paste keyup", function () {
    color = $(this).val();
  });

  // Listen to the button change is pressed
  $('#btnChange').click(function () {

    // Sending a message to the tab from where the button was clicked
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the first tab, the message, and the color chosen
      chrome.tabs.sendMessage(tabs[0].id, { todo: "changeColor", clickedColor: color }) // Now go to content.js
    });
  });
});