import React from 'react';
import './About.css'
import guyInComputer from '../../assets/guy-in-computer.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about-text">
                <div className="about-text-title">
                    <h1>About us</h1>
                </div>
                <div className="about-text-paragraph">
                    <div className="first-text">
                        <p>We offer <b>tailored software engineering and IT consulting services</b> to meet your
                            business
                            needs. Our experts create custom solutions, including software, desktop, web, and mobile
                            apps, and IT infrastructure, all designed to <b>boost efficiency</b> and <b>drive
                                success.</b></p>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="second-text">
                        <p>
                            We deliver <b>innovative, high-quality</b> products that exceed expectations. Whether you're a
                            startup or a large corporation, our expertise will help you <b>achieve your goals</b>. Contact us
                            today to elevate your business to the next level.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-images">
                <div className="image-rectangle">
                    <img src={guyInComputer} alt="Missing"/>
                </div>
            </div>
        </div>
    )
}

export default About