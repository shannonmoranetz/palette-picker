import React from 'react';
import { shallow } from 'enzyme';
import { PaletteCard, mapStateToProps, mapDispatchToProps } from './PaletteCard';
import { mockPalettes } from '../../__fixtures__/mockData';
import { setHexcodes } from '../../actions/index';

describe('PaletteCard', () => {
  let wrapper;
  let mockSetHexcodes;
  beforeEach(() => {
    let hexcodes;
    wrapper = shallow(
      <PaletteCard 
        projectPalettes={mockPalettes} 
        setHexcodes={mockSetHexcodes} 
        palettes={mockPalettes} 
        hexcodes={
          {
            id: 1,
            project_id: 1,
            name: "Summer colors",
            color1: "FFFF82",
            color2: "DDDCF7",
            color3: "B5D99C",
            color4: "FFAF66",
            color5: "E65F5C",
            created_at: "2019-03-26T05:17:02.735Z",
            updated_at: "2019-03-26T05:17:02.735Z"
          }
        } 
      />
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