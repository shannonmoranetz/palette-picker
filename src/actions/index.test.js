import * as actions from './index';
import { mockProjects, mockPalettes } from '../__fixtures__/mockData';

describe('actions', () => {
    it('should return a type of SET_ERROR with an error', () => {
        const error = 'Error'
        const expected = {
            type: 'SET_ERROR',
            error
        }
        const result = actions.setError(error)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_LOADING with a loading bool', () => {
        const isLoading = true
        const expected = {
            type: 'SET_LOADING',
            isLoading
        }
        const result = actions.setLoading(isLoading)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_PROJECTS with all of the projects', () => {
        const projects = mockProjects
        const expected = {
            type: 'SET_PROJECTS',
            projects
        }
        const result = actions.setProjects(projects)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_PALETTES with all of the palettes', () => {
        const palettes = mockPalettes
        const expected = {
            type: 'SET_PALETTES',
            palettes
        }
        const result = actions.setPalettes(palettes)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_CURRENT_PALETTE_ID with an id', () => {
        const paletteId = 1
        const expected = {
            type: 'SET_CURRENT_PALETTE_ID',
            paletteId
        }
        const result = actions.setCurrentPaletteId(paletteId)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_CURRENT_PROJECT_NAME with a project name', () => {
        const projectName = 'Winter colors project'
        const expected = {
            type: 'SET_CURRENT_PROJECT_NAME',
            projectName
        }
        const result = actions.setCurrentProjectName(projectName)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_RANDOM_HEXCODES with an array of hexcodes', () => {
        const hexcodes = ["E522FA", "18ABBB", "FD1604", "BA2442", "D38F66"]
        const expected = {
            type: 'SET_RANDOM_HEXCODES',
            hexcodes
        }
        const result = actions.setRandomHexcodes(hexcodes)
        expect(result).toEqual(expected)
    });

    it('should return a type of DISPLAY_RANDOM with a bool', () => {
        const shouldDisplay = true
        const expected = {
            type: 'DISPLAY_RANDOM',
            shouldDisplay
        }
        const result = actions.toggleDisplayRandom(shouldDisplay)
        expect(result).toEqual(expected)
    });

    it('should return a type of SET_LOCKED_HEXCODES with an array of locked hexcodes', () => {
        const hexcode = "E522FA"
        const expected = {
            type: 'SET_LOCKED_HEXCODES',
            hexcode
        }
        const result = actions.setLockedHexcodes(hexcode)
        expect(result).toEqual(expected)
    });

    it('should return a type of REMOVE_LOCKED_HEXCODE with a hexcode', () => {
        const hexcode = "18ABBB"
        const expected = {
            type: 'REMOVE_LOCKED_HEXCODE',
            hexcode
        }
        const result = actions.removeLockedHexcode(hexcode)
        expect(result).toEqual(expected)
    });
});