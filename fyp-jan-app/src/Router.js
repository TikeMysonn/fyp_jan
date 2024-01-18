// src/Router.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import PublicUser from "./pages/PublicUser";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/public-user" element={<PublicUser />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
