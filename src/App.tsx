import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import SignOut from "./pages/Authentication/SignOut";
import Donate from "./pages/Donate/Donate";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";
import Organize from "./pages/Organize/Organize";
// import Error400 from "../src/Errors/error400";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/signout",
      element: <SignOut />
    },
    {
      path: "/donate",
      element: (
        <ProtectedRoute>
          <Donate />
        </ProtectedRoute>
      )
    },
    {
      path: "/organize",
      element: (
        <ProtectedRoute>
          <Organize />
        </ProtectedRoute>
      )
    }
  ]);
  return element;
};
export default App;
