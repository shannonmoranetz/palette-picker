import React from 'react';
import { shallow } from 'enzyme';
import { PaletteControls, mapStateToProps, mapDispatchToProps } from './PaletteControls';
import { setHexcodes } from '../../actions';
import { mockPalettes } from '../../__fixtures__/mockData';

describe('PaletteControls', () => {
  let wrapper;
  let mockSetHexcodes;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteControls setHexcodes={mockSetHexcodes} palettes={mockPalettes} hexcodes={['ffffff', 'fffff1', 'fffff2', 'fffff3', 'fffff4', 'fffff5']}/>
      )
      mockSetHexcodes = jest.fn()
    });

    describe('PaletteControls component', () => {
      it.skip('should properly render the component elements', () => {
        expect(wrapper).toMatchSnapshot();
      });

      // **Write: componentDidMount, findPaletteName, generateRandomColors methods here**
    });

    describe('mapStateToProps', () => {
      it.skip('should return an object with palettes and hexcodes as keys', () => {
        const mockState = {
          projects: [],
          isLoading: false,
          error: '',
          palettes: [],
          extra: '',
          lockedHexcodes: [],
          currentPaletteId: 1,
          randomHexcodes: [],
          shouldDisplayRandom: true,
          hexcodes: []
        }
        const expected = {
          palettes: [],
          hexcodes: []
        }
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
      });
    });

    describe('mapDispatchToProps', () => {
      it.skip('should call dispatch when setHexcodes is called', () => {
        const mockDispatch = jest.fn()
        const actionToDispatch = setHexcodes();
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.setHexcodes()
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });
    });
});