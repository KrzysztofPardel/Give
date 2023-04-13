import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";
import "./SCSS/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Navigation />
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
