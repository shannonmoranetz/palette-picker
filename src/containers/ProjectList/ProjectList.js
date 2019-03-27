import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../ProjectCard/ProjectCard';
import uuid from 'uuid/v4';

export const ProjectList = (props) => {
  const { projects } = props;
  return (
    <div className="ProjectList">
      {
        projects.map(project => {
          return <ProjectCard key={uuid()} project={project} />
        })
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
