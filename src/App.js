import React from "react";
import "./index.css";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Componentes/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
