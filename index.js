// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBDm54IG1jQNFu0s8DDQCMGfKsjMbYQwXs",
    authDomain: "portfolio-mcs.firebaseapp.com",
    projectId: "portfolio-mcs",
    storageBucket: "portfolio-mcs.appspot.com",
    messagingSenderId: "190074904248",
    appId: "1:190074904248:web:3e8cdea12b7cd2886cde4d",
    measurementId: "G-MQR7CNGP61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();