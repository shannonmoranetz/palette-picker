import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';

export class ColorBox extends Component {

	returnColorCards = () => {
		const paletteColors = this.findCurrentPaletteColors();
		let colorCards = paletteColors.map((color) => {
			return <ColorCard key={uuid()} color={color} />
		})
		return colorCards;
	}

	findCurrentPaletteColors = () => {
		const  { palettes, currentPaletteId, randomHexcodes, shouldDisplayRandom } = this.props;
		let paletteColors;
		let randomColors = {
			color1: randomHexcodes[0], 
			color2: randomHexcodes[1], 
			color3: randomHexcodes[2], 
			color4: randomHexcodes[3], 
			color5: randomHexcodes[4] 
		}
		if (shouldDisplayRandom === true) {
			const { color1, color2, color3, color4, color5 } = randomColors;
			paletteColors = [ color1, color2, color3, color4, color5 ];
		} else {
			let matchingPalette = palettes.filter((palette) => {
				return palette.id === currentPaletteId
			});
			if (matchingPalette.length) {
				const { color1, color2, color3, color4, color5 } = matchingPalette[0];
				paletteColors = [ color1, color2, color3, color4, color5 ];
			} else {
				paletteColors = randomColors;
			}
		}
		return paletteColors;
	};

	render() {
		if (this.props.palettes) {
			return (
				<div className="ColorBox">
					{this.props.palettes.length ? (
						<div className="mapped-colors">
							{this.returnColorCards()}
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
	randomHexcodes: state.randomHexcodes,
	shouldDisplayRandom: state.shouldDisplayRandom
});

export default connect(mapStateToProps)(ColorBox);