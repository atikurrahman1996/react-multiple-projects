import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>User name is: {name} </h2>
      <p>User website is {website}</p>
    </div>
  );
};

export default UserDetails;
