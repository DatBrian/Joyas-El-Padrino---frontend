import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "@/pages/Errors/ErrorPage";
import LoginPage from "@/pages/Login/LoginPage";
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Messages from "@/pages/Messages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
        
      },
    ],
  },
]);

export default router;
