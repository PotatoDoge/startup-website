import React from 'react';
import './SolutionsBanner.css';
import {FaComputer} from "react-icons/fa6";
import {FaMobile} from "react-icons/fa";
import {GoBrowser} from "react-icons/go";

const SolutionsBanner = () => {
    return (
        <div className="solutions-banner">
            <div className="solutions-content">
                <div className="solutions-content-cards">
                    <h1>Innovative solutions</h1>
                    <div className="solutions-cards">
                        <div className="card">
                            <GoBrowser id={"icon"}/>
                            <h2>Web Apps</h2>
                            <p>Our web applications are designed to deliver responsive, dynamic, and scalable solutions
                                for businesses of all sizes. Whether you need a simple website or a complex web-based
                                platform, we've got you covered.</p>
                        </div>
                        <div className="card">
                            <FaMobile id="icon"/>
                            <h2>Mobile Apps</h2>
                            <p>We create mobile applications that provide seamless experiences on both iOS and Android.
                                Our apps are designed with a focus on user experience and performance, ensuring your
                                users stay engaged.</p>
                        </div>
                        <div className="card">
                            <FaComputer id="icon"/>
                            <h2>Desktop Apps</h2>
                            <p>Our desktop applications are tailored to meet your specific needs, providing powerful and
                                reliable software solutions that can run on any major operating system, including
                                Windows, macOS, and Linux.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SolutionsBanner;
