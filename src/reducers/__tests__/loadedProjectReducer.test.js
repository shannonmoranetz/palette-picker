import { loadedProjectReducer } from '../loadedProjectReducer';
import * as actions from '../../actions';

describe('loadedProjectReducer', () => {
    it('should return the initial state', () => {
        const expected = 'Warm colors project'
        const result = loadedProjectReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the current project name', () => {
        const currentState = 'Warm colors project'
        const expected = 'Cool colors project'
        const result = loadedProjectReducer(currentState, actions.setLoadedProject('Cool colors project'))
        expect(result).toEqual(expected)
    });
});