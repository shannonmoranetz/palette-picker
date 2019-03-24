import React from 'react';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

export const ParentSection = () => {
    return (
        <div className="ParentSection">
            <div className="section-headers">
                <h2>PALETTE 1</h2>
                <h2>PROJECT 1</h2>
            </div>
            <div className="section-container">
                <PaletteSection/>
                <ProjectSection/>
            </div>
        </div>
    )
}

export default ParentSection;