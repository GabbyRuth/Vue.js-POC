// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvp2zNSRWeW2Lbpk1QL1n64YL1GRLr1Nk",
  authDomain: "lecture21-dfeee.firebaseapp.com",
  projectId: "lecture21-dfeee",
  storageBucket: "lecture21-dfeee.firebasestorage.app",
  messagingSenderId: "1018855985747",
  appId: "1:1018855985747:web:0a2c5d2531fe8da23eeca6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)