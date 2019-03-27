import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setLockedHexcodes, removeLockedHexcode } from '../../actions';

export class ColorCard extends Component {
  constructor() {
    super()
    this.state = {
      icon: faUnlock
    }
  }

  toggleColorLock = async () => {
    if (!this.props.lockedHexcodes.includes(this.props.color)) {
      await this.props.setLockedHexcodes(this.props.color)
      this.setState({ icon: faLock })
    } else {
      await this.props.removeLockedHexcode(this.props.color)
      this.setState({ icon: faUnlock })
    }
  }
  
  render() {
    return (
      <div className="ColorCard" style={{backgroundColor: `#${this.props.color}`}}>
            <FontAwesomeIcon icon={this.state.icon === faLock ? faLock : faUnlock} className="lock-icon" onClick={() => this.toggleColorLock()}/>
            <p className="hexcode">#{this.props.color}</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  lockedHexcodes: state.lockedHexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  setLockedHexcodes: (hexcode) => dispatch(setLockedHexcodes(hexcode)),
  removeLockedHexcode: (hexcode) => dispatch(removeLockedHexcode(hexcode))
});


export default connect(mapStateToProps, mapDispatchToProps)(ColorCard);

