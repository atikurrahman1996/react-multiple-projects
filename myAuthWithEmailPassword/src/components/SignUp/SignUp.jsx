import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Create user & store in firebase

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="mx-auto md: w-1/2">
        <h2 className="text-3xl mb-4">Sign Up</h2>
        <br />

        <form onSubmit={handleSignUp}>
          <input
            className="mb-4 w-3/4 py-2 px-4"
            type="email"
            name="email"
            placeholder="email address"
            id=""
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4"
            type="password"
            name="password"
            placeholder=" password"
            id=""
          />
          <br />
          <input
            className=" btn btn-primary mb-4 w-3/4 py-2 px-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
