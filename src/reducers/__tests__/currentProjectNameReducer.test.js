import { currentProjectNameReducer } from '../currentProjectNameReducer';
import * as actions from '../../actions';

describe('currentProjectNameReducer', () => {
    it('should return the initial state', () => {
        const expected = 'Warm colors project'
        const result = currentProjectNameReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the current project name', () => {
        const currentState = 'Warm colors project'
        const expected = 'Cool colors project'
        const result = currentProjectNameReducer(currentState, actions.setCurrentProjectName('Cool colors project'))
        expect(result).toEqual(expected)
    });
});