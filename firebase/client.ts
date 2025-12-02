// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGDe_xcxvrchNxGiXTHip_SEyQdgBkebg",
    authDomain: "echoprep-a7c77.firebaseapp.com",
    projectId: "echoprep-a7c77",
    storageBucket: "echoprep-a7c77.firebasestorage.app",
    messagingSenderId: "554257660840",
    appId: "1:554257660840:web:dfb42a0d1447b6355dbb9d",
    measurementId: "G-X5LJV6N6MD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);



