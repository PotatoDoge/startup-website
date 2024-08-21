import React from 'react';
import './Review.css'
import profile from '../../assets/profile.jpg';
import profile2 from '../../assets/profile-2.jpg';
import profile3 from '../../assets/profile-3.jpg';

const Reviews = () => {
    return (
        <div className="reviews">
            <div className="reviews-title">
                <h1>Reviews</h1>
            </div>
            <div className="reviews-content">
                <div className="review-content">
                    <div className="reviewer-image">
                        <img src={profile}/>
                    </div>
                    <div className="reviewer-text">
                        <h3>John Paul</h3>
                        <p>Tech Solutions Group exceeded my expectations with their professional, knowledgeable, and
                            efficient team. Perfect custom software solution.</p>
                    </div>
                </div>
                <div className="review-content">
                    <div className="reviewer-image">
                        <img src={profile2}/>
                    </div>
                    <div className="reviewer-text">
                        <h3>Rose Doe</h3>
                        <p>I highly recommend Tech Solutions Group for IT consulting. They improved our processes and
                            online
                            presence, increasing efficiency and profitability.</p>
                    </div>
                </div>
                <div className="review-content">
                    <div className="reviewer-image">
                        <img src={profile3}/>
                    </div>
                    <div className="reviewer-text">
                        <h3>Jane Doe</h3>
                        <p>Working with Tech Solutions Group was a great experience. Their attention to detail and
                            dedication made everything smooth. Highly recommend.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;