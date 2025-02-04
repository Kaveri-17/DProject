import React from "react";
import './ContactContent2.css';

const Waves = () => {
    return (
        <div className="wave-container">
            <svg style={{ marginTop: "-150px" }}
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 380"
            >
                <path
                    fill="rgb(0, 39, 77)"
                    fillOpacity="1"
                    d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,380L1392,380C1344,380,1248,380,1152,380C1056,380,960,380,864,380C768,380,672,380,576,380C480,380,384,380,288,380C192,380,96,380,48,380L0,380Z"
                ></path>
            </svg>

            {/* Contact Form */}

            <div className="login-form-container">
                <img
                    src="https://img.freepik.com/premium-vector/woman-working-with-laptop_180868-1792.jpg"
                    alt="Woman working with laptop"
                    className="form-image" style={{ marginLeft: "-120px" }}
                />
                <form className="login-form">
                    <h2>Contact Us</h2>
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <input type="tel" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <select id="purpose">
                            <option value="">Purpose of Contact</option>
                            <option value="internship">I am looking for internship opportunities</option>
                            <option value="certifications">I am looking for certifications</option>
                            <option value="bootcamp">I am looking for bootcamp (train & deploy)</option>
                            <option value="hr">I am looking for human resources</option>
                            <option value="training">I am looking for training services for the employees</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="login-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Waves;
