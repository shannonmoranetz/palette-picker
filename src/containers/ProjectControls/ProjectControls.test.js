import React from 'react';
import { shallow } from 'enzyme';
import { ProjectControls, mapStateToProps, mapDispatchToProps } from './ProjectControls';
import { mockProjects } from '../../__fixtures__/mockData';
import * as actions from '../../actions';

describe('ProjectControls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProjectControls projects={mockProjects}/>
    )
    });

  describe('ProjectControls component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('handleChangeProject should set state with the project name', () => {
      const mockEvent = {
        target: {
          value: 'Cool Colors'
        }
      }
      const expectedState = {
        projectName: 'Cool Colors',
        paletteName: '',
        selectedSaveLocation: 'Warm colors project'
      };
      wrapper.instance().handleChangeProject(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    });

    it('handleSubmitProject should call createProject', () => {
      const mockEvent = {
        target: {
          value: 'Cool Colors'
        },
        preventDefault: jest.fn()
      }
      const spy = jest.spyOn(wrapper.instance(), 'handleSubmitProject')
      wrapper.find('.create-project-form').simulate('submit', mockEvent)
      expect(spy).toHaveBeenCalledWith(mockEvent)
    });

    it('handleChangePalette should set state with the palette name', () => {
      const mockEvent = {
        target: {
          value: 'Yummy Palette'
        }
      }
      const expectedState = {
        projectName: 'Warm Colors Project',
        paletteName: 'Yummy Palette',
        selectedSaveLocation: 'Warm colors project'
      };
      wrapper.instance().handleChangePalette(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    });

    it('handleSubmitPalette should call createPalette', () => {
      const mockEvent = {
        target: {
          value: 'A Nice Palette'
        },
        preventDefault: jest.fn()
      }
      const spy = jest.spyOn(wrapper.instance(), 'handleSubmitPalette')
      wrapper.find('.save-palette-form').simulate('submit', mockEvent)
      expect(spy).toHaveBeenCalledWith(mockEvent)
    });

    it('setSelectedSaveLocation should set state with the selected location', () => {
      const mockEvent = {
        target: {
          value: 'Winter colors project'
        }
      }
      const expectedState = {
        projectName: 'Warm Colors Project',
        paletteName: '',
        selectedSaveLocation: 'Winter colors project'
      };
      wrapper.instance().setSelectedSaveLocation(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with projects, palettes, and hexcodes as keys', () => {
      const mockState = {
        projects: [],
        palettes: [],
        hexcodes: [],
        extra: true
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
    it('should call dispatch when addProject is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.addProject();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProject();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when addPalette is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.addPalette();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});