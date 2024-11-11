import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingView from "./views/landing_view";

createRoot(document.getElementById("root") as HTMLElement).render(


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingView />} />
    </Routes>
  </BrowserRouter>
);
