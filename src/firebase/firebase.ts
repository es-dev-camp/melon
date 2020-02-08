import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

firebase.initializeApp({
  apiKey: "AIzaSyA2l9N-sTzmX5_5K7B_sZ6X5BDqvRoa_Pc",
  authDomain: "melon-develop.firebaseapp.com",
  databaseURL: "https://melon-develop.firebaseio.com",
  projectId: "melon-develop",
  storageBucket: "melon-develop.appspot.com",
  messagingSenderId: "965718551450",
  appId: "1:965718551450:web:6e05d5c34dfe448153e823",
  measurementId: "G-32GTQK2HLN"
});

// 明示的にSignOutするまでは認証を保持する。
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const perf = firebase.performance();

firebase.firestore().settings({});

export default firebase;
