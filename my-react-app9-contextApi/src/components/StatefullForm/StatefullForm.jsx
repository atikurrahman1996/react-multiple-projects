import React, { useState } from "react";

const StatefullForm = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (eve) => {
    eve.preventDefault(); // Prevent the page from reloading
    console.log(email, name, password, phone);
  };

  const handleEmailChange = (eve) => {
    console.log(eve.target.value);
    setEmail(eve.target.value);
  };
  const handlePasswordChange = (eve) => {
    console.log(eve.target.value);
    setPassword(eve.target.value);
  };
  const handleNameChange = (eve) => {
    console.log(eve.target.value);
    setName(eve.target.value);
  };
  const handlePhoneChange = (eve) => {
    console.log(eve.target.value);
    setPhone(eve.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="enter your name"
          name="name"
        />
        <br />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <br />
        <input onChange={handlePhoneChange} type="text" name="phone" />
        <br />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />

        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefullForm;
