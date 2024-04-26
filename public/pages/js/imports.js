var srcs = [
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js",
  "./firebase.js",
];
for (var i = 0; i < srcs.length; i++) {
  var script = document.createElement("script");
  script.src = srcs[i];
  // script.defer = true;
  document.head.appendChild(script);
}
