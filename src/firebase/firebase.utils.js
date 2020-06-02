import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyAFmJhnOmTmk67fp-cotHkMRX_l393dGYk",
   authDomain: "ecomerce-try.firebaseapp.com",
   databaseURL: "https://ecomerce-try.firebaseio.com",
   projectId: "ecomerce-try",
   storageBucket: "ecomerce-try.appspot.com",
   messagingSenderId: "846538084063",
   appId: "1:846538084063:web:2d07d18279a9dcf63a636a",
   measurementId: "G-5TQMBTYQLR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //untuk memberikan popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
