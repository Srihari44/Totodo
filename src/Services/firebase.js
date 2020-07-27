import firebase from "@firebase/app";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7OhXpY8BCxqoJAnguDRTsMx2lp_hQu9U",
  authDomain: "totodo-2.firebaseapp.com",
  databaseURL: "https://totodo-2.firebaseio.com",
  projectId: "totodo-2",
  storageBucket: "totodo-2.appspot.com",
  messagingSenderId: "247718053386",
  appId: "1:247718053386:web:e0c744f116f398daa101f3",
  measurementId: "G-XLK8BH8VPZ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};
