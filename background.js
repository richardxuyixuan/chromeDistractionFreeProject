chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  alert(response) // alert means displays with alert box
}); // receive the message from sender, make it as a function with 3 arguments
// response holds the response sent from the content script
// sender holds the information about the tab that is sending information to background script
// sendResponse sends back the response to the content script
