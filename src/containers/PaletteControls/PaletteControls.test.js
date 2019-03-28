import React from 'react';
import { shallow } from 'enzyme';
import { PaletteControls, mapStateToProps, mapDispatchToProps } from './PaletteControls';
import { setHexcodes } from '../../actions';
import { mockPalettes } from '../../__fixtures__/mockData';

describe('PaletteControls', () => {
  let wrapper;
  let mockSetHexcodes;
  mockSetHexcodes = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <PaletteControls setHexcodes={mockSetHexcodes} palettes={mockPalettes} hexcodes={['ffffff', 'fffff1', 'fffff2', 'fffff3', 'fffff4', 'fffff5']}/>
      )
    });

    describe('PaletteControls component', () => {
      it('should properly render the component elements', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('mapStateToProps', () => {
      it('should return an object with palettes and hexcodes as keys', () => {
        const mockState = {
          palettes: [],
          extra: '',
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
      it('should call dispatch when setHexcodes is called', () => {
        const mockDispatch = jest.fn()
        const actionToDispatch = setHexcodes();
        const mappedProps = mapDispatchToProps(mockDispatch)
        mappedProps.setHexcodes()
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });
    });
});