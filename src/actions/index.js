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

export const setCurrentPalette = (palette) => ({
  type: 'SET_CURRENT_PALETTE', 
  palette
});