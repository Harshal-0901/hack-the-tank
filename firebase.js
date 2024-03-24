// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_K51rbjv8mxTRCNkl9135WzHhMAkumDQ",
  authDomain: "zorkoauth.firebaseapp.com",
  projectId: "zorkoauth",
  storageBucket: "zorkoauth.appspot.com",
  messagingSenderId: "395604889669",
  appId: "1:395604889669:web:25639d74291acd6b0c932c",
  measurementId: "G-DZ00HNXJRM",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
