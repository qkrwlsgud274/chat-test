import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
  apiKey: "AIzaSyB8mPnsH96tzVrloSCJgJdeX5VLqSSb9GY",
  authDomain: "park2-cad67.firebaseapp.com",
  projectId: "park2-cad67",
  storageBucket: "park2-cad67.appspot.com",
  messagingSenderId: "730389553656",
  appId: "1:730389553656:web:7ea87b34bfedf355e3b60d",
  measurementId: "G-RCRN75VJH1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
