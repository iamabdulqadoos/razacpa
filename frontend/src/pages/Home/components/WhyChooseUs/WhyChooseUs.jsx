
import React from "react";
import "./WhyChooseUs.css";

const reasons = [
    {
        number: "01",
        title: "Personalized Approach",
        description:
            "Every client has different goals and financial circumstances. We take the time to understand your situation and provide solutions built around your needs.",
    },
    {
        number: "02",
        title: "Practical Expertise",
        description:
            "We turn complex financial information into clear, practical guidance that helps you understand your numbers and make informed decisions.",
    },
    {
        number: "03",
        title: "Long-Term Partnership",
        description:
            "Our goal goes beyond completing a tax return or maintaining your books. We aim to provide dependable financial support as your needs evolve.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="why-choose-us-container">

                {/* =========================================
                    HEADER
                ========================================= */}

                <div className="why-choose-us-header">

                    <div className="why-choose-us-heading">

                        <span className="why-choose-us-label">
                            WHY RAZA CPA
                        </span>

                        <h2>
                            Financial guidance
                            <br />
                            <span>that goes beyond numbers.</span>
                        </h2>

                    </div>

                    <div className="why-choose-us-intro">

                        <p>
                            We believe accounting should do more than
                            record the past. It should help you understand
                            where you are and make better decisions about
                            where you're going.
                        </p>

                    </div>

                </div>


                {/* =========================================
                    REASONS
                ========================================= */}

                <div className="why-choose-us-list">

                    {reasons.map((reason) => (
                        <article
                            className="why-reason"
                            key={reason.number}
                        >

                            <div className="why-reason-number">
                                {reason.number}
                            </div>

                            <div className="why-reason-content">

                                <h3>
                                    {reason.title}
                                </h3>

                                <p>
                                    {reason.description}
                                </p>

                            </div>

                            <div className="why-reason-arrow">
                                ↗
                            </div>

                        </article>
                    ))}

                </div>


                {/* =========================================
                    BOTTOM STATEMENT
                ========================================= */}

                <div className="why-choose-us-bottom">

                    <span>
                        ACCOUNTING • TAX • ADVISORY
                    </span>

                    <p>
                        Clear numbers. Practical advice.
                        Confident decisions.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;

