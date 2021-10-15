import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgHwPtW_l2PJoYjus2vrMTIsdZ9YClHL4",
  authDomain: "contact-info-32669.firebaseapp.com",
  projectId: "contact-info-32669",
  storageBucket: "contact-info-32669.appspot.com",
  messagingSenderId: "1021439660824",
  appId: "1:1021439660824:web:9695825793eb7c9fc4c46d"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;