// Inject a script when visiting certain websites

const re = new RegExp('quantum', 'gi')
// new regular expression searches for the entire string of words,
// with case insensitive, for word 'fifa'

const matches = document.documentElement.innerHTML.match(re)
// look for inner html of the entire document and match everything against that
// regular expression

chrome.runtime.sendMessage({
  // send a message to the background script
  // below is called payload
  url: window.location.href,
  // where did we count the words
  count: matches.length
  // counting the number
})
