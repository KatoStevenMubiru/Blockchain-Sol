// AppRoutes.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage.jsx";
import LoginPage from "./components/pages/login.jsx";
import TextToImageComponent from "./components/adMaker.jsx";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adMaker" element={<TextToImageComponent />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
