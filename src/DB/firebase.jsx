import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVDNVa_rqasOAJSw5nToJsnP_bfkwL63A",
    authDomain: "pexx-336301.firebaseapp.com",
    projectId: "pexx-336301",
    storageBucket: "pexx-336301.appspot.com",
    messagingSenderId: "260726741442",
    appId: "1:260726741442:web:28090248bbf4b4f6945e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);