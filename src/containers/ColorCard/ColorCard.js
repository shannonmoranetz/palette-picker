import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

export class ColorCard extends Component {
  render() {
    const { palette } = this.props;
    return (
      <div className="ColorCard">
        <p className="hexcode">#ffffff</p>
        <FontAwesomeIcon icon={faLock} className="lock-icon"/>
      </div>
    );
  }
}

export default ColorCard;