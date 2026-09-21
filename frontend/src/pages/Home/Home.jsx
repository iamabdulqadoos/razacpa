import React from "react";
import "./Home.css";

import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";

const Home = () => {
    return (
        <main className="home-page">

            <Hero />

            <AboutPreview />

            <ServicesPreview />

        </main>
    );
};

export default Home;