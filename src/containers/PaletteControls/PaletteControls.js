import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHexcodes } from '../../actions/index';

export class PaletteControls extends Component {

  componentDidMount = () => {
    this.generateRandomColors();
  }

  findPaletteName = () => {
    const  { palettes } = this.props;
    let matchingPalette = palettes.filter((palette) => {
      return palette.color1.includes(this.props.hexcodes[0])
    })
    if (!matchingPalette.length) {
      matchingPalette = [{ name: 'Random' }]
    }
    return matchingPalette[0].name.toUpperCase();
  }

  generateRandomColors = () => {
    let possibleHexValues = "0123456789ABCDEF";
    let newColors = [];
    for (let i = 0; i < 5; i++) {
      let hexStringArray = [];
      for (let j = 0; j < 6; j++) {
        let generatedHexcode = possibleHexValues[(Math.floor(Math.random() * 16))]; 
        hexStringArray.push(generatedHexcode);
      }
      let hexcode = hexStringArray.join('');
      newColors.push(hexcode);
    }
    this.props.setHexcodes(newColors);
  }

  render() {
    return (
      <div className="PaletteControls">
          <div className="palette-controls-container">
            <button className="generate-button" onClick={this.generateRandomColors}>Generate New Palette!</button>
            <h2 className="palette-header">{this.findPaletteName()}</h2>
          </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes,
  hexcodes: state.hexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteControls);
