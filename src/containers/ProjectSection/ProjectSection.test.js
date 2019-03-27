import React from 'react';
import { shallow } from 'enzyme';
import { ProjectSection, mapStateToProps } from './ProjectSection';

describe('ProjectSection', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectSection/>
      )
    });

  describe('ProjectSection component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with loadedProject as key', () => {
      const mockState = {
        projects: [],
        isLoading: true,
        error: '',
        palettes: [],
        extra: '',
        loadedProject: ''
      }
      const expected = {
        loadedProject: ''
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });
});