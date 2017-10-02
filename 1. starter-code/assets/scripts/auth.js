
function loginWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	showError("Follow the instructions on the Firebase Authentication slide and this repo's README to set up login with email");
}

function registerWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	showError("Follow the instructions on the Firebase Authentication slide and this repo's README to set up register with email");
}

function loginWithGoogle() {
	showError("Follow the instructions on the Firebase Authentication slide and this repo's README to set up login with google");
}

function signOut() {
	showError("Follow the instructions on the Firebase Authentication slide and this repo's README to enable logout functionality");
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