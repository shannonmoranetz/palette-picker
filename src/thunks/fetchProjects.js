import { setLoading, setError, setProjects } from '../actions';
import { fetchData } from '../utils/api.js';

const endpoint = '/projects';

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const results = await fetchData(endpoint, 'GET');
      dispatch(setProjects(results));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}