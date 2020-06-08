// Created by: Vince Chang

// This will create the SpendMoney option when selecting a value and right click

var contextMenuItem = {
  "id": "spendMoney",
  "title": "Spend Money", // When you right click on the web page
  "contexts": ["selection"] // This is the context when this appears, so only
  // when the user selects something on the web page (there are others to
  // choose from so look at documentation)
};
chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
  return !isNaN(value) &&
    parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

// Listener for when a user clicks on the SpendMoney selection
chrome.contextMenus.onClicked.addListener(function (clickData) {

  // Check if what the user clicked on is the SpendMoney option & something was
  // selected
  if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
    // Check if this was a integer that was selected by calling isInt
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(['total', 'limit'], function (budget) {
        var newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }

        // Add selected text to the total
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ 'total': newTotal }, function () {
          if (newTotal >= budget.limit) {
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
      });
    }
  }
});


// To update the Badge, changes will be all the variables that have changed in
// the storage
chrome.storage.onChanged.addListener(function (changes, storageName) {
  // Set a badge
  chrome.browserAction.setBadgeText({ "text": changes.total.newValue.toString() })
})