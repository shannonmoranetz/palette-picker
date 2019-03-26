export const currentProjectNameReducer = (state = 'Warm colors project', action) => {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT_NAME':
    return action.projectName;
    default:
      return state;
  }
};