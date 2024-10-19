import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtIvIgu3dhCq55tj74p902JE3eTf6QUy0",
  authDomain: "email-auth-context-api.firebaseapp.com",
  projectId: "email-auth-context-api",
  storageBucket: "email-auth-context-api.appspot.com",
  messagingSenderId: "549095890722",
  appId: "1:549095890722:web:47116f0f8d1743bc628f7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
