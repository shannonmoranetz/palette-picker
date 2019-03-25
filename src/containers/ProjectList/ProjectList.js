import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import uuid from 'uuid/v4';

export class ProjectList extends Component {

  render() {
    const { projects, palettes } = this.props;
    return (
      <div className="ProjectList">
				{projects.length && palettes.length ? (
          <div className="mapped-projects">
            <p className="projectlist-subtitle">Your Creations:</p>
            {
              projects.map(project => {
                return <ProjectCard key={uuid()} projectName={project.name} />
              })
            }
          </div>
        ) : (
          <p className="projects-reminder">No saved projects.</p>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes
});

export default connect(mapStateToProps)(ProjectList);
