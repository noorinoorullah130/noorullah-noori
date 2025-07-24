import React from "react";

import "./About.css";
import profileImage from "../../assets/images/Screenshot 2025-06-03 124446.png";

const About = () => {
    const topics = [
        "Front-end",
        "Back-end",
        "Database",
        "Graphic Design",
        "UX Design",
        "Coding",
        "Prototyping",
        "Webflow",
    ];

    const experienceTopics = [
        {
            languages: "HTML, CSS, JavaScript",
            type: "Frontend",
            duaDate: "Dec 2023 - Dec 2024",
        },
        {
            languages: "React",
            type: "JavaScript Frameworks",
            duaDate: "Jan 2025 - Now",
        },
        {
            languages: "Node.js, Express.js",
            type: "Backend",
            duaDate: "Mar 2025 - Now",
        },
        {
            languages: "MongoDB, MySQL, PostgreSQL",
            type: "Database",
            duaDate: "Jun 2023 - Now",
        },
        {
            languages: "Webflow, WordPress, Figma",
            type: "Web Development",
            duaDate: "Mar 2025 - Now",
        },
    ];

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
                <img
                    src={profileImage}
                    className="profileImage"
                    style={{ borderRadius: 30 }}
                    alt=""
                />
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
                    {topics.map((topic, index) => (
                        <h2 key={index} className="topic">
                            {topic}
                        </h2>
                    ))}
                </div>
            </div>

            <div className="experience">
                <div className="experienceIntro">
                    <h1>My experience</h1>
                    <p>
                        <strong>
                            Senior Frontend Developer & Junior Backend
                            Developer:
                        </strong>
                        <br />
                        ‍With two years of experience, I specialize in building
                        responsive, user-friendly web applications using React
                        and other modern frontend frameworks. On the backend, I
                        work with Node.js and databases like MongoDB, MySQL and
                        PostgreSQL to create scalable, efficient APIs. I enjoy
                        collaborating with cross-functional teams to bridge the
                        gap between frontend and backend, ensuring seamless and
                        performant user experiences.
                    </p>
                </div>
                <div className="experienceTopics">
                    {experienceTopics.map((topic, index) => (
                        <div key={index} className="experienceTopic">
                            <h2>{topic.languages}</h2>
                            <p>{topic.type}</p>
                            <p>{topic.duaDate}</p>
                        </div>
                    ))}
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
