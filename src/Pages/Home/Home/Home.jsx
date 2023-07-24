// import React from 'react';

import About from "../About/About";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Featured/>
            <About/>
            <Review/>
            <Contact/>
        </div>
    );
};

export default Home;