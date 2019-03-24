import React from 'react';
import PaletteControls from '../PaletteControls/PaletteControls';
import ColorBox from '../ColorBox/ColorBox';

export const PaletteSection = () => {
    return (
        <div className="PaletteSection">
            <p>PaletteSection</p>
            <PaletteControls/>
            <ColorBox/>
        </div>
    )
}

export default PaletteSection;