const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      // Log the authentication result to the console
      console.log("Authentication result:", authResult);

      return true;
    },
    // uiShown() {
    //   document.getElementById("loader").style.display = "none";
    // },
  },
  signInFlow: "popup",
  signInSuccessUrl: "signedIn.html",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
ui.start("#firebaseui-auth-container", uiConfig);

console.log("Firebase object:", firebase);
