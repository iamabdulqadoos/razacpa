
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* =========================================
                    FOOTER TOP
                ========================================= */}

                <div className="footer-top">

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            <div className="footer-logo-mark">
                                R
                            </div>

                            <div className="footer-logo-text">

                                <span className="footer-logo-name">
                                    Raza CPA
                                </span>

                                <span className="footer-logo-subtitle">
                                    PLLC
                                </span>

                            </div>
                        </Link>


                        <p className="footer-description">
                            Practical accounting, tax, and financial
                            guidance designed around your goals.
                        </p>

                    </div>


                    <div className="footer-cta">

                        <span className="footer-cta-label">
                            READY TO GET STARTED?
                        </span>

                        <h2>
                            Let's work
                            <br />
                            <span>together.</span>
                        </h2>

                        <Link
                            to="/appointment"
                            className="footer-cta-link"
                        >
                            Book an Appointment
                            <span>↗</span>
                        </Link>

                    </div>

                </div>


                {/* =========================================
                    FOOTER LINKS
                ========================================= */}

                <div className="footer-links">

                    {/* Navigation */}

                    <div className="footer-column">

                        <h3>
                            Navigation
                        </h3>

                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/services">
                            Services
                        </Link>

                        <Link to="/pricing">
                            Pricing
                        </Link>

                        <Link to="/blog">
                            Blog
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>


                    {/* Services */}

                    <div className="footer-column">

                        <h3>
                            Services
                        </h3>

                        <Link to="/services">
                            Accounting
                        </Link>

                        <Link to="/services">
                            Tax Planning
                        </Link>

                        <Link to="/services">
                            Bookkeeping
                        </Link>

                        <Link to="/services">
                            Tax Preparation
                        </Link>

                        <Link to="/services">
                            Business Advisory
                        </Link>

                    </div>


                    {/* Contact */}

                    <div className="footer-column footer-contact">

                        <h3>
                            Contact
                        </h3>

                        <a href="mailto:info@razacpa.com">
                            info@razacpa.com
                        </a>

                        <a href="tel:+10000000000">
                            +1 (000) 000-0000
                        </a>

                        <p>
                            United States
                        </p>

                    </div>

                </div>


                {/* =========================================
                    FOOTER BOTTOM
                ========================================= */}

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Raza CPA, PLLC.
                        All rights reserved.
                    </p>

                    <div className="footer-bottom-links">

                        <Link to="/privacy">
                            Privacy Policy
                        </Link>

                        <Link to="/terms">
                            Terms of Use
                        </Link>

                    </div>

                    <a
                        href="#top"
                        className="footer-back-top"
                        aria-label="Back to top"
                    >
                        ↑
                    </a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
