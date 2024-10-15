import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../firebase/firebase.init";

const Login = () => {
  //if we want to see user info use- useState
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      {/* user? sing-out : sign-in */}

      {user ? (
        <button onClick={handleSignOut}>Sign-Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Login</button>
      )}

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>User Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
