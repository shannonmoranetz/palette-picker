import React from 'react';
import { shallow } from 'enzyme';
import { ProjectSection } from './ProjectSection';

describe('ProjectSection', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectSection/>
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});