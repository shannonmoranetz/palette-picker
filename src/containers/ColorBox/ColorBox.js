import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';

export class ColorBox extends Component {

	returnColorCards = () => {
		const paletteColors = this.findCurrentPaletteColors();
		const colorCards = paletteColors.map((color) => {
			return <ColorCard key={uuid()} color={color} />
		})
		return colorCards;
	}

	findCurrentPaletteColors = () => {
		const  { palettes, currentPaletteId } = this.props;
		const matchingPalette = palettes.find((palette) => {
			return palette.id === currentPaletteId
		})
		const { color1, color2, color3, color4, color5 } = matchingPalette;
		let paletteColors = [ color1, color2, color3, color4, color5 ]
		return paletteColors;
	}

	render() {
		return (
			<div className="ColorBox">
				{this.props.palettes.length ? (
					<div className="mapped-colors">
						{this.returnColorCards()}
					</div>
				) : (
						<p className="loading-text">Loading...</p>
					)}
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	palettes: state.palettes,
	currentPaletteId: state.currentPaletteId
});

export default connect(mapStateToProps)(ColorBox);