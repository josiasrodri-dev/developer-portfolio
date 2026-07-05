import { Home } from "./pages/home.js";

export function router() {
  const path = window.location.pathname;

  const app = document.getElementById("app");

  if (path === "/") {
    app.innerHTML = Home();
  } else {
    app.innerHTML = "<h1>404</h1>";
  }
}