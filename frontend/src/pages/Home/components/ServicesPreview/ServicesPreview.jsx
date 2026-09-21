
import React from "react";
import "./ServicesPreview.css";

const services = [
    {
        number: "01",
        title: "Accounting",
        description:
            "Reliable accounting services that keep your financial records accurate, organized, and easy to understand.",
        tag: "Financial Clarity",
        symbol: "01",
    },
    {
        number: "02",
        title: "Tax Planning",
        description:
            "Strategic tax planning and preparation to help you manage your tax responsibilities with greater confidence.",
        tag: "Tax Strategy",
        symbol: "%",
    },
    {
        number: "03",
        title: "Bookkeeping",
        description:
            "Professional bookkeeping that keeps your transactions, records, and financial information up to date.",
        tag: "Stay Organized",
        symbol: "≡",
    },
];

const ServicesPreview = () => {
    return (
        <section className="services-preview">
            <div className="services-preview-container">

                {/* =========================================
                    SECTION HEADER
                ========================================= */}

                <div className="services-preview-header">

                    <span className="services-preview-label">
                        Our Services
                    </span>

                    <h2>
                        Financial solutions
                        <br />
                        <span>built around you.</span>
                    </h2>

                    <div className="services-preview-intro">

                        <p>
                            From everyday accounting to strategic tax support,
                            Raza CPA provides practical financial solutions
                            designed around your needs.
                        </p>

                        <a
                            href="/services"
                            className="services-view-all"
                        >
                            View all services
                            <span>↗</span>
                        </a>

                    </div>

                </div>


                {/* =========================================
                    SERVICE CARDS
                ========================================= */}

                <div className="services-card-grid">

                    {services.map((service, index) => (
                        <article
                            key={service.number}
                            className={`service-card ${
                                index === 0
                                    ? "service-card-featured"
                                    : ""
                            }`}
                        >

                            {/* Card Top */}

                            <div className="service-card-top">

                                <span className="service-card-number">
                                    {service.number}
                                </span>

                                <div className="service-card-symbol">
                                    {service.symbol}
                                </div>

                            </div>


                            {/* Card Content */}

                            <div className="service-card-content">

                                <span className="service-card-tag">
                                    {service.tag}
                                </span>

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                            </div>


                            {/* Card Link */}

                            <a
                                href="/services"
                                className="service-card-link"
                                aria-label={`Explore ${service.title}`}
                            >
                                <span>
                                    Explore service
                                </span>

                                <span className="service-card-arrow">
                                    ↗
                                </span>
                            </a>


                            {/* Decorative Circles */}

                            <div
                                className="service-card-decoration"
                                aria-hidden="true"
                            ></div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ServicesPreview;
