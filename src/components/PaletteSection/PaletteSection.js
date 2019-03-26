import React from 'react';
import PaletteControls from '../../containers/PaletteControls/PaletteControls';
import ColorBox from '../../containers/ColorBox/ColorBox';

export const PaletteSection = () => {
    return (
        <div className="PaletteSection">
            <PaletteControls/>
            <ColorBox/>
        </div>
    )
}

export default PaletteSection;