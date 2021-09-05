import React from "react";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import { isAuthenticated } from './Auth';

const routes = {
  "/": () => auth(<Dashboard />),
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/login": () => <Login />
};

const auth = (component) => {
  return isAuthenticated() ? component : <Login />; 
}

export default routes;