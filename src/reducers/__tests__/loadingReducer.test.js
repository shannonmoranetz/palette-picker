import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {

    it('should return the initial state as default', () => {
        const expected = false
        const result = loadingReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should set loading with a string', () => {
        const expected = true
        const result = loadingReducer(undefined, actions.setLoading(true))
        expect(result).toEqual(expected)
    })
});