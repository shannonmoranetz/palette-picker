import { fetchData } from './api';

describe('fetchData', () => {
    let path;
    let method;
    let data;
    let mockId;

    beforeEach(() => {
        mockId = 1
        path = '/projects';
        method = 'GET';
        data = null;
    });

    it('should call fetch with the correct parameters', () => {
    const expectedUrl = `https://palette-picker-api.herokuapp.com/api/v1${path}`;
    window.fetch = jest.fn();
    fetchData(path, method);
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, data);
    });

    it('should return an id if everything is okay with an ok status', async () => {
    method = 'DELETE';
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
            id: 1
        })
    }));
    const result = await fetchData(path, method, data)
    expect(result).toEqual({id: 1});
    });

    it('should throw an error if everything is not okay', async () => {
    const expected = Error('Error on fetching data: Error on fetching data');
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        statusText: 'Error on fetching data',
        ok: false
    }));
    await expect(fetchData(path, method)).rejects.toEqual(expected);
    });
});
