// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5QcrRzDbNbSdujjUByj3srvIFsg8TfKk",
  authDomain: "hospitallist-cfc3b.firebaseapp.com",
  databaseURL: "https://hospitallist-cfc3b-default-rtdb.firebaseio.com/",
  projectId: "hospitallist-cfc3b",
  storageBucket: "hospitallist-cfc3b.appspot.com",
  messagingSenderId: "228629277827",
  appId: "1:228629277827:web:b4a8c451d83da286e8bfb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database};
