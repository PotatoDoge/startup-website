import React, {useState} from 'react';
import './Offer.css';
import OfferInfo from "../../utils/constants/OfferInfo";

const Offer = () => {
    const [selected, setSelected] = useState('web-apps');

    // Function to replace newlines with <br> tags
    const formatContent = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br/>
            </React.Fragment>
        ));
    };

    return (
        <div className="offer">
            <h1>What we offer</h1>
            <div className="services-content">
                <div className="services-content-options">
                    <p
                        className={selected === 'web-apps' ? 'selected' : ''}
                        onClick={() => setSelected('web-apps')}
                    >
                        Web Apps
                    </p>
                    <p
                        className={selected === 'mobile-apps' ? 'selected' : ''}
                        onClick={() => setSelected('mobile-apps')}
                    >
                        Mobile Apps
                    </p>
                    <p
                        className={selected === 'desktop-apps' ? 'selected' : ''}
                        onClick={() => setSelected('desktop-apps')}
                    >
                        Desktop Apps
                    </p>
                    <p
                        className={selected === 'websites' ? 'selected' : ''}
                        onClick={() => setSelected('websites')}
                    >
                        Websites
                    </p>
                    <p
                        className={selected === 'consulting' ? 'selected' : ''}
                        onClick={() => setSelected('consulting')}
                    >
                        IT Consulting
                    </p>
                    <p
                        className={selected === 'data-analysis' ? 'selected' : ''}
                        onClick={() => setSelected('data-analysis')}
                    >
                        Data Analysis
                    </p>
                </div>
                <div className="services-content-information">
                    <div className="services-content-information-text">
                        <p id="selected-info">{formatContent(OfferInfo.content[selected].text)}</p>
                    </div>
                    <div className="services-content-information-image">
                        <img src={OfferInfo.content[selected].image} alt={selected}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
