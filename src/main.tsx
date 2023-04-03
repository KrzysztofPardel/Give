import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import App from "./App";
// import "./index.css";
import "./SCSS/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
