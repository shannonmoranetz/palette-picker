export const hexcodesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_HEXCODES':
      return action.hexcodes;
    default:
      return state;
  }
};