import { projectsReducer } from '../projectsReducer';
import * as actions from '../../actions';
import { mockProjects } from '../../__fixtures__/mockData';

describe('projectsReducer', () => {
    it('should return the intial state', () => {
        const expected = []
        const result = projectsReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return all of the projects in an array', () => {
        const initialState = []
        const expected = mockProjects
        const result = projectsReducer(initialState, actions.setProjects(expected))
        expect(result).toEqual(expected)
    });
});