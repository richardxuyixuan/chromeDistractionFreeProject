var options={
  type:"progress",
  title:"Study time remaining",
  message:"5 minutes",
  iconUrl:"icon.png",
  progress:80
};
chrome.notifications.create(options,callback);
// call rich notification that is inside options
function callback(){
  console.log('Popup done!'); // logged after notification popup is displayed
}

chrome.notifications.onClicked.addListener(redirectWindow);

function redirectWindow() {
  alert('Keep studying!');
}
// Pop up with motivational message when clicked
