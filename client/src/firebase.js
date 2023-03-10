


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbOUw-V56VdcoU5c46U4Ywr6YZ0GhYqow",
  authDomain: "taskmanager-doneva.firebaseapp.com",
  projectId: "taskmanager-doneva",
  storageBucket: "taskmanager-doneva.appspot.com",
  messagingSenderId: "246769408933",
  appId: "1:246769408933:web:7ad6a08d9a76fe2b7fa64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth = getAuth(app)