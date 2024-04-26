// import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1M-spdbLBikmMNzAol0m3uE0_WZYAXWU",
  authDomain: "pokemon-firebase-820fd.firebaseapp.com",
  projectId: "pokemon-firebase-820fd",
  storageBucket: "pokemon-firebase-820fd.appspot.com",
  messagingSenderId: "866190768035",
  appId: "1:866190768035:web:f63814c66decac85d28c16",
  databaseURL: "https://pokemon-firebase-820fd-default-rtdb.firebaseio.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("Firebase initialized.");

// Initialize Firebase SDK modules
export const fbAuth = firebase.auth();
export const fbDB = firebase.database();

// Assign fbAuth and fbDb to global window
window.fbAuth = firebase.auth();
window.fbDB = firebase.database();

// Confirm firebase variables available within firebase.js
console.log("Firebase SDK modules initialized within firebase.js...");

console.log("window.fbAuth:", window.fbAuth);
console.log("window.fbDB:", window.fbDB);

console.log("fbAuth:", fbAuth);
console.log("fbDB:", fbDB);
