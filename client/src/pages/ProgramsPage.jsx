import React from 'react';
import Sidebar from '../components/Programs/Sidebar/Sidebar';
import InternshipContent from '../components/Programs/Internship/InternshipContent';
import ProgramCards from '../components/Programs/ProgramCards/ProgramCards';
import ProgramsContent1 from '../components/Programs/ProgramsContent1/ProgramsContent1';
import ProgramsContent2 from '../components/Programs/ProgramsContent2/ProgramsContent2';
import ProgramsContent3 from '../components/Programs/ProgramsContent3/ProgramsContent3';
import ProgramsContent4 from '../components/Programs/ProgramsContent4/ProgramsContent4';
import ProgramsContent5 from '../components/Programs/ProgramsContent5/ProgramsContent5';
import Footer from '../components/Landing/Footer/Footer';

function ProgramsPage() {
    return (
        <div>
            <Sidebar />
            <div id="internship">
                <InternshipContent />
            </div>
            <div id="program-cards">
                <ProgramCards />
            </div>
            <div id="content-1">
                <ProgramsContent1 />
            </div>
            <div id="content-2">
                <ProgramsContent2 />
            </div>
            <div id="content-3">
                <ProgramsContent3 />
            </div>
            <div id="content-4">
                <ProgramsContent4 />
            </div>
            <div id="content-5">
                <ProgramsContent5 />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    );
}

export default ProgramsPage;
