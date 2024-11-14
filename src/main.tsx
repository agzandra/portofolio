import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingView from "./views/landing_view";
import { Provider } from 'react-redux'
import store from './app/provider_store'

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>  <BrowserRouter basename="/portfolio/">
    <Routes>
      <Route path="/" element={<LandingView />} />
    </Routes>
  </BrowserRouter></Provider>
);
