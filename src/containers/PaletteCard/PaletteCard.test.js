import React from 'react';
import { shallow } from 'enzyme';
import { PaletteCard } from './PaletteCard';

describe('PaletteCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteCard/>
      )
    });
  it.skip('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});