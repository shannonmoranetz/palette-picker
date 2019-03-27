import { setError, setProjects } from '../actions';
import { fetchData } from '../utils/api.js';

export const fetchProjects = () => {
  const endpoint = '/projects';
  return async (dispatch) => {
    try {
      const result = await fetchData(endpoint, 'GET');
      dispatch(setProjects(result));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}