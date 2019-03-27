import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { toggleDisplayRandom, setCurrentPaletteId, setCurrentProjectName } from '../../actions/index';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';

export class ProjectCard extends Component {

	findProjectPalette = () => {
    const  { palettes, project } = this.props;
		const matchingPalettes = palettes.filter((palette) => {
			return palette.project_id === project.id
    })
    return matchingPalettes;
  }

  returnElements = () => {
    let matchingPalettes = this.findProjectPalette();
    return matchingPalettes.map((palette, i) => {
      const { name, color1, color2, color3, color4, color5 } = palette;
        return (
          <div key={uuid()} className="mapped-palettes">
            <span id={this.createPaletteId(i)} className="palette-name">{name}</span>
            <span className="color-minibox" id={this.createPaletteId(i)} style={{ backgroundColor: `#${color1}`}}></span>
            <span className="color-minibox" id={this.createPaletteId(i)} style={{ backgroundColor: `#${color2}`}}></span>
            <span className="color-minibox" id={this.createPaletteId(i)} style={{ backgroundColor: `#${color3}`}}></span>
            <span className="color-minibox" id={this.createPaletteId(i)} style={{ backgroundColor: `#${color4}`}}></span>
            <span className="color-minibox" id={this.createPaletteId(i)} style={{ backgroundColor: `#${color5}`}}></span>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="delete-icon"/></button>
          </div>
        )
      })
  }

  createPaletteId = (i) => {
    let matchingPalettes = this.findProjectPalette();
    let nameId;
    if (matchingPalettes.length) {
      let clickedPalette = matchingPalettes[i];
      nameId = clickedPalette.name
    } else {
      nameId = null
    }
    return nameId
  }

  updateSelectedPalette = async (e) => {
    const  { palettes, currentPaletteId } = this.props;
    let paletteName = e.target.id;
    let matchingPalettes = await this.findProjectPalette();
    await palettes.forEach((palette) => {
      if (palette.name.includes(paletteName)) {
        this.props.setCurrentPaletteId(palette.id)
      }
    })
    const selectedPalette = await matchingPalettes.find((palette) => {
      return palette.id === currentPaletteId
    })
    this.props.toggleDisplayRandom(false);
    return selectedPalette;
  }

  updateProjectName = () => {
    if (this.props.project) {
      this.props.setCurrentProjectName(this.props.project.name)
    }
  }

  render() {
    const { project } = this.props;
    if (this.props.palettes) {
      return (
        <div className="ProjectCard">
          {this.props.palettes.length ? (
            <div onClick={() => this.updateProjectName()}>
              <p className="project-name" onClick={(e) => this.updateSelectedPalette(e)}>{project.name.toUpperCase()}</p>
                <div className="palette-container" onClick={(e) => this.updateSelectedPalette(e)}>
                    { this.returnElements() }
                </div>
              <button className="delete-project-button">Delete Project</button>
            </div>
          ) : (
            <LoadingDisplay/>
          )}
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes,
  currentPaletteId: state.currentPaletteId
});

export const mapDispatchToProps = (dispatch) => ({
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay)),
  setCurrentPaletteId: (paletteId) => dispatch(setCurrentPaletteId(paletteId)),
  setCurrentProjectName: (projectName) => dispatch(setCurrentProjectName(projectName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
