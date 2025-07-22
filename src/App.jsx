import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
