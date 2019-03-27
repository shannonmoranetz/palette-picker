import React from 'react';
import { shallow } from 'enzyme';
import { ColorBox, mapStateToProps } from './ColorBox';

describe('ColorBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorBox hexcodes={['ffffff', 'fffff1', 'fffff2', 'fffff3', 'fffff4']}/>
      )
    });

  describe('ColorBox component', () => {
    it.skip('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  // **Write returnColorCards and findCurrentPaletteColors tests here**

  describe('mapStateToProps', () => {
    it('should return an object with hexcodes as keys', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: '',
        lockedHexcodes: [],
        currentPaletteId: 1,
        hexcodes: [],
        shouldDisplayRandom: true
      }
      const expected = {
        hexcodes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });
});