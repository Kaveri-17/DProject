import React from 'react';
import './ServiceContent3.css';

const ServiceContent3 = () => {
    const capsuleStyle = {
        width: '90%',
        height: '600px',
        backgroundImage: 'linear-gradient(140deg, rgba(0, 72, 114, 0.9) 0%, #291160 100%)',
        borderTopRightRadius: '300px',
        borderBottomRightRadius: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        margin: 'auto',
        marginTop: '20vh',
        marginBottom: '20vh',
        padding: '1rem',
    };

    return (
        <section className="hero">
            <div style={capsuleStyle}>
                <div className="content">
                    <h1>We Create Fully Connected Systems So You Can Focus On Your Business</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <button className="cta-button">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default ServiceContent3;
