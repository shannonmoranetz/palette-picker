export const currentPaletteReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PALETTE':
    return action.palette;
    default:
      return state;
  }
};