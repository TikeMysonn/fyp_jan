// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    // Implement logout functionality
    setAuth(null); // Clear the auth state
  };

  return (
    <header className="header">
      {/* ... rest of your header component */}
      {auth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {/* ... rest of your header component */}
    </header>
  );
};

export default Header;
