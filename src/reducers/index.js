import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';
import { currentPaletteIdReducer } from './currentPaletteIdReducer';
import { currentProjectNameReducer } from './currentProjectNameReducer';
import { randomHexcodesReducer } from './randomHexcodesReducer';
import { shouldDisplayRandomReducer } from './shouldDisplayRandomReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  currentPaletteId: currentPaletteIdReducer,
  currentProjectName: currentProjectNameReducer,
  randomHexcodes: randomHexcodesReducer,
  shouldDisplayRandom: shouldDisplayRandomReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;