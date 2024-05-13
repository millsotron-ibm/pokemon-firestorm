// Load Firebase JavaScript SDK
function loadFirebase() {
  const scripts = [
    "https://cdn.firebase.com/libs/firebasejs/8.6.1/firebase-app.js",
    "https://cdn.firebase.com/libs/firebasejs/8.6.1/firebase-auth.js",
    "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics-compat.js",
    "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth-compat.js",
    "https://www.gstatic.com/firebasejs/10.10.0/firebase-database-compat.js",
    "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage-compat.js",
  ];

  let scriptCount = scripts.length;
  let scriptsLoaded = 0;

  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = () => {
      scriptsLoaded++;
      if (scriptsLoaded === scriptCount) {
        initFirebase();
      }
    };
    document.head.appendChild(script);
  });
}

// Initialize Firebase when all scripts are loaded
function initFirebase() {
  firebase.initializeApp({
    apiKey: "AIzaSyA1M-spdbLBikmMNzAol0m3uE0_WZYAXWU",
    authDomain: "pokemon-firebase-820fd.firebaseapp.com",
    projectId: "pokemon-firebase-820fd",
    storageBucket: "pokemon-firebase-820fd.appspot.com",
    messagingSenderId: "866190768035",
    appId: "1:866190768035:web:f63814c66decac85d28c16",
    measurementId: "G-JSR5R0X09W",
    databaseURL: "https://pokemon-firebase-820fd-default-rtdb.firebaseio.com",
  });
}

// Load Firebase scripts and initialize Firebase
loadFirebase();
