export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects;
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      let previousProjects = state.filter((project) => {
        return action.id !== project.id
      })
      console.log(previousProjects)
      return previousProjects;
    default:
      return state;
  }
};