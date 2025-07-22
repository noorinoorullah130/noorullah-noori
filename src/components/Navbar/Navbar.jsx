import React from "react";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Noorullah Noori</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/#">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
