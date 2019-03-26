import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setLockedHexcodes } from '../../actions/index';

export class ColorCard extends Component {
  constructor() {
    super()
    this.state = {
      icon: faUnlock,
    }
  }
  toggleColorLock = () => {
    if (!this.props.lockedHexcodes.length) {
      this.props.setLockedHexcodes(this.props.color)
      this.setState({ icon: faLock })
    } else {
      this.setState({ icon: faUnlock })
    }
  }
  
  render() {
    // console.log(this.props.color)
    return (
      <div className="ColorCard" style={{backgroundColor: `#${this.props.color}`}}>
            <FontAwesomeIcon icon={this.state.icon} className="lock-icon" onClick={() => this.toggleColorLock()}/>
            <p className="hexcode">#{this.props.color}</p>
      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
	lockedHexcodes: state.randomHexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  setLockedHexcodes: () => dispatch(setLockedHexcodes()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ColorCard);

