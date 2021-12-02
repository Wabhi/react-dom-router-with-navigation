import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <h1>
          <Link to="/about">
            <li>About</li>
          </Link>
        </h1>
        <h1>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </h1>
        <h1>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </h1>
      </ul>
    </nav>
  );
};
export default Nav;
