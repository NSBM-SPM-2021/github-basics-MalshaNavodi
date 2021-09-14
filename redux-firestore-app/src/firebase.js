import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAHWgu335zWV0kJ2oPGa2dXtHdaJFpEUYA",
    authDomain: "redux-contact-5bd80.firebaseapp.com",
    projectId: "redux-contact-5bd80",
    storageBucket: "redux-contact-5bd80.appspot.com",
    messagingSenderId: "1082097502505",
    appId: "1:1082097502505:web:6bf5b9ed1aa97fabda8f38"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
