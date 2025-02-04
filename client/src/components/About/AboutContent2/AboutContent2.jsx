import React, { useEffect, useState } from "react";
import "./AboutContent2.css";

const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(target / (duration / 10));
        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            setCount(start);
        }, 10);

        return () => clearInterval(interval);
    }, [target, duration]);

    return <h2 style={{ fontSize: "50px", margin: 0 }}>{count}</h2>;
};

const AboutContent2 = () => {
    return (
        <div style={{ textAlign: "center", padding: "50px 0", position: "relative", overflow: "hidden" }}>
            {/* Background styling */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    backgroundColor: "#0a2540",
                }}
            ></div>

            <div style={{ color: "#fff", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "50px", marginBottom: "50px", marginTop: "0px" }}>IT Services About</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <Counter target={24} duration={2000} />
                        <p>IT Experts</p>
                    </div>
                    <div>
                        <Counter target={28} duration={2000} />
                        <p>Years Of Experience</p>
                    </div>
                    <div>
                        <Counter target={2000} duration={2000} />
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutContent2;
