import React from "react";
import "./Home.css";

import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <main className="home-page">

            <Hero />

            <AboutPreview />

            <ServicesPreview />

            <WhyChooseUs />

        </main>
    );
};

export default Home;