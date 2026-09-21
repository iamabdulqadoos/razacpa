import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">

            <div className="navbar-container">

                {/* =========================================
                    LOGO / BRAND
                ========================================= */}

                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >

                    <div className="navbar-logo-mark">
                        R
                    </div>

                    <div className="navbar-logo-text">

                        <span className="navbar-logo-name">
                            Raza CPA
                        </span>

                        <span className="navbar-logo-subtitle">
                            PLLC
                        </span>

                    </div>

                </Link>


                {/* =========================================
                    DESKTOP NAVIGATION
                ========================================= */}

                <nav className="navbar-menu">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        Services
                    </NavLink>


                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        Pricing
                    </NavLink>


                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        Blog
                    </NavLink>


                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `navbar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                </nav>


                {/* =========================================
                    DESKTOP ACTION
                ========================================= */}

                <div className="navbar-action">

                    <Link
                        to="/appointment"
                        className="navbar-appointment"
                    >
                        Book an Appointment
                        <span>→</span>
                    </Link>

                </div>


                {/* =========================================
                    MOBILE MENU BUTTON
                ========================================= */}

                <button
                    type="button"
                    className={`navbar-toggle ${
                        menuOpen ? "open" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>


            {/* =========================================
                MOBILE NAVIGATION
            ========================================= */}

            <div
                className={`mobile-menu ${
                    menuOpen ? "mobile-menu-open" : ""
                }`}
            >

                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    Home
                </NavLink>


                <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    About
                </NavLink>


                <NavLink
                    to="/services"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    Services
                </NavLink>


                <NavLink
                    to="/pricing"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    Pricing
                </NavLink>


                <NavLink
                    to="/blog"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    Blog
                </NavLink>


                <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                        `mobile-nav-link ${
                            isActive ? "active" : ""
                        }`
                    }
                >
                    Contact
                </NavLink>


                <Link
                    to="/appointment"
                    onClick={closeMenu}
                    className="mobile-appointment"
                >
                    Book an Appointment
                    <span>→</span>
                </Link>

            </div>

        </header>
    );
};

export default Navbar;