import React from 'react';
import { shallow } from 'enzyme';
import { PaletteControls } from './PaletteControls';

describe('PaletteControls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteControls/>
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});