export const loadedProjectReducer = (state = 'Warm colors project', action) => {
  switch (action.type) {
    case 'SET_LOADED_PROJECT':
      return action.loadedProject;
    default:
      return state;
  }
};