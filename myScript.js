// chrome.runtime.sendMessage(document.getElementsByTagName("title")[0].innerHTML);
// Send out the message to listener
// console.log(document.getElementsByTagName("title")[0].innerHTML);



// Website to test https://www.reddit.com/r/math/comments/brgm5/calculus_is_amazing/

// Get title from current website and convert to appropriate subject


/*
// Need to modify wait until loaded
var textToSend = document.getElementsByTagName("title")[0].innerHTML;
textToSend = textToSend.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase();

// Fetch results from URL
const api_url = 'https://us-central1-extension-1234.cloudfunctions.net/yesorno?subject=MAT194&title='+textToSend;
fetch(api_url)
  .then(function(response) {
    return response.text();
  }).then(function(text) {
  	// <!DOCTYPE ....
  	 alert("This website titled " + textToSend + " is a " + text);
     // opposite of go ahead is "blocked"
  })
  .catch(function(error) {
      alert('error');
  });
  */
