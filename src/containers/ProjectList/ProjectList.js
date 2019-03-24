import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <p>ProjectList</p>
        <ProjectCard/>
      </div>
    );
  }
}

export default ProjectList;
