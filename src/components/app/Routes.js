import React from "react";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";

const routes = {
  "/": () => <Dashboard />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/login": () => <Login />
};

export default routes;