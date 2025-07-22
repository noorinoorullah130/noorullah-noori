import React from "react";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Noorullah Noori. All rights
                reserved.
            </p>
        </div>
    );
};

export default Footer;
