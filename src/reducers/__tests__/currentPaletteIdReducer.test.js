import { currentPaletteIdReducer } from '../currentPaletteIdReducer';
import * as actions from '../../actions';

describe('currentPaletteIdReducer', () => {
    it('should return the initial state', () => {
        const expected = 1
        const result = currentPaletteIdReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the palette id', () => {
        const currentState = 1
        const expected = 2
        const result = currentPaletteIdReducer(currentState, actions.setCurrentPaletteId(2))
        expect(result).toEqual(expected)
    });
});