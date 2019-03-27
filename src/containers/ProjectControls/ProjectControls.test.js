import React from 'react';
import { shallow } from 'enzyme';
import { ProjectControls, mapStateToProps, mapDispatchToProps } from './ProjectControls';
import { mockProjects } from '../../__fixtures__/mockData';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';

jest.mock('../../thunks/fetchProjects')
jest.mock('../../thunks/fetchPalettes')


describe('ProjectControls', () => {
  let wrapper;
  let mockFetchProjects;
  let mockFetchPalettes;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectControls fetchProjects={mockFetchProjects} fetchPalettes={mockFetchPalettes} projects={mockProjects}/>
      )
    mockFetchProjects = jest.fn()
    mockFetchPalettes = jest.fn()
    });

  describe('ProjectControls component', () => {
    it.skip('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with projects, palettes, and hexcodes as keys', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: '',
        lockedHexcodes: [],
        currentPaletteId: 1,
        hexcodes: [],
        shouldDisplayRandom: true
      }
      const expected = {
        projects: [],
        palettes: [],
        hexcodes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchProjects is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchProjects();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchProjects()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch when fetchPalettes is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchPalettes();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPalettes()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});