import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';
import { currentPaletteIdReducer } from './currentPaletteIdReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  currentPaletteId: currentPaletteIdReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;