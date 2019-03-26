import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';
import { toggleDisplayRandom } from '../../actions/index';

export class ColorBox extends Component {

	returnColorCards = () => {
		const paletteColors = this.findCurrentPaletteColors();
		const colorCards = paletteColors.map((color) => {
			return <ColorCard key={uuid()} color={color} />
		})
		return colorCards;
	}

	findCurrentPaletteColors = () => {
		const  { palettes, currentPaletteId, randomHexcodes, shouldDisplayRandom, toggleDisplayRandom } = this.props;
		let paletteColors;
		let randomColors = { 
			color1: randomHexcodes[0], 
			color2: randomHexcodes[1], 
			color3: randomHexcodes[2], 
			color4: randomHexcodes[3], 
			color5: randomHexcodes[4] 
		}
		if (shouldDisplayRandom !== true) {
			const { color1, color2, color3, color4, color5 } = randomColors;
			paletteColors = [ color1, color2, color3, color4, color5 ];
			toggleDisplayRandom(false)
		} else {
			let matchingPalette = palettes.find((palette) => {
				return palette.id === currentPaletteId || randomColors
			});
			const { color1, color2, color3, color4, color5 } = matchingPalette;
			paletteColors = [ color1, color2, color3, color4, color5 ];
		}
		return paletteColors;
	};

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
	currentPaletteId: state.currentPaletteId,
	randomHexcodes: state.randomHexcodes,
	shouldDisplayRandom: state.shouldDisplayRandom
});

export const mapDispatchToProps = (dispatch) => ({
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay))
});


export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);