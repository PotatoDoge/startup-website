import React from 'react';
import './Home.css'
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

const Home = () => {

    return (
        <div>
            <Header/>
            <div className="header-spacer"></div>
            <About/>
        </div>
    );
}

export default Home;