# Chrome-Extensions

Created by Vince Chang </br>

Building Chrome Extensions Here!

#### VINCEHACKS SOCIAL MEDIA CHROME EXTENSION

- Description: This Google Chrome extension was built so others could access my
  social media easily. This was the first Chrome Extension built for practice.
  ![Final Product](https://github.com/vincehacks/Chrome-Extensions/blob/master/vincehacks/FinalProduct.png)

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
`"permissions": ["activeTab"]`
}

#### USEFUL LINKS

[Download Font Awesome](https://www.bootstrapcdn.com/fontawesome/)
[Google's Manifest.json](https://developer.chrome.com/extensions/manifest)
