import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="prices" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
