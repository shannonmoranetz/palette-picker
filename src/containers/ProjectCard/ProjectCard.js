import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { toggleDisplayRandom, setCurrentPaletteId, setCurrentProjectName, setHexcodes } from '../../actions/index';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';

export class ProjectCard extends Component {

  returnPalettes = () => {
    const matchingPalettes = this.findProjectPalette();
    return matchingPalettes.map((palette) => {
      const { name, color1, color2, color3, color4, color5, id } = palette;
        return (
          <div key={uuid()} className="mapped-palettes" onClick={() => this.updateSelectedPalette(id)}>
            <span className="palette-name">{name}</span>
            <span className="color-minibox" style={{ backgroundColor: `#${color1}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color2}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color3}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color4}`}}></span>
            <span className="color-minibox" style={{ backgroundColor: `#${color5}`}}></span>
            <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="delete-icon"/></button>
          </div>
        )
      })
    }

    // Find the matching project to map over in returnPalettes()
    findProjectPalette = () => {
      const  { palettes, project } = this.props;
        const matchingPalettes = palettes.filter((palette) => {
          return palette.project_id === project.id
      })
      console.log(matchingPalettes)
      return matchingPalettes;
    }

    // Update the selectedPalette in global state when the palette div is clicked
    updateSelectedPalette = async (id) => {
      // await this.props.setCurrentPaletteId(id);
      
      const selectedPalette = this.props.palettes.find((palette) => {
        return palette.id === id
      })

      const { color1, color2, color3, color4, color5 } = selectedPalette;
      this.props.setHexcodes([ color1, color2, color3, color4, color5 ])
      console.log('selectedPalette: ',selectedPalette)
      // return selectedPalette;
    }
      

  render() {
    const { project } = this.props;
    console.log(this.props.project)
    return (
      <div className="ProjectCard">
        {this.props.palettes.length ? (
          <div >
            <p className="project-name">{project.name.toUpperCase()}</p>
              <div className="palette-container">
                  { this.returnPalettes() }
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

export const mapStateToProps = (state) => ({
  palettes: state.palettes,
  currentPaletteId: state.currentPaletteId
});

export const mapDispatchToProps = (dispatch) => ({
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay)),
  setCurrentPaletteId: (paletteId) => dispatch(setCurrentPaletteId(paletteId)),
  setCurrentProjectName: (projectName) => dispatch(setCurrentProjectName(projectName)),
  setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);

  //   const { color1, color2, color3, color4, color5 } = selectedPalette;
  //   this.props.setHexcodes([ color1, color2, color3, color4, color5])
  //   console.log('selectedPalette: ',selectedPalette)
  //   return selectedPalette;

  // onClick={() => this.updateProjectName()}