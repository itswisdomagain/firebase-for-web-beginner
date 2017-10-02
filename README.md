# Very Simple Introduction to Firebase Authentication and Database for Web

This is the source code for the Intro to Firebase for Web developers hangout organzied by GDG Port Harcourt on September 30th, 2017. It includes the basic html, css and js files to get you started, the slides presented and the final complete version.

## Following along

 - Begin with the starter-code
 - Have a go at the slides
 - Learn more by reading the [Firebase Documentation](https://firebase.google.com/docs/auth/)

## Register with Email and Password

```
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(user){
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

## Login with Email and Password

```
firebase.auth().signInWithEmailAndPassword(email, password)
.then(function(user){
	// this function is called if the login attempt was successful
	console.log(user);
	alert('Yay! Your registration was successful!');
})
.catch(function(error) {
  // this catch function is triggered if login attempt fails
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
```

### Expect a couple more updates