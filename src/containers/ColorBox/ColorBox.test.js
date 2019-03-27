import React from 'react';
import { shallow } from 'enzyme';
import { ColorBox, mapStateToProps } from './ColorBox';

describe('ColorBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorBox />
      )
    });

  describe('ColorBox component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  // **Write returnColorCards and findCurrentPaletteColors tests here**

  describe('mapStateToProps', () => {
    it('should return an object with palettes, currentPaletteId, randomHexcodes, and shouldDisplayRandom as keys', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: '',
        lockedHexcodes: [],
        currentPaletteId: 1,
        randomHexcodes: [],
        shouldDisplayRandom: true
      }
      const expected = {
        palettes: [],
        currentPaletteId: 1,
        randomHexcodes: [],
        shouldDisplayRandom: true
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });
});