import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home/HomePage";
import LogonPage from "./pages/Logon/LogonPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogonPage />} />
        <Route path="home" element={<HomePage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
