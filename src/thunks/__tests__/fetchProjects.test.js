import { fetchProjects } from '../fetchProjects';
import { fetchData } from '../../utils/api';
import * as actions from '../../actions';
import { mockProjects } from '../../__fixtures__/mockData';

jest.mock('../../utils/api')

describe('fetchProjects', () => {
    let mockDispatch;
    let thunk;

    beforeEach(() => {
        thunk = fetchProjects()
        mockDispatch = jest.fn()
    });

    it('should call fetchData with the correct params', async () => {
        await thunk(mockDispatch)
        expect(fetchData).toHaveBeenCalledWith(`/projects`, 'GET')
    });

    it('should call dispatch with setPalettes if the response is ok', async () => {
        const expected = mockProjects;
        fetchData.mockImplementation(() => expected)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setProjects(expected))
    });

    it('should dispatch setError with a message if the response is not ok', async () => {
        fetchData.mockImplementation(() => {
            throw 'Error on fetching data'
        })
        
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error on fetching data'))
    });
});