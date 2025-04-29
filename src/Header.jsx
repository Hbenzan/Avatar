// src/Components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

// Header component to display site title, description, and navigation links
const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
        <p>We are learning routes in Vite project</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dsa">DSA</Link>
            </li>
            <li>
              <Link to="/contests">Contests</Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

// Export Header component
export default Header;
