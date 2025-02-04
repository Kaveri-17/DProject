import React from 'react';
import './AboutContent4.css'; // Import the CSS file

function AboutContent4() {
    const teamMembers = [
        { name: "Alice Johnson", designation: "Team Lead", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Bob Smith", designation: "Senior Developer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Charlie Brown", designation: "UI/UX Designer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Diana Prince", designation: "Backend Developer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Evan Davis", designation: "QA Engineer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Fiona Green", designation: "Frontend Developer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "George Hill", designation: "Project Manager", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" },
        { name: "Hannah White", designation: "DevOps Engineer", image: "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg" }
    ];

    return (
        <div className="about-container">
            <h1 className="about-heading" style={{ fontSize: "50px" }}>Meet Our Team</h1>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h2 className="team-name">{member.name}</h2>
                        <p className="team-designation">{member.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutContent4;
