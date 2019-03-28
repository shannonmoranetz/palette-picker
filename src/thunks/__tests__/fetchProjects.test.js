import { fetchProjects } from '../fetchProjects';
import { fetchData } from '../../utils/api';
import * as actions from '../../actions';

describe('fetchProjects', () => {
    let id;
    let mockDispatch;
    let thunk;

    beforeEach(() => {
        id = 1
        thunk = fetchProjects()
        mockDispatch = jest.fn()
    });

    it('should dispatch setError with a message if the response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
            throw 'Error on fetching data'
        })
        
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error on fetching data'))
    });
});