import React, { useState } from "react";
import './ProgramCards.css';

const ProgramCards = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const renderContent = () => {
        switch (activeTab) {
            case "tab1":
                return (
                    <div className="tab-section">
                        <div className="tab-content">
                            <p>
                                <i><strong>Enhanced Skills:</strong></i> Gain valuable technical, soft, and professional skills crucial for the modern job market.<br />
                                <i><strong>Work experience:</strong></i> Experience agile way of working, proof of concept development from Ideation to Implementation.<br />
                                <i><strong>Increased Employability:</strong></i> Improve your chances of landing a good job by making yourself a more attractive candidate to potential employers.<br />
                                <i><strong>Career Advancement:</strong></i> Boost your career prospects by developing in-demand skills that can help you climb the professional ladder.<br />
                                <i><strong>Industry Exposure:</strong></i> Gain valuable insights into industry trends and best practices.<br />
                                <i><strong>Networking Opportunities:</strong></i> Connect with industry professionals, potential employers, and fellow students.<br />
                                <i><strong>Access to Resources:</strong></i> Gain access to valuable resources like career counseling, job placement assistance, and industry certifications.<br />
                                <i><strong>Competitive Edge:</strong></i> Stand out from the competition in the job market with a unique skillset.<br />
                                <i><strong>Personal Growth:</strong></i> Improve your communication, problem-solving, and critical thinking skills.<br />
                                <i><strong>Digital Branding:</strong></i> Your presence in digital world will increase significantly as you make use of platforms such as Git, LinkedIn, Stackoverflow etc.<br />
                            </p>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/video-id"
                            title="What to Expect as an Intern"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            case "tab2":
                return (
                    <div className="tab-section">
                        <div className="tab-content">
                            <p>Our internship program provides students with a unique opportunity to gain real-world experience, develop in-demand skills, and build a strong professional network. We offer personalized mentorship, a focus on innovation, and exclusive access to industry leaders and cutting-edge technologies. By working on real-world projects that directly impact organizations, students gain valuable hands-on experience and develop a competitive edge in the job market. We also offer flexible learning options, including remote internships and part-time programs, to accommodate diverse student needs. Whether you're interested in specializing in a specific industry, making a social impact, or exploring global opportunities, our program offers a unique and valuable experience that will prepare you for success in your future career.</p>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/video-id"
                            title="Internship Program Overview"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            case "tab3":
                return (
                    <div className="tab-section">
                        <div className="tab-content">
                            <p>Our certification programs stand out by offering a unique blend of practical and theoretical knowledge, delivered by industry-leading experts. We prioritize hands-on learning through real-world projects, simulations, and case studies, ensuring students gain practical skills immediately applicable in the workplace. Our programs are designed to be flexible and accessible, with options for online, in-person, and blended learning formats. We offer personalized support through dedicated mentors, career counseling, and job placement assistance. By choosing our programs, students gain a recognized industry credential, build a strong professional network, and significantly enhance their career prospects in a competitive job market.</p>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/video-id"
                            title="Certification Programs"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            case "tab4":
                return (
                    <div className="tab-section">
                        <div className="tab-content">
                            <p>Our employability boot camp provides a transformative experience that goes beyond traditional job-seeking skills. We equip students with a holistic skillset, including not only resume writing and interview preparation but also essential soft skills like communication, teamwork, problem-solving, and critical thinking. Our intensive, fast-paced program is designed to quickly prepare students for the demands of the modern workplace. We offer personalized coaching, access to a vast network of industry professionals, and guaranteed job interview opportunities. By participating in our boot camp, students gain the confidence and practical skills needed to successfully navigate the job market and launch fulfilling careers. The bootcamp is specific to our client needs. You will undergo rigorous campus to corporate or lateral transformation as per the business needs</p>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/video-id"
                            title="Bootcamp Overview"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tabs">
            <div className="intro">
                <h2 className="h2-programcard">From Freshers to Experience</h2>
                <p className="p-programcard">
                    Wherever you are on your journey, DLithe has opportunities designed to discover your potential and career growth
                </p>
            </div>
            <div className="tab-header">
                <button
                    className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab1")}
                >
                    What Is It In For Me
                </button>
                <button
                    className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab2")}
                >
                    Internship’s
                </button>
                <button
                    className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab3")}
                >
                    Certification Programs
                </button>
                <button
                    className={`tab-button ${activeTab === "tab4" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab4")}
                >
                    Bootcamp’s
                </button>
            </div>
            {renderContent()}
        </div>
    );
};

export default ProgramCards;
