import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../../containers/ColorCard/ColorCard';

export class ColorBox extends Component {

	renderColorCards = () => {
		const { hexcodes } = this.props;
		return hexcodes.map((hexcode, i) => {
			return <ColorCard key={i} hexcode={hexcode} />
		})
	}

	render() {
		return (
			<div className="ColorBox">
					<div className="mapped-colors">
						{ this.renderColorCards() }
					</div>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	hexcodes: state.hexcodes
});

export default connect(mapStateToProps)(ColorBox);