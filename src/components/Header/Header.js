import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <div className="Header">
            <div className="title-container">
                <h1 className="title">pa<span className="title-em">Lit</span></h1>
                <FontAwesomeIcon icon={faFire} className="fire-icon"/>
            </div>
            <div className="subtitle-container">
                <p className="subtitle">Find and save your favorite colors</p>
            </div>
        </div>
    )
}

export default Header;