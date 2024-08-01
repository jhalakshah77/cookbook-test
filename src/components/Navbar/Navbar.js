import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="recipe-header">
      <h1 className="recipe-nav-h1">Cook Book</h1>
      <ul className="recipe-nav-items">
        <li>Home</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
