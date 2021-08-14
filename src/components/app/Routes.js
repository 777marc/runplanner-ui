import React from "react";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import About from "./About";
const routes = {
  "/": () => <Dashboard />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};
export default routes;