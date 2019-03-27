import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaletteCard from '../../components/PaletteCard/PaletteCard';

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
          <div >
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

export default connect(mapStateToProps)(ProjectCard);