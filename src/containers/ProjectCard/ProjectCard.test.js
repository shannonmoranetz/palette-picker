import React from 'react';
import { shallow } from 'enzyme';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectCard/>
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});