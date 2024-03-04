import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Authorization/SignUp";
import SignIn from "./pages/Authorization/SignIn";
import SignOut from "./pages/Authorization/SignOut";
import Donate from "./pages/Donate/Donate";
import ProtectedRoute from "./pages/Authorization/ProtectedRoute";
import Organize from "./pages/Organize/Organize";

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
