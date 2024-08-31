import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "@/pages/Errors/ErrorPage";
import LoginPage from "@/pages/Login/LoginPage";
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";

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
]);

export default router;
