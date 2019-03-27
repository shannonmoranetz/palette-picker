import React from 'react';
import { shallow } from 'enzyme';
import { ColorCard, mapStateToProps, mapDispatchToProps } from './ColorCard';
import { setLockedHexcodes, removeLockedHexcode } from '../../actions';

describe('ColorCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorCard/>
      )
    });
    
  describe('ColorCard component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with lockedHexcodes', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: '',
        lockedHexcodes: []
      }
      const expected = {
        lockedHexcodes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });

    // **test toggleColorLock method here**
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setLockedHexcodes is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setLockedHexcodes();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setLockedHexcodes()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch when removeLockedHexcode is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = removeLockedHexcode();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeLockedHexcode()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});