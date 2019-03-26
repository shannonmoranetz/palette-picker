import React from 'react';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';

export const ParentSection = () => {
    return (
        <div className="ParentSection">
            <PaletteSection/>
            <ProjectSection/>
        </div>
    )
}

export default ParentSection;