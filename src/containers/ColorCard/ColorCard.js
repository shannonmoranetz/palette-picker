import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

export class ColorCard extends Component {
  render() {
    return (
      <div className="ColorCard" style={{backgroundColor: `#${this.props.color}`}}>
            <FontAwesomeIcon icon={faLock} className="lock-icon"/>
            <p className="hexcode">#{this.props.color}</p>
      </div>
    );
  }
}

export default ColorCard;

