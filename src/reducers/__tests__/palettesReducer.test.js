import { palettesReducer } from '../palettesReducer';
import * as actions from '../../actions';
import { mockPalettes } from '../../__fixtures__/mockData';

describe('palettesReducer', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = palettesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return all of the palettes', () => {
        const initialState = []
        const expected = mockPalettes
        const result = palettesReducer(initialState, actions.setPalettes({ palettes: expected}))
        expect(result).toEqual(expected)
    });
});