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

export const setCurrentProjectName = (projectName) => ({
  type: 'SET_CURRENT_PROJECT_NAME', 
  projectName
});

export const setRandomHexcodes = (hexcodes) => ({
  type: 'SET_RANDOM_HEXCODES', 
  hexcodes
});

export const toggleDisplayRandom = (shouldDisplay) => ({
  type: 'DISPLAY_RANDOM', 
  shouldDisplay
});
