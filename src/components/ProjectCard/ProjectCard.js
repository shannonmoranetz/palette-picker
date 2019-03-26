import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

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
    return matchingPalettes.map((palette) => {
      const { name, color1, color2, color3, color4, color5 } = palette;
        return (
          <div key={uuid()} className="mapped-palettes">
            <p className="palette-name">{name}</p>
            <div className="color-minibox" style={{backgroundColor: `#${color1}`}}> </div>
            <div className="color-minibox" style={{backgroundColor: `#${color2}`}}> </div>
            <div className="color-minibox" style={{backgroundColor: `#${color3}`}}> </div>
            <div className="color-minibox" style={{backgroundColor: `#${color4}`}}> </div>
            <div className="color-minibox" style={{backgroundColor: `#${color5}`}}> </div>
          </div>
        )
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
  palettes: state.palettes
});

export default connect(mapStateToProps)(ProjectCard);
