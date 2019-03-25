import React from 'react';
import { shallow } from 'enzyme';
import { ParentSection } from './ParentSection';

describe('ParentSection', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ParentSection/>
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});