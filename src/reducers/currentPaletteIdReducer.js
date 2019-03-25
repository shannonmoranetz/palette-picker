export const currentPaletteIdReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PALETTE_ID':
    return action.paletteId;
    default:
      return state;
  }
};