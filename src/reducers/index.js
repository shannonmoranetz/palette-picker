import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';
import { currentPaletteReducer } from './currentPaletteReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  currentPalette: currentPaletteReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;