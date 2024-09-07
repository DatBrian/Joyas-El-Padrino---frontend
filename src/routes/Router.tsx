import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "@/pages/Errors/ErrorPage";
import LoginPage from "@/pages/Login/LoginPage";
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Messages from "@/pages/Messages/Messages";
import ServiciosPage from "@/pages/Servicios/ServiciosPage";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import SellersPage from "@/pages/Sellers/SellersPage";

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
        path: "services",
        element: <ServiciosPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
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
      {
        path: "sellers",
        element: <SellersPage />,
      },
    ],
  },
]);

export default router;
