// src/Router.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import PublicUser from "./pages/PublicUser";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/public-user" component={PublicUser} />
        // Add other routes here
      </Switch>
    </Router>
  );
};

export default AppRouter;
