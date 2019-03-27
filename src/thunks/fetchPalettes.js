import { setError, setPalettes } from '../actions';
import { fetchData } from '../utils/api.js';

export const fetchPalettes = (id) => {
  let endpoint = `/projects/${id}/palettes`;
  return async (dispatch) => {
    try {
      const result = await fetchData(endpoint, 'GET');
      dispatch(setPalettes(result));
    } catch (error) {
      dispatch(setError(error));
    }
  }
}