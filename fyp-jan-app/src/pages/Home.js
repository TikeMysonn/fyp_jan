// src/pages/Home.js

import React from "react";
import LoginForm from "./LoginForm";

const Home = () => {
  const handleLogin = (credentials) => {
    // Here, you would handle the login logic, potentially sending the credentials to your backend.
    console.log("Login Attempt:", credentials);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Home;
