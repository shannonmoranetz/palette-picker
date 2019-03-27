import React from 'react';
import { shallow } from 'enzyme';
import { ColorBox } from './ColorBox';

describe('ColorBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorBox />
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});