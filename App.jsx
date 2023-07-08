import React from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { baseName } from "./router";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={`/${baseName}`} element={<Home />} />
      </Routes>
    </div>
  );
}
