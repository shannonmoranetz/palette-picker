import React from 'react';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

export const ParentSection = () => {
    return (
        <div className="ParentSection">
            <p>ParentSection</p>
            <PaletteSection/>
            <ProjectSection/>
        </div>
    )
}

export default ParentSection;