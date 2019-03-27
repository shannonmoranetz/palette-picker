import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';
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

	findExistingPaletteColors = () => {
		const  { palettes, currentPaletteId } = this.props;	
		let matchingPalette = palettes.filter((palette) => {
			return palette.id === currentPaletteId
		});
		this.cleanColors(matchingPalette[0]);
	}

	cleanColors = (colorData) => {
		// Clean the color data
		const { color1, color2, color3, color4, color5 } = colorData;
		const cleanedColors = [ color1, color2, color3, color4, color5 ];
		// Update Redux hexcodes
		this.props.setHexcodes(cleanedColors);
		// Display ColorCard components
		this.returnColorCards(cleanedColors);
	}

	returnColorCards = (colors) => {
		return colors.map((color) => {
			return <ColorCard key={uuid()} color={color} />
		});
	};

	render() {
		return (
			<div className="ColorBox">
				{this.props.palettes.length ? (
					<div className="mapped-colors">
						{this.props.shouldDisplayRandom ? this.createRandomPaletteColors() : this.findExistingPaletteColors()}
					</div>
				) : (
					<LoadingDisplay/>
				)}
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	palettes: state.palettes,
	currentPaletteId: state.currentPaletteId,
	hexcodes: state.hexcodes,
	shouldDisplayRandom: state.shouldDisplayRandom
});

export const mapDispatchToProps = (dispatch) => ({
	setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes)),
  toggleDisplayRandom: (shouldDisplay) => dispatch(toggleDisplayRandom(shouldDisplay))	
});


export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);