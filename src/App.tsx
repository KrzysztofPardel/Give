// import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.scss";

// import Hero from "./pages/Home/Hero";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authorization/SignUp";
import SignIn from "./pages/Authorization/SignIn";

const App = () => {
  const element = useRoutes([
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    {
      path: "/",
      element: <Home />
      // children: [
      //   // {
      //   //   path: "/home/start",
      //   //   element: <Hero />
      //   // }
      //   // ,
      //   // { path: "/aboutd", element: <AboutDonations /> },
      //   // { path: "/aboutus", element: <AboutUs /> },
      //   // { path: "/fo", element: <FoundationOrganizations /> },
      //   // { path: "/contact", element: <Contact /> }
      // ]
    }
  ]);

  return element;
};
export default App;
