import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn, authReady } = useAuth();

//   if (!authReady) return null; // Wait until auth state is ready
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

  return <Outlet />;
};

export default PrivateRoute;
