import React from "react";

const SimpleForm = () => {
  const handleSubmit = (eve) => {
    eve.preventDefault(); // Prevent the page from reloading
    console.log("Form submitted!");
    console.log(eve.target.name.value);
    console.log(eve.target.email.value);
    console.log(eve.target.phone.value);
    console.log(eve.target.password.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <br />
        <input type="email" name="email" />
        <br />
        <br />

        <input type="text" name="phone" />
        <br />
        <br />

        <input type="text" name="password" />

        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
