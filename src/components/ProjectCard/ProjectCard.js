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
            <span className="palette-name">{name}</span>
            <span className="color-minibox" style={{ backgroundColor: `#${color1}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color2}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color3}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color4}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color5}`}}></span>
            <button className="load-button"><FontAwesomeIcon icon={faEdit} className="load-icon"/></button>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="delete-icon"/></button>
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
            <p className="project-name">{project.name.toUpperCase()}</p>
              <div className="palette-container">
                  { this.returnElements() }
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
