import React from 'react';
import './Testimonial.css';

const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Adeline West",
        position: "Divi Corner",
        bgColor: "orange"
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Theresa Reeves",
        position: "Extra Space",
        bgColor: "gray"
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Rachel Graham",
        position: "Bloom Co.",
        bgColor: "gray"
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Ada Leonard",
        position: "Monarch Inc",
        bgColor: "navy"
    }
];

const Testimonial = () => {
    return (
        <section className="testimonials">
            {/* <h2 className="section-title text-grey-200 3xl-text">TESTIMONIAL</h2> */}
            <h2 className="section-title" style={{ fontSize: "60px", color: "white", fontFamily: "'Share Tech', Helvetica, Arial, Lucida, sans-serif" }}>What People Are Saying</h2>
            <div className="testimonial-grid">
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className={`testimonial-card ${item.bgColor}`}
                    >
                        <p className="testimonial-text">“{item.text}”</p>
                        <p className="testimonial-author">
                            <strong>{item.author}</strong>
                            <br />
                            {item.position}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
