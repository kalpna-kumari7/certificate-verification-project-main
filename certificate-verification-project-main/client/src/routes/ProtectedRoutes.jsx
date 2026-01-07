import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  isAdmin && role === "admin" ? (
    <Navigate to="/admin" replace />
  ) : (
    <Navigate to="/student" replace />
  );

  return children;
};

export default ProtectedRoute;
