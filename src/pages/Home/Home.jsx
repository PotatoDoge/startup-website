import React from 'react';
import './Home.css'
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";
import WhyUs from "../../components/WhyUs/WhyUs";
import SolutionsBanner from "../../components/SolutionsBanner/SolutionsBanner";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {

    return (
        <div>
            <Header/>
            <div className="header-spacer"></div>
            <About/>
            <Achievements/>
            <WhyUs/>
            <SolutionsBanner/>
            <Reviews/>
        </div>
    );
}

export default Home;