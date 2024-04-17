import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1M-spdbLBikmMNzAol0m3uE0_WZYAXWU",
  authDomain: "pokemon-firebase-820fd.firebaseapp.com",
  projectId: "pokemon-firebase-820fd",
  storageBucket: "pokemon-firebase-820fd.appspot.com",
  messagingSenderId: "866190768035",
  appId: "1:866190768035:web:f63814c66decac85d28c16",
};

firebase.initializeApp(firebaseConfig);

export const fbAuth = firebase.auth();
export const fbDB = firebase.database();
export const fbStorage = firebase.storage();
