import React, { useState } from "react";
import "../../../src/App.css";

const SignUpSignIn = () => {
  // State management for Sign Up form
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // State management for Sign In form
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Handle Sign Up form input change
  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // Handle Sign In form input change
  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  // Handle Sign Up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData);
    alert("Sign Up successful!");
    // You can add API call here
  };

  // Handle Sign In form submission
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);
    alert("Sign In successful!");
    // You can add API call here
  };

  return (
    <div className="container">
      {/* Sign Up Form */}
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={signUpData.name}
            onChange={handleSignUpChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={signUpData.phone}
            onChange={handleSignUpChange}
            required
            pattern="[0-9]{10}"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignInSubmit}>
          <label htmlFor="signinEmail">Email</label>
          <input
            type="email"
            id="signinEmail"
            name="email"
            value={signInData.email}
            onChange={handleSignInChange}
            required
          />

          <label htmlFor="signinPassword">Password</label>
          <input
            type="password"
            id="signinPassword"
            name="password"
            value={signInData.password}
            onChange={handleSignInChange}
            required
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpSignIn;
