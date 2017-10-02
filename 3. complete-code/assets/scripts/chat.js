// this function checks if the user is already logged in, if not redirects to the index.html page
var unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    alert("You are not logged in. You'll be redirected to the login page now...");

    // navigate the user to the chat page
    window.location.href = 'index.html';
  }
  else {
    // the user us logged in, start listening to messages in the appropriate node of our database
    startListeningToChats();
  }

  unsubscribe();
});

// this holds the reference to the chat node of our Firebase database
function getDatabaseReference() {
  // Get a reference to the database service
  var database = firebase.database();
  // this is a reference to the chat node of our Firebase database
  var chatNode = firebase.database().ref().child('chat');

  return chatNode;
}

//this next funtion listens for changes to the chat node of the database
function startListeningToChats(){
  // get a reference to the chat node that holds all chats
  var chatNode = getDatabaseReference();

  // whenever a child node is added to the parent node of all chats, call the newMessageReceived fucnction
  chatNode.on('child_added', newMessageRecieved);
}

function newMessageRecieved(messageNode) {
  // create a list item element to add to the chat messages unordered list
  var newMessageListItem = document.createElement('li');

  // the actual message received is in messageNode.val()
  newMessageListItem.innerHTML = messageNode.val();

  // append the newly created list item to the unordered list and voila! the message should appear
  document.getElementById('chat-messages').appendChild(newMessageListItem);

  //scroll to bottom so the newly added message is visible
  document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

function sendMessage() {
  // get reference to the message input box
  var messageInputBox = document.getElementById('messageInput');

  // get text inside the message input box and remove all leading and trailing spaces
  var message = messageInputBox.value.trim();

  if (message === ''){
    alert("You haven't entered a message to send...");
  }
  else {
    // get a reference to the chat node that holds all chats
    var chatNode = getDatabaseReference();

    // save message to the chat node
    chatNode.push(message)
    .then(function(result){
      // this function will be called if your message was successfully sent
      // do whatever you want to do here
    })
    .catch(function(error){
      // message was not sent, an error occured
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });

    // clear the message box to allow further messaging
    messageInputBox.value = '';
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