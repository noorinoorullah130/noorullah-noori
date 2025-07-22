import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Noorullah Noori</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
