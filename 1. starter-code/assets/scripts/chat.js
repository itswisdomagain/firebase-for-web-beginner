function sendMessage() {
  // get reference to the message input box
  var messageInputBox = document.getElementById('messageInput');

  // get text inside the message input box and remove all leading and trailing spaces
  var message = messageInputBox.value.trim();

  if (message === ''){
    alert("You haven't entered a message to send...");
  }
  else {
    alert("To enable message sending capabilities using Firebase Realtime Database, refer to the Firebase Database slide");
  }
}

function logOut() {
  alert('Log out functionality not implemented yet. Refer to the Firebase Authentication slide to learn how to add this functionality.')
}