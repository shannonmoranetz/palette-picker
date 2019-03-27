import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';
import uuid from 'uuid/v4';

export class ColorBox extends Component {

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
	hexcodes: state.hexcodes
});

export default connect(mapStateToProps)(ColorBox);