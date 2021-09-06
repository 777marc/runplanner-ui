import React from "react";
import Dashboard from "./Dashboard";
import TrainingPlans from "../plans/TrainingPlans";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import { isAuthenticated, ClearAccessToken } from './Auth';

const routes = {
  "/dashboard": () => auth(<Dashboard />),
  "/plans": () => auth(<TrainingPlans />),
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/login": () => <Login />,
  "/logout": () => logout(),
};

const auth = (component) => {
  return isAuthenticated() ? component : <Login />; 
}

const logout = () => {
  ClearAccessToken();
  return <Login />;
}

export default routes;