import React from "react";

import myPic from "../../assets/images/Screenshot 2025-06-03 124446.png";
import "./Content.css";

const Content = () => {
    return (
        <>
            <div className="content">
                <div className="info">
                    <h1>Noorullah Noori</h1>
                    <h5>Web Developer</h5>
                    <p>
                        Hello! My name is Noorullah Noori, and I'm a Web
                        Developer from Kabul Afghanistan. I specialize in
                        front-end technologies like HTML, CSS, JavaScript, and
                        React.js, as well as back-end development using Node.js,
                        Express.js, and MySQL. Currently, I am working as a
                        Senior Developer, focusing on delivering efficeint and
                        scalable web applications.
                    </p>
                </div>
                <img src={myPic} className="my-image" alt="my image" />
            </div>
            <footer className="footer" style={{ marginTop: "10rem" }}>
                <p>
                    &copy; {new Date().getFullYear()} Noorullah Noori. All
                    rights reserved.
                </p>
            </footer>
        </>
    );
};

export default Content;
