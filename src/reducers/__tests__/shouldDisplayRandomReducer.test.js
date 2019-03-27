import { shouldDisplayRandomReducer } from '../shouldDisplayRandomReducer';
import * as actions from '../../actions';

describe('shouldDisplayRandomReducer', () => {
    it('should return the initial state', () => {
        const expected = true
        const result = shouldDisplayRandomReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return a bool', () => {
        const initialState = true
        const expected = false
        const result = shouldDisplayRandomReducer(initialState, actions.toggleDisplayRandom(expected))
        expect(result).toEqual(expected)
    });
});