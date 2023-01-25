import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyATfqwQa5wltETdrKzsCgUu-tAdxcAJNTA",
    authDomain: "project-bee2d.firebaseapp.com",
    projectId: "project-bee2d",
    storageBucket: "project-bee2d.appspot.com",
    messagingSenderId: "361272158178",
    appId: "1:361272158178:web:e8ed12d2c168ffa0d67bbb",
    measurementId: "G-92BBE0JK8N"
});

export const auth = firebase.auth();

/**GOOGLE AUTH INTEGRATION CODELARI */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;