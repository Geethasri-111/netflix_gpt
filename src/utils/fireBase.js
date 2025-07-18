// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBupBXJ6foMXEpt8uI8oOOEn55Fo7GUkjM",
    authDomain: "netflixclone-ce3e6.firebaseapp.com",
    projectId: "netflixclone-ce3e6",
    storageBucket: "netflixclone-ce3e6.firebasestorage.app",
    messagingSenderId: "922458597110",
    appId: "1:922458597110:web:145c69eb026d586804eed7",
    measurementId: "G-M4CD2QY2F2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth();