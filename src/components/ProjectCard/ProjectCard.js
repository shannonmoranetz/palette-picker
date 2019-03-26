import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { toggleDisplayRandom, setCurrentPaletteId } from '../../actions/index';

export class ProjectCard extends Component {

  componentDidUpdate = () => {
    this.returnElements()
  }

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
            <p className="palette-name" id={this.createPaletteId(i)} >{name}</p>
            <div className="color-minibox" id={this.createPaletteId(i)} style={{backgroundColor: `#${color1}`}}> </div>
            <div className="color-minibox" id={this.createPaletteId(i)} style={{backgroundColor: `#${color2}`}}> </div>
            <div className="color-minibox" id={this.createPaletteId(i)} style={{backgroundColor: `#${color3}`}}> </div>
            <div className="color-minibox" id={this.createPaletteId(i)} style={{backgroundColor: `#${color4}`}}> </div>
            <div className="color-minibox" id={this.createPaletteId(i)} style={{backgroundColor: `#${color5}`}}> </div>
          </div>
        )
      })
  }

  createPaletteId = (i) => {
    let matchingPalettes = this.findProjectPalette();
    let nameId;
    if (matchingPalettes.length) {
      let firstPalette = matchingPalettes[i];
      nameId = firstPalette.name
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
    console.log(selectedPalette)
    this.props.toggleDisplayRandom(false);
    return selectedPalette;
  }

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        {this.props.palettes.length ? (
          <div>
            <p className="project-name" onClick={(e) => this.updateSelectedPalette(e)}>{project.name}</p>
              <div className="palette-container" onClick={(e) => this.updateSelectedPalette(e)}>
                  { this.returnElements() }
                  <button className="load-button"><FontAwesomeIcon icon={faEdit} className="load-icon"/></button>
                  <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="delete-icon"/></button>
              </div>
            <button className="delete-project-button">Delete Project</button>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes,
  currentPaletteId: state.currentPaletteId
});

export const mapDispatchToProps = (dispatch) => ({
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay)),
  setCurrentPaletteId: (shouldDisplay) => dispatch(setCurrentPaletteId(shouldDisplay))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
