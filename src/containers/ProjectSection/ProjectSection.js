import React from 'react';
import ProjectControls from '../../containers/ProjectControls/ProjectControls';
import Search from '../../containers/Search/Search';
import ProjectList from '../../containers/ProjectList/ProjectList';
import { connect } from 'react-redux';

export const ProjectSection = (props) => {
    return (
        <div className="ProjectSection">
            <div className="subheading-container">
                <h2 className="project-header">{props.currentProjectName.toUpperCase()}</h2>
            </div>
            <div className="content-container">
                <ProjectControls/>
                <Search/>
                <ProjectList/>
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => ({
    currentProjectName: state.currentProjectName
});

export default connect(mapStateToProps)(ProjectSection);