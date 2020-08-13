let sites = []
const main = async () => {
  const res = await fetch('http://localhost:3000')
  const json = await res.json()
  sites = json.sites
}
main()

chrome.webNavigation.onCompleted.addListener((detail) => {
  sites.forEach(site => {
    if (new RegExp(site.regex).test(detail.url)) {
      chrome.tabs.executeScript(detail.tabId, {
        file: `${site.version}/index.js`
      })
    }
  })
})

chrome.runtime.onMessage.addListener((message, sender, send) => {
  switch (message) {
    case 'scaling-bassoon:clicked': {
      chrome.tabs.create({})
      break
    }
  }
})
