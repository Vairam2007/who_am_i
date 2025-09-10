import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // Login page
import UserDashboard from "./UserDashboard.jsx"; // Dashboard
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
