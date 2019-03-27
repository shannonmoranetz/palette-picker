import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRandomHexcodes, toggleDisplayRandom } from '../../actions/index';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';

export class PaletteControls extends Component {

  componentDidMount = () => {
    this.generateRandomColors();
  }

  findPaletteName = () => {
    const  { palettes, currentPaletteId } = this.props;
    let matchingPalette = palettes.filter((palette) => {
      return palette.id === currentPaletteId
    })
    if (!matchingPalette.length) {
      matchingPalette = [{ name: 'Palette' }]
    }
    return matchingPalette[0].name.toUpperCase();
  }

  generateRandomColors = async () => {
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
    await this.props.setRandomHexcodes(newColors);
    await this.props.toggleDisplayRandom(true);
  }

  render() {
    if (this.props.palettes) {
      return (
        <div className="PaletteControls">
          {this.props.palettes.length ? (
            <div className="palette-controls-container">
              <button className="generate-button" onClick={this.generateRandomColors}>Generate New Palette!</button>
              <h2 className="palette-header">{this.findPaletteName()}</h2>
            </div>
          ) : (
            <LoadingDisplay/>
          )}
        </div>
      )
    }
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
