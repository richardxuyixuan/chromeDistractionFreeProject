chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  alert(response) // alert means displays with alert box
}); // receive the message from sender, make it as a function with 3 arguments
// response holds the response sent from the content script
// sender holds the information about the tab that is sending information to background script
// sendResponse sends back the response to the content script


chrome.contextMenus.create({
  // contextMenus is an API that is only available in background
  // that creates a button on right click
  title: "Whitelist this website",
  contexts:["selection","image","link","page"],
  // only appear when page is selected
  // can be selection, link, image, page
  onclick: myFunction
});
function myFunction(data,tab){ //tab allows information about website to be grabbed
  //chrome.tabs.create({url:"https://google.com"});
  // create a new tab with Google.com
  alert(encodeURIComponent(tab.title));
  // alert with title of the website
  alert(encodeURIComponent(data.pageUrl))
  // alert with url of the page, encoded for security purposes
}
