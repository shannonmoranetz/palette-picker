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

    it('should add a new project', () => {
        const initialState = [{ name: 'summer project'}]
        const paletteToAdd = { name: 'winter project'}
        const expected = [{ name: 'summer project'}, { name: 'winter project'}]
        const result = projectsReducer(initialState, actions.addProject(paletteToAdd))
        expect(result).toEqual(expected)
    });

    it('should delete an existing project', () => {
        const initialState = [{ id: 1 }, { id: 2 }]
        const projectToDelete = 2;
        const expected = [{ id: 1}]
        const result = projectsReducer(initialState, actions.deleteProject(projectToDelete))
        expect(result).toEqual(expected)
    });
});