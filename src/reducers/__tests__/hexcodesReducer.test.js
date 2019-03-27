import { hexcodesReducer } from '../hexcodesReducer';
import * as actions from '../../actions';

describe('hexcodesReducer', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = hexcodesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return an array of all the hexcodes in an array', () => {
        const initialState = []
        const expected = ["E522FA", "18ABBB", "FD1604", "BA2442", "D38F66"]
        const result = hexcodesReducer(initialState, actions.setHexcodes(expected))
        expect(result).toEqual(expected)
    });
});