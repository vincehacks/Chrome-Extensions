# Chrome-Extensions

Created by Vince Chang </br>

Building Chrome Extensions Here!

#### VINCEHACKS SOCIAL MEDIA CHROME EXTENSION

- Description: This Google Chrome extension was built so others could access my
  social media easily. This was the first Chrome Extension built for practice.
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/vincehacks/FinalProduct.png)

#### BUDGET MANAGER CHROME EXTENSION

- Description: This Google Chrome extension was built to accept spending,
  display total spending, limit and notify if reached and option to reset total
  and limit</br>
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/budgetmanager/FinalProduct.png) </hr>
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/budgetmanager/FinalProduct1.png) </hr>
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/budgetmanager/FinalProduct2.png) </hr>
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/budgetmanager/FinalProduct3.png) </hr>

#### HELLO WORLD CHROME EXTENSION

- Description: This Google Chrome extension was built to demonstrate a simple
  Chrome extension that can be used along with Jquery to update text when typed

#### SETTING UP MANIFEST.JSON

- Every Chrome Extension needs a `manifest.json`

```json
{
  "manifest_version": 2,
  "name": "vincehacks",
  "description": "Quick access to my social",
  "version": "1.0.0",
  "icons": { "128": "icon128.png" },
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  },
  "permissions": ["activeTab"]
}
```

`"icons": { "128": "icon128.png" }`
`"browser_action": { "default_icon": "icon.png", "default_popup": "popup.html" }`
`popup.html` is the file to be used to show the markup
`"permissions": ["activeTab"]` Need to say what in the Chrome API do you need
permissions to
}

#### USEFUL LINKS

[Download Font Awesome](https://www.bootstrapcdn.com/fontawesome/)
[Google's Manifest.json](https://developer.chrome.com/extensions/manifest)

#### THE BIG PICTURE

There are 4 files needed in a Chrome Extension:

1. manifest.json
2. HTML
3. CSS
4. JavaScript

Which are all bundled into a `.crx` zipped file that can be placed onto the
Chrome Web Store

#### EXTENSION TYPES

1. Browser Action

- Stay in tool bar
- Accessible at all times

2. Page Action

- Stay in tool bar but grey-ed out
- Accessible only on certain pages
- Ex. Ebates

3. Neither BA or PA

- Runs in the background

#### MANIFEST.JSON

- Information about the extension
- Json format
- Mandatory!
  - Manifest Version
  - Name of the extension
  - Version of the extension

#### CHROME STORAGE APIs

- A place for you to store values within variables
- When you click on the a button, it will utilize the Chrome API to store
- All Chrome APIs are asynchronous

#### OPTIONS PAGE

- Right clicking on the icon
- HTML, CSS and JS
- Budget Manager
  - Set a Limit
  - Reset a Total

#### BACKGROUND VS EVENT PAGES

- 2 Types of Pages
  1. **Background**
  2. **Event**
- Why: Code running in background
- Background page **runs at all times**
- Event page **runs only when required**
- Background pages consume resources even when not required
- Stick to event pages to avoid resources from always being used up
- ContextMenus is when you can right click while on Chrome, you get some options
  to help utilize your Chrome extension
- ContextMenus are Event Pages not Background pages
- For the ContextMenus to work, will need to utilize a different Chrome API that
  will listen to the click event on the ContextMenus item

#### BADGES

- Can provide a badge on the Chrome icon
  - Ex. ad blocker shows how many ads are blocked on a page without you having
    to open and click on the Chrome extension
- This is going to be using a listener and using a different Chrome API
