export const setError = (error) => ({
  type: 'SET_ERROR', 
  error
});

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING', 
  isLoading
});

export const setProjects = (projects) => ({
  type: 'SET_PROJECTS', 
  projects
});

export const setPalettes = (palettes) => ({
  type: 'SET_PALETTES', 
  palettes
});

export const setCurrentPaletteId = (paletteId) => ({
  type: 'SET_CURRENT_PALETTE_ID', 
  paletteId
});

export const setHexcodes = (hexcodes) => ({
  type: 'SET_HEXCODES', 
  hexcodes
});

export const toggleDisplayRandom = (shouldDisplay) => ({
  type: 'DISPLAY_RANDOM', 
  shouldDisplay
});

export const setLockedHexcodes = (hexcode) => ({
  type: 'SET_LOCKED_HEXCODES',
  hexcode
});

export const removeLockedHexcode = (hexcode) => ({
  type: 'REMOVE_LOCKED_HEXCODE',
  hexcode
});