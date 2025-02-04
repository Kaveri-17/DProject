import React from 'react';
import './LandingPagePart1.css';

const Content = () => {
    return (
        <div className="page-container">


            <div className="content-wrapper">
                <div className="content-card">
                    <div className="text-section">

                        <h2 className="heading">Professional IT Services & Technology Consulting</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                            nostrud exercitation ullamco.
                        </p>
                        <button className="cta-button" >Learn More</button>
                    </div>

                    <div className="image-section">
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Technology Consulting"
                            className="feature-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;