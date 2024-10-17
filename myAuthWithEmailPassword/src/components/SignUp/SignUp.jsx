import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  //Using useState for validation purposes to display user if email already exists

  const [signUpError, setSignUpError] = useState(""); // by default empty, by default no error!
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // by default hide

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    // client side validation for password & copy the regx from stack overflow

    if (password.length < 8) {
      setSignUpError("Password should be at least 8 characters or more");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setSignUpError(
        "At least one uppercase character, one lowercase character, one digit, and one special character"
      );
      return;
    } else if (!accepted) {
      setSignUpError("Please accept our terms & conditions");
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
            required
          />
          <br />
          <div className="password-wrapper mb-4 w-3/4 relative">
            <input
              className="w-full py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              required
            />
            {/* Password show/hide icon */}
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye></FaEye> : <IoMdEyeOff></IoMdEyeOff>}
            </span>
          </div>
          <br />

          {/* To display check box for accept terms and conditions */}

          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">terms and conditions</a>
            </label>
          </div>

          <input
            className="btn btn-primary mb-4 w-3/4 py-2 px-4"
            type="submit"
            value="Submit"
          />
        </form>
        {/* To display SignUp error */}

        {signUpError && <p className=" text-2xl text-red-600">{signUpError}</p>}
        {/* To display SignUp successful message */}
        {success && <p className=" text-2xl text-green-600">{success}</p>}

        <p>
          Already have an account! <Link to="/login"> Please Login!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
