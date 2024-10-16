
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClCFcPr-asr7bVUubMRxGhD8QoFYiXQmM",
  authDomain: "user-email-password-auth-f1cab.firebaseapp.com",
  projectId: "user-email-password-auth-f1cab",
  storageBucket: "user-email-password-auth-f1cab.appspot.com",
  messagingSenderId: "1005135410086",
  appId: "1:1005135410086:web:ca116b51af15576b711567",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;