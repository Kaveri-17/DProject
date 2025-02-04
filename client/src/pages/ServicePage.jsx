import React from 'react'

import Part1 from '../components/Services/ServiceContent1/Part1'
import ITServices from '../components/Services/ServiceContent2/ITServices'
import Content3 from '../components/Services/ServiceContent3/ServiceContent3'
import ServiceContent4 from '../components/Services/ServiceContent4/ServiceContent4'
import ServiceContent5 from '../components/Services/ServiceContent5/ServiceContent5'
import Testimonial from '../components/Landing/Content4/Testimonial'
import Footer from '../components/Landing/Footer/Footer'

function ServicePage() {
    return (
        <div>

            <Part1 title="Managed IT Services & Support" />
            <ITServices />
            <Content3 />
            <ServiceContent4 />
            <ServiceContent5 />
            {/* <ServiceContent4 /> */}
            <Testimonial />
            <Footer />
        </div>
    )
}

export default ServicePage
