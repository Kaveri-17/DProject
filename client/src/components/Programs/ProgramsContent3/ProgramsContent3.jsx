import React from 'react';
import './ProgramsContent3.css'; // Include a separate CSS file for styles
import image3 from '../../../assets/images/programs/image3.webp'
import image4 from '../../../assets/images/programs/image4.webp'
import image5 from '../../../assets/images/programs/image5.webp'
import image6 from '../../../assets/images/programs/image6.webp'
const ProgramsContent3 = () => {
    return (
        <div className="programs-content">
            <header className="programs-header">
                <h1>Why choose DLithe for your programs?</h1>
                <p style={{ textAlign: "justify" }}>
                    At DLithe, we understand that ambition is the driving force behind success. We are committed to providing an environment where your aspirations can flourish. Our programs offer a unique opportunity to immerse yourself in the dynamic world of professional services. You'll gain invaluable hands-on experience, working on challenging projects that will push your limits and inspire you to reach new heights.

                    We believe in fostering a culture of growth and development. Our programs are designed to equip you with the skills and knowledge you need to succeed in your career. You'll work alongside experienced professionals who will mentor and guide you, providing valuable insights and support along the way.

                    At DLithe, you'll not only gain professional skills, but you'll also experience our unique and inclusive culture. You'll have the chance to connect with talented individuals from diverse backgrounds and build lasting relationships. Our internships are more than just a job; they are a stepping stone towards a fulfilling and rewarding career.

                    We invite you to explore the possibilities and discover how DLithe can help you turn your ambitions into reality.
                </p>
            </header>
            <section className="programs-section">
                <div className="program-card">
                    <img src={image4} />
                    <h3>Impactful projects</h3>
                    <p>
                        Get ready to dive into real-life projects! This is your opportunity to explore your chosen field, sharpen your skills, and let your curiosity soar.
                    </p>
                </div>
                <div className="program-card">
                    <img src={image3} alt="Mentorship" />
                    <h3>Mentorship</h3>
                    <p>
                        Your success is our priority. Throughout your program, a dedicated mentorship team will be there to work with you and support you every step of the way, offering guidance, answering questions, and providing feedback to help you thrive.

                    </p>
                </div>
                <div className="program-card">
                    <img src={image5} alt="Growth & development" />
                    <h3>Growth & development</h3>
                    <p>
                        Throughout your internship, you'll have access to various formal and informal growth and development opportunities to empower your success.
                    </p>
                </div>
                <div className="program-card">
                    <img src={image6} alt="Purpose & DEI" />
                    <h3>Diversity, Equality & Inclusion</h3>
                    <p>
                        Our mentoring emphasizes creating a safe and inclusive space for everyone, regardless of their background or identity. We actively listen, show empathy, and challenge biases to ensure everyone feel valued, respected, and have equal opportunities to grow and succeed.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ProgramsContent3;
