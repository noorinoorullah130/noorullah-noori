import React from "react";

import "./Contact.css";
import { FaGithub, FaLinkedin, FaFacebook, FaPaperPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="social-links">
                <h2 className="social-item">
                    <FaGithub className="social-icon" />
                    <a
                        href="https://github.com/noorinoorullah130"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github: noorinoorullah130
                    </a>
                </h2>

                <h2 className="social-item">
                    <FaLinkedin className="social-icon" />
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn: Noorullah Noori
                    </a>
                </h2>

                <h2 className="social-item">
                    <FaFacebook className="social-icon" />
                    <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook: Noorullah Noori
                    </a>
                </h2>

                <h2 className="social-item">
                    <IoLogoWhatsapp className="social-icon" />
                    <a
                        href="https://wa.me/93775382538"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp: Noorullah Noori
                    </a>
                </h2>
            </div>

            <div className="contact-section">
                <div className="contact-header">
                    <h2>Want to get in touch?</h2>
                    <p className="subtitle">Drop me a line!</p>
                    <p className="description">
                        I'm always open to new projects, collaborations, or just
                        a chat about tech. Feel free to reach out anytime!
                    </p>
                </div>

                <form
                    className="contact-form"
                    action="https://formsubmit.co/noorinoorullah130@gmail.com"
                    method="POST"
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">NAME</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        <FaPaperPlane className="icon" /> SUBMIT
                    </button>
                </form>
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

export default Contact;
