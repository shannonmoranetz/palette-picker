import { setLoading, setError, setProjects } from '../actions';
import { fetchData } from '../utils/api.js';

export const fetchProjects = () => {
  const endpoint = '/projects';
  return async (dispatch) => {
    try {
      // dispatch(setLoading(true));
      const result = await fetchData(endpoint, 'GET');
      dispatch(setProjects(result));
      // dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}