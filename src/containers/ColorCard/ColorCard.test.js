import React from 'react';
import { shallow } from 'enzyme';
import { ColorCard, mapStateToProps, mapDispatchToProps } from './ColorCard';
import * as actions from '../../actions';
import { mockHexcodes } from '../../__fixtures__/mockData';

describe('ColorCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorCard hexcode={mockHexcodes}/>
      )
    });
    
  describe('ColorCard component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with hexcodes', () => {
      const mockState = {
        hexcodes: [],
        extra: ''
      }
      const expected = {
        hexcodes: []
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });

    // **test toggleColorLock method here**
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setLockedHexcodes is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.setHexcodes();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHexcodes()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});