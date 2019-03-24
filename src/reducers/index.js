import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  error: errorReducer,
  isLoading: loadingReducer
});

export default rootReducer;