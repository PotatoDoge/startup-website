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
                        <p>Welcome to our company! We specialize in software engineering and IT consulting services
                            tailored
                            to
                            meet the unique needs of each client. Our team of experts is dedicated to creating custom
                            solutions,
                            including software, desktop apps, websites, webapps, mobile apps, and IT infrastructure,
                            designed to
                            optimize efficiency and drive success for your business.</p>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="second-text">
                        <p>With a focus on innovation and
                            cutting-edge
                            technology, we are committed to delivering high-quality products that exceed expectations.
                            Whether
                            you are a small startup or a large corporation, we have the skills and expertise to help you
                            achieve
                            your goals. Contact us today to learn more about how we can elevate your company to the next
                            level.
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