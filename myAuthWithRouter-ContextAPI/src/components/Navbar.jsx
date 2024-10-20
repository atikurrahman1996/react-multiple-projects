import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      ;
      <br />
      <li>
        <NavLink to="/register">Register</NavLink>{" "}
      </li>
      <br />
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <br />
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      <br />
      {/*if user logged in he will see these below two options */}
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MEOW</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <a onClick={handleLogOut} className="btn btn-sm">
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
