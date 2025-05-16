// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "consitrack.firebaseapp.com",
  projectId: "consitrack",
  storageBucket: "consitrack.firebasestorage.app",
  messagingSenderId: "676029321923",
  appId: "1:676029321923:web:e464a5ebc5578e805ec876",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
