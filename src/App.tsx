// import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.scss";
import { AuthContextProvider } from "./context/AuthContext";

// import Hero from "./pages/Home/Hero";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authorization/SignUp";
import SignIn from "./pages/Authorization/SignIn";
import SignOut from "./pages/Authorization/SignOut";
import Donate from "./pages/Donate/Donate";
import ProtectedRoute from "./pages/Authorization/ProtectedRoute";

const App = () => {
  const element = useRoutes([
    // <AuthContextProvider></AuthContextProvider> - to powinno otaczać wszystkie routes, ale muszę jeszcze zrozumieć jak to zrobić z useRoutes-34:40

    {
      path: "/",
      element: (
        <AuthContextProvider>
          <SignIn />
        </AuthContextProvider>
      )
    },
    {
      path: "/signup",
      element: (
        <AuthContextProvider>
          <SignUp />
        </AuthContextProvider>
      )
    },
    {
      path: "/signout",
      element: (
        <AuthContextProvider>
          <SignOut />
        </AuthContextProvider>
      )
    },
    {
      path: "/home",
      element: (
        <AuthContextProvider>
          <Home />
        </AuthContextProvider>
      )
    },
    {
      path: "/donate",
      element: (
        <AuthContextProvider>
          <ProtectedRoute>
            <Donate />
          </ProtectedRoute>
        </AuthContextProvider>
      )
    }
  ]);
  return element;
};
export default App;
