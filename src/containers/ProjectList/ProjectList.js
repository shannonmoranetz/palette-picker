import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../ProjectCard/ProjectCard';
import uuid from 'uuid/v4';

export class ProjectList extends Component {
  
  render() {
    const { projects } = this.props;
    return (
      <div className="ProjectList">
          <div className="mapped-projects">
            <p className="projectlist-subtitle">Your Creations:</p>
            {
              projects.map(project => {
                return <ProjectCard key={uuid()} project={project} />
              })
            }
          </div>
          <p className="projects-reminder">No saved projects.</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
