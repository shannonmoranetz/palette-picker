export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      let allPalettes = [...state, ...action.palettes.palettes];
      let sortedPalettes = allPalettes.sort((a, b) => {
        return a.id - b.id
      })
      return sortedPalettes;
    default:
      return state;
  }
};