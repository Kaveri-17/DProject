import React from 'react';
import './ITServices.css'// Import custom CSS for styling
import { FaLaptop, FaShieldAlt, FaCloud, FaRegLifeRing, FaNetworkWired, FaVirus } from 'react-icons/fa';

const ITServices = () => {
    const services = [
        { title: "Laptop Repair / Desktop Repair", color: "#FF8A00", textColor: "#fff", icon: <FaLaptop /> },
        { title: "Virus and Spyware Removal", color: "#fff", textColor: "#000", icon: <FaVirus /> },
        { title: "Data Recovery and Backup Plan", color: "#f4f4f4", textColor: "#000", icon: <FaRegLifeRing /> },
        { title: "Network Design", color: "#f4f4f4", textColor: "#000", icon: <FaNetworkWired /> },
        { title: "Cloud Services", color: "#002b5b", textColor: "#fff", icon: <FaCloud /> },
        { title: "Cyber Security", color: "#FF8A00", textColor: "#fff", icon: <FaShieldAlt /> },
    ];

    return (
        <div className="services-wrapper">
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-container">
                        <div
                            className="service-card"
                            style={{
                                backgroundColor: service.color,
                                color: service.textColor,
                            }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                        </div>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITServices;
