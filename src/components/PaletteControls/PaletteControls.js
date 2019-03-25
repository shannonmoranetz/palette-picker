import React, { Component } from 'react';

export class PaletteControls extends Component {
  render() {
    return (
      <div className="PaletteControls">
        <button className="generate-button">Generate New Palette!</button>
        <h2 className="palette-header">PALETTE 1</h2>
      </div>
    );
  }
}

export default PaletteControls;
