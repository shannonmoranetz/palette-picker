import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { loadedProjectReducer } from './loadedProjectReducer';
import { palettesReducer } from './palettesReducer';
import { hexcodesReducer } from './hexcodesReducer';
import { lockedHexcodesReducer } from './lockedHexcodesReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  loadedProject: loadedProjectReducer,
  hexcodes: hexcodesReducer,
  lockedHexcodes: lockedHexcodesReducer
});

export default rootReducer;