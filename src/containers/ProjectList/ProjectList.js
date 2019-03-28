import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../ProjectCard/ProjectCard';

export const ProjectList = (props) => {
  const { projects } = props;
  return (
    <div className="ProjectList">
      {
        projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />
        })
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);