import React from 'react'

import Part1 from '../components/Services/ServiceContent1/Part1'
import ResourcesContent1 from '../components/Resources/ResorcesContent1/ResourcesContent1'
import ResourceContent2 from '../components/Resources/ResourceContent2/ResourceContent2'
import ResourcesContent3 from '../components/Resources/ResourcesContent3/ResourcesContent3'

function ResourcesPage() {
    return (
        <div>

            <Part1 title="Welcome To Our Program Page" />
            <ResourcesContent1 />
            <ResourceContent2 />
            <ResourcesContent3 />

        </div>
    )
}

export default ResourcesPage
