var firebase = require("firebase");
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("<YOUR_FIREBASE_SECRET>");
var token = tokenGenerator.createToken({ uid: "uniqueId1", some: "arbitrary", data: "here" });

ref.authWithCustomToken(AUTH_TOKEN, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Login Succeeded!", authData);
  }
});

/*
firebase.auth().currentUser.getToken(/ forceRefresh / true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});
*/

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid;

if (user != null) {
  firstName = user.firstName;
  lastName = user.lastName;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  First Name: "+profile.firstName);
    console.log("  Last Name: "+profile.lastName);

  });
}






/*
user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
});
*/