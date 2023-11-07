// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0oKgTIasWOyjRNyP44ef23qP4qTTG4WU",
  authDomain: "digiplus-task.firebaseapp.com",
  projectId: "digiplus-task",
  storageBucket: "digiplus-task.appspot.com",
  messagingSenderId: "683629887368",
  appId: "1:683629887368:web:ca9d7b318a4edd3967c43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;