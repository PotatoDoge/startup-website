import React from 'react';
import './Home.css'
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Achievements from "../../components/Achievements/Achievements";

const Home = () => {

    return (
        <div>
            <Header/>
            <div className="header-spacer"></div>
            <About/>
            <Achievements/>
        </div>
    );
}

export default Home;