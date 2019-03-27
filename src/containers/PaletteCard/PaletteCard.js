import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { setHexcodes, deletePalette } from '../../actions/index';
import { fetchData } from '../../utils/api.js';

export class PaletteCard extends Component {

  returnPalettes = () => {
    return this.props.projectPalettes.map((palette) => {
      const { name, color1, color2, color3, color4, color5, id } = palette;
      return (
        <div key={uuid()} className="mapped-palettes" onClick={() => this.updateHexcodes(id)}>
          <span className="palette-name">{name}</span>
          <span className="color-minibox" style={{ backgroundColor: `#${color1}`}}></span>
          <span className="color-minibox" style={{ backgroundColor: `#${color2}`}}></span>
          <span className="color-minibox" style={{ backgroundColor: `#${color3}`}}></span>
          <span className="color-minibox" style={{ backgroundColor: `#${color4}`}}></span>
          <span className="color-minibox" style={{ backgroundColor: `#${color5}`}}></span>
          <span role="img" id={id} onClick={(e) => this.handleDeletePalette(e)} className="delete-button">🗑️</span>
        </div>
      )
    })
  }
  
  handleDeletePalette = async (e) => {
    let paletteId = e.target.id;
    const matchingPalette = this.props.palettes.find((palette) => {
      return palette.id == paletteId
    })
    paletteId = matchingPalette.id;
    let response = await fetchData(`/palettes/${paletteId}`, 'DELETE');
    let id = response.id;
    this.props.deletePalette(id);
  }

  updateHexcodes = (id) => {
    const hexcodes = this.props.palettes.find((palette) => {
      return palette.id === id
    })
    const { color1, color2, color3, color4, color5 } = hexcodes;
    this.props.setHexcodes([ 
      {color: color1, isLocked: false}, 
      {color: color2, isLocked: false}, 
      {color: color3, isLocked: false}, 
      {color: color4, isLocked: false}, 
      {color: color5, isLocked: false} 
    ])
  }

  render() {
    return (
      <div className="PaletteCard">
        { this.returnPalettes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes
});

export const mapDispatchToProps = (dispatch) => ({
  setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes)),
  deletePalette: (id) => dispatch(deletePalette(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteCard);
