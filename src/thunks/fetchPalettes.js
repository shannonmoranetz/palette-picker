import { setLoading, setError, setPalettes } from '../actions';
import { fetchData } from '../utils/api.js';

export const fetchPalettes = (id) => {
  let endpoint = `/projects/${id}/palettes`;
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const result = await fetchData(endpoint, 'GET');
      console.log(result)
      if (result.palettes.length) {
        dispatch(setPalettes(result));
      dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setError(error));
    }
  }
}