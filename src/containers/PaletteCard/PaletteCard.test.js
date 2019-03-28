import React from 'react';
import { shallow } from 'enzyme';
import { PaletteCard, mapStateToProps, mapDispatchToProps } from './PaletteCard';
import { mockPalettes } from '../../__fixtures__/mockData';
import { setHexcodes } from '../../actions/index';

describe('PaletteCard', () => {
  let wrapper;
  let mockSetHexcodes;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteCard projectPalettes={mockPalettes} setHexcodes={mockSetHexcodes}/>
      )
    mockSetHexcodes = jest.fn()
    });

  describe('PaletteCard component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with palettes as keys', () => {
      const mockState = {
        palettes: [],
        extra: ''
      }
      const expected = {
        palettes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setHexcodes is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setHexcodes();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHexcodes()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});