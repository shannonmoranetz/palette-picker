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
    it.skip('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
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