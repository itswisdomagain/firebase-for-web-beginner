// this function checks if the user is already logged in and then redirects to the chat.html page
var unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    showSuccess("You are already logged in. You'll be redirected to the chat page in a few seconds");

    // wait 3 seconds, and then navigate the user to the chat page
    setTimeout(function(){
    	window.location.href = 'chat.html';
    }, 3000);
  }
  
  unsubscribe();
});

function loginWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	// hide all alerts on the page
	hideSuccess();
	hideError();

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function(result) {
		// this function is called if the login attempt was successful
		showSuccess("Hello there! Welcome back... You'll be redirected to the chat page in a few seconds");

		// wait 3 seconds, and then navigate the user to the chat page
		setTimeout(function(){
			window.location.href = 'chat.html';
		}, 3000);
	})
	.catch(function(error) {
		// this catch function is triggered if login attempt fails
		var errorCode = error.code;
		var errorMessage = error.message;
		showError(errorMessage);
	});
}

function registerWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	// hide all alerts on the page
	hideSuccess();
	hideError();

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(result) {
		// this function is called if the registration was successful
		showSuccess('Yay! Your registration was successful!');

		// wait 3 seconds, and then navigate the user to the chat page
		setTimeout(function(){
			window.location.href = 'chat.html';
		}, 3000);
	})
	.catch(function(error) {
		// this catch function is triggered if registration fails
		var errorCode = error.code;
		var errorMessage = error.message;
		showError(errorMessage);
	});
}

function loginWithGoogle() {
	// hide all alerts on the page
	hideSuccess();
	hideError();

	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
		// this function is called if the login attempt was successful
		var name = result.user.displayName;
		showSuccess("Hello " + name + "! Welcome back... You'll be redirected to the chat page in a few seconds");

		// wait 3 seconds, and then navigate the user to the chat page
		setTimeout(function(){
			window.location.href = 'chat.html';
		}, 3000);
	})
	.catch(function(error) {
		// this catch function is triggered if login attempt fails
		var errorCode = error.code;
		var errorMessage = error.message;
		showError(errorMessage);
	});
}

function signOut() {
	firebase.auth().signOut()
	.then(function(result) {
		// Sign-out successful
		showSuccess('You have been signed out!');
	})
	.catch(function(error) {
		// an error occured
		var errorCode = error.code;
		var errorMessage = error.message;
		showError(errorMessage);
	});
}

function showError(errorMessage) {
	hideSuccess();
	document.getElementById('errorBox').innerHTML = errorMessage;
	document.getElementById('errorBox').style.display = 'block';
}

function hideError() {
	document.getElementById('errorBox').style.display = 'none';
}

function showSuccess(errorMessage) {
	hideError();
	document.getElementById('successBox').innerHTML = errorMessage;
	document.getElementById('successBox').style.display = 'block';
}

function hideSuccess() {
	document.getElementById('successBox').style.display = 'none';
}