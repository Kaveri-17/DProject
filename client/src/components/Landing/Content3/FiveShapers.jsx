import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTools, faLifeRing, faCloud, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './FiveShapers.css';

const FiveSpheres = () => {
    return (
        <section className="five-spheres">
            <div className="content-container">
                <div className="content">
                    <h2>Five Spheres. One Mission.</h2>
                    <p style={{ color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="spheres-container">
                    <div className="row">
                        <div className="sphere blue">
                            <FontAwesomeIcon icon={faLock} size="2x" />
                            <span>SECURE</span>
                        </div>
                        <div className="sphere gray">
                            <FontAwesomeIcon icon={faTools} size="2x" />
                            <span>REPAIR</span>
                        </div>
                        <div className="sphere orange">
                            <FontAwesomeIcon icon={faLifeRing} size="2x" />
                            <span>SUPPORT</span>
                        </div>
                    </div>
                    <div className="row middle-row">
                        <div className="sphere navy">
                            <FontAwesomeIcon icon={faCloud} size="2x" />
                            <span>CONNECT</span>
                        </div>
                        <div className="sphere light-blue">
                            <FontAwesomeIcon icon={faChartBar} size="2x" />
                            <span>MONITOR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FiveSpheres;
