import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>Basic Website</span>
      <nav>
        {/* <Link to="/"> Home </Link> */}
        <NavLink to="/">Home</NavLink>
        {/* <Link to="/about"> About Us </Link> */}
        <NavLink to="/about">About Us</NavLink>
        {/* <Link to="/posts"> Posts </Link> */}
        <NavLink to="/posts">Posts</NavLink>
        {/* <Link to="/users"> Users Info </Link> */}
        <NavLink to="/users">Users Info</NavLink>
        {/* <Link to="/contact"> Contact Us </Link> */}
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;

//If we use NaveLink browser will automatically add active class
