// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlAvS7f-qI1rv3ySuR8Mnst9KVAMcfTgo",
  authDomain: "second-home-2f67e.firebaseapp.com",
  projectId: "second-home-2f67e",
  storageBucket: "second-home-2f67e.appspot.com",
  messagingSenderId: "832932187899",
  appId: "1:832932187899:web:bfe105e27ca8659e8c2a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;