export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return [...state, ...action.palettes.palettes];
    default:
      return state;
  }
};