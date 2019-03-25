import React from 'react';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

export const ParentSection = () => {
    return (
        <div className="ParentSection">
            <PaletteSection/>
            <ProjectSection/>
        </div>
    )
}

export default ParentSection;