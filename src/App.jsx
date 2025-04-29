// src/App.jsx

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import DSA from "./Home"; // DSA page (renamed 'Home' component)
import Contests from "./Contest"; // Contests page
import Header from "./Header"; // Header component shown across all pages

// Button that navigates to the home page when clicked
const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

// Main App containing the header, button, and route definitions
const App = () => (
  <div style={{ textAlign: "center" }}>
    <Header />
    <Button />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/contests" element={<Contests />} />
    </Routes>
  </div>
);

export default App; // Export main App component