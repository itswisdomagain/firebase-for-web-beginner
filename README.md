# Very Simple Introduction to Firebase Authentication and Database for Web

This is the source code for the Intro to Firebase for Web developers hangout organzied by GDG Port Harcourt on September 30th, 2017. It includes the basic html, css and js files to get you started, the slides presented and the final complete version.

## Following along

 - Begin with the starter-code
 - Have a go at the slides
 - Learn more by reading the [Firebase Documentation](https://firebase.google.com/docs/auth/)

## Register with Email and Password

```
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(result) {
  // this function is called if the registration was successful
  console.log(user);
  alert('Yay! Your registration was successful!');
})
.catch(function(error) {
  // this catch function is triggered if registration fails
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
```
 [Learn more from the Firebase Documentation](https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account)


## Login with Email and Password

```
firebase.auth().signInWithEmailAndPassword(email, password)
.then(function(result) {
  // this function is called if the login attempt was successful
  console.log(user);
  alert('Yay! Your log in was successful!');
})
.catch(function(error) {
  // this catch function is triggered if login attempt fails
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
```
 [Learn more from the Firebase Documentation](https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password)


## Login with Google

```
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  alert('You have been signed in successfully!');
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  alert(errorMessage);
});
```
 [Learn more from the Firebase Docs](https://firebase.google.com/docs/auth/web/google-signin)


## Sign out completely

```
firebase.auth().signOut()
.then(function(result) {
  // Sign-out successful
  alert('You have been signed out!');
})
.catch(function(error) {
  // an error occured
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
```

### Expect a couple more updates