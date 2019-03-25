import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;