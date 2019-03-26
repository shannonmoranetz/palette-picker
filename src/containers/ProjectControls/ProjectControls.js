import React, { Component } from 'react';
import { fetchData } from '../../utils/api.js';
import { fetchProjects } from '../../thunks/fetchProjects';
import { connect } from 'react-redux';

export class ProjectControls extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      paletteName: ''
    }
  }

  handleChangeProject = (e) => {
    let projectName = e.target.value;
    this.setState({ projectName })
  }

  handleSubmitProject = (e) => {
    e.preventDefault();
    this.createProject();
  }

  createProject = async () => {
    const { projectName } = this.state;
    let isDuplicate = this.checkDuplicateName(projectName);
    console.log(isDuplicate);
    if (!projectName.length) {
      alert('You must provide a name to submit a new project.');
    } else if (isDuplicate) {
      alert('Duplicate project names are not permitted.');
    } else {
      const projectData = { name: projectName };
      await fetchData('/projects', 'POST', projectData);
      this.props.fetchProjects();
    }
  }

  checkDuplicateName = (projectName) => {
    let isDuplicate;
    this.props.projects.forEach(project => {
      if(project.name === projectName) {
        isDuplicate = true;
      } else {
        isDuplicate = false;
      }
    })
    return isDuplicate;
  }

  render() {
    return (
      <div className="ProjectControls">
        <form className="create-project-form" onSubmit={(e) => this.handleSubmitProject(e)}>
          <label htmlFor="create-project">Create your project:</label><br/>
          <input onChange={(e) => this.handleChangeProject(e)} type="text" name="create-project" className="create-project-input"/>
          <button type="submit" className="save-project-button">Save Project</button>
        </form>
        <form className="save-palette-form">
          <label htmlFor="save-palette" className="save-palette-label">Save your palette:</label><br/>
          <input type="text" name="save-palette" className="save-palette-input"/>
          <select>
            <option value="default">Save to:</option>
          </select>
          <button type="submit" className="save-palette-button">Save Palette</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectControls);

