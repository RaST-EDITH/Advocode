import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAOihXT6OPKSef9rNlUYEseWFFaAiEx78M",
  authDomain: "lawgpt-7aa05.firebaseapp.com",
  projectId: "lawgpt-7aa05",
  storageBucket: "lawgpt-7aa05.appspot.com",
  messagingSenderId: "87630579307",
  appId: "1:87630579307:web:ac2bb081aa6fd837e5532e",
  measurementId: "G-J0P1L0Y1B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();
export {auth , provider}; 