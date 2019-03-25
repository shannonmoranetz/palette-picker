import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import uuid from 'uuid/v4';

export class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <p className="projectlist-subtitle">Your Creations:</p>
        {
          this.props.projects.map(project => {
            return <ProjectCard key={uuid()} />
          })
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
