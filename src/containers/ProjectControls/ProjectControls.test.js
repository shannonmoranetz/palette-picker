import React from 'react';
import { shallow } from 'enzyme';
import { ProjectControls } from './ProjectControls';

describe('ProjectControls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProjectControls/>
      )
    });
  it.skip('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});