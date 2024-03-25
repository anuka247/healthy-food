// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgKjZYxV1KzUKLGYGFQrA1pTE-W_WMoM",
  authDomain: "eruul-hool.firebaseapp.com",
  projectId: "eruul-hool",
  storageBucket: "eruul-hool.appspot.com",
  messagingSenderId: "501471403869",
  appId: "1:501471403869:web:e135408ffdb45b34f112b4",
  measurementId: "G-QSB43K4QHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
