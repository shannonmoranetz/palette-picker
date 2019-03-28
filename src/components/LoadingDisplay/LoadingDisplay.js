import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export const LoadingDisplay = () => {
    return (
        <div className="LoadingDisplay">
          <h2 className="title"><FontAwesomeIcon icon={faPencilAlt} className="pencil-icon"/> Loading...</h2>
        </div>
    )
}

export default LoadingDisplay;