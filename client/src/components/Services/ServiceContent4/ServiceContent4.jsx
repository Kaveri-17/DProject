import React, { useState, useRef } from 'react';
import './ServiceContent4.css';

const AccordionItem = ({ title, isOpen, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div className="accordion-item">
            <div
                className="accordion-header"
                onClick={onClick}
            >
                <span className="accordion-title">{title}</span>
                <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </div>
            <div
                className={`accordion-content ${isOpen ? 'open' : ''}`}
                ref={contentRef}
                style={isOpen ? { maxHeight: contentRef.current?.scrollHeight + 'px' } : { maxHeight: 0 }}
            >
                <div className="accordion-content-inner">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

function ServiceContent4() {
    const [openItem, setOpenItem] = useState(null);

    const items = [
        'Mauris Blandit Aliquet',
        'Proin Eget Tortor',
        'Pellentesque in Ipsum'
    ];

    return (
        <div className="service-section">
            <div className="service-wrapper">
                <div className="service-layout">
                    <div className="service-info">
                        <h2 className="service-title">Device Repair & Troubleshooting</h2>
                        <p className="service-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                        </p>

                        <div className="accordion-wrapper">
                            {items.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item}
                                    isOpen={openItem === index}
                                    onClick={() => setOpenItem(openItem === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="service-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                            alt="Laptop repair"
                            className="service-image"
                        />
                    </div>
                </div>
            </div>

            <div className="wave-shape-container">
                <svg
                    viewBox="0 0 1440 120"
                    className="wave-shape"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ServiceContent4;