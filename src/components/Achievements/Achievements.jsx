import React from 'react';
import CountUp from 'react-countup';
import './Achievements.css';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Achievements = () => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1
    });

    return (
        <div className="achievements" ref={ref}>
            <div className="stat">
                <h3>
                    {isVisible ? <CountUp start={0} end={6} duration={2} /> : '0'}
                </h3>
                <hr />
                <p>Specialists</p>
            </div>
            <div className="stat">
                <h3>
                    {isVisible ? <CountUp start={0} end={7} duration={2} /> : '0'}
                </h3>
                <hr />
                <p>Completed projects</p>
            </div>
            <div className="stat">
                <h3>
                    {isVisible ? <CountUp start={0} end={220} duration={2} /> : '0'}
                </h3>
                <hr />
                <p>Satisfied customers</p>
            </div>
            <div className="stat">
                <h3>
                    {isVisible ? <CountUp start={0} end={6} duration={2} /> : '0'}
                </h3>
                <hr />
                <p>Projects in progress</p>
            </div>
        </div>
    );
};

export default Achievements;
