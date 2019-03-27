import React from 'react';
import { shallow } from 'enzyme';
import { ProjectCard, mapStateToProps, mapDispatchToProps } from './ProjectCard';
import { toggleDisplayRandom, setCurrentPaletteId, setCurrentProjectName } from '../../actions';

describe('ProjectCard', () => {
  let wrapper;
  let mockSetCurrentPaletteId;
  let mockSetCurrentProjectName;
  let mockToggleDisplayRandom;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectCard toggleDisplayRandom={mockToggleDisplayRandom} setCurrentPaletteId={mockSetCurrentPaletteId} setCurrentProjectName={mockSetCurrentProjectName}/>
    )
    mockSetCurrentPaletteId = jest.fn()
    mockSetCurrentProjectName = jest.fn()
    mockToggleDisplayRandom = jest.fn()
    });

  describe('ProjectCard Component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // **Write: findProjectPalette, returnElements, createPaletteId, updatedSelectedPalette tests here**
  });

  describe('mapStateToProps', () => {
    it('should return an object with palettes and currentPaletteId', () => {
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
        palettes: [],
        currentPaletteId: 1
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when toggleDisplayRandom is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = toggleDisplayRandom();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.toggleDisplayRandom()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch when setCurrentPaletteId is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setCurrentPaletteId();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCurrentPaletteId()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch when setCurrentProjectName is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setCurrentProjectName();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCurrentProjectName()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});