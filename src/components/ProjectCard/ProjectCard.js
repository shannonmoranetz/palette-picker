import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { fetchPalettes } from '../../thunks/fetchPalettes';

export class ProjectCard extends Component {
  componentDidMount = () => {
    this.fetchPaletteById(this.props.project)
  }

  fetchPaletteById = (project) => {
    this.props.fetchPalettes(project.id)
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
