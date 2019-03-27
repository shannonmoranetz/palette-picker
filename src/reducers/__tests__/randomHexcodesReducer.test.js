import { randomHexcodesReducer } from '../randomHexcodesReducer';
import * as actions from '../../actions';

describe('randomHexcodesReducer', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = randomHexcodesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return an array of all the random hexcodes in an array', () => {
        const initialState = []
        const expected = ["E522FA", "18ABBB", "FD1604", "BA2442", "D38F66"]
        const result = randomHexcodesReducer(initialState, actions.setRandomHexcodes(expected))
        expect(result).toEqual(expected)
    });
});