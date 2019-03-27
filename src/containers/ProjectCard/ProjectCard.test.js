import React from 'react';
import { shallow } from 'enzyme';
import { ProjectCard, mapStateToProps, mapDispatchToProps } from './ProjectCard';
import { setLoadedProject } from '../../actions';
import { mockPalettes } from '../../__fixtures__/mockData';

describe('ProjectCard', () => {
  let wrapper;
  let mockSetLoadedProject;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectCard setLoadedProject={mockSetLoadedProject} project={{id: 1, name: 'project1'}} palettes={mockPalettes}/>
    )
    mockSetLoadedProject = jest.fn()
    });

  describe('ProjectCard Component', () => {
    it.skip('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // **Write: findProjectPalette, returnElements, createPaletteId, updatedSelectedPalette tests here**
  });

  describe('mapStateToProps', () => {
    it('should return an object with palettes', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: '',
        lockedHexcodes: [],
        currentPaletteId: 1,
        randomHexcodes: [],
        shouldDisplayRandom: true
      }
      const expected = {
        palettes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setLoadedProject is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setLoadedProject();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setLoadedProject()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});