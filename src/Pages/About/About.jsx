import React from "react";

import "./About.css";
import profileImage from "../../assets/images/Screenshot 2025-06-03 124446.png";

const About = () => {
    return (
        <div className="about">
            <div className="intro">
                <div>
                    <p>HEY THERE!</p>
                    <h1>I am Noorullah Noori!</h1>
                    <p>
                        I am web and graphic designer based in Kabul,
                        Afghanistan, with deep passion for creating both
                        stunning and functional digital experiences. My journey
                        in web design began with a fascination for the
                        intersection of art and technology, leading me to
                        specialize in crafting visually appealing and
                        user-friendly websites. I believe that every pixel
                        matters, and I strive to create designs that not only
                        look great but also enhance user experiences. I
                        specialize in designing and developing websites that not
                        only look great but also provide seamless, intuitive
                        user experiences. I believe in the power of design to
                        solve problems, communicate ideas, and make a lasting
                        impact. Whether it is crafting an eye catching interface
                        or building a responsive website, I am always focused on
                        delivering work that brings ideas to life and adds value
                        to the user.
                    </p>
                </div>
                <img src={profileImage} className="profileImage" style={{ borderRadius: 30 }} alt="" />
            </div>

            <div className="career">
                <div>
                    <h1>My Career so far</h1>
                    <p>
                        My career is fueled by a deep passion for crafting
                        beautiful and highly functional websites that deliver
                        exceptional user experiences. I am committed to
                        continuous learning and growth, always seeking new
                        challenges and opportunities to expand my skills and
                        stay at the forefront of design and web development
                        trends. Through dedication and creativity, I strive to
                        create digital solutions that not only meet but exceed
                        client and user expectations.
                    </p>
                </div>
                <div className="topics">
                    <h2>Front-end</h2>
                    <h2>Back-end</h2>
                    <h2>Database</h2>
                    <h2>Graphic Design</h2>
                    <h2>UX Design</h2>
                    <h2>Coding</h2>
                    <h2>Prototyping</h2>
                    <h2>Webflow</h2>
                </div>
            </div>

            <footer className="footer" style={{ marginTop: "10rem" }}>
                <p>
                    &copy; {new Date().getFullYear()} Noorullah Noori. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default About;
