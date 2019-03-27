import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from './ProjectList';
import { mockProjects, mockPalettes } from '../../__fixtures__/mockData';


describe('ProjectList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <ProjectList projects={mockProjects} palettes={mockPalettes} />
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});