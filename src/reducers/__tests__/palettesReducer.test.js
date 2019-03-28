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

    it('should add a new palette', () => {
        const initialState = [{ color1: 'ffffff'}]
        const paletteToAdd = { color1: 'aaaaaa'}
        const expected = [{ color1: 'ffffff'}, { color1: 'aaaaaa'}]
        const result = palettesReducer(initialState, actions.addPalette(paletteToAdd))
        expect(result).toEqual(expected)
    });

    it('should delete an existing palette', () => {
        const initialState = [{ id: 1 }, { id: 2 }]
        const paletteToDelete = 2;
        const expected = [{ id: 1}]
        const result = palettesReducer(initialState, actions.deletePalette(paletteToDelete))
        expect(result).toEqual(expected)
    });
});