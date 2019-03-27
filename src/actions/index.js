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

export const addProject = (project) => ({
  type: 'ADD_PROJECT', 
  project
});

export const setPalettes = (palettes) => ({
  type: 'SET_PALETTES', 
  palettes
});

export const addPalette = (palette) => ({
  type: 'ADD_PALETTE', 
  palette
});

export const setLoadedProject = (loadedProject) => ({
  type: 'SET_LOADED_PROJECT', 
  loadedProject
});

export const setHexcodes = (hexcodes) => ({
  type: 'SET_HEXCODES', 
  hexcodes
});

export const setLockedHexcodes = (hexcode) => ({
  type: 'SET_LOCKED_HEXCODES',
  hexcode
});

export const removeLockedHexcode = (hexcode) => ({
  type: 'REMOVE_LOCKED_HEXCODE',
  hexcode
});