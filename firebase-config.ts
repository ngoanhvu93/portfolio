// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDoCM1hySxxUvHTEz1KqZgxI1VcqWFfE0",
    authDomain: "blog-7dc1d.firebaseapp.com",
    projectId: "blog-7dc1d",
    storageBucket: "blog-7dc1d.appspot.com",
    messagingSenderId: "556859321376",
    appId: "1:556859321376:web:4be5bd117616c664072045",
    measurementId: "G-RXVQK9Z6BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };