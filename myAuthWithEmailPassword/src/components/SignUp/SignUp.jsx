import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SignUp = () => {
  //Using useState for validation purposes to display user if email already exists

  const [signUpError, setSignUpError] = useState(""); // by default empty, by default no error!
  const [success, setSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // client side validation for password

    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters or more");
      return;
    }

    //Reset error & success -> by default it's not success or error
    setSignUpError("");
    setSuccess("");

    // Create user & store in firebase

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("User Sign Up successfully");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
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
            required
          />
          <br />
          <input
            className="mb-4 w-3/4 py-2 px-4"
            type="password"
            name="password"
            placeholder=" password"
            id=""
            required
          />
          <br />
          <input
            className=" btn btn-primary mb-4 w-3/4 py-2 px-4"
            type="submit"
            value="Submit"
          />
        </form>
        {/* To display SignUp error */}

        {signUpError && <p className=" text-2xl text-red-600">{signUpError}</p>}
        {/* To display SignUp successful message */}
        {success && <p className=" text-2xl text-green-600">{success}</p>}
      </div>
    </div>
  );
};

export default SignUp;
