import React from 'react';
import './InternshipContent.css';
import image1 from '../../../assets/images/programs/image1.webp'
const InternshipContent = () => {
    return (
        <div className="main-internship" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            {/* Header */}
            <header style={{ color: '#000', padding: '1rem', backgroundColor: '#fff' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>DLithe</h1>
            </header>

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section className="hero-section"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '2rem',
                        background: '#fff', // Ensure the section background is white
                    }}
                >
                    <div style={{ flex: 1, marginRight: '2rem' }}>
                        <h2 style={{ fontSize: '4rem', fontFamily: `'Share Tech', Helvetica, Arial, Lucida, sans-serif` }}>Programs at DLithe</h2>
                        <p style={{ marginTop: '1rem', fontSize: '1.4rem', fontFamily: `'Open Sans', Calibri, Helvetica, sans-serif` }}>
                            Embarking on an professional journey is not just about gaining work experience, but an opportunity to bring your academic knowledge to life in the dynamic world of business. Discover your potential at DLithe, where you will experience Agile way of working with a blend of Domain, Process and Technology.
                        </p>
                        <button className="cta-button">
                            Explore The Opportunities
                        </button>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img
                            className="internship-image"
                            src={image1}
                            alt="Internships at DLithe"
                            style={{ maxWidth: '100%', borderRadius: '0.5rem' }}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InternshipContent;
