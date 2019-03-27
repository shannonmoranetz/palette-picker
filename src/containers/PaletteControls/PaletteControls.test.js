import React from 'react';
import { shallow } from 'enzyme';
import { PaletteControls, mapStateToProps, mapDispatchToProps } from './PaletteControls';
import { setRandomHexcodes, toggleDisplayRandom } from '../../actions';

describe('PaletteControls', () => {
  let wrapper;
  let mockSetRandomHexcodes;
  let mockToggleDisplayRandom;
  beforeEach(() => {
    wrapper = shallow(
      <PaletteControls setRandomHexcodes={mockSetRandomHexcodes} toggleDisplayRandom={mockToggleDisplayRandom}/>
      )
      mockSetRandomHexcodes = jest.fn()
      mockToggleDisplayRandom = jest.fn()
    });

    describe('PaletteControls component', () => {
      it('should properly render the component elements', () => {
        expect(wrapper).toMatchSnapshot();
      });

      // **Write: componentDidMount, findPaletteName, generateRandomColors methods here**
    });

    describe('mapStateToProps', () => {
      it('should return an object with palettes, currentPaletteId, and randomHexcodes as keys', () => {
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
        }
        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
      });
    });

    describe('mapDispatchToProps', () => {
      it('should call dispatch when setRandomHexcodes is called', () => {
        const mockDispatch = jest.fn()
        const actionToDispatch = setRandomHexcodes();
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.setRandomHexcodes()
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });

      it('should call dispatch when toggleDisplayRandom is called', () => {
        const mockDispatch = jest.fn()
        const actionToDispatch = toggleDisplayRandom();
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.toggleDisplayRandom()
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });
    });
});