//main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import dotenv from "dotenv";
import MaintenancePage from "./components/Maintenance/maintenance.jsx";
import AppRoutes from "./AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
