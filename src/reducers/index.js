import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';
import { currentPaletteIdReducer } from './currentPaletteIdReducer';
import { currentProjectNameReducer } from './currentProjectNameReducer';
import { randomHexcodesReducer } from './randomHexcodesReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  currentPaletteId: currentPaletteIdReducer,
  currentProjectName: currentProjectNameReducer,
  randomHexCodes: randomHexcodesReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;