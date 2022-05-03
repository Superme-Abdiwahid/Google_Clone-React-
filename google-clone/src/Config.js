// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzFL8D4e3x8OESfrd-eV0-jI1LneacjZQ",
  authDomain: "clone-react-644d6.firebaseapp.com",
  projectId: "clone-react-644d6",
  storageBucket: "clone-react-644d6.appspot.com",
  messagingSenderId: "941701952057",
  appId: "1:941701952057:web:2897fca23632182b0393e8",
  measurementId: "G-PJSGFL175Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
