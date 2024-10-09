import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>This our users: {users.length}</h2>
      <h2>Our users are awesome</h2>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
