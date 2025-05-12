import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ requiredRole = null }) => {
const { isLoggedIn, user, isReady } = useAuth();
const location = useLocation();

if (!isReady) {
return <div className="d-flex justify-content-center mt-5">Loading...</div>;
}

if (!isLoggedIn) {
return <Navigate to="/login" state={{ from: location }} replace />;
}

if (requiredRole && user?.role !== requiredRole) {
return <Navigate to="/unauthorized" replace />;
}

return <Outlet />;
};

export default PrivateRoute;

