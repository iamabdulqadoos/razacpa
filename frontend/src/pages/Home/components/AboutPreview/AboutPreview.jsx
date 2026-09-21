import React from "react";
import "./AboutPreview.css";

const AboutPreview = () => {
    return (
        <section className="about-preview">
            <div className="about-preview-container">

                {/* LEFT SIDE */}
                <div className="about-preview-content">

                    <span className="about-preview-label">
                        ABOUT RAZA CPA
                    </span>

                    <h2 className="about-preview-title">
                        Your Trusted Partner in
                        <span> Financial Success</span>
                    </h2>

                    <p className="about-preview-description">
                        At Raza CPA, PLLC, we provide reliable accounting,
                        taxation, and business advisory solutions designed
                        to help individuals and businesses make confident
                        financial decisions.
                    </p>

                    <p className="about-preview-description">
                        Our approach combines professional expertise with
                        personalized service, helping our clients manage
                        their finances, stay compliant, and achieve their
                        long-term goals.
                    </p>

                    <div className="about-preview-features">

                        <div className="about-preview-feature">
                            <div className="about-feature-icon">
                                ✓
                            </div>

                            <div>
                                <h4>Professional Expertise</h4>
                                <p>
                                    Experienced financial guidance tailored
                                    to your needs.
                                </p>
                            </div>
                        </div>

                        <div className="about-preview-feature">
                            <div className="about-feature-icon">
                                ✓
                            </div>

                            <div>
                                <h4>Personalized Service</h4>
                                <p>
                                    Solutions designed around your financial
                                    goals.
                                </p>
                            </div>
                        </div>

                    </div>

                    <a
                        href="/about"
                        className="about-preview-button"
                    >
                        Learn More About Us
                        <span>→</span>
                    </a>

                </div>


                {/* RIGHT SIDE */}
                <div className="about-preview-visual">

                    <div className="about-preview-main-card">

                        <div className="about-card-header">
                            <div className="about-card-logo">
                                R
                            </div>

                            <div>
                                <strong>Raza CPA</strong>
                                <span>Professional Accounting</span>
                            </div>
                        </div>


                        <div className="about-card-body">

                            <span className="about-card-label">
                                OUR APPROACH
                            </span>

                            <h3>
                                Financial Clarity.
                                <br />
                                Business Confidence.
                            </h3>

                            <p>
                                We simplify complex financial matters so
                                you can focus on what matters most.
                            </p>

                        </div>


                        <div className="about-card-footer">

                            <div className="about-card-stat">
                                <strong>01</strong>
                                <span>Expertise</span>
                            </div>

                            <div className="about-card-stat">
                                <strong>02</strong>
                                <span>Trust</span>
                            </div>

                            <div className="about-card-stat">
                                <strong>03</strong>
                                <span>Growth</span>
                            </div>

                        </div>

                    </div>


                    <div className="about-floating-card about-floating-top">

                        <div className="about-floating-icon">
                            $
                        </div>

                        <div>
                            <span>Financial</span>
                            <strong>Solutions</strong>
                        </div>

                    </div>


                    <div className="about-floating-card about-floating-bottom">

                        <div className="about-floating-icon">
                            ✓
                        </div>

                        <div>
                            <span>Trusted</span>
                            <strong>Professional</strong>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutPreview;