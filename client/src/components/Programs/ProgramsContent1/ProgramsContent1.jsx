import React from 'react';

const ProgramsContent1 = () => {
    const testimonials = [
        {
            text: "The diverse projects and abundant learning opportunities during my internship at Deloitte significantly prepared me for a dynamic career. The skills and connections I gained that summer remain invaluable assets.",
            author: "Santosh P",
            role: "Java Full Stack Intern",
        },
        {
            text: "My internship at DLithe provided a wealth of learning and development opportunities, equipping me with valuable skills and connections that continue to benefit my career even today.",
            author: "Vriksha Patil",
            role: "IoT Embedded Systems Intern",
        },
        {
            text: "I am incredibly grateful for my internship at DLithe. The variety of projects and the support I received helped me develop essential skills and build meaningful connections. These experiences have been instrumental in shaping my career trajectory.",
            author: "Jason",
            role: "Python AI ML Intern",
        },
    ];

    const containerStyle = {
        backgroundColor: '#f8f9fa',
        padding: '40px 20px',

    };

    const testimonialStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        padding: '30px',
        marginBottom: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        borderLeft: '5px solid #15314e',

    };

    const textStyle = {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '10px',
    };

    const authorStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    const roleStyle = {
        color: '#555',
    };

    return (
        <div style={containerStyle} >
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    style={{
                        ...testimonialStyle,
                        maxWidth: '1200px',
                        margin: '10px auto', // Center alignment for testimonials
                    }}
                >
                    <p style={{ ...textStyle, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
                        "{testimonial.text}"
                    </p>
                    <p style={{ ...authorStyle, fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                        {testimonial.author}
                    </p>
                    <p style={{ ...roleStyle, fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}>
                        {testimonial.role}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProgramsContent1;
