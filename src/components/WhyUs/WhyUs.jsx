import React from 'react';
import group_image from '../../assets/group-image.jpg'
import './WhyUs.css'
import {FaCheckCircle} from "react-icons/fa";
import guyInComputer from "../../assets/guy-in-computer.jpg";


const WhyUs = () => {
    return (
        <div className="why-us">
            <h1>Why us?</h1>
            <div className="why-us-content">
                <div className="why-us-left-image">
                    <div className="why-us-image-rectangle">
                        <img src={group_image} alt=""/>
                    </div>
                </div>
                <div className="why-us-right-text">
                    <div className="why-us-reason">
                    <div className="why-us-reason-image">
                            <FaCheckCircle id="circle-icon"/>
                        </div>
                        <div className="why-us-reason-text">
                            <h1>Customized solution</h1>
                            <p>Tech Solutions Group provides personalized software and IT services tailored to each
                                client's specific needs.</p>
                        </div>
                    </div>
                    <div className="why-us-reason">
                        <div className="why-us-reason-image">
                            <FaCheckCircle id="circle-icon"/>
                        </div>
                        <div className="why-us-reason-text">
                            <h1>Experienced Professionals</h1>
                            <p>Seasoned experts bring industry knowledge and top-quality service to deliver innovative solutions for clients.</p>
                        </div>
                    </div>
                    <div className="why-us-reason">
                        <div className="why-us-reason-image">
                            <FaCheckCircle id="circle-icon"/>
                        </div>
                        <div className="why-us-reason-text">
                            <h1>Wide Range of Services</h1>
                            <p>Tech Solutions Group offers software development, web design, mobile app development, and IT infrastructure support.</p>
                        </div>
                    </div>
                    <div className="why-us-reason">
                        <div className="why-us-reason-image">
                            <FaCheckCircle id="circle-icon"/>
                        </div>
                        <div className="why-us-reason-text">
                            <h1>Commitment to Innovation</h1>
                            <p>Dedicated to staying on the cutting edge of technology trends, helping clients optimize operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;