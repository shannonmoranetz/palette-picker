export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error.message;
    default:
      return state;
  }
};