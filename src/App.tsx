// import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.scss";

// import Hero from "./pages/Home/Hero";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authorization/SignUp";
import SignIn from "./pages/Authorization/SignIn";
import SignOut from "./pages/Authorization/SignOut";
import Donate from "./pages/Donate/Donate";

const App = () => {
  const element = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/signout", element: <SignOut /> },
    { path: "/home", element: <Home /> },
    { path: "/donate", element: <Donate /> }
  ]);
  return element;
};
export default App;
