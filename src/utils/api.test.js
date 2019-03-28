import { fetchData } from './api';

describe('fetchData', () => {
    let path;
    let method;
    let data;
    let mockId;

    beforeEach(() => {
        mockId = 1
        path = '/projects';
        data = {
            "name": "NewProject"
        };
    });
    
    it('should call fetch to GET with the correct parameters', () => {
        const expectedUrl = `https://palette-picker-api.herokuapp.com/api/v1${path}`;
        window.fetch = jest.fn();
        method = 'GET';
        fetchData(path, method);
        expect(window.fetch).toHaveBeenCalledWith(expectedUrl, null);
    });

    it('should call fetch to POST with the correct parameters', () => {
        const expectedUrl = `https://palette-picker-api.herokuapp.com/api/v1${path}`;
        const expectedParams = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        };
        window.fetch = jest.fn();
        fetchData(path, method, data);
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
