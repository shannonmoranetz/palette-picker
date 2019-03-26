import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

export class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
    }
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
    return matchingPalettes.map((palette) => {
      const { name, color1, color2, color3, color4, color5 } = palette;
          return <div>
            <p className="palette-name">{name}</p>
            <p>color1: {color1} </p>
            <p>color2: {color2} </p>
            <p>color3: {color3} </p>
            <p>color4: {color4} </p>
            <p>color5: {color5} </p> 
          </div>
      })
  }

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        {this.props.palettes.length ? (
          <div>
            <p className="project-name">{project.name}</p>
              <div className="palette-container">
                  <div className="palette-minibox">
                    { this.returnElements() }
                  </div> 
                  <button className="load-button"><FontAwesomeIcon icon={faEdit} className="load-icon"/></button>
                  <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="deelete-icon"/></button>
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
  palettes: state.palettes
});

export default connect(mapStateToProps)(ProjectCard);
