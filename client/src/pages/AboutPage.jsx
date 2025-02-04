import React from 'react'

import Part1 from '../components/Services/ServiceContent1/Part1'
import AboutContent1 from '../components/About/AboutContent1/AboutContent1'
import ITServices from '../components/Services/ServiceContent2/ITServices'
import AboutContent2 from '../components/About/AboutContent2/AboutContent2'
import AboutContent3 from '../components/About/AboutContent3/AboutContent3'
import Footer from '../components/Landing/Footer/Footer'
import AboutContent4 from '../components/About/AboutContent4/AboutContent4'

function AboutPage() {
    return (
        <div>

            <Part1 title="Meet Your Local IT Company" />
            <AboutContent1 />
            <ITServices />
            <AboutContent4 />
            <AboutContent2 />
            <AboutContent3 />
            <Footer />
        </div>
    )
}

export default AboutPage
