// this function checks if the user is already logged in, if not redirects to the index.html page
var unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    alert("You are not logged in. You'll be redirected to the login page now...");

    // navigate the user to the chat page
    window.location.href = 'index.html';
  }

  unsubscribe();
});

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
  firebase.auth().signOut()
  .then(function(result) {
    // Sign-out successful
    alert('You have been signed out! You will be taken to the login page now.');

    // navigate the user to the login page
    window.location.href = 'index.html';
  })
  .catch(function(error) {
    // an error occured
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}