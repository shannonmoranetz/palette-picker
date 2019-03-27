import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaletteCard from '../../containers/PaletteCard/PaletteCard';
import { fetchData } from '../../utils/api.js';
import { setLoadedProject, deleteProject } from '../../actions';

export class ProjectCard extends Component {

  findProjectPalettes = () => {
    const  { palettes, project } = this.props;
      const matchingPalettes = palettes.filter((palette) => {
        return palette.project_id === project.id
    })
    return matchingPalettes;
  }


  deleteProject = async () => {
    let projectId = this.props.project.id;
    let response = await fetchData(`/projects/${projectId}`, 'DELETE');
    let IdToDelete = response.id;
    this.props.deleteProject(IdToDelete)
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
            <button onClick={this.deleteProject} className="delete-project-button">Delete Project</button>
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
  deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);