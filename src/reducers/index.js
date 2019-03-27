import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';
import { palettesReducer } from './palettesReducer';
import { hexcodesReducer } from './hexcodesReducer';
import { shouldDisplayRandomReducer } from './shouldDisplayRandomReducer';
import { lockedHexcodesReducer } from './lockedHexcodesReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer,
  hexcodes: hexcodesReducer,
  lockedHexcodes: lockedHexcodesReducer,
  shouldDisplayRandom: shouldDisplayRandomReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;