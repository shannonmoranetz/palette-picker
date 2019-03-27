import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setHexcodes } from '../../actions/index';

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
          <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="delete-icon"/></button>
        </div>
      )
    })
  }
  
  updateHexcodes = async (id) => {
    const hexcodes = this.props.palettes.find((palette) => {
      return palette.id === id
    })
    const { color1, color2, color3, color4, color5 } = hexcodes;
    this.props.setHexcodes([ color1, color2, color3, color4, color5 ])
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
  setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteCard);
