import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7EHyqD1llHodJGjZSQxzMsZRsFjUc9-s",
  authDomain: "contacts-db-a8463.firebaseapp.com",
  projectId: "contacts-db-a8463",
  storageBucket: "contacts-db-a8463.appspot.com",
  messagingSenderId: "859945755498",
  appId: "1:859945755498:web:70cf039b8aa2b0d5237b13"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;