import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

export class ProjectCard extends Component {
  constructor() {
    super();
  }

  // componentDidMount = () => {
  //   if (this.props.palettes.length) {
  //     this.findProjectPalette();
  //   }
  // }

	findProjectPalette = () => {
		const  { palettes, project } = this.props;
		const matchingPalettes = palettes.filter((palette) => {
			return palette.project_id === project.id
    })
    return matchingPalettes
	}

  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        <p className="project-name">{project.name}</p>
          <div className="palette-container">
            <div className="palette-minibox">
            {
              this.findProjectPalette().map((palette) => {
                return (
                  <div>
                    <p>{palette.name}</p>
                    <span>{palette.color1}</span>
                    <span>{palette.color2}</span>
                    <span>{palette.color3}</span>
                    <span>{palette.color4}</span>
                    <span>{palette.color5}</span>
                  </div>
                )
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

export default connect(mapStateToProps)(ProjectCard);
