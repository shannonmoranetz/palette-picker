import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setHexcodes } from '../../actions';

export class ColorCard extends Component {

  toggleColorLock = async () => {
    let updatedHexcodes = this.props.hexcodes.map((hexcode) => {
      if(hexcode.color === this.props.hexcode.color && hexcode.isLocked === true){
        hexcode.isLocked = false;
      } else if (hexcode.color === this.props.hexcode.color) {
        hexcode.isLocked = true;
      }
      return hexcode;
    })
    await this.props.setHexcodes(updatedHexcodes)
  }
  
  render() {
    return (
      <div className="ColorCard" style={{backgroundColor: `#${this.props.hexcode.color}`}}>
        <FontAwesomeIcon icon={this.props.hexcode.isLocked ? faLock : faUnlock} className="lock-icon" onClick={(e) => this.toggleColorLock(e)}/>
        <p className="hexcode">#{this.props.hexcode.color}</p>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  hexcodes: state.hexcodes
});

export const mapDispatchToProps = (dispatch) => ({
  setHexcodes: (hexcodes) => dispatch(setHexcodes(hexcodes))
});


export default connect(mapStateToProps, mapDispatchToProps)(ColorCard);

