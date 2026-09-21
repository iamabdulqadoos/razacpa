import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">

            {/* =========================================
                BACKGROUND DECORATION
            ========================================= */}

            <div className="hero-bg-shape hero-bg-shape-one"></div>

            <div className="hero-bg-shape hero-bg-shape-two"></div>


            {/* =========================================
                HERO CONTAINER
            ========================================= */}

            <div className="hero-container">

                {/* =========================================
                    LEFT CONTENT
                ========================================= */}

                <div className="hero-content">

                    <span className="hero-label">
                        RAZA CPA, PLLC
                    </span>


                    <h1 className="hero-title">
                        Empowering Your
                        <span> Financial Success</span>
                    </h1>


                    <p className="hero-description">
                        Cutting-edge financial solutions tailored for you.
                        From expert accounting and taxation to business
                        incorporation, we're here to help you build,
                        manage, and grow with confidence.
                    </p>


                    {/* =========================================
                        BUTTONS
                    ========================================= */}

                    <div className="hero-actions">

                        <a
                            href="/appointment"
                            className="hero-btn hero-btn-primary"
                        >
                            Book an Appointment
                            <span className="hero-btn-arrow">
                                →
                            </span>
                        </a>


                        <a
                            href="/services"
                            className="hero-btn hero-btn-secondary"
                        >
                            Explore Services
                        </a>

                    </div>


                    {/* =========================================
                        TRUST INFORMATION
                    ========================================= */}

                    <div className="hero-trust">

                        <div className="hero-trust-item">

                            <div className="hero-trust-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Professional
                                </strong>

                                <span>
                                    Financial Guidance
                                </span>
                            </div>

                        </div>


                        <div className="hero-trust-divider"></div>


                        <div className="hero-trust-item">

                            <div className="hero-trust-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Business
                                </strong>

                                <span>
                                    Focused Solutions
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    RIGHT VISUAL
                ========================================= */}

                <div className="hero-visual">

                    {/* Decorative circle */}

                    <div className="hero-circle hero-circle-large"></div>

                    <div className="hero-circle hero-circle-small"></div>


                    {/* Main card */}

                    <div className="hero-card">

                        <div className="hero-card-top">

                            <div className="hero-card-brand">
                                <span className="hero-card-brand-icon">
                                    R
                                </span>

                                <div>
                                    <strong>
                                        Raza CPA
                                    </strong>

                                    <small>
                                        Financial Services
                                    </small>
                                </div>
                            </div>


                            <div className="hero-card-menu">
                                •••
                            </div>

                        </div>


                        {/* Financial overview */}

                        <div className="hero-card-content">

                            <span className="hero-card-label">
                                FINANCIAL OVERVIEW
                            </span>

                            <h3>
                                Business Growth
                            </h3>


                            <div className="hero-card-value">
                                +24.8%
                            </div>


                            {/* Graph */}

                            <div className="hero-chart">

                                <div className="chart-line chart-line-one"></div>

                                <div className="chart-line chart-line-two"></div>

                                <div className="chart-line chart-line-three"></div>

                                <div className="chart-bar chart-bar-one"></div>

                                <div className="chart-bar chart-bar-two"></div>

                                <div className="chart-bar chart-bar-three"></div>

                                <div className="chart-bar chart-bar-four"></div>

                                <div className="chart-bar chart-bar-five"></div>

                                <div className="chart-bar chart-bar-six"></div>

                            </div>

                        </div>


                        {/* Card footer */}

                        <div className="hero-card-footer">

                            <div>

                                <span>
                                    Financial Planning
                                </span>

                                <strong>
                                    On Track
                                </strong>

                            </div>


                            <div className="hero-status">
                                ✓
                            </div>

                        </div>

                    </div>


                    {/* Floating tax card */}

                    <div className="hero-floating-card hero-floating-tax">

                        <div className="floating-icon">
                            $
                        </div>

                        <div>
                            <span>
                                Tax Services
                            </span>

                            <strong>
                                Expert Support
                            </strong>
                        </div>

                    </div>


                    {/* Floating accounting card */}

                    <div className="hero-floating-card hero-floating-accounting">

                        <div className="floating-icon">
                            ✓
                        </div>

                        <div>
                            <span>
                                Accounting
                            </span>

                            <strong>
                                Simplified
                            </strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;