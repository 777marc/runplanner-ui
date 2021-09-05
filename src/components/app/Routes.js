import React from "react";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import { isAuthenticated, ClearAccessToken } from './Auth';

const routes = {
  "/": () => auth(<Dashboard />),
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