// config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiUakvzE6acvLMwSVYoqqP7WKKHhyR4U",
  authDomain: "clientbillinglive.firebaseapp.com",
  projectId: "clientbillinglive",
  storageBucket: "clientbillinglive.firebasestorage.app",
  messagingSenderId: "400586974621",
  appId: "1:400586974621:web:1acecdaa4158ab0de4bb74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Por ahora lo dejamos en null, más adelante podemos poner un token fijo
window.__initial_auth_token = null;
