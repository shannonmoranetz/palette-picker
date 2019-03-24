import React from 'react';
import ProjectControls from '../../containers/ProjectControls/ProjectControls';
import Search from '../../containers/Search/Search';
import ProjectList from '../../containers/ProjectList/ProjectList';

export const ProjectSection = () => {
    return (
        <div className="ProjectSection">
            <ProjectControls/>
            <Search/>
            <ProjectList/>
        </div>
    )
}

export default ProjectSection;