import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRandomHexcodes, toggleDisplayRandom } from '../../actions/index';

export class PaletteControls extends Component {

  findPaletteName = () => {
    const  { palettes, currentPaletteId } = this.props;
    const matchingPalette = palettes.find((palette) => {
      return palette.id === currentPaletteId || { name: 'Palette' }
    })
    return matchingPalette.name;
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
    this.props.setRandomHexcodes(newColors);
    this.props.toggleDisplayRandom(true);
  }

  render() {
    return (
      <div className="PaletteControls">
        {this.props.palettes.length ? (
          <div className="palette-controls-container">
            <button className="generate-button" onClick={this.generateRandomColors}>Generate New Palette!</button>
            <h2 className="palette-header">{this.findPaletteName()}</h2>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  palettes: state.palettes,
  currentPaletteId: state.currentPaletteId,
  randomHexcodes: state.randomHexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  setRandomHexcodes: (hexcodes) => dispatch(setRandomHexcodes(hexcodes)),
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaletteControls);
