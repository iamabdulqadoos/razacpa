import React from "react";
import "./Home.css";

import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";

const Home = () => {
    return (
        <main className="home-page">

            <Hero />

            <AboutPreview />

        </main>
    );
};

export default Home;