var app_firebase = {};
(function(){
 
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyDxj5n4LrbLCQe8rS8-emVvefwrgy2VxXM",
    authDomain: "myhaus-itam.firebaseapp.com",
    databaseURL: "https://myhaus-itam.firebaseio.com",
    projectId: "myhaus-itam",
    storageBucket: "myhaus-itam.appspot.com",
    messagingSenderId: "912191210053",
    appId: "1:912191210053:web:79f1f543cf4f0b00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;
})()