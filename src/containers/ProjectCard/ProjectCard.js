import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaletteCard from '../../containers/PaletteCard/PaletteCard';
import { fetchData } from '../../utils/api.js';
import { setLoadedProject, deleteProject, deletePalette } from '../../actions';

export class ProjectCard extends Component {

  findProjectPalettes = () => {
    const  { palettes, project } = this.props;
      const matchingPalettes = palettes.filter((palette) => {
        return palette.project_id === project.id
    })
    return matchingPalettes;
  }

  handleDeleteProject = async () => {
    let projectId = this.props.project.id;
    let paletteIds = [];
    const palettesToDelete = this.findProjectPalettes();
    await palettesToDelete.forEach((palette) => {
    fetchData(`/palettes/${palette.id}`, 'DELETE');
    paletteIds.push(palette.id)
    })  
    paletteIds.forEach((id) => {
      this.props.deletePalette(id)
    })
    let response = await fetchData(`/projects/${projectId}`, 'DELETE');
    let id = response.id;
    this.props.deleteProject(id)
  }

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
          <div onClick={() => this.props.setLoadedProject(this.props.project.name)}>
            <p className="project-name">{project.name.toUpperCase()}</p>
              <div className="palette-container">
                <PaletteCard projectPalettes={this.findProjectPalettes()}/>
              </div>
            <button onClick={this.handleDeleteProject} className="delete-project-button">Delete Project</button>
          </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes
});

export const mapDispatchToProps = (dispatch) => ({
  setLoadedProject: (loadedProject) => dispatch(setLoadedProject(loadedProject)),
  deleteProject: (id) => dispatch(deleteProject(id)),
  deletePalette: (id) => dispatch(deletePalette(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);