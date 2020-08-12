chrome.webNavigation.onCompleted.addListener((detail) => {
  if (/^https:\/\/ja.wikipedia.org/) {
    chrome.tabs.executeScript(detail.tabId, {
      code: `
        const script = document.createElement('script')
        script.src = '${chrome.extension.getURL('v1/index.js')}'
        document.body.appendChild(script)
      `
    })
  }
})
