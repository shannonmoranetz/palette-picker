import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PaletteControls extends Component {

  findProjectPalette = () => {
    const  { palettes, currentPaletteId } = this.props;
    console.log(palettes, currentPaletteId)
    const matchingPalette = palettes.find((palette) => {
      return palette.id === currentPaletteId
    })
    return matchingPalette.name;
  }

  render() {
    return (
      <div className="PaletteControls">
        {this.props.palettes.length ? (
          <div className="palette-controls-container">
            <button className="generate-button">Generate New Palette!</button>
            <h2 className="palette-header">{this.findProjectPalette()}</h2>
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
  currentPaletteId: state.currentPaletteId
});

export default connect(mapStateToProps)(PaletteControls);
