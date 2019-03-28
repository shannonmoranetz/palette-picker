import { fetchPalettes } from '../fetchPalettes';
import { fetchData } from '../../utils/api';
import * as actions from '../../actions';
import { mockPalettes } from '../../__fixtures__/mockData';

jest.mock('../../utils/api')

describe('fetchPalettes', () => {
    let id;
    let mockDispatch;
    let thunk;

    beforeEach(() => {
        id = 1
        thunk = fetchPalettes(id)
        mockDispatch = jest.fn()
    });

    it('should call fetchData with the correct params', async () => {
        await thunk(mockDispatch)
        expect(fetchData).toHaveBeenCalledWith(`/projects/${id}/palettes`, 'GET')
    });

    it('should call dispatch with setPalettes if the response is ok', async () => {
        const expected = mockPalettes;
        fetchData.mockImplementation(() => expected)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setPalettes(expected))
    });

    it('should dispatch setError with a message if the response is not ok', async () => {
        fetchData.mockImplementation(() => {
            throw 'Error on fetching data'
        })
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Error on fetching data'))
    });
});
