// Created by: Vince Chang

/* 2 CASES:
 * 1. The Total will be 0 for new users, because no money has been spent yet
 * 2. The Total will already have some value spent, so need to update this value
 */


// This is needed because if you close the pop up, the value will not be saved
// Anytime the chrome extension is clicked on, the total needs to be retrieved
chrome.storage.sync.get('total', function (budget) {
  $('#total').text(budget.total);
})

// Jquery will listen for the user to click on the spent button
$(function () {
  $('#spendAmount').click(function () {
    // Get the existing total if it is there from the chrome storage using API
    chrome.storage.sync.get('total', function (budget) {

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

      // Set this value back to the Chrome Storage
      chrome.storage.sync.set({ 'total': newTotal });

      // Update the UI and clear out the amount field
      $('#total').text(newTotal);
      $('#amount').val('');
    });
  });
});