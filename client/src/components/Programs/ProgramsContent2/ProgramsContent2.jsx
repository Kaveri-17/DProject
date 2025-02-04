import React from 'react';
import './ProgramsContent2.css';
import image2 from '../../../assets/images/programs/image2.webp';

function ProgramsContent2() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Header */}
            <header style={{
                backgroundColor: '#15314e',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div>
                    <h1 style={{ color: '#fff', margin: 0 }}>DLithe</h1>
                </div>
            </header>

            {/* Content Section */}
            <section className="content-section">
                <div className="text-content">
                    <h2>Need help figuring out which opportunities are a fit for you?</h2>
                    <p>
                        Explore Your Fit is an interactive tool designed to help you explore business areas and opportunities within Deloitte that may be a good fit based on your background and interests.
                    </p>
                    <button className="cta-button">
                        Explore with us
                    </button>
                </div>
                <div className="image-content">
                    <img
                        src={image2}
                        alt="Person smiling"
                    />
                </div>
            </section>
        </div>
    );
}

export default ProgramsContent2;
