import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Content />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
