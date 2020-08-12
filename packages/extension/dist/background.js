chrome.webNavigation.onCompleted.addListener((detail) => {
  if (/^https:\/\/ja.wikipedia.org/) {
    chrome.tabs.executeScript(detail.tabId, {
      code: `console.log('works!')`
    })
  }
})
