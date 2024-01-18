// src/App.js

import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <AppRouter />
      <Footer />
    </AuthProvider>
  );
};

export default App;
