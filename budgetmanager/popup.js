// Created by: Vince Chang

/* 2 CASES:
 * 1. The Total will be 0 for new users, because no money has been spent yet
 * 2. The Total will already have some value spent, so need to update this value
 */

// Jquery will listen for the user to click on the spent button
$(function () {

  // This is needed because if you close the pop up, the value will not be saved
  // Anytime the chrome extension is clicked on, the total needs to be retrieved
  chrome.storage.sync.get(['total', 'limit'], function (budget) {
    $('#total').text(budget.total);
    $('#limit').text(budget.limit);
  });

  $('#spendAmount').click(function () {
    // Get the existing total if it is there from the chrome storage using API
    chrome.storage.sync.get(['total', 'limit'], function (budget) {

      // CASE 1: First time usage, nothing is spent
      var newTotal = 0;

      // CASE 2: Total exists so need to update newTotal
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }

      // User entered amount spent
      var amount = $('#amount').val();
      if (amount) {
        newTotal += parseInt(amount);
      }

      // Set this value back to the Chrome Storage and check if the new total
      // has exceeded the limit, notify the user
      chrome.storage.sync.set({ 'total': newTotal }, function () {

        // If there was an amount entered or the total is at or above limit
        if (amount && newTotal >= budget.limit) {
          var notifOptions = {
            type: 'basic', // There are different type of notifications to use
            iconUrl: 'icon48.png',
            title: 'Limit reached',
            message: 'Uh oh! Looks like you\'ve reached your limit'
          };
          // The first parameter is ID for the notification, 2nd is the object
          chrome.notifications.create('limitNotif', notifOptions);
          chrome.notifications.clear('limitNotif');
        }
      });

      // Update the UI and clear out the amount field
      $('#total').text(newTotal);
      $('#amount').val('');
    });
  });
});