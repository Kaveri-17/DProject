import React from "react";
import "./ProgramsContent5.css";

const ProgramsContent5 = () => {
    return (
        <div className="programs-content5-container">
            <div className="programs-content5">
                {/* Left Section: Image */}
                <div className="left-section">
                    <img
                        src="https://files.oaiusercontent.com/file-StP8SKQiRpqnwCQ5w87hen?se=2025-01-19T14%3A47%3A21Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcc7398e2-08e2-49ee-b248-99a12a42f58f.webp&sig=1%2BqDNNc7heTP6lMxMkqox0%2BntfAfln64Nvfc9M9UZPE%3D"
                        alt="Smiling woman with laptop"
                        className="left-image"
                    />
                </div>

                {/* Right Section: Text */}
                <div className="right-section">
                    <h2>Apply now</h2>
                    <p>
                        Are you ready to discover? Our programs are designed to invest in you,<br /> your potential, and your
                        future.
                    </p>
                    <div className="links">
                        <a href="#">Internship opportunities →</a>
                        <a href="#">Certification Programs →</a>
                        <a href="#">Bootcamp →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramsContent5;
