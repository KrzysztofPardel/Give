import { Navigate, useNavigate } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { UserState } from "../../Redux/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
