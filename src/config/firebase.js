// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9x7UuoVSFFWweOipNPuo_s43ZbqCqHC0",
    authDomain: "masteronlinecommunity-63779.firebaseapp.com",
    databaseURL: "https://masteronlinecommunity-63779-default-rtdb.firebaseio.com",
    projectId: "masteronlinecommunity-63779",
    storageBucket: "masteronlinecommunity-63779.appspot.com",
    messagingSenderId: "841443286593",
    appId: "1:841443286593:web:76a0e734e6a3f59bcb70c0",
    measurementId: "G-LCJMXFPY85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDatabase = getDatabase(app);

