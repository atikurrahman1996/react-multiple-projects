import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const [signinError, setSigninError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //Reset error & success -> by default it's not success or error
    setSigninError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("User logged in successfully");
      })
      .catch((error) => {
        console.log("error", error.message);
        setSigninError("Please provide valid credentials");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
          <p className="py-6">Please login to explore more things.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/* To display Success and SignUp error dynamically */}

          {success && <p className="text-1xl text-green-600">{success}</p>}
          {signinError && (
            <p className="text-1xl text-red-600">{signinError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
