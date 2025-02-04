import React from 'react';
import './Part1.css';

const Part1 = ({ title }) => {
    return (
        <>
            <div className="service-container">
                <div className="service-hero">
                    <div className="service-overlay">
                        <div className="service-content">
                            <h1>{title}</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="service-buttons">
                                <button className="quote-btn">Get a Free Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-buttons-wrapper">
                <div className="action-buttons">
                    <button className="contact-btn">Contact Us</button>
                    <button className="chat-btn">Live Chat</button>
                </div>
            </div>
        </>
    );
};

export default Part1;
