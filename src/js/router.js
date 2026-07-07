import { Home } from "../pages/home.js";
import { Contact } from "../pages/contact.js";
import { About } from "../pages/about.js";
import { Projects } from "../pages/projects.js";

import { initUtilities } from "./ui.js";

const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/projects": Projects
}


export function router() {
  const path = window.location.pathname;
  const app = document.getElementById("app");

  const page = routes[path]
  
  app.innerHTML = page ? page() : "<h1>404</h1>"

  initUtilities()
}