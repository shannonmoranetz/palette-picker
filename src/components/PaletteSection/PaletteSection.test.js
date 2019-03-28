import React from 'react';
import { shallow } from 'enzyme';
import { PaletteSection } from './PaletteSection';

describe('PaletteSection', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteSection/>
      )
    });

  describe('PaletteSection compoment', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});