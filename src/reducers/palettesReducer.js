export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      let palettes = []
      action.palettes.palettes.forEach((palette) => {
        this.state.forEach((existingPalette) => {
          if (palette.project_id != existingPalette.id) {
            palettes.push(palette)
            // console.log(palettes)
          }
        })
      })
      return palettes
      // return action.palettes.palettes;
    default:
      return state;
  }
};