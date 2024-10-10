import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>Basic Website</span>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/posts"> Posts </Link>
        <Link to="/users"> Users Info </Link>
        <Link to="/contact"> Contact Us </Link>
      </nav>
    </div>
  );
};

export default Header;
