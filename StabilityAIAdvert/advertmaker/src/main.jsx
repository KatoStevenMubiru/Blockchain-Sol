import React from "react";
import ReactDOM from "react-dom/client";
import dotenv from "dotenv";
import TextToImageComponent from "./components/adMaker.jsx";
import MaintenancePage from "./components/Maintenance/maintenance.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TextToImageComponent />
  </React.StrictMode>
);
