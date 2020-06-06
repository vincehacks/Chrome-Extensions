// Created by: Vince Chang

$(function () {

  // If there is an existing limit then retrieve this from Chrome Storage
  // The call back function takes the budget object and sets the limit value to
  // the budget's limit value
  chrome.storage.sync.get('limit', function (budget) {
    $('#limit').val(budget.limit);
  })

  // When the Save Limit button is clicked on, it will save this value in
  // Chrome storage
  $('#saveLimit').click(function () {
    var limit = $('#limit').val();
    if (limit) {
      chrome.storage.sync.set({ 'limit': limit }, function () {
        close(); // Closes the current tab
      })
    }
  });

  // When Reset Total button is clicked on , total is reset to 0
  // Also will notify the user that the total has been reset
  $('#resetTotal').click(function () {
    chrome.storage.sync.set({ 'total': 0 }, function () {
      var notifOptions = {
        type: 'basic', // There are different type of notifications to use
        iconUrl: 'icon48.png',
        title: 'Total reset!',
        message: 'Total has been reset to 0!'
      };
      chrome.notifications.create('limitNotif', notifOptions);
      chrome.notifications.clear('limitNotif');
    });
  });
});