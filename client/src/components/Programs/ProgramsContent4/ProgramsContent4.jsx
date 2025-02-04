import React from "react";
import "./ProgramsContent4.css";
import image7 from '../../../assets/images/programs/image7.webp';
import image8 from '../../../assets/images/programs/image8.webp';
import image9 from '../../../assets/images/programs/image9.webp';
import image10 from '../../../assets/images/programs/image10.webp';
const ProgramsContent4 = () => {
    return (
        <div className="life-at-dlithe">
            <h2>Life at DLithe</h2>
            <p>
                Our goal at DLithe is to create an environment where everyone can succeed. Our culture emphasizes inclusion, collaboration, high performance, and opportunities for growth, making it a rewarding place to work.
            </p>
            <div className="awards-gallery">
                <img
                    src={image7}
                    alt="Best Places to Work"
                />
                <img
                    src={image8}
                    alt="Fortune 100 Best Companies"
                />
                <img
                    src={image9}
                    alt="People Companies That Care"
                />
                <img
                    src={image10}
                    alt="Equality Leader"
                />
            </div>
            <a href="#" className="see-more-link">
                See more awards ➔
            </a>
        </div>
    );
};

export default ProgramsContent4;
