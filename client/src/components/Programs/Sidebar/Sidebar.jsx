import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [hoveredSection, setHoveredSection] = useState('');

    const sections = [
        { id: 'internship', label: 'Programs at DLithe' },
        { id: 'program-cards', label: ' Freshers to Experience ' },
        { id: 'content-1', label: 'Testimonials' },
        { id: 'content-2', label: 'Right opportunities for you' },
        { id: 'content-3', label: 'Why choose DLithe ' },
        { id: 'content-4', label: 'Life at DLithe' },
        { id: 'content-5', label: 'Apply Now' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="disc-container">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="disc-wrapper"
                        onMouseEnter={() => setHoveredSection(section.id)}
                        onMouseLeave={() => setHoveredSection('')}
                    >
                        {index !== 0 && <div className="line" />}
                        <div
                            className={`disc ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => {
                                const element = document.getElementById(section.id);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                    setActiveSection(section.id);
                                }
                            }}
                        />
                        {hoveredSection === section.id && (
                            <div className="sidebar-content">
                                <div>{section.label}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
