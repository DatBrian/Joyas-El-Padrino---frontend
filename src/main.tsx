import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes/Router.tsx";
import { Maintenance } from "./pages/Maintenance/Maintenance.tsx";

//?  Página en mantenimiento, retirar el componente y descomentar el RouterProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Maintenance/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
