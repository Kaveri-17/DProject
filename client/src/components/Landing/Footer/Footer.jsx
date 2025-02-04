import React, { useState } from "react";
import { FaBuilding, FaClock, FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';
import "./Footer.css";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/form', formData);
            alert('Form submitted successfully');
            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('Error submitting form');
        }
    };

    return (
        <footer className="footer">
            <div className="animated-links">
                <a href="#live-chat" className="link">LIVE CHAT</a>
                <a href="#our-services" className="link">OUR SERVICES</a>
                <a href="#free-quote" className="link">GET A FREE QUOTE</a>
            </div>

            <h2 className="h2-footer">We're Here To Help!</h2>

            <div className="footer-content">
                {/* Form Section */}
                <div className="contact-us">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" style={{ fontWeight: "normal", color: "white" }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" style={{ fontWeight: "normal", color: "white" }}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={{ fontWeight: "normal", color: "white" }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" style={{ fontWeight: "normal", color: "white" }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="quote-btn-1">Submit</button>
                        </div>
                    </form>
                </div>

                {/* Info Section */}
                <div className="info-container">
                    <div className="info-block">
                        <FaBuilding className="info-icon building-icon" />
                        <div>
                            <h3 style={{ color: "rgb(255, 165, 0)" }}>Office</h3>
                            <p>No. 280. <br />3rd Floor SLV ARCADE.<br /> 100 Feet Ring Road,<br /> BSK 3rd Stage,<br /> Bangalore-560070</p>
                        </div>
                    </div>
                    <div className="info-block">
                        <FaClock className="info-icon clock-icon" />
                        <div>
                            <h3 style={{ color: "rgb(255, 165, 0)" }}>Hours</h3>
                            <p>M-F: 8am - 10pm<br />S-S: Closed</p>
                        </div>
                    </div>
                    <div className="info-block">
                        <FaPhoneAlt className="info-icon phone-icon" />
                        <div>
                            <h3 style={{ color: "rgb(255, 165, 0)" }}>Call Us</h3>
                            <p>+91-9008815252</p>
                        </div>
                    </div>
                    <div className="info-block">
                        <FaPhoneAlt className="info-icon phone-icon" />
                        <div>
                            <h3 style={{ color: "rgb(255, 165, 0)" }}>Email ID</h3>
                            <p>info@dlithe.com</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-container">
                    <iframe
                        title="Dlithe Consultancy Services Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9263534391167!2d77.5435929!3d12.9273945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff22048982f%3A0x65ea1a29c8a1df5!2sDlithe%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1615093030434!5m2!1sen!2sin"
                        width="450"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
