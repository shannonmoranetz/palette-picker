import { lockedHexcodesReducer } from '../lockedHexcodesReducer';
import * as actions from '../../actions';

describe('lockedHexcodesReducer', () => {
    it('should return the initial state as default', () => {
        const expected = []
        const result = lockedHexcodesReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return an array of locked hexcodes', () => {
        const initialState = []
        const expected = ["FFFFFF"]
        const result = lockedHexcodesReducer(initialState, actions.setLockedHexcodes("FFFFFF"))
        expect(result).toEqual(expected)
    });
});