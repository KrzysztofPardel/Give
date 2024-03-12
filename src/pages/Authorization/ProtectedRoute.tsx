import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
