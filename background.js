window.studyWords = {}
//"window." makes studyWords an object that can be called in popup.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// listen to the message and populate this hash
  window.studyWords[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
// when the extension is clicked
  chrome.tabs.create({url: 'popup.html'})
// add a new tab
})
