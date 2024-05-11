// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getFirestore, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
const firebaseConfig = {
    // apiKey: "AIzaSyC81731wpeQcLQuWv92gL9yoOZQphRCk-I",
    // authDomain: "portfolio-bd0cf.firebaseapp.com",
    // projectId: "portfolio-bd0cf",
    // storageBucket: "portfolio-bd0cf.appspot.com",
    // messagingSenderId: "336254998070",
    // appId: "1:336254998070:web:b2a6d0ef2bc8df793eea97",
    // measurementId: "G-2673MC8VZ6"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {
    doc,
    setDoc,
    db,
    collection,
    orderBy,
    query,
    onSnapshot,
    deleteDoc
};