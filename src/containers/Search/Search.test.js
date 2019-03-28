import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Search/>
      )
    });

  describe('Search component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});