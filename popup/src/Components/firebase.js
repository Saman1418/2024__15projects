import React from "react";
import firebase from "firebase";

var Config = {
  apiKey: "AIzaSyDQg2F3GMyLGx30b5ty6MpsRUIOGWMjjdM",
  authDomain: "test-bd7c2.firebaseapp.com",
  projectId: "test-bd7c2",
  storageBucket: "test-bd7c2.appspot.com",
  messagingSenderId: "857656623850",
  appId: "1:857656623850:web:23ffa4654b3c05d8bacd93"
};

// Initialize Firebase
firebase.initializeApp(Config); 

export default firebase;