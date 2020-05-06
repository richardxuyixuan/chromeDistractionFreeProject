document.addEventListener('DOMContentLoaded', function () {
// eventListener basically waits for everything to finish loading

const bg = chrome.extension.getBackgroundPage()
// get access to the background page window

  Object.keys(bg.studyWords).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.studyWords[url]}`
    document.body.appendChild(div)
  })
// add all the counts from the background script and populate them in popup.html
}, false)
