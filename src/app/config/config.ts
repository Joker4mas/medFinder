// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GithubAuthProvider,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
// Initialize Google provider

const googleProvider = new GoogleAuthProvider();
// Initialize Github provider
const githubProvider = new GithubAuthProvider();

// const signInWithEmailAndPassword = new UserAuthProvider();

// Initialize Firestore
export const db = getFirestore (app);


// const  GoogleAuthProvider = getGoogleAuthProvider(app);
export {app, auth, googleProvider, githubProvider, }

