export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return action.palettes.palettes;
    default:
      return state;
  }
};