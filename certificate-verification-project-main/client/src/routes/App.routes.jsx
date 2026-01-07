import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../auth/Login";
import Register from "../auth/Register";
import StudentDashboardHome from "../pages/student/StudentDashboardHome";
import DownloadCertificate from "../pages/student/DownloadCertificate";
import ViewCertificate from "../pages/student/VerifyCertificate";
import DashboardHome from "../pages/admin/DashboardHome";
import ManageStudent from "../pages/admin/ManageStudent";
import UploadStudent from "../pages/admin/UploadStudent";
import VerifyCertificate from "../pages/admin/VerifyCertificate";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import StudentDashboardLayout from "../layout/StudentDashboardLayout";
import ProtectedRoute from "./ProtectedRoutes";

const router = createBrowserRouter([
  // public routes
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "verify",
        element: <VerifyCertificate />,
      },
    ],
  },

  // auth routes
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },

  // student routes
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <StudentDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <StudentDashboardHome />,
      },
      {
        path: "download",
        element: <DownloadCertificate />,
      },
      {
        path: "verify",
        element: <VerifyCertificate />,
      },
    ],
  },

  // admin routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-student",
        element: <ManageStudent />,
      },
      {
        path: "upload-student",
        element: <UploadStudent />,
      },
      {
        path: "verify-certificate",
        element: <VerifyCertificate />,
      },
    ],
  },

  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);

export default router;
