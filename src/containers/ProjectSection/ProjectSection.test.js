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
  it.skip('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});