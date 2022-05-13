// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVStBggG4BW9qHjGVnQGC8uwaGeF0kxlM",
  authDomain: "doctors-portal-1-4fe29.firebaseapp.com",
  projectId: "doctors-portal-1-4fe29",
  storageBucket: "doctors-portal-1-4fe29.appspot.com",
  messagingSenderId: "228577496378",
  appId: "1:228577496378:web:1be280f94779a495eed403",

  //   apiKey: process.env.REACT_APP_apiKey,
  //   authDomain: process.env.REACT_APP_authDomain,
  //   projectId: process.env.REACT_APP_projectId,
  //   storageBucket: process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
