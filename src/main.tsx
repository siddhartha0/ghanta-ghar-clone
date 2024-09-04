import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
