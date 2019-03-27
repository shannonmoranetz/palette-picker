import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList, mapStateToProps } from './ProjectList';
import { mockProjects } from '../../__fixtures__/mockData';

describe('ProjectList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <ProjectList projects={mockProjects} />
      )
    });

    describe('ProjectList component', () => {
      it('should properly render the component elements', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('mapStateToProps', () => {
      it('should return an object with projects as a key', () => {
        const mockState = {
          projects: [],
          isLoading: true,
          error: '',
          palettes: [],
          extra: ''
        }
        const expected = {
          projects: []
        }
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
      });
    });
});