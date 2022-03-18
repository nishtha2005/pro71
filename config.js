import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBJYuPjcLnyJ2riXjQX0ickx7tCx6vFYjI",
    authDomain: "rider-2d794.firebaseapp.com",
    projectId: "rider-2d794",
    storageBucket: "rider-2d794.appspot.com",
    messagingSenderId: "886741319264",
    appId: "1:886741319264:web:849a412dd3e1ff602a0d05"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
