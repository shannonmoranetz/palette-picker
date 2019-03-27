import React, { Component } from 'react';
import { fetchData } from '../../utils/api.js';
import { addPalette, addProject } from '../../actions/index';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

export class ProjectControls extends Component {
  constructor() {
    super();
    this.state = {
      projectName: 'Warm Colors Project',
      paletteName: '',
      selectedSaveLocation: 'Warm colors project'
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
    const { projects, addProject } = this.props;
    let isDuplicate = this.checkDuplicateName(projectName, projects);
    if (!projectName.length) {
      alert('You must provide a name to submit a new project.');
    } else if (isDuplicate) {
      alert('Duplicate project names are not permitted.');
    } else {
      const projectData = { name: projectName };
      let response = await fetchData('/projects', 'POST', projectData);
      let project = {...projectData, id: response.id};
      addProject(project)
    }
  }

  checkDuplicateName = (name, itemsToIterate) => {
    let isDuplicate = itemsToIterate.filter(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    })
    if (isDuplicate.length) {
      isDuplicate = true;
    } else {
      isDuplicate = false;
    }
    return isDuplicate;
  }

  handleChangePalette = (e) => {
    let paletteName = e.target.value;
    this.setState({ paletteName })
  }

  handleSubmitPalette = (e) => {
    e.preventDefault();
    this.createPalette();
  }

  createPalette = async () => {
    const { paletteName } = this.state;
    const { hexcodes, palettes, addPalette } = this.props;
    let isDuplicate = this.checkDuplicateName(paletteName, palettes);
    if (!paletteName.length) {
      alert('You must provide a name to submit a new palette.');
    } else if (isDuplicate) {
      alert('Duplicate palette names are not permitted.');
    } else {
      let matchingProjectId = this.findMatchingProject();
      const paletteData = {
        project_id: matchingProjectId,
        name: paletteName,
        color1: hexcodes[0],
        color2: hexcodes[1],
        color3: hexcodes[2],
        color4: hexcodes[3],
        color5: hexcodes[4]
      }
      let response = await fetchData(`/palettes`, 'POST', paletteData);
      let palette = {...paletteData, id: response.id}
      addPalette(palette)
    }
  }

  findMatchingProject = () => {
    let matchedProject = this.props.projects.find((project) => {
      return project.name.toLowerCase() === this.state.selectedSaveLocation.toLowerCase();
    })
    return matchedProject.id
  }
    
  populateDropdown = () => { 
    return (
    <select value={this.state.selectedSaveLocation} onChange={(e) => this.setSelectedSaveLocation(e)}>
      {this.props.projects.map((project) => {
      return <option id={project.name}value={project.name} key={uuid()} >{project.name}</option>
    })}
    </select>
    )
  }

  setSelectedSaveLocation = (e) => {
    this.setState({ selectedSaveLocation: e.target.value })
  }

  render() {
    return (
      <div className="ProjectControls">
        <form className="create-project-form" onSubmit={(e) => this.handleSubmitProject(e)}>
          <label htmlFor="create-project">Create your project:</label><br/>
          <input onChange={(e) => this.handleChangeProject(e)} type="text" name="create-project" className="create-project-input"/>
          <button type="submit" className="save-project-button">Save Project</button>
        </form>
        <form className="save-palette-form" onSubmit={(e) => this.handleSubmitPalette(e)}>
          <label htmlFor="save-palette" className="save-palette-label">Save your palette:</label><br/>
          <input onChange={(e) => this.handleChangePalette(e)} type="text" name="save-palette" className="save-palette-input"/>
            { this.populateDropdown() }
          <button type="submit" className="save-palette-button">Save Palette</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  hexcodes: state.hexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  addPalette: (palette) => dispatch(addPalette(palette))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectControls);

