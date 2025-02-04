import React, { useState } from "react";
import "./ResourcesContent3.css";

function ResourcesContent3() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Mauris Blandit Aliquet",
            answer: "This is the answer for Mauris Blandit Aliquet. It provides detailed information about the topic.",
        },
        {
            question: "Pellentesque in Ipsum",
            answer: "This is the answer for Pellentesque in Ipsum. It provides additional insights and details.",
        },
        {
            question: "Proin Eget Tortor",
            answer: "This is the answer for Proin Eget Tortor. It elaborates on the subject matter.",
        },
        {
            question: "Mauris Blandit Aliquet Again",
            answer: "This is the answer for Mauris Blandit Aliquet Again. It explains more about the topic.",
        },
        {
            question: "Another Pellentesque in Ipsum",
            answer: "This is the answer for Another Pellentesque in Ipsum. It adds more context to the discussion.",
        },
        {
            question: "Another Proin Eget Tortor",
            answer: "This is the answer for Another Proin Eget Tortor. It answers common questions regarding the topic.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="faq-question">
                            <span className="faq-symbol">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                            {faq.question}
                        </div>
                        <div
                            className="faq-answer"
                            style={{
                                height: activeIndex === index ? "auto" : "0",
                                overflow: "hidden",
                                transition: "height 0.4s ease, opacity 0.4s ease",
                                opacity: activeIndex === index ? "1" : "0",
                            }}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ResourcesContent3;
