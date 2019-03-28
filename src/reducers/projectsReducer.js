export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects;
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      let updatedProjects = state.filter((project) => {
        return action.id !== project.id
      })
      return updatedProjects;
    default:
      return state;
  }
};