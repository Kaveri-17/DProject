import React from "react";

const ContactContent1 = () => {
    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ fontSize: "50px" }}>IT Services Contact</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "-120px",
                    flexWrap: "wrap", // For responsiveness
                }}
            >
                {/* Address Section */}
                <div style={cardStyle("#FFA500")}>
                    <div style={iconStyle()}>📍</div>
                    <h3>Address</h3>
                    <p>1234 Divi St. #1000</p>
                    <p>San Francisco, CA 92034</p>
                </div>

                {/* Phone Section */}
                <div style={cardStyle("#F0F0F0")}>
                    <div style={iconStyle()}>📞</div>
                    <h3>Phone</h3>
                    <p>Sales: (234) 567 – 6757</p>
                    <p>Support: (234) 567 – 6757</p>
                </div>

                {/* Email Section */}
                <div style={cardStyle("#00274D")}>
                    <div style={iconStyle("white")}>✉️</div>
                    <h3 style={{ color: "white" }}>Email</h3>
                    <p style={{ color: "white" }}>sales@divicon.com</p>
                    <p style={{ color: "white" }}>support@divicon.com</p>
                </div>
            </div>
        </div>
    );
};

const cardStyle = (backgroundColor) => ({
    backgroundColor,
    color: backgroundColor === "#00274D" ? "white" : "black",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "200px", // Fixed width for square
    height: "200px", // Fixed height for square
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    flex: "1 1 200px", // For responsiveness
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const iconStyle = (color = "black") => ({
    fontSize: "30px",
    color,
    marginBottom: "10px",
});

export default ContactContent1;
