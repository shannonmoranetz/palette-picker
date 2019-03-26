import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchPalettes } from '../../thunks/fetchPalettes';

export class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  componentDidMount = () => {
    if (this.props.palettes.length) {
      this.findProjectPalette();
    }
  }

	findProjectPalette = () => {
		const  { palettes, project } = this.props;
		const matchingPalettes = palettes.filter((palette) => {
      console.log('palette element: ', palette, 'project prop: ',project)
      console.log('project id: ', project.id)
			return palette.project_id === project.id
    })
    let colors = matchingPalettes.map((palette) => {
      const { color1, color2, color3, color4, color5 } = palette;
      let paletteColors = [ color1, color2, color3, color4, color5 ]
      return paletteColors;
    })
    console.log(colors)
    this.setState({colors: [...this.state.colors, ...colors] })
	}

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        <p className="project-name">{project.name}</p>
          <div className="palette-container">
            <p className="palette-name">Palette Name</p>
              <div className="palette-minibox">
              {
                this.state.colors.map((color, i) => {
                  return <p key={i}>{color}</p>
                })
              }
              </div> 
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
