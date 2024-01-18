// src/contexts/AuthContext.js

import React, { createContext, useState, useContext } from "react";

// Create a context with a default empty state
const AuthContext = createContext(null);

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // This state will hold the auth status and user role

  // The value prop of the provider will be the auth state and the setter function
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
