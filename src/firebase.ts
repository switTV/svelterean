// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgrhfaz04WWGKBgiK_26MNDdMwXVKCJk",
  authDomain: "svelterean-b68cf.firebaseapp.com",
  projectId: "svelterean-b68cf",
  storageBucket: "svelterean-b68cf.appspot.com",
  messagingSenderId: "79126286357",
  appId: "1:79126286357:web:b25bcddf1cf3f0515e7e1c",
  measurementId: "G-CT999YMFSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);