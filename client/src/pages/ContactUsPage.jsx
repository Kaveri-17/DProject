import React from 'react'
import Navbar from '../components/Landing/Navbar/Navbar'
import Part1 from '../components/Services/ServiceContent1/Part1'
import ContactContent1 from '../components/Contact/Contact1/ContactContent1'
import Footer from '../components/Landing/Footer/Footer'
import ContactContent2 from '../components/Contact/Content2/ContactContent2'
function ContactUsPage() {
    return (
        <div>
            <Navbar />
            <Part1 title="Get In Touch" />
            <ContactContent2 />
            <ContactContent1 />
            {/* <h1>Pending with 2 more components</h1> */}
            <Footer />
        </div>
    )
}

export default ContactUsPage
