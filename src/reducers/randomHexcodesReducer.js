export const randomHexcodesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RANDOM_HEXCODES':
      return action.hexcodes;
    default:
      return state;
  }
};