import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';
import { setHexcodes, toggleDisplayRandom } from '../../actions/index';

export class ColorBox extends Component {

	createRandomPaletteColors = () => {
		const  { hexcodes } = this.props;
		let randomColors = {
			color1: hexcodes[0],
			color2: hexcodes[1],
			color3: hexcodes[2],
			color4: hexcodes[3],
			color5: hexcodes[4]
		}
		this.cleanColors(randomColors);
	}

	// ***
	findExistingPaletteColors = () => {
		const  { palettes } = this.props;	
		let matchingPalette = palettes.filter((palette) => {
			// return palette.id === currentPaletteId
		});
		this.cleanColors(matchingPalette[0]);
	}

	cleanColors = (colorData) => {
		const { color1, color2, color3, color4, color5 } = colorData;
		const cleanedColors = [ color1, color2, color3, color4, color5 ];
		this.props.setHexcodes(cleanedColors);
		this.returnColorCards(cleanedColors);
	}

	returnColorCards = (colors) => {
		return colors.map((color) => {
			return <ColorCard key={uuid()} color={color} />
		});
	};

	render() {
		const { hexcodes } = this.props
		return (
			<div className="ColorBox">
					<div className="mapped-colors">
						<ColorCard key={uuid()} color={hexcodes[0]} />
						<ColorCard key={uuid()} color={hexcodes[1]} />
						<ColorCard key={uuid()} color={hexcodes[2]} />
						<ColorCard key={uuid()} color={hexcodes[3]} />
						<ColorCard key={uuid()} color={hexcodes[4]} />
					</div>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	palettes: state.palettes,
	hexcodes: state.hexcodes,
	shouldDisplayRandom: state.shouldDisplayRandom
});

export const mapDispatchToProps = (dispatch) => ({
	setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes)),
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay))	
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);