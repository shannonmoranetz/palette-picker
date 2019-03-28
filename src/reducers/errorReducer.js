export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error.message || action.error
    default:
      return state;
  }
};