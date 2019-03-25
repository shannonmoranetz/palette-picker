import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchPalettes } from '../../thunks/fetchPalettes';

export class ProjectCard extends Component {
  componentDidMount = () => {
    // this.findProjectPalette(this.props.project)
  }

	findProjectPalette = () => {
		// const  { palettes, currentPaletteId } = this.props;
		// const matchingPalette = palettes.find((palette) => {
		// 	return palette.id === currentPaletteId
		// })
		// const { color1, color2, color3, color4, color5 } = matchingPalette;
		// let paletteColors = [ color1, color2, color3, color4, color5 ]
		// return paletteColors;
	}

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        <p className="project-name">{project.name}</p>
          <div className="palette-container">
            <p className="palette-name">Palette Name</p>
              <div className="palette-minibox">colors</div> 
              <button className="load-button"><FontAwesomeIcon icon={faEdit} className="load-icon"/></button>
              <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="deelete-icon"/></button>
          </div>
        <button className="delete-project-button">Delete Project</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPalettes: (id) => dispatch(fetchPalettes(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
