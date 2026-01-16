// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoR-oB0iCIyhLl5cIiXEKRhGiJaw-4CDQ",
  authDomain: "ai-interview-platform-99ec4.firebaseapp.com",
  projectId: "ai-interview-platform-99ec4",
  storageBucket: "ai-interview-platform-99ec4.firebasestorage.app",
  messagingSenderId: "682216231815",
  appId: "1:682216231815:web:d49a0989610a4c7a4ef922",
  measurementId: "G-RQG2YYQM49"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
 
export const auth = getAuth(app);
export const db = getFirestore(app);