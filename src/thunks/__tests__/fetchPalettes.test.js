import { fetchPalettes } from '../fetchPalettes';
import { fetchData } from '../../utils/api';
import * as actions from '../../actions';

describe('fetchPalettes', () => {
    let id;
    let mockDispatch;
    let thunk;

    beforeEach(() => {
        id = 1
        thunk = fetchPalettes(id)
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
