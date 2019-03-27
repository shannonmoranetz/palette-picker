import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaletteCard from '../../containers/PaletteCard/PaletteCard';
import { setLoadedProject } from '../../actions';

export class ProjectCard extends Component {

  findProjectPalettes = () => {
    const  { palettes, project } = this.props;
      const matchingPalettes = palettes.filter((palette) => {
        return palette.project_id === project.id
    })
    return matchingPalettes;
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
            <button className="delete-project-button">Delete Project</button>
          </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes
});

export const mapDispatchToProps = (dispatch) => ({
  setLoadedProject: (loadedProject) => dispatch(setLoadedProject(loadedProject))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);